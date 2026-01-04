/**
 * TemplateCard Component
 * Displays a template in a card layout with thumbnail, title, type badge, and tools
 */

import { Link } from 'react-router-dom'
import type { TemplateCardProps, DeliverableType } from './types'

// Type-specific badge styles with distinct colors
const typeBadgeStyles: Record<DeliverableType, string> = {
  template: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  demo: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  document: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  discount: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  tool: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  course: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
}

const typeLabels: Record<DeliverableType, string> = {
  template: 'Template',
  demo: 'Live Demo',
  document: 'Document',
  discount: 'Discount',
  tool: 'Free Tool',
  course: 'Course',
}

export function TemplateCard({ template, onClick }: TemplateCardProps) {
  // Get thumbnail URL - use custom or fallback to YouTube default
  // Add cache-busting parameter using updated_at timestamp to force refresh when thumbnail changes
  const cacheBuster = template.updated_at ? new Date(template.updated_at).getTime() : Date.now()
  const thumbnailUrl = template.thumbnail_url ||
    `https://img.youtube.com/vi/${template.youtube_id}/maxresdefault.jpg?t=${cacheBuster}`

  // Get first 3 tools + count if more
  const displayTools = template.tools_used?.slice(0, 3) || []
  const remainingToolsCount = (template.tools_used?.length || 0) - displayTools.length

  const cardContent = (
    <div
      className="group block bg-card border border-border rounded-lg overflow-hidden hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      onClick={onClick}
    >
      {/* Thumbnail with type badge overlay */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/40">
        <img
          src={thumbnailUrl}
          alt={template.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Type badge - top right */}
        <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded border ${typeBadgeStyles[template.deliverable_type]}`}>
          {typeLabels[template.deliverable_type]}
        </span>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-accent transition-colors mb-2">
          {template.title}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-sm line-clamp-2 flex-1">
          {template.description}
        </p>

        {/* Tools Used */}
        {displayTools.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-border">
            {displayTools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-2 py-1 bg-white/5 rounded text-white/70"
              >
                {tool}
              </span>
            ))}
            {remainingToolsCount > 0 && (
              <span className="text-xs px-2 py-1 text-white/50">
                +{remainingToolsCount} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )

  // Wrap in Link if no custom onClick
  if (!onClick) {
    return (
      <Link to={`/free/${template.slug}`} className="block h-full">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}
