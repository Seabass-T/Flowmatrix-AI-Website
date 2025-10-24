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

**Design Philosophy:** Clean, minimal white/black design with ONE accent color (green: text-green-600). No gradients, no purple, no em dashes, simple and professional.

**Status:** ✅ Homepage rebuild complete (Oct 23, 2025)

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

### New Color Palette (PRD v2.0)

**SIMPLIFIED - Only 2 colors:**

```css
:root {
  /* Core Colors */
  --background: #FFFFFF;        /* Pure white everywhere */
  --text-primary: #000000;      /* Black text */
  --text-secondary: #666666;    /* Gray for secondary text */

  /* Accent Color (CHOOSE ONE - see PRD Section 14) */
  /* Option A: Dark Blue */
  --accent: #1e40af;            /* Blue-800 */
  --accent-hover: #1e3a8a;      /* Blue-900 */

  /* Option B: Dark Green */
  --accent: #065f46;            /* Emerald-800 */
  --accent-hover: #064e3b;      /* Emerald-900 */
}
```

### Design Rules

1. **Background**: White (#FFFFFF) on ALL pages
2. **Text**: Black (#000000) for body, #666666 for secondary
3. **Accent**: ONLY for CTA buttons and icons
4. **NO gradients** anywhere
5. **NO colored backgrounds** (except accent on buttons)
6. **NO purple** (completely removed)

### Files to Update for Design System

1. **`src/index.css`**
   - Remove ALL gradient utilities
   - Remove `interactive-*`, `voice-*`, `surface-*` variables
   - Keep only: `--background`, `--text-primary`, `--text-secondary`, `--accent`, `--accent-hover`

2. **`tailwind.config.ts`**
   - Simplify to: white, black, gray, accent
   - Remove custom gradient definitions

3. **All Component Files:**
   - Replace `bg-gradient-to-r from-blue-600 to-purple-600` → `bg-accent`
   - Replace `hover:from-blue-700 hover:to-purple-700` → `hover:bg-accent-hover`
   - Remove `bg-blue-50`, `bg-purple-50`, `bg-gradient-*`
   - Use `bg-white` or `bg-gray-50` instead

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
│   ├── SolutionCard.tsx       # NEW - To be created
│   ├── NewsletterSignupInline.tsx  # NEW - To be created
│   ├── DecisionPointCallout.tsx    # NEW - To be created
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── NewsletterSignup.tsx
├── pages/
│   ├── use-cases/             # TO DELETE (8 files)
│   ├── Solutions.tsx          # NEW - To be created
│   ├── Construction.tsx       # TO DELETE
│   ├── HomeService.tsx        # TO DELETE
│   ├── Index.tsx              # Major updates needed
│   ├── Pricing.tsx            # Complete rewrite needed
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
- `src/index.css` - Design system (needs simplification)
- `tailwind.config.ts` - Color config (needs simplification)
- `src/App.tsx` - Routing (needs route changes)
- `src/components/Navigation.tsx` - Menu structure (needs updates)
- `src/pages/Index.tsx` - Homepage (major updates needed)
- `src/pages/Pricing.tsx` - Pricing (complete rewrite needed)

---

*Last Updated: October 23, 2025 - PRD v2.0 Rebuild*
