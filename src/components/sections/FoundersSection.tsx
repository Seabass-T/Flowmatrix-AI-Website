import { Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { VideoBackground } from '@/components/ui/VideoBackground';
import { COPY } from '@/lib/constants';

const FoundersSection = () => {
  return (
    <section id="team" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
          {COPY.founders.headline}
        </h2>
        <p className="text-xl text-white/80 text-center mb-16 leading-relaxed">
          {COPY.founders.intro}
        </p>

        {/* Video */}
        <div className="flex justify-center mb-16">
          <VideoBackground
            src="/videos/founders-stewards.mp4"
            className="w-full max-w-md rounded-lg"
            loop
          />
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {COPY.founders.team.map((founder, index) => (
            <div
              key={founder.name}
              className="text-center"
            >
              {/* Headshot Image */}
              {founder.image && (
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-accent/30">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={index === 1 ? { transform: 'scale(0.7)', transformOrigin: 'center center' } : undefined}
                    />
                    <div className="absolute inset-0 rounded-full ring-1 ring-accent/20 pointer-events-none"></div>
                  </div>
                </div>
              )}

              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {founder.name}
              </h3>
              <p className="text-accent uppercase tracking-widest text-sm mt-1 mb-6">
                {founder.title}
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-3 mb-4 justify-center">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                {founder.youtube && (
                  <a
                    href={founder.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                )}
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${founder.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
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
