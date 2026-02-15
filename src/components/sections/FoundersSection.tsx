import { Linkedin, Mail } from 'lucide-react';
import { COPY } from '@/lib/constants';

const FoundersSection = () => {
  return (
    <section id="team" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          {COPY.founders.headline}
        </h2>
        <p className="text-xl text-white/60 mb-20 max-w-xl">
          {COPY.founders.intro}
        </p>

        {/* Asymmetric 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {COPY.founders.team.map((founder) => (
            <div key={founder.name} className="flex flex-col">
              {/* Photo */}
              {founder.image && (
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h3 className="text-2xl font-semibold text-white">
                {founder.name}
              </h3>
              <p className="text-accent text-sm uppercase tracking-widest mt-1 mb-6">
                {founder.title}
              </p>

              {/* Contact links */}
              <div className="flex gap-3">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/10 rounded-lg text-white/50 hover:text-white hover:border-white/30 transition-all"
                  aria-label={`${founder.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="p-2 border border-white/10 rounded-lg text-white/50 hover:text-white hover:border-white/30 transition-all"
                  aria-label={`Email ${founder.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
