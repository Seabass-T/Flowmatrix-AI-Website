import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

export interface ResultsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  industry: string;
  systemUsed: string;
  systemSlug: string; // For linking to Solutions page
  date: string; // Format: "YYYY-MM-DD"
  readTime: string; // e.g., "5 min read"
}

interface ResultsPostCardProps {
  post: ResultsPost;
}

const ResultsPostCard = ({ post }: ResultsPostCardProps) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Link
      to={`/results/${post.slug}`}
      className="block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary"
    >
      {/* Top Meta Row */}
      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
        {/* Industry Tag */}
        <div className="flex items-center gap-1.5 text-primary">
          <Tag className="w-4 h-4" />
          <span className="font-medium">{post.industry}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(post.date)}</span>
        </div>

        {/* Read Time */}
        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
        {post.title}
      </h2>

      {/* System Used */}
      <div className="mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">System: </span>
        <span className="text-sm font-medium text-primary hover:underline">
          {post.systemUsed}
        </span>
      </div>

      {/* Excerpt */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Read More Link */}
      <div className="flex items-center gap-2 text-primary font-medium group">
        <span>Read Full Story</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ResultsPostCard;
