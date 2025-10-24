import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SimpleHeroProps {
  openTallyForm: () => void;
}

const SimpleHero = ({ openTallyForm }: SimpleHeroProps) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        AI Automation for{" "}
        <span className="text-primary">
          North American
        </span>
        {" "}Construction & Trade Businesses
      </h1>

      <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Stop losing hours to manual tasks. We build custom AI workflows that save you 120+ hours per month,
        so you can focus on what matters: <span className="text-green-600 font-semibold">growing your business</span>.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Button
          onClick={openTallyForm}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 w-full sm:w-auto"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <p className="text-sm text-gray-600">
          Free 5-day diagnostic • No payment needed
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>120+ Hours Saved Monthly</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>$300 Audit with 100% Guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Two Decision Points, Zero Risk</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;
