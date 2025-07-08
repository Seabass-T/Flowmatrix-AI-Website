
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
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-xs animate-fade-in transform transition-all duration-300 scale-100 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            Hi! I'm your AI assistant for FlowMatrix AI. Click the microphone to ask me anything about our automation services.
          </p>
          {conversation.status === "connected" && (
            <div className="mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 dark:text-green-400">Connected</span>
            </div>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(false)}
            className="text-xs hover:scale-105 transition-transform duration-200"
          >
            Minimize
          </Button>
        </div>
      )}
      
      <div className="flex flex-col items-center space-y-2">
        <Button
          onClick={toggleConversation}
          disabled={conversation.status === "connecting"}
          className={`w-16 h-16 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 ${
            conversation.status === "connected"
              ? "bg-red-500 hover:bg-red-600 animate-pulse shadow-red-500/50" 
              : conversation.status === "connecting"
              ? "bg-yellow-500 hover:bg-yellow-600 shadow-yellow-500/50"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-blue-500/30"
          }`}
        >
          {conversation.status === "connected" ? (
            <PhoneOff className="h-6 w-6 text-white animate-bounce" />
          ) : conversation.status === "connecting" ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Phone className="h-6 w-6 text-white transition-transform duration-200 hover:scale-110" />
          )}
        </Button>
        
        {conversation.isSpeaking && (
          <div className="flex space-x-1">
            <div className="w-1 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-1 h-6 bg-blue-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-1 h-4 bg-blue-500 rounded-full animate-pulse delay-150"></div>
          </div>
        )}
        
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-200 hover:scale-105 font-medium"
          >
            Voice Assistant
          </button>
        )}
      </div>
    </div>
  );
};

export default VoiceAgentBubble;
