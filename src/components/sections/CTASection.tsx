import { TallyForm } from '@/components/shared/TallyForm';
import { COPY, TALLY_FORM_ID } from '@/lib/constants';

const CTASection = () => {
  return (
    <section id="start" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {COPY.cta.headline}
          </h2>
          <p className="mt-4 text-xl text-white/60 leading-relaxed">
            {COPY.cta.subheadline}
          </p>
        </div>

        <div className="border border-white/10 rounded-xl p-6 md:p-8 bg-white/[0.02]">
          <TallyForm formId={TALLY_FORM_ID} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
