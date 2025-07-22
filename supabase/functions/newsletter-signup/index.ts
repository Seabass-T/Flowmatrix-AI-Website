
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailSubmission {
  email: string;
  timestamp: string;
  source: string;
}

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
    const { email, n8nWebhookUrl } = await req.json();
    console.log("Received email submission:", email);

    // Validate email
    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate n8n webhook URL
    if (!n8nWebhookUrl) {
      return new Response(
        JSON.stringify({ error: "n8n webhook URL is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Prepare data for n8n
    const submissionData: EmailSubmission = {
      email: email,
      timestamp: new Date().toISOString(),
      source: "FlowMatrix AI Newsletter"
    };

    console.log("Sending to n8n webhook:", n8nWebhookUrl);

    // Send to n8n webhook
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    });

    if (!n8nResponse.ok) {
      console.error("n8n webhook failed:", n8nResponse.status, n8nResponse.statusText);
      return new Response(
        JSON.stringify({ 
          error: "Failed to process subscription",
          details: `n8n webhook returned ${n8nResponse.status}`
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const n8nResult = await n8nResponse.json();
    console.log("n8n webhook success:", n8nResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Successfully subscribed to newsletter!",
        data: submissionData
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in newsletter-signup function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process subscription. Please try again later.",
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
