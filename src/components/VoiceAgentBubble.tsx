
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";
import { useConversation } from "@11labs/react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const VoiceAgentBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to voice agent");
      toast({
        title: "Voice Agent Connected",
        description: "You can now speak with our AI assistant",
      });
    },
    onDisconnect: () => {
      console.log("Disconnected from voice agent");
      toast({
        title: "Voice Agent Disconnected",
        description: "Conversation ended",
      });
    },
    onError: (error) => {
      console.error("Voice agent error:", error);
      toast({
        title: "Voice Agent Error",
        description: "There was an issue with the voice connection",
        variant: "destructive",
      });
    },
    onMessage: (message) => {
      console.log("Voice message:", message);
    },
    overrides: {
      agent: {
        prompt: {
          prompt: `You are a helpful AI assistant for FlowMatrix AI, a company that specializes in AI automation services. 
          
          About FlowMatrix AI:
          - We help businesses automate their processes using AI technology
          - Our services include workflow automation, AI chatbots, data processing, and custom AI solutions
          - We work with small to medium businesses looking to streamline their operations
          - Our pricing is flexible and tailored to each client's needs
          - We offer consultation, implementation, and ongoing support
          
          Your role:
          - Be friendly, professional, and knowledgeable about AI automation
          - Help visitors understand how FlowMatrix AI can benefit their business
          - Answer questions about our services, pricing, and process
          - If someone wants to get started, direct them to contact us through the website
          - Keep responses concise but informative
          - Always maintain a helpful and solution-oriented tone`,
        },
        firstMessage: "Hi! I'm your AI assistant from FlowMatrix AI. I'm here to help you learn about our automation services and how we can help streamline your business processes. What would you like to know?",
        language: "en",
      },
      tts: {
        voiceId: "9BWtsMINqrJLrRacOk9x", // Aria voice
      },
    },
  });

  const requestMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
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

  const getSignedUrl = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('voice-agent', {
        body: { action: 'get_signed_url' }
      });

      if (error) throw error;
      return data.signed_url;
    } catch (error) {
      console.error("Failed to get signed URL:", error);
      toast({
        title: "Connection Error",
        description: "Failed to connect to voice agent",
        variant: "destructive",
      });
      return null;
    }
  };

  const toggleConversation = async () => {
    if (conversation.status === "connected") {
      await conversation.endSession();
    } else {
      const hasPermission = await requestMicrophonePermission();
      if (!hasPermission) return;

      if (!signedUrl) {
        const url = await getSignedUrl();
        if (!url) return;
        setSignedUrl(url);
      }

      try {
        await conversation.startSession({ agentId: signedUrl });
      } catch (error) {
        console.error("Failed to start conversation:", error);
        toast({
          title: "Connection Failed",
          description: "Could not start voice conversation",
          variant: "destructive",
        });
      }
    }
  };

  useEffect(() => {
    return () => {
      if (conversation.status === "connected") {
        conversation.endSession();
      }
    };
  }, [conversation]);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isExpanded && (
        <div className="mb-6 bg-voice-surface dark:bg-voice-surface backdrop-blur-lg rounded-2xl shadow-2xl p-6 max-w-sm animate-fade-in transform transition-all duration-500 scale-100 border border-voice-border/30">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-voice-gradient rounded-full flex items-center justify-center shadow-lg">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm mb-1">FlowMatrix AI Assistant</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Hi! I'm your AI automation specialist. Ask me about our services, pricing, or how we can streamline your business processes.
              </p>
            </div>
          </div>
          
          {conversation.status === "connected" && (
            <div className="mb-4 flex items-center gap-2 bg-voice-success/10 rounded-lg p-3">
              <div className="w-2 h-2 bg-voice-success rounded-full animate-pulse"></div>
              <span className="text-xs text-voice-success font-medium">Connected & Listening</span>
            </div>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(false)}
            className="text-xs hover:scale-105 transition-all duration-200 border-voice-border hover:border-voice-primary bg-white/50 dark:bg-white/5"
          >
            Minimize
          </Button>
        </div>
      )}
      
      <div className="flex flex-col items-center space-y-3">
        <div className="relative group">
          <Button
            onClick={toggleConversation}
            disabled={conversation.status === "connecting"}
            className={`relative w-16 h-16 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 border-0 overflow-hidden ${
              conversation.status === "connected"
                ? "bg-destructive hover:bg-destructive/90 shadow-destructive/50" 
                : conversation.status === "connecting"
                ? "bg-voice-warning shadow-voice-warning/50"
                : "bg-voice-gradient hover:bg-voice-gradient-hover shadow-voice-primary/50"
            }`}
          >
            {/* Gradient overlay for extra shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50"></div>
            
            {/* Pulsing ring when active */}
            {conversation.status === "connected" && (
              <div className="absolute -inset-2 rounded-full border-2 border-destructive/50 animate-ping"></div>
            )}
            
            {/* Icon */}
            <div className="relative z-10">
              {conversation.status === "connected" ? (
                <PhoneOff className="h-6 w-6 text-white animate-bounce" />
              ) : conversation.status === "connecting" ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Phone className="h-6 w-6 text-white transition-transform duration-200 group-hover:scale-110" />
              )}
            </div>
          </Button>
        </div>
        
        {/* Voice visualization */}
        {conversation.isSpeaking && (
          <div className="flex space-x-1 animate-float">
            <div className="w-1 h-3 bg-voice-primary rounded-full animate-pulse"></div>
            <div className="w-1 h-5 bg-voice-secondary rounded-full animate-pulse delay-75"></div>
            <div className="w-1 h-4 bg-voice-accent rounded-full animate-pulse delay-150"></div>
            <div className="w-1 h-6 bg-voice-primary rounded-full animate-pulse delay-300"></div>
            <div className="w-1 h-3 bg-voice-secondary rounded-full animate-pulse delay-150"></div>
          </div>
        )}
        
        {/* Status text */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-voice-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-voice-primary rounded-full animate-pulse-glow"></div>
              <span className="text-xs font-medium text-foreground group-hover:text-voice-primary transition-colors">
                AI Assistant
              </span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default VoiceAgentBubble;
