import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";

const ClientSpotlightPreview = () => {
  return (
    <Link
      to="/solutions/ubl-group"
      className="block bg-gradient-to-r from-green-50 to-white dark:from-green-900/10 dark:to-gray-900 border-2 border-green-200 dark:border-green-800 rounded-2xl p-6 md:p-8 mb-16 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* Featured Badge */}
      <div className="flex items-center mb-4">
        <span className="inline-block px-4 py-2 text-xs md:text-sm font-bold text-primary bg-white dark:bg-gray-800 rounded-full border border-green-200 dark:border-green-700">
          FEATURED CLIENT SUCCESS STORY
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left: Logo and Company Info */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm overflow-hidden">
            <img
              src="/ubl-group-logo.png"
              alt="UBL Group Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>

        {/* Middle: Overview Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            UBL Group: Construction Automation Success Story
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Construction (Interior & Exterior) • Greater Toronto Area • $2M+ Revenue
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
            See how FlowMatrix AI helped UBL Group double their project capacity from 2 to 4 concurrent projects, save $10,000+ in three months, and reduce payment collection time by 73% through strategic automation.
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">2→4 Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">15+ hrs/week saved</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              <DollarSign className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">$10K+ savings</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">73% faster payments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Read Full Case Study Link - Moved from top right */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-center">
        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
          <span className="hidden sm:inline text-sm">Read Full Case Study</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ClientSpotlightPreview;
