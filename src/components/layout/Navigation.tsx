import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/flowmatrix-logo.webp"
              alt="FlowMatrix AI"
              className="h-10 md:h-12 w-auto"
              width={160}
              height={40}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white/70 hover:text-white transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick('/#start')}
            className="hidden md:block px-5 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Get Started
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 flex flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-2xl text-white/80 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('/#start')}
            className="mt-4 px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
