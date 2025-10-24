import { LucideIcon } from "lucide-react";

interface ProofCardProps {
  metric: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  badge?: string;
}

const ProofCard = ({
  metric,
  subtitle,
  description,
  icon: Icon,
  gradient,
  badge,
}: ProofCardProps) => {
  return (
    <div
      className="relative p-8 rounded-2xl shadow-xl bg-white border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in"
    >
      {/* Coming Soon Badge */}
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
            {badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary">
          <Icon className="h-7 w-7 text-white" />
        </div>
      </div>

      {/* Metric */}
      <div className="text-5xl font-bold mb-2 text-gray-900">{metric}</div>

      {/* Subtitle */}
      <div className="text-xl font-semibold mb-4 text-gray-700">{subtitle}</div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProofCard;
