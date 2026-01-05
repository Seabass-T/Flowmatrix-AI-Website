/**
 * Templates Landing Page
 * Browse all FlowMatrix templates, demos, and resources
 */

import { useState, useEffect, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { getTemplates, type Template, type DeliverableType } from '@/lib/templates'
import { TemplateCard, FilterBar, type FilterState } from '@/components/templates'
import { Button } from '@/components/ui/button'

export default function TemplatesLandingPage() {
  // State management
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [filters, setFilters] = useState<FilterState>({
    type: null,
    labels: [],
    search: ''
  })

  // Data fetching
  useEffect(() => {
    getTemplates()
      .then((data) => {
        setTemplates(data)
        setError(null)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  // Extract unique labels and types from templates
  const availableLabels = useMemo(() => {
    const allLabels = templates.flatMap((t) => t.labels || [])
    return Array.from(new Set(allLabels)).sort()
  }, [templates])

  const availableTypes = useMemo(() => {
    const types = templates.map((t) => t.deliverable_type)
    return Array.from(new Set(types)).sort() as DeliverableType[]
  }, [templates])

  // Filtering logic
  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      // Type filter
      if (filters.type && template.deliverable_type !== filters.type) {
        return false
      }

      // Labels filter (template must have at least one selected label)
      if (filters.labels.length > 0) {
        const hasMatchingLabel = filters.labels.some((label) =>
          template.labels?.includes(label)
        )
        if (!hasMatchingLabel) return false
      }

      // Search filter (title or description)
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesTitle = template.title.toLowerCase().includes(searchLower)
        const matchesDescription = template.description.toLowerCase().includes(searchLower)
        if (!matchesTitle && !matchesDescription) return false
      }

      return true
    })
  }, [templates, filters])

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({ type: null, labels: [], search: '' })
  }

  // Retry on error
  const handleRetry = () => {
    setLoading(true)
    setError(null)
    getTemplates()
      .then((data) => {
        setTemplates(data)
        setError(null)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Helmet>
        <title>Free AI Automation Templates & Resources | FlowMatrix AI</title>
        <meta
          name="description"
          content="FlowMatrix AI free templates library. Browse automation templates, AI tools, demos, and resources. N8n workflows, AI integrations, and business automation solutions."
        />
        <meta name="keywords" content="FlowMatrix AI templates, free automation templates, AI templates, n8n workflows, business automation, AI tools, automation resources, FlowMatrix free tools" />
        <link rel="canonical" href="https://flowmatrixai.com/free" />

        {/* Open Graph */}
        <meta property="og:title" content="Free AI Automation Templates | FlowMatrix AI" />
        <meta property="og:description" content="Browse FlowMatrix AI's collection of free automation templates, demos, and resources for businesses." />
        <meta property="og:url" content="https://flowmatrixai.com/free" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://flowmatrixai.com/flowmatrix-logo.webp" />
        <meta property="og:site_name" content="FlowMatrix AI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free AI Automation Templates | FlowMatrix AI" />
        <meta name="twitter:description" content="Browse FlowMatrix AI's collection of free automation templates and resources." />
        <meta name="twitter:image" content="https://flowmatrixai.com/flowmatrixlogo.webp" />
        <meta name="twitter:site" content="@flowmatrix_ai" />

        {/* ItemList Structured Data for Templates */}
        {!loading && !error && filteredTemplates.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "FlowMatrix AI Free Templates & Resources",
              "description": "Free automation templates, AI tools, and resources from FlowMatrix AI",
              "numberOfItems": filteredTemplates.length,
              "itemListElement": filteredTemplates.map((template, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "SoftwareApplication",
                  "name": template.title,
                  "description": template.description,
                  "url": `https://flowmatrixai.com/free/${template.slug}`,
                  "applicationCategory": template.deliverable_type,
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                }
              }))
            })}
          </script>
        )}

        {/* BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://flowmatrixai.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Free Templates",
                "item": "https://flowmatrixai.com/free"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16">
            {/* Prominent Centered Branding */}
            <div className="flex flex-col items-center mb-8">
              <img
                src="/flowmatrix-logo.webp"
                alt="FlowMatrix AI"
                className="h-16 md:h-20 w-auto mb-3"
              />
              <span className="text-white/80 text-base md:text-lg font-medium">Free Resources</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Free Stuff
            </h1>
            <p className="text-xl text-muted-foreground mb-4 text-center max-w-3xl mx-auto">
              Browse automation templates, watch demos, and access exclusive resources for your service business.
            </p>
            {!loading && !error && (
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  {filteredTemplates.length} resource{filteredTemplates.length !== 1 ? 's' : ''} available
                </span>
                {(filters.type || filters.labels.length > 0 || filters.search) && (
                  <span className="text-sm text-muted-foreground">
                    (filtered from {templates.length} total)
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Error State */}
          {error && (
            <div className="bg-card border border-border rounded-lg p-8 text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
                <svg
                  className="w-8 h-8 text-destructive"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Failed to Load Templates</h2>
              <p className="text-muted-foreground mb-6">
                {error.message || 'An unexpected error occurred. Please try again.'}
              </p>
              <Button
                onClick={handleRetry}
                className="bg-accent hover:bg-accent/90 text-black"
              >
                Retry
              </Button>
            </div>
          )}

          {/* Loading + Content Grid */}
          {!error && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filter Sidebar */}
              <aside className="lg:col-span-1">
                {loading ? (
                  <div className="bg-card border border-border rounded-lg p-6 h-96 animate-pulse" />
                ) : (
                  <FilterBar
                    filters={filters}
                    availableLabels={availableLabels}
                    availableTypes={availableTypes}
                    onFilterChange={setFilters}
                    onClearFilters={handleClearFilters}
                  />
                )}
              </aside>

              {/* Templates Grid */}
              <main className="lg:col-span-3">
                {/* Loading State - Skeleton Cards */}
                {loading && (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-card border border-border rounded-lg overflow-hidden animate-pulse"
                      >
                        <div className="aspect-video bg-muted/20" />
                        <div className="p-6 space-y-3">
                          <div className="h-6 bg-muted/20 rounded w-3/4" />
                          <div className="h-4 bg-muted/20 rounded w-full" />
                          <div className="h-4 bg-muted/20 rounded w-5/6" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Empty State - No Results */}
                {!loading && filteredTemplates.length === 0 && (
                  <div className="bg-card border border-border rounded-lg p-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/10 mb-6">
                      <svg
                        className="w-8 h-8 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">No Templates Found</h2>
                    <p className="text-muted-foreground mb-6">
                      {filters.type || filters.labels.length > 0 || filters.search
                        ? 'Try adjusting your filters to see more results.'
                        : 'No templates are currently available.'}
                    </p>
                    {(filters.type || filters.labels.length > 0 || filters.search) && (
                      <Button
                        onClick={handleClearFilters}
                        variant="outline"
                        className="border-border hover:bg-card hover:border-accent/50"
                      >
                        Clear All Filters
                      </Button>
                    )}
                  </div>
                )}

                {/* Templates Grid - Success State */}
                {!loading && filteredTemplates.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-300">
                    {filteredTemplates.map((template) => (
                      <TemplateCard key={template.id} template={template} />
                    ))}
                  </div>
                )}
              </main>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
