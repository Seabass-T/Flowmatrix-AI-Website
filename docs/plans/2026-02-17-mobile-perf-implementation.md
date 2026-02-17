# Mobile Performance Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Eliminate mobile glitchiness by adding a performance tier system that reduces canvas and CSS animation load on mobile devices while keeping desktop unchanged.

**Architecture:** Central `usePerformanceMode` hook detects device capability and returns a tier (`full`/`lite`/`static`). Each visual effect reads this tier and adjusts its rendering. A `LazySection` wrapper defers mounting below-fold homepage sections. No test framework exists; verification is via `npm run build` and manual browser checks.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Canvas 2D API

**Design Doc:** `docs/plans/2026-02-17-mobile-perf-design.md`

---

## Task 1: Create usePerformanceMode Hook

**Files:**
- Create: `src/hooks/usePerformanceMode.ts`

**Step 1: Create the hook file**

```typescript
// src/hooks/usePerformanceMode.ts
import { useState, useEffect } from 'react';

export type PerformanceMode = 'full' | 'lite' | 'static';

interface PerformanceModeResult {
  mode: PerformanceMode;
  isMobile: boolean;
}

const MOBILE_BREAKPOINT = 768;

function detectMode(): PerformanceModeResult {
  // SSR safety
  if (typeof window === 'undefined') {
    return { mode: 'full', isMobile: false };
  }

  // 1. Respect prefers-reduced-motion (accessibility)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return { mode: 'static', isMobile: window.innerWidth < MOBILE_BREAKPOINT };
  }

  // 2. Desktop gets full mode
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  if (!isMobile) {
    return { mode: 'full', isMobile: false };
  }

  // 3. Mobile: check device capability
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 4; // Chrome-only, fallback to 4
  const isHighEnd = cores >= 8 && memory >= 4;

  return {
    mode: isHighEnd ? 'lite' : 'static',
    isMobile: true,
  };
}

export function usePerformanceMode(): PerformanceModeResult {
  const [result, setResult] = useState<PerformanceModeResult>(detectMode);

  useEffect(() => {
    // Re-detect on resize (e.g., tablet rotation)
    const handleResize = () => {
      setResult(detectMode());
    };

    // Also listen for reduced-motion preference changes
    const motionMql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => {
      setResult(detectMode());
    };

    window.addEventListener('resize', handleResize);
    motionMql.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      motionMql.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return result;
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors. The hook is not yet imported anywhere.

**Step 3: Commit**

```bash
git add src/hooks/usePerformanceMode.ts
git commit -m "feat: add usePerformanceMode hook for device tier detection"
```

---

## Task 2: Create LazySection Wrapper

**Files:**
- Create: `src/components/shared/LazySection.tsx`

**Step 1: Create the component**

```typescript
// src/components/shared/LazySection.tsx
import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  minHeight?: string;
  rootMargin?: string;
}

export const LazySection = ({
  children,
  minHeight = '100vh',
  rootMargin = '200px',
}: LazySectionProps) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: `${rootMargin} 0px ${rootMargin} 0px` }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: mounted ? undefined : minHeight }}>
      {mounted ? children : null}
    </div>
  );
};
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/shared/LazySection.tsx
git commit -m "feat: add LazySection wrapper for deferred section mounting"
```

---

## Task 3: Wire LazySection into Homepage

**Files:**
- Modify: `src/pages/Index.tsx`

**Step 1: Update Index.tsx**

Add `LazySection` import at the top, then wrap all sections after `HeroSection`:

```typescript
// src/pages/Index.tsx
import { Helmet } from 'react-helmet';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import StakesSection from '@/components/sections/StakesSection';
import PillarsSection from '@/components/sections/PillarsSection';
import ProofSection from '@/components/sections/ProofSection';
import FoundersSection from '@/components/sections/FoundersSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import { LazySection } from '@/components/shared/LazySection';
import { SEO } from '@/lib/constants';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-black min-h-screen">
        <Navigation />

        <main>
          <HeroSection />
          <LazySection minHeight="80vh">
            <StakesSection />
          </LazySection>
          <LazySection minHeight="100vh">
            <PillarsSection />
          </LazySection>
          <LazySection minHeight="60vh">
            <ProofSection />
          </LazySection>
          <LazySection minHeight="60vh">
            <FoundersSection />
          </LazySection>
          <LazySection minHeight="50vh">
            <FAQSection />
          </LazySection>
          <LazySection minHeight="50vh">
            <CTASection />
          </LazySection>
        </main>
      </div>
    </>
  );
};

export default Index;
```

The `minHeight` values are estimates to prevent layout collapse. They don't need to be exact since `LazySection` removes `minHeight` once the child mounts. Err on the side of slightly too tall to avoid content jumping.

**Step 2: Verify build and manually test**

Run: `npm run build`
Expected: Build succeeds.

Manual test: `npm run dev`, open browser, scroll homepage. Sections should appear smoothly as you scroll. No blank gaps or content flashes.

**Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "perf: defer below-fold homepage sections with LazySection"
```

---

## Task 4: Add prefers-reduced-motion CSS

**Files:**
- Modify: `src/index.css`

**Step 1: Add the media query**

Append the following at the very end of `src/index.css` (after line 198, the last `}`):

```css
/* Accessibility: respect OS-level reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/index.css
git commit -m "a11y: add prefers-reduced-motion support for all CSS animations"
```

---

## Task 5: Fix Reveal Component transition-all

**Files:**
- Modify: `src/components/ui/VisualEffects.tsx` (line 103)

**Step 1: Replace transition-all**

At line 103 of `VisualEffects.tsx`, the `Reveal` component uses:
```tsx
className={cn('transition-all duration-500 ease-out', className)}
```

Change to use explicit `style` for the transition instead of the Tailwind class, so only `opacity` and `transform` are watched:

```tsx
className={cn(className)}
style={{
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : transforms[direction],
  transitionDelay: `${delay}ms`,
  transitionProperty: 'opacity, transform',
  transitionDuration: '500ms',
  transitionTimingFunction: 'ease-out',
}}
```

This replaces the existing `style` block (lines 104-108) and removes the `transition-all duration-500 ease-out` classes. The `className` prop is kept for any external classes.

**Full updated Reveal component (lines 81-113):**

```tsx
export const Reveal = ({
  children,
  isVisible,
  delay = 0,
  direction = 'up',
  className,
}: {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
}) => {
  const transforms = {
    up: 'translate3d(0, 24px, 0)',
    left: 'translate3d(-24px, 0, 0)',
    right: 'translate3d(24px, 0, 0)',
    scale: 'scale(0.97)',
  };

  return (
    <div
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : transforms[direction],
        transitionProperty: 'opacity, transform',
        transitionDuration: '500ms',
        transitionTimingFunction: 'ease-out',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/ui/VisualEffects.tsx
git commit -m "perf: replace transition-all with explicit opacity/transform in Reveal"
```

---

## Task 6: Add Performance Mode to Aurora Component

**Files:**
- Modify: `src/components/ui/VisualEffects.tsx` (Aurora component, lines 116-146)

**Step 1: Update Aurora to accept and use performance mode**

Replace the Aurora component (lines 116-146) with a performance-aware version. Import `usePerformanceMode` at the top of the file (add to the existing import line 1):

Add this import at the top of the file after the existing imports:
```typescript
import { usePerformanceMode } from '@/hooks/usePerformanceMode';
```

Then replace the Aurora component:

```tsx
export const Aurora = ({ className }: { className?: string }) => {
  const { mode } = usePerformanceMode();

  // Static mode: single non-animated gradient
  if (mode === 'static') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(43, 59%, 55%, 0.08) 0%, transparent 70%)',
            top: '10%',
            right: '5%',
            filter: 'blur(80px)',
          }}
        />
      </div>
    );
  }

  // Lite mode: single animated div with reduced blur
  if (mode === 'lite') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[60px] animate-aurora-1"
          style={{
            background: 'radial-gradient(circle, hsla(43, 59%, 55%, 0.10) 0%, transparent 70%)',
            top: '-15%',
            right: '-10%',
          }}
        />
      </div>
    );
  }

  // Full mode: original 3-div aurora (unchanged)
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-[160px] animate-aurora-1"
        style={{
          background: 'radial-gradient(circle, hsla(43, 59%, 55%, 0.12) 0%, transparent 70%)',
          top: '-25%',
          right: '-15%',
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px] animate-aurora-2"
        style={{
          background: 'radial-gradient(circle, hsla(220, 40%, 70%, 0.06) 0%, transparent 70%)',
          bottom: '-15%',
          left: '-10%',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] animate-aurora-3"
        style={{
          background: 'radial-gradient(circle, hsla(43, 59%, 55%, 0.07) 0%, transparent 60%)',
          top: '30%',
          left: '25%',
        }}
      />
    </div>
  );
};
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/ui/VisualEffects.tsx
git commit -m "perf: add performance tiers to Aurora component"
```

---

## Task 7: Add Performance Mode to TopologyLines

**Files:**
- Modify: `src/components/ui/VisualEffects.tsx` (TopologyLines, lines 149-280)

**Step 1: Add static fallback and lite mode parameters**

The TopologyLines component needs these changes:

1. Call `usePerformanceMode()` at the top of the component
2. If `mode === 'static'`, return a CSS gradient div instead of the canvas
3. If `mode === 'lite'`: use 4 lines instead of 8, step size 8 instead of 4, skip mouse listener, cap to 30fps
4. If `isMobile`, skip the `window.addEventListener('mousemove')` registration

Replace the component starting at line 149. The key structural changes inside the `useEffect`:

**Static fallback (early return before the useEffect):**
```tsx
export const TopologyLines = ({ className }: { className?: string }) => {
  const { mode, isMobile } = usePerformanceMode();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Static mode: no canvas, just a subtle gradient
  if (mode === 'static') {
    return (
      <div
        className={cn('absolute inset-0 pointer-events-none', className)}
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsla(43, 59%, 55%, 0.03) 50%, transparent 100%)',
        }}
      />
    );
  }
  // ... rest of component with useEffect
```

**Inside the useEffect, use mode to set parameters:**
```typescript
const lineCount = mode === 'lite' ? 4 : 8;
const stepSize = mode === 'lite' ? 8 : 4;
const targetFps = mode === 'lite' ? 30 : 0; // 0 = uncapped
const targetInterval = targetFps > 0 ? 1000 / targetFps : 0;
let lastDrawTime = 0;
```

**Replace the animation loop to support FPS capping:**
```typescript
const animate = (timestamp: number) => {
  animationId = requestAnimationFrame(animate);
  if (!visible) return;
  if (targetInterval > 0 && timestamp - lastDrawTime < targetInterval) return;
  lastDrawTime = timestamp;
  // ... existing draw code
};
animationId = requestAnimationFrame(animate);
```

Note: The existing `animate` function signature is `const animate = () => { ... }`. Change it to accept `timestamp` as shown above.

**Skip mousemove on mobile:**
```typescript
if (!isMobile) {
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
}
// In cleanup:
if (!isMobile) {
  window.removeEventListener('mousemove', handleMouseMove);
}
```

**Use `lineCount` in the draw loop** where lines are currently iterated 0-7:
```typescript
for (let i = 0; i < lineCount; i++) { ... }
```

**Use `stepSize` in `drawLine`** where the inner loop currently uses `x += 4`:
```typescript
for (let x = 0; x <= cachedWidth; x += stepSize) { ... }
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/ui/VisualEffects.tsx
git commit -m "perf: add performance tiers to TopologyLines canvas"
```

---

## Task 8: Add Performance Mode to PerspectiveGrid

**Files:**
- Modify: `src/components/ui/VisualEffects.tsx` (PerspectiveGrid, lines 1495-1679)

**Step 1: Apply the same pattern as TopologyLines**

1. Call `usePerformanceMode()` at top
2. Static fallback: return gradient div
3. Lite mode parameters: `hLines = 12`, `vLines = 10`, 30fps cap, skip mousemove
4. Cache the horizon radial gradient: only recreate when `vpX` changes by more than 2px

**Static fallback:**
```tsx
if (mode === 'static') {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, hsla(43, 59%, 55%, 0.02) 60%, hsla(43, 59%, 55%, 0.05) 100%)',
      }}
    />
  );
}
```

**Lite parameters inside useEffect:**
```typescript
const hLineCount = mode === 'lite' ? 12 : 30;
const vLineCount = mode === 'lite' ? 10 : 24;
const targetFps = mode === 'lite' ? 30 : 0;
const targetInterval = targetFps > 0 ? 1000 / targetFps : 0;
let lastDrawTime = 0;
```

**Same FPS capping pattern and mousemove gating as Task 7.**

Use `hLineCount` and `vLineCount` in the draw loops where the current code iterates with hardcoded 30 and 24.

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/ui/VisualEffects.tsx
git commit -m "perf: add performance tiers to PerspectiveGrid canvas"
```

---

## Task 9: Add Performance Mode to DataFlow

**Files:**
- Modify: `src/components/ui/VisualEffects.tsx` (DataFlow, lines 282-575)

**Step 1: Apply performance tiers**

DataFlow accepts props: `{ className, nodes, connectionDist, accentHue }`.

Changes:
1. Call `usePerformanceMode()` at top
2. Static fallback: gradient div
3. Lite mode:
   - `maxParticles = 20` (vs current `Math.min(connections.length * 3, 60)`)
   - Trail length 2 (vs 4)
   - Only draw the sharp connection pass (skip glow and mid passes)
   - Pre-allocate `connAlphas` Float32Array once instead of per-frame
   - 30fps cap
   - Skip mousemove on mobile

**For the Float32Array fix**, move the allocation outside the draw loop:
```typescript
// Before (inside draw):
const connAlphas = new Float32Array(connections.length);
// After (outside draw, inside useEffect):
const connAlphas = new Float32Array(connections.length);
// Then inside draw, just zero it:
connAlphas.fill(0);
```

This applies to BOTH full and lite modes since it's a pure performance fix with no visual impact.

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/ui/VisualEffects.tsx
git commit -m "perf: add performance tiers to DataFlow canvas, fix Float32Array alloc"
```

---

## Task 10: Add Performance Mode to NeuralPulse

**Files:**
- Modify: `src/components/ui/VisualEffects.tsx` (NeuralPulse, lines 577-920)

**Step 1: Apply performance tiers**

NeuralPulse accepts props: `{ className, neurons, axonDist, accentHue }`.

On the `/ai-implementation` service page, 37 neurons are passed. In lite mode, only the first 12 will be used.

Changes:
1. Call `usePerformanceMode()` at top
2. Static fallback: gradient div
3. Lite mode:
   - Limit neuron array to first 12 entries: `const activeNeurons = mode === 'lite' ? neurons.slice(0, 12) : neurons`
   - Cascade frequency: `nextCascade = 150 + Math.floor(Math.random() * 100)` (vs `50 + Math.floor(Math.random() * 80)`)
   - Lightning segments: 4 instead of 8 in `buildLightningPath`
   - 30fps cap
   - Skip mousemove on mobile

**Important:** `activeNeurons` must be used everywhere the current code uses `neurons` inside the useEffect. This includes `nPos` array creation, axon connection building, and all drawing loops.

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/ui/VisualEffects.tsx
git commit -m "perf: add performance tiers to NeuralPulse canvas"
```

---

## Task 11: Add Performance Mode to TessellationMesh

**Files:**
- Modify: `src/components/ui/VisualEffects.tsx` (TessellationMesh, lines 922-1254)

**Step 1: Apply performance tiers**

TessellationMesh accepts props: `{ className, cols, rows, accentHue }`. The service page passes `cols=12, rows=35`.

Changes:
1. Call `usePerformanceMode()` at top
2. Static fallback: gradient div
3. Lite mode:
   - Override grid: `const activeCols = mode === 'lite' ? Math.min(cols, 6) : cols`
   - Override grid: `const activeRows = mode === 'lite' ? Math.min(rows, 15) : rows`
   - Wave spawning interval: `60 + Math.floor(Math.random() * 40)` (vs `20 + Math.floor(Math.random() * 40)`)
   - 30fps cap
   - Skip mousemove (TessellationMesh uses `canvas.addEventListener('mousemove')` not `window`)

**Important:** Use `activeCols` and `activeRows` everywhere in vertex generation, triangle calculation, and draw loops.

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/ui/VisualEffects.tsx
git commit -m "perf: add performance tiers to TessellationMesh canvas"
```

---

## Task 12: Add Performance Mode to RadarSweep

**Files:**
- Modify: `src/components/ui/VisualEffects.tsx` (RadarSweep, lines 1256-1493)

**Step 1: Apply performance tiers**

RadarSweep accepts props: `{ className, centers, accentHue }`. The service page passes 12 centers.

Changes:
1. Call `usePerformanceMode()` at top
2. Static fallback: gradient div with radial pattern
3. Lite mode:
   - Limit centers: `const activeCenters = mode === 'lite' ? centers.slice(0, 4) : centers`
   - Reduce blips per center: `maxBlips = mode === 'lite' ? 3 : 6`
   - Cache gradients: create `linearGradient` and `radialGradient` per center once, then reuse across frames (only recreate on resize). Store in a `Map<number, { linear: CanvasGradient, radial: CanvasGradient }>` keyed by center index.
   - 30fps cap
   - Skip mousemove on mobile

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/ui/VisualEffects.tsx
git commit -m "perf: add performance tiers to RadarSweep canvas, cache gradients"
```

---

## Task 13: Navigation Fixes

**Files:**
- Modify: `src/components/layout/Navigation.tsx`

**Step 1: Add passive flag to scroll listener**

At line 17, change:
```typescript
window.addEventListener('scroll', handleScroll);
```
to:
```typescript
window.addEventListener('scroll', handleScroll, { passive: true });
```

**Step 2: Add dimensions to logo image**

At lines 60-64, the logo `<img>` tag has no `width`/`height`. Add them:

```tsx
<img
  src="/flowmatrix-logo.webp"
  alt="FlowMatrix AI"
  className="h-10 md:h-12 w-auto"
  width={160}
  height={40}
/>
```

The exact pixel values don't need to be perfect since the CSS classes control display size. These attributes let the browser reserve layout space to prevent CLS.

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/components/layout/Navigation.tsx
git commit -m "perf: add passive scroll listener and logo dimensions to Navigation"
```

---

## Task 14: Image Lazy Loading

**Files:**
- Modify: `src/components/sections/FoundersSection.tsx`
- Modify: `src/components/sections/ProofSection.tsx`

**Step 1: Add lazy loading to founder images**

In `FoundersSection.tsx`, find all `<img>` tags rendering founder photos and add `loading="lazy"`. Example:
```tsx
<img src={founder.image} alt={founder.name} loading="lazy" />
```

**Step 2: Add lazy loading to client logo images**

In `ProofSection.tsx`, find all `<img>` tags in the marquee/logo section and add `loading="lazy"`. Example:
```tsx
<img src={logo.src} alt={logo.alt} loading="lazy" />
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/components/sections/FoundersSection.tsx src/components/sections/ProofSection.tsx
git commit -m "perf: add lazy loading to founder photos and client logos"
```

---

## Task 15: Convert Founder Photos to WebP

**Files:**
- Modify: `public/` (add WebP versions)
- Modify: `src/components/sections/FoundersSection.tsx` (update image paths)

**Step 1: Convert PNGs to WebP**

Use the `sharp` package (already a project dependency) to convert:

```bash
cd /path/to/project
npx tsx -e "
const sharp = require('sharp');
async function convert() {
  await sharp('public/sebastian-tamburro.png').webp({ quality: 85 }).toFile('public/sebastian-tamburro.webp');
  await sharp('public/dom-joseph.png').webp({ quality: 85 }).toFile('public/dom-joseph.webp');
  console.log('Done');
}
convert();
"
```

If `sharp` import fails with `tsx`, use the sharp CLI or a one-off Node script:
```bash
node -e "
const sharp = require('sharp');
Promise.all([
  sharp('public/sebastian-tamburro.png').webp({ quality: 85 }).toFile('public/sebastian-tamburro.webp'),
  sharp('public/dom-joseph.png').webp({ quality: 85 }).toFile('public/dom-joseph.webp'),
]).then(() => console.log('Converted'));
"
```

**Step 2: Update image references**

In `FoundersSection.tsx` (or `src/lib/constants.ts` if founder data is centralized), change:
- `sebastian-tamburro.png` to `sebastian-tamburro.webp`
- `dom-joseph.png` to `dom-joseph.webp`

Search for the exact references first:
```bash
grep -rn "sebastian-tamburro\|dom-joseph" src/
```

**Step 3: Verify build and check images load**

Run: `npm run build`
Then: `npm run dev` and verify founder photos display correctly.

**Step 4: Commit**

```bash
git add public/sebastian-tamburro.webp public/dom-joseph.webp
# Add whichever source files were modified
git commit -m "perf: convert founder photos to WebP (60% size reduction)"
```

**Note:** Keep the original PNGs in the repo for now. They can be removed in a follow-up cleanup.

---

## Task 16: Add HeroSection Mousemove Guard

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Step 1: Guard the parallax mousemove listener on mobile**

The HeroSection registers a `window.addEventListener('mousemove')` for parallax at lines 16-30. On mobile, this is wasted since touch doesn't fire `mousemove`.

Import the hook and conditionally register:

```typescript
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

const HeroSection = () => {
  const { isMobile } = usePerformanceMode();
  // ... existing state

  // Subtle parallax on mouse move (desktop only)
  useEffect(() => {
    if (isMobile) return; // Skip on mobile
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // ... existing handler
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);
  // ... rest unchanged
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/sections/HeroSection.tsx
git commit -m "perf: skip parallax mousemove listener on mobile in HeroSection"
```

---

## Task 17: Final Build Verification

**Files:**
- None (verification only)

**Step 1: Full production build**

Run: `npm run build`
Expected: Build succeeds with no errors or new warnings.

**Step 2: Check chunk sizes**

The build output shows chunk sizes. Verify:
- No chunk exceeds the 500KB warning threshold
- The `usePerformanceMode` hook and `LazySection` add negligible size (< 1KB each)
- The VisualEffects chunk should be roughly the same size (static fallback divs are tiny)

**Step 3: Dev server smoke test**

Run: `npm run dev`

Test manually in browser:
1. Homepage loads with only HeroSection effects initially
2. Scrolling reveals sections smoothly
3. Service pages render their canvas effects
4. Open Chrome DevTools > Rendering > check "Emulate CSS prefers-reduced-motion: reduce" and reload. All animations should stop.
5. Open Chrome DevTools > Device Mode > select a mobile device. Reload. Verify simpler effects or static gradients appear.

**Step 4: Commit any final adjustments if needed**

---

## Task Summary

| Task | Description | Files | Estimated Size |
|------|-------------|-------|---------------|
| 1 | Create usePerformanceMode hook | 1 new | ~60 lines |
| 2 | Create LazySection wrapper | 1 new | ~35 lines |
| 3 | Wire LazySection into homepage | 1 modified | ~10 lines changed |
| 4 | Add prefers-reduced-motion CSS | 1 modified | ~10 lines added |
| 5 | Fix Reveal transition-all | 1 modified | ~5 lines changed |
| 6 | Performance tiers for Aurora | 1 modified | ~40 lines changed |
| 7 | Performance tiers for TopologyLines | 1 modified | ~30 lines changed |
| 8 | Performance tiers for PerspectiveGrid | 1 modified | ~30 lines changed |
| 9 | Performance tiers for DataFlow | 1 modified | ~35 lines changed |
| 10 | Performance tiers for NeuralPulse | 1 modified | ~35 lines changed |
| 11 | Performance tiers for TessellationMesh | 1 modified | ~30 lines changed |
| 12 | Performance tiers for RadarSweep | 1 modified | ~35 lines changed |
| 13 | Navigation fixes | 1 modified | ~3 lines changed |
| 14 | Image lazy loading | 2 modified | ~4 lines changed |
| 15 | Convert photos to WebP | 2 new + 1 modified | Asset conversion |
| 16 | HeroSection mousemove guard | 1 modified | ~5 lines changed |
| 17 | Final verification | 0 | Build + smoke test |

**Total: 2 new files, up to 10 modified files, 17 atomic commits**
