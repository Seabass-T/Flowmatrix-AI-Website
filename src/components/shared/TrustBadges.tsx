import { Lock, FileText, MapPin, Award, Code } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Lock,
      text: "SSL Secured",
    },
    {
      icon: FileText,
      text: "NDA Available",
    },
    {
      icon: MapPin,
      text: "Toronto-Based",
    },
    {
      icon: Award,
      text: "Colgate '26",
    },
    {
      icon: Code,
      text: "Powered by n8n + Supabase",
    },
  ];

  return (
    <div className="border-t border-gray-200 pt-8 pb-6">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs font-medium whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBadges;
