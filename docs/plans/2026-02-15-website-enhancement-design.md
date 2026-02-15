# FlowMatrix AI Website Enhancement - Phase 1 Design

**Date:** 2026-02-15
**Status:** Approved
**Approach:** Phased (C) - Brand/Design now, Astro migration later

## Summary

Phase 1 overhauls the FlowMatrix AI website's brand, design, and content within the existing React+Vite stack. The goal is to transform the site from "AI-generated looking" to a confident, editorial aesthetic that matches the caliber of a top-tier AI consultancy. Performance optimization and framework migration (Astro) are deferred to Phase 2.

## Design Direction: Confident Minimalism

**Core principles:**
- Typography-led hierarchy, not decoration-led
- Generous whitespace (120-160px between major sections)
- 1-2 subtle animations maximum (no parallax, no scroll-jacking)
- Mixed layouts: asymmetric grids, 2-column splits, full-bleed sections
- Surgical gold accent usage (CTAs, key data points, active states only)
- No video backgrounds - strip all MP4s from homepage

**Visual references:** nateherk.com, uppitai.com

**Color palette (unchanged):**
- Primary: Black (#000) / White (#FFF)
- Accent: Gold (HSL 43 59% 55%, #D4A84B)
- No gradients, no green

**Typography:** Inter (already in use), but with sharper size hierarchy:
- Display: 72-96px, tight tracking (-0.02em)
- Section headlines: 48-56px
- Body: 18-20px, generous line-height (1.6-1.7)

## Page Structure

### Homepage (/)
Seven sections, redesigned:

1. **Hero** - Full-viewport, text-only. "Build what lasts." headline at display size. Single-sentence sub, single CTA button. No video, no imagery.

2. **Stakes** - Split layout. Left: bold statement about AI adoption urgency. Right: 2-3 hard-hitting stats with gold accents. "The divergence has begun." reframed as editorial copy.

3. **Framework Overview** - Introduce the 4-phase methodology at a high level:
   - Assessment > Database Mobilization > AI Implementation > Personalized Software
   - Each phase gets a card with icon, 1-line description, and link to detail page
   - Clean grid layout, no animations

4. **Proof** - Client testimonial (UBL Group) presented editorially. Large pull-quote typography. Add 3-4 real metrics when available (placeholder with honest "Results in progress" if needed).

5. **Founders** - Asymmetric 2-column layout. Professional photo (or illustrated placeholder) + brief bio. No cards, no borders.

6. **FAQ** - Minimal accordion. Clean borders, generous padding. Retain existing 5 questions, update answers to reflect new service offering.

7. **CTA** - Full-width section. Clear headline, Tally form embed (form ID: wMBOXE). Add secondary link to Calendly if available, but Tally form remains primary.

### Service Detail Pages (NEW)
Four new pages sourced from Obsidian Service Offering docs:

- **/assessment** - 3-tier assessment breakdown (Operational, Technical, Strategic)
- **/database-mobilization** - Investment thesis, architecture overview, MCP server concept
- **/ai-implementation** - 4 categories (Automations, AI-Powered Tools, Agentic Systems, Dev Infrastructure)
- **/personalized-software** - Interactive software, Tier 3 unlock requirement

Each page follows the same template:
- Hero with phase number and title
- Problem statement (why this phase matters)
- What's included (from Obsidian docs)
- How it connects to the next phase
- CTA to book discovery call

## Content Updates

### Service Offering Replacement
**Old:** Discover / Build / Scale (3 pillars)
**New:** Assessment > Database Mobilization > AI Implementation > Personalized Software (4-phase framework)

Content sourced from:
- `~/Documents/Knowledge-Base/Internal/Service Offering/B-Assessment.md`
- `~/Documents/Knowledge-Base/Internal/Service Offering/C-Database Mobilization.md`
- `~/Documents/Knowledge-Base/Internal/Service Offering/D-AI Implementation.md`
- `~/Documents/Knowledge-Base/Internal/Service Offering/E-Personalized Software.md`

### Copy Tone
- Authoritative but accessible
- Short paragraphs (2-3 sentences max)
- No buzzwords, no filler
- Let the methodology speak for itself

## Technical Fixes (Bundled in Phase 1)

1. **Mobile navigation** - Add hamburger menu (currently hidden with `md:flex`)
2. **Security headers** - Add CSP, X-Content-Type-Options, X-Frame-Options via `vercel.json`
3. **Fix broken JSON-LD** - Update Organization schema (correct address, remove stale data)
4. **Image optimization** - Convert any remaining PNGs to WebP, add proper srcset
5. **Remove dead code** - Strip @huggingface/transformers dependency, commented-out CONVOCORE widget
6. **Strip video assets** - Remove all MP4 files, delete VideoBackground component usage from homepage

## Workflow

1. All work on `feature/brand-overhaul` branch
2. Vercel preview deployment for review before any merge to main
3. User reviews prototype, provides feedback
4. Iterate until approved
5. Merge to main only after explicit approval

## Out of Scope (Phase 2)

- Astro migration (SSG/SSR for SEO)
- 100/100 Lighthouse scores (requires SSR)
- Blog/content marketing section
- Case studies page
- Advanced animations or interactive elements
- Pricing page (pricing strategy still evolving per Obsidian docs)
