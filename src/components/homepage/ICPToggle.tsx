import { Building2, Home } from "lucide-react";

export type ICPType = "construction" | "home-service";

interface ICPToggleProps {
  selectedICP: ICPType;
  onToggle: (icp: ICPType) => void;
}

const ICPToggle = ({ selectedICP, onToggle }: ICPToggleProps) => {
  return (
    <div className="flex justify-center mb-8 animate-fade-in">
      <div className="inline-flex rounded-lg p-1 bg-gray-100" role="tablist" aria-label="Industry selection">
        <button
          role="tab"
          aria-selected={selectedICP === "construction"}
          aria-controls="hero-content"
          onClick={() => onToggle("construction")}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300
            ${selectedICP === "construction"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-transparent text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          <Building2 className="h-5 w-5" />
          <span>Construction</span>
        </button>
        <button
          role="tab"
          aria-selected={selectedICP === "home-service"}
          aria-controls="hero-content"
          onClick={() => onToggle("home-service")}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300
            ${selectedICP === "home-service"
              ? "bg-green-600 text-white shadow-lg"
              : "bg-transparent text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          <Home className="h-5 w-5" />
          <span>Home Service</span>
        </button>
      </div>
    </div>
  );
};

export default ICPToggle;
