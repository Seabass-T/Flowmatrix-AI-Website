/**
 * Template Detail Page
 * Displays full template information with video, tools, labels, and email gate
 */

import { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { useParams, Link } from 'react-router-dom'
import { getTemplateBySlug, trackTemplateView, type Template } from '@/lib/templates'
import { YouTubeEmbed, EmailGate } from '@/components/templates'
import { Badge } from '@/components/ui/badge'

// Type badge styles (matching TemplateCard)
const typeBadgeStyles: Record<string, string> = {
  template: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  demo: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  document: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  discount: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  tool: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  course: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
}

const typeLabels: Record<string, string> = {
  template: 'Template',
  demo: 'Live Demo',
  document: 'Document',
  discount: 'Discount',
  tool: 'Free Tool',
  course: 'Course',
}

export default function TemplateDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  const [template, setTemplate] = useState<Template | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  // Data fetching
  useEffect(() => {
    if (!slug) return

    setLoading(true)
    setError(null)

    getTemplateBySlug(slug)
      .then((data) => {
        setTemplate(data)
        setError(null)
      })
      .catch((err) => {
        setError(err)
        setTemplate(null)
      })
      .finally(() => setLoading(false))
  }, [slug])

  // Track view (fire once when template loads)
  useEffect(() => {
    if (template?.id) {
      trackTemplateView({
        template_id: template.id,
        source_url: document.referrer || null,
        user_agent: navigator.userAgent,
      }).catch((err) => {
        console.error('Failed to track view:', err)
      })
    }
  }, [template?.id])

  // Memoize email success callback to prevent infinite re-renders
  const handleEmailSuccess = useCallback((email: string) => {
    console.log('Email captured:', email)
    // Phase 5: Will implement deliverable download/reveal
  }, [])

  // Loading state
  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading... | FlowMatrix AI Templates</title>
        </Helmet>
        <div className="min-h-screen bg-black text-white">
          {/* Sticky Back Link */}
          <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 py-4">
              <Link to="/free" className="text-white/60 hover:text-white transition-colors">
                ← Back to Templates
              </Link>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Skeleton Video */}
            <div className="aspect-video w-full rounded-lg bg-card border border-border animate-pulse mb-8" />

            {/* Skeleton Header */}
            <div className="mb-6">
              <div className="h-6 w-24 bg-muted/20 rounded mb-3 animate-pulse" />
              <div className="h-10 w-3/4 bg-muted/20 rounded animate-pulse" />
            </div>

            {/* Skeleton Description */}
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-muted/20 rounded animate-pulse" />
              <div className="h-4 bg-muted/20 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-muted/20 rounded w-4/6 animate-pulse" />
            </div>
          </div>
        </div>
      </>
    )
  }

  // 404 Not Found
  if (!loading && !template) {
    return (
      <>
        <Helmet>
          <title>Template Not Found | FlowMatrix AI</title>
        </Helmet>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
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
            <h1 className="text-4xl font-bold mb-4">Template Not Found</h1>
            <p className="text-white/60 mb-8">
              This template doesn't exist or has been removed.
            </p>
            <Link
              to="/free"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              ← Back to Templates
            </Link>
          </div>
        </div>
      </>
    )
  }

  // Error state
  if (error) {
    return (
      <>
        <Helmet>
          <title>Error | FlowMatrix AI Templates</title>
        </Helmet>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
            <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
            <p className="text-white/60 mb-8">{error.message}</p>
            <Link
              to="/free"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              ← Back to Templates
            </Link>
          </div>
        </div>
      </>
    )
  }

  // Success state - template loaded
  return (
    <>
      <Helmet>
        <title>{template.title} | FlowMatrix AI Free Templates</title>
        <meta name="description" content={`${template.description.slice(0, 155)} - FlowMatrix AI`} />
        <meta name="keywords" content={`FlowMatrix AI, ${template.title}, ${template.labels?.join(', ')}, ${template.tools_used?.join(', ')}, automation template, AI template`} />
        <link rel="canonical" href={`https://flowmatrixai.com/free/${template.slug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${template.title} | FlowMatrix AI`} />
        <meta property="og:description" content={template.description.slice(0, 160)} />
        <meta
          property="og:image"
          content={template.thumbnail_url || `https://img.youtube.com/vi/${template.youtube_id}/maxresdefault.jpg`}
        />
        <meta property="og:url" content={`https://flowmatrixai.com/free/${template.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="FlowMatrix AI" />
        <meta property="article:published_time" content={template.published_at || template.created_at} />
        <meta property="article:author" content="FlowMatrix AI" />
        {template.labels && template.labels.map((label) => (
          <meta key={label} property="article:tag" content={label} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${template.title} | FlowMatrix AI`} />
        <meta name="twitter:description" content={template.description.slice(0, 160)} />
        <meta name="twitter:image" content={template.thumbnail_url || `https://img.youtube.com/vi/${template.youtube_id}/maxresdefault.jpg`} />
        <meta name="twitter:site" content="@flowmatrix_ai" />

        {/* SoftwareApplication Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": template.title,
            "description": template.description,
            "url": `https://flowmatrixai.com/free/${template.slug}`,
            "applicationCategory": template.deliverable_type,
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "author": {
              "@type": "Organization",
              "name": "FlowMatrix AI",
              "url": "https://flowmatrixai.com"
            },
            "datePublished": template.published_at || template.created_at,
            "keywords": [template.title, ...(template.labels || []), ...(template.tools_used || [])].join(', '),
            "video": template.youtube_id ? {
              "@type": "VideoObject",
              "name": template.title,
              "description": template.description,
              "thumbnailUrl": `https://img.youtube.com/vi/${template.youtube_id}/maxresdefault.jpg`,
              "uploadDate": template.published_at || template.created_at,
              "embedUrl": `https://www.youtube.com/embed/${template.youtube_id}`
            } : undefined
          })}
        </script>

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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": template.title,
                "item": `https://flowmatrixai.com/free/${template.slug}`
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Sticky Back Link */}
        <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <Link
              to="/free"
              className="inline-flex items-center text-white/60 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Templates
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Video Section - ALWAYS VISIBLE */}
          <div className="mb-8">
            <YouTubeEmbed videoId={template.youtube_id} title={template.title} />
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              {/* Type Badge */}
              <span className={`px-3 py-1 text-sm font-medium rounded border ${typeBadgeStyles[template.deliverable_type]}`}>
                {typeLabels[template.deliverable_type]}
              </span>

              {/* Builders */}
              {template.builders && template.builders.length > 0 && (
                <span className="text-white/60 text-sm">
                  By {template.builders.join(', ')}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {template.title}
            </h1>
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-white/80 leading-relaxed">
              {template.description}
            </p>
          </div>

          {/* Tools & Labels Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Tools Used */}
            {template.tools_used && template.tools_used.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-white/60 uppercase tracking-wide mb-3">
                  Tools & Integrations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {template.tools_used.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-white/5 border border-border rounded-full text-sm text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Topics/Labels */}
            {template.labels && template.labels.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-white/60 uppercase tracking-wide mb-3">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {template.labels.map((label) => (
                    <Badge
                      key={label}
                      className="cursor-pointer bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 transition-colors"
                    >
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Email Gate Section - PROMINENT */}
          <div className="mt-12 border-t border-border pt-12">
            <EmailGate
              template={template}
              onSuccess={handleEmailSuccess}
            />
          </div>
        </div>
      </div>
    </>
  )
}
