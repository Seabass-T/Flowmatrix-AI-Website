# FlowMatrix AI Website Enhancement PRD v1.0

**Target:** 69/100 → 100/100 | **Duration:** 52-62 hours (3 phases) | **Updated:** Jan 19, 2025

---

## 1. Executive Summary

**Current State:** Generic website, no ICP segmentation, no social proof = 69/100
**Target State:** ICP-specific landing pages + real metrics + conversion optimization = 100/100

### Real Client Metrics (UBL Group)
- **Email Intelligence:** 150+ hrs saved, $3,500+ ROI (3 months)
- **Developer Outreach:** 20 hrs saved, $600+ ROI (2 months)
- **ERP (In Development):** Projected $10K-$20K+/month ROI

### Success Criteria
- Homepage conversion: **5%+** (up from 1-2%)
- ICP landing pages: **8%+** conversion
- Calendly bookings: **200%+** increase
- Bounce rate: **<50%**

```
┌─────────────────────────────────────────────────────────────┐
│                    CONVERSION FUNNEL                        │
├─────────────────────────────────────────────────────────────┤
│  Homepage Visit → ICP Selection → Pain Point → CTA         │
│     (1000)          (400)           (200)       (50)        │
│                                                             │
│  Current:  1-2% conversion                                  │
│  Target:   5% homepage, 8% landing pages                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Tech Stack (Current - No Changes Required)

```
┌────────────────────────────────────────────────────────┐
│  Frontend Stack                                        │
├────────────────────────────────────────────────────────┤
│  React 18 + TypeScript                                 │
│  Vite with SWC                                         │
│  Tailwind CSS + shadcn/ui                              │
│  React Router v6                                       │
│  TanStack Query (React Query)                          │
│  React Hook Form + Zod                                 │
├────────────────────────────────────────────────────────┤
│  Backend & Services                                    │
├────────────────────────────────────────────────────────┤
│  Supabase (Auth + Database + Edge Functions)           │
│  Vercel (Deployment)                                   │
│  GitHub (Version Control)                              │
├────────────────────────────────────────────────────────┤
│  New Integrations                                      │
├────────────────────────────────────────────────────────┤
│  GA4 (Analytics)                                       │
│  Hotjar (Heatmaps + Recordings)                        │
│  Tally (Forms - Already Set Up)                        │
│  CONVOCORE (Chat Widget - Optimize)                    │
└────────────────────────────────────────────────────────┘
```

---

## 3. User Personas (ICPs)

### ICP #1: Construction Contractors (GTA)

```
┌─────────────────────────────────────────────────────────┐
│  PERSONA: Sarah (Operations Manager)                   │
├─────────────────────────────────────────────────────────┤
│  Age:           35-45                                   │
│  Revenue:       $1M-$10M                                │
│  Employees:     10-50                                   │
│  Tools:         Procore, QuickBooks                     │
├─────────────────────────────────────────────────────────┤
│  PAIN POINTS                                            │
│  ▸ Job cost overruns due to poor tracking              │
│  ▸ Scheduling chaos causing crew downtime               │
│  ▸ Invoice delays slowing payment cycles                │
├─────────────────────────────────────────────────────────┤
│  GOALS                                                  │
│  ✓ 30%+ admin time reduction                           │
│  ✓ Faster invoicing and payments                       │
│  ✓ Real-time project visibility                        │
└─────────────────────────────────────────────────────────┘
```

### ICP #2: Home Service Providers (GTA)

```
┌─────────────────────────────────────────────────────────┐
│  PERSONA: Mike (Owner/Service Manager)                 │
├─────────────────────────────────────────────────────────┤
│  Age:           40-55                                   │
│  Revenue:       $500K-$5M                               │
│  Employees:     5-25 technicians                        │
│  Tools:         ServiceTitan or pen/paper               │
├─────────────────────────────────────────────────────────┤
│  PAIN POINTS                                            │
│  ▸ Dispatch lag wasting 2+ hours daily                 │
│  ▸ Technician idle time between jobs                   │
│  ▸ Slow customer response losing jobs                  │
├─────────────────────────────────────────────────────────┤
│  GOALS                                                  │
│  ✓ More jobs per tech per day                          │
│  ✓ Faster lead response time                           │
│  ✓ Automated service renewals                          │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Feature Specifications (10 Core Features)

### 4.1 Homepage Hero with ICP Toggle ⏱️ 4 hours

**Files:**
- `/src/components/homepage/ICPToggle.tsx`
- `/src/components/homepage/HeroWithICP.tsx`
- Update: `/src/pages/Index.tsx`

**Construction Variant:**
```
Headline: "Stop Job Cost Overruns & Scheduling Chaos"
Subheadline: "Free 5-Day Diagnostic → 2-Week Pilot → Month-to-Month Partnership"
CTA Primary: "Book Free Diagnostic"
CTA Secondary: "See How It Works"
```

**Home Service Variant:**
```
Headline: "End Dispatch Lag & Technician Idle Time"
Subheadline: "We automate your service workflows so techs book more jobs per day"
CTA Primary: "Book Free Diagnostic"
CTA Secondary: "See Case Study"
```

**Component Structure:**
```tsx
<ICPToggle selectedICP={icp} onToggle={setICP} />
<HeroWithICP icp={icp} />
```

---

### 4.2 ICP Pain Point Sections ⏱️ 6 hours

**Files:**
- `/src/components/homepage/ICPPainPointSection.tsx`
- Update: `/src/pages/Index.tsx`

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  CONSTRUCTION PAIN POINTS (bg-blue-50)                  │
├─────────────────────────────────────────────────────────┤
│  [💰] Job Cost Overruns                                 │
│      Projects going over budget...                      │
│                                                         │
│  [📅] Scheduling Chaos                                  │
│      Manual scheduling leads to downtime...             │
│                                                         │
│  [📄] Invoice Delays                                    │
│      Slow payment cycles...                             │
│                                                         │
│      [See Construction Solutions →]                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  HOME SERVICE PAIN POINTS (bg-green-50)                 │
├─────────────────────────────────────────────────────────┤
│  [⏰] Dispatch Lag                                      │
│      Wasting 2+ hours daily...                          │
│                                                         │
│  [👥] Technician Idle Time                             │
│      Techs idle between jobs...                         │
│                                                         │
│  [📞] Customer Wait Times                               │
│      Slow response = lost jobs...                       │
│                                                         │
│      [See Home Service Solutions →]                     │
└─────────────────────────────────────────────────────────┘
```

---

### 4.3 Proof Cards with Real Metrics ⏱️ 4 hours

**Files:**
- `/src/components/homepage/ProofCard.tsx`
- `/src/components/homepage/ProofSection.tsx`
- Update: `/src/pages/Index.tsx`

**Card Design:**
```
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│  📧                  │  │  📈                  │  │  💾 [Coming Soon]    │
│                      │  │                      │  │                      │
│  150+ Hours          │  │  $3,500+             │  │  $10K-$20K+          │
│  Saved in 3 Months   │  │  ROI Achieved        │  │  Projected Monthly   │
│                      │  │                      │  │  ROI                 │
│  [Gradient Blue]     │  │  [Gradient Green]    │  │  [Gradient Purple]   │
└──────────────────────┘  └──────────────────────┘  └──────────────────────┘
```

**Styling:**
- Gradient backgrounds
- `p-8, rounded-2xl, shadow-xl`
- `hover:scale-105` animation
- Lucide icons: `Mail`, `TrendingUp`, `Database`

---

### 4.4 ICP Landing Pages (/construction, /home-service) ⏱️ 8 hours (4 per page)

**Files:**
- `/src/pages/Construction.tsx` (NEW)
- `/src/pages/HomeService.tsx` (NEW)
- `/src/components/landing-pages/LandingPageHero.tsx` (NEW - Reusable)
- `/src/components/landing-pages/PainPointCards.tsx` (NEW - Reusable)
- `/src/components/landing-pages/OfferFunnel.tsx` (NEW - Reusable)
- Update: `/src/App.tsx` (Add routes ABOVE `<Route path="*">`)

**Page Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  1. Hero (No Navigation)                                │
│     ▸ ICP-specific headline + subheadline               │
│     ▸ Primary CTA: "Book Free Diagnostic"               │
├─────────────────────────────────────────────────────────┤
│  2. Pain Point Cards (3 cards)                          │
│     ▸ Icon + Title + Description                        │
├─────────────────────────────────────────────────────────┤
│  3. Solutions Section                                   │
│     ▸ How we solve each pain point                      │
├─────────────────────────────────────────────────────────┤
│  4. UBL Case Study                                      │
│     ▸ Real metrics + screenshots                        │
├─────────────────────────────────────────────────────────┤
│  5. Offer Funnel                                        │
│     ▸ Free Consultation → Audit → Pilot → Partnership  │
├─────────────────────────────────────────────────────────┤
│  6. Pricing (Transparent)                               │
│     ▸ Pay-What-You-Think → Pilot → Partnership          │
├─────────────────────────────────────────────────────────┤
│  7. Final CTA                                           │
│     ▸ "Book Free Diagnostic" (sticky or large button)   │
└─────────────────────────────────────────────────────────┘
```

**Routes to Add in App.tsx:**
```tsx
<Route path="/construction" element={<Construction />} />
<Route path="/home-service" element={<HomeService />} />
// IMPORTANT: Add ABOVE the catch-all route
<Route path="*" element={<NotFound />} />
```

---

### 4.5 Hero Visual/Images ⏱️ 3 hours

**Files:**
- Update: `/src/components/homepage/HeroWithICP.tsx`
- Assets: `/public/images/hero-construction.webp`, `/public/images/hero-home-service.webp`

**Image Requirements:**
- **Source:** Unsplash
  - Construction: "construction worker tablet" or "construction site technology"
  - Home Service: "HVAC technician mobile" or "plumber smartphone"
- **Format:** WebP
- **Size:** <200KB each
- **Optimization:** Lazy load, responsive srcset
- **Alt Text:** Descriptive for SEO

**Implementation:**
```tsx
<img
  src="/images/hero-construction.webp"
  alt="Construction worker using tablet for job management"
  loading="lazy"
  className="rounded-2xl shadow-2xl"
/>
```

---

### 4.6 Sticky Navigation + Smooth Scroll ⏱️ 2 hours

**Files:**
- Update: `/src/components/Navigation.tsx`
- Update: `/src/index.css`

**Implementation:**
```tsx
// Navigation.tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Add className
className={`sticky top-0 z-50 transition-all ${
  scrolled ? 'bg-white shadow-md' : 'bg-transparent'
}`}
```

**CSS:**
```css
/* index.css */
html {
  scroll-behavior: smooth;
}
```

---

### 4.7 Trust Badges & Guarantee ⏱️ 3 hours

**Files:**
- `/src/components/homepage/FounderBadge.tsx` (NEW)
- `/src/components/shared/GuaranteeBadge.tsx` (NEW)
- `/src/components/shared/TrustBadges.tsx` (NEW)
- Update: `/src/pages/Index.tsx`, `/src/pages/Pricing.tsx`, `/src/components/Footer.tsx`

**Founder Badge Content:**
```
┌─────────────────────────────────────────────────────────┐
│  Founder-Led Automation (No Agency Markup)              │
├─────────────────────────────────────────────────────────┤
│  Built by [Name] while competing as D1 Hockey player    │
│  at Colgate University '26.                             │
│                                                         │
│  Solo founder—you work directly with me.                │
│  No account managers, no junior developers.             │
│                                                         │
│  Battle-tested automation systems from someone who      │
│  understands performing under pressure.                 │
└─────────────────────────────────────────────────────────┘
```

**Guarantee Badge (Pricing Page):**
```
┌─────────────────────────────────────────────────────────┐
│  Our Pilot Guarantee                                    │
├─────────────────────────────────────────────────────────┤
│  If the 2-week pilot doesn't hit the agreed checklist,  │
│  you get 50% off OR full credit toward next phase.      │
│                                                         │
│  No fine print. Just results.                           │
└─────────────────────────────────────────────────────────┘
```

**Trust Badges (Footer):**
- 🔒 SSL Secured
- 📄 NDA Available
- 📍 Toronto-Based
- 🎓 Colgate '26

---

### 4.8 Offer Funnel Graphic ⏱️ 2 hours

**Files:**
- `/src/components/homepage/OfferFunnelGraphic.tsx` (NEW)
- Update: `/src/pages/Index.tsx`

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  THE FLOWMATRIX AI PROCESS                                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [📞]            [⚡]              [🎯]            [📈]                 │
│  Free            Pay-What-You      2-Week          Month-to-Month      │
│  Consultation    Think Audit       Pilot           Partnership         │
│                                                                         │
│  Understand  →   Deep-dive    →   Build & Test →  Scale & Optimize    │
│  your needs      workflow         your solution   automation          │
│                  analysis                          roadmap            │
└─────────────────────────────────────────────────────────────────────────┘

Desktop: Horizontal layout with arrows
Mobile: Vertical layout with downward arrows
```

**Styling:**
- Icons: `h-12 w-12`, gradient backgrounds
- Cards: `p-6`, `rounded-xl`, `shadow-lg`
- Arrows: `→` on desktop, `↓` on mobile

---

### 4.9 Chat Widget Optimization (CONVOCORE) ⏱️ 2 hours

**Files:**
- Update CONVOCORE initialization (likely in `index.html` or `App.tsx`)

**Trigger Logic:**
```tsx
useEffect(() => {
  let triggered = false;

  // Timer: 45 seconds
  const timer = setTimeout(() => {
    if (!triggered) {
      showConvoCore();
      triggered = true;
    }
  }, 45000);

  // Scroll: 50% of page
  const handleScroll = () => {
    if (!triggered) {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.5) {
        showConvoCore();
        triggered = true;
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    clearTimeout(timer);
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
```

**Analytics Tracking:**
```tsx
window.gtag?.('event', 'chat_widget_shown', {
  event_category: 'engagement',
  trigger: '45s_or_50%_scroll'
});
```

---

### 4.10 Lead Magnet PDF + Modal ⏱️ 4 hours

**Files:**
- `/src/components/homepage/LeadMagnetModal.tsx` (NEW)
- `/public/pdfs/automation-wins-field-teams.pdf` (NEW)
- Update: `/src/pages/Index.tsx`

**PDF Content: "4 Automation Wins for Field Teams"**
1. Email Intelligence: Auto-prioritize urgent emails
2. Dispatch Optimization: Route techs for max efficiency
3. Invoice Acceleration: Generate & send invoices instantly
4. Customer Follow-up: Automate renewal reminders

**Modal Trigger:**
- Scroll 60% past hero section
- Show once per session (localStorage)

**Modal Flow:**
```
┌─────────────────────────────────────────────────────────┐
│  [X]                                                    │
│                                                         │
│  Get Your Free PDF                                      │
│  "4 Automation Wins for Field Teams"                    │
│                                                         │
│  [Email Input Field]                                    │
│                                                         │
│  [Download Now Button]                                  │
│                                                         │
│  We'll email you the PDF instantly.                     │
└─────────────────────────────────────────────────────────┘
```

**Backend:**
- Submit email to Supabase newsletter function
- Trigger email with PDF attachment via Resend API

---

## 5. Implementation Roadmap

### Phase 1: Foundation (Week 1) - 22 hours → Score: 85/100

```
┌─────────────────────────────────────────────────────────┐
│  SPRINT 1.1: Homepage Hero (4h)                         │
├─────────────────────────────────────────────────────────┤
│  [ ] Create ICPToggle.tsx                               │
│  [ ] Create HeroWithICP.tsx                             │
│  [ ] Source and optimize hero images (Unsplash → WebP) │
│  [ ] Update Index.tsx to use new hero                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 1.2: ICP Pain Point Sections (6h)               │
├─────────────────────────────────────────────────────────┤
│  [ ] Create ICPPainPointSection.tsx                     │
│  [ ] Write construction pain point copy                 │
│  [ ] Write home service pain point copy                 │
│  [ ] Add to Index.tsx below hero                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 1.3: Construction Landing Page (4h)             │
├─────────────────────────────────────────────────────────┤
│  [ ] Create Construction.tsx                            │
│  [ ] Create LandingPageHero.tsx (reusable)              │
│  [ ] Add UBL case study section                         │
│  [ ] Add offer funnel section                           │
│  [ ] Update App.tsx routes (ABOVE NotFound)             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 1.4: Home Service Landing Page (4h)             │
├─────────────────────────────────────────────────────────┤
│  [ ] Create HomeService.tsx                             │
│  [ ] Reuse LandingPageHero.tsx                          │
│  [ ] Customize content for home service ICP             │
│  [ ] Update App.tsx routes                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 1.5: Proof Cards (4h)                           │
├─────────────────────────────────────────────────────────┤
│  [ ] Create ProofCard.tsx                               │
│  [ ] Create ProofSection.tsx                            │
│  [ ] Input UBL metrics (150hrs, $3.5K, $10K-$20K)       │
│  [ ] Add to Index.tsx                                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PHASE 1 TESTING                                        │
├─────────────────────────────────────────────────────────┤
│  [ ] ICP toggle switches Construction/Home Service      │
│  [ ] Landing pages load at /construction, /home-service │
│  [ ] Proof cards display with correct metrics           │
│  [ ] Mobile responsive (iPhone SE, 14, iPad)            │
│  [ ] Lighthouse score >90                               │
└─────────────────────────────────────────────────────────┘
```

---

### Phase 2: Conversion Optimization (Week 2) - 16 hours → Score: 95/100

```
┌─────────────────────────────────────────────────────────┐
│  SPRINT 2.1: Hero Images (3h)                           │
├─────────────────────────────────────────────────────────┤
│  [ ] Source construction image (Unsplash)               │
│  [ ] Source home service image (Unsplash)               │
│  [ ] Optimize to WebP (<200KB each)                     │
│  [ ] Add to HeroWithICP.tsx with lazy loading           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 2.2: Sticky Navigation (2h)                     │
├─────────────────────────────────────────────────────────┤
│  [ ] Update Navigation.tsx with scroll detection        │
│  [ ] Add sticky positioning + background change         │
│  [ ] Add smooth scroll CSS to index.css                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 2.3: Trust Badges (3h)                          │
├─────────────────────────────────────────────────────────┤
│  [ ] Create FounderBadge.tsx                            │
│  [ ] Create GuaranteeBadge.tsx                          │
│  [ ] Create TrustBadges.tsx                             │
│  [ ] Add FounderBadge to Index.tsx                      │
│  [ ] Add GuaranteeBadge to Pricing.tsx                  │
│  [ ] Add TrustBadges to Footer.tsx                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 2.4: Offer Funnel Graphic (2h)                  │
├─────────────────────────────────────────────────────────┤
│  [ ] Create OfferFunnelGraphic.tsx                      │
│  [ ] Design 4-step horizontal layout (desktop)          │
│  [ ] Design vertical layout for mobile                  │
│  [ ] Add to Index.tsx below hero                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 2.5: Chat Widget Optimization (2h)              │
├─────────────────────────────────────────────────────────┤
│  [ ] Find CONVOCORE initialization code                 │
│  [ ] Add 45-second timer trigger                        │
│  [ ] Add 50% scroll trigger                             │
│  [ ] Add GA4 event tracking for widget shown            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 2.6: Lead Magnet (4h)                           │
├─────────────────────────────────────────────────────────┤
│  [ ] Create/write PDF content                           │
│  [ ] Create LeadMagnetModal.tsx                         │
│  [ ] Add scroll trigger (60% past hero)                 │
│  [ ] Add localStorage to show once per session          │
│  [ ] Connect to Supabase newsletter function            │
│  [ ] Test email delivery with PDF attachment            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PHASE 2 TESTING                                        │
├─────────────────────────────────────────────────────────┤
│  [ ] Nav sticky after 50px scroll                       │
│  [ ] Hero images load correctly                         │
│  [ ] Trust badges visible in correct locations          │
│  [ ] Chat widget triggers at 45s OR 50% scroll          │
│  [ ] Lead magnet modal appears, can be closed           │
│  [ ] Email capture → PDF delivery works                 │
└─────────────────────────────────────────────────────────┘
```

---

### Phase 3: Analytics & Polish (Week 3) - 14 hours → Score: 100/100

```
┌─────────────────────────────────────────────────────────┐
│  SPRINT 3.1: Case Study Page (4h)                       │
├─────────────────────────────────────────────────────────┤
│  [ ] Create CaseStudy.tsx                               │
│  [ ] Write UBL Group case study                         │
│  [ ] Add n8n workflow screenshots                       │
│  [ ] Add metrics visualization                          │
│  [ ] Update App.tsx routes                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 3.2: Tally Integration (2h)                     │
├─────────────────────────────────────────────────────────┤
│  [ ] Option A: Embed Tally on Contact page              │
│  [ ] Option B: Create TallyModal component              │
│  [ ] Test form submissions                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 3.3: Analytics Setup (3h)                       │
├─────────────────────────────────────────────────────────┤
│  [ ] GA4: Create account + property                     │
│  [ ] GA4: Add tracking code to index.html               │
│  [ ] GA4: Set up conversion goals                       │
│  [ ] Hotjar: Create account (free tier)                 │
│  [ ] Hotjar: Add tracking code to index.html            │
│  [ ] Hotjar: Configure recordings + heatmaps            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 3.4: Mobile Copy Optimization (2h)              │
├─────────────────────────────────────────────────────────┤
│  [ ] Shorten headlines for mobile viewport              │
│  [ ] Convert paragraphs to bullet points                │
│  [ ] Test readability on iPhone SE                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SPRINT 3.5: Blog Template (3h)                         │
├─────────────────────────────────────────────────────────┤
│  [ ] Create Blog.tsx (blog listing page)                │
│  [ ] Create BlogPost.tsx (individual post template)     │
│  [ ] Write sample post                                  │
│  [ ] Update App.tsx routes                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PHASE 3 TESTING                                        │
├─────────────────────────────────────────────────────────┤
│  [ ] GA4 tracking events firing correctly               │
│  [ ] Hotjar recording sessions                          │
│  [ ] Mobile copy readable on small screens              │
│  [ ] Blog page displays correctly                       │
│  [ ] Case study page loads with images                  │
└─────────────────────────────────────────────────────────┘
```

---

### Phase 4: QA & Launch (Week 4) - 10 hours

```
┌─────────────────────────────────────────────────────────┐
│  COMPREHENSIVE TESTING                                  │
├─────────────────────────────────────────────────────────┤
│  [ ] Chrome browser testing                             │
│  [ ] Safari browser testing                             │
│  [ ] Firefox browser testing                            │
│  [ ] Edge browser testing                               │
│  [ ] iPhone SE mobile testing                           │
│  [ ] iPhone 14 mobile testing                           │
│  [ ] Samsung Android testing                            │
│  [ ] iPad tablet testing                                │
│  [ ] Lighthouse score >90 (all pages)                   │
│  [ ] No console errors                                  │
│  [ ] No 404 errors                                      │
│  [ ] All forms submit successfully                      │
│  [ ] Copy proofread and links verified                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  DEPLOYMENT                                             │
├─────────────────────────────────────────────────────────┤
│  [ ] Set environment variables in Vercel                │
│  [ ] Test build locally (npm run build)                 │
│  [ ] Check for TypeScript errors                        │
│  [ ] Merge to main branch                               │
│  [ ] Push to GitHub                                     │
│  [ ] Verify Vercel auto-deploy                          │
│  [ ] Test production URL end-to-end                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  POST-LAUNCH MONITORING                                 │
├─────────────────────────────────────────────────────────┤
│  [ ] Verify GA4 tracking in production                  │
│  [ ] Verify Hotjar recording in production              │
│  [ ] Mobile test on real devices                        │
│  [ ] Monitor Vercel logs for errors                     │
│  [ ] Set up UptimeRobot monitoring                      │
│  [ ] Configure GA4 alerts                               │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Content Library

### Homepage Copy

#### Construction Hero
```
Headline: Stop Job Cost Overruns & Scheduling Chaos

Subheadline: We automate your construction workflows so you spend less on admin
and scale faster. Free 5-Day Diagnostic → 2-Week Pilot → Month-to-Month Partnership.

CTA Primary: Book Free Diagnostic
CTA Secondary: See How It Works
```

#### Home Service Hero
```
Headline: End Dispatch Lag & Technician Idle Time

Subheadline: We automate your service workflows so your techs book more jobs per day.
Free 5-Day Diagnostic → 2-Week Pilot → Month-to-Month Partnership.

CTA Primary: Book Free Diagnostic
CTA Secondary: See Case Study
```

---

### Pain Points

#### Construction Pain Points
```
1. Job Cost Overruns
   Icon: DollarSign (Lucide)
   Title: "Projects Going Over Budget"
   Description: "Poor cost tracking and invoice delays lead to budget overruns and
   reduced profitability on every job."

2. Scheduling Chaos
   Icon: Calendar (Lucide)
   Title: "Manual Scheduling = Downtime"
   Description: "Manual crew scheduling leads to gaps, idle time, missed deadlines,
   and frustrated clients."

3. Invoice Delays
   Icon: FileText (Lucide)
   Title: "Slow Payment Cycles"
   Description: "Manual invoicing and approval bottlenecks slow your payment cycles
   and hurt cash flow."
```

#### Home Service Pain Points
```
1. Dispatch Lag
   Icon: Clock (Lucide)
   Title: "2+ Hours Wasted Daily"
   Description: "Manual scheduling and job assignment wastes hours that could be
   spent serving more customers."

2. Technician Idle Time
   Icon: Users (Lucide)
   Title: "Techs Idle Between Jobs"
   Description: "Poor route optimization leaves technicians idle instead of
   maximizing billable hours."

3. Customer Wait Times
   Icon: Phone (Lucide)
   Title: "Slow Response = Lost Jobs"
   Description: "Delayed response times mean customers book with competitors who
   respond faster."
```

---

### Proof Cards Copy
```
Card 1:
  Metric: "150+ Hours"
  Subtext: "Saved in 3 Months"
  Description: "Email intelligence automation for GTA construction contractor"
  Gradient: Blue
  Icon: Mail

Card 2:
  Metric: "$3,500+"
  Subtext: "ROI Achieved"
  Description: "Combined savings across email and developer outreach automation"
  Gradient: Green
  Icon: TrendingUp

Card 3:
  Metric: "$10K-$20K+"
  Subtext: "Projected Monthly ROI"
  Description: "Full ERP system currently in development"
  Badge: "Coming Soon"
  Gradient: Purple
  Icon: Database
```

---

### Founder Story
```
Headline: Founder-Led Automation (No Agency Markup)

Body: Built by [Name] while competing as D1 Hockey player at Colgate University '26.

Solo founder—you work directly with me. No account managers, no junior developers.

Battle-tested automation systems from someone who understands performing under pressure.
```

---

### Guarantee Copy
```
Headline: Our Pilot Guarantee

Body: If the 2-week pilot doesn't hit the agreed checklist, you get 50% off OR
full credit toward next phase.

No fine print. Just results.
```

---

### Offer Funnel Steps
```
Step 1: Free Consultation
  Icon: Phone
  Description: "Understand your workflow and identify automation opportunities"

Step 2: Pay-What-You-Think Audit
  Icon: Zap
  Description: "Deep-dive workflow analysis with actionable recommendations"

Step 3: 2-Week Pilot
  Icon: Target
  Description: "Build and test your custom automation solution"

Step 4: Month-to-Month Partnership
  Icon: TrendingUp
  Description: "Scale automation and optimize your entire operation"
```

---

## 7. Integrations Setup

### Google Analytics 4 (GA4) - ⏱️ 3 hours

**Setup Steps:**
1. Create account at analytics.google.com
2. Create property for FlowMatrix AI
3. Get measurement ID (G-XXXXXXXXXX)
4. Add tracking code to `/index.html`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Conversion Goals:**
- `calendly_booking` - When user clicks Calendly CTA
- `tally_form_submit` - When user submits Tally form
- `newsletter_signup` - When user signs up for newsletter
- `lead_magnet_download` - When user downloads PDF

**Event Tracking Example:**
```tsx
// Track Calendly booking
window.gtag?.('event', 'calendly_booking', {
  event_category: 'conversion',
  event_label: 'Free Diagnostic',
  value: 1
});
```

---

### Hotjar - ⏱️ 1 hour

**Setup Steps:**
1. Create account at hotjar.com (free tier: 35 daily sessions)
2. Create site
3. Get tracking code
4. Add to `/index.html` before `</head>`

**Configuration:**
- Enable recordings for: `/`, `/construction`, `/home-service`, `/pricing`
- Create heatmaps for: Homepage, Landing pages
- Set up funnels: Homepage → Landing Page → Calendly

---

### Tally Forms - ⏱️ 2 hours

**Already set up, needs optimization**

**Option A: Modal Popup**
```tsx
// TallyModal.tsx
<TallyEmbed formId="FORM_ID" />
```

**Option B: Dedicated Page**
```tsx
// /intake page
<Route path="/intake" element={<IntakePage />} />
```

**Embed Code:**
```tsx
<iframe
  src="https://tally.so/r/FORM_ID"
  width="100%"
  height="600"
  frameBorder="0"
  title="Free Diagnostic Form"
/>
```

---

### Supabase Edge Function: Lead Magnet Email - ⏱️ 1 hour

**File:** `/supabase/functions/send-lead-magnet/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { email } = await req.json()

  // Save to newsletter table
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  await supabase.from('newsletter_signups').insert({ email })

  // Send email with PDF via Resend API
  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'FlowMatrix AI <hello@flowmatrixai.com>',
      to: email,
      subject: 'Your Free PDF: 4 Automation Wins for Field Teams',
      html: `<p>Thanks for your interest! Here's your PDF.</p>`,
      attachments: [{
        filename: 'automation-wins-field-teams.pdf',
        path: 'https://flowmatrixai.com/pdfs/automation-wins-field-teams.pdf'
      }]
    })
  })

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

---

## 8. File Structure

```
flowmatrixai/
├── src/
│   ├── components/
│   │   ├── homepage/                        [NEW DIRECTORY]
│   │   │   ├── ICPToggle.tsx               [NEW - 4.1]
│   │   │   ├── HeroWithICP.tsx             [NEW - 4.1]
│   │   │   ├── ICPPainPointSection.tsx     [NEW - 4.2]
│   │   │   ├── ProofSection.tsx            [NEW - 4.3]
│   │   │   ├── ProofCard.tsx               [NEW - 4.3]
│   │   │   ├── OfferFunnelGraphic.tsx      [NEW - 4.8]
│   │   │   ├── FounderBadge.tsx            [NEW - 4.7]
│   │   │   └── LeadMagnetModal.tsx         [NEW - 4.10]
│   │   │
│   │   ├── landing-pages/                   [NEW DIRECTORY]
│   │   │   ├── LandingPageHero.tsx         [NEW - 4.4]
│   │   │   ├── PainPointCards.tsx          [NEW - 4.4]
│   │   │   └── OfferFunnel.tsx             [NEW - 4.4]
│   │   │
│   │   ├── shared/                          [NEW DIRECTORY]
│   │   │   ├── GuaranteeBadge.tsx          [NEW - 4.7]
│   │   │   ├── TrustBadges.tsx             [NEW - 4.7]
│   │   │   └── TallyModal.tsx              [NEW - Optional]
│   │   │
│   │   ├── ui/                              [EXISTING - shadcn/ui]
│   │   ├── Footer.tsx                       [UPDATE - Add TrustBadges]
│   │   └── Navigation.tsx                   [UPDATE - Sticky nav]
│   │
│   ├── pages/
│   │   ├── Index.tsx                        [UPDATE - Add all homepage components]
│   │   ├── Construction.tsx                 [NEW - 4.4]
│   │   ├── HomeService.tsx                  [NEW - 4.4]
│   │   ├── CaseStudy.tsx                    [NEW - Phase 3]
│   │   ├── Pricing.tsx                      [UPDATE - Add GuaranteeBadge]
│   │   ├── Blog.tsx                         [NEW - Phase 3]
│   │   └── BlogPost.tsx                     [NEW - Phase 3]
│   │
│   ├── App.tsx                              [UPDATE - Add routes]
│   └── index.css                            [UPDATE - Smooth scroll]
│
├── public/
│   ├── images/
│   │   ├── hero-construction.webp           [NEW - 4.5]
│   │   └── hero-home-service.webp           [NEW - 4.5]
│   └── pdfs/
│       └── automation-wins-field-teams.pdf  [NEW - 4.10]
│
├── supabase/
│   └── functions/
│       └── send-lead-magnet/
│           └── index.ts                     [NEW - Lead magnet email]
│
├── index.html                               [UPDATE - Add GA4 + Hotjar]
├── PRD.md                                   [THIS FILE]
└── CLAUDE.md                                [EXISTING - Project docs]
```

---

## 9. Design System Reference

### Colors (Existing in index.css)

```css
/* Primary Interactive Colors */
--interactive-primary: hsl(221, 83%, 53%)        /* Blue #3B82F6 */
--interactive-primary-hover: hsl(221, 83%, 45%)  /* Darker Blue */
--interactive-secondary: hsl(142, 71%, 45%)      /* Green #10B981 */
--interactive-accent: hsl(280, 87%, 65%)         /* Purple #A855F7 */

/* Surface Colors */
--surface-light: hsl(0, 0%, 98%)                 /* Light Gray */
--surface-medium: hsl(0, 0%, 95%)                /* Medium Gray */
--surface-dark: hsl(0, 0%, 20%)                  /* Dark Gray */

/* Background Colors for ICP Sections */
bg-blue-50    /* Construction section background */
bg-green-50   /* Home Service section background */
```

---

### Typography

```css
/* Headings */
H1: text-4xl md:text-6xl font-bold
H2: text-3xl md:text-5xl font-bold
H3: text-2xl md:text-4xl font-semibold
H4: text-xl md:text-2xl font-semibold

/* Body */
Body Large: text-lg md:text-xl
Body: text-base (16px)
Body Small: text-sm

/* Font Family */
font-family: Inter, system-ui, sans-serif
```

---

### Component Styles

#### ICPToggle
```tsx
// Active state
className="bg-blue-600 text-white px-6 py-3 rounded-lg"

// Inactive state
className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300"
```

#### ProofCard
```tsx
className="
  p-8 rounded-2xl shadow-xl
  bg-gradient-to-br from-blue-500 to-blue-600
  hover:scale-105 transition-transform
  text-white
"
```

#### Offer Funnel Steps
```tsx
// Desktop: Horizontal
className="flex flex-row items-center gap-4"

// Mobile: Vertical
className="flex flex-col items-center gap-4"

// Icons
className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"
```

---

### Animations (Existing in index.css)

```css
animate-float        /* Subtle floating animation */
animate-fade-in      /* Fade in on load */
animate-scale-in     /* Scale up on load */
animate-slide-up     /* Slide up on load */
animate-glow         /* Glow effect */
animate-pulse-glow   /* Pulsing glow effect */
```

---

### Gradients (Existing)

```css
bg-voice-gradient         /* Gradient for voice UI elements */
bg-voice-gradient-hover   /* Hover state gradient */
```

---

### Spacing

```css
/* Container Padding */
px-4 md:px-8 lg:px-16     /* Responsive horizontal padding */
py-8 md:py-12 lg:py-16    /* Responsive vertical padding */

/* Section Spacing */
my-16 md:my-24 lg:my-32   /* Margin between major sections */
```

---

## 10. Testing Checklists

### Phase 1 Testing Checklist

```
┌─────────────────────────────────────────────────────────┐
│  FUNCTIONALITY                                          │
├─────────────────────────────────────────────────────────┤
│  [ ] ICP toggle switches between Construction/Home      │
│  [ ] Hero headline updates based on ICP selection       │
│  [ ] Hero subheadline updates based on ICP              │
│  [ ] /construction page loads without errors            │
│  [ ] /home-service page loads without errors            │
│  [ ] Proof cards display with correct metrics           │
│  [ ] Pain point sections show correct content           │
│  [ ] All CTAs are clickable                             │
├─────────────────────────────────────────────────────────┤
│  RESPONSIVE DESIGN                                      │
├─────────────────────────────────────────────────────────┤
│  [ ] iPhone SE (375px) - All content readable           │
│  [ ] iPhone 14 (390px) - All content readable           │
│  [ ] iPad (768px) - Layout adjusts properly             │
│  [ ] Desktop (1920px) - Full layout displays            │
│  [ ] No horizontal scroll on mobile                     │
├─────────────────────────────────────────────────────────┤
│  PERFORMANCE                                            │
├─────────────────────────────────────────────────────────┤
│  [ ] Lighthouse Performance >85                         │
│  [ ] Lighthouse Accessibility >90                       │
│  [ ] Lighthouse Best Practices >90                      │
│  [ ] Lighthouse SEO >90                                 │
│  [ ] No console errors                                  │
└─────────────────────────────────────────────────────────┘
```

---

### Phase 2 Testing Checklist

```
┌─────────────────────────────────────────────────────────┐
│  NAVIGATION                                             │
├─────────────────────────────────────────────────────────┤
│  [ ] Nav becomes sticky after 50px scroll               │
│  [ ] Nav background changes on scroll                   │
│  [ ] Smooth scroll works for anchor links               │
├─────────────────────────────────────────────────────────┤
│  IMAGES                                                 │
├─────────────────────────────────────────────────────────┤
│  [ ] Hero images load (WebP format)                     │
│  [ ] Images are <200KB each                             │
│  [ ] Images are lazy loaded                             │
│  [ ] Alt text is descriptive                            │
├─────────────────────────────────────────────────────────┤
│  TRUST ELEMENTS                                         │
├─────────────────────────────────────────────────────────┤
│  [ ] FounderBadge visible on homepage                   │
│  [ ] GuaranteeBadge visible on pricing page             │
│  [ ] TrustBadges visible in footer                      │
├─────────────────────────────────────────────────────────┤
│  CHAT WIDGET                                            │
├─────────────────────────────────────────────────────────┤
│  [ ] Widget appears after 45 seconds                    │
│  [ ] Widget appears after 50% scroll (whichever first)  │
│  [ ] GA4 event fires when widget shown                  │
├─────────────────────────────────────────────────────────┤
│  LEAD MAGNET                                            │
├─────────────────────────────────────────────────────────┤
│  [ ] Modal appears after 60% scroll past hero           │
│  [ ] Modal can be closed (X button)                     │
│  [ ] Modal doesn't reappear in same session             │
│  [ ] Email submission works                             │
│  [ ] PDF delivered via email                            │
│  [ ] localStorage prevents repeat display               │
└─────────────────────────────────────────────────────────┘
```

---

### Phase 3 Testing Checklist

```
┌─────────────────────────────────────────────────────────┐
│  ANALYTICS                                              │
├─────────────────────────────────────────────────────────┤
│  [ ] GA4 tracking code fires on all pages               │
│  [ ] calendly_booking event tracks                      │
│  [ ] tally_form_submit event tracks                     │
│  [ ] newsletter_signup event tracks                     │
│  [ ] lead_magnet_download event tracks                  │
│  [ ] Hotjar recordings capture sessions                 │
│  [ ] Hotjar heatmaps configured for key pages           │
├─────────────────────────────────────────────────────────┤
│  CONTENT                                                │
├─────────────────────────────────────────────────────────┤
│  [ ] Case study page displays correctly                 │
│  [ ] Case study images/screenshots load                 │
│  [ ] Blog listing page works                            │
│  [ ] Individual blog post template works                │
│  [ ] Mobile copy is shortened for readability           │
│  [ ] Paragraphs converted to bullets where appropriate  │
├─────────────────────────────────────────────────────────┤
│  FORMS                                                  │
├─────────────────────────────────────────────────────────┤
│  [ ] Tally form embeds correctly                        │
│  [ ] Tally form submissions work                        │
│  [ ] Contact form works                                 │
│  [ ] Newsletter signup works                            │
└─────────────────────────────────────────────────────────┘
```

---

### Phase 4 Final QA Checklist

```
┌─────────────────────────────────────────────────────────┐
│  CROSS-BROWSER TESTING                                  │
├─────────────────────────────────────────────────────────┤
│  [ ] Chrome (latest) - All features work                │
│  [ ] Safari (latest) - All features work                │
│  [ ] Firefox (latest) - All features work               │
│  [ ] Edge (latest) - All features work                  │
├─────────────────────────────────────────────────────────┤
│  MOBILE DEVICE TESTING                                  │
├─────────────────────────────────────────────────────────┤
│  [ ] iPhone SE - Layout + functionality                 │
│  [ ] iPhone 14 - Layout + functionality                 │
│  [ ] Samsung Galaxy - Layout + functionality            │
│  [ ] iPad - Layout + functionality                      │
├─────────────────────────────────────────────────────────┤
│  PERFORMANCE                                            │
├─────────────────────────────────────────────────────────┤
│  [ ] Lighthouse >90 on all key pages                    │
│  [ ] No console errors on any page                      │
│  [ ] No 404 errors for any resource                     │
│  [ ] Page load time <3 seconds                          │
├─────────────────────────────────────────────────────────┤
│  CONTENT REVIEW                                         │
├─────────────────────────────────────────────────────────┤
│  [ ] All copy proofread (no typos)                      │
│  [ ] All links verified and working                     │
│  [ ] All images have alt text                           │
│  [ ] All CTAs lead to correct destinations              │
├─────────────────────────────────────────────────────────┤
│  FORMS & CONVERSIONS                                    │
├─────────────────────────────────────────────────────────┤
│  [ ] Calendly booking link works                        │
│  [ ] Tally form submissions go through                  │
│  [ ] Newsletter signups save to database                │
│  [ ] Lead magnet PDF emails send                        │
├─────────────────────────────────────────────────────────┤
│  PRODUCTION DEPLOYMENT                                  │
├─────────────────────────────────────────────────────────┤
│  [ ] Environment variables set in Vercel                │
│  [ ] Build succeeds locally                             │
│  [ ] No TypeScript errors                               │
│  [ ] Merged to main branch                              │
│  [ ] Pushed to GitHub                                   │
│  [ ] Vercel auto-deployed successfully                  │
│  [ ] Production URL tested end-to-end                   │
├─────────────────────────────────────────────────────────┤
│  POST-LAUNCH MONITORING                                 │
├─────────────────────────────────────────────────────────┤
│  [ ] GA4 tracking verified in production                │
│  [ ] Hotjar recording in production                     │
│  [ ] Vercel logs monitored for errors                   │
│  [ ] UptimeRobot configured                             │
│  [ ] GA4 alerts configured                              │
└─────────────────────────────────────────────────────────┘
```

---

## 11. Success Metrics & ROI

### Traffic Metrics (Post-Launch)

```
┌─────────────────────────────────────────────────────────┐
│  TRAFFIC GOALS                                          │
├─────────────────────────────────────────────────────────┤
│  Monthly Visitors:    500 → 1,000+  (2x increase)       │
│  Bounce Rate:         60% → <50%    (improvement)       │
│  Session Duration:    1:30 → 2:30+  (improvement)       │
│  Pages per Session:   2 → 4+        (2x increase)       │
└─────────────────────────────────────────────────────────┘
```

---

### Conversion Metrics

```
┌─────────────────────────────────────────────────────────┐
│  CONVERSION GOALS                                       │
├─────────────────────────────────────────────────────────┤
│  Homepage Conversion:        1-2% → 5%                  │
│  Landing Page Conversion:    0% → 8%                    │
│  Calendly Bookings:          2-5/mo → 15-20/mo         │
│  Lead Magnet Downloads:      0 → 30-50/mo              │
│  Newsletter Signups:         5-10/mo → 30-40/mo        │
└─────────────────────────────────────────────────────────┘
```

---

### ROI Calculation

```
┌─────────────────────────────────────────────────────────┐
│  INVESTMENT                                             │
├─────────────────────────────────────────────────────────┤
│  Development Time:  52-62 hours @ $50/hr = $2,600-$3,100│
│  Tools (GA4, Hotjar, etc.):  $0/mo (free tiers)         │
│  Total Investment:  ~$3,000                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  6-MONTH REVENUE PROJECTION                             │
├─────────────────────────────────────────────────────────┤
│  Bookings per Month:  15-20                             │
│  Close Rate:          30%                               │
│  Clients per Month:   4-6                               │
│  Average Deal Value:  $3,000                            │
│  Monthly Revenue:     $12,000-$18,000                   │
│  6-Month Revenue:     $72,000-$108,000                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  ROI                                                    │
├─────────────────────────────────────────────────────────┤
│  Revenue:     $72K-$108K                                │
│  Investment:  $3K                                       │
│  ROI:         24x-36x (2,400%-3,600%)                   │
│  Payback:     <1 month                                  │
└─────────────────────────────────────────────────────────┘
```

---

## 12. Environment Variables

```bash
# ===== EXISTING =====
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...

# ===== ADD NEW =====

# Google Analytics 4
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Hotjar
VITE_HOTJAR_ID=XXXXXX

# Resend (for lead magnet emails)
RESEND_API_KEY=re_xxx...

# Tally Forms
VITE_TALLY_FORM_ID=xxx...

# CONVOCORE Chat Widget (if not already set)
VITE_CONVOCORE_ID=xxx...
```

**Setup in Vercel:**
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add each variable for Production, Preview, and Development
3. Redeploy after adding variables

---

## 13. Deployment Guide

### Pre-Deployment Checklist

```
┌─────────────────────────────────────────────────────────┐
│  PRE-DEPLOY TASKS                                       │
├─────────────────────────────────────────────────────────┤
│  [ ] All environment variables set in Vercel            │
│  [ ] Test build locally: npm run build                  │
│  [ ] Check for TypeScript errors: npm run lint          │
│  [ ] All forms tested and working                       │
│  [ ] All images optimized (<200KB)                      │
│  [ ] All links verified                                 │
│  [ ] Lighthouse score >90 on key pages                  │
└─────────────────────────────────────────────────────────┘
```

---

### Deployment Steps

```bash
# 1. Create feature branch (if not already)
git checkout -b feature/website-enhancement

# 2. Commit all changes
git add .
git commit -m "feat: complete website enhancement (PRD v1.0)"

# 3. Push to GitHub
git push origin feature/website-enhancement

# 4. Create Pull Request on GitHub
# Review changes, ensure CI/CD passes

# 5. Merge to main
git checkout main
git merge feature/website-enhancement
git push origin main

# 6. Vercel auto-deploys from main branch
# Monitor deployment at vercel.com/dashboard
```

---

### Post-Deployment Verification

```
┌─────────────────────────────────────────────────────────┐
│  POST-DEPLOY VERIFICATION                               │
├─────────────────────────────────────────────────────────┤
│  [ ] Production URL loads: flowmatrixai.com             │
│  [ ] All pages accessible (no 404s)                     │
│  [ ] GA4 tracking fires (check Real-Time reports)       │
│  [ ] Hotjar recording sessions                          │
│  [ ] Forms submit successfully                          │
│  [ ] Lead magnet email delivers                         │
│  [ ] Chat widget triggers correctly                     │
│  [ ] Mobile responsive on real devices                  │
│  [ ] No console errors in production                    │
│  [ ] SSL certificate valid                              │
└─────────────────────────────────────────────────────────┘
```

---

### Monitoring Setup

**UptimeRobot:**
1. Create account at uptimerobot.com
2. Add monitor for https://flowmatrixai.com
3. Set check interval: 5 minutes
4. Enable email alerts

**GA4 Alerts:**
1. Go to Admin → Property → Custom Alerts
2. Create alert: "Traffic drop >50% day-over-day"
3. Create alert: "Zero conversions for 24 hours"

**Vercel Logs:**
- Monitor at vercel.com → Project → Logs
- Check for runtime errors
- Review function invocations

---

## 14. Priority Order (If Time Constrained)

### Must Have (22 hours) - Gets to 85/100

```
1. ICP Toggle + Hero (4h)
   ├─ ICPToggle.tsx
   ├─ HeroWithICP.tsx
   └─ Update Index.tsx

2. ICP Pain Point Sections (6h)
   ├─ ICPPainPointSection.tsx
   └─ Update Index.tsx

3. Proof Cards (4h)
   ├─ ProofCard.tsx
   ├─ ProofSection.tsx
   └─ Update Index.tsx

4. Construction Landing Page (4h)
   ├─ Construction.tsx
   ├─ LandingPageHero.tsx
   └─ Update App.tsx

5. Home Service Landing Page (4h)
   ├─ HomeService.tsx
   └─ Update App.tsx
```

---

### Should Have (11 hours) - Gets to 95/100

```
6. Founder Badge (1h)
   ├─ FounderBadge.tsx
   └─ Update Index.tsx

7. Hero Images (3h)
   ├─ Source + optimize images
   └─ Update HeroWithICP.tsx

8. Sticky Nav (2h)
   ├─ Update Navigation.tsx
   └─ Update index.css

9. Funnel Graphic (2h)
   ├─ OfferFunnelGraphic.tsx
   └─ Update Index.tsx

10. Trust Badges (3h)
    ├─ GuaranteeBadge.tsx
    ├─ TrustBadges.tsx
    ├─ Update Pricing.tsx
    └─ Update Footer.tsx
```

---

### Nice to Have (10 hours) - Gets to 100/100

```
11. Lead Magnet (4h)
    ├─ Create PDF
    ├─ LeadMagnetModal.tsx
    └─ Supabase function

12. Chat Widget Optimization (2h)
    └─ Update CONVOCORE triggers

13. Analytics Setup (3h)
    ├─ GA4 setup
    └─ Hotjar setup

14. Case Study Page (1h)
    └─ CaseStudy.tsx
```

---

## 15. Risk Mitigation

### Technical Risks

```
┌─────────────────────────────────────────────────────────┐
│  RISK: Browser Compatibility Issues                     │
├─────────────────────────────────────────────────────────┤
│  Mitigation:                                            │
│  ▸ Test in Chrome, Safari, Firefox, Edge (Phase 4)     │
│  ▸ Use widely supported CSS features                   │
│  ▸ Polyfills for older browsers if needed               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  RISK: Image Performance Issues                         │
├─────────────────────────────────────────────────────────┤
│  Mitigation:                                            │
│  ▸ Optimize all images to <200KB                        │
│  ▸ Use WebP format                                      │
│  ▸ Implement lazy loading                               │
│  ▸ Load images asynchronously                           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  RISK: Integration Failures (GA4, Hotjar, etc.)         │
├─────────────────────────────────────────────────────────┤
│  Mitigation:                                            │
│  ▸ Test each integration immediately after setup        │
│  ▸ Verify in production post-deploy                     │
│  ▸ Error handling for missing analytics                 │
└─────────────────────────────────────────────────────────┘
```

---

### Content Risks

```
┌─────────────────────────────────────────────────────────┐
│  RISK: Metrics Lack Context (Confusing to Visitors)     │
├─────────────────────────────────────────────────────────┤
│  Mitigation:                                            │
│  ▸ Get feedback from UBL Group on case study           │
│  ▸ Add context to each metric (description text)       │
│  ▸ Include timeframes ("in 3 months")                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  RISK: Messaging Doesn't Resonate with ICP              │
├─────────────────────────────────────────────────────────┤
│  Mitigation:                                            │
│  ▸ A/B test different headlines (GA4 Experiments)       │
│  ▸ Gather feedback from target personas                 │
│  ▸ Monitor bounce rate and adjust copy                  │
└─────────────────────────────────────────────────────────┘
```

---

### Conversion Risks

```
┌─────────────────────────────────────────────────────────┐
│  RISK: Visitors Confused by Multiple CTAs                │
├─────────────────────────────────────────────────────────┤
│  Mitigation:                                            │
│  ▸ Primary CTA: "Book Free Diagnostic" (prominent)     │
│  ▸ Secondary CTA: "See How It Works" (subtle)          │
│  ▸ Monitor click-through rates and simplify if needed   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  RISK: Lead Magnet Modal Annoys Users                    │
├─────────────────────────────────────────────────────────┤
│  Mitigation:                                            │
│  ▸ Easy close button (X in top corner)                 │
│  ▸ Show only once per session (localStorage)           │
│  ▸ Delay trigger (60% scroll, not immediate)           │
│  ▸ Monitor bounce rate after modal implementation       │
└─────────────────────────────────────────────────────────┘
```

---

## 16. Getting Started Guide (For Claude Code)

### Workflow for Each Feature

```
┌─────────────────────────────────────────────────────────┐
│  STEP-BY-STEP DEVELOPMENT WORKFLOW                      │
├─────────────────────────────────────────────────────────┤
│  1. Read Section 5 (Roadmap)                            │
│     ▸ Identify current sprint                           │
│     ▸ Review tasks and checklist                        │
│                                                         │
│  2. Reference Feature Specs (Section 4)                 │
│     ▸ Component structure                               │
│     ▸ File paths                                        │
│     ▸ Implementation details                            │
│                                                         │
│  3. Get Copy from Content Library (Section 6)           │
│     ▸ Headlines, subheadlines, CTAs                     │
│     ▸ Pain point descriptions                           │
│     ▸ Proof card content                                │
│                                                         │
│  4. Check File Structure (Section 8)                    │
│     ▸ Where to create new files                         │
│     ▸ Which files to update                             │
│                                                         │
│  5. Apply Design System (Section 9)                     │
│     ▸ Colors, typography, spacing                       │
│     ▸ Component styles                                  │
│     ▸ Animations                                        │
│                                                         │
│  6. Implement Feature                                   │
│     ▸ Create/update files                               │
│     ▸ Write code following design system                │
│     ▸ Test locally (npm run dev)                        │
│                                                         │
│  7. Test Using Checklist (Section 10)                   │
│     ▸ Functionality                                     │
│     ▸ Responsive design                                 │
│     ▸ Performance                                       │
│                                                         │
│  8. Commit Changes                                      │
│     ▸ git add .                                         │
│     ▸ git commit -m "feat: [description]"               │
│     ▸ git push origin feature/[name]                    │
│                                                         │
│  9. Move to Next Sprint                                 │
│     ▸ Mark current sprint complete                      │
│     ▸ Begin next sprint in roadmap                      │
└─────────────────────────────────────────────────────────┘
```

---

### Git Workflow

```bash
# Initial setup (if not done)
git checkout -b feature/website-enhancement

# For each feature/sprint
git add .
git commit -m "feat: implement [feature name]"
git push origin feature/website-enhancement

# After Phase 1, 2, 3 completion
git commit -m "feat: complete Phase [X] - [description]"
git push origin feature/website-enhancement

# Final merge after Phase 4
git checkout main
git merge feature/website-enhancement
git push origin main
# Vercel auto-deploys
```

**Commit Message Format:**
```
feat: implement ICP toggle and hero component
feat: add construction landing page
feat: integrate GA4 and Hotjar analytics
fix: resolve mobile responsive issues on iPhone SE
```

---

### Quick Reference

**When building a new component:**
1. Check Section 4 for specs
2. Check Section 6 for copy
3. Check Section 9 for styling
4. Check Section 8 for file path

**When testing:**
1. Use Section 10 checklist for current phase
2. Test on mobile (iPhone SE minimum)
3. Check Lighthouse score
4. Verify no console errors

**When stuck:**
1. Reference CLAUDE.md for project architecture
2. Check existing shadcn/ui components in `/src/components/ui/`
3. Review design system in Section 9

---

## 17. Completion Criteria

### Phase 1 Completion (Score: 85/100)

```
✓ ICP toggle works and switches content
✓ Hero updates based on ICP selection
✓ 2 landing pages live (/construction, /home-service)
✓ Proof cards showing UBL metrics
✓ Mobile responsive (iPhone SE, 14, iPad)
✓ Lighthouse >85 on all pages
✓ All CTAs clickable and functional
```

---

### Phase 2 Completion (Score: 95/100)

```
✓ Hero images optimized and loading
✓ Sticky navigation with scroll detection
✓ Trust badges in footer, homepage, pricing
✓ Lead magnet modal triggering correctly
✓ Chat widget optimized (45s or 50% scroll)
✓ All forms submitting successfully
✓ Lighthouse >90 on all pages
```

---

### Phase 3 Completion (Score: 100/100)

```
✓ GA4 tracking all conversion events
✓ Hotjar recording sessions and heatmaps
✓ Case study page live with UBL content
✓ Mobile copy optimized for readability
✓ Blog template created and functional
✓ All analytics working in production
✓ Lighthouse >90 on all pages
```

---

### Project Completion

```
┌─────────────────────────────────────────────────────────┐
│  FINAL COMPLETION CRITERIA                              │
├─────────────────────────────────────────────────────────┤
│  Technical:                                             │
│  ✓ All features deployed to production                  │
│  ✓ All tracking active (GA4, Hotjar)                    │
│  ✓ No console errors                                    │
│  ✓ Lighthouse >90 all key pages                         │
│  ✓ Mobile responsive on all devices                     │
│                                                         │
│  Business:                                              │
│  ✓ Calendly bookings increasing                         │
│  ✓ Lead magnet downloads >10/week                       │
│  ✓ Newsletter signups >10/week                          │
│  ✓ Bounce rate <50%                                     │
│                                                         │
│  ROI:                                                   │
│  ✓ 5+ qualified bookings per month                      │
│  ✓ Positive ROI within 60 days                          │
│  ✓ Score: 100/100                                       │
└─────────────────────────────────────────────────────────┘
```

---

## 18. Visual Architecture Diagram

```
┌───────────────────────────────────────────────────────────────────┐
│                     FLOWMATRIX AI WEBSITE                         │
│                      SITE ARCHITECTURE                            │
└───────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  HOMEPAGE (/)                                                   │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────┐                    │
│  │ ICP Toggle: [Construction] [Home Service] │                  │
│  └─────────────────────────────────────────┘                    │
│                     ↓                                           │
│  ┌─────────────────────────────────────────┐                    │
│  │ Hero (Dynamic based on ICP)              │                   │
│  │ - Headline                               │                   │
│  │ - Subheadline                            │                   │
│  │ - CTA Buttons                            │                   │
│  │ - Hero Image (WebP)                      │                   │
│  └─────────────────────────────────────────┘                    │
│                     ↓                                           │
│  ┌─────────────────────────────────────────┐                    │
│  │ ICP Pain Point Section                   │                   │
│  │ - 3 Pain Points (Construction)           │                   │
│  │ - 3 Pain Points (Home Service)           │                   │
│  │ - CTA to Landing Pages                   │                   │
│  └─────────────────────────────────────────┘                    │
│                     ↓                                           │
│  ┌─────────────────────────────────────────┐                    │
│  │ Proof Section (UBL Metrics)              │                   │
│  │ [150+ Hrs] [$3,500+] [$10K-$20K+]        │                   │
│  └─────────────────────────────────────────┘                    │
│                     ↓                                           │
│  ┌─────────────────────────────────────────┐                    │
│  │ Offer Funnel Graphic                     │                   │
│  │ Consultation → Audit → Pilot → Partner   │                   │
│  └─────────────────────────────────────────┘                    │
│                     ↓                                           │
│  ┌─────────────────────────────────────────┐                    │
│  │ Founder Badge                            │                   │
│  │ (Solo founder, D1 Hockey, Colgate '26)   │                   │
│  └─────────────────────────────────────────┘                    │
│                     ↓                                           │
│  ┌─────────────────────────────────────────┐                    │
│  │ Final CTA Section                        │                   │
│  └─────────────────────────────────────────┘                    │
└─────────────────────────────────────────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         ↓                       ↓
┌──────────────────┐    ┌──────────────────┐
│ /construction    │    │ /home-service    │
├──────────────────┤    ├──────────────────┤
│ • Hero           │    │ • Hero           │
│ • Pain Points    │    │ • Pain Points    │
│ • Solutions      │    │ • Solutions      │
│ • UBL Case Study │    │ • UBL Case Study │
│ • Offer Funnel   │    │ • Offer Funnel   │
│ • Pricing        │    │ • Pricing        │
│ • Final CTA      │    │ • Final CTA      │
└──────────────────┘    └──────────────────┘
```

---

## 19. Conversion Funnel Flow

```
┌───────────────────────────────────────────────────────────────────┐
│                   USER CONVERSION JOURNEY                         │
└───────────────────────────────────────────────────────────────────┘

VISITOR LANDS ON HOMEPAGE
         │
         ↓
    ┌────────────────────┐
    │ Sees ICP Toggle    │
    │ Selects Industry   │
    └────────────────────┘
         │
         ↓
    ┌────────────────────┐
    │ Reads Hero         │
    │ (ICP-specific)     │
    └────────────────────┘
         │
         ├─────────────────────┬─────────────────────┐
         ↓                     ↓                     ↓
   ┌──────────┐         ┌──────────┐         ┌──────────┐
   │ Option 1 │         │ Option 2 │         │ Option 3 │
   │ Clicks   │         │ Scrolls  │         │ Scrolls  │
   │ CTA      │         │ to Pain  │         │ 60% and  │
   │ Button   │         │ Points   │         │ sees     │
   └──────────┘         └──────────┘         │ Lead     │
         │                    │               │ Magnet   │
         │                    ↓               └──────────┘
         │             ┌────────────┐               │
         │             │ Resonates  │               │
         │             │ with Pain  │               │
         │             │ Points     │               │
         │             └────────────┘               │
         │                    │                     │
         │                    ↓                     │
         │             ┌────────────┐               │
         │             │ Clicks CTA │               │
         │             │ to Landing │               │
         │             │ Page       │               │
         │             └────────────┘               │
         │                    │                     │
         │                    ↓                     │
         │             ┌────────────┐               │
         │             │ Reads Case │               │
         │             │ Study +    │               │
         │             │ Pricing    │               │
         │             └────────────┘               │
         │                    │                     │
         └────────────────────┴─────────────────────┘
                              │
                              ↓
                     ┌────────────────┐
                     │ Books Free     │
                     │ Diagnostic     │
                     │ (Calendly)     │
                     └────────────────┘
                              │
                              ↓
                     ┌────────────────┐
                     │ CONVERSION!    │
                     │ (Qualified     │
                     │  Lead)         │
                     └────────────────┘
```

---

## 20. Analytics Events Map

```
┌───────────────────────────────────────────────────────────────────┐
│                     GA4 EVENT TRACKING MAP                        │
└───────────────────────────────────────────────────────────────────┘

EVENT: page_view (Auto-tracked by GA4)
├─ Trigger: Every page load
├─ Parameters: page_location, page_title, page_referrer
└─ Use: Track traffic, bounce rate, session duration

EVENT: icp_toggle_click
├─ Trigger: User clicks Construction or Home Service toggle
├─ Parameters: icp_selection (construction/home_service)
└─ Use: Understand which ICP is more popular

EVENT: cta_click
├─ Trigger: User clicks any CTA button
├─ Parameters: cta_text, cta_location, destination_url
└─ Use: Track which CTAs convert best

EVENT: calendly_booking
├─ Trigger: User clicks Calendly link
├─ Parameters: source_page, icp_context
└─ Use: PRIMARY CONVERSION METRIC

EVENT: lead_magnet_shown
├─ Trigger: Lead magnet modal appears
├─ Parameters: scroll_depth, time_on_page
└─ Use: Understand when users are most engaged

EVENT: lead_magnet_download
├─ Trigger: User submits email for PDF
├─ Parameters: email (hashed), source_page
└─ Use: Track lead generation

EVENT: newsletter_signup
├─ Trigger: User signs up for newsletter
├─ Parameters: source_page, source_component
└─ Use: Track email list growth

EVENT: tally_form_submit
├─ Trigger: User submits Tally form
├─ Parameters: form_id, source_page
└─ Use: Track form conversions

EVENT: chat_widget_shown
├─ Trigger: CONVOCORE widget appears
├─ Parameters: trigger_type (timer/scroll)
└─ Use: Optimize chat widget timing

EVENT: landing_page_view
├─ Trigger: User views /construction or /home-service
├─ Parameters: icp_type, referrer
└─ Use: Track landing page performance
```

---

## 21. Component Dependency Map

```
┌───────────────────────────────────────────────────────────────────┐
│                  COMPONENT DEPENDENCY TREE                        │
└───────────────────────────────────────────────────────────────────┘

Index.tsx (Homepage)
├─ Navigation.tsx (Updated - Sticky)
├─ ICPToggle.tsx (NEW)
├─ HeroWithICP.tsx (NEW)
│  └─ Uses: icp state from ICPToggle
├─ ICPPainPointSection.tsx (NEW)
│  └─ Uses: icp state from ICPToggle
├─ ProofSection.tsx (NEW)
│  └─ ProofCard.tsx (NEW) [Used 3x]
├─ OfferFunnelGraphic.tsx (NEW)
├─ FounderBadge.tsx (NEW)
├─ LeadMagnetModal.tsx (NEW)
│  └─ Calls: Supabase newsletter function
└─ Footer.tsx (Updated)
   └─ TrustBadges.tsx (NEW)

Construction.tsx (Landing Page)
├─ LandingPageHero.tsx (NEW - Reusable)
│  └─ Prop: icp="construction"
├─ PainPointCards.tsx (NEW - Reusable)
│  └─ Prop: icp="construction"
├─ OfferFunnel.tsx (NEW - Reusable)
└─ GuaranteeBadge.tsx (NEW)

HomeService.tsx (Landing Page)
├─ LandingPageHero.tsx (Reused)
│  └─ Prop: icp="home_service"
├─ PainPointCards.tsx (Reused)
│  └─ Prop: icp="home_service"
├─ OfferFunnel.tsx (Reused)
└─ GuaranteeBadge.tsx (Reused)

Pricing.tsx (Updated)
└─ GuaranteeBadge.tsx (Added)

CaseStudy.tsx (NEW - Phase 3)
└─ Standalone page, no new components

Blog.tsx (NEW - Phase 3)
└─ BlogPost.tsx (NEW)
```

---

**END OF PRD v1.0**

**Next Steps:**
1. Save this file as `/flowmatrixai/PRD.md`
2. Begin Phase 1, Sprint 1.1: Homepage Hero with ICP Toggle
3. Reference sections as needed throughout implementation
4. Use checklists in Section 10 for testing after each phase

**Estimated Timeline:**
- Phase 1: Week 1 (22 hours) → 85/100
- Phase 2: Week 2 (16 hours) → 95/100
- Phase 3: Week 3 (14 hours) → 100/100
- Phase 4: Week 4 (10 hours) → QA & Launch

**Total: 52-62 hours to 100/100 score**
