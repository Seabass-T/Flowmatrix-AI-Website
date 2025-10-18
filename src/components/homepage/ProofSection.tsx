import { Mail, TrendingUp, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProofCard from "./ProofCard";
import { ArrowRight } from "lucide-react";

const ProofSection = () => {
  const proofCards = [
    {
      metric: "150+ Hours",
      subtitle: "Saved in 3 Months",
      description: "Email intelligence automation for GTA construction contractor",
      icon: Mail,
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      metric: "$3,500+",
      subtitle: "ROI Achieved",
      description: "Combined savings across email and developer outreach automation",
      icon: TrendingUp,
      gradient: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      metric: "$10K-$20K+",
      subtitle: "Projected Monthly ROI",
      description: "Full ERP system currently in development",
      icon: Database,
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      badge: "Coming Soon",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-surface-light to-surface-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-interactive-primary to-interactive-accent bg-clip-text text-transparent">
              Real Clients
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the measurable impact we've delivered for businesses like yours
          </p>
        </div>

        {/* Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {proofCards.map((card, index) => (
            <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
              <ProofCard {...card} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-scale-in">
          <Link to="/case-study">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-interactive-primary text-interactive-primary hover:bg-interactive-primary hover:text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Full Case Study
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
