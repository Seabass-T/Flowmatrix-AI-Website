import { VideoBackground } from '@/components/ui/VideoBackground';
import { CLIENT_LOGOS, COPY } from '@/lib/constants';

const ProofSection = () => {
  return (
    <section id="proof" className="py-32 md:py-40 px-6 bg-black relative">
      {/* Background Video (subtle) */}
      <div className="absolute inset-0 opacity-30">
        <VideoBackground
          src="/videos/proof-gallery.mp4"
          className="w-full h-full object-cover"
          loop
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
          {COPY.proof.headline}
        </h2>

        {/* Testimonial Card */}
        <div className="bg-black/40 backdrop-blur-sm border border-border rounded-xl p-10 md:p-14 mb-16">
          <div className="text-xl md:text-2xl text-white leading-relaxed space-y-4">
            {COPY.proof.story.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {COPY.proof.metrics.length > 0 && (
            <div className="flex flex-wrap gap-6 mt-10 mb-10">
              {COPY.proof.metrics.map((metric, index) => (
                <div key={index} className="bg-black/60 border border-border px-6 py-3 rounded-lg">
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          <cite className="text-muted-foreground not-italic text-base mt-6 block">
            <div>{COPY.proof.attribution.name}</div>
            <div className="mt-1">{COPY.proof.attribution.company}</div>
          </cite>
        </div>

        {/* Logo Bar - Below Testimonial */}
        <div>
          <p className="text-sm text-muted-foreground text-center mb-8 uppercase tracking-widest">
            Trusted by
          </p>
          <div className="flex justify-center items-center gap-6 md:gap-8 lg:gap-12 flex-wrap">
            {CLIENT_LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-14 lg:h-16 w-auto grayscale contrast-125 opacity-60 hover:opacity-100 transition-all duration-300 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
