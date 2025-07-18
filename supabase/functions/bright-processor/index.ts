import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  console.log("bright-processor: Request received", req.method, req.url);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("bright-processor: Handling CORS preflight");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { headers } = req;
    const upgradeHeader = headers.get("upgrade") || "";

    console.log("bright-processor: Upgrade header:", upgradeHeader);

    if (upgradeHeader.toLowerCase() !== "websocket") {
      console.log("bright-processor: Not a WebSocket request");
      return new Response("Expected WebSocket connection", { 
        status: 400,
        headers: corsHeaders 
      });
    }

    console.log("bright-processor: Upgrading to WebSocket");
    const { socket, response } = Deno.upgradeWebSocket(req);

    // Keep track of connection state
    let isConnected = false;
    let heartbeatInterval: number;

    socket.onopen = () => {
      console.log("bright-processor: WebSocket connection established");
      isConnected = true;
      
      try {
        // Send welcome message immediately
        socket.send(JSON.stringify({
          type: "text_response",
          text: "Hello! I'm Neo, your AI assistant. I'm ready to help you with automation and business processes. How can I assist you today?"
        }));
        console.log("bright-processor: Welcome message sent");

        // Start heartbeat to keep connection alive
        heartbeatInterval = setInterval(() => {
          if (isConnected && socket.readyState === WebSocket.OPEN) {
            try {
              socket.send(JSON.stringify({
                type: "ping"
              }));
              console.log("bright-processor: Heartbeat ping sent");
            } catch (error) {
              console.error("bright-processor: Heartbeat failed:", error);
              clearInterval(heartbeatInterval);
            }
          } else {
            console.log("bright-processor: Clearing heartbeat - connection not ready");
            clearInterval(heartbeatInterval);
          }
        }, 30000); // Send ping every 30 seconds
      } catch (error) {
        console.error("bright-processor: Error in onopen handler:", error);
      }
    };

    socket.onmessage = async (event) => {
      try {
        console.log("bright-processor: Received message:", event.data);
        const data = JSON.parse(event.data);

        if (data.type === "user_message") {
          // Handle user text message
          const userContent = data.message?.content || data.message;
          console.log("bright-processor: Processing user message:", userContent);
          
          // For now, provide helpful responses based on content
          let responseText = "";
          const lowerContent = userContent.toLowerCase();
          
          if (lowerContent.includes("hello") || lowerContent.includes("hi")) {
            responseText = "Hello! I'm Neo, your AI automation specialist. I can help you streamline your business processes, discuss pricing, or answer questions about our services. What would you like to know?";
          } else if (lowerContent.includes("pricing") || lowerContent.includes("cost")) {
            responseText = "Our automation services are tailored to your specific needs. We offer flexible pricing models including one-time project fees and ongoing maintenance plans. Would you like me to connect you with our sales team for a custom quote?";
          } else if (lowerContent.includes("automation") || lowerContent.includes("process")) {
            responseText = "We specialize in business process automation including workflow optimization, data integration, custom software solutions, and AI implementation. Which area of your business are you looking to automate?";
          } else {
            responseText = `I understand you're asking about: "${userContent}". As your AI automation specialist, I'm here to help with business process optimization, workflow automation, and digital transformation. Could you tell me more about your specific automation needs?`;
          }

          if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({
              type: "text_response",
              text: responseText
            }));
            console.log("bright-processor: Response sent");
          } else {
            console.log("bright-processor: Socket not ready, cannot send response");
          }
        } else if (data.type === "audio_input") {
          // Handle audio input
          console.log("bright-processor: Received audio input, processing...");
          if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({
              type: "text_response",
              text: "I received your audio message. Audio processing is currently being enhanced. For now, please use text messages and I'll be happy to help!"
            }));
          }
        } else if (data.type === "pong") {
          // Handle pong response
          console.log("bright-processor: Received pong");
        } else {
          console.log("bright-processor: Unknown message type:", data.type);
        }
      } catch (error) {
        console.error("bright-processor: Error processing message:", error);
        if (isConnected && socket.readyState === WebSocket.OPEN) {
          try {
            socket.send(JSON.stringify({
              type: "error",
              message: "I'm sorry, I had trouble processing your message. Could you please try again?"
            }));
          } catch (sendError) {
            console.error("bright-processor: Error sending error message:", sendError);
          }
        }
      }
    };

    socket.onclose = (event) => {
      console.log("bright-processor: WebSocket connection closed", event.code, event.reason);
      isConnected = false;
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
      }
    };

    socket.onerror = (error) => {
      console.error("bright-processor: WebSocket error:", error);
      isConnected = false;
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
      }
    };

    console.log("bright-processor: Returning WebSocket response");
    return response;

  } catch (error) {
    console.error("bright-processor: Handler error:", error);
    return new Response(JSON.stringify({ 
      error: "Internal server error",
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
};

console.log("bright-processor: Starting server");
serve(handler);
