# FlowMatrix AI Website Revamp - PRD

**Version:** 3.0
**Date:** December 21, 2025
**Codename:** "The Ancient Code"
**Status:** IN PROGRESS - Phase 3 & 4 Complete

---

## Implementation Status

**Branch:** `revamp-v3` (created from main)

### ✅ Completed (Phase 1, 2, 3 & 4)
- [x] Color system updated (black/white/gold)
- [x] Tailwind config updated
- [x] Global CSS variables updated
- [x] Constants file created (`src/lib/constants.ts`)
- [x] New folder structure created
- [x] Video placeholder folder created
- [x] Deleted 11 obsolete page files
- [x] Deleted obsolete component files
- [x] Created VideoBackground.tsx
- [x] Created MagneticButton.tsx
- [x] Created TallyForm.tsx (fixed named export issue)
- [x] Created Navigation.tsx (minimal sticky nav)
- [x] Created Footer.tsx (minimal footer)
- [x] Updated App.tsx routing (4 routes only)
- [x] Created placeholder Index.tsx page
- [x] HeroSection.tsx (full viewport with video, magnetic button)
- [x] StakesSection.tsx ("Adapt or become irrelevant")
- [x] PillarsSection.tsx (3-column grid: Discover, Build, Scale)
- [x] ProofSection.tsx (client logos, testimonial, metrics)
- [x] FoundersSection.tsx (team video, founder bios)
- [x] FAQSection.tsx (accordion with 5 FAQs)
- [x] CTASection.tsx (Tally form embed, video background)
- [x] Updated Index.tsx with all 7 sections integrated
- [x] Updated Terms.tsx styling (black/white/gold)
- [x] Updated Privacy.tsx styling (black/white/gold)
- [x] Updated NotFound.tsx styling (black/white/gold)

### ⏳ Pending (Phase 5 - Final Polish)
- [ ] Testing and optimization
- [ ] Video asset creation and replacement
- [ ] Final content review

**Current State:** All 7 sections created and integrated. Legal pages styled. Site compiles with zero TypeScript errors. Ready for video assets and final polish.

---

## Executive Summary

### Mission
Transform FlowMatrix AI's website from a multi-page, construction-focused, green-accented site into a minimal, single-page, black/white masterpiece that positions the company as a premium AI transformation partner.

### Core Changes

| Aspect | BEFORE | AFTER |
|--------|--------|-------|
| **Pages** | 10+ separate pages | 1 scrolling page + Terms/Privacy |
| **Positioning** | Construction automation | Universal AI transformation |
| **Color** | White bg, green accent | Black bg, white text, gold accents (animations only) |
| **Navigation** | Full nav with dropdowns | Minimal sticky nav with scroll-to-section |
| **Pricing** | Visible, detailed | Removed entirely |
| **Industry** | Construction/trade specific | Industry-agnostic |
| **Animations** | Static/minimal | Premium video animations throughout |

### Design Philosophy
The website embodies "The Ancient Code" concept - timeless wisdom meeting modern implementation. Classical aesthetics (marble, stone, architectural elements) combined with the circuit tree motif. The message: AI transformation isn't new technology bolted on; it's ancient principles of efficiency and growth, now executable through modern tools.

---

## Technical Specifications

### Tech Stack (Unchanged)
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite with SWC
- **Styling:** Tailwind CSS (new configuration)
- **Routing:** React Router v6 (simplified)
- **UI Components:** shadcn/ui (restyled)
- **Forms:** Tally.io embedded (existing form)
- **Deployment:** Vercel (existing)

### Development Commands
```bash
npm run dev      # http://[::]:8080
npm run build    # Production build
npm run lint     # Code quality
```

---

## File Structure Changes

### Files to DELETE

```
src/pages/
├── Pricing.tsx           # DELETE
├── Solutions.tsx         # DELETE
├── SolutionDetail.tsx    # DELETE
├── Results.tsx           # DELETE
├── ResultsPost.tsx       # DELETE
├── Newsletter.tsx        # DELETE
├── About.tsx             # DELETE (content moves to main page)
├── Contact.tsx           # DELETE (form on main page)
├── Construction.tsx      # DELETE
├── HomeService.tsx       # DELETE
├── CaseStudyDetail.tsx   # DELETE

src/components/
├── homepage/             # DELETE entire folder (rebuild from scratch)
├── ClientSpotlight.tsx   # DELETE
├── SolutionCard.tsx      # DELETE
├── (keep Navigation.tsx - will modify)
├── (keep Footer.tsx - will modify)
```

### Files to CREATE

```
src/
├── pages/
│   ├── Index.tsx                    # REWRITE - Single page application
│   ├── Terms.tsx                    # KEEP (minor style updates)
│   ├── Privacy.tsx                  # KEEP (minor style updates)
│   ├── CaseStudy.tsx                # NEW - Generic case study template (Phase 2)
│   └── NotFound.tsx                 # KEEP (restyle)
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx           # REWRITE - Minimal sticky nav
│   │   └── Footer.tsx               # REWRITE - Minimal footer
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx          # NEW
│   │   ├── StakesSection.tsx        # NEW
│   │   ├── PillarsSection.tsx       # NEW
│   │   ├── ProofSection.tsx         # NEW
│   │   ├── FoundersSection.tsx      # NEW
│   │   ├── FAQSection.tsx           # NEW
│   │   └── CTASection.tsx           # NEW
│   │
│   ├── ui/
│   │   ├── VideoBackground.tsx      # NEW - Video/GIF handler component
│   │   ├── ScrollProgress.tsx       # NEW - Progress indicator
│   │   ├── MagneticButton.tsx       # NEW - Interactive CTA button
│   │   └── Accordion.tsx            # MODIFY existing shadcn
│   │
│   └── shared/
│       └── TallyForm.tsx            # NEW - Reusable form embed
│
├── assets/
│   └── videos/                      # NEW - Video asset folder
│       ├── hero-awakening.mp4       # Placeholder for A1
│       ├── stakes-transfer.mp4      # Placeholder for A2
│       ├── pillar-discover.mp4      # Placeholder for A3a
│       ├── pillar-build.mp4         # Placeholder for A3b
│       ├── pillar-scale.mp4         # Placeholder for A3c
│       ├── proof-gallery.mp4        # Placeholder for A4
│       ├── founders-stewards.mp4    # Placeholder for A5
│       ├── cta-invitation.mp4       # Placeholder for A6
│       └── loading-emergence.mp4    # Placeholder for A7
│
├── styles/
│   └── globals.css                  # UPDATE - New color system
│
└── lib/
    └── constants.ts                 # NEW - Centralized copy and config
```

### Public Assets

```
public/
├── logos/
│   ├── flowmatrix-logo-white.png    # White logo for dark bg
│   ├── flowmatrix-logo-black.png    # Black logo (keep for legal pages)
│   ├── flowmatrix-icon-white.png    # Icon only, white
│   └── client-logos/                # Client/partner logos (grayscale)
│       └── ubl-group.png
│
├── videos/                          # Alternative video location (larger files)
│   └── (same structure as src/assets/videos/)
│
└── og-image.png                     # UPDATE - New OG image (black/white)
```

---

## Design System

### Color Palette

```css
:root {
  /* Primary Colors */
  --color-background: #000000;        /* Pure black */
  --color-background-elevated: #0A0A0A; /* Near black for cards */
  --color-background-subtle: #111111;  /* Subtle elevation */
  
  /* Text Colors */
  --color-text-primary: #FFFFFF;      /* Pure white */
  --color-text-secondary: #A3A3A3;    /* Gray-400 */
  --color-text-muted: #737373;        /* Gray-500 */
  
  /* Border & Dividers */
  --color-border: #262626;            /* Gray-800 */
  --color-border-subtle: #171717;     /* Gray-900 */
  
  /* Accent (ONLY in animations/special elements) */
  --color-accent-gold: #D4A84B;       /* Warm amber gold */
  --color-accent-gold-bright: #FFD700; /* Bright gold for highlights */
  
  /* Interactive States */
  --color-hover: #171717;             /* Gray-900 */
  --color-active: #262626;            /* Gray-800 */
}
```

### Tailwind Configuration Update

```javascript
// tailwind.config.js - colors section
colors: {
  background: '#000000',
  foreground: '#FFFFFF',
  
  card: {
    DEFAULT: '#0A0A0A',
    foreground: '#FFFFFF',
  },
  
  muted: {
    DEFAULT: '#171717',
    foreground: '#A3A3A3',
  },
  
  accent: {
    DEFAULT: '#D4A84B',
    foreground: '#000000',
  },
  
  border: '#262626',
  input: '#262626',
  ring: '#D4A84B',
  
  // Remove all green/primary colors
  // Remove all gradient definitions
}
```

### Typography

```css
/* Font Stack */
--font-heading: 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;

/* Font Sizes */
--text-hero: clamp(3rem, 8vw, 6rem);      /* 48-96px */
--text-h1: clamp(2.5rem, 5vw, 4rem);      /* 40-64px */
--text-h2: clamp(1.75rem, 3vw, 2.5rem);   /* 28-40px */
--text-h3: clamp(1.25rem, 2vw, 1.5rem);   /* 20-24px */
--text-body: 1.125rem;                     /* 18px */
--text-small: 0.875rem;                    /* 14px */

/* Font Weights */
--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;

/* Line Heights */
--leading-tight: 1.1;
--leading-normal: 1.5;
--leading-relaxed: 1.7;
```

### Spacing System

```css
/* Section Padding */
--section-padding-y: clamp(4rem, 10vh, 8rem);
--section-padding-x: clamp(1rem, 5vw, 4rem);

/* Content Max Width */
--content-max-width: 1200px;
--content-narrow: 800px;

/* Component Spacing */
--space-section: 8rem;    /* Between major sections */
--space-block: 4rem;      /* Between content blocks */
--space-element: 2rem;    /* Between elements */
--space-tight: 1rem;      /* Tight spacing */
```

---

## Page Structure: Single Scrolling Page

### Section Order & IDs

```
┌─────────────────────────────────────────────┐
│ NAVIGATION (fixed)                          │
│ Logo | Approach | Proof | Team | [CTA]      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SECTION 1: HERO                             │
│ id="hero"                                   │
│ Animation: A1 - The Awakening Tablet        │
│ Height: 100vh                               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SECTION 2: STAKES                           │
│ id="stakes"                                 │
│ Animation: A2 - The Transfer of Knowledge   │
│ Height: auto (content-driven)               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SECTION 3: APPROACH (Pillars)               │
│ id="approach"                               │
│ Animations: A3a, A3b, A3c - Pillars         │
│ Height: auto (content-driven)               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SECTION 4: PROOF                            │
│ id="proof"                                  │
│ Animation: A4 - The Gallery of Proofs       │
│ Height: auto (content-driven)               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SECTION 5: FOUNDERS                         │
│ id="team"                                   │
│ Animation: A5 - The Stewards                │
│ Height: auto (content-driven)               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SECTION 6: FAQ                              │
│ id="faq"                                    │
│ Animation: None (keep minimal)              │
│ Height: auto (content-driven)               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SECTION 7: FINAL CTA                        │
│ id="start"                                  │
│ Animation: A6 - The Invitation              │
│ Height: 100vh                               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ FOOTER                                      │
│ Minimal: Logo, Email, LinkedIn, Legal       │
└─────────────────────────────────────────────┘
```

---

## Section-by-Section Specifications

### Section 1: Hero

**Component:** `src/components/sections/HeroSection.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    [VIDEO BACKGROUND]                       │
│                    A1: Awakening Tablet                     │
│                    (full viewport, centered)                │
│                                                             │
│              ┌─────────────────────────────┐                │
│              │                             │                │
│              │    BUILD WHAT LASTS.        │  ← Hero text   │
│              │                             │     overlay    │
│              │    The next decade belongs  │                │
│              │    to businesses that       │                │
│              │    transform now.           │                │
│              │                             │                │
│              │    [Start the Conversation] │  ← CTA button  │
│              │                             │                │
│              └─────────────────────────────┘                │
│                                                             │
│                         ↓                                   │  ← Scroll indicator
│                    (scroll cue)                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Copy:**
```
Headline: "Build what lasts."
Subheadline: "The next decade belongs to businesses that transform now. We make sure you're one of them."
CTA: "Start the Conversation"
```

**Behavior:**
- Video loops seamlessly
- Text appears with subtle fade-in (0.5s delay after page load)
- Scroll indicator pulses gently
- CTA button has magnetic hover effect
- On CTA click: Smooth scroll to embedded Tally form (in Final CTA section)

**Styling:**
```tsx
// HeroSection.tsx structure
<section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
  {/* Video Background */}
  <VideoBackground 
    src="/videos/hero-awakening.mp4" 
    fallback="/images/hero-fallback.jpg"
    className="absolute inset-0 w-full h-full object-cover opacity-80"
  />
  
  {/* Gradient Overlay (subtle, for text readability) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
  
  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
    <h1 className="text-hero font-bold text-white leading-tight tracking-tight">
      Build what lasts.
    </h1>
    <p className="mt-6 text-xl md:text-2xl text-white/80 max-w-2xl">
      The next decade belongs to businesses that transform now. We make sure you're one of them.
    </p>
    <MagneticButton
      className="mt-10"
      onClick={() => scrollToSection('start')}
    >
      Start the Conversation
    </MagneticButton>
  </div>
  
  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <ChevronDown className="w-8 h-8 text-white/50" />
  </div>
</section>
```

---

### Section 2: Stakes

**Component:** `src/components/sections/StakesSection.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│            SOME WILL LEAD. MOST WILL FOLLOW.                │
│                  (pre-headline, small)                      │
│                                                             │
│                    THE DIVERGENCE                           │
│                    HAS BEGUN.                               │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  Every industry is splitting in two.               │   │
│  │                                                     │   │
│  │  Companies modernizing their operations via AI      │   │
│  │  are compounding advantages daily...                │   │
│  │                                                     │   │
│  │  You already know this. The question isn't         │   │
│  │  awareness. It's bandwidth.                         │   │
│  │                                                     │   │
│  │  You don't have a team to build custom AI          │   │
│  │  systems. You don't have months to experiment.     │   │
│  │                                                     │   │
│  │  That's precisely why we exist.                     │   │
│  │                                                     │   │
│  │  We are your AI task force...                       │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│         [VIDEO: A2 - Transfer of Knowledge]                 │
│         (centered, max-width: 600px)                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Copy:**
```
Pre-headline: "Some will lead. Most will follow."
Headline: "The divergence has begun."

Body:
"Every industry is splitting in two.

Companies modernizing their operations via AI are compounding advantages daily. While everyone else falls further behind with each passing quarter.

You already know this. The question isn't awareness. It's bandwidth.

You don't have a team to build custom AI systems. You don't have months to experiment. You have a business to run today.

That's precisely why we exist.

We are your AI task force. You stay focused on growth. The transformation happens in the background. While we focus on solving, adopting, and optimizing one solution at a time, your competitors wonder how you got so far ahead."
```

**Styling:**
```tsx
<section id="stakes" className="py-24 md:py-32 px-6 bg-black">
  <div className="max-w-4xl mx-auto">
    <p className="text-sm text-muted-foreground text-center mb-4 uppercase tracking-widest">
      Some will lead. Most will follow.
    </p>
    <h2 className="text-h1 font-bold text-white text-center mb-16">
      The divergence has begun.
    </h2>

    <div className="text-xl md:text-2xl text-white/80 leading-relaxed space-y-6 text-center">
      <p>Every industry is splitting in two.</p>
      <p>Companies modernizing their operations via AI are compounding advantages daily. While everyone else falls further behind with each passing quarter.</p>
      <p>You already know this. The question isn't awareness. It's bandwidth.</p>
      <p>You don't have a team to build custom AI systems. You don't have months to experiment. You have a business to run today.</p>
      <p className="text-white font-medium">That's precisely why we exist.</p>
      <p>We are your AI task force. You stay focused on growth. The transformation happens in the background. While we focus on solving, adopting, and optimizing one solution at a time, your competitors wonder how you got so far ahead.</p>
    </div>

    <div className="mt-16 flex justify-center">
      <VideoBackground
        src="/videos/stakes-transfer.mp4"
        className="w-full max-w-lg rounded-lg"
        loop
      />
    </div>
  </div>
</section>
```

---

### Section 3: Approach (Pillars)

**Component:** `src/components/sections/PillarsSection.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│               THE ARCHITECTURE OF CHANGE.                   │
│                                                             │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐│
│  │                 │ │                 │ │                 ││
│  │  [VIDEO A3a]    │ │  [VIDEO A3b]    │ │  [VIDEO A3c]    ││
│  │                 │ │                 │ │                 ││
│  │  DISCOVER       │ │  BUILD          │ │  SCALE          ││
│  │                 │ │                 │ │                 ││
│  │  Before we      │ │  We construct   │ │  The first      ││
│  │  build, we      │ │  AI systems     │ │  system is just ││
│  │  listen. We map │ │  that feel like │ │  the beginning. ││
│  │  your ops,      │ │  they were      │ │  We embed       ││
│  │  identify the   │ │  always part of │ │  ongoing        ││
│  │  friction...    │ │  your business. │ │  optimization.  ││
│  │                 │ │                 │ │                 ││
│  └─────────────────┘ └─────────────────┘ └─────────────────┘│
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Copy:**
```
Section Headline: "The architecture of change."

Pillar 1 - DISCOVER:
"Before we build anything, we listen. We map your operations, identify the friction, and find the 20% of changes that will drive 80% of impact. No 200-page or sexy slide decks. Just clarity."

Pillar 2 - BUILD:
"We construct AI systems that feel like they were always part of your business—because they're built specifically for how you work. Not adapted. Not configured. Built."

Pillar 3 - SCALE:
"The first system is just the beginning. We embed ongoing optimization into your operations, so the gap between you and your competitors widens every month."
```

**Styling:**
```tsx
<section id="approach" className="py-24 md:py-32 px-6 bg-black">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-h1 font-bold text-white text-center mb-16">
      The architecture of change.
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pillars.map((pillar) => (
        <div 
          key={pillar.id}
          className="group relative bg-card border border-border rounded-lg p-6 hover:border-white/20 transition-colors duration-300"
        >
          {/* Video */}
          <div className="aspect-square mb-6 rounded-lg overflow-hidden">
            <VideoBackground 
              src={pillar.videoSrc}
              className="w-full h-full object-cover"
              loop
            />
          </div>
          
          {/* Title */}
          <h3 className="text-h3 font-semibold text-white mb-4">
            {pillar.title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {pillar.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Data:**
```typescript
const pillars = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'Before we build anything, we listen. We map your operations, identify the friction, and find the 20% of changes that will drive 80% of impact. No 200-page or sexy slide decks. Just clarity.',
    videoSrc: '/videos/pillar-discover.mp4'
  },
  {
    id: 'build',
    title: 'Build',
    description: 'We construct AI systems that feel like they were always part of your business—because they\'re built specifically for how you work. Not adapted. Not configured. Built.',
    videoSrc: '/videos/pillar-build.mp4'
  },
  {
    id: 'scale',
    title: 'Scale',
    description: 'The first system is just the beginning. We embed ongoing optimization into your operations, so the gap between you and your competitors widens every month.',
    videoSrc: '/videos/pillar-scale.mp4'
  }
];
```

---

### Section 4: Proof

**Component:** `src/components/sections/ProofSection.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                  WHAT HAPPENS AFTER.                        │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │            [VIDEO A4: Gallery of Proofs]            │   │
│  │            (background, subtle)                     │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│                    Trusted by:                              │
│         [Logo] [Logo] [Logo] [Logo] [Logo]                  │
│         (grayscale, horizontal scroll on mobile)            │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Six months ago, this ops team spent 40+ hrs        │   │
│  │  weekly on manual data entry...                     │   │
│  │                                                     │   │
│  │  Today, those processes run automatically...        │   │
│  │                                                     │   │
│  │  This isn't theory. It's Tuesday.                   │   │
│  │                                                     │   │
│  │  150 hours returned every month                     │   │
│  │  $60K+ annual impact                                │   │
│  │                                                     │   │
│  │  — CEO & Co-founder                                 │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│              [See Our Work →] (Phase 2 link)                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Copy:**
```
Section Headline: "What happens after."

Logo Bar Label: "Trusted by:"

Body (micro-story format):
"Six months ago, this operations team spent 40+ hours weekly on manual data entry, invoice chasing, and email triage.

Today, those same processes run automatically. The team focuses on growth. And the business saves over $60,000 annually in recovered time.

This isn't theory. It's Tuesday."

Metrics:
- "150 hours returned every month"
- "$60K+ annual impact"

Attribution: "— CEO & Co-founder"

CTA (Phase 2): "See Our Work"
```

**Styling:**
```tsx
<section id="proof" className="py-24 md:py-32 px-6 bg-black relative">
  {/* Background Video (subtle) */}
  <div className="absolute inset-0 opacity-30">
    <VideoBackground
      src="/videos/proof-gallery.mp4"
      className="w-full h-full object-cover"
      loop
    />
  </div>

  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-h1 font-bold text-white text-center mb-16">
      What happens after.
    </h2>

    {/* Logo Bar */}
    <div className="mb-16">
      <p className="text-sm text-muted-foreground text-center mb-6 uppercase tracking-widest">
        Trusted by
      </p>
      <div className="flex justify-center items-center gap-12 opacity-60">
        {clientLogos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className="h-8 w-auto grayscale"
          />
        ))}
      </div>
    </div>

    {/* Micro-story Card */}
    <div className="bg-card border border-border rounded-lg p-8 md:p-12">
      <div className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 space-y-4">
        <p>Six months ago, this operations team spent 40+ hours weekly on manual data entry, invoice chasing, and email triage.</p>
        <p>Today, those same processes run automatically. The team focuses on growth. And the business saves over $60,000 annually in recovered time.</p>
        <p className="text-white font-medium">This isn't theory. It's Tuesday.</p>
      </div>

      <div className="flex flex-wrap gap-6 mb-8">
        <div className="bg-background px-4 py-2 rounded">
          <span className="text-2xl font-bold text-white">150</span>
          <span className="text-muted-foreground ml-2">hours returned every month</span>
        </div>
        <div className="bg-background px-4 py-2 rounded">
          <span className="text-2xl font-bold text-white">$60K+</span>
          <span className="text-muted-foreground ml-2">annual impact</span>
        </div>
      </div>

      <cite className="text-muted-foreground not-italic">
        — CEO & Co-founder
      </cite>
    </div>
  </div>
</section>
```

---

### Section 5: Founders

**Component:** `src/components/sections/FoundersSection.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                 BUILDERS, NOT ADVISORS.                     │
│                                                             │
│         [VIDEO A5: The Stewards - centered]                 │
│                                                             │
│  ┌─────────────────────────┐ ┌─────────────────────────┐   │
│  │                         │ │                         │   │
│  │  Sebastian Tamburro     │ │  Dom Joseph             │   │
│  │  CEO                    │ │  COO                    │   │
│  │  Colgate University     │ │  Northeastern           │   │
│  │  Toronto, Ontario       │ │  Canfield, Ohio         │   │
│  │                         │ │                         │   │
│  │  [Bio details: Econ,    │ │  [Bio details: Civil    │   │
│  │  D1 Hockey, etc.]       │ │  Eng, Avid hunter]      │   │
│  │                         │ │                         │   │
│  │  [LinkedIn icon]        │ │  [LinkedIn icon]        │   │
│  │                         │ │                         │   │
│  └─────────────────────────┘ └─────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Copy:**
```
Section Headline: "Builders, not advisors."

Intro paragraph (optional):
"We're not consultants who deliver recommendations and disappear. We're operators who build."

Founder 1:
Name: "Sebastian Tamburro"
Title: "CEO"
School: "Colgate University"
Background: "Economics Major, Former D1 Hockey Player"
Location: "Toronto, Ontario"
Fun fact: "[Leave placeholder or omit]"

Founder 2:
Name: "Dom Joseph"
Title: "COO"
School: "Northeastern University"
Background: "BS Civil Engineering, MS Engineering Management & Business"
Location: "Canfield, Ohio"
Fun fact: "Avid hunter"

Bio format: [Simple, not paragraph - details TBD]
```

**Styling:**
```tsx
<section id="team" className="py-24 md:py-32 px-6 bg-black">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-h1 font-bold text-white text-center mb-16">
      Builders, not advisors.
    </h2>
    
    {/* Video */}
    <div className="flex justify-center mb-16">
      <VideoBackground 
        src="/videos/founders-stewards.mp4"
        className="w-full max-w-md rounded-lg"
        loop
      />
    </div>
    
    {/* Founders Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {founders.map((founder) => (
        <div 
          key={founder.name}
          className="text-center md:text-left"
        >
          <h3 className="text-h3 font-semibold text-white">
            {founder.name}
          </h3>
          <p className="text-accent uppercase tracking-widest text-sm mt-1 mb-4">
            {founder.title}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {founder.bio}
          </p>
          <a 
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white/60 hover:text-white transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Data:**
```typescript
const founders = [
  {
    name: 'Sebastian Tamburro',
    title: 'CEO',
    bio: '[Placeholder: Background in AI/automation, founding story, approach to client partnerships]',
    linkedin: 'https://linkedin.com/in/sebastiantamburro'
  },
  {
    name: 'Dom Joseph',
    title: 'COO',
    bio: '[Placeholder: Background, operational expertise, role in transformation delivery]',
    linkedin: 'https://linkedin.com/in/domjoseph'
  }
];
```

---

### Section 6: FAQ

**Component:** `src/components/sections/FAQSection.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    COMMON QUESTIONS                         │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  What does AI transformation actually mean?      [+]│   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  How long does this take?                        [+]│   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  What kinds of businesses do you work with?      [+]│   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  What makes you different from other consultants?[+]│   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  How does pricing work?                          [+]│   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Copy:**
```
Section Headline: "Common questions"

Q1: "What does AI transformation actually mean?"
A1: "The process by which we identify your company's biggest bottlenecks, create scalable AI-driven solutions to increase efficiency, train your people to use these solutions reliably, and repeat the virtuous cycle."

Q2: "How long does this take?"
A2: "It depends on scope. Initial diagnostics take 1-2 weeks. Implementation of first systems typically 2-4 weeks. We move at startup speed, not consultant speed."

Q3: "What kinds of businesses do you work with?"
A3: "Established businesses with real operations to optimize. If you're processing transactions, managing projects, coordinating teams, or handling client communications at scale, we can help."

Q4: "What makes you different from other consultants?"
A4: "We only care about business impact. No 200-slide strategy decks. No 6-month diagnostics. No strategy without implementation. We're builders, not advisors."

Q5: "How does pricing work?"
A5: "We build custom partnerships based on scope and impact. Let's have a conversation to understand your situation and provide a concrete answer."
```

**Styling:**
```tsx
<section id="faq" className="py-24 md:py-32 px-6 bg-card">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-h2 font-bold text-white text-center mb-12">
      Common questions
    </h2>
    
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border border-border rounded-lg px-6 bg-background"
        >
          <AccordionTrigger className="text-white text-left text-lg py-6 hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</section>
```

---

### Section 7: Final CTA

**Component:** `src/components/sections/CTASection.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                [VIDEO A6: The Invitation]                   │
│                (background, full section)                   │
│                                                             │
│              ┌─────────────────────────────┐                │
│              │                             │                │
│              │  THE QUESTION ISN'T IF.     │                │
│              │  IT'S WHEN.                 │                │
│              │                             │                │
│              │  Let's figure out what AI   │                │
│              │  can do for your business.  │                │
│              │                             │                │
│              │  ┌───────────────────────┐  │                │
│              │  │                       │  │                │
│              │  │   [TALLY FORM EMBED]  │  │                │
│              │  │                       │  │                │
│              │  │   Name                │  │                │
│              │  │   Email               │  │                │
│              │  │   Company             │  │                │
│              │  │   Message (optional)  │  │                │
│              │  │                       │  │                │
│              │  │   [Submit]            │  │                │
│              │  │                       │  │                │
│              │  └───────────────────────┘  │                │
│              │                             │                │
│              └─────────────────────────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Copy:**
```
Headline: "The question isn't if. It's when."
Subheadline: "Let's figure out what AI can do for your business."
```

**Styling:**
```tsx
<section id="start" className="relative min-h-screen py-24 md:py-32 px-6 bg-black flex items-center">
  {/* Video Background */}
  <div className="absolute inset-0">
    <VideoBackground 
      src="/videos/cta-invitation.mp4"
      className="w-full h-full object-cover opacity-50"
      loop
    />
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
  
  <div className="relative z-10 max-w-2xl mx-auto text-center">
    <h2 className="text-h1 font-bold text-white mb-6">
      The question isn't if.<br />It's when.
    </h2>
    <p className="text-xl text-white/80 mb-12">
      Let's figure out what AI can do for your business.
    </p>
    
    {/* Tally Form Embed */}
    <div className="bg-card/90 backdrop-blur border border-border rounded-lg p-8">
      <TallyForm formId="wMBOXE" />
    </div>
  </div>
</section>
```

---

### Navigation Component

**Component:** `src/components/layout/Navigation.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]           Approach | Proof | Team         [CTA]     │
└─────────────────────────────────────────────────────────────┘
```

**Behavior:**
- Fixed position at top
- Transparent background initially, becomes solid black on scroll (after 100px)
- Logo links to #hero (scroll to top)
- Nav items smooth-scroll to their sections
- CTA button scrolls to #start

**Styling:**
```tsx
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-black/95 backdrop-blur border-b border-border" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2"
        >
          <img 
            src="/logos/flowmatrix-icon-white.png" 
            alt="FlowMatrix AI" 
            className="h-8 w-8"
          />
          <span className="font-semibold text-white">FlowMatrix AI</span>
        </button>
        
        {/* Nav Links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('approach')}
            className="text-white/70 hover:text-white transition-colors"
          >
            Approach
          </button>
          <button 
            onClick={() => scrollToSection('proof')}
            className="text-white/70 hover:text-white transition-colors"
          >
            Proof
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-white/70 hover:text-white transition-colors"
          >
            Team
          </button>
        </div>
        
        {/* CTA */}
        <MagneticButton 
          variant="outline"
          size="sm"
          onClick={() => scrollToSection('start')}
        >
          Get Started
        </MagneticButton>
      </div>
    </nav>
  );
};
```

---

### Footer Component

**Component:** `src/components/layout/Footer.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         [Logo]                                              │
│                                                             │
│         info@flowmatrixai.com                               │
│                                                             │
│         [LinkedIn Icon]                                     │
│                                                             │
│         ─────────────────────────────                       │
│                                                             │
│         © 2025 FlowMatrix AI     Terms | Privacy            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Styling:**
```tsx
const Footer = () => {
  return (
    <footer className="bg-black border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/logos/flowmatrix-logo-white.png" 
            alt="FlowMatrix AI" 
            className="h-8"
          />
        </div>
        
        {/* Contact */}
        <div className="text-center mb-6">
          <a 
            href="mailto:info@flowmatrixai.com"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            info@flowmatrixai.com
          </a>
        </div>
        
        {/* Social */}
        <div className="flex justify-center mb-8">
          <a 
            href="https://linkedin.com/company/flowmatrixai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </div>
        
        <hr className="border-border mb-8" />
        
        {/* Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FlowMatrix AI</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

---

## Utility Components

### VideoBackground Component

**Component:** `src/components/ui/VideoBackground.tsx`

```tsx
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface VideoBackgroundProps {
  src: string;
  fallback?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
}

export const VideoBackground = ({
  src,
  fallback,
  className,
  loop = true,
  muted = true,
  autoPlay = true,
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError && fallback) {
    return (
      <img 
        src={fallback} 
        alt="" 
        className={cn('object-cover', className)}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      className={cn(
        'object-cover transition-opacity duration-500',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      playsInline
    />
  );
};
```

### MagneticButton Component

**Component:** `src/components/ui/MagneticButton.tsx`

```tsx
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  onClick?: () => void;
}

export const MagneticButton = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  onClick,
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative transition-all duration-200 ease-out font-medium',
        variant === 'default' && 'bg-white text-black hover:bg-white/90',
        variant === 'outline' && 'bg-transparent border border-white text-white hover:bg-white/10',
        size === 'sm' && 'px-4 py-2 text-sm rounded',
        size === 'default' && 'px-6 py-3 rounded-lg',
        size === 'lg' && 'px-8 py-4 text-lg rounded-lg',
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </button>
  );
};
```

### TallyForm Component

**Component:** `src/components/shared/TallyForm.tsx`

```tsx
import { useEffect } from 'react';

interface TallyFormProps {
  formId: string;
  className?: string;
}

export const TallyForm = ({ formId, className }: TallyFormProps) => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <iframe
      data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      loading="lazy"
      width="100%"
      height="400"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Contact Form"
      className={className}
    />
  );
};
```

---

## Router Configuration

**File:** `src/App.tsx`

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Index from '@/pages/Index';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
```

---

## Main Page Assembly

**File:** `src/pages/Index.tsx`

```tsx
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import StakesSection from '@/components/sections/StakesSection';
import PillarsSection from '@/components/sections/PillarsSection';
import ProofSection from '@/components/sections/ProofSection';
import FoundersSection from '@/components/sections/FoundersSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  // Smooth scroll behavior for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>FlowMatrix AI | Build what lasts</title>
        <meta
          name="description"
          content="The next decade belongs to businesses that transform now. We make sure you're one of them."
        />
        <meta property="og:title" content="FlowMatrix AI | Build what lasts" />
        <meta property="og:description" content="The next decade belongs to businesses that transform now. We make sure you're one of them." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-black min-h-screen">
        <Navigation />
        
        <main>
          <HeroSection />
          <StakesSection />
          <PillarsSection />
          <ProofSection />
          <FoundersSection />
          <FAQSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
```

---

## Video Asset Placeholders

Create placeholder files so the build doesn't break before videos are ready:

**File:** `src/assets/videos/README.md`

```markdown
# Video Assets

Place the following video files in this directory:

| Filename | Section | Duration | Aspect |
|----------|---------|----------|--------|
| hero-awakening.mp4 | Hero | 8-12s loop | 16:9 |
| stakes-transfer.mp4 | Stakes | 6-8s loop | 16:9 |
| pillar-discover.mp4 | Pillars | 4-6s loop | 1:1 |
| pillar-build.mp4 | Pillars | 4-6s loop | 1:1 |
| pillar-scale.mp4 | Pillars | 4-6s loop | 1:1 |
| proof-gallery.mp4 | Proof | 8s loop | 16:9 |
| founders-stewards.mp4 | Founders | 6-8s loop | 1:1 |
| cta-invitation.mp4 | CTA | 8s loop | 16:9 |
| loading-emergence.mp4 | Loading | 3-4s | 1:1 |

## Temporary Fallbacks

Until videos are ready, the VideoBackground component will display
a black background. No fallback images required.
```

---

## Implementation Checklist

### Phase 1: Foundation (Do First)

- [ ] Update `tailwind.config.js` with new color system
- [ ] Update `src/styles/globals.css` with CSS variables
- [ ] Delete all pages listed in "Files to DELETE" section
- [ ] Delete all components listed in "Files to DELETE" section
- [ ] Create folder structure: `src/components/sections/`, `src/components/layout/`, `src/components/ui/`, `src/components/shared/`
- [ ] Create `src/assets/videos/` folder with README.md

### Phase 2: Components (Build These)

- [ ] Create `VideoBackground.tsx`
- [ ] Create `MagneticButton.tsx`
- [ ] Create `TallyForm.tsx`
- [ ] Create `Navigation.tsx`
- [ ] Create `Footer.tsx`

### Phase 3: Sections (Build These)

- [ ] Create `HeroSection.tsx`
- [ ] Create `StakesSection.tsx`
- [ ] Create `PillarsSection.tsx`
- [ ] Create `ProofSection.tsx`
- [ ] Create `FoundersSection.tsx`
- [ ] Create `FAQSection.tsx`
- [ ] Create `CTASection.tsx`

### Phase 4: Assembly

- [ ] Update `App.tsx` with simplified routing
- [ ] Rewrite `Index.tsx` to assemble all sections
- [ ] Update `Terms.tsx` styling (black bg, white text)
- [ ] Update `Privacy.tsx` styling (black bg, white text)
- [ ] Update `NotFound.tsx` styling (black bg, white text)

### Phase 5: Polish

- [ ] Test all scroll-to-section navigation
- [ ] Test Tally form embed
- [ ] Test responsive behavior (mobile/tablet/desktop)
- [ ] Lighthouse audit for performance
- [ ] Add video assets when ready (drag and drop into `/src/assets/videos/`)

---

## Constants File

**File:** `src/lib/constants.ts`

```typescript
// Navigation
export const NAV_ITEMS = [
  { label: 'Approach', sectionId: 'approach' },
  { label: 'Proof', sectionId: 'proof' },
  { label: 'Team', sectionId: 'team' },
];

// Pillars
export const PILLARS = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'Before we build anything, we listen. We map your operations, identify the friction, and find the 20% of changes that will drive 80% of impact. No 200-page or sexy slide decks. Just clarity.',
    videoSrc: '/videos/pillar-discover.mp4',
  },
  {
    id: 'build',
    title: 'Build',
    description: 'We construct AI systems that feel like they were always part of your business—because they\'re built specifically for how you work. Not adapted. Not configured. Built.',
    videoSrc: '/videos/pillar-build.mp4',
  },
  {
    id: 'scale',
    title: 'Scale',
    description: 'The first system is just the beginning. We embed ongoing optimization into your operations, so the gap between you and your competitors widens every month.',
    videoSrc: '/videos/pillar-scale.mp4',
  },
];

// FAQs
export const FAQS = [
  {
    question: 'What does AI transformation actually mean?',
    answer: 'The process by which we identify your company\'s biggest bottlenecks, create scalable AI-driven solutions to increase efficiency, train your people to use these solutions reliably, and repeat the virtuous cycle.',
  },
  {
    question: 'How long does this take?',
    answer: 'It depends on scope. Initial diagnostics take 1-2 weeks. Implementation of first systems typically 2-4 weeks. We move at startup speed, not consultant speed.',
  },
  {
    question: 'What kinds of businesses do you work with?',
    answer: 'Established businesses with real operations to optimize. If you\'re processing transactions, managing projects, coordinating teams, or handling client communications at scale, we can help.',
  },
  {
    question: 'What makes you different from other consultants?',
    answer: 'We only care about business impact. No 200-slide strategy decks. No 6-month diagnostics. No strategy without implementation. We\'re builders, not advisors.',
  },
  {
    question: 'How does pricing work?',
    answer: 'We build custom partnerships based on scope and impact. Let\'s have a conversation to understand your situation and provide a concrete answer.',
  },
];

// Founders
export const FOUNDERS = [
  {
    name: 'Sebastian Tamburro',
    title: 'CEO',
    bio: '[Placeholder: Background in AI/automation, founding story, approach to client partnerships]',
    linkedin: 'https://linkedin.com/in/sebastiantamburro',
  },
  {
    name: 'Dom Joseph',
    title: 'COO',
    bio: '[Placeholder: Background, operational expertise, role in transformation delivery]',
    linkedin: 'https://linkedin.com/in/domjoseph',
  },
];

// Client Logos
export const CLIENT_LOGOS = [
  { name: 'UBL Group', src: '/logos/client-logos/ubl-group.png' },
  // Add more as needed
];

// Form
export const TALLY_FORM_ID = 'wMBOXE';

// SEO
export const SEO = {
  title: 'FlowMatrix AI | Build what lasts',
  description: 'The next decade belongs to businesses that transform now. We make sure you\'re one of them.',
  ogImage: '/og-image.png',
};
```

---

## Video Integration Guide

When your VEO 3 videos are ready:

1. **Export Settings:**
   - Format: MP4 (H.264)
   - Resolution: 1920x1080 (16:9) or 1080x1080 (1:1)
   - Frame rate: 24fps
   - Quality: High (but compressed for web - aim for <5MB per file)

2. **File Naming:**
   - Use exact names from the placeholder list
   - All lowercase, hyphens for spaces

3. **Placement:**
   - Copy files to `public/videos/` (for production)
   - The VideoBackground component references `/videos/filename.mp4`

4. **Testing:**
   - Videos should autoplay, loop, and be muted
   - Test on mobile (some browsers restrict autoplay)
   - Verify loop points are seamless

---

## Deployment Notes

- **Vercel:** No changes needed to deployment config
- **Environment:** No new env variables required
- **Build:** `npm run build` should complete without errors once all components exist
- **Videos:** Large video files may need Vercel's edge network or external CDN

---

## Future Phases (Not in This PRD)

### Phase 2: Case Studies
- Individual case study pages (`/case-study/:slug`)
- "See Our Work" link in Proof section becomes active
- Generic template, no industry-specific language

### Phase 3: Enhancements
- Loading animation (A7)
- Scroll progress indicator
- Interactive background grid
- Page transition animations

---

*End of PRD*
