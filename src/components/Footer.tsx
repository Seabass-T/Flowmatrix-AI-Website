import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-2xl font-bold text-primary">
                FlowMatrix AI
              </span>
            </Link>
            <p className="text-gray-600 mt-4 max-w-md">
              Transform your business operations with intelligent automation.
              Save time, reduce costs, and scale without the stress.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link
                to="/pricing"
                className="block text-gray-600 hover:text-primary transition-colors text-sm"
              >
                Pricing
              </Link>
              <Link
                to="/solutions"
                className="block text-gray-600 hover:text-primary transition-colors text-sm"
              >
                Solutions
              </Link>
              <Link
                to="/about"
                className="block text-gray-600 hover:text-primary transition-colors text-sm"
              >
                About
              </Link>
              <Link
                to="/newsletter"
                className="block text-gray-600 hover:text-primary transition-colors text-sm"
              >
                Newsletter
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@flowmatrixai.com"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium inline-block"
              >
                Reach Out
              </a>
              <p className="text-gray-600 text-sm">
                Schedule a consultation to get started
              </p>
            </div>
          </div>
        </div>

        {/* TODO: Phase 3 - Add NewsletterSignupInline component here (PRD Section 6.4) */}

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} FlowMatrix AI. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <nav className="flex space-x-6 mt-4 sm:mt-0">
            <Link 
              to="/terms" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/privacy" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
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