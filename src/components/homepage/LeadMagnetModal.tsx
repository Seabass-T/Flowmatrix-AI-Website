import { useState, useEffect } from "react";
import { X, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadMagnetModal = ({ isOpen, onClose }: LeadMagnetModalProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    localStorage.setItem("leadMagnetSeen", "true");
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("newsletter-signup", {
        body: {
          email: email,
          n8nWebhookUrl: "https://seabass34.app.n8n.cloud/webhook/9245414e-3af7-40f8-98ab-cd50d44750b5",
          leadMagnet: true, // Flag to indicate this is from lead magnet
        },
      });

      if (error) {
        console.error("Edge function error:", error);
        toast({
          title: "Submission Failed",
          description: "There was an issue processing your request. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data) {
        if (data.success) {
          setIsSuccess(true);
          toast({
            title: "Success!",
            description: "Check your email for the download link.",
          });
        } else {
          toast({
            title: "Submission Issue",
            description: data.message || "There was an issue with your submission.",
            variant: "destructive",
          });
        }
      } else {
        // Assume success if no error
        setIsSuccess(true);
        toast({
          title: "Success!",
          description: "Check your email for the download link.",
        });
      }
    } catch (error: any) {
      console.error("Unexpected error submitting lead magnet:", error);
      toast({
        title: "Submission Failed",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div
        className="relative bg-white dark:bg-gray-800 rounded-l-2xl shadow-2xl max-w-md w-full m-4 p-8 animate-in slide-in-from-right duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSuccess ? (
          <>
            {/* Content */}
            <div className="mb-6">
              <div className="mb-4">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  FREE GUIDE
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                4 Automation Wins for Field Teams
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                See how construction & home service companies save 20+ hours/week
              </p>

              {/* What's Inside */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  What's Inside:
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Email Intelligence: Auto-prioritize urgent emails</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dispatch Optimization: Route techs for max efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Invoice Acceleration: Generate & send invoices instantly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customer Follow-up: Automate renewal reminders</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="lead-magnet-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  disabled={isSubmitting}
                  required
                  autoComplete="email"
                  aria-label="Email address for lead magnet download"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold h-12"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Download Free Guide
                    <Download className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                We'll also send you weekly automation tips. Unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Check Your Email!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We've sent the guide to <span className="font-semibold">{email}</span>
              </p>

              {/* Direct Download Link */}
              <a
                href="/pdfs/automation-wins-field-teams.pdf"
                download
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Download PDF Now
                <Download className="ml-2 w-4 h-4" />
              </a>

              <button
                onClick={handleClose}
                className="mt-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadMagnetModal;
