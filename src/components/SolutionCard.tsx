import { Link } from "react-router-dom";
import { Clock, DollarSign, Tag, ArrowRight } from "lucide-react";

interface SolutionCardProps {
  id: string;
  title: string;
  description: string;
  videoUrl?: string | null; // YouTube embed URL (optional)
  excalidrawUrl?: string | null; // Excalidraw diagram URL (optional)
  timeSaved: string; // "12 hours/week"
  costSavings: string; // "$2,400/month"
  industry?: string; // "Construction", "HVAC", etc.
}

const SolutionCard = ({
  id,
  title,
  description,
  videoUrl,
  excalidrawUrl,
  timeSaved,
  costSavings,
  industry,
}: SolutionCardProps) => {
  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Video or Excalidraw Embed */}
      <div className="relative w-full bg-gray-50 dark:bg-gray-800" style={{ paddingBottom: '56.25%' }}>
        {videoUrl ? (
          <iframe
            src={videoUrl}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : excalidrawUrl ? (
          <iframe
            src={excalidrawUrl}
            title={`${title} - Workflow Diagram`}
            className="absolute top-0 left-0 w-full h-full bg-white"
            style={{ border: 'none' }}
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p className="text-gray-400 dark:text-gray-500">Preview coming soon</p>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Industry Tag */}
        {industry && (
          <div className="flex items-center gap-1 mb-3">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{industry}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {description}
        </p>

        {/* ROI Metrics */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          {/* Time Saved */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Time Saved</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">{timeSaved}</p>
            </div>
          </div>

          {/* Cost Savings */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Cost Savings</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">{costSavings}</p>
            </div>
          </div>
        </div>

        {/* Learn More Link */}
        <Link
          to={`/solutions/${id}`}
          className="mt-auto pt-6 flex items-center justify-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
