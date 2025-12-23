import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/flowmatrix-logo.webp"
            alt="FlowMatrix AI"
            className="h-14 md:h-16 w-auto"
          />
        </div>

        {/* Contact */}
        <div className="text-center mb-6">
          <a
            href="mailto:info@flowmatrixai.com"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            info@flowmatrixai.com
          </a>
        </div>

        {/* Social */}
        <div className="flex justify-center mb-8">
          <a
            href="https://www.linkedin.com/company/flowmatrix-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <hr className="border-border mb-8" />

        {/* Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FlowMatrix AI</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
