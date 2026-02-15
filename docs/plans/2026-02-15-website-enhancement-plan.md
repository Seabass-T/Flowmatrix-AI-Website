# Website Enhancement Phase 1 - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the FlowMatrix AI website from its current "AI-generated" look to a confident, editorial "Confident Minimalism" aesthetic, replace outdated Discover/Build/Scale pillars with the 4-phase service offering, add mobile navigation, fix technical debt, and strip video backgrounds.

**Architecture:** All changes within existing React 18 + Vite + Tailwind stack. No framework migration. Content centralized in `src/lib/constants.ts`. Section components in `src/components/sections/`. New service detail pages added as lazy-loaded routes. Videos stripped from all homepage sections.

**Tech Stack:** React 18.3.1, TypeScript 5.5.3, Vite 5.4.1 (SWC), Tailwind CSS 3.4.11, shadcn/ui, React Router v6, Tally.io forms

**Workspace:** `/Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement`
**Branch:** `feature/brand-overhaul`

**CRITICAL BUILD RULES:**
- NEVER split React into separate chunks (causes race conditions, see `CLAUDE.md`)
- NEVER use em dashes in copy
- NEVER include Claude attribution in commits
- Use `@/` path aliases for all imports

---

## Task 1: Update constants.ts with new content

**Files:**
- Modify: `src/lib/constants.ts`

**Step 1: Replace the COPY object and add SERVICE_PHASES**

Replace the entire contents of `src/lib/constants.ts` with:

```typescript
// Navigation
export const NAV_ITEMS = [
  { label: 'Services', href: '/#services' },
  { label: 'Results', href: '/#proof' },
  { label: 'Team', href: '/#team' },
  { label: 'FAQ', href: '/#faq' },
];

// Service Phases (new 4-phase framework)
export const SERVICE_PHASES = [
  {
    id: 'assessment',
    phase: 1,
    title: 'Assessment',
    tagline: 'Eliminate the guesswork.',
    description: 'Before we build anything, we assess. Three tiers of analysis: from a single process audit to a full human-tech holistic review. Every engagement starts here. You walk away with a clear, actionable roadmap, whether you work with us or not.',
    href: '/assessment',
  },
  {
    id: 'database-mobilization',
    phase: 2,
    title: 'Database Mobilization',
    tagline: 'Bet on the house, not on Red 16.',
    description: 'We create a living, AI-optimized copy of your company\'s data that stays in sync with your existing tools. Platform-independent, always current, ready for any AI system to plug into. Your data moves as fast as the technology does.',
    href: '/database-mobilization',
  },
  {
    id: 'ai-implementation',
    phase: 3,
    title: 'AI Implementation',
    tagline: 'Intelligence that works while you sleep.',
    description: 'From simple automations to autonomous agents, we build the backend systems that eliminate manual work. Four categories: Automations, AI-Powered Workflows, Agentic Systems, and Development Infrastructure. All connected to your mobilized data.',
    href: '/ai-implementation',
  },
  {
    id: 'personalized-software',
    phase: 4,
    title: 'Personalized Software',
    tagline: 'Where intelligence meets interface.',
    description: 'Custom applications designed for how your people actually work, powered by your own data, with AI woven into every interaction. Dashboards, portals, tools: built for your team, not adapted from a template.',
    href: '/personalized-software',
  },
];

// Centralized Copy
export const COPY = {
  hero: {
    headline: 'Build what lasts.',
    subheadline: 'The next decade belongs to businesses that transform now. We make sure you\'re one of them.',
    cta: 'Start the Conversation',
  },
  stakes: {
    headline: 'The divergence has begun.',
    body: 'Every industry is splitting in two. Companies modernizing their operations via AI are compounding advantages daily. Everyone else falls further behind with each passing quarter.',
    stat1: { value: '72%', label: 'of executives say AI is a top priority' },
    stat2: { value: '3x', label: 'productivity gains for early adopters' },
    stat3: { value: '18mo', label: 'before the gap becomes permanent' },
  },
  services: {
    headline: 'Four phases. One transformation.',
    subheadline: 'Each phase builds on the last. Start anywhere the assessment tells you to.',
  },
  proof: {
    headline: 'What happens after.',
    testimonial: 'Six months ago, this operations team spent 40+ hours weekly on manual data entry, invoice chasing, and email triage. Today, those same processes run automatically. The team focuses on growth.',
    attribution: {
      name: 'Umberto Lopardo',
      title: 'CEO & Co-founder',
      company: 'UBL Group',
    },
  },
  founders: {
    headline: 'Builders, not advisors.',
    intro: 'We provide strategic guidance. Then we roll up our sleeves and execute.',
    team: [
      {
        name: 'Sebastian Tamburro',
        title: 'CEO',
        image: '/sebastian-tamburro.png',
        linkedin: 'https://www.linkedin.com/in/sebastian-tamburro-694530287',
        email: 'st@flowmatrixai.com',
      },
      {
        name: 'Dom Joseph',
        title: 'COO',
        image: '/dom-joseph.png',
        linkedin: 'https://www.linkedin.com/in/dom-joseph1130/',
        email: 'dj@flowmatrixai.com',
      },
    ],
  },
  faq: {
    headline: 'Questions we hear.',
    items: [
      {
        question: 'What does AI transformation actually mean?',
        answer: 'It means your business runs differently six months from now. Processes that drain hours happen automatically. Decisions that required guesswork get made with data. Your team focuses on work that matters.',
      },
      {
        question: 'How long does this take?',
        answer: 'It depends on scope. Initial assessments take 1-2 weeks. First system implementations typically 2-4 weeks. We move at startup speed, not consultant speed.',
      },
      {
        question: 'What kinds of businesses do you work with?',
        answer: 'Established businesses with real operations to optimize. If you\'re processing transactions, managing projects, coordinating teams, or handling client communications at scale, we can help.',
      },
      {
        question: 'What makes you different from other consultants?',
        answer: 'We build things. Most consultants hand you a strategy and wish you luck implementing it. We\'re in the codebase, in the workflows, in the weeds until the system works. Our deliverable isn\'t a document. It\'s a business that runs better.',
      },
      {
        question: 'How does pricing work?',
        answer: 'It starts with an assessment, which is credited toward your first build if you proceed. Beyond that, pricing scales with your company size and scope. No hidden fees, no packages. We scope it honestly after we understand the work.',
      },
    ],
  },
  cta: {
    headline: 'Ready when you are.',
    subheadline: 'One conversation. No pitch, no pressure, just clarity on what AI can do for your business.',
    button: 'Start the Conversation',
  },
};

// Client Logos
export const CLIENT_LOGOS = [
  { name: 'UBL Group', src: '/logos/client-logos/ubl-group.png' },
  { name: 'Valor Tax Relief', src: '/logos/client-logos/valor-tax-relief.webp' },
  { name: 'All Clean Pressure Washing', src: '/logos/client-logos/all-clean.webp' },
  { name: 'Lochinvar Safaris', src: '/logos/client-logos/lochinvar-safaris.webp' },
  { name: 'Montana Trophy Outfitters', src: '/logos/client-logos/montana-trophy.webp' },
  { name: 'Palisades Bowhunting', src: '/logos/client-logos/palisades-bowhunting.webp' },
];

// Form
export const TALLY_FORM_ID = 'wMBOXE';

// SEO
export const SEO = {
  title: 'FlowMatrix AI | AI Transformation for Business',
  description: 'FlowMatrix AI architects and executes AI transformation for businesses. Assessment, database mobilization, AI implementation, and personalized software. Fast, permanent, compounding results.',
  ogImage: 'https://flowmatrixai.com/flowmatrix-og-image.png',
  keywords: 'FlowMatrix AI, AI transformation, business automation, AI consulting, AI implementation, database mobilization, personalized software, AI assessment',
  siteName: 'FlowMatrix AI',
  twitterHandle: '@flowmatrix_ai',
};
```

**Step 2: Verify TypeScript compiles**

Run: `cd /Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement && npx tsc --noEmit 2>&1 | head -20`
Expected: Type errors from components still referencing old exports (PILLARS, FAQS, FOUNDERS). This is expected and will be fixed in subsequent tasks.

**Step 3: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: replace content with 4-phase service offering framework"
```

---

## Task 2: Redesign HeroSection (strip video, typography-led)

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Step 1: Rewrite HeroSection**

Replace the entire file with:

```tsx
import { COPY } from '@/lib/constants';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-black flex items-center justify-center px-6">
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-7xl md:text-8xl lg:text-[7rem] font-bold text-white leading-[0.95] tracking-[-0.02em]">
          {COPY.hero.headline}
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          {COPY.hero.subheadline}
        </p>
        <button
          onClick={() => scrollToSection('start')}
          className="mt-12 px-8 py-4 bg-white text-black font-medium text-lg rounded-lg hover:bg-white/90 transition-colors"
        >
          {COPY.hero.cta}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
```

**Step 2: Verify the component renders**

Run: `cd /Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement && npx tsc --noEmit -- src/components/sections/HeroSection.tsx 2>&1 || true`

**Step 3: Commit**

```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: redesign hero section, strip video, typography-led layout"
```

---

## Task 3: Redesign StakesSection (split layout with stats)

**Files:**
- Modify: `src/components/sections/StakesSection.tsx`

**Step 1: Rewrite StakesSection**

Replace the entire file with:

```tsx
import { COPY } from '@/lib/constants';

const StakesSection = () => {
  const stats = [COPY.stakes.stat1, COPY.stakes.stat2, COPY.stakes.stat3];

  return (
    <section id="stakes" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Statement */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {COPY.stakes.headline}
            </h2>
            <p className="mt-8 text-xl text-white/70 leading-relaxed">
              {COPY.stakes.body}
            </p>
          </div>

          {/* Right: Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="border-l-2 border-accent pl-6">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-lg text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakesSection;
```

**Step 2: Commit**

```bash
git add src/components/sections/StakesSection.tsx
git commit -m "feat: redesign stakes section with split layout and stats"
```

---

## Task 4: Replace PillarsSection with ServicesSection (4-phase framework)

**Files:**
- Modify: `src/components/sections/PillarsSection.tsx` (rename conceptually, keep file for now)

**Step 1: Rewrite PillarsSection to show the 4-phase framework**

Replace the entire file with:

```tsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICE_PHASES, COPY } from '@/lib/constants';

const PillarsSection = () => {
  return (
    <section id="services" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
          {COPY.services.headline}
        </h2>
        <p className="mt-4 text-xl text-white/60 text-center max-w-2xl mx-auto">
          {COPY.services.subheadline}
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_PHASES.map((phase) => (
            <Link
              key={phase.id}
              to={phase.href}
              className="group block border border-white/10 rounded-lg p-8 md:p-10 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.02]"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-accent text-sm font-medium uppercase tracking-widest">
                  Phase {phase.phase}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {phase.title}
              </h3>
              <p className="text-lg text-white/50 italic mb-4">
                {phase.tagline}
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                {phase.description}
              </p>
              <span className="inline-flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
```

**Step 2: Commit**

```bash
git add src/components/sections/PillarsSection.tsx
git commit -m "feat: replace pillars with 4-phase service framework cards"
```

---

## Task 5: Redesign ProofSection (editorial testimonial, no video)

**Files:**
- Modify: `src/components/sections/ProofSection.tsx`

**Step 1: Rewrite ProofSection**

Replace the entire file with:

```tsx
import { CLIENT_LOGOS, COPY } from '@/lib/constants';

const ProofSection = () => {
  return (
    <section id="proof" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-20 tracking-tight">
          {COPY.proof.headline}
        </h2>

        {/* Testimonial - editorial pull-quote style */}
        <div className="max-w-3xl mx-auto mb-20">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white/90 leading-snug font-light">
            "{COPY.proof.testimonial}"
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-accent" />
            <div>
              <div className="text-white font-medium">
                {COPY.proof.attribution.name}
              </div>
              <div className="text-white/50 text-sm">
                {COPY.proof.attribution.title}, {COPY.proof.attribution.company}
              </div>
            </div>
          </div>
        </div>

        {/* Logo Bar */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-xs text-white/40 text-center mb-8 uppercase tracking-[0.2em]">
            Trusted by
          </p>
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            {CLIENT_LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto grayscale opacity-40 hover:opacity-70 transition-opacity duration-300 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
```

**Step 2: Commit**

```bash
git add src/components/sections/ProofSection.tsx
git commit -m "feat: redesign proof section with editorial pull-quote style"
```

---

## Task 6: Redesign FoundersSection (asymmetric layout, no video)

**Files:**
- Modify: `src/components/sections/FoundersSection.tsx`

**Step 1: Rewrite FoundersSection**

Replace the entire file with:

```tsx
import { Linkedin, Mail } from 'lucide-react';
import { COPY } from '@/lib/constants';

const FoundersSection = () => {
  return (
    <section id="team" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          {COPY.founders.headline}
        </h2>
        <p className="text-xl text-white/60 mb-20 max-w-xl">
          {COPY.founders.intro}
        </p>

        {/* Asymmetric 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {COPY.founders.team.map((founder) => (
            <div key={founder.name} className="flex flex-col">
              {/* Photo */}
              {founder.image && (
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h3 className="text-2xl font-semibold text-white">
                {founder.name}
              </h3>
              <p className="text-accent text-sm uppercase tracking-widest mt-1 mb-6">
                {founder.title}
              </p>

              {/* Contact links */}
              <div className="flex gap-3">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/10 rounded-lg text-white/50 hover:text-white hover:border-white/30 transition-all"
                  aria-label={`${founder.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="p-2 border border-white/10 rounded-lg text-white/50 hover:text-white hover:border-white/30 transition-all"
                  aria-label={`Email ${founder.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
```

**Step 2: Commit**

```bash
git add src/components/sections/FoundersSection.tsx
git commit -m "feat: redesign founders section with minimal asymmetric layout"
```

---

## Task 7: Clean up FAQSection (minimal styling update)

**Files:**
- Modify: `src/components/sections/FAQSection.tsx`

**Step 1: Update FAQ to use cleaner styling**

Replace the entire file with:

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { COPY } from '@/lib/constants';

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          {COPY.faq.headline}
        </h2>

        <Accordion type="single" collapsible className="space-y-0">
          {COPY.faq.items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-white/10 first:border-t"
            >
              <AccordionTrigger className="text-white text-left text-lg py-6 hover:no-underline hover:text-white/80 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 pb-6 leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
```

**Step 2: Commit**

```bash
git add src/components/sections/FAQSection.tsx
git commit -m "feat: clean up FAQ section styling"
```

---

## Task 8: Redesign CTASection (strip video, clean form embed)

**Files:**
- Modify: `src/components/sections/CTASection.tsx`

**Step 1: Rewrite CTASection**

Replace the entire file with:

```tsx
import { TallyForm } from '@/components/shared/TallyForm';
import { COPY, TALLY_FORM_ID } from '@/lib/constants';

const CTASection = () => {
  return (
    <section id="start" className="py-32 md:py-40 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {COPY.cta.headline}
          </h2>
          <p className="mt-4 text-xl text-white/60 leading-relaxed">
            {COPY.cta.subheadline}
          </p>
        </div>

        <div className="border border-white/10 rounded-xl p-6 md:p-8 bg-white/[0.02]">
          <TallyForm formId={TALLY_FORM_ID} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
```

**Step 2: Commit**

```bash
git add src/components/sections/CTASection.tsx
git commit -m "feat: redesign CTA section, strip video background"
```

---

## Task 9: Add mobile navigation (hamburger menu)

**Files:**
- Modify: `src/components/layout/Navigation.tsx`

**Step 1: Rewrite Navigation with mobile hamburger**

Replace the entire file with:

```tsx
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-black/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/flowmatrix-logo.webp"
              alt="FlowMatrix AI"
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white/60 hover:text-white transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick('/#start')}
            className="hidden md:block px-5 py-2 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Get Started
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 flex flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-2xl text-white/80 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('/#start')}
            className="mt-4 px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
```

**Step 2: Commit**

```bash
git add src/components/layout/Navigation.tsx
git commit -m "feat: add mobile hamburger navigation menu"
```

---

## Task 10: Update Footer (fix address, clean up)

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Rewrite Footer**

Replace the entire file with:

```tsx
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Logo + email */}
          <div>
            <img
              src="/flowmatrix-logo.webp"
              alt="FlowMatrix AI"
              className="h-14 w-auto mb-3"
            />
            <a
              href="mailto:info@flowmatrixai.com"
              className="text-white/40 hover:text-white/70 transition-colors text-sm"
            >
              info@flowmatrixai.com
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/flowmatrix-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Link
              to="/free"
              className="text-white/40 hover:text-white/70 transition-colors text-sm"
            >
              Free Resources
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} FlowMatrix AI. North America.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link to="/terms" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

**Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: simplify footer, fix address to North America"
```

---

## Task 11: Create service detail page template and 4 service pages

**Files:**
- Create: `src/pages/ServiceDetail.tsx`
- Modify: `src/App.tsx`

**Step 1: Create the ServiceDetail page component**

Create `src/pages/ServiceDetail.tsx`:

```tsx
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import { SERVICE_PHASES, TALLY_FORM_ID } from '@/lib/constants';
import { TallyForm } from '@/components/shared/TallyForm';

const SERVICE_CONTENT: Record<string, {
  problem: string;
  sections: { heading: string; body: string }[];
}> = {
  assessment: {
    problem: 'Most companies know something is off, but they lack visibility into what, where, and why. Without a clear picture, every dollar spent on technology is a gamble.',
    sections: [
      {
        heading: 'Three tiers, one purpose',
        body: 'Tier 1 examines a single process or workflow. Tier 2 covers your full technology stack and all SOPs. Tier 3 adds the human layer: how your people actually use the tools, where behavior creates bottlenecks, and what it would take to build software optimized for how they work.',
      },
      {
        heading: 'What you walk away with',
        body: 'A written report with executive summary, detailed findings, and prioritized recommendations. Plus an interactive Excalidraw whiteboard that maps the entire analysis visually: not a static PDF, but a living document your team can explore and share.',
      },
      {
        heading: 'Assessed through an AI lens',
        body: 'Every finding is evaluated through one question: can AI solve this? We don\'t just find problems. We map the path from manual process to intelligent system. The recommendations aren\'t "fix this spreadsheet." They\'re "here is how to turn this function into an AI-powered system."',
      },
      {
        heading: 'Risk reversal',
        body: 'If you proceed with any FlowMatrix build service, the assessment fee is credited as a down payment toward your first month. The assessment effectively costs nothing when you move forward.',
      },
    ],
  },
  'database-mobilization': {
    problem: 'When your data is locked inside a single platform, you are betting everything on one vendor. If the technology shifts, your data is stuck and switching costs are enormous.',
    sections: [
      {
        heading: 'A parallel intelligence layer',
        body: 'We create a comprehensive, AI-optimized instance of your company\'s data that lives independently from any single platform. It stays in sync with your source systems in real time. This is not a migration: you keep using your existing tools. What we build is a living copy of your knowledge, structured and ready for AI.',
      },
      {
        heading: 'Architecture follows data',
        body: 'The database infrastructure is designed around the specific characteristics of your data. Vector databases for unstructured knowledge. Graph databases for relational data. Any combination the data demands. Every design decision is made through the lens of how AI systems will need to access and use the information.',
      },
      {
        heading: 'Universal access layer',
        body: 'Your mobilized data is accessed through two interfaces: a personalized MCP server for structured queries and precise lookups, and vector embeddings with semantic search for fuzzy, contextual retrieval. Together, they cover the full spectrum of how AI systems need to access information.',
      },
      {
        heading: 'Living sync, not a snapshot',
        body: 'Data flows continuously from your existing tools into the mobilized infrastructure. Changes in the source systems are automatically reflected. The intelligence layer always represents the current state of your business.',
      },
    ],
  },
  'ai-implementation': {
    problem: 'Your team spends hours on tasks that follow patterns: reading emails, routing requests, chasing invoices, entering data. These patterns can be systematized. The time your people spend on repetition is time they don\'t spend on growth.',
    sections: [
      {
        heading: 'Automations and workflows',
        body: 'The foundation. Data syncs between platforms, scheduled reports, approval flows, triggered actions. Eliminates "someone has to remember to do this every Monday" tasks. Straightforward systems that remove manual, repetitive work.',
      },
      {
        heading: 'AI-powered workflows',
        body: 'Workflows that incorporate AI for tasks requiring judgment: document processing and extraction, content classification, meeting summarization, intelligent routing, data enrichment. Replaces tasks that require a human to read, interpret, and decide, but follow learnable patterns.',
      },
      {
        heading: 'Agentic systems',
        body: 'Autonomous AI agents that handle multi-step tasks independently. Research agents that gather and synthesize information. Operations agents that monitor and take corrective action. Knowledge agents that answer complex questions across your entire mobilized database.',
      },
      {
        heading: 'Development infrastructure',
        body: 'We install the same models, tools, and development environment FlowMatrix uses directly into your environment. Your team gains internal capability to create, customize, and expand on the systems we built. You stop renting capability and start owning it.',
      },
    ],
  },
  'personalized-software': {
    problem: 'All the intelligence, all the automation, all the data: it means nothing if the people who need it can\'t access it. Generic software forces your team to adapt to the tool. Personalized software adapts the tool to your team.',
    sections: [
      {
        heading: 'Designed for your people',
        body: 'The Tier 3 assessment reveals how your people actually work, not how a process diagram says they should. That insight directly shapes the software. Every screen, interaction, and navigation path reflects how the actual users think and operate.',
      },
      {
        heading: 'Powered by your data',
        body: 'The mobilized database means every piece of personalized software is fueled by your company\'s own knowledge: live, current, and comprehensive. Dashboards display real metrics from your actual systems in real time. Search interfaces query your entire knowledge base.',
      },
      {
        heading: 'AI-native from the ground up',
        body: 'This is not a traditional application with AI bolted on. Intelligence is woven into every interaction. The interface anticipates needs, surfaces relevant information, and adapts to context. Built on the same AI infrastructure that powers the backend systems.',
      },
      {
        heading: 'Internal, external, or both',
        body: 'Executive dashboards, operations management interfaces, client portals, customer-facing reporting, AI-powered support tools. The form factor depends on what your company needs. Internal teams and external users can interact through different interfaces connected to the same data.',
      },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const phaseIndex = SERVICE_PHASES.findIndex((p) => p.id === slug);
  if (phaseIndex === -1) return null;

  const phase = SERVICE_PHASES[phaseIndex];
  const content = SERVICE_CONTENT[slug!];
  const nextPhase = SERVICE_PHASES[phaseIndex + 1];
  const prevPhase = phaseIndex > 0 ? SERVICE_PHASES[phaseIndex - 1] : null;

  return (
    <>
      <Helmet>
        <title>{phase.title} | FlowMatrix AI</title>
        <meta name="description" content={phase.description} />
      </Helmet>

      <div className="bg-black min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
            <span className="block text-accent text-sm font-medium uppercase tracking-widest mb-4">
              Phase {phase.phase}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              {phase.title}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              {phase.description}
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-2 border-accent pl-8">
              <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light">
                {content.problem}
              </p>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-20">
            {content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next phase link */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            {prevPhase && (
              <Link
                to={prevPhase.href}
                className="flex-1 border border-white/10 rounded-lg p-6 hover:border-white/25 transition-colors group"
              >
                <span className="text-xs text-white/40 uppercase tracking-widest">Previous</span>
                <span className="block text-lg text-white mt-1 group-hover:text-white/80">
                  Phase {prevPhase.phase}: {prevPhase.title}
                </span>
              </Link>
            )}
            {nextPhase && (
              <Link
                to={nextPhase.href}
                className="flex-1 border border-white/10 rounded-lg p-6 hover:border-white/25 transition-colors group text-right"
              >
                <span className="text-xs text-white/40 uppercase tracking-widest">Next</span>
                <span className="flex items-center justify-end gap-2 text-lg text-white mt-1 group-hover:text-white/80">
                  Phase {nextPhase.phase}: {nextPhase.title} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Start with a conversation.
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Tell us what you are working on. We will tell you honestly whether we can help.
            </p>
            <div className="border border-white/10 rounded-xl p-6 md:p-8 bg-white/[0.02]">
              <TallyForm formId={TALLY_FORM_ID} className="mx-auto" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;
```

**Step 2: Add routes to App.tsx**

In `src/App.tsx`, add the lazy import after the existing lazy imports:

```tsx
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
```

Add routes ABOVE the `*` catch-all route:

```tsx
<Route path="/assessment" element={<ServiceDetail />} />
<Route path="/database-mobilization" element={<ServiceDetail />} />
<Route path="/ai-implementation" element={<ServiceDetail />} />
<Route path="/personalized-software" element={<ServiceDetail />} />
```

**Step 3: Verify build compiles**

Run: `cd /Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement && npm run build 2>&1 | tail -10`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/pages/ServiceDetail.tsx src/App.tsx
git commit -m "feat: add 4 service detail pages with shared template"
```

---

## Task 12: Update Index.tsx section comments

**Files:**
- Modify: `src/pages/Index.tsx`

**Step 1: Update the section comments in Index.tsx**

The components are the same file names but the comments should reflect the new content. Update `src/pages/Index.tsx`:

```tsx
import { Helmet } from 'react-helmet';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import StakesSection from '@/components/sections/StakesSection';
import PillarsSection from '@/components/sections/PillarsSection';
import ProofSection from '@/components/sections/ProofSection';
import FoundersSection from '@/components/sections/FoundersSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
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
          <StakesSection />
          <PillarsSection />
          <ProofSection />
          <FoundersSection />
          <FAQSection />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default Index;
```

**Step 2: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "refactor: clean up Index.tsx section comments"
```

---

## Task 13: Add security headers to vercel.json

**Files:**
- Modify: `vercel.json`

**Step 1: Add security headers**

Replace `vercel.json` with:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Step 2: Commit**

```bash
git add vercel.json
git commit -m "feat: add security headers to vercel.json"
```

---

## Task 14: Fix JSON-LD schema in index.html and clean up dead code

**Files:**
- Modify: `index.html`

**Step 1: Update JSON-LD Organization schema**

In `index.html`, update the Organization schema `address` to use correct info, and remove the SearchAction schema (SPA does not support search). Remove the CONVOCORE comments and dark mode prevention script (unnecessary with the current dark-only design system).

The updated `index.html` should:
- Keep the Organization schema but fix address to `"addressCountry": "US"` with `"addressRegion": "North America"`
- Remove the `WebSite` SearchAction schema (the site has no search)
- Keep the ProfessionalService schema
- Remove the CONVOCORE commented-out widget and dark mode prevention script
- Keep Google Analytics

**Step 2: Commit**

```bash
git add index.html
git commit -m "fix: update JSON-LD schema, remove dead code from index.html"
```

---

## Task 15: Remove unused dependencies from package.json

**Files:**
- Modify: `package.json`

**Step 1: Remove @huggingface/transformers**

Remove the line `"@huggingface/transformers": "^3.6.1",` from `package.json` dependencies.

**Step 2: Run npm install to update lockfile**

Run: `cd /Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement && npm install`

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: remove unused @huggingface/transformers dependency"
```

---

## Task 16: Full build verification and push

**Step 1: Run the full build**

Run: `cd /Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement && npm run build`
Expected: Build succeeds with no errors.

**Step 2: Check for TypeScript errors**

Run: `cd /Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement && npx tsc --noEmit`
Expected: No errors.

**Step 3: Check for lint errors**

Run: `cd /Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement && npm run lint`
Expected: No errors (or only pre-existing warnings).

**Step 4: Review git log**

Run: `cd /Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement && git log --oneline feature/brand-overhaul`

**Step 5: Push to remote for Vercel preview**

Run: `cd /Users/avaflow/workspaces/Flowmatrix-AI-Website--website-enhancement && git push -u origin feature/brand-overhaul`

The Vercel preview deployment will generate automatically. Share the preview URL with the user for review.

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Update constants with 4-phase content | `constants.ts` |
| 2 | Redesign Hero (strip video) | `HeroSection.tsx` |
| 3 | Redesign Stakes (split layout + stats) | `StakesSection.tsx` |
| 4 | Replace Pillars with 4-phase cards | `PillarsSection.tsx` |
| 5 | Redesign Proof (editorial pull-quote) | `ProofSection.tsx` |
| 6 | Redesign Founders (minimal layout) | `FoundersSection.tsx` |
| 7 | Clean up FAQ styling | `FAQSection.tsx` |
| 8 | Redesign CTA (strip video) | `CTASection.tsx` |
| 9 | Add mobile hamburger nav | `Navigation.tsx` |
| 10 | Simplify Footer | `Footer.tsx` |
| 11 | Create service detail pages + routes | `ServiceDetail.tsx`, `App.tsx` |
| 12 | Clean up Index.tsx | `Index.tsx` |
| 13 | Add security headers | `vercel.json` |
| 14 | Fix JSON-LD, remove dead code | `index.html` |
| 15 | Remove unused dependencies | `package.json` |
| 16 | Full build verification + push | - |
