
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-1">
              <img 
                src="/lovable-uploads/9b28d13a-dbf3-4c52-a9c5-6f2e7e9cab7f.png" 
                alt="FlowMatrix AI" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FlowMatrix AI
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/') 
                  ? 'text-blue-600 bg-blue-50 rounded-md' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Home
              </Link>
              <Link to="/pricing" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/pricing') 
                  ? 'text-blue-600 bg-blue-50 rounded-md' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Pricing
              </Link>
              <Link to="/use-cases" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/use-cases') 
                  ? 'text-blue-600 bg-blue-50 rounded-md' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Use Cases
              </Link>
              <Link to="/about" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/about') 
                  ? 'text-blue-600 bg-blue-50 rounded-md' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                About
              </Link>
              <Link to="/contact" className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActiveRoute('/contact') 
                  ? 'text-blue-600 bg-blue-50 rounded-md' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}>
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Book Discovery Call
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
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
                ? 'text-blue-600 bg-blue-50 rounded-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Home
            </Link>
            <Link to="/pricing" className={`block px-3 py-2 text-base font-medium ${
              isActiveRoute('/pricing') 
                ? 'text-blue-600 bg-blue-50 rounded-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Pricing
            </Link>
            <Link to="/use-cases" className={`block px-3 py-2 text-base font-medium ${
              isActiveRoute('/use-cases') 
                ? 'text-blue-600 bg-blue-50 rounded-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Use Cases
            </Link>
            <Link to="/about" className={`block px-3 py-2 text-base font-medium ${
              isActiveRoute('/about') 
                ? 'text-blue-600 bg-blue-50 rounded-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              About
            </Link>
            <Link to="/contact" className={`block px-3 py-2 text-base font-medium ${
              isActiveRoute('/contact') 
                ? 'text-blue-600 bg-blue-50 rounded-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Book Discovery Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
