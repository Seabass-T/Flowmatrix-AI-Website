
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
          n8nWebhookUrl: "https://seabass34.app.n8n.cloud/webhook/ea24ac13-b77b-4d19-9857-7888267d70e8"
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
            className="flex-1 bg-white h-12"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 rounded-xl h-12"
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
