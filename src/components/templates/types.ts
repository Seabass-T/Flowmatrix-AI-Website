/**
 * Type definitions for Templates System components
 */

import type { Template, DeliverableType } from '@/lib/templates'

export interface FilterState {
  type: DeliverableType | null
  labels: string[]
  search: string
}

export interface TemplateCardProps {
  template: Template
  onClick?: () => void
}

export interface YouTubeEmbedProps {
  videoId: string
  title: string
  className?: string
}

export interface EmailGateProps {
  template: Template
  onSuccess: (email: string) => void
}

export interface FilterBarProps {
  filters: FilterState
  availableLabels: string[]
  availableTypes: DeliverableType[]
  onFilterChange: (filters: FilterState) => void
  onClearFilters: () => void
}

// Content type badge color mapping
export const TYPE_BADGE_COLORS: Record<DeliverableType, string> = {
  template: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  demo: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  document: 'bg-green-500/10 text-green-400 border-green-500/20',
  discount: 'bg-accent/10 text-accent border-accent/20',
  tool: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  course: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
}

// Content type display names
export const TYPE_DISPLAY_NAMES: Record<DeliverableType, string> = {
  template: 'Template',
  demo: 'Demo',
  document: 'Document',
  discount: 'Discount',
  tool: 'Tool',
  course: 'Course',
}
