import { TallyForm } from '@/components/shared/TallyForm';
import { COPY, TALLY_FORM_ID } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Reveal, GlowOrb, LineSeparator, DotGrid } from '@/components/ui/VisualEffects';

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="start" className="relative py-32 md:py-44 px-6 bg-black overflow-hidden">
      <LineSeparator className="absolute top-0 left-6 right-6" />
      <DotGrid className="opacity-[0.02]" />
      <GlowOrb className="top-[-100px] left-1/2 -translate-x-1/2" color="accent" size="xl" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto">
        <Reveal isVisible={isVisible} direction="up">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              {COPY.cta.headline}
            </h2>
            <p className="mt-4 text-xl text-white/40 leading-relaxed max-w-lg mx-auto">
              {COPY.cta.subheadline}
            </p>
          </div>
        </Reveal>

        <Reveal isVisible={isVisible} delay={200} direction="up">
          <div className="card-glow rounded-2xl p-8 md:p-10 bg-white/[0.02]">
            <TallyForm formId={TALLY_FORM_ID} className="mx-auto" />
          </div>
        </Reveal>

        {/* Trust signals under form */}
        <Reveal isVisible={isVisible} delay={400} direction="up">
          <div className="mt-8 flex items-center justify-center gap-8 text-xs text-white/25">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none"><path d="M8 1l2.47 4.97L16 6.87l-4 3.89.94 5.49L8 13.77l-4.94 2.48.94-5.49-4-3.89 5.53-.9L8 1z" fill="currentColor" /></svg>
              No obligations
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.46 6.12l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06L7 8.59l3.47-3.47a.75.75 0 111.06 1.06z" fill="currentColor" /></svg>
              Response within 24h
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor" /><path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              5-minute form
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
