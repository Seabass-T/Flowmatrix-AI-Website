import { Linkedin } from 'lucide-react';
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
              className={`text-center ${index === 0 ? 'md:text-left' : 'md:text-right'}`}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {founder.name}
              </h3>
              <p className="text-accent uppercase tracking-widest text-sm mt-1 mb-4">
                {founder.title}
              </p>
              <div className="text-muted-foreground leading-relaxed mb-4 space-y-2 text-base">
                <p className="text-white/90">{founder.school}</p>
                <p>{founder.background}</p>
                <p className="text-sm">{founder.location}</p>
                {founder.funFact && <p className="text-sm italic">{founder.funFact}</p>}
              </div>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
