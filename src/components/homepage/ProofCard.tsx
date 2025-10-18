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
      className={`
        relative p-8 rounded-2xl shadow-xl
        ${gradient}
        text-white
        hover:scale-105 hover:shadow-2xl
        transition-all duration-300
        animate-fade-in
      `}
    >
      {/* Coming Soon Badge */}
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="mb-6">
        <Icon className="h-12 w-12 text-white opacity-90" />
      </div>

      {/* Metric */}
      <div className="text-5xl font-bold mb-2">{metric}</div>

      {/* Subtitle */}
      <div className="text-xl font-semibold mb-4">{subtitle}</div>

      {/* Description */}
      <p className="text-sm opacity-90 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProofCard;
