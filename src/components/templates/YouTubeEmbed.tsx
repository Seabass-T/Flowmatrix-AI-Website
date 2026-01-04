/**
 * YouTubeEmbed Component
 * Responsive YouTube video embed with lazy loading
 */

import { cn } from '@/lib/utils'
import type { YouTubeEmbedProps } from './types'

export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  return (
    <div className={cn('relative w-full', className)}>
      {/* Aspect ratio container (16:9) */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/40 border border-border">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {/* Optional: Video caption */}
      <p className="mt-3 text-sm text-muted-foreground text-center">
        Watch the full tutorial above
      </p>
    </div>
  )
}
