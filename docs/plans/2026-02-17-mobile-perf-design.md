# Mobile Performance Optimization Design

> **Date:** 2026-02-17
> **Status:** Approved
> **Repo:** Seabass-T/Flowmatrix-AI-Website
> **Constraint:** Desktop functionality and visuals remain unchanged

---

## Problem Statement

The FlowMatrix AI website is glitchy and slow on mobile devices. The root cause is the runtime rendering load from canvas-based visual effects and CSS animations running without any mobile awareness.

Key findings from analysis:
- **7 simultaneous canvas RAF loops** on the homepage at initial load
- **21 blurred Aurora divs** animating via CSS simultaneously
- **Zero mobile device detection** in the entire canvas effects system
- **No `prefers-reduced-motion` support** (accessibility violation)
- Individual service page effects (748-triangle mesh, 37-neuron cascade) are too heavy for mobile GPUs even in isolation
- Uncapped frame rate means 120fps on ProMotion iPhones (4x the 30fps visual minimum for ambient effects)

---

## Approach: Performance Gate Pattern

A central `usePerformanceMode()` hook detects device capability and exposes a performance tier. Each canvas component reads this tier and adjusts its rendering parameters. A `LazySection` wrapper defers mounting of below-fold homepage sections.

---

## Section 1: usePerformanceMode Hook

**New file:** `src/hooks/usePerformanceMode.ts`

Returns `{ mode: 'full' | 'lite' | 'static', isMobile: boolean }`

Detection logic (in priority order):

1. Check `prefers-reduced-motion` media query. If enabled: `mode = 'static'`
2. Check screen width. If >= 768px: `mode = 'full'` (desktop)
3. If mobile, check device capability:
   - `navigator.hardwareConcurrency` (CPU cores)
   - `navigator.deviceMemory` (RAM in GB, Chrome-only)
   - Device pixel ratio
   - High-end mobile (8+ cores, 4GB+ RAM): `mode = 'lite'`
   - Everything else mobile: `mode = 'static'`

### Mode Definitions

| Mode | Target Devices | Canvas Behavior | CSS Animations |
|------|---------------|-----------------|----------------|
| `full` | Desktop | Unchanged | Unchanged |
| `lite` | Capable phones (iPhone 13+, Pixel 7+, etc.) | Reduced params, 30fps cap | Aurora reduced to 1 div, blur halved |
| `static` | Budget phones, reduced-motion users | Canvas replaced with CSS gradient | All animations disabled |

---

## Section 2: LazySection Wrapper

**New file:** `src/components/shared/LazySection.tsx`

**Modified file:** `src/pages/Index.tsx`

Wraps below-fold homepage sections. Uses IntersectionObserver with `rootMargin: '200px'` to defer mounting until the section approaches the viewport.

### Before (current)
All 7 sections mount eagerly. 7 canvas RAF loops start on page load.

### After
Only HeroSection mounts eagerly (above fold). Remaining 6 sections mount as the user scrolls near them.

**Behavior:**
- Renders a placeholder `div` with estimated `min-height` to prevent layout collapse
- IntersectionObserver fires once when the placeholder enters the 200px approach zone
- Mounts the real child component (one-time, never unmounts after mounting)
- Works on both desktop and mobile (universal optimization)

**Impact:**
- Initial load: 2 active canvases (Hero) instead of 7
- Each section's effects start only when needed

---

## Section 3: Canvas Effect Parameter Adjustments

**Modified file:** `src/components/ui/VisualEffects.tsx`

Each canvas component reads `usePerformanceMode()` and adjusts rendering.

### TopologyLines

| Parameter | full | lite | static |
|-----------|------|------|--------|
| Line count | 8 | 4 | CSS gradient |
| Step size (px) | 4 | 8 | N/A |
| Mouse interaction | Yes | No | N/A |
| FPS | Uncapped | 30 | N/A |

### PerspectiveGrid

| Parameter | full | lite | static |
|-----------|------|------|--------|
| Horizontal lines | 30 | 12 | CSS gradient |
| Vertical lines | 24 | 10 | N/A |
| Gradient allocation | Per-frame | Cached | N/A |
| FPS | Uncapped | 30 | N/A |

### TessellationMesh (/personalized-software)

| Parameter | full | lite | static |
|-----------|------|------|--------|
| Grid | 12x35 (748 tri) | 6x15 (~140 tri) | CSS gradient |
| Wave spawning | Every 20-40 frames | Every 60-80 frames | N/A |
| FPS | Uncapped | 30 | N/A |

### NeuralPulse (/ai-implementation)

| Parameter | full | lite | static |
|-----------|------|------|--------|
| Neurons | 37 | 12 | CSS gradient |
| Cascade frequency | Every 50-130 frames | Every 150-250 frames | N/A |
| Lightning segments | 8 | 4 | N/A |
| FPS | Uncapped | 30 | N/A |

### RadarSweep (/assessment)

| Parameter | full | lite | static |
|-----------|------|------|--------|
| Centers | 12 | 4 | CSS gradient |
| Blip particles | 6/center | 3/center | N/A |
| Gradient caching | None | Cached per center | N/A |
| FPS | Uncapped | 30 | N/A |

### DataFlow (/database-mobilization)

| Parameter | full | lite | static |
|-----------|------|------|--------|
| Max particles | 60 | 20 | CSS gradient |
| Trail length | 4 | 2 | N/A |
| Connection passes | 3 | 1 (sharp only) | N/A |
| Float32Array alloc | Per-frame | Pre-allocated | N/A |
| FPS | Uncapped | 30 | N/A |

### FPS Capping Implementation (lite mode)

Delta-time accumulation in the RAF loop:
```
const targetInterval = 1000 / 30; // 33ms for 30fps
let lastDrawTime = 0;

function loop(timestamp) {
  rafId = requestAnimationFrame(loop);
  if (timestamp - lastDrawTime < targetInterval) return;
  lastDrawTime = timestamp;
  draw(); // actual rendering
}
```

### Static Mode Fallback

When `mode === 'static'`, the canvas is not mounted. A `div` with a radial gradient matching the effect's accent color provides a subtle ambient background with no animation and no JavaScript execution.

---

## Section 4: CSS and Miscellaneous Optimizations

### Aurora Reduction (Mobile)

**Modified file:** `src/components/ui/VisualEffects.tsx` (Aurora component)

- `lite`: 1 div instead of 3, blur reduced from 120-160px to 60px
- `static`: Single static radial gradient, no animation

### prefers-reduced-motion Support

**Modified file:** `src/index.css`

Add a media query block that disables all keyframe animations:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Canvas effects handle this via `usePerformanceMode` returning `'static'`.

### Navigation Scroll Listener

**Modified file:** `src/components/layout/Navigation.tsx`

Add `{ passive: true }` to the scroll event listener.

### Reveal Component

**Modified file:** `src/components/ui/VisualEffects.tsx` (Reveal component)

Change `transition-all` to `transition: opacity 500ms ease-out, transform 500ms ease-out`.

### Image Optimizations

**Modified files:** `FoundersSection.tsx`, `ProofSection.tsx`, `Navigation.tsx`

- Add `loading="lazy"` to founder photos and client logos
- Add `width` and `height` attributes to navigation logo
- Convert PNG founder photos to WebP (811KB + 354KB savings)

### Mousemove Listener Cleanup

**Modified file:** `src/components/ui/VisualEffects.tsx`

When `isMobile` is true, skip registering `window.addEventListener('mousemove')` in all canvas effects. Touch devices don't fire mousemove events, so these are currently dead listeners.

---

## Files Changed Summary

| File | Change Type | Description |
|------|-------------|-------------|
| `src/hooks/usePerformanceMode.ts` | New | Central performance tier detection hook |
| `src/components/shared/LazySection.tsx` | New | IntersectionObserver-based deferred section mount |
| `src/components/ui/VisualEffects.tsx` | Modified | All 6 canvas effects + Aurora + Reveal adjusted for performance tiers |
| `src/pages/Index.tsx` | Modified | Wrap below-fold sections with LazySection |
| `src/index.css` | Modified | Add prefers-reduced-motion media query |
| `src/components/layout/Navigation.tsx` | Modified | Passive scroll listener, logo dimensions |
| `src/components/sections/FoundersSection.tsx` | Modified | Lazy image loading |
| `src/components/sections/ProofSection.tsx` | Modified | Lazy image loading |
| `public/` | Modified | WebP versions of founder photos |

**Total: 2 new files, 7 modified files**

---

## Expected Impact

| Metric | Before | After (lite) | After (static) |
|--------|--------|--------------|----------------|
| Active canvases on homepage load | 7 | 2 (deferred) | 0 |
| RAF loops at 120fps on iPhone | 7 | 2 at 30fps | 0 |
| Aurora blur divs | 21 | 3 (reduced blur) | 0 |
| Draw calls/frame (TessellationMesh) | ~9,000 | ~1,500 | 0 |
| Draw calls/frame (NeuralPulse) | ~900+ | ~200 | 0 |
| Gradient allocs/sec (RadarSweep) | 1,440 | 240 (cached) | 0 |
| Global mousemove listeners | 7-8 | 0 on mobile | 0 on mobile |
| Founder photo weight | 1.16MB | ~460KB (WebP) | ~460KB (WebP) |
| prefers-reduced-motion | Ignored | Respected | Respected |
