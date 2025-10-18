import { Phone, Zap, Target, TrendingUp, ArrowRight, ArrowDown } from "lucide-react";

const OfferFunnel = () => {
  const steps = [
    {
      icon: Phone,
      number: "1",
      title: "Free Consultation",
      description: "Understand your workflow and identify automation opportunities",
    },
    {
      icon: Zap,
      number: "2",
      title: "Pay-What-You-Think Audit",
      description: "Deep-dive workflow analysis with actionable recommendations",
    },
    {
      icon: Target,
      number: "3",
      title: "2-Week Pilot",
      description: "Build and test your custom automation solution",
    },
    {
      icon: TrendingUp,
      number: "4",
      title: "Month-to-Month Partnership",
      description: "Scale automation and optimize your entire operation",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The FlowMatrix AI Process
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A proven 4-step approach to transform your business operations
          </p>
        </div>

        {/* Desktop - Horizontal Layout */}
        <div className="hidden lg:flex items-center justify-between mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center flex-1">
                <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-interactive-primary to-interactive-accent flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="bg-interactive-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mb-3 text-sm">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 max-w-[200px]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 max-w-[200px]">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-8 w-8 text-interactive-primary mx-4 flex-shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet - Vertical Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-interactive-primary to-interactive-accent flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="bg-interactive-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mb-3 text-sm">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 max-w-md">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <ArrowDown className="h-8 w-8 text-interactive-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferFunnel;
