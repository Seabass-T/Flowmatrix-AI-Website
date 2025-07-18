
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VoiceAgentBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<string>('');
  
  const wsRef = useRef<WebSocket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const { toast } = useToast();

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    return () => {
      cleanup();
    };
  }, []);

  const cleanup = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    setIsConnected(false);
    setIsConnecting(false);
    setIsListening(false);
    setConnectionStatus('');
  };

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        }
      });
      streamRef.current = stream;
      return true;
    } catch (error) {
      console.error("Microphone permission denied:", error);
      toast({
        title: "Microphone Access Required",
        description: "Please allow microphone access to use the voice agent",
        variant: "destructive",
      });
      return false;
    }
  };

  const startRecording = () => {
    if (!streamRef.current) return;

    const mediaRecorder = new MediaRecorder(streamRef.current, {
      mimeType: 'audio/webm;codecs=opus'
    });
    
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0 && wsRef.current?.readyState === WebSocket.OPEN) {
        // Convert audio blob to base64 and send
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result?.toString().split(',')[1];
          if (base64) {
            wsRef.current?.send(JSON.stringify({
              type: 'audio_input',
              data: base64
            }));
          }
        };
        reader.readAsDataURL(event.data);
      }
    };

    mediaRecorder.start(100); // Send chunks every 100ms
    setIsListening(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsListening(false);
    }
  };

  const speakText = (text: string) => {
    if (!synthRef.current) return;

    // Cancel any ongoing speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 0.8;

    // Try to use a good voice
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.name.includes('Natural') || 
      voice.name.includes('Enhanced') ||
      voice.lang.startsWith('en')
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      // Resume recording after speech ends
      if (isConnected && !isListening) {
        setTimeout(() => {
          startRecording();
        }, 500);
      }
    };
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  };

  const connectToVoiceAgent = async () => {
    if (isConnected || isConnecting) return;

    setIsConnecting(true);
    setConnectionStatus('Requesting microphone access...');

    try {
      // Request microphone permission first
      const hasPermission = await requestMicrophonePermission();
      if (!hasPermission) {
        setIsConnecting(false);
        setConnectionStatus('');
        return;
      }

      setConnectionStatus('Connecting to AI assistant...');

      // Connect to WebSocket
      const ws = new WebSocket('wss://njmzznceiykpybpuabgs.supabase.co/functions/v1/bright-processor');
      wsRef.current = ws;

      // Set connection timeout
      const connectionTimeout = setTimeout(() => {
        if (!isConnected) {
          console.log('Connection timeout');
          ws.close();
          setIsConnecting(false);
          setConnectionStatus('');
          toast({
            title: "Connection Timeout",
            description: "Failed to connect to voice agent. Please try again.",
            variant: "destructive",
          });
        }
      }, 10000); // 10 second timeout

      ws.onopen = () => {
        console.log("Connected to voice agent");
        clearTimeout(connectionTimeout);
        setIsConnected(true);
        setIsConnecting(false);
        setConnectionStatus('Connected');
        
        // Send initial message to start conversation
        ws.send(JSON.stringify({
          type: 'user_message',
          message: {
            role: 'user',
            content: 'Hello, I would like to start a voice conversation.'
          }
        }));

        toast({
          title: "Voice Agent Connected",
          description: "Neo is ready to assist you!",
        });

        // Start recording after a brief delay
        setTimeout(() => {
          if (isConnected) {
            startRecording();
          }
        }, 1000);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log("Received message:", data);

          if (data.type === 'text_response' && data.text) {
            // Stop recording while speaking
            stopRecording();
            speakText(data.text);
          } else if (data.type === 'ping') {
            // Respond to ping with pong
            ws.send(JSON.stringify({ type: 'pong' }));
          } else if (data.type === 'error') {
            console.error('Server error:', data.message);
            toast({
              title: "Assistant Error",
              description: data.message || "The assistant encountered an error",
              variant: "destructive",
            });
          }
        } catch (error) {
          console.error("Error parsing WebSocket message:", error);
        }
      };

      ws.onclose = (event) => {
        console.log("Disconnected from voice agent", event.code, event.reason);
        clearTimeout(connectionTimeout);
        cleanup();
        
        // Don't show disconnect message if user initiated the disconnect
        if (event.code !== 1000) {
          toast({
            title: "Voice Agent Disconnected",
            description: "Connection lost. You can reconnect anytime.",
          });
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        clearTimeout(connectionTimeout);
        cleanup();
        toast({
          title: "Connection Error",
          description: "Failed to connect to voice agent. Please check your internet connection.",
          variant: "destructive",
        });
      };

    } catch (error) {
      console.error("Failed to connect:", error);
      setIsConnecting(false);
      setConnectionStatus('');
      toast({
        title: "Connection Failed",
        description: "Could not connect to voice agent",
        variant: "destructive",
      });
    }
  };

  const disconnectFromVoiceAgent = () => {
    cleanup();
    toast({
      title: "Voice Agent Disconnected",
      description: "Conversation ended successfully",
    });
  };

  const toggleConversation = () => {
    if (isConnected) {
      disconnectFromVoiceAgent();
    } else {
      connectToVoiceAgent();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 max-w-sm animate-fade-in transform transition-all duration-500 scale-100 border-2 border-gray-900/20 dark:border-white/20 ring-1 ring-black/5">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-voice-gradient rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Neo - AI Assistant</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi! I'm Neo, your AI automation specialist. Ask me about our services, pricing, or how we can streamline your business processes.
              </p>
            </div>
          </div>
          
          {(isConnected || isConnecting) && (
            <div className={`mb-4 flex items-center gap-2 rounded-lg p-3 border ${
              isConnected 
                ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
                : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
            }`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                isConnected ? 'bg-emerald-500' : 'bg-amber-500'
              }`}></div>
              <span className={`text-xs font-medium ${
                isConnected 
                  ? 'text-emerald-700 dark:text-emerald-300'
                  : 'text-amber-700 dark:text-amber-300'
              }`}>
                {connectionStatus || (isListening ? "Listening..." : isSpeaking ? "Speaking..." : "Connected")}
              </span>
            </div>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(false)}
            className="text-xs hover:scale-105 transition-all duration-200 border-2 border-gray-300 dark:border-gray-600 hover:border-voice-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            Minimize
          </Button>
        </div>
      )}
      
      <div className="flex flex-col items-center space-y-3">
        <div className="relative group">
          <Button
            onClick={toggleConversation}
            disabled={isConnecting}
            className={`relative w-16 h-16 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 border-2 border-white/80 dark:border-gray-900/80 overflow-hidden ring-2 ring-black/20 dark:ring-white/20 ${
              isConnected
                ? "bg-red-500 hover:bg-red-600 shadow-red-500/50" 
                : isConnecting
                ? "bg-amber-500 hover:bg-amber-600 shadow-amber-500/50"
                : "bg-voice-gradient hover:bg-voice-gradient-hover shadow-voice-primary/50"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-70"></div>
            
            {isConnected && (
              <div className="absolute -inset-3 rounded-full border-2 border-red-400/60 animate-ping"></div>
            )}
            
            <div className="relative z-10">
              {isConnected ? (
                <PhoneOff className="h-6 w-6 text-white animate-bounce" />
              ) : isConnecting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Phone className="h-6 w-6 text-white transition-transform duration-200 group-hover:scale-110" />
              )}
            </div>
          </Button>
        </div>
        
        {(isSpeaking || isListening) && (
          <div className="flex space-x-1 animate-float">
            <div className="w-1 h-3 bg-voice-primary rounded-full animate-pulse border border-black/20"></div>
            <div className="w-1 h-5 bg-voice-secondary rounded-full animate-pulse delay-75 border border-black/20"></div>
            <div className="w-1 h-4 bg-voice-accent rounded-full animate-pulse delay-150 border border-black/20"></div>
            <div className="w-1 h-6 bg-voice-primary rounded-full animate-pulse delay-300 border border-black/20"></div>
            <div className="w-1 h-3 bg-voice-secondary rounded-full animate-pulse delay-150 border border-black/20"></div>
          </div>
        )}
        
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="group relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-gray-900/30 dark:border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ring-1 ring-black/10"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-voice-primary rounded-full animate-pulse-glow border border-black/20"></div>
              <span className="text-xs font-medium text-gray-900 dark:text-white group-hover:text-voice-primary transition-colors">
                Neo
              </span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default VoiceAgentBubble;
