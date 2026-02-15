import { CLIENT_LOGOS, COPY } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Reveal, GlowOrb, LineSeparator } from '@/components/ui/VisualEffects';

const ProofSection = () => {
  const { ref, isVisible } = useScrollReveal();

  // Duplicate logos for infinite marquee
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="proof" className="relative py-32 md:py-44 px-6 bg-black overflow-hidden">
      <LineSeparator className="absolute top-0 left-6 right-6" />
      <GlowOrb className="top-1/2 right-[-200px] -translate-y-1/2" color="accent" size="lg" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <Reveal isVisible={isVisible} direction="up">
          <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">Client Results</span>
          <h2 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            {COPY.proof.headline}
          </h2>
        </Reveal>

        {/* Large editorial testimonial */}
        <Reveal isVisible={isVisible} delay={200} direction="up">
          <div className="mt-16 relative">
            {/* Large quotation mark */}
            <div className="absolute -top-8 -left-4 text-accent/10 text-[12rem] font-serif leading-none select-none pointer-events-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10 pl-0 md:pl-8">
              <p className="text-3xl md:text-4xl lg:text-5xl text-white/90 leading-[1.2] font-light tracking-tight">
                {COPY.proof.testimonial}
              </p>
            </blockquote>

            {/* Attribution with gold line */}
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-16 bg-gradient-to-r from-accent to-transparent" />
              <div>
                <div className="text-white font-medium text-lg">
                  {COPY.proof.attribution.name}
                </div>
                <div className="text-white/40 text-sm mt-0.5">
                  {COPY.proof.attribution.title}, {COPY.proof.attribution.company}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Logo Marquee - full width */}
      <Reveal isVisible={isVisible} delay={500} direction="up">
        <div className="mt-24 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex items-center gap-16 animate-marquee">
              {marqueeLogos.map((logo, index) => (
                <img
                  key={`${logo.name}-${index}`}
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 md:h-10 w-auto grayscale opacity-30 hover:opacity-60 transition-opacity duration-300 object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ProofSection;
