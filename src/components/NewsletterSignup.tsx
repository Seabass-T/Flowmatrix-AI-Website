
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const NewsletterSignup = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('newsletter-signup', {
        body: {
          email: email,
          n8nWebhookUrl: "https://seabass34.app.n8n.cloud/webhook/9245414e-3af7-40f8-98ab-cd50d44750b5"
        }
      });

      console.log("Edge function response:", { data, error });

      if (error) {
        console.error('Edge function error:', error);
        toast({
          title: "Subscription Failed",
          description: "There was an issue processing your subscription. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Handle the response from the edge function
      if (data) {
        if (data.success) {
          if (data.duplicate) {
            toast({
              title: "Already Subscribed",
              description: data.message || "This email is already subscribed to our newsletter.",
            });
          } else {
            toast({
              title: "Successfully Subscribed!",
              description: data.message || "Thank you for subscribing to our newsletter.",
            });
            // Reset form only on new successful subscription
            setEmail("");
          }
        } else {
          // Only show error if explicitly marked as error
          toast({
            title: "Subscription Issue",
            description: data.message || "There was an issue with your subscription.",
            variant: "destructive",
          });
        }
      } else {
        // If no data returned, assume success (for backwards compatibility)
        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setEmail("");
      }

    } catch (error: any) {
      console.error('Unexpected error submitting newsletter signup:', error);
      toast({
        title: "Subscription Failed",
        description: "An unexpected error occurred. Please try again later.",
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
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white h-12"
            disabled={isSubmitting}
            autoComplete="email"
            aria-label="Email address for newsletter"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-xl h-12"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        
      </form>
      
      <p className="text-base text-gray-600 mt-6 font-medium text-center">
        Join 1,000+ AI enthusiasts staying ahead of the curve
      </p>
    </div>
  );
};

export default NewsletterSignup;
