import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Gift } from 'lucide-react';
import { captureEmail } from '@/lib/templates';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await captureEmail(
        email,
        'footer-newsletter',
        window.location.href
      );

      if (!success) {
        setError('Something went wrong. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Email capture error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column: Logo, Email, Address */}
          <div className="text-center md:text-left">
            <img
              src="/flowmatrix-logo.webp"
              alt="FlowMatrix AI"
              className="h-16 md:h-20 w-auto mb-4 mx-auto md:mx-0"
            />
            <a
              href="mailto:info@flowmatrixai.com"
              className="block text-muted-foreground hover:text-white transition-colors mb-2"
            >
              info@flowmatrixai.com
            </a>
            <address className="text-muted-foreground not-italic text-sm leading-relaxed">
              13 Thatcher St.<br />
              Boston, MA 02113
            </address>
          </div>

          {/* Middle Column: LinkedIn & Free Resources */}
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/flowmatrix-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">Follow Us</span>
            </a>
            <Link
              to="/free"
              className="inline-flex items-center gap-2 px-4 py-2 border border-accent/30 hover:border-accent/50 text-accent hover:text-accent/90 rounded-lg transition-colors"
            >
              <Gift className="w-4 h-4" />
              <span className="text-sm">Free Resources</span>
            </Link>
          </div>

          {/* Right Column: Email Signup */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-2 text-sm">Stay Updated</h3>
            <p className="text-muted-foreground text-xs mb-4">Get AI insights & resources</p>

            {showSuccess ? (
              <div className="flex items-center justify-center md:justify-end text-accent text-sm animate-fadeIn">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Thanks for subscribing!
              </div>
            ) : (
              <div className="flex justify-center md:justify-end">
                <form onSubmit={handleSubmit} className="space-y-2 w-full max-w-[66%]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 bg-accent/90 hover:bg-accent text-black text-sm font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                  {error && (
                    <p className="text-red-400 text-xs">{error}</p>
                  )}
                  <p className="text-white/30 text-xs">Optional. Unsubscribe anytime.</p>
                </form>
              </div>
            )}
          </div>
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
