import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Logo + email */}
          <div>
            <img
              src="/flowmatrix-logo.webp"
              alt="FlowMatrix AI"
              className="h-14 w-auto mb-3"
            />
            <a
              href="mailto:info@flowmatrixai.com"
              className="text-white/40 hover:text-white/70 transition-colors text-sm"
            >
              info@flowmatrixai.com
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/flowmatrix-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Link
              to="/free"
              className="text-white/40 hover:text-white/70 transition-colors text-sm"
            >
              Free Resources
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} FlowMatrix AI. North America.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link to="/terms" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
