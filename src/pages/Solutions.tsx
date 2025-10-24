import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real automation solutions delivering measurable ROI for North American businesses.
            Browse case studies showcasing time saved, costs reduced, and workflows optimized.
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Coming Soon: Solutions Gallery
            </h2>
            <p className="text-gray-600 mb-6">
              We're building a comprehensive gallery of automation case studies featuring:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-700">Embedded video demonstrations (YouTube Shorts)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-700">Measurable ROI metrics (time saved, cost savings)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-700">Industry-specific solutions (Construction, HVAC, Real Estate)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-gray-700">Real client testimonials and results</span>
              </li>
            </ul>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => window.open('https://tally.so/r/wMBOXE', '_blank')}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Get Started Now
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = '/pricing'}
                className="border-primary text-primary hover:bg-gray-50"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
