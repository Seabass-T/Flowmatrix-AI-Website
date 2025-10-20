import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ICPPainPointSectionProps {
  icp: "construction" | "home-service";
  heading: string;
  painPoints: PainPoint[];
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  iconGradient: string;
}

const ICPPainPointSection = ({
  heading,
  painPoints,
  ctaText,
  ctaLink,
  backgroundColor,
  iconGradient,
}: ICPPainPointSectionProps) => {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            {heading}
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((painPoint, index) => {
            const Icon = painPoint.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${iconGradient}`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {painPoint.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {painPoint.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-scale-in">
          <Link to={ctaLink}>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ICPPainPointSection;
