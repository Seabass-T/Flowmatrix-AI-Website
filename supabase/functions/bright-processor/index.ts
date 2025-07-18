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

    // Keep track of connection state and audio buffer
    let isConnected = false;
    let heartbeatInterval: number;
    let audioBuffer: string[] = [];
    let isProcessingAudio = false;
    let conversationHistory: Array<{role: string, content: string}> = [
      {
        role: "system",
        content: "You are Neo, an AI automation specialist assistant. You help with business process automation, workflow optimization, and digital transformation. Keep responses conversational and helpful. When users ask about pricing or services, be informative about automation solutions."
      }
    ];

    // Function to transcribe audio using OpenAI Whisper
    const transcribeAudio = async (audioBase64: string): Promise<string | null> => {
      try {
        console.log("bright-processor: Starting audio transcription");
        
        // Convert base64 to binary
        const binaryString = atob(audioBase64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        // Create form data for Whisper API
        const formData = new FormData();
        const audioBlob = new Blob([bytes], { type: 'audio/webm' });
        formData.append('file', audioBlob, 'audio.webm');
        formData.append('model', 'whisper-1');
        formData.append('language', 'en');

        const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
        if (!openaiApiKey) {
          console.error("bright-processor: OpenAI API key not found");
          return null;
        }

        const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
          },
          body: formData,
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("bright-processor: Whisper API error:", response.status, errorText);
          return null;
        }

        const result = await response.json();
        console.log("bright-processor: Transcription result:", result.text);
        return result.text || null;
      } catch (error) {
        console.error("bright-processor: Transcription error:", error);
        return null;
      }
    };

    // Function to get AI response using OpenAI Chat API
    const getAIResponse = async (userMessage: string): Promise<string> => {
      try {
        console.log("bright-processor: Getting AI response for:", userMessage);
        
        // Add user message to conversation history
        conversationHistory.push({ role: "user", content: userMessage });

        const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
        if (!openaiApiKey) {
          console.error("bright-processor: OpenAI API key not found");
          return "I'm sorry, I'm having trouble accessing my AI capabilities right now.";
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: conversationHistory,
            max_tokens: 500,
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("bright-processor: Chat API error:", response.status, errorText);
          return "I apologize, I'm having trouble generating a response right now. Please try again.";
        }

        const result = await response.json();
        const aiResponse = result.choices[0]?.message?.content || "I'm sorry, I didn't understand that.";
        
        // Add AI response to conversation history
        conversationHistory.push({ role: "assistant", content: aiResponse });
        
        // Keep conversation history manageable (last 10 messages)
        if (conversationHistory.length > 11) { // 1 system + 10 messages
          conversationHistory = [
            conversationHistory[0], // Keep system message
            ...conversationHistory.slice(-10) // Keep last 10 messages
          ];
        }

        console.log("bright-processor: AI response generated:", aiResponse);
        return aiResponse;
      } catch (error) {
        console.error("bright-processor: AI response error:", error);
        return "I'm sorry, I encountered an error while processing your request. Please try again.";
      }
    };

    socket.onopen = () => {
      console.log("bright-processor: WebSocket connection established");
      isConnected = true;
      
      try {
        // Send welcome message immediately
        socket.send(JSON.stringify({
          type: "text_response",
          text: "Hello! I'm Neo, your AI automation specialist. I'm ready to help you with business process automation and workflow optimization. How can I assist you today?"
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
          console.log("bright-processor: Processing user text message:", userContent);
          
          const aiResponse = await getAIResponse(userContent);

          if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({
              type: "text_response",
              text: aiResponse
            }));
            console.log("bright-processor: AI response sent");
          }
        } else if (data.type === "audio_input") {
          // Handle audio input - buffer the audio data
          if (data.data && !isProcessingAudio) {
            console.log("bright-processor: Received audio chunk, buffering...");
            audioBuffer.push(data.data);
            
            // Process audio buffer after a short delay (allows for more chunks)
            setTimeout(async () => {
              if (audioBuffer.length > 0 && !isProcessingAudio) {
                isProcessingAudio = true;
                console.log("bright-processor: Processing buffered audio chunks:", audioBuffer.length);
                
                // Combine all buffered audio chunks
                const combinedAudio = audioBuffer.join('');
                audioBuffer = []; // Clear buffer
                
                // Transcribe the audio
                const transcription = await transcribeAudio(combinedAudio);
                
                if (transcription && transcription.trim().length > 0) {
                  console.log("bright-processor: Audio transcribed:", transcription);
                  
                  // Send transcription back to user for confirmation
                  if (socket.readyState === WebSocket.OPEN) {
                    socket.send(JSON.stringify({
                      type: "transcription",
                      text: transcription
                    }));
                  }
                  
                  // Get AI response to the transcribed text
                  const aiResponse = await getAIResponse(transcription);
                  
                  if (socket.readyState === WebSocket.OPEN) {
                    socket.send(JSON.stringify({
                      type: "text_response",
                      text: aiResponse
                    }));
                  }
                } else {
                  console.log("bright-processor: No transcription received or empty");
                  if (socket.readyState === WebSocket.OPEN) {
                    socket.send(JSON.stringify({
                      type: "text_response",
                      text: "I didn't quite catch that. Could you please repeat your question?"
                    }));
                  }
                }
                
                isProcessingAudio = false;
              }
            }, 1500); // Wait 1.5 seconds for more audio chunks
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
      // Clear any remaining audio buffer
      audioBuffer = [];
      isProcessingAudio = false;
    };

    socket.onerror = (error) => {
      console.error("bright-processor: WebSocket error:", error);
      isConnected = false;
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
      }
      // Clear any remaining audio buffer
      audioBuffer = [];
      isProcessingAudio = false;
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
