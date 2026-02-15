import { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICE_PHASES, COPY } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Reveal, LineSeparator, DotGrid, Aurora, TopologyLines } from '@/components/ui/VisualEffects';

const PHASE_ICONS = [
  // Assessment - magnifying glass / scan
  <svg key="1" viewBox="0 0 40 40" fill="none" className="w-10 h-10"><circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="1.5" /><path d="M27 27L35 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M14 18h8M18 14v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  // Database - stacked layers
  <svg key="2" viewBox="0 0 40 40" fill="none" className="w-10 h-10"><ellipse cx="20" cy="12" rx="14" ry="5" stroke="currentColor" strokeWidth="1.5" /><path d="M6 12v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" stroke="currentColor" strokeWidth="1.5" /><path d="M6 20v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" stroke="currentColor" strokeWidth="1.5" /></svg>,
  // AI - neural network
  <svg key="3" viewBox="0 0 40 40" fill="none" className="w-10 h-10"><circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" /><circle cx="30" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" /><circle cx="20" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M20 11v6M13 18l4-4M27 18l-4-4M13 22l4 4M27 22l-4 4M20 29v-6" stroke="currentColor" strokeWidth="1" opacity="0.5" /></svg>,
  // Software - window / interface
  <svg key="4" viewBox="0 0 40 40" fill="none" className="w-10 h-10"><rect x="5" y="8" width="30" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M5 15h30" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="11.5" r="1" fill="currentColor" /><circle cx="14" cy="11.5" r="1" fill="currentColor" /><circle cx="18" cy="11.5" r="1" fill="currentColor" /><path d="M12 22h16M12 26h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" /></svg>,
];

const PillarsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);

  // Spotlight cursor effect
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      section.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    section.addEventListener('mousemove', handleMove);
    return () => section.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-32 md:py-44 px-6 bg-black spotlight overflow-hidden">
      <Aurora className="opacity-40" />
      <TopologyLines className="opacity-20" />
      <LineSeparator className="absolute top-0 left-6 right-6" />
      <DotGrid />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <Reveal isVisible={isVisible} direction="up">
          <div className="text-center mb-20">
            <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">Our methodology</span>
            <h2 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              {COPY.services.headline}
            </h2>
            <p className="mt-4 text-xl text-white/50 max-w-xl mx-auto">
              {COPY.services.subheadline}
            </p>
          </div>
        </Reveal>

        {/* Phase connection line */}
        <div className="hidden md:block absolute left-1/2 top-[280px] bottom-20 w-px bg-gradient-to-b from-accent/20 via-white/5 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICE_PHASES.map((phase, index) => (
            <Reveal key={phase.id} isVisible={isVisible} delay={200 + index * 120} direction="up">
              <div className="relative pt-3 pl-3">
                {/* Phase number badge - outside overflow container */}
                <div className="absolute top-0 left-0 z-10 w-8 h-8 rounded-full bg-black border border-accent/30 flex items-center justify-center text-accent text-xs font-bold shadow-lg shadow-black/50">
                  {phase.phase}
                </div>

                <TiltCard
                  href={phase.href}
                >
                  {/* Icon */}
                  <div className="text-white/40 group-hover:text-accent/70 transition-colors duration-500 mb-6">
                    {PHASE_ICONS[index]}
                  </div>

                  <span className="text-accent text-[11px] font-medium uppercase tracking-[0.2em]">
                    Phase {phase.phase}
                  </span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white group-hover:text-white transition-colors">
                    {phase.title}
                  </h3>
                  <p className="mt-1 text-base text-white/50 italic">
                    {phase.tagline}
                  </p>
                  <p className="mt-4 text-white/55 leading-relaxed text-[15px]">
                    {phase.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-white/40 group-hover:text-accent transition-colors duration-300">
                    Explore phase
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3D tilt card with glare effect
const TiltCard = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      transition: 'transform 0.1s ease-out',
    });
    setGlareStyle({
      opacity: 0.15,
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(212, 168, 75, 0.3), transparent 60%)`,
      transition: 'opacity 0.2s ease-out',
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.4s ease-out',
    });
    setGlareStyle({ opacity: 0, transition: 'opacity 0.4s ease-out' });
  }, []);

  return (
    <Link
      ref={cardRef}
      to={href}
      className="card-glow group block relative rounded-xl p-8 md:p-10 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12]"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={glareStyle}
      />
      {children}
    </Link>
  );
};

export default PillarsSection;
