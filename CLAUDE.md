# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Commit Rules

**CRITICAL**: Never include Claude Code attribution in commit messages or git operations. This includes:
- No "🤖 Generated with [Claude Code]" messages
- No "Co-Authored-By: Claude" attributions
- Keep all commit messages clean and professional without AI tool references

## Project Overview

FlowMatrix AI is a React + TypeScript website built with Vite, showcasing AI automation solutions. The site uses shadcn/ui components with Tailwind CSS and integrates with Supabase for backend services.

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

## Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **Data Fetching**: TanStack Query (React Query)
- **Backend**: Supabase (authentication, database)
- **Form Handling**: React Hook Form with Zod validation

### Project Structure

```
src/
├── components/           # Shared components
│   ├── ui/              # shadcn/ui components (51 components)
│   ├── homepage/        # Homepage-specific components (NEW)
│   │   ├── ICPToggle.tsx
│   │   ├── HeroWithICP.tsx
│   │   ├── ICPPainPointSection.tsx
│   │   ├── ProofCard.tsx
│   │   └── ProofSection.tsx
│   ├── landing-pages/   # Reusable landing page components (NEW)
│   │   ├── LandingPageHero.tsx
│   │   ├── PainPointCards.tsx
│   │   └── OfferFunnel.tsx
│   ├── AnimatedFeatures.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── NewsletterSignup.tsx
├── pages/               # Route pages
│   ├── use-cases/      # Use case category pages (8 pages)
│   ├── Construction.tsx  # Construction ICP landing page (NEW)
│   ├── HomeService.tsx   # Home Service ICP landing page (NEW)
│   └── [other pages]   # Main pages (Index, About, Contact, etc.)
├── integrations/
│   └── supabase/       # Supabase client and types
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── utils/              # Additional utilities
```

### Design System

The project uses a comprehensive custom design system defined in `src/index.css` and `tailwind.config.ts`:

- **Color System**: All colors defined as HSL values in CSS variables
- **Custom Color Palettes**:
  - `interactive-*`: Primary, secondary, and accent interactive colors with hover states
  - `surface-*`: Light, medium, dark, darker surface colors
  - `voice-*`: Voice interface specific colors with glow effects
  - `sidebar-*`: Sidebar component colors
- **Custom Animations**: float, fade-in, scale-in, slide-up, glow, pulse-glow
- **Gradients**: Pre-defined gradient utilities for voice and interactive elements

### Routing Architecture

Routes are centrally managed in `src/App.tsx`. The application uses:
- Main pages: /, /pricing, /use-cases, /newsletter, /about, /contact, /terms, /privacy
- Use case category routes: /use-cases/[category]
- **ICP Landing Pages** (NEW):
  - /construction - Construction contractors landing page
  - /home-service - Home service providers landing page
- Catch-all 404 route at the end

**IMPORTANT**: When adding new routes, add them ABOVE the catch-all `*` route in App.tsx.

### Supabase Integration

- Client configured in `src/integrations/supabase/client.ts`
- Auto-generated types in `src/integrations/supabase/types.ts`
- Authentication configured with localStorage persistence and auto-refresh tokens
- Backend functions in `supabase/functions/`
- Database migrations in `supabase/migrations/`

### Component Conventions

1. **shadcn/ui components** are in `src/components/ui/` and should not be manually edited (they're auto-generated)
2. **Custom components** go directly in `src/components/` or in organized subdirectories:
   - `src/components/homepage/` - Homepage-specific components
   - `src/components/landing-pages/` - Reusable landing page components
3. **Page components** go in `src/pages/` with nested directories for categories
4. All components use the `@/` import alias (e.g., `@/components`, `@/lib`)
5. **Reusable components** should accept props to customize behavior for different use cases (see LandingPageHero, PainPointCards, OfferFunnel)

### Path Aliases

Configured in `vite.config.ts` and `components.json`:
- `@/` → `./src/`
- `@/components` → `./src/components`
- `@/ui` → `./src/components/ui`
- `@/lib` → `./src/lib`
- `@/hooks` → `./src/hooks`

### SEO & Meta

The application uses:
- `react-helmet` for dynamic meta tags
- Structured data (JSON-LD) for WebSite + SearchAction schema
- Individual pages should implement their own Helmet configurations

## Adding shadcn/ui Components

This project uses shadcn/ui components. To add new ones, refer to the shadcn/ui documentation. The `components.json` config file defines the component installation settings.

## Styling Guidelines

1. Use Tailwind utility classes for styling
2. Reference design system colors via CSS variables (e.g., `hsl(var(--interactive-primary))`)
3. Use custom animations: `animate-float`, `animate-fade-in`, `animate-scale-in`, `animate-slide-up`, `animate-glow`, `animate-pulse-glow`
4. Use custom gradient utilities: `bg-voice-gradient`, `bg-voice-gradient-hover`
5. All custom colors must be defined as HSL values in the design system

## Important Notes

- The development server runs on port 8080 with IPv6 support (`::`)
- The project uses SWC instead of Babel for faster builds
- TypeScript strict mode is enabled
- Multiple tsconfig files: `tsconfig.json` (base), `tsconfig.app.json` (app), `tsconfig.node.json` (build tools)
- on all pushes to git, never include Claude attrition add this rule to your CLAUDE.md file
- **The website supports dark mode.** Make sure all color choices contrast their background colors so text is visible:
  - Use theme-aware CSS variables: `text-foreground`, `text-card-foreground`, `text-muted-foreground`
  - Add `dark:` variants for sections with colored backgrounds (e.g., `text-gray-900 dark:text-white`)
  - Never use hardcoded colors like `text-gray-900` alone - always add dark mode variants
  - Test both light and dark modes for all new components

## Phase 1 Implementation Summary (Completed)

### New Components Created

**Homepage Components** (`src/components/homepage/`):
- `ICPToggle.tsx` - Tab-style toggle between Construction and Home Service ICPs
- `HeroWithICP.tsx` - Dynamic hero section that updates based on ICP selection
- `ICPPainPointSection.tsx` - Reusable section displaying 3 pain points per ICP
- `ProofCard.tsx` - Individual proof card with gradient background and metrics
- `ProofSection.tsx` - Container for 3 proof cards showing UBL Group metrics

**Landing Page Components** (`src/components/landing-pages/`):
- `LandingPageHero.tsx` - Reusable hero for landing pages (no main nav, "Back to Home" link)
- `PainPointCards.tsx` - Reusable 3-card pain point display with ICP variants
- `OfferFunnel.tsx` - 4-step process visualization (horizontal desktop, vertical mobile)

**New Pages** (`src/pages/`):
- `Construction.tsx` - Full landing page for construction contractors
- `HomeService.tsx` - Full landing page for home service providers (HVAC, plumbing, electrical)

### Key Patterns Established

1. **ICP Segmentation**: Homepage allows users to toggle between two target personas (Construction vs Home Service)
2. **Component Reusability**: Landing page components accept props for ICP-specific customization
3. **Dark Mode Support**: All new components use theme-aware CSS variables and `dark:` variants
4. **Calendly Integration**: Standardized `openCalendly()` function across all pages using `https://calendly.com/flowmatrixai-info/consultation-call`
5. **Responsive Design**: All components adapt from 1-col mobile to 2-3 col desktop layouts

### Files Modified

- `src/pages/Index.tsx` - Added ICP toggle, dynamic hero, pain point sections, proof cards
- `src/App.tsx` - Added routes for `/construction` and `/home-service` above catch-all route
- Updated Calendly URLs across 8 files: Index, Construction, HomeService, Pricing, UseCases, Contact, About, Navigation

### Next Phase

Phase 2 will add: Hero images, sticky navigation, trust badges, offer funnel graphic, chat widget optimization, and lead magnet modal.

## Sprint 2.2 Implementation: Sticky Navigation (Completed)

### Overview
Implemented scroll-triggered sticky navigation with smooth background transitions as specified in PRD.md Section 4.6.

### Implementation Details

**Navigation Component** (`src/components/Navigation.tsx`):
- Added scroll detection using `useState` and `useEffect`
- 50px scroll threshold triggers background transition
- Changed from static to `fixed` positioning with `z-50`
- Conditional styling: transparent background → white + shadow-md
- Transition duration: 300ms for smooth visual effect
- Proper event listener cleanup to prevent memory leaks

**Smooth Scroll Behavior** (`src/index.css`):
- Added `html { scroll-behavior: smooth; }` for anchor link navigation
- Ensures all navigation links scroll smoothly to sections

**Bug Fix** (`src/components/homepage/HeroWithICP.tsx`):
- Fixed React warning: Changed `fetchPriority="high"` to `fetchpriority="high"` (line 81)
- **Important**: HTML attributes must be lowercase, not camelCase
- This applies to native HTML attributes like `fetchpriority`, not React-specific props

### Testing Procedures

1. **Scroll Testing**:
   - Scroll down >50px → nav background becomes white with shadow
   - Scroll up <50px → nav background becomes transparent
   - Verify smooth 300ms transition

2. **Mobile Compatibility**:
   - Mobile menu must work with fixed positioning
   - Menu opens/closes correctly
   - Background is always solid in mobile menu

3. **Build Testing**:
   - Run `npm run build` to verify no errors
   - Check console for React warnings
   - Verify all pages load correctly

### Performance Impact

- **Minimal**: Event listener added with proper cleanup
- **FCP/LCP**: No impact (navigation is above-the-fold)
- **Visual Stability**: Transition improves perceived performance
- **Mobile**: No additional overhead

### Key Learnings

1. **HTML Attributes vs React Props**:
   - HTML attributes: lowercase (fetchpriority, class, for)
   - React props: camelCase (onClick, className, htmlFor)
   - Native HTML attributes must use lowercase, even in JSX

2. **Fixed vs Sticky Positioning**:
   - `fixed` provides better control for scroll-triggered styling
   - Works consistently across all scroll positions
   - Requires `z-index` management (z-50 in this case)

3. **Event Listener Best Practices**:
   - Always include cleanup function in useEffect
   - Return cleanup to prevent memory leaks
   - Use passive listeners when possible for better performance

### Files Modified in Sprint 2.2

- `src/components/Navigation.tsx` - Added scroll detection and dynamic styling
- `src/index.css` - Added smooth scroll behavior
- `src/components/homepage/HeroWithICP.tsx` - Fixed fetchpriority attribute
- `PRD.md` - Updated Sprint 2.2 status to completed

---

## Sprint 2.3 Implementation: Trust Badges (Completed)

### Overview
Implemented trust badges system with founder story, pilot guarantee, and footer trust indicators as specified in PRD.md Section 4.7.

### Components Created

**1. FounderBadge.tsx** (`src/components/homepage/FounderBadge.tsx`):
- Trophy icon with gradient background
- Features Sebastian Tamburro as founder
- Mentions D1 Hockey at Colgate University '26
- Emphasizes solo founder, no middlemen
- Dark mode compatible

**2. GuaranteeBadge.tsx** (`src/components/shared/GuaranteeBadge.tsx`):
- Shield icon with yellow border
- Pilot guarantee messaging
- 50% off or full credit guarantee
- Dark mode compatible

**3. TrustBadges.tsx** (`src/components/shared/TrustBadges.tsx`):
- 5 horizontal badges: SSL Secured, NDA Available, Toronto-Based, Colgate '26, Powered by n8n + Supabase
- Icons from Lucide React: Lock, FileText, MapPin, Award, Code
- Responsive flex layout
- Hover effects

### Badge Placements

- **Homepage**: FounderBadge after ProofSection
- **Pricing Page**: GuaranteeBadge after pricing cards
- **Footer**: TrustBadges at top of footer (site-wide)

### Files Modified in Sprint 2.3

- `src/components/homepage/FounderBadge.tsx` (NEW)
- `src/components/shared/GuaranteeBadge.tsx` (NEW)
- `src/components/shared/TrustBadges.tsx` (NEW)
- `src/pages/Index.tsx` - Added FounderBadge
- `src/pages/Pricing.tsx` - Added GuaranteeBadge
- `src/components/Footer.tsx` - Added TrustBadges

---

## Sprint 2.4 Implementation: Offer Funnel Graphic (Completed)

### Overview
Implemented 4-step process visualization with responsive layout as specified in PRD.md Section 4.8.

### Implementation Details

**OfferFunnelGraphic.tsx** (`src/components/homepage/OfferFunnelGraphic.tsx`):
- 4 steps with icons: Phone, Zap, Target, TrendingUp
- Step 01: Free Consultation
- Step 02: Pay-What-You-Think Audit
- Step 03: 2-Week Pilot
- Step 04: Month-to-Month Partnership

**Responsive Layout**:
- Desktop: Horizontal layout with → arrows between steps
- Mobile: Vertical layout with ↓ arrows between steps
- Arrows animate with pulse effect

**Design**:
- Gradient icon backgrounds (blue variations)
- Card hover effects (shadow + scale)
- Step number badges
- Dark mode support

### Files Modified in Sprint 2.4

- `src/components/homepage/OfferFunnelGraphic.tsx` (NEW)
- `src/pages/Index.tsx` - Added below hero, before pain points

---

## Sprint 2.5 Implementation: CONVOCORE Widget Optimization (Completed)

### Overview
Optimized CONVOCORE chat widget with lazy loading triggers as specified in PRD.md Section 4.9.

### Implementation Details

**Trigger Logic** (`index.html`):
- Timer trigger: 45 seconds after page load
- Scroll trigger: 50% of page scrolled
- Whichever trigger fires FIRST loads the widget
- Single `triggered` flag prevents duplicate loading

**Configuration**:
- Primary color: #3b82f6 (blue)
- Bubble color: #3b82f6
- Position: bottom-right
- Welcome message configured
- Analytics tracking added

**Performance Impact**:
- 362KB removed from critical rendering path
- Widget loads on-demand
- Better perceived performance

### Files Modified in Sprint 2.5

- `index.html` - Updated CONVOCORE trigger logic (lines 36-101)

---

## Sprint 2.6 Implementation: Lead Magnet PDF + Modal (Completed)

### Overview
Implemented lead magnet modal with email capture and PDF download as specified in PRD.md Section 4.10.

### Implementation Details

**LeadMagnetModal.tsx** (`src/components/homepage/LeadMagnetModal.tsx`):
- Slides in from right side
- Email validation (regex pattern)
- Connects to Supabase newsletter function
- `leadMagnet: true` flag for tracking
- Success state with download button
- Close methods: X button, backdrop click, ESC key

**Trigger Logic** (`src/pages/Index.tsx`):
- Triggers at 60% past hero section
- localStorage prevents repeat display
- `resetLeadMagnet()` helper for testing
- Console logging for debugging
- Initial scroll check on mount

**PDF Download**:
- Location: `/public/pdfs/automation-wins-field-teams.pdf`
- Size: 3.8MB
- Content: 4 automation wins for field teams
- Direct download link in success state

### Files Modified in Sprint 2.6

- `src/components/homepage/LeadMagnetModal.tsx` (NEW)
- `src/pages/Index.tsx` - Added modal trigger logic and component
- `public/pdfs/automation-wins-field-teams.pdf` (NEW)

---

## Phase 2 Additional Improvements (Completed)

### Design Optimization (frontend-design-optimizer agent)

**Color System Changes**:
- Removed all purple colors (285° hue)
- Replaced with blue (217° hue)
- Removed all gradient elements
- Solid colors only: blue + green

**Files Modified** (10 files):
- `src/index.css` - Color system variables
- `tailwind.config.ts` - Theme configuration
- `src/components/Navigation.tsx` - Logo and buttons
- `src/components/Footer.tsx` - Background and text
- `src/components/homepage/HeroWithICP.tsx` - Headline colors
- `src/components/homepage/ICPPainPointSection.tsx` - Section styling
- `src/components/homepage/ProofSection.tsx` - Card styling
- `src/pages/Index.tsx` - Multiple sections
- `src/pages/Construction.tsx` - Landing page styling

**Design Improvements**:
- Simplified visual complexity
- Consistent spacing and sizing
- Uniform button styles
- Better dark mode contrast

### Form Accessibility Fixes

**HTML5 Compliance**:
- Added `id` and `name` attributes to all inputs
- Added `autocomplete` attributes (email, tel, given-name, family-name, organization)
- Fixed `label htmlFor` to match input `id` attributes
- Added `aria-label` for better screen reader support

**Forms Updated**:
- `NewsletterSignup.tsx` - Email input
- `LeadMagnetModal.tsx` - Email input
- `Contact.tsx` - All form fields (firstName, lastName, email, company, phone, message)

### Technical Improvements

**Browserslist Update**:
- Updated caniuse-lite and browserslist databases
- Removed 13-month-old data warning
- Command: `npm update caniuse-lite browserslist`

**PDF Fix**:
- Replaced blank PDF with valid 3.8MB file
- 2 pages with proper content
- Created with Canva

**Testing Helpers**:
- Added `resetLeadMagnet()` global function
- Console logging for modal trigger debugging
- Initial scroll check for better UX

---

## Key Patterns and Best Practices Established

### Modal Implementation Pattern
```typescript
// Trigger with scroll detection
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
// Load after trigger condition
function loadScript() {
  const script = document.createElement("script");
  script.src = "script-url";
  script.defer = true;
  document.body.appendChild(script);
}
```