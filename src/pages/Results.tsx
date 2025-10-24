import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Results = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Results - Coming Soon
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This page will feature detailed case studies, client testimonials, and measurable results
            from our automation implementations.
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <p className="text-gray-600 mb-8">
              Check back soon for comprehensive results and case studies.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => window.open('https://tally.so/r/wMBOXE', '_blank')}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="border-primary text-primary hover:bg-gray-50"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
