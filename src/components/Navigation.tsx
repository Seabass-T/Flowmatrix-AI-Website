
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActiveRoute = (path: string) => location.pathname === path;

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  // Scroll detection for sticky navigation background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/flowmatrixai-info/consultation-call',
        prefill: {},
        utm: {}
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white shadow-md border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-1">
              <img 
                src="/lovable-uploads/9b28d13a-dbf3-4c52-a9c5-6f2e7e9cab7f.png" 
                alt="FlowMatrix AI" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-primary">
                FlowMatrix AI
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/')
                  ? 'text-primary bg-gray-50 rounded-md'
                  : 'text-gray-700 hover:text-primary'
              }`}>
                Home
              </Link>
              <Link to="/pricing" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/pricing')
                  ? 'text-primary bg-gray-50 rounded-md'
                  : 'text-gray-700 hover:text-primary'
              }`}>
                Pricing
              </Link>
              <Link to="/solutions" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/solutions')
                  ? 'text-primary bg-gray-50 rounded-md'
                  : 'text-gray-700 hover:text-primary'
              }`}>
                Solutions
              </Link>
              <Link to="/results" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/results')
                  ? 'text-primary bg-gray-50 rounded-md'
                  : 'text-gray-700 hover:text-primary'
              }`}>
                Results
              </Link>
              <Link to="/about" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/about')
                  ? 'text-primary bg-gray-50 rounded-md'
                  : 'text-gray-700 hover:text-primary'
              }`}>
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => window.open('https://tally.so/r/wMBOXE', '_blank')}
              className="bg-primary hover:bg-primary/90 text-white transition-colors"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link to="/" className={`block px-3 py-2 text-base font-medium ${
              isActiveRoute('/')
                ? 'text-primary bg-gray-50 rounded-md'
                : 'text-gray-700 hover:text-primary'
            }`}>
              Home
            </Link>
            <Link to="/pricing" className={`block px-3 py-2 text-base font-medium ${
              isActiveRoute('/pricing')
                ? 'text-primary bg-gray-50 rounded-md'
                : 'text-gray-700 hover:text-primary'
            }`}>
              Pricing
            </Link>
            <Link to="/solutions" className={`block px-3 py-2 text-base font-medium ${
              isActiveRoute('/solutions')
                ? 'text-primary bg-gray-50 rounded-md'
                : 'text-gray-700 hover:text-primary'
            }`}>
              Solutions
            </Link>
            <Link to="/results" className={`block px-3 py-2 text-base font-medium ${
              isActiveRoute('/results')
                ? 'text-primary bg-gray-50 rounded-md'
                : 'text-gray-700 hover:text-primary'
            }`}>
              Results
            </Link>
            <Link to="/about" className={`block px-3 py-2 text-base font-medium ${
              isActiveRoute('/about')
                ? 'text-primary bg-gray-50 rounded-md'
                : 'text-gray-700 hover:text-primary'
            }`}>
              About
            </Link>
            <div className="px-3 py-2">
              <Button
                onClick={() => window.open('https://tally.so/r/wMBOXE', '_blank')}
                className="w-full bg-primary hover:bg-primary/90 text-white transition-colors"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
