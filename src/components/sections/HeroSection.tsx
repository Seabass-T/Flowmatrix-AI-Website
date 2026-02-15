import { COPY } from '@/lib/constants';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-black flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-7xl md:text-8xl lg:text-[7rem] font-bold text-white leading-[0.95] tracking-[-0.02em]">
          {COPY.hero.headline}
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          {COPY.hero.subheadline}
        </p>
        <button
          onClick={() => scrollToSection('start')}
          className="mt-12 px-8 py-4 bg-white text-black font-medium text-lg rounded-lg hover:bg-white/90 transition-colors"
        >
          {COPY.hero.cta}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
