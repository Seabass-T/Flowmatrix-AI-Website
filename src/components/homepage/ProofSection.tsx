import { ArrowRight, TrendingUp, Clock, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProofSectionProps {
  openTallyForm?: () => void;
}

const ProofSection = ({ openTallyForm }: ProofSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Real Results from{" "}
            <span className="text-primary">
              Real Clients
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            One recent engagement delivered immediate value and continues generating ROI months later
          </p>
        </div>

        {/* Main Case Study Container */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Client Logo & Name */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-4">
              <img
                src="/testimonials"
                alt="UBL Group Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">UBL Group</h3>
          </div>

          {/* Timeline Story */}
          <div className="space-y-8 mb-12">
            {/* Week 1 */}
            <div className="relative border-l-4 border-primary pl-8 pb-8">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Week 1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Immediate Value Delivered</h4>
              <p className="text-gray-600 leading-relaxed">
                Within the first week of the retainer, we built and implemented two custom AI systems identified during the 2-week audit phase. No waiting, no delays, just immediate action.
              </p>
            </div>

            {/* 3 Months Later */}
            <div className="relative border-l-4 border-primary pl-8 pb-8">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wide">3 Months Later</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Systems Running Seamlessly</h4>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-gray-600">Cost Savings</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">$5,000+</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-gray-600">Time Reclaimed</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">150+ Hours</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                These systems continue to run seamlessly, generating consistent savings and reclaiming manual work that now goes toward high-value activities.
              </p>
            </div>

            {/* Today */}
            <div className="relative border-l-4 border-primary pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Today</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Expanding & Scaling</h4>
              <p className="text-gray-600 leading-relaxed">
                We've expanded their automation suite with multiple personalized systems and are currently developing a custom ERP interface with projected ROI of <span className="font-bold text-gray-900">$10,000-$20,000+ per month</span>.
              </p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
            <div className="mb-4">
              <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
            </div>
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
              "FlowMatrix AI delivered value from day one. The systems they built in the first week are still running flawlessly months later, saving us thousands and freeing up our team to focus on growth. The custom ERP integration they're building now is game-changing for our operations."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <img
                  src="/testimonials"
                  alt="UBL Group"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900">UBL Group</p>
                <p className="text-sm text-gray-600">Construction & Trade Business</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-scale-in">
          <Button
            onClick={openTallyForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            Start with a free 5-day diagnostic. No commitment, zero risk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
