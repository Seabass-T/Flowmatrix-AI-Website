import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
  expandedDescription?: string;
}

interface PainPointCardsProps {
  painPoints: PainPoint[];
  variant?: "construction" | "home-service";
}

const PainPointCards = ({ painPoints, variant = "construction" }: PainPointCardsProps) => {
  const iconColor = variant === "construction" ? "bg-primary" : "from-green-500 to-green-600";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These challenges are costing you time, money, and growth opportunities every single day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((painPoint, index) => {
            const Icon = painPoint.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-primary ${iconColor} flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {painPoint.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {painPoint.description}
                  </p>
                  {painPoint.expandedDescription && (
                    <p className="text-gray-600 text-sm leading-relaxed opacity-80">
                      {painPoint.expandedDescription}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPointCards;
