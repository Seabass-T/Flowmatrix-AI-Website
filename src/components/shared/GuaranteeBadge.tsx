import { Shield } from "lucide-react";

const GuaranteeBadge = () => {
  return (
    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Icon */}
        <div className="flex-shrink-0">
          <Shield className="w-12 h-12 text-yellow-600" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Our Pilot Guarantee
          </h3>

          <div className="space-y-2 text-gray-700">
            <p>
              If the 2-week pilot doesn't hit the agreed checklist, you get <span className="font-semibold">50% off</span> OR <span className="font-semibold">full credit toward next phase</span>.
            </p>

            <p className="font-semibold text-gray-900">
              No fine print. Just results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeBadge;
