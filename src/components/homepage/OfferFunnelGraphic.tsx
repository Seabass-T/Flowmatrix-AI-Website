import { Phone, Zap, Target, TrendingUp, ArrowRight, ArrowDown } from "lucide-react";

const OfferFunnelGraphic = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Free Consultation",
      description: "30-min discovery call to understand your needs",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      number: "02",
      icon: Zap,
      title: "Pay-What-You-Think Audit",
      description: "5-day comprehensive workflow analysis",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      number: "03",
      icon: Target,
      title: "2-Week Pilot",
      description: "Custom automation development & testing",
      gradient: "from-blue-600 to-purple-500",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Month-to-Month Partnership",
      description: "Ongoing optimization & scaling",
      gradient: "from-purple-600 to-blue-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Simple Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From consultation to partnership in 4 transparent steps
          </p>
        </div>

        {/* Funnel Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLastStep = index === steps.length - 1;

            return (
              <div key={index} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                {/* Step Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 w-full lg:w-64 group">
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-6">
                    <div className={`bg-gradient-to-r ${step.gradient} rounded-full p-3`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow between steps */}
                {!isLastStep && (
                  <>
                    {/* Desktop Arrow (Right) */}
                    <div className="hidden lg:flex items-center justify-center px-4">
                      <ArrowRight className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-pulse" />
                    </div>

                    {/* Mobile Arrow (Down) */}
                    <div className="lg:hidden flex items-center justify-center py-4">
                      <ArrowDown className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-pulse" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferFunnelGraphic;
