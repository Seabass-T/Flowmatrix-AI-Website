# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
│   ├── AnimatedFeatures.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── NewsletterSignup.tsx
├── pages/               # Route pages
│   ├── use-cases/      # Use case category pages (8 pages)
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
2. **Custom components** go directly in `src/components/`
3. **Page components** go in `src/pages/` with nested directories for categories
4. All components use the `@/` import alias (e.g., `@/components`, `@/lib`)

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
- Lovable tagger plugin is enabled in development mode only
- The project uses SWC instead of Babel for faster builds
- TypeScript strict mode is enabled
- Multiple tsconfig files: `tsconfig.json` (base), `tsconfig.app.json` (app), `tsconfig.node.json` (build tools)
