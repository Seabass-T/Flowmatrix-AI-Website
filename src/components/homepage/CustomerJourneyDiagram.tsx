import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CustomerJourneyDiagramProps {
  openTallyForm: () => void;
}

const CustomerJourneyDiagram = ({ openTallyForm }: CustomerJourneyDiagramProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Simple, Low-Risk Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're confident in the value we can bring to your company. Our low-risk onboarding process gives you two decision points where you can walk away at any time, zero obligation.
          </p>
        </div>

        {/* Mobile: Vertical Layout */}
        <div className="md:hidden">
          <div className="relative max-w-lg mx-auto">
            {/* Step 1: Intake Form */}
            <div className="relative mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fill Out Intake Form</h3>
                  <p className="text-gray-600 mb-3">
                    Quick 5-minute form to understand your business needs and pain points.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                    <span>FREE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </div>

            {/* Step 2: 5-Day Diagnostic */}
            <div className="relative mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Day Free Diagnostic</h3>
                  <p className="text-gray-600 mb-3">
                    We analyze your workflows and identify automation opportunities at no cost.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                    <span>FREE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </div>

            {/* Step 3: Discovery Call */}
            <div className="relative mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">30-Minute Discovery Call</h3>
                  <p className="text-gray-600 mb-3">
                    We share our findings and discuss how automation can transform your business.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                    <span>FREE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DECISION POINT 1 */}
            <div className="my-8 text-center">
              <h4 className="font-semibold text-green-600 mb-2 text-lg">
                Decision Point 1: Continue with audit?
              </h4>
              <p className="text-gray-600 text-sm">
                We're confident you'll see the value. If not, part ways with zero obligation.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </div>

            {/* Step 4: 2-Week Deep Audit */}
            <div className="relative mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  4
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2-Week Deep Audit</h3>
                  <p className="text-gray-600 mb-3">
                    Comprehensive analysis with custom automation roadmap and ROI projections.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full mb-2">
                    <span className="font-bold">$300</span>
                    <span className="text-gray-600">• 100% Satisfaction Guarantee</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">
                    Not satisfied? We'll refund 100%, no questions asked.
                  </p>
                </div>
              </div>
            </div>

            {/* DECISION POINT 2 */}
            <div className="my-10 text-center">
              <h4 className="font-bold text-green-600 mb-6 text-2xl">
                Decision Point 2: Start retainer?
              </h4>

              {/* YES/NO Options */}
              <div className="space-y-4 max-w-md mx-auto">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-gray-900">Continue with retainer</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Begin your monthly retainer and let us build your automation systems.{" "}
                    <Link to="/pricing" className="text-green-600 hover:text-green-700 underline font-medium">
                      See our retainer packages
                    </Link>
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-gray-400 font-bold">✕</span>
                    <span className="font-semibold text-gray-900">Discontinue</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Keep your audit deliverables or request a full refund. Your choice.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </div>

            {/* Step 5: Monthly Retainer */}
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  5
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Monthly Retainer</h3>
                  <p className="text-gray-600 mb-4">
                    We build, optimize, and maintain your custom AI automation workflows.
                  </p>
                  <Button
                    onClick={openTallyForm}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Horizontal Timeline Layout */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-max mx-auto px-8">
            {/* ROW 1: Steps 1-3 + Decision Point 1 */}
            <div className="flex items-start justify-center gap-3 mb-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center w-64">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Fill Out Intake Form</h3>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  Quick 5-minute form to understand your needs.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-green-50 px-3 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span>FREE</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center pt-8">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center w-64">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">5-Day Free Diagnostic</h3>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  We analyze your workflows at no cost.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-green-50 px-3 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span>FREE</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center pt-8">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center w-64">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">30-Minute Discovery Call</h3>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  We share findings and discuss transformation.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-green-50 px-3 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span>FREE</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center pt-8">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Decision Point 1 - Inline */}
              <div className="flex flex-col items-center justify-center w-64 pt-8">
                <h4 className="font-semibold text-green-600 text-center text-lg">
                  Decision Point 1: Continue with audit?
                </h4>
                <p className="text-xs text-gray-600 text-center mt-2">
                  We're confident you'll see the value. If not, part ways with zero obligation.
                </p>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center my-8">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>

            {/* ROW 2: Step 4 */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">2-Week Deep Audit</h3>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  Comprehensive analysis with custom roadmap and ROI projections.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full mb-2">
                  <span className="font-bold">$300</span>
                  <span className="text-gray-600">• 100% Satisfaction Guarantee</span>
                </div>
                <p className="text-xs text-gray-600 italic text-center">
                  Not satisfied? We'll refund 100%, no questions asked.
                </p>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center my-8">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>

            {/* ROW 3: Decision Point 2 */}
            <div className="text-center mb-8">
              <h4 className="font-bold text-green-600 text-2xl">
                Decision Point 2: Start retainer?
              </h4>
            </div>

            {/* ROW 4: YES/NO Options */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-2 gap-6">
                {/* YES Option */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-gray-900 text-lg">Continue with retainer</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Begin your monthly retainer and let us build your automation systems.{" "}
                    <Link to="/pricing" className="text-green-600 hover:text-green-700 underline font-medium">
                      See our retainer packages
                    </Link>
                  </p>
                </div>

                {/* NO Option */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-gray-400 font-bold text-xl">✕</span>
                    <span className="font-semibold text-gray-900 text-lg">Discontinue</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Keep your audit deliverables or request a full refund. Your choice.
                  </p>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center my-8">
              <ArrowDown className="w-8 h-8 text-gray-400" />
            </div>

            {/* ROW 5: Step 5 */}
            <div className="flex justify-center">
              {/* Step 5 */}
              <div className="flex flex-col items-center w-80">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  5
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Ongoing Monthly Retainer</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  We build, optimize, and maintain your custom AI automation workflows.
                </p>
                <Button
                  onClick={openTallyForm}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 md:hidden">
          <Button
            onClick={openTallyForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
          >
            Get Started
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            No payment needed • Two decision points • Zero risk
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourneyDiagram;
