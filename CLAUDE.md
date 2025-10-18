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