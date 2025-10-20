import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import TrustBadges from "@/components/shared/TrustBadges";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-gray-900 border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <TrustBadges />

        <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-1">
              <img 
                src="/lovable-uploads/9b28d13a-dbf3-4c52-a9c5-6f2e7e9cab7f.png" 
                alt="FlowMatrix AI" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-bold text-blue-600">
                FlowMatrix AI
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-md">
              Transform your business operations with intelligent automation. 
              Save time, reduce costs, and scale without the stress.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link 
                to="/pricing" 
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Pricing
              </Link>
              <Link 
                to="/use-cases" 
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Use Cases
              </Link>
              <Link 
                to="/about" 
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Email: info@flowmatrixai.com
              </p>
              <p className="text-muted-foreground text-sm">
                Schedule a consultation to get started
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FlowMatrix AI. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <nav className="flex space-x-6 mt-4 sm:mt-0">
            <Link 
              to="/terms" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/privacy" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;