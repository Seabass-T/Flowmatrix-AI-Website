import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    const { action } = await req.json();
    
    console.log("Voice agent function called with action:", action);
    
    if (action === "get_signed_url") {
      // Get signed URL for voice conversation
      const agentId = "agent_01jzncajj5ek6rfkmntj8rhtwm"; // Your ElevenLabs agent ID
      const apiKey = Deno.env.get("ELEVENLABS_API_KEY");
      
      console.log("Agent ID:", agentId);
      console.log("Has API key:", !!apiKey);
      
      const response = await fetch(
        `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
        {
          method: "GET",
          headers: {
            "xi-api-key": apiKey!,
          },
        }
      );

      console.log("ElevenLabs API response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("ElevenLabs API error:", errorText);
        throw new Error(`Failed to get signed URL from ElevenLabs: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("Got signed URL successfully");
      
      return new Response(
        JSON.stringify({ signed_url: data.signed_url }),
        {
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in voice-agent function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);