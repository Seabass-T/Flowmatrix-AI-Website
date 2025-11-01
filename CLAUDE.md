# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Commit Rules

**CRITICAL**: Never include Claude Code attribution in commit messages or git operations. This includes:
- No "🤖 Generated with [Claude Code]" messages
- No "Co-Authored-By: Claude" attributions
- Keep all commit messages clean and professional without AI tool references

---

## Project Overview

FlowMatrix AI is a React + TypeScript website built with Vite, showcasing AI automation solutions for North American construction and trade businesses. The site uses shadcn/ui components with Tailwind CSS and integrates with Supabase for backend services.

**Business Model:** Low-friction onboarding with 5-step process, 2 decision points, and transparent pricing ($300 audit, $2-5K/month retainer).

**Design Philosophy:** Clean, minimal white/black design with ONE primary color (dark green: bg-primary / text-primary = #166534 / green-800). Light accents allowed (bg-green-50, bg-green-100). No gradients, no purple, no em dashes, simple and professional.

**Status:** ✅ Homepage rebuild complete (Oct 23, 2025) | ✅ Pricing page Monthly Retainer tab updated (Oct 24, 2025) | ✅ Solutions & Results pages complete with 3 detailed solution pages: Email Organizer, Code Compass & Invoice Lifecycle Manager (Oct 24, 2025 / Nov 1, 2025) | ✅ UBL Group case study with preview card and detail page (Nov 1, 2025)

---

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Lint the codebase
npm run lint

# Preview production build
npm preview
```

---

## PRD Reference

**Location:** `/PRD.md` (Version 2.0)

The PRD is the **single source of truth** for:
- Business model & pricing structure
- Site architecture changes
- Design system specifications
- Page-by-page requirements
- Implementation priorities

**Always reference PRD.md when:**
- Planning new features
- Making architectural changes
- Understanding business logic
- Implementing design updates
- Prioritizing tasks

**Key PRD Sections:**
- Section 2: Business Model (5-step process, 2 decision points)
- Section 3: Site Architecture (navigation, routes, page inventory)
- Section 4: Design System (color palette, removal of gradients)
- Section 5: Page-by-Page Requirements (detailed specs for each page)
- Section 8: Implementation Checklist (Phase 1 pre-launch tasks)

---

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **Data Fetching**: TanStack Query (React Query)
- **Backend**: Supabase (authentication, database)
- **Form Handling**: React Hook Form + Zod validation
- **Lead Capture**: Tally.io forms (https://tally.so/r/wMBOXE)

---

## Vite Configuration & Build Guidelines

### CRITICAL: React Bundling Rules

**⚠️ NEVER manually split React into a separate chunk.** This causes initialization race conditions.

**The Problem (Nov 1, 2025 - Incident):**
We experienced a production incident where the site showed a blank page with the error:
```
Cannot access 'x' before initialization at vendor-CNY3K9en.js
```

**Root Cause:**
```typescript
// ❌ BAD - DO NOT DO THIS
manualChunks: (id) => {
  if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
    return 'react-core';  // Separating React causes initialization race
  }
  if (id.includes('node_modules')) {
    return 'vendor';  // Vendor chunk tries to use React before it's loaded
  }
}
```

When React is split into its own chunk:
1. `vendor` chunk contains libraries like Sonner that use React
2. `react-core` chunk contains React itself
3. If `vendor` loads before `react-core`, components try to use React before it exists
4. Result: `Cannot access 'x' before initialization` error

**The Solution:**
```typescript
// ✅ GOOD - Let Vite handle React automatically
manualChunks: (id) => {
  // Only split truly large libraries
  if (id.includes('lucide-react')) return 'lucide-icons';
  if (id.includes('@supabase')) return 'supabase';
  if (id.includes('@radix-ui')) return 'radix-ui';
  // DO NOT split React or create a catch-all 'vendor' chunk
}
```

### Vite Configuration Best Practices

**✅ DO:**
- Let Vite automatically bundle React with components that need it
- Split only large, independent libraries (Supabase, Radix UI, Lucide, etc.)
- Use specific package matching (e.g., `id.includes('@supabase')`)
- Test production builds locally before deploying (`npm run build`)

**❌ DON'T:**
- Create a catch-all `vendor` chunk that includes everything
- Manually split React/React-DOM into separate chunks
- Split React Router away from React
- Create custom plugins to "fix" React initialization (let Vite handle it)
- Add `optimizeDeps.include: ['react', 'react-dom']` unless specifically needed

### Vercel Deployment Configuration

**Required Files:**

1. **`vercel.json`** (SPA routing support):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

2. **`vite.config.ts`** must include:
```typescript
export default defineConfig({
  base: '/',  // Required for proper asset paths
  // ... rest of config
})
```

### Debugging Production Build Issues

If you encounter a blank page on Vercel:

1. **Check Vercel Build Logs:**
   - Did the build succeed?
   - Any warnings about chunk sizes or dependencies?

2. **Check Browser Console (F12 > Console):**
   - Look for initialization errors
   - Check for 404s on JavaScript files

3. **Check Browser Network Tab (F12 > Network):**
   - Are all JS/CSS files loading (200 status)?
   - Check the order chunks are loading

4. **Test Locally:**
```bash
npm run build
npm run preview
# Visit http://localhost:4173 and test thoroughly
```

5. **Common Error Patterns:**
   - `Cannot access 'x' before initialization` → React chunk splitting issue
   - `404 on /about` → Missing vercel.json SPA rewrite config
   - Blank page with no errors → Check `base` path in vite.config

---

## Business Model (Quick Reference)

### 5-Step Process

```
STEP 1: Intake Form (Tally) → FREE
STEP 2: 5-Day Free Diagnostic → FREE
STEP 3: 30-Min Discovery Call → FREE
  ↓
🔶 DECISION POINT #1: Continue with audit?
  ↓
STEP 4: 2-Week Deep Audit → $300 (100% satisfaction guarantee)
  ↓
🔶 DECISION POINT #2: Start retainer?
  ↓
STEP 5: Monthly Retainer → $2-5K/month (custom pricing)
```

### Key Messaging
- "We're confident in our value"
- "Two decision points, zero risk"
- "100% satisfaction guarantee"
- "Walk away at any time"

---

## Site Architecture

### Current Navigation Structure (TO BE UPDATED - See PRD Section 3)

**BEFORE (Old - Phase 1/2):**
```
Main Nav: Home | Pricing | Use Cases | Newsletter | About | Contact
CTA: "Get Your Free Automation Audit" → /contact
```

**AFTER (New - PRD v2.0):**
```
Main Nav: Home | Pricing | Solutions | About
CTA: "Get Started" → Tally Form (https://tally.so/r/wMBOXE)
Footer Only: Contact | Newsletter
```

### Page Inventory

| Page | Status | Action |
|------|--------|--------|
| Home (`/`) | ✅ Keep | Major updates needed |
| Pricing (`/pricing`) | ✅ Keep | Complete rewrite needed |
| **Use Cases** (`/use-cases`) | ❌ DELETE | Replace with Solutions |
| **Solutions** (`/solutions`) | ✅ CREATE NEW | Simple gallery with case studies |
| Newsletter (`/newsletter`) | ✅ Keep | Move to footer link only |
| About (`/about`) | ✅ Keep | Add credibility elements |
| Contact (`/contact`) | ✅ Keep | Move to footer link only |
| Terms (`/terms`) | ✅ Keep | No changes |
| Privacy (`/privacy`) | ✅ Keep | No changes |

### Routes in `src/App.tsx`

**TO REMOVE:**
```tsx
<Route path="/use-cases" element={<UseCases />} />
<Route path="/use-cases/:category" element={<UseCaseCategory />} />
<Route path="/construction" element={<Construction />} />
<Route path="/home-service" element={<HomeService />} />
```

**TO ADD:**
```tsx
<Route path="/solutions" element={<Solutions />} />
```

**IMPORTANT:** Always add new routes ABOVE the catch-all `*` route.

---

## Design System

### Color Palette (Current - October 2025)

**PRIMARY COLOR - DARK GREEN:**

```css
:root {
  /* Core Colors */
  --background: #FFFFFF;        /* Pure white everywhere (HSL: 0 0% 100%) */
  --foreground: #000000;        /* Black text (HSL: 0 0% 0%) */

  /* Primary Brand Color - Dark Green #166534 (green-800 in Tailwind) */
  --primary: 142 76% 24%;       /* HSL for #166534 */
  --primary-foreground: 0 0% 100%; /* White text on primary */
}
```

**USAGE RULES:**
- **Solid backgrounds**: Use `bg-primary` (NOT `bg-green-600`)
- **Text emphasis**: Use `text-primary` (NOT `text-green-600`)
- **Borders**: Use `border-primary` (NOT `border-green-600`)
- **Hover states**: Use `hover:bg-primary/90` for slight darkening
- **Light accents** (subtle highlights): `bg-green-50`, `bg-green-100`, `bg-green-200` are acceptable
- **Dark text on light backgrounds**: `text-green-800`, `text-green-900` are acceptable for contrast

**COLOR CODE REFERENCE:**
- Primary: `#166534` (HSL: 142 76% 24%) - Tailwind `green-800`
- DO NOT USE: `green-600` (#16a34a), `green-700` (#15803d) for primary elements
- Light accents: `green-50` (#f0fdf4), `green-100` (#dcfce7), `green-200` (#bbf7d0)

### Design Rules

1. **Background**: White (#FFFFFF) on ALL pages
2. **Text**: Black (#000000) for body, #666666 for secondary
3. **Primary Color**: Use `bg-primary` / `text-primary` for CTAs, emphasis, and decision points
4. **NO gradients** anywhere
5. **NO colored backgrounds** except:
   - `bg-primary` for CTA buttons
   - `bg-green-50` / `bg-green-100` for subtle highlights
6. **NO purple** (completely removed)
7. **NO green-600 or green-700** as primary color (use `bg-primary` instead)

### Files to Update for Design System

1. **`src/index.css`**
   - Remove ALL gradient utilities
   - Remove `interactive-*`, `voice-*`, `surface-*` variables
   - Keep only: `--background`, `--text-primary`, `--text-secondary`, `--accent`, `--accent-hover`

2. **`tailwind.config.ts`**
   - Simplify to: white, black, gray, accent
   - Remove custom gradient definitions

3. **All Component Files:**
   - Replace `bg-gradient-to-r from-blue-600 to-purple-600` → `bg-primary`
   - Replace `hover:from-blue-700 hover:to-purple-700` → `hover:bg-primary/90`
   - Replace `text-green-600` / `text-green-700` → `text-primary`
   - Replace `bg-green-600` / `bg-green-700` → `bg-primary`
   - Replace `border-green-600` → `border-primary`
   - Remove `bg-blue-50`, `bg-purple-50`, `bg-gradient-*`
   - Use `bg-white` or `bg-gray-50` instead
   - Light accents (bg-green-50, bg-green-100) are acceptable for subtle highlights

---

## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components (DON'T EDIT)
│   ├── homepage/              # Homepage-specific (PHASE 1/2 - May be deleted)
│   │   ├── ICPToggle.tsx
│   │   ├── HeroWithICP.tsx
│   │   ├── ICPPainPointSection.tsx
│   │   ├── OfferFunnelGraphic.tsx
│   │   ├── LeadMagnetModal.tsx
│   │   ├── FounderBadge.tsx
│   │   ├── ProofCard.tsx
│   │   └── ProofSection.tsx
│   ├── shared/                # Shared components
│   │   ├── GuaranteeBadge.tsx
│   │   └── TrustBadges.tsx
│   ├── landing-pages/         # Reusable (PHASE 1/2 - May be deleted)
│   │   ├── LandingPageHero.tsx
│   │   ├── PainPointCards.tsx
│   │   └── OfferFunnel.tsx
│   ├── SolutionCard.tsx       # ✅ Created - Links to detail pages
│   ├── ClientSpotlight.tsx    # ✅ Created (Nov 1, 2025) - Full UBL Group case study
│   ├── ClientSpotlightPreview.tsx # ✅ Created (Nov 1, 2025) - Preview card for Solutions page
│   ├── ResultsPostCard.tsx    # ✅ Created - Blog post cards
│   ├── NewsletterSignupInline.tsx  # NEW - To be created
│   ├── DecisionPointCallout.tsx    # NEW - To be created
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── NewsletterSignup.tsx
├── pages/
│   ├── use-cases/             # TO DELETE (8 files)
│   ├── Solutions.tsx          # ✅ Created (Oct 24) - Grid with 8 solutions + case study preview
│   ├── SolutionDetail.tsx     # ✅ Created (Oct 24) - Detail pages at /solutions/:slug
│   ├── CaseStudyDetail.tsx    # ✅ Created (Nov 1, 2025) - Case study at /solutions/ubl-group
│   ├── Results.tsx            # ✅ Created (Oct 24) - Blog list page
│   ├── ResultsPost.tsx        # ✅ Created (Oct 24) - Individual posts at /results/:slug
│   ├── Construction.tsx       # TO DELETE
│   ├── HomeService.tsx        # TO DELETE
│   ├── Index.tsx              # Major updates needed
│   ├── Pricing.tsx            # ✅ Monthly Retainer tab updated (Oct 24, 2025)
│   ├── About.tsx              # Add credibility
│   ├── Contact.tsx            # Keep, footer only
│   ├── Newsletter.tsx         # Keep, footer only
│   ├── Terms.tsx
│   └── Privacy.tsx
├── integrations/
│   └── supabase/
├── hooks/
├── lib/
└── utils/
```

---

## Component Conventions

1. **shadcn/ui components** (`src/components/ui/`) - DON'T EDIT (auto-generated)
2. **Custom components** - Place in `src/components/` or organized subdirectories
3. **Page components** - `src/pages/` with nested dirs for categories
4. **Path aliases** - Always use `@/` imports (e.g., `@/components`, `@/lib`)
5. **Reusable components** - Accept props for customization

### Path Aliases

- `@/` → `./src/`
- `@/components` → `./src/components`
- `@/ui` → `./src/components/ui`
- `@/lib` → `./src/lib`
- `@/hooks` → `./src/hooks`

---

## Key Changes from Phase 1/2 → PRD v2.0

### What's Being REMOVED

- ❌ All purple/gradient color schemes
- ❌ 8 detailed use case pages (`/use-cases/[category]`)
- ❌ ICP landing pages (`/construction`, `/home-service`)
- ❌ ICP toggle on homepage
- ❌ CONVOCORE voice agent (parking lot)
- ❌ Newsletter from main nav
- ❌ Contact from main nav
- ❌ Toronto/GTA geographic restrictions
- ❌ "Free Audit" CTAs
- ❌ Watermarked iStock images

### What's Being ADDED

- ✅ Clean white/black design with ONE accent color
- ✅ Tally form integration (https://tally.so/r/wMBOXE)
- ✅ Simple Solutions gallery (5-7 case studies, scalable)
- ✅ Clear pricing: $300 audit with 100% guarantee
- ✅ 2 explicit decision points in process
- ✅ Founder credibility elements (n8n badge, Colgate, headshot)
- ✅ North America positioning
- ✅ Process section with 5 steps
- ✅ Inline newsletter signups
- ✅ Contact/Newsletter in footer

### Recent Updates - Pricing Page (Oct 24, 2025)

**Monthly Retainer Tab Improvements:**
- ✅ Hero section simplified: "+" changed to "&", removed $10K developer comparison
- ✅ Pricing cards streamlined: Removed specific system counts to reduce clutter
- ✅ Removed "Most Popular" badge for equal visual hierarchy across all packages
- ✅ Added Client Portal Demo section (https://client.flowmatrixai.com/demo)
- ✅ FAQ section updated with 6 focused questions
- ✅ Maintained clean "Includes all [tier] features, plus:" structure

**Package Structure (Simplified):**
- **Starter ($1,500-$3,000/month):** Portal access, support, monitoring, AI research insights
- **Professional ($3,000-$5,000/month):** All Starter + priority support, ROI reports, advanced integrations, bi-weekly check-ins
- **Enterprise (Custom):** All Professional + dedicated support line, weekly sessions, custom development, white-glove implementation

---

## Content Guidelines

### Global Find & Replace (PRD Section 7.1)

| Find | Replace |
|------|---------|
| `Toronto` | `North America` |
| `GTA` | `North America` |
| `Greater Toronto Area` | `North America` |
| `Get Your Free Automation Audit` | `Get Started` |
| `Book Free Diagnostic` | `Get Started` |
| `Pay-what-you-think` | `$300 with 100% satisfaction guarantee` |

### Writing Style Rules

**CRITICAL PUNCTUATION RULES:**
- ❌ **NEVER use em dashes (—)** in copy
- ✅ Use colons (:) for emphasis or introduction
- ✅ Use commas (,) for lists or pauses
- ✅ Use periods (.) to separate complete thoughts
- ✅ Use "with" or other prepositions instead of em dashes

**Examples:**
- ❌ Bad: `"what matters—growing your business"`
- ✅ Good: `"what matters: growing your business"`
- ❌ Bad: `"part ways—zero obligation"`
- ✅ Good: `"part ways with zero obligation"`
- ❌ Bad: `"no delays—just immediate action"`
- ✅ Good: `"no delays, just immediate action"`

### Tone & Voice

**Emphasize:**
- "We're confident in our value"
- "Two decision points, zero risk"
- "100% satisfaction guarantee"
- "Walk away at any time"
- "No pressure, no hard selling"

**Avoid:**
- Aggressive sales language
- Vague promises
- Over-complicated explanations
- Corporate jargon
- Em dashes (use colons, commas, or periods instead)

---

## Tally Form Integration

**Form URL:** `https://tally.so/r/wMBOXE`

**Preferred Method: Popup Modal**

```typescript
const openTallyForm = () => {
  window.Tally?.openPopup('wMBOXE', {
    layout: 'modal',
    width: 600,
    autoClose: 3000,
  });
};
```

**Alternative: New Tab**

```typescript
const openTallyForm = () => {
  window.open('https://tally.so/r/wMBOXE', '_blank');
};
```

**All CTA buttons should:**
- Say "Get Started"
- Trigger Tally form
- Use `bg-accent hover:bg-accent-hover`
- NO gradients

---

## New Components to Create (PRD Section 6.4)

### 1. SolutionCard.tsx

```typescript
interface SolutionCardProps {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // YouTube Short embed URL
  timeSaved: string; // "12 hours/week"
  costSavings: string; // "$2,400/month"
  industry?: string; // "Construction", "HVAC", etc.
}
```

**Design:**
- Embedded YouTube Short (16:9)
- Title + description (2-3 sentences)
- ROI metrics (time saved, cost savings)
- Optional industry tag
- "Learn More" button (Phase 2)

### 2. NewsletterSignupInline.tsx

**Features:**
- Subtle inline form
- Email input + submit button
- Can be placed anywhere
- Connects to Supabase

### 3. DecisionPointCallout.tsx

```typescript
<DecisionPointCallout
  number={1}
  title="Continue with audit?"
  description="We're confident you'll see value."
  yesAction="Proceed to $300 audit"
  noAction="Part ways, zero obligation"
/>
```

**Design:**
- Visual callout box
- Emphasizes low-friction approach
- Used on Pricing page

---

## Files to DELETE (PRD Section 10)

```
src/pages/use-cases/Leads.tsx
src/pages/use-cases/ContentCreation.tsx
src/pages/use-cases/SocialMedia.tsx
src/pages/use-cases/Scheduling.tsx
src/pages/use-cases/ClientManagement.tsx
src/pages/use-cases/Documentation.tsx
src/pages/use-cases/Invoicing.tsx
src/pages/use-cases/Inventory.tsx
src/pages/Construction.tsx
src/pages/HomeService.tsx
src/components/homepage/ICPToggle.tsx (maybe - verify first)
src/components/homepage/HeroWithICP.tsx (maybe - verify first)
src/components/homepage/ICPPainPointSection.tsx (maybe - verify first)
```

---

## Supabase Integration

- Client: `src/integrations/supabase/client.ts`
- Types: `src/integrations/supabase/types.ts` (auto-generated)
- Auth: localStorage persistence, auto-refresh tokens
- Functions: `supabase/functions/`
- Migrations: `supabase/migrations/`

---

## SEO & Meta

- Uses `react-helmet` for dynamic meta tags
- Structured data (JSON-LD) for WebSite + SearchAction
- Individual pages implement their own Helmet configs

**Update Meta Tags (PRD Section 7.3):**

```html
<!-- BEFORE -->
<title>FlowMatrix AI | Toronto Construction Automation</title>

<!-- AFTER -->
<title>FlowMatrix AI | Construction Automation for North America</title>
<meta name="description" content="AI automation for North American construction and trade businesses. $300 audit with 100% satisfaction guarantee.">
```

**Files to update:**
- `index.html`
- `src/pages/Index.tsx`
- `src/pages/Pricing.tsx`
- `src/pages/About.tsx`

---

## Implementation Priority (PRD Section 9)

### 🔴 Phase 1: Pre-Launch Must-Haves (16-24 hours)

**Goal:** Website ready for client outreach

**Tasks:**
1. Design system update (remove gradients, simplify colors)
2. Navigation & routing changes
3. Homepage updates (hero, process, testimonials, credibility)
4. Pricing page rewrite (5 steps, 2 decision points)
5. Solutions page creation (delete use cases)
6. About page credibility updates
7. Technical cleanup (remove CONVOCORE, update sitemap)

**Launch Criteria:**
- No broken links
- Mobile responsive
- Fast page loads (<3 seconds)
- Forms work correctly
- No console errors

### 🟡 Phase 2: Post-Launch Enhancements (After 2-3 clients)

**Tasks:**
- n8n automation (form → email → diagnostic)
- Results/blog section
- More case studies (10+ total)
- Advanced testimonials
- Industry association logos

### 🟢 Phase 3: Growth & Scale (After $5K+ MRR)

**Tasks:**
- Multi-tier retainer packages
- Case study filtering/search
- Advanced analytics
- Client portal

---

## Testing Checklist

Before considering any page "done":

- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1440px width)
- [ ] Check all links work
- [ ] Verify forms submit correctly
- [ ] Check for console errors
- [ ] Validate TypeScript compiles
- [ ] Test with slow 3G network
- [ ] Verify Tally form integration works
- [ ] Check all Toronto → North America replacements

---

## Dark Mode Support

**IMPORTANT:** Website supports dark mode.

- Use theme-aware CSS variables: `text-foreground`, `text-card-foreground`, `text-muted-foreground`
- Add `dark:` variants for colored backgrounds
- Never use hardcoded colors without dark mode variants
- Test both light and dark modes

---

## Important Technical Notes

- Dev server: `http://[::]:8080` (port 8080, IPv6)
- Build tool: Vite with SWC (faster than Babel)
- TypeScript: Strict mode enabled
- Multiple tsconfig files: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- HTML attributes: Lowercase (e.g., `fetchpriority`, not `fetchPriority`)
- React props: camelCase (e.g., `onClick`, `className`)

---

## Key Patterns from Phase 1/2 (May be deprecated - verify against PRD)

### Modal Implementation Pattern

```typescript
useEffect(() => {
  const hasSeenModal = localStorage.getItem("modalKey");
  if (hasSeenModal) return;

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      setShowModal(true);
      localStorage.setItem("modalKey", "true");
      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### Form Accessibility Pattern

```typescript
<Input
  id="unique-id"
  name="fieldName"
  type="email"
  autoComplete="email"
  aria-label="Descriptive label"
/>
```

### Lazy Loading Third-Party Scripts

```javascript
function loadScript() {
  const script = document.createElement("script");
  script.src = "script-url";
  script.defer = true;
  document.body.appendChild(script);
}
```

---

## Detailed Solution Pages Pattern (Oct 24, 2025)

**Structure:** Two-tier approach for scalability

### Tier 1: Solutions Grid (`/solutions`)
- Clean grid layout (1/2/3 columns responsive)
- SolutionCard component with:
  - YouTube video embed (16:9 aspect ratio)
  - Title, description (brief, 2-3 sentences)
  - ROI metrics (time saved, cost savings)
  - Industry tag
  - "Learn More" link to detail page

### Tier 2: Detailed Pages (`/solutions/:slug`)
- SolutionDetail component handles all detail pages
- Currently supports: `email-organizer`, `code-compass`, `invoice-lifecycle-manager`
- Structure includes:
  - Full YouTube video embed
  - Excalidraw workflow diagram (iframe embed) - conditionally rendered if excalidrawUrl is provided
  - Project overview (comprehensive description)
  - Implementation phases (expandable sections)
  - ROI details (bullet list with checkmarks)
  - Bottom CTA section (generic for all solutions)

**Live Solutions with Detail Pages:**
1. **Email Organizer and Summarizer** - AI-powered inbox management (5-15 hrs/week saved)
2. **Code Compass** - AI-powered regulatory compliance assistant (8-20 hrs/project saved)
3. **Invoice Lifecycle Manager** - AI-powered financial automation (8-12+ hrs/month saved, 40-60% faster payment collection) - Added Nov 1, 2025

**Adding New Solutions:**

1. **Update `Solutions.tsx` casStudies array:**
   ```typescript
   {
     id: "unique-slug",
     title: "Solution Name",
     description: "Brief 2-3 sentence overview",
     videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
     timeSaved: "10 hours/week",
     costSavings: "$2,000/month",
     industry: "Construction"
   }
   ```

2. **Add content to `SolutionDetail.tsx`:**
   - Add new object to the content map at top of file
   - Follow email-organizer or invoice-lifecycle-manager structure
   - Include all required fields: title, category, videoUrl, excalidrawUrl (optional - set to null if none), roiMetrics, overview, phases, roiDetails, conclusion
   - Update the slug routing logic to recognize the new solution slug

3. **Excalidraw Diagram Embedding (Optional):**
   - Set `excalidrawUrl: null` if no diagram is available yet
   - The diagram section will automatically be hidden with conditional rendering
   - When ready to add a diagram, use:
   ```html
   <iframe
     src="https://link.excalidraw.com/readonly/YOUR_DIAGRAM_ID"
     width="100%"
     height="500px"
     frameBorder="0"
     allowFullScreen
     title="Workflow Diagram"
   />
   ```

**Pattern Benefits:**
- Scalable: Add unlimited solutions without new files
- Consistent: All solutions use same layout/structure
- SEO-friendly: Each solution gets unique URL
- Maintainable: Content separated from presentation logic

---

## Summary for AI Context Retrieval

**When working on this project:**

1. **Always check PRD.md first** - It's the single source of truth for v2.0 rebuild
2. **Simplify, don't complicate** - White/black design, one accent color, no gradients
3. **Focus on credibility** - Real metrics, founder story, n8n badge, testimonials with ROI
4. **Low-friction UX** - Tally forms, clear CTAs, 2 decision points
5. **North America, not Toronto** - Geographic expansion
6. **Phase 1 is pre-launch** - 16-24 hours of focused work
7. **Delete old complexity** - Use cases, ICP pages, purple gradients, CONVOCORE

**Key Files to Reference:**
- `/PRD.md` - Product requirements (v2.0)
- `src/index.css` - Design system
- `tailwind.config.ts` - Color config
- `src/App.tsx` - Routing
- `src/components/Navigation.tsx` - Menu structure
- `src/pages/Index.tsx` - Homepage (major updates needed)
- `src/pages/Pricing.tsx` - Pricing (Monthly Retainer tab updated)
- `src/pages/Solutions.tsx` - Solutions gallery (✅ Complete - 8 solutions in grid)
- `src/pages/SolutionDetail.tsx` - Detailed solution pages (✅ Complete - 3 detailed pages)
- `src/pages/Results.tsx` - Blog list page (✅ Complete)
- `src/pages/ResultsPost.tsx` - Individual blog posts (✅ Complete)

---

## Recent Updates Log

### November 1, 2025 - Session 2C: Logo Integration Complete
- ✅ Added real UBL Group logo to /public/ubl-group-logo.png
- ✅ Integrated logo in ClientSpotlightPreview.tsx (preview card on Solutions page)
- ✅ Integrated logo in ClientSpotlight.tsx (full case study page)
- ✅ Removed Building2 icon placeholders from both components
- ✅ Logo displays with proper sizing, padding, and responsive behavior
- ✅ White background container for logo visibility in both light/dark modes

### November 1, 2025 - Session 2B: UBL Group Case Study Restructured
- ✅ Created ClientSpotlightPreview.tsx (short, wide preview card for Solutions page)
- ✅ Created CaseStudyDetail.tsx page component at /solutions/ubl-group
- ✅ Modified ClientSpotlight.tsx to navigate back to Solutions page with state
- ✅ Updated App.tsx routing with case study route before generic :slug route
- ✅ Enhanced Solutions.tsx with useEffect to handle navigation state and scroll to solutions
- ✅ Implemented two-tier case study architecture: preview → full detail
- ✅ Preview card shows key highlights with "Read Full Case Study" button at bottom
- ✅ Full detail page has back button and interactive links to solutions
- ✅ Smooth scroll and highlight animation when navigating from case study to specific solutions
- ✅ Fixed routing issue preventing case study detail page from loading
- ✅ Refined button layout to single centered CTA

### November 1, 2025 - Session 2A: UBL Group Client Spotlight Added (Initial)
- ✅ Created ClientSpotlight.tsx component (comprehensive case study layout)
- ✅ Added featured UBL Group case study to top of Solutions page
- ✅ Implemented interactive solution links with smooth scroll and highlight effect
- ✅ Includes client background, challenges, solutions, results with metrics grid
- ✅ Features two prominent testimonials from co-founders
- ✅ Responsive design with mobile-first approach
- ✅ Integrated Tally form CTA within case study
- ✅ Logo placeholder with Building2 icon from lucide-react

### November 1, 2025 - Session 1: Invoice Lifecycle Manager Solution Added
- ✅ Added Invoice Lifecycle Manager to Solutions.tsx (3rd card in grid)
- ✅ Created detailed solution page at /solutions/invoice-lifecycle-manager
- ✅ Includes YouTube video embed (https://youtu.be/6_XnGTYzS7A)
- ✅ 3 implementation phases: Automated Invoice Creation & Delivery, Communication Monitoring & Response, Strategic Follow-up Automation
- ✅ ROI metrics: 8-12+ hours/month saved, 40-60% faster payment collection
- ✅ Enhanced SolutionDetail component with conditional workflow diagram rendering
- ✅ Updated CTA section to be generic for all solutions

---

---

## Complete Feature Summary: November 1, 2025

**Solutions Page Enhancements:**
1. ✅ Invoice Lifecycle Manager solution with YouTube video and 3 implementation phases
2. ✅ UBL Group case study with two-tier architecture:
   - Preview card on `/solutions` with logo, key metrics, and CTA
   - Full detail page at `/solutions/ubl-group` with complete case study
3. ✅ Interactive navigation with smooth scroll and highlight effects
4. ✅ Real UBL Group logo integration in both preview and detail views
5. ✅ Conditional workflow diagram rendering for solutions

**Files Created:**
- `src/components/ClientSpotlightPreview.tsx` - Preview card component
- `src/pages/CaseStudyDetail.tsx` - Case study detail page
- `public/ubl-group-logo.png` - UBL Group logo asset

**Files Modified:**
- `src/components/ClientSpotlight.tsx` - Navigation updates
- `src/pages/Solutions.tsx` - Preview integration and navigation handling
- `src/pages/SolutionDetail.tsx` - Invoice Lifecycle Manager content
- `src/App.tsx` - Routing updates

**Routes Added:**
- `/solutions/ubl-group` - Full UBL Group case study
- `/solutions/invoice-lifecycle-manager` - Invoice Lifecycle Manager detail page

---

*Last Updated: November 1, 2025 - Complete Solutions Page with Invoice Lifecycle Manager, UBL Group Case Study & Logo Integration*
