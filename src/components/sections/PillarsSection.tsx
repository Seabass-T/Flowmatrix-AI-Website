import { VideoBackground } from '@/components/ui/VideoBackground';
import { PILLARS, COPY } from '@/lib/constants';

const PillarsSection = () => {
  return (
    <section id="approach" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
          {COPY.pillars.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative bg-black border border-border rounded-lg p-6 transition-all duration-300 ease-in-out hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Video */}
              <div className="aspect-square mb-8 rounded-lg overflow-hidden bg-black">
                <VideoBackground
                  src={pillar.videoSrc}
                  className="w-full h-full object-cover"
                  loop
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-lg">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
