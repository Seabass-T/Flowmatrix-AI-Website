
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const NewsletterSignup = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [n8nWebhookUrl, setN8nWebhookUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWebhookConfig, setShowWebhookConfig] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Missing Information",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!n8nWebhookUrl) {
      toast({
        title: "Missing n8n Webhook",
        description: "Please enter your n8n webhook URL.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('newsletter-signup', {
        body: {
          email: email,
          n8nWebhookUrl: n8nWebhookUrl
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. Your email has been sent to n8n for processing.",
      });

      // Reset form
      setEmail("");

    } catch (error: any) {
      console.error('Error submitting newsletter signup:', error);
      toast({
        title: "Subscription Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 border-2 border-gray-200 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-500 font-medium"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl h-auto"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">n8n Configuration</Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setShowWebhookConfig(!showWebhookConfig)}
            >
              {showWebhookConfig ? "Hide" : "Configure"}
            </Button>
          </div>
          
          {showWebhookConfig && (
            <div className="space-y-2">
              <Label htmlFor="webhook-url" className="text-sm">n8n Webhook URL</Label>
              <Input
                id="webhook-url"
                type="url"
                placeholder="https://your-n8n-instance.com/webhook/your-webhook-id"
                value={n8nWebhookUrl}
                onChange={(e) => setN8nWebhookUrl(e.target.value)}
                className="text-sm"
              />
              <p className="text-xs text-gray-500">
                Enter your n8n webhook URL to automatically send new subscribers to your workflow.
              </p>
            </div>
          )}
        </div>
      </form>
      
      <p className="text-base text-gray-600 mt-6 font-medium text-center">
        Join 1,000+ AI enthusiasts staying ahead of the curve
      </p>
    </div>
  );
};

export default NewsletterSignup;
