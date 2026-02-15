import { COPY } from '@/lib/constants';
import { useScrollReveal, useCountUp } from '@/hooks/useScrollReveal';
import { Reveal, GlowOrb, LineSeparator, Aurora } from '@/components/ui/VisualEffects';

const StakesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { value: 72, suffix: '%', label: COPY.stakes.stat1.label },
    { value: 3, suffix: 'x', label: COPY.stakes.stat2.label },
    { value: 18, suffix: 'mo', label: COPY.stakes.stat3.label },
  ];

  return (
    <section id="stakes" className="relative py-32 md:py-44 px-6 bg-black overflow-hidden">
      <Aurora className="opacity-50" />
      <GlowOrb className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" color="accent" size="lg" />

      <LineSeparator className="absolute top-0 left-6 right-6" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Statement */}
          <div>
            <Reveal isVisible={isVisible} direction="up">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
                The divergence
                <br />
                <span className="text-gradient-gold">has begun.</span>
              </h2>
            </Reveal>
            <Reveal isVisible={isVisible} delay={200} direction="up">
              <p className="mt-8 text-lg md:text-xl text-white/50 leading-relaxed max-w-lg">
                {COPY.stakes.body}
              </p>
            </Reveal>
            <Reveal isVisible={isVisible} delay={400} direction="up">
              <p className="mt-6 text-lg text-white/40 leading-relaxed max-w-lg">
                You don't have a team to build custom AI systems. You don't have months to experiment. You have a business to run today. That's precisely why we exist.
              </p>
            </Reveal>
          </div>

          {/* Right: Animated Stats */}
          <div className="space-y-10 lg:pt-8">
            {stats.map((stat, index) => (
              <Reveal key={index} isVisible={isVisible} delay={300 + index * 150} direction="right">
                <StatCard {...stat} isVisible={isVisible} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) => {
  const count = useCountUp(value, 1500, isVisible);

  return (
    <div className="group relative pl-6 border-l border-white/10 hover:border-accent/40 transition-colors duration-500">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-5xl md:text-6xl font-bold text-white tabular-nums">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-2 text-base text-white/40">
        {label}
      </div>
    </div>
  );
};

export default StakesSection;
