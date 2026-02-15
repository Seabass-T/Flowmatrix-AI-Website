import { Linkedin, Mail } from 'lucide-react';
import { COPY } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Reveal, LineSeparator } from '@/components/ui/VisualEffects';

const FoundersSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="team" className="relative py-32 md:py-44 px-6 bg-black overflow-hidden">
      <LineSeparator className="absolute top-0 left-6 right-6" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: headline stays fixed-ish while scrolling */}
          <div>
            <Reveal isVisible={isVisible} direction="up">
              <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">The team</span>
              <h2 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95]">
                {COPY.founders.headline}
              </h2>
              <p className="mt-6 text-xl text-white/55 leading-relaxed">
                {COPY.founders.intro}
              </p>
            </Reveal>
          </div>

          {/* Right: founder cards */}
          <div className="space-y-12">
            {COPY.founders.team.map((founder, index) => (
              <Reveal key={founder.name} isVisible={isVisible} delay={200 + index * 200} direction="right">
                <div className="group flex items-start gap-6">
                  {/* Photo with hover effect */}
                  {founder.image && (
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-accent/30 transition-all duration-500">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      {/* Status dot */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-black flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-white">
                      {founder.name}
                    </h3>
                    <p className="text-accent text-sm mt-0.5">
                      {founder.title}
                    </p>

                    {/* Contact row */}
                    <div className="flex gap-2 mt-4">
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white text-xs transition-all duration-300"
                        aria-label={`${founder.name} LinkedIn`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                      </a>
                      <a
                        href={`mailto:${founder.email}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white text-xs transition-all duration-300"
                        aria-label={`Email ${founder.name}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
