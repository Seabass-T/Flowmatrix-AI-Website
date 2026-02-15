import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { COPY } from '@/lib/constants';

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          {COPY.faq.headline}
        </h2>

        <Accordion type="single" collapsible className="space-y-0">
          {COPY.faq.items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-white/10 first:border-t"
            >
              <AccordionTrigger className="text-white text-left text-lg py-6 hover:no-underline hover:text-white/80 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 pb-6 leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
