import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { COPY } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Reveal, LineSeparator, Aurora, DotGrid } from '@/components/ui/VisualEffects';

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="relative py-32 md:py-44 px-6 bg-black overflow-hidden">
      <Aurora className="opacity-25" />
      <DotGrid className="opacity-[0.03]" />
      <LineSeparator className="absolute top-0 left-6 right-6" />

      <div ref={ref} className="max-w-3xl mx-auto">
        <Reveal isVisible={isVisible} direction="up">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">FAQ</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
                {COPY.faq.headline}
              </h2>
            </div>
            <div className="hidden md:block text-6xl font-bold text-white/[0.03] select-none">
              ?
            </div>
          </div>
        </Reveal>

        <Accordion type="single" collapsible className="space-y-0">
          {COPY.faq.items.map((faq, index) => (
            <Reveal key={index} isVisible={isVisible} delay={100 + index * 80} direction="up">
              <AccordionItem
                value={`item-${index}`}
                className="border-b border-white/[0.06] group"
              >
                <AccordionTrigger className="text-white text-left text-lg py-7 hover:no-underline group-hover:text-white/90 transition-colors [&[data-state=open]]:text-accent">
                  <span className="flex items-start gap-4">
                    <span className="text-white/20 text-sm font-mono mt-1 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-7 pl-10 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
