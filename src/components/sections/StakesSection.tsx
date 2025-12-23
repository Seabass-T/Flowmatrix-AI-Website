import { VideoBackground } from '@/components/ui/VideoBackground';
import { COPY } from '@/lib/constants';

const StakesSection = () => {
  return (
    <section id="stakes" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-accent uppercase tracking-widest text-center mb-4">
          {COPY.stakes.preheadline}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
          {COPY.stakes.headline}
        </h2>

        <div className="text-xl md:text-2xl text-white/80 leading-relaxed space-y-8 text-center">
          {COPY.stakes.body.map((paragraph, index) => (
            <p key={index} className="mb-8">{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <VideoBackground
            src="/videos/stakes-transfer.mp4"
            className="w-full max-w-lg rounded-lg"
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default StakesSection;
