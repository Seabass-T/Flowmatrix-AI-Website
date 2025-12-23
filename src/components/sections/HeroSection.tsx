import { ChevronDown } from 'lucide-react';
import { VideoBackground } from '@/components/ui/VideoBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { COPY } from '@/lib/constants';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <VideoBackground
        src="/videos/hero-awakening.mp4"
        fallback="/images/hero-fallback.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Gradient Overlay (subtle, for text readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Watermark Cover - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-32 h-20 bg-black z-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight animate-fade-in">
          {COPY.hero.headline}
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-white/80 max-w-2xl animate-slide-up">
          {COPY.hero.subheadline}
        </p>
        <MagneticButton
          className="mt-10 animate-scale-in"
          onClick={() => scrollToSection('start')}
        >
          {COPY.hero.cta}
        </MagneticButton>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
