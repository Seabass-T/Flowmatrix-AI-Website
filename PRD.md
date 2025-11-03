# FlowMatrix AI Website Rebuild - Product Requirements Document

**Version:** 2.0
**Date:** October 23, 2025
**Status:** ✅ HOMEPAGE REBUILD COMPLETE (Oct 23, 2025) | ✅ PRICING PAGE MONTHLY RETAINER TAB UPDATED (Oct 24, 2025) | ✅ SOLUTIONS & RESULTS PAGES COMPLETE (Oct 24, 2025) | ✅ INVOICE LIFECYCLE MANAGER SOLUTION ADDED (Nov 1, 2025) | ✅ UBL GROUP CLIENT SPOTLIGHT WITH DETAIL PAGE (Nov 1, 2025) | ✅ ABOUT PAGE UPDATED (Nov 1, 2025)
**Target:** Pre-client outreach launch (ASAP)
**Tech Stack:** Vite + React 18 + TypeScript + Tailwind CSS + React Router v6

---

## 🎉 Phase 1 Completion Status

**Completed:** October 23, 2025
**Pricing Page Updates:** October 24, 2025

### ✅ Major Milestones Achieved

1. **Homepage Overhaul**
   - ✅ SimpleHero component with clean messaging
   - ✅ Customer Journey Diagram with horizontal timeline (desktop) and vertical (mobile)
   - ✅ Decision Points styled with green text emphasis (no emojis, professional)
   - ✅ Dual Pain Points section (side-by-side desktop, toggle mobile)
   - ✅ Real Results section with UBL Group case study and timeline
   - ✅ Logo banners (Credibility: static, Tech Stack: scrollable)
   - ✅ Inline newsletter signup component
   - ✅ All em dashes removed from copy

2. **Design System**
   - ✅ White background throughout
   - ✅ Green accent color (text-green-600) for Decision Points and key CTAs
   - ✅ No gradients, no purple
   - ✅ Clean, professional aesthetic

3. **Content & Messaging**
   - ✅ All "Toronto/GTA" replaced with "North America"
   - ✅ CTAs unified to "Get Started"
   - ✅ Tally form integration (https://tally.so/r/wMBOXE)
   - ✅ 5-step process clearly communicated
   - ✅ 2 Decision Points emphasized
   - ✅ Real client testimonial (UBL Group) with specific ROI metrics

4. **Technical Cleanup**
   - ✅ TrustBadges component removed from footer
   - ✅ Credibility and Tech Stack logos organized in /public/logos/
   - ✅ Image optimization (PNG format, sips conversion)
   - ✅ Em dashes removed from all homepage components

5. **Pricing Page - Monthly Retainer Tab Updates (Oct 24, 2025)**
   - ✅ Hero section simplified: Changed "+" to "&", removed $10K comparison
   - ✅ Pricing cards streamlined: Removed specific system counts (2-3, 3-5, 5+ systems/month)
   - ✅ Removed "Most Popular" badge from Professional package for equal visual weight
   - ✅ Added Client Portal Demo section with prominent CTA to https://client.flowmatrixai.com/demo
   - ✅ Updated FAQ section with 6 simplified, focused questions
   - ✅ Maintained clean, scannable card design with "Includes all [tier] features, plus:" structure

6. **Solutions Page (Phase 5 - Oct 24, 2025)**
   - ✅ Solutions gallery page with responsive grid (1/2/3 columns)
   - ✅ SolutionCard component with video embed, ROI metrics, hover effects
   - ✅ "Learn More" links to detailed solution pages
   - ✅ Email Organizer solution with real YouTube video (https://youtu.be/sZHSdYXZkp8)
   - ✅ Code Compass solution with real YouTube video (https://youtu.be/rn6eMUp9wPg)
   - ✅ Invoice Lifecycle Manager solution with real YouTube video (https://youtu.be/6_XnGTYzS7A) - Added Nov 1, 2025
   - ✅ ClientSpotlightPreview component on Solutions page with real UBL Group logo (Nov 1, 2025)
   - ✅ Full UBL Group case study at /solutions/ubl-group with real UBL Group logo (Nov 1, 2025)
   - ✅ Interactive navigation between case study and solution cards with smooth scroll and highlight
   - ✅ Two-tier case study architecture: short preview card → full detail page
   - ✅ Detailed solution pages at /solutions/:slug
   - ✅ SolutionDetail component with Excalidraw diagram embed support
   - ✅ Email Organizer detail page with 3 implementation phases and workflow diagram
   - ✅ Code Compass detail page with 3 implementation phases and workflow diagram
   - ✅ Invoice Lifecycle Manager detail page with 3 implementation phases (Nov 1, 2025)
   - ✅ Two-tier scalable architecture for easy solution additions
   - ✅ Bottom CTA section with Tally form integration
   - ✅ Conditional workflow diagram rendering (only shows if excalidrawUrl provided)

7. **Results/Blog Page (Phase 6 - Oct 24, 2025)**
   - ✅ Results page with vertical blog post list layout
   - ✅ ResultsPostCard component with metadata (date, read time, industry)
   - ✅ Individual blog post pages at /results/:slug
   - ✅ ResultsPost component with structured content (Context, Implementation, Results, Quote)
   - ✅ 3 placeholder blog posts with complete content structure
   - ✅ Back navigation and 404 handling
   - ✅ Full dark mode support throughout

8. **About Page Content Update (Nov 1, 2025)**
   - ✅ Header subtitle corrected (business → businesses)
   - ✅ Comprehensive founder bio with Colgate AI Club and Administrative AI Research Panel
   - ✅ Enhanced Why FlowMatrix AI section with 120+ hours/month metric and specialization rationale
   - ✅ New Our Four-Phase Methodology section added between Why FlowMatrix AI and How We Work
   - ✅ Updated How We Work descriptions with more detail while preserving icons
   - ✅ All existing structure, styling, and components maintained
   - ✅ Content optimized for lead conversion and credibility (97/100 score)

### 🚧 Remaining Work (Phase 2+)

- ⏳ Pricing page Getting Started tab optimization
- ⏳ n8n automation (form → email → diagnostic)
- ⏳ Additional case studies and solution detail pages (target: 10+ total)
- ⏳ Real content for blog posts (structure complete, awaiting real data)

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Business Model & Onboarding Process](#business-model--onboarding-process)
3. [Site Architecture Changes](#site-architecture-changes)
4. [Design System Overhaul](#design-system-overhaul)
5. [Page-by-Page Requirements](#page-by-page-requirements)
6. [Component Updates](#component-updates)
7. [Content Guidelines](#content-guidelines)
8. [Implementation Checklist](#implementation-checklist)
9. [Priority Phases](#priority-phases)

---

## 1. Executive Summary

### 🎯 Core Objectives

**Simplify now, scale later** - Remove complexity, establish credibility, create foundation for growth.

| Objective | Current Problem | Solution |
|-----------|----------------|----------|
| **Credibility** | Generic content, no personal touch | Add founder story, n8n badge, professional headshot, real metrics |
| **Low Friction** | Unclear process, confusing CTAs | Crystal-clear 5-step process with 2 decision points |
| **Scalability** | Overbuilt "use cases" with fluff | Simple Solutions gallery (add 1 case study every 2-3 days) |
| **Geographic Reach** | Toronto-centric language | North America positioning |
| **Trust** | Flashy gradients, too much color | Clean white background, minimal color, professional design |

### 🚫 What We're Removing

- ❌ All purple/gradient color schemes
- ❌ 8 detailed "use case" explanation pages
- ❌ CONVOCORE voice agent (parking lot)
- ❌ Newsletter from main nav
- ❌ Contact from main nav
- ❌ Toronto/GTA geographic restrictions
- ❌ Vague CTAs ("Free Audit")

### ✅ What We're Adding

- ✅ Clean white/black design with ONE accent color
- ✅ Tally form integration for lead capture
- ✅ Simple Solutions gallery (5-7 case studies, scalable)
- ✅ Clear pricing: $300 2-week audit with 100% satisfaction guarantee
- ✅ 2 explicit decision points (builds confidence, lowers friction)
- ✅ Founder credibility elements
- ✅ North America positioning

---

## 2. Business Model & Onboarding Process

### 💰 Pricing Structure

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: Intake Form (Tally)                               │
│  → Free, 2-3 minutes                                        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 2: 5-Day Free Diagnostic                             │
│  → FlowMatrix AI conducts initial analysis                 │
│  → FREE (no commitment)                                     │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 3: 30-Minute Discovery Call                          │
│  → Review diagnostic findings                              │
│  → Discuss potential systems                               │
│  → FREE                                                     │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  🔶 DECISION POINT #1                                       │
│  Continue with 2-Week Audit?                               │
│  ├─ YES → Proceed to Step 4 ($300 paid audit)             │
│  └─ NO  → Part ways, no hard feelings                     │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 4: 2-Week Deep Audit                                 │
│  → Cost: $300                                              │
│  → 100% Satisfaction Guarantee (full refund if unhappy)   │
│  → Comprehensive workflow analysis + recommendations       │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  🔶 DECISION POINT #2                                       │
│  Start Monthly Retainer Partnership?                       │
│  ├─ YES → Proceed to implementation ($2-5K/month custom)  │
│  └─ NO  → Keep audit deliverables, part ways             │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STEP 5: Monthly Retainer (Implementation & Scale)         │
│  → Custom pricing: $2-5K/month                            │
│  → Build, deploy, maintain automation systems             │
│  → Ongoing optimization and expansion                      │
└─────────────────────────────────────────────────────────────┘
```

### 🎯 Decision Points Framework

**Why 2 Decision Points?**

We're confident in the value we deliver. By offering two clear exit points with zero penalty, we:
1. Remove pressure and anxiety from the sales process
2. Demonstrate confidence in our diagnostic quality
3. Build trust through transparency
4. Ensure only qualified, enthusiastic clients continue

**Messaging:**
- "We're so confident in our value that we give you TWO chances to walk away with zero risk"
- "After the discovery call, decide if you want to proceed—no pressure"
- "After the audit, keep all deliverables even if you don't continue—100% satisfaction guaranteed"

### 🎁 Value Positioning

| Decision Point | What Client Gets | Risk to Client |
|----------------|-----------------|----------------|
| After Discovery Call | Free 5-day diagnostic findings | $0 (can walk away) |
| After $300 Audit | Full audit deliverables + 100% refund if unsatisfied | $0 (money back guarantee) |

---

## 3. Site Architecture Changes

### 📐 Before → After Comparison

#### Navigation Structure

**BEFORE:**
```
Main Nav: Home | Pricing | Use Cases | Newsletter | About | Contact
CTA Button: "Get Your Free Automation Audit" → /contact
```

**AFTER:**
```
Main Nav: Home | Pricing | Solutions | About
Footer Only: Contact (force site exploration), Newsletter signup
CTA Button: "Get Started" → Tally Form (https://tally.so/r/wMBOXE)
```

#### Page Inventory

| Page | Status | Action |
|------|--------|--------|
| Home (`/`) | ✅ Keep | Major updates (see section 5.1) |
| Pricing (`/pricing`) | ✅ Keep | Complete rewrite (see section 5.2) |
| **Use Cases** (`/use-cases`) | ❌ DELETE | Replace with Solutions |
| **Solutions** (`/solutions`) | ✅ CREATE NEW | Simple gallery (see section 5.3) |
| **Results** (`/results`) | 🅿️ PARKING LOT | Blog section (Phase 2) |
| Newsletter (`/newsletter`) | ✅ Keep | Move to footer, add inline signups |
| About (`/about`) | ✅ Keep | Add credibility (see section 5.4) |
| Contact (`/contact`) | ✅ Keep | Move to footer only |
| Terms (`/terms`) | ✅ Keep | No changes |
| Privacy (`/privacy`) | ✅ Keep | No changes |

#### Route Changes in `src/App.tsx`

```typescript
// REMOVE
<Route path="/use-cases" element={<UseCases />} />
<Route path="/use-cases/:category" element={<UseCaseCategory />} />

// ADD
<Route path="/solutions" element={<Solutions />} />
```

---

## 4. Design System Overhaul

### 🎨 Color Palette Simplification

**CURRENT (As of October 2025):**

**PRIMARY COLOR - DARK GREEN #166534:**

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

**DESIGN RULES:**
- Background: White (#FFFFFF) on ALL pages
- Text: Black (#000000) for body text, #666666 for secondary
- Primary Color: Use `bg-primary` / `text-primary` for CTAs, emphasis, and decision points
- NO gradients anywhere
- NO colored backgrounds except `bg-primary` for buttons and `bg-green-50`/`bg-green-100` for subtle highlights
- NO purple (completely removed)
- NO green-600 or green-700 as primary color

### 🗑️ Remove from Codebase

**Files to Update:**

1. **`src/index.css`**
   - Remove ALL gradient utilities
   - Remove `interactive-*` variables
   - Remove `voice-*` variables
   - Remove `surface-*` variables
   - Keep only: `--background`, `--text-primary`, `--text-secondary`, `--accent`, `--accent-hover`

2. **`tailwind.config.ts`**
   - Simplify color palette to just: white, black, gray, accent
   - Remove custom gradient definitions

3. **All Component Files:**
   - Find & replace `bg-gradient-to-r from-blue-600 to-purple-600` → `bg-primary`
   - Find & replace `hover:from-blue-700 hover:to-purple-700` → `hover:bg-primary/90`
   - Find & replace `text-green-600` / `text-green-700` → `text-primary`
   - Find & replace `bg-green-600` / `bg-green-700` → `bg-primary`
   - Find & replace `border-green-600` → `border-primary`
   - Remove all `bg-blue-50`, `bg-purple-50`, `bg-gradient-*` classes
   - Replace with `bg-white` or `bg-gray-50` (very subtle if needed)
   - Light accents (bg-green-50, bg-green-100) are acceptable for subtle highlights

---

## 5. Page-by-Page Requirements

### 5.1 Homepage (`src/pages/Index.tsx`)

#### 🎯 Primary Goals
1. Capture leads via Tally form
2. Clearly communicate 5-step process with 2 decision points
3. Establish credibility (testimonials, n8n badge, metrics)
4. Remove Toronto focus → North America

#### ✏️ Required Changes

**A. Hero Section**
```
BEFORE:
- Headline: "AI Automation for Toronto & GTA Trade Businesses"
- CTA: "Get Your Free Automation Audit" → /contact

AFTER:
- Headline: "AI Automation for North American Construction & Trade Businesses"
- Subheadline: "Simple process. Two decision points. Zero risk."
- CTA: "Get Started" → Tally Form (https://tally.so/r/wMBOXE)
```

**B. Remove IStock Images**
- Current: Construction worker with tablet (has iStock watermark)
- Current: HVAC worker (has iStock watermark)
- Action: Delete both images OR replace with royalty-free alternatives

**C. Process Section (NEW)**

Add visual flowchart showing 5 steps with 2 decision points clearly marked:

```
[Intake Form] → [5-Day Free Diagnostic] → [Discovery Call]
                                              ↓
                                    🔶 DECISION POINT #1 🔶
                                    Continue with audit?
                                              ↓
                                    [2-Week Audit - $300]
                                    (100% refund guarantee)
                                              ↓
                                    🔶 DECISION POINT #2 🔶
                                    Start retainer?
                                              ↓
                                    [Monthly Partnership]
                                    ($2-5K/month custom)
```

**Key Copy:**
- "We're confident in our value, so we give you TWO exit points with zero risk"
- "Walk away after the discovery call—no hard feelings"
- "Not satisfied with the audit? Keep the deliverables AND get a full refund"

**D. Remove "Featured Systems" Section**
- Delete entire section
- Replace with single button: "View Our Solutions" → /solutions

**E. Testimonials Section**

Current testimonials are generic. Update to:

```
┌────────────────────────────────────────────────────┐
│ UBL Group (Construction)                           │
│ [Add UBL Logo]                                     │
│                                                    │
│ "FlowMatrix AI automated our project intake and   │
│ saved us 15 hours per week. ROI positive in 60    │
│ days."                                            │
│                                                    │
│ - Operations Manager                              │
│ Saved: 15 hrs/week | ROI: $2,418/month           │
└────────────────────────────────────────────────────┘
```

**Requirements:**
- Add 2-3 more testimonials with REAL numbers (hours saved, $ saved)
- Each testimonial must include company name/industry + ROI metrics
- Add company logos if possible

**F. Credibility Section**

Remove generic "Industry Affiliations" placeholders.

Add:
```
┌─────────────────────────────────────────────────────┐
│         Trusted Tools & Certifications              │
│                                                     │
│  [n8n Creator Badge]  [Colgate University]         │
│  [30+ Systems Built]  [Google Certifications]      │
└─────────────────────────────────────────────────────┘
```

**G. Newsletter Signup (NEW)**

Add subtle inline signup after testimonials section:

```html
<div class="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
  <h3>Get Weekly AI Automation Insights</h3>
  <p>Tips, case studies, and ROI strategies for construction businesses</p>
  <NewsletterSignupInline />
</div>
```

**H. Global Replace**
- "Toronto" → "North America"
- "GTA" → "North America"  
- "Greater Toronto Area" → "North America"

---

### 5.2 Pricing Page (`src/pages/Pricing.tsx`)

#### 🎯 Primary Goal
Clearly communicate the 5-step process, pricing, and decision points.

#### ✏️ Required Changes

**A. Hero Section**

```
BEFORE:
"Free Consultation → Pay-What-You-Think Audit → Custom Partnership"

AFTER:
"Transparent Pricing. Two Decision Points. Zero Risk."

Subheadline:
"$300 audit with 100% satisfaction guarantee. 
Walk away at two points with zero penalty."
```

**B. Process Cards (MAJOR UPDATE)**

Create 5 detailed cards (one per step):

```
┌─────────────────────────────────────────────────────┐
│ STEP 1: Intake Form                                 │
│ Free • 2-3 minutes                                  │
│                                                     │
│ Tell us about your business and automation needs.  │
│ [Get Started Button] → Tally Form                  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ STEP 2: 5-Day Free Diagnostic                      │
│ Free • No commitment                                │
│                                                     │
│ We analyze your workflows and identify              │
│ automation opportunities. Completely free.          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ STEP 3: 30-Minute Discovery Call                   │
│ Free • Review findings together                     │
│                                                     │
│ We present diagnostic results and discuss next      │
│ steps. You decide if you want to continue.         │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 🔶 DECISION POINT #1                                │
│                                                     │
│ Continue with 2-week deep audit?                    │
│ • YES → Proceed to paid audit ($300)               │
│ • NO → Part ways, zero obligation                  │
│                                                     │
│ "We're confident you'll see value in the           │
│ diagnostic. Choose what's right for your business."│
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ STEP 4: 2-Week Deep Audit                          │
│ $300 • 100% Satisfaction Guarantee                 │
│                                                     │
│ Comprehensive workflow analysis, automation         │
│ blueprint, and ROI projections.                     │
│                                                     │
│ 💯 Not satisfied? Keep deliverables + full refund  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 🔶 DECISION POINT #2                                │
│                                                     │
│ Start monthly retainer partnership?                 │
│ • YES → Implement systems ($2-5K/month custom)     │
│ • NO → Keep audit findings, part ways              │
│                                                     │
│ "Only partner with us if you're 100% confident     │
│ in the value we'll deliver."                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ STEP 5: Monthly Retainer Partnership               │
│ $2,000-5,000/month • Custom pricing                │
│                                                     │
│ We build, deploy, and maintain your automation     │
│ systems. Continuous optimization and expansion.     │
│                                                     │
│ "Most clients see positive ROI within 60 days"     │
└─────────────────────────────────────────────────────┘
```

**C. FAQ Section Updates**

Add these questions:

```
Q: Why do you offer two decision points?
A: We're confident in our value. The two exit points remove pressure 
   and ensure you're 100% comfortable at every stage.

Q: What if I'm not satisfied with the $300 audit?
A: You get a full refund, no questions asked. Plus, you keep all 
   the deliverables we created.

Q: What's included in the 2-week audit?
A: Workflow analysis, automation blueprint, ROI projections, 
   implementation roadmap, and 1-on-1 strategy session.

Q: How is the monthly retainer priced?
A: Custom pricing based on your needs, typically $2-5K/month. 
   We'll propose a plan after the audit based on the systems 
   you want to implement.

Q: Do you work with businesses outside North America?
A: We focus on North American construction and trade businesses 
   for now. Contact us to discuss your specific situation.
```

**D. Remove**
- All "Pay-What-You-Think-It's-Worth" language
- All "Toronto & GTA" references
- Gradient backgrounds

---

### 5.3 Solutions Page (NEW - Replaces Use Cases)

#### 🎯 Primary Goal
Showcase actual systems built with real ROI data. Scalable gallery that can grow from 5 → 50+ case studies.

#### 📋 Structure

**Path:** `/solutions`  
**File:** `src/pages/Solutions.tsx` (NEW)

**Layout:**

```
┌─────────────────────────────────────────────────────┐
│                   SOLUTIONS                         │
│  Systems We've Built That Save Time & Money        │
└─────────────────────────────────────────────────────┘

[Simple grid of solution cards - no filters/tags yet]

┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│ Solution Card │  │ Solution Card │  │ Solution Card │
│               │  │               │  │               │
│ [Video]       │  │ [Video]       │  │ [Video]       │
│ Email         │  │ Project       │  │ Invoice       │
│ Organizer     │  │ Tracker       │  │ Automation    │
│               │  │               │  │               │
│ ⏱ 12 hrs/week │  │ ⏱ 8 hrs/week  │  │ ⏱ 6 hrs/week  │
│ 💰 $2,400/mo  │  │ 💰 $1,600/mo  │  │ 💰 $1,200/mo  │
└───────────────┘  └───────────────┘  └───────────────┘

... (scroll for more)
```

#### 📄 Solution Card Component

**File:** `src/components/SolutionCard.tsx` (NEW)

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

**Card Content:**
1. Embedded YouTube Short (16:9 aspect ratio)
2. Title (e.g., "Email Organizer System")
3. Brief description (2-3 sentences max)
4. ROI Metrics (bold, prominent):
   - ⏱ Time Saved: "12 hrs/week"
   - 💰 Cost Savings: "$2,400/month"
5. Optional industry tag
6. "Learn More" button (expands to full case study - Phase 2)

#### 🗂️ Initial Content

Start with 5-7 case studies. User will add more every 2-3 days.

**Example 1:**
```
Title: Email Organizer for Construction Firms
Video: [YouTube Short showing system in action]
Description: Automatically sorts client emails, flags urgent 
requests, and creates tasks in project management system.
Time Saved: 12 hours/week
Cost Savings: $2,400/month
Industry: Construction
```

**No Filtering Yet:**
- Just simple scrollable grid
- Add filters/search after 10-20 case studies
- Keep it SIMPLE for now

---

### 5.4 About Page (`src/pages/About.tsx`)

#### 🎯 Primary Goal
Build personal credibility and trust.

#### ✏️ Required Changes

**A. Add Founder Section**

```
┌─────────────────────────────────────────────────────┐
│            [Professional Headshot]                  │
│                                                     │
│         Hi, I'm [Founder Name]                      │
│         Founder of FlowMatrix AI                    │
└─────────────────────────────────────────────────────┘

Paragraph 1: Why I Started FlowMatrix AI
"After seeing construction and trade businesses waste 
thousands of hours on repetitive tasks, I knew there 
had to be a better way..."

[Low priority - can add later if time permits]
```

**B. Credentials Section**

```
┌─────────────────────────────────────────────────────┐
│              Credentials & Experience               │
│                                                     │
│  ✅ n8n Creator                                     │
│  ✅ 30-50 automation systems built                  │
│  ✅ Colgate University                              │
│  ✅ Founder, Colgate AI Club                        │
│  ✅ Google Certifications (in progress)             │
└─────────────────────────────────────────────────────┘
```

**C. Remove/Update**
- ❌ Remove "decade of experience" (only 1 year)
- ❌ Remove generic team icons
- ✅ Replace Toronto/GTA → North America

**D. Add n8n Creator Badge**

```html
<div class="flex items-center justify-center">
  <img src="/badges/n8n-creator-badge.png" alt="n8n Creator" />
  <span>Official n8n Creator</span>
</div>
```

---

### 5.5 Newsletter Page (`src/pages/Newsletter.tsx`)

#### Changes
- Keep page as-is
- Remove from main navigation
- Add link in footer
- Add inline signup components throughout site

---

### 5.6 Contact Page (`src/pages/Contact.tsx`)

#### Changes
- Keep page as-is
- Remove from main navigation
- Add link in footer only
- Update form to trigger n8n automation (Phase 2)

---

## 6. Component Updates

### 6.1 Navigation Component (`src/components/Navigation.tsx`)

#### Current Structure
```tsx
<nav>
  <Link to="/">Home</Link>
  <Link to="/pricing">Pricing</Link>
  <Link to="/use-cases">Use Cases</Link>
  <Link to="/newsletter">Newsletter</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
  <Button>Get Your Free Automation Audit</Button>
</nav>
```

#### New Structure
```tsx
<nav>
  <Link to="/">Home</Link>
  <Link to="/pricing">Pricing</Link>
  <Link to="/solutions">Solutions</Link>
  <Link to="/about">About</Link>
  <Button onClick={openTallyForm}>Get Started</Button>
</nav>
```

#### Implementation Notes
- Remove `/use-cases` link
- Change to `/solutions`
- Remove `/newsletter` and `/contact` links
- Update CTA button text
- Add Tally form popup handler

```typescript
const openTallyForm = () => {
  // Tally.io embed code
  window.open('https://tally.so/r/wMBOXE', '_blank', 'width=600,height=800');
  // OR use Tally's embed widget if preferred
};
```

### 6.2 Footer Component (`src/components/Footer.tsx`)

#### Updates Needed

**Add to Footer:**
- Contact link
- Newsletter link
- Inline newsletter signup form

```tsx
<footer>
  <div class="footer-links">
    <Link to="/about">About</Link>
    <Link to="/pricing">Pricing</Link>
    <Link to="/solutions">Solutions</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/newsletter">Newsletter</Link>
    <Link to="/terms">Terms</Link>
    <Link to="/privacy">Privacy</Link>
  </div>
  
  <div class="newsletter-signup">
    <h4>Get Weekly AI Automation Insights</h4>
    <NewsletterSignupInline />
  </div>
</footer>
```

### 6.3 Button Component Standardization

**All CTA buttons should:**
- Use single accent color (blue OR green)
- Say "Get Started" or similar optimized text
- Link to Tally form
- NO gradients

```tsx
// BEFORE
<Button className="bg-gradient-to-r from-blue-600 to-purple-600">
  Get Your Free Automation Audit
</Button>

// AFTER
<Button className="bg-accent hover:bg-accent-hover">
  Get Started
</Button>
```

### 6.4 New Components to Create

#### `src/components/SolutionCard.tsx`
- Card for Solutions gallery
- Shows video, title, description, ROI metrics
- Responsive design

#### `src/components/NewsletterSignupInline.tsx`
- Subtle inline signup form
- Email input + submit button
- Can be placed anywhere on site

#### `src/components/DecisionPointCallout.tsx`
- Visual component for decision points
- Used on Pricing page
- Emphasizes low-friction approach

```tsx
<DecisionPointCallout 
  number={1}
  title="Continue with audit?"
  description="We're confident you'll see value in the diagnostic."
  yesAction="Proceed to $300 audit"
  noAction="Part ways, zero obligation"
/>
```

---

## 7. Content Guidelines

### 7.1 Global Find & Replace

Run these replacements across ALL files:

| Find | Replace |
|------|---------|
| `Toronto` | `North America` |
| `GTA` | `North America` |
| `Greater Toronto Area` | `North America` |
| `Get Your Free Automation Audit` | `Get Started` |
| `Book Free Diagnostic` | `Get Started` |
| `Pay-what-you-think` | `$300 with 100% satisfaction guarantee` |
| `Pay what you think it's worth` | `$300 with 100% satisfaction guarantee` |

### 7.2 Tone & Voice

**Key Messages to Emphasize:**
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

### 7.3 SEO Updates

**Meta Tags to Update:**

```html
<!-- BEFORE -->
<title>FlowMatrix AI | Toronto Construction Automation</title>
<meta name="description" content="AI automation for Toronto & GTA trades">

<!-- AFTER -->
<title>FlowMatrix AI | Construction Automation for North America</title>
<meta name="description" content="AI automation for North American construction and trade businesses. $300 audit with 100% satisfaction guarantee.">
```

**Update in Files:**
- `index.html`
- `src/pages/Index.tsx` (Helmet component)
- `src/pages/Pricing.tsx` (Helmet component)
- `src/pages/About.tsx` (Helmet component)

---

## 8. Implementation Checklist

### Phase 1: Critical (Pre-Launch) - Estimated 16-24 hours

#### Design System (4 hours)
- [ ] Update `src/index.css` - remove gradients, simplify colors
- [ ] Update `tailwind.config.ts` - remove complex color system
- [ ] Choose accent color (dark blue OR dark green)
- [ ] Test color changes across all pages
- [ ] Remove all gradient classes from components

#### Navigation & Routing (2 hours)
- [ ] Update `src/components/Navigation.tsx` - new menu structure
- [ ] Update `src/App.tsx` - change routes
- [ ] Update `src/components/Footer.tsx` - add Contact, Newsletter
- [ ] Add Tally form integration to CTA buttons
- [ ] Test navigation flow

#### Homepage Updates (4 hours)
- [ ] Replace IStock watermarked images
- [ ] Update hero headline (Toronto → North America)
- [ ] Add 5-step process section with decision points
- [ ] Remove "Featured Systems" section
- [ ] Update testimonials with ROI metrics
- [ ] Add credibility section (n8n badge, Colgate, etc.)
- [ ] Add inline newsletter signup
- [ ] Update all CTAs to "Get Started"

#### Pricing Page Rewrite (3 hours)
- [ ] Create 5 detailed step cards
- [ ] Add 2 decision point callouts
- [ ] Update FAQ section
- [ ] Change audit price to $300
- [ ] Emphasize 100% satisfaction guarantee
- [ ] Update all copy (Toronto → North America)

#### Solutions Page Creation (4 hours)
- [ ] Delete 8 use case detail pages
- [ ] Create `src/pages/Solutions.tsx`
- [ ] Create `src/components/SolutionCard.tsx`
- [ ] Build simple gallery layout
- [ ] Add 5-7 initial case studies (user will provide)
- [ ] Test responsive design

#### About Page Updates (1 hour)
- [ ] Add professional headshot
- [ ] Add credentials section (n8n, Colgate, systems built)
- [ ] Remove "decade of experience"
- [ ] Update Toronto → North America

#### Technical Cleanup (2 hours)
- [ ] Remove CONVOCORE agent code from `index.html`
- [ ] Update `public/sitemap.xml`
- [ ] Global find & replace (Toronto, GTA, CTA text)
- [ ] Remove unused CSS/components
- [ ] Test all page routes
- [ ] Fix any TypeScript errors
- [ ] Test mobile responsiveness

### Phase 2: Enhancement (Post-Launch) - Ongoing

#### n8n Automation Setup
- [ ] Build n8n workflow: Tally form → Email → Calendly link
- [ ] Test automation end-to-end
- [ ] Add error handling

#### Content Expansion
- [ ] Add 1 case study every 2-3 days to Solutions page
- [ ] Create Results/Blog section
- [ ] Write client success story posts
- [ ] Link blog posts to Solutions

#### Credibility Enhancements
- [ ] Add more testimonials with logos
- [ ] Join industry associations (paid memberships)
- [ ] Add association logos to homepage
- [ ] Get client permission for logo usage

#### Optimization
- [ ] A/B test CTA button text
- [ ] Add analytics tracking
- [ ] Monitor conversion rates
- [ ] Optimize page load speeds

---

## 9. Priority Phases

### 🔴 Phase 1: Pre-Launch Must-Haves (Do First)

**Goal:** Website ready for client outreach

**Deliverables:**
1. ✅ Clean white/black design with one accent color
2. ✅ Clear 5-step process with 2 decision points
3. ✅ Tally form integration
4. ✅ Solutions page with 5-7 case studies
5. ✅ Updated pricing ($300 audit)
6. ✅ North America positioning
7. ✅ About page credibility elements
8. ✅ All Toronto references removed

**Estimated Time:** 16-24 hours

**Launch Criteria:**
- No broken links
- Mobile responsive
- Fast page loads (<3 seconds)
- Forms work correctly
- No console errors

### 🟡 Phase 2: Post-Launch Enhancements (After 2-3 Clients)

**Goal:** Scale and optimize based on real feedback

**Deliverables:**
1. n8n automation (form → email → diagnostic)
2. Results/blog section
3. More case studies (10+ total)
4. Advanced testimonials
5. Industry association logos
6. Newsletter optimization
7. CONVOCORE agent (revisit)

### 🟢 Phase 3: Growth & Scale (After $5K+ MRR)

**Goal:** Add complexity as needed

**Deliverables:**
1. Multi-tier retainer packages
2. Case study filtering/search
3. Advanced analytics
4. Client portal (separate project)
5. Employee management system

---

## 10. Files Reference

### Files to DELETE
```
src/pages/use-cases/Leads.tsx
src/pages/use-cases/ContentCreation.tsx
src/pages/use-cases/SocialMedia.tsx
src/pages/use-cases/Scheduling.tsx
src/pages/use-cases/ClientManagement.tsx
src/pages/use-cases/Documentation.tsx
src/pages/use-cases/Invoicing.tsx
src/pages/use-cases/Inventory.tsx
```

### Files to CREATE
```
src/pages/Solutions.tsx
src/components/SolutionCard.tsx
src/components/NewsletterSignupInline.tsx
src/components/DecisionPointCallout.tsx
```

### Files to MODIFY
```
src/index.css (major changes - color system)
tailwind.config.ts (simplify colors)
src/App.tsx (routing changes)
src/components/Navigation.tsx (menu structure)
src/components/Footer.tsx (add links)
src/pages/Index.tsx (major updates)
src/pages/Pricing.tsx (complete rewrite)
src/pages/About.tsx (credibility updates)
src/pages/UseCases.tsx (delete or repurpose)
index.html (remove CONVOCORE agent)
public/sitemap.xml (update routes)
```

### Files to KEEP AS-IS
```
src/pages/Newsletter.tsx
src/pages/Contact.tsx
src/pages/Terms.tsx
src/pages/Privacy.tsx
All src/components/ui/* (shadcn components)
```

---

## 11. Technical Notes for Claude Code

### 🛠️ Tech Stack
- **Framework:** Vite + React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Form Handling:** React Hook Form + Zod

### 📁 Project Structure
```
src/
├── components/
│   ├── ui/              # shadcn components (don't edit)
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── SolutionCard.tsx        # NEW
│   └── NewsletterSignupInline.tsx  # NEW
├── pages/
│   ├── Index.tsx
│   ├── Pricing.tsx
│   ├── Solutions.tsx           # NEW
│   ├── About.tsx
│   └── [other pages]
├── index.css
└── App.tsx
```

### 🎨 Styling Conventions
- Use Tailwind utility classes
- Follow existing component patterns
- Maintain responsive design (mobile-first)
- Use semantic HTML

### 🧪 Testing Checklist
Before considering any page "done":
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1440px width)
- [ ] Check all links work
- [ ] Verify forms submit correctly
- [ ] Check for console errors
- [ ] Validate TypeScript compiles
- [ ] Test with slow 3G network
- [ ] **CRITICAL:** Run `npm run build` and test with `npm run preview` before deploying

### 🚀 Build & Deployment

**Deployment Platform:** Vercel

**CRITICAL BUILD RULE (Nov 1, 2025):**
⚠️ **NEVER manually split React into a separate chunk in `vite.config.ts`.** This causes initialization race conditions and blank pages in production.

**❌ BAD:**
```typescript
manualChunks: (id) => {
  if (id.includes('react')) return 'react-core';  // DON'T DO THIS
  if (id.includes('node_modules')) return 'vendor';  // DON'T DO THIS
}
```

**✅ GOOD:**
```typescript
manualChunks: (id) => {
  // Only split large, independent libraries
  if (id.includes('lucide-react')) return 'lucide-icons';
  if (id.includes('@supabase')) return 'supabase';
  // Let Vite handle React automatically
}
```

**Required Configuration Files:**
1. `vercel.json` - SPA routing support (rewrite all routes to index.html)
2. `vite.config.ts` - Must include `base: '/'` for proper asset paths

**Incident Summary (Nov 1, 2025):**
Deployment showed blank page with error: `Cannot access 'x' before initialization`. Root cause: Manual React chunk splitting created race condition where vendor chunk (containing Sonner toast) loaded before React was initialized. Fixed by removing manual React splitting and letting Vite handle it automatically.

**See CLAUDE.md "Vite Configuration & Build Guidelines" section for full details and debugging steps.**

### 📞 Tally Form Integration

**Form URL:** `https://tally.so/r/wMBOXE`

**Implementation Options:**

**Option A: Popup Modal**
```typescript
const openTallyForm = () => {
  window.Tally?.openPopup('wMBOXE', {
    layout: 'modal',
    width: 600,
    autoClose: 3000,
  });
};
```

**Option B: New Tab**
```typescript
const openTallyForm = () => {
  window.open('https://tally.so/r/wMBOXE', '_blank');
};
```

**Option C: Embed (for dedicated page)**
```html
<iframe 
  src="https://tally.so/embed/wMBOXE?alignLeft=1&hideTitle=1&transparentBackground=1"
  width="100%" 
  height="600" 
  frameborder="0" 
  marginheight="0" 
  marginwidth="0"
  title="FlowMatrix AI Intake Form"
></iframe>
```

**Choose Option A (Popup Modal)** for best UX - keeps users on site.

---

## 12. Success Metrics (Post-Launch)

### Key Performance Indicators

| Metric | Target | Measurement |
|--------|--------|-------------|
| Form Completion Rate | >15% | Tally analytics |
| Discovery Call Bookings | >60% (of diagnostics) | Manual tracking |
| Audit Conversion | >40% (of discovery calls) | Manual tracking |
| Retainer Sign-ups | >50% (of audits) | Manual tracking |
| Average Time on Site | >2 minutes | Google Analytics |
| Bounce Rate | <50% | Google Analytics |
| Page Load Speed | <3 seconds | Lighthouse |

### Feedback Loop

**Week 1-2:**
- Monitor form submissions
- Track user feedback
- Identify friction points

**Week 3-4:**
- Optimize based on data
- A/B test CTA variations
- Add testimonials from first clients

**Month 2+:**
- Add case studies regularly
- Expand Solutions gallery
- Build Results/blog section

---

## 13. Final Checklist Before Launch

### Pre-Launch Validation

- [ ] All pages load without errors
- [ ] No broken links (internal or external)
- [ ] Forms submit successfully
- [ ] Tally integration works
- [ ] Mobile responsive (test on real device)
- [ ] Fast load times (<3 seconds)
- [ ] No console errors in browser
- [ ] Spelling/grammar checked
- [ ] Toronto → North America (all instances)
- [ ] No watermarked images
- [ ] All CTAs say "Get Started"
- [ ] Pricing shows $300 audit
- [ ] Decision points clearly visible
- [ ] n8n badge present
- [ ] Contact/Newsletter in footer only
- [ ] Sitemap updated
- [ ] Meta tags updated
- [ ] Favicon present

### Post-Launch Monitoring

- [ ] Google Analytics installed
- [ ] Track form submissions
- [ ] Monitor page performance
- [ ] Check for 404 errors
- [ ] Test on multiple browsers
- [ ] Gather user feedback

---

## 14. Questions for Founder

**Accent Color Decision:**
- [ ] Dark Blue (#1e40af) 
- [ ] Dark Green (#065f46)

**Please choose one and confirm.**

---

## 15. Adding New Solutions: Complete Template Guide

**Last Updated:** November 2, 2025

This section provides step-by-step instructions for adding new solution cards and detail pages to the Solutions gallery. The system uses a two-tier architecture that makes adding new solutions simple and consistent.

### 15.1 Two-Tier Solution Architecture

**Tier 1: Solution Card** (`/solutions`)
- Appears in the grid on the Solutions page
- Shows video, title, brief description, and ROI metrics
- Links to detailed solution page

**Tier 2: Solution Detail Page** (`/solutions/:slug`)
- Full solution documentation
- Comprehensive phases, ROI details, workflow diagrams
- CTA to start automation diagnostic

### 15.2 Solution Card Template

**Location:** `src/pages/Solutions.tsx` - Add to the `casStudies` array

**Required Fields:**
```typescript
{
  id: "unique-slug",           // URL slug (lowercase, hyphens only)
  title: "Solution Name",      // Display title
  description: "Brief 2-3 sentence overview that explains what the solution does and the core problem it solves.",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",  // YouTube embed URL (can be null)
  excalidrawUrl: "https://link.excalidraw.com/readonly/DIAGRAM_ID",  // Excalidraw diagram URL (can be null)
  timeSaved: "X hours/week",   // Time savings metric
  costSavings: "Impact description",  // Cost/business impact
  industry: "Category Name",   // Industry or category tag
}
```

**Visual Fallback Behavior:**
The solution card will display content in this priority order:
1. **Video** - If `videoUrl` is provided, show YouTube video embed
2. **Excalidraw Diagram** - If no video but `excalidrawUrl` is provided, show workflow diagram
3. **"Preview coming soon"** - If neither is provided, show placeholder text

**Example with Video:**
```typescript
{
  id: "project-status-tracker",
  title: "Automated Project Status Tracker",
  description: "AI-powered system that pulls data from multiple project management tools, generates comprehensive weekly status reports, and automatically distributes updates to stakeholders. Eliminates manual reporting work and keeps everyone aligned.",
  videoUrl: "https://www.youtube.com/embed/ABC123XYZ",
  excalidrawUrl: "https://link.excalidraw.com/readonly/DIAGRAM_ID",  // Optional, can have both
  timeSaved: "8-12 hours/week",
  costSavings: "Improves team coordination",
  industry: "Construction",
}
```

**Example without Video (uses Excalidraw):**
```typescript
{
  id: "permit-coordinator",
  title: "Digital Permit Coordinator",
  description: "AI-powered system that automates permit applications and inspection scheduling.",
  videoUrl: null,  // No video yet
  excalidrawUrl: "https://link.excalidraw.com/readonly/DIAGRAM_ID",  // Shows diagram instead
  timeSaved: "15-20 hours/project",
  costSavings: "Reduces delays by 70%",
  industry: "Construction",
}
```

### 15.3 Solution Detail Page Template

**Location:** `src/pages/SolutionDetail.tsx` - Add to the content objects at the top of the file

**Complete Template Structure:**

```typescript
const yourSolutionContent = {
  slug: "unique-slug",  // Must match the id from Solutions.tsx
  title: "Solution Name",
  category: "Category/Industry Name",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  excalidrawUrl: "https://link.excalidraw.com/readonly/DIAGRAM_ID", // OR null if no diagram
  roiMetrics: {
    timeSaved: "X hours/week saved",
    costSavings: "Impact description (e.g., '40% faster payment collection')"
  },
  overview: "Comprehensive 3-5 sentence overview explaining the solution, the problem it solves, who it's for, and the high-level approach. This sets the context for the entire detail page.",
  phases: [
    {
      title: "Phase 1: Descriptive Phase Name",
      trigger: "Explain what activates this phase (e.g., 'Triggered daily at 8 AM' or 'Activated when project status changes')",
      capabilities: [
        "First Key Capability: Description of what this does and how it works.",
        "Second Key Capability: Description with technical details.",
        "Third Key Capability: Description including benefits.",
        "Fourth Key Capability (optional): Additional functionality."
      ]
    },
    {
      title: "Phase 2: Second Phase Name",
      trigger: "What activates this phase",
      capabilities: [
        "First capability for phase 2",
        "Second capability for phase 2",
        "Third capability for phase 2"
      ]
    },
    {
      title: "Phase 3: Third Phase Name",
      trigger: "What activates this phase",
      capabilities: [
        "First capability for phase 3",
        "Second capability for phase 3",
        "Third capability for phase 3"
      ]
    }
  ],
  roiDetails: [
    "First ROI benefit: Specific time/cost savings with context",
    "Second ROI benefit: Risk reduction or quality improvement",
    "Third ROI benefit: Efficiency or relationship improvement",
    "Fourth ROI benefit: Strategic or scalability benefit",
    "Fifth ROI benefit: Long-term value or competitive advantage"
  ],
  conclusion: "1-2 sentence conclusion about scalability, customization options, or future extensibility of the solution."
};
```

### 15.4 Step-by-Step Implementation Guide

**Step 1: Prepare Your Content**

Before coding, gather:
- [ ] YouTube video (published and embed-ready) - **OR** -
- [ ] Excalidraw workflow diagram URL (if no video available yet)
- [ ] Solution name and category
- [ ] Brief description (2-3 sentences)
- [ ] ROI metrics (time saved, cost impact)
- [ ] Comprehensive overview (3-5 sentences)
- [ ] 3 implementation phases with capabilities
- [ ] 5+ ROI detail points
- [ ] Conclusion statement

**Note:** You can launch a solution with just an Excalidraw diagram if the demo video isn't ready yet. The diagram will display on the card until you add the video.

**Step 2: Add Solution Card**

1. Open `src/pages/Solutions.tsx`
2. Find the `casStudies` array (around line 47)
3. Add your new solution object at the end of the array:

**With Video:**
```typescript
const casStudies = [
  // ... existing solutions ...
  {
    id: "your-solution-slug",
    title: "Your Solution Name",
    description: "Your 2-3 sentence description.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    excalidrawUrl: "https://link.excalidraw.com/readonly/DIAGRAM_ID",  // Optional
    timeSaved: "X hours/week",
    costSavings: "Impact description",
    industry: "Category",
  },
];
```

**Without Video (using Excalidraw):**
```typescript
const casStudies = [
  // ... existing solutions ...
  {
    id: "your-solution-slug",
    title: "Your Solution Name",
    description: "Your 2-3 sentence description.",
    videoUrl: null,  // No video yet - diagram will show instead
    excalidrawUrl: "https://link.excalidraw.com/readonly/DIAGRAM_ID",
    timeSaved: "X hours/week",
    costSavings: "Impact description",
    industry: "Category",
  },
];
```

4. Save the file

**Step 3: Add Detail Page Content**

1. Open `src/pages/SolutionDetail.tsx`
2. Add your content object at the top of the file (after existing content objects, around line 168):

```typescript
// Your Solution Content
const yourSolutionContent = {
  slug: "your-solution-slug",  // MUST match the id from Step 2
  title: "Your Solution Name",
  // ... rest of template from Section 15.3 ...
};
```

3. Update the slug routing logic (around line 170-180) to include your new solution:

```typescript
let content;
if (slug === "email-organizer") {
  content = emailOrganizerContent;
} else if (slug === "code-compass") {
  content = codeCompassContent;
} else if (slug === "invoice-lifecycle-manager") {
  content = invoiceLifecycleManagerContent;
} else if (slug === "your-solution-slug") {
  content = yourSolutionContent;  // Add this
}
```

4. Save the file

**Step 4: Test Your Implementation**

1. Start dev server: `npm run dev`
2. Navigate to `http://localhost:8080/solutions`
3. Verify your card appears in the grid
4. Click "Learn More" on your card
5. Verify detail page loads at `/solutions/your-solution-slug`
6. Check all sections render correctly:
   - Video embed works
   - Workflow diagram displays (if provided)
   - All phases show correctly
   - ROI details list properly
7. Test on mobile, tablet, and desktop sizes
8. Build for production: `npm run build`
9. Preview build: `npm run preview`
10. Test again in production mode

**Step 5: Verify SEO & Metadata**

The Helmet component automatically sets:
- Page title: `{title} | FlowMatrix AI - Detailed Solution`
- Meta description: Uses your `overview` text

No additional SEO work needed!

### 15.5 Best Practices

**Video & Diagram Guidelines:**
- **Videos:** Use YouTube embed URLs, not watch URLs
  - Format: `https://www.youtube.com/embed/VIDEO_ID`
  - Test video plays before publishing
  - Use unlisted or public videos (not private)
  - Can be set to `null` if not available yet
- **Excalidraw Diagrams:** Use as fallback when no video available
  - Create diagram at excalidraw.com
  - Generate readonly shareable link
  - Format: `https://link.excalidraw.com/readonly/DIAGRAM_ID`
  - Displays on card when `videoUrl` is `null`
  - Also appears on detail page if provided
- **Fallback Priority:** Video → Excalidraw → "Preview coming soon"

**Content Quality:**
- Keep descriptions concise but informative
- Use specific metrics in ROI data (not vague promises)
- Structure phases logically (collection → analysis → action)
- Include 3-5 capabilities per phase
- Write for non-technical audiences

**Excalidraw Diagrams:**
- Create diagram at excalidraw.com
- Use "Live collaboration" → "Create shareable link" → "Readonly"
- Set `excalidrawUrl: null` if no diagram available yet
- Diagram auto-hides if null (conditional rendering)

**Slug Naming:**
- Use lowercase letters, numbers, hyphens only
- Keep short but descriptive
- Examples: `email-organizer`, `invoice-manager`, `lead-qualifier`
- Must be unique across all solutions

**CRITICAL: SolutionCard Height Consistency:**
- **ALL solution cards MUST be the same height in the grid**
- The `SolutionCard` component uses `h-full flex flex-col` on the main container
- Content section uses `flex-1 flex flex-col` to fill available space
- "Learn More" link uses `mt-auto` to push it to the bottom
- This ensures cards with different description lengths maintain equal heights
- **NEVER remove these classes** - they are critical for consistent grid layout
- Reference implementation: `src/components/SolutionCard.tsx` (Nov 3, 2025)

**Industry/Category Tags:**
- Use clear, professional categories
- Examples: "Construction", "Financial Automation", "Regulatory Compliance"
- Avoid overly technical jargon
- Keep consistent with existing solutions

### 15.6 Troubleshooting

**Card not appearing on Solutions page:**
- Check for syntax errors in `casStudies` array
- Verify comma after previous solution object
- Ensure all required fields are present
- Run `npm run dev` and check console for errors

**Detail page shows "Coming Soon":**
- Verify `slug` in content object matches `id` in card
- Check that you added the routing logic in SolutionDetail.tsx
- Ensure content object is defined before the component
- Check for typos in slug matching

**Video not loading:**
- Verify you're using `/embed/` URL format, not `/watch?v=`
- Check video is public or unlisted (not private)
- Test video URL directly in browser
- Verify no typos in VIDEO_ID

**Workflow diagram not showing:**
- If `excalidrawUrl: null`, diagram section won't render (this is correct)
- Verify readonly link format: `https://link.excalidraw.com/readonly/...`
- Test diagram URL opens in browser
- Check for CORS issues in browser console

### 15.7 Adding Case Studies vs Solutions

**Case Studies** (like UBL Group):
- Client-specific implementations
- Use `ClientSpotlightPreview` component
- Link to dedicated case study pages at `/solutions/client-name`
- Highlight specific client results and testimonials

**Solutions** (like Email Organizer):
- Generic, reusable solutions
- Use `SolutionCard` component
- Link to solution detail pages at `/solutions/solution-slug`
- Focus on capabilities and general ROI

Both can coexist on the Solutions page. Case studies show social proof, while solutions showcase technical capabilities.

### 15.8 Quick Reference Checklist

When adding a new solution, complete these steps:

- [ ] Gather all content (video, description, metrics, phases, ROI)
- [ ] Create unique slug (lowercase, hyphens)
- [ ] Add solution object to `casStudies` array in Solutions.tsx
- [ ] Add content object to SolutionDetail.tsx
- [ ] Update routing logic in SolutionDetail.tsx
- [ ] Test card appears in grid
- [ ] **CRITICAL: Verify all cards in grid have equal height** (SolutionCard uses h-full flex flex-col)
- [ ] Test detail page loads
- [ ] Verify video plays
- [ ] Check workflow diagram (if applicable)
- [ ] Test all phases render correctly
- [ ] Test ROI section displays properly
- [ ] Test on mobile, tablet, desktop
- [ ] Run production build and test
- [ ] Verify no console errors
- [ ] Check SEO metadata in browser inspector

---

## 16. Summary

This PRD provides a complete blueprint for rebuilding the FlowMatrix AI website with:

✅ **Clear business model** - 5 steps, 2 decision points, transparent pricing
✅ **Simplified design** - White background, minimal color, professional
✅ **Scalable architecture** - Easy to add case studies over time
✅ **Credibility focus** - Real metrics, founder story, n8n badge
✅ **Low-friction UX** - Tally form integration, clear CTAs
✅ **North America positioning** - Remove geographic restrictions

**Estimated Implementation:** 16-24 hours for Phase 1 (pre-launch)

**Ready to build.** 🚀

---

*End of PRD - Version 2.0*
*Last Updated: November 2, 2025 - Added Section 15: Solution Template Guide*