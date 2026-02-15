import { COPY } from '@/lib/constants';

const StakesSection = () => {
  const stats = [COPY.stakes.stat1, COPY.stakes.stat2, COPY.stakes.stat3];

  return (
    <section id="stakes" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Statement */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {COPY.stakes.headline}
            </h2>
            <p className="mt-8 text-xl text-white/70 leading-relaxed">
              {COPY.stakes.body}
            </p>
          </div>

          {/* Right: Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="border-l-2 border-accent pl-6">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-lg text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakesSection;
