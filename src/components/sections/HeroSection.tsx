import { useEffect, useState, useRef } from 'react';
import { COPY } from '@/lib/constants';
import { GlowOrb } from '@/components/ui/VisualEffects';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Staggered entrance
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Subtle parallax on mouse move
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      container.style.setProperty('--parallax-x', `${x}px`);
      container.style.setProperty('--parallax-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full bg-black flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <GlowOrb className="top-[-200px] right-[-100px] animate-pulse-glow" color="accent" size="xl" />
      <GlowOrb className="bottom-[-300px] left-[-200px] animate-pulse-glow" color="white" size="lg" style={{ animationDelay: '2s' } as React.CSSProperties} />

      {/* Geometric grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            AI Transformation Partner
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mt-8 text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-bold text-white leading-[0.9] tracking-[-0.03em]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded
              ? 'translateY(0) translate3d(var(--parallax-x, 0), var(--parallax-y, 0), 0)'
              : 'translateY(40px)',
            transition: 'opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s',
          }}
        >
          Build what
          <br />
          <span className="text-gradient">lasts.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-8 text-xl md:text-2xl text-white/50 max-w-xl mx-auto leading-relaxed"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s',
          }}
        >
          {COPY.hero.subheadline}
        </p>

        {/* CTA */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease-out 0.8s, transform 1s ease-out 0.8s',
          }}
        >
          <button
            onClick={() => scrollToSection('start')}
            className="group mt-12 relative px-8 py-4 bg-white text-black font-medium text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,75,0.15)]"
          >
            <span className="relative z-10">{COPY.hero.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.5s ease-out 1.2s',
        }}
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-4 bg-accent/60 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
