import { VideoBackground } from '@/components/ui/VideoBackground';
import { TallyForm } from '@/components/shared/TallyForm';
import { COPY } from '@/lib/constants';

const CTASection = () => {
  return (
    <section id="start" className="relative min-h-screen py-32 md:py-40 px-6 bg-black flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        <VideoBackground
          src="/videos/cta-invitation.mp4"
          className="w-full h-full object-cover opacity-50"
          loop
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {COPY.cta.headline}
        </h2>
        <p className="text-xl text-white/80 mb-12 leading-relaxed">
          {COPY.cta.subheadline}
        </p>

        {/* Tally Form Embed */}
        <div className="bg-black/95 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 shadow-2xl">
          <TallyForm formId="wMBOXE" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
