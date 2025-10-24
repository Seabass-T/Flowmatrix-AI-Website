import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface LandingPageHeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  onCTAClick: () => void;
  showBackButton?: boolean;
}

const LandingPageHero = ({
  headline,
  subheadline,
  ctaText,
  onCTAClick,
  showBackButton = true,
}: LandingPageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Minimal Navigation - Back to Home */}
      {showBackButton && (
        <div className="absolute top-4 left-4 z-10">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-interactive-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
          <span className="bg-primary bg-clip-text text-transparent">
            {headline}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          {subheadline}
        </p>

        {/* Primary CTA */}
        <div className="animate-scale-in">
          <Button
            onClick={onCTAClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-8 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
          >
            {ctaText}
            <Calendar className="ml-3 h-6 w-6" />
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            ✓ No credit card required ✓ 30-minute call ✓ Instant booking
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default LandingPageHero;
