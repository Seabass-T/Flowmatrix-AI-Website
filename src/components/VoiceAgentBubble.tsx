
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";

const VoiceAgentBubble = () => {
  const [isListening, setIsListening] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    // Here you would integrate with ElevenLabs or other voice AI service
    console.log(isListening ? "Stopping voice agent..." : "Starting voice agent...");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fade-in">
          <p className="text-sm text-gray-700 mb-3">
            Hi! I'm your AI assistant. Click the microphone to ask me anything about FlowMatrix AI's automation services.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(false)}
            className="text-xs"
          >
            Minimize
          </Button>
        </div>
      )}
      
      <div className="flex flex-col items-center space-y-2">
        <Button
          onClick={toggleListening}
          className={`w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
            isListening 
              ? "bg-red-500 hover:bg-red-600 animate-pulse" 
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          }`}
        >
          {isListening ? (
            <MicOff className="h-6 w-6 text-white" />
          ) : (
            <Mic className="h-6 w-6 text-white" />
          )}
        </Button>
        
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-xs text-gray-600 hover:text-gray-800 transition-colors"
          >
            AI Assistant
          </button>
        )}
      </div>
    </div>
  );
};

export default VoiceAgentBubble;
