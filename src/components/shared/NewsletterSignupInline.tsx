import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail } from "lucide-react";

const NewsletterSignupInline = () => {
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

      if (error) {
        toast({
          title: "Subscription Failed",
          description: "There was an issue processing your subscription. Please try again.",
          variant: "destructive",
        });
        return;
      }

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
            setEmail("");
          }
        } else {
          toast({
            title: "Subscription Issue",
            description: data.message || "There was an issue with your subscription.",
            variant: "destructive",
          });
        }
      } else {
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
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side - Icon and text */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Stay Updated</h3>
            <p className="text-sm text-gray-600">Get AI automation tips & industry insights</p>
          </div>
        </div>

        {/* Right side - Form */}
        <form onSubmit={handleSubmit} className="flex-shrink-0 w-full md:w-auto">
          <div className="flex gap-2">
            <Input
              id="inline-newsletter-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 md:w-64 bg-white"
              disabled={isSubmitting}
              autoComplete="email"
              aria-label="Email address for newsletter"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6"
            >
              {isSubmitting ? "..." : "Subscribe"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignupInline;
