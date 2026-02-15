import { CLIENT_LOGOS, COPY } from '@/lib/constants';

const ProofSection = () => {
  return (
    <section id="proof" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-20 tracking-tight">
          {COPY.proof.headline}
        </h2>

        {/* Testimonial - editorial pull-quote style */}
        <div className="max-w-3xl mx-auto mb-20">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white/90 leading-snug font-light">
            &ldquo;{COPY.proof.testimonial}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-accent" />
            <div>
              <div className="text-white font-medium">
                {COPY.proof.attribution.name}
              </div>
              <div className="text-white/50 text-sm">
                {COPY.proof.attribution.title}, {COPY.proof.attribution.company}
              </div>
            </div>
          </div>
        </div>

        {/* Logo Bar */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-xs text-white/40 text-center mb-8 uppercase tracking-[0.2em]">
            Trusted by
          </p>
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            {CLIENT_LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto grayscale opacity-40 hover:opacity-70 transition-opacity duration-300 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
