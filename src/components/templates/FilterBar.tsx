/**
 * FilterBar Component
 * Provides filtering controls for templates by type, labels, and search
 */

import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import type { FilterBarProps, DeliverableType } from './types'

const typeLabels: Record<DeliverableType, string> = {
  template: 'Template',
  demo: 'Live Demo',
  document: 'Document',
  discount: 'Discount',
  tool: 'Free Tool',
  course: 'Course',
}

export function FilterBar({
  filters,
  availableLabels,
  availableTypes,
  onFilterChange,
  onClearFilters,
}: FilterBarProps) {
  const handleTypeClick = (type: DeliverableType | null) => {
    onFilterChange({ ...filters, type })
  }

  const handleLabelClick = (label: string) => {
    const isSelected = filters.labels.includes(label)
    const newLabels = isSelected
      ? filters.labels.filter((l) => l !== label)
      : [...filters.labels, label]

    onFilterChange({ ...filters, labels: newLabels })
  }

  const handleSearchChange = (search: string) => {
    onFilterChange({ ...filters, search })
  }

  const hasActiveFilters = filters.type !== null || filters.labels.length > 0 || filters.search !== ''

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      {/* Search */}
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-white mb-2">
          Search Templates
        </label>
        <Input
          id="search"
          type="text"
          placeholder="Search by title or description..."
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="bg-black border-border focus:border-accent focus:ring-accent text-white"
        />
      </div>

      {/* Type Filter - Horizontal Pill Buttons */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-white">
            Filter by Type
          </label>
          {filters.type && (
            <button
              onClick={() => handleTypeClick(null)}
              className="text-xs text-muted-foreground hover:text-white transition-colors"
            >
              Clear type
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {/* All Types Button */}
          <button
            onClick={() => handleTypeClick(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filters.type === null
                ? 'bg-accent text-black'
                : 'border border-border text-white/70 hover:border-white/50'
            }`}
          >
            All
          </button>

          {/* Type Buttons */}
          {(['template', 'demo', 'document', 'discount', 'tool', 'course'] as const).map((type) => (
            <button
              key={type}
              onClick={() => handleTypeClick(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filters.type === type
                  ? 'bg-accent text-black'
                  : 'border border-border text-white/70 hover:border-white/50'
              }`}
            >
              {typeLabels[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Labels Filter */}
      {availableLabels.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-white">
              Filter by Tags ({filters.labels.length} selected)
            </label>
            {filters.labels.length > 0 && (
              <button
                onClick={() => onFilterChange({ ...filters, labels: [] })}
                className="text-xs text-muted-foreground hover:text-white transition-colors"
              >
                Clear tags
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto scrollbar-hide">
            {availableLabels.map((label) => {
              const isSelected = filters.labels.includes(label)
              return (
                <Badge
                  key={label}
                  onClick={() => handleLabelClick(label)}
                  className={`cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-accent/20 text-accent border-accent'
                      : 'bg-muted/10 text-muted-foreground border-border hover:border-accent/50'
                  }`}
                >
                  {label}
                </Badge>
              )
            })}
          </div>
        </div>
      )}

      {/* Clear All Filters */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-border">
          <Button
            onClick={onClearFilters}
            variant="outline"
            className="w-full border-border hover:bg-card hover:border-accent/50"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  )
}
