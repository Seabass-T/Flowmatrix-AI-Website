import { Trophy } from "lucide-react";

const FounderBadge = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Founder-Led Automation (No Agency Markup)
              </h3>

              <div className="space-y-3 text-gray-600">
                <p>
                  Built by <span className="font-semibold text-gray-900">Sebastian Tamburro</span> while competing as D1 Hockey player at Colgate University '26.
                </p>

                <p>
                  <span className="font-semibold text-gray-900">Solo founder</span>: you work directly with me. No account managers, no junior developers.
                </p>

                <p>
                  Battle-tested automation systems from someone who understands performing under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderBadge;
