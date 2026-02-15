import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICE_PHASES, COPY } from '@/lib/constants';

const PillarsSection = () => {
  return (
    <section id="services" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
          {COPY.services.headline}
        </h2>
        <p className="mt-4 text-xl text-white/60 text-center max-w-2xl mx-auto">
          {COPY.services.subheadline}
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_PHASES.map((phase) => (
            <Link
              key={phase.id}
              to={phase.href}
              className="group block border border-white/10 rounded-lg p-8 md:p-10 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.02]"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-accent text-sm font-medium uppercase tracking-widest">
                  Phase {phase.phase}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {phase.title}
              </h3>
              <p className="text-lg text-white/50 italic mb-4">
                {phase.tagline}
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                {phase.description}
              </p>
              <span className="inline-flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
