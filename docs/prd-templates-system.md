# PRD: FlowMatrix AI Templates & Resources System

**Version:** 1.0
**Last Updated:** 2026-01-03
**Status:** Draft
**Owner:** FlowMatrix AI Development Team

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture Diagram](#2-architecture-diagram)
3. [Database Schema](#3-database-schema)
4. [Row Level Security (RLS) Policies](#4-row-level-security-rls-policies)
5. [Content Types & CTA Mapping](#5-content-types--cta-mapping)
6. [Design System Reference](#6-design-system-reference)
7. [Component Hierarchy](#7-component-hierarchy)
8. [User Flows](#8-user-flows)
9. [ClickUp Integration](#9-clickup-integration)
10. [API Endpoints](#10-api-endpoints)
11. [Build Phases](#11-build-phases)
12. [Success Criteria](#12-success-criteria)
13. [Technical Constraints](#13-technical-constraints)
14. [Future Considerations](#14-future-considerations)

---

## 1. Project Overview

### 1.1 Project Summary

**Project Name:** FlowMatrix AI Templates & Resources System
**Primary URL:** `flowmatrixai.com/templates` (landing page)
**Detail URLs:** `flowmatrixai.com/templates/[slug]` (individual template pages)
**Business Goal:** Lead generation through gated content
**Key Requirement:** Email capture required for ALL deliverables

### 1.2 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 + Vite + TypeScript | Existing FlowMatrix site architecture |
| Styling | Tailwind CSS | Consistent with site design system |
| Database | Supabase (PostgreSQL) | Data storage + RLS security |
| Automation | n8n | ClickUp → Supabase workflow |
| Forms | ClickUp Forms | Template submission by team |
| Hosting | Vercel | Existing deployment platform |

### 1.3 Core Features

1. **Templates Landing Page** - Filterable grid of all published templates
2. **Template Detail Pages** - Individual pages with video + gated deliverables
3. **Email Gate System** - Capture emails before revealing access
4. **Content Management** - Team submits via ClickUp, auto-syncs to Supabase
5. **Analytics Tracking** - Track views and email captures

---

## 2. Architecture Diagram

### 2.1 Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CONTENT SUBMISSION FLOW                       │
└─────────────────────────────────────────────────────────────────────┘

  ┌──────────────┐
  │  Team Member │
  └──────┬───────┘
         │
         │ (1) Submits form
         ▼
  ┌──────────────┐
  │ ClickUp Form │
  │  (Builder,   │
  │   Title,     │
  │   Video,     │
  │   Type, etc) │
  └──────┬───────┘
         │
         │ (2) Webhook triggers
         ▼
  ┌──────────────┐
  │ n8n Workflow │
  │  - Extract   │
  │    YouTube   │
  │    ID        │
  │  - Generate  │
  │    slug      │
  │  - Transform │
  │    data      │
  └──────┬───────┘
         │
         │ (3) INSERT into templates
         ▼
  ┌──────────────┐
  │  Supabase    │
  │  templates   │
  │  table       │
  │  (draft)     │
  └──────┬───────┘
         │
         │ (4) Admin reviews & publishes
         ▼
  ┌──────────────┐
  │  status =    │
  │ 'published'  │
  └──────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                        USER INTERACTION FLOW                         │
└─────────────────────────────────────────────────────────────────────┘

  ┌──────────────┐
  │   Visitor    │
  └──────┬───────┘
         │
         │ (1) Visits /templates
         ▼
  ┌─────────────────────┐
  │ React Frontend      │
  │ - Fetch published   │
  │   templates         │
  │ - Display grid      │
  │ - Filter by type    │
  └──────┬──────────────┘
         │
         │ (2) Click template card
         ▼
  ┌─────────────────────┐
  │ /templates/[slug]   │
  │ - YouTube embed     │
  │ - Description       │
  │ - Email gate        │
  └──────┬──────────────┘
         │
         │ (3) Check localStorage
         ▼
  ┌─────────────────────┐
  │ Email exists?       │
  ├─────────┬───────────┤
  │   NO    │    YES    │
  ▼         │           ▼
Show        │        Show
Email       │        Deliverable
Form        │        CTA
  │         │           │
  │         │           │
  ▼         │           │
Submit      │           │
Email       │           │
  │         │           │
  └─────────┴───────────┘
         │
         │ (4) POST to Supabase
         ▼
  ┌─────────────────────┐
  │ email_captures      │
  │ table               │
  └─────────────────────┘
         │
         │ (5) Save to localStorage
         ▼
  ┌─────────────────────┐
  │ Unlock deliverable  │
  │ - Download link     │
  │ - Demo access       │
  │ - Discount code     │
  └─────────────────────┘
```

### 2.2 Security Boundaries

```
┌────────────────────────────────────────┐
│         PUBLIC ACCESS (anon)           │
│  - Read published templates            │
│  - Insert email_captures               │
│  - Insert template_views               │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│      SERVICE ROLE ONLY (admin)         │
│  - Read/Write drafts                   │
│  - Update template status              │
│  - Read email_captures analytics       │
│  - Access other Supabase tables        │
└────────────────────────────────────────┘
```

---

## 3. Database Schema

### 3.1 Table: `templates`

**Purpose:** Store all template/resource metadata

```sql
CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  youtube_url TEXT NOT NULL,
  youtube_id TEXT NOT NULL,
  thumbnail_url TEXT,
  deliverable_type TEXT NOT NULL CHECK (deliverable_type IN ('template', 'demo', 'document', 'discount', 'tool', 'course')),
  deliverable_url TEXT,
  discount_code TEXT,
  discount_expiry TIMESTAMPTZ,
  tools_used TEXT[],
  labels TEXT[],
  builders TEXT[],
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  published_at TIMESTAMPTZ
);

-- Indexes for performance
CREATE INDEX idx_templates_status ON templates(status);
CREATE INDEX idx_templates_slug ON templates(slug);
CREATE INDEX idx_templates_deliverable_type ON templates(deliverable_type);
CREATE INDEX idx_templates_labels ON templates USING GIN(labels);
CREATE INDEX idx_templates_tools_used ON templates USING GIN(tools_used);

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_templates_updated_at
BEFORE UPDATE ON templates
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Auto-set published_at when status changes to published
CREATE OR REPLACE FUNCTION set_published_at()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'published' AND OLD.status != 'published' THEN
    NEW.published_at = now();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_templates_published_at
BEFORE UPDATE ON templates
FOR EACH ROW
EXECUTE FUNCTION set_published_at();
```

**Column Details:**

| Column | Type | Constraints | Description | Example |
|--------|------|-------------|-------------|---------|
| `id` | UUID | PK, auto-generated | Unique identifier | `550e8400-e29b-41d4-a716-446655440000` |
| `slug` | TEXT | UNIQUE, NOT NULL | URL-safe identifier | `email-automation-template` |
| `title` | TEXT | NOT NULL | Display title | "Email Automation Template" |
| `description` | TEXT | NOT NULL | Full description (supports markdown) | "Automate your email workflows..." |
| `youtube_url` | TEXT | NOT NULL | Full YouTube URL | `https://www.youtube.com/watch?v=ABC123` |
| `youtube_id` | TEXT | NOT NULL | Extracted video ID | `ABC123` |
| `thumbnail_url` | TEXT | nullable | Custom thumbnail URL (Google Drive) | `https://drive.google.com/...` |
| `deliverable_type` | TEXT | ENUM, NOT NULL | Type of deliverable | `template`, `demo`, `document`, `discount`, `tool`, `course` |
| `deliverable_url` | TEXT | nullable | URL to gated content | `https://drive.google.com/...` |
| `discount_code` | TEXT | nullable | Discount code (only for type=discount) | `FLOW25OFF` |
| `discount_expiry` | TIMESTAMPTZ | nullable | Code expiration date | `2026-12-31 23:59:59+00` |
| `tools_used` | TEXT[] | nullable | Array of tools/integrations | `{n8n, Supabase, OpenAI}` |
| `labels` | TEXT[] | nullable | Filter tags | `{automation, CRM, email}` |
| `builders` | TEXT[] | nullable | Team member names | `{Sebastian, Dom}` |
| `status` | TEXT | ENUM, default 'draft' | Visibility status | `draft`, `published`, `archived` |
| `created_at` | TIMESTAMPTZ | auto-generated | Creation timestamp | `2026-01-03 10:00:00+00` |
| `updated_at` | TIMESTAMPTZ | auto-updated | Last modification timestamp | `2026-01-03 15:30:00+00` |
| `published_at` | TIMESTAMPTZ | auto-set | When published | `2026-01-03 16:00:00+00` |

**Business Rules:**
- `slug` must be unique and URL-safe (lowercase, hyphens only)
- `youtube_id` extracted automatically from `youtube_url` by n8n
- `thumbnail_url` optional, falls back to YouTube default thumbnail
- `deliverable_url` required for all types except `discount`
- `discount_code` and `discount_expiry` only relevant when `deliverable_type = 'discount'`
- `status = 'draft'` by default, invisible to public until `status = 'published'`
- `published_at` automatically set when status changes to 'published'

---

### 3.2 Table: `email_captures`

**Purpose:** Track all email captures for lead generation

```sql
CREATE TABLE email_captures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  template_id UUID NOT NULL REFERENCES templates(id) ON DELETE CASCADE,
  source_url TEXT,
  captured_at TIMESTAMPTZ DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Indexes
CREATE INDEX idx_email_captures_email ON email_captures(email);
CREATE INDEX idx_email_captures_template_id ON email_captures(template_id);
CREATE INDEX idx_email_captures_captured_at ON email_captures(captured_at DESC);

-- Composite index for analytics queries
CREATE INDEX idx_email_captures_template_email ON email_captures(template_id, email);
```

**Column Details:**

| Column | Type | Constraints | Description | Example |
|--------|------|-------------|-------------|---------|
| `id` | UUID | PK, auto-generated | Unique identifier | `550e8400-e29b-41d4-a716-446655440000` |
| `email` | TEXT | NOT NULL | Captured email address | `user@example.com` |
| `template_id` | UUID | FK → templates.id, NOT NULL | Which template triggered capture | `550e8400-...` |
| `source_url` | TEXT | nullable | Full page URL where captured | `https://flowmatrixai.com/templates/email-automation` |
| `captured_at` | TIMESTAMPTZ | auto-generated | Capture timestamp | `2026-01-03 10:00:00+00` |
| `ip_address` | TEXT | nullable | User IP for analytics | `192.168.1.1` |
| `user_agent` | TEXT | nullable | Browser/device info | `Mozilla/5.0...` |

**Business Rules:**
- Multiple captures of same email for different templates = allowed (track all conversions)
- Same email for same template multiple times = allowed (edge case: user clears localStorage)
- No email validation beyond basic format check
- CASCADE delete: If template deleted, email captures also deleted

---

### 3.3 Table: `template_views`

**Purpose:** Analytics tracking for template page views

```sql
CREATE TABLE template_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID NOT NULL REFERENCES templates(id) ON DELETE CASCADE,
  viewed_at TIMESTAMPTZ DEFAULT now(),
  source TEXT,
  ip_address TEXT,
  user_agent TEXT
);

-- Indexes
CREATE INDEX idx_template_views_template_id ON template_views(template_id);
CREATE INDEX idx_template_views_viewed_at ON template_views(viewed_at DESC);
```

**Column Details:**

| Column | Type | Constraints | Description | Example |
|--------|------|-------------|-------------|---------|
| `id` | UUID | PK, auto-generated | Unique identifier | `550e8400-...` |
| `template_id` | UUID | FK → templates.id, NOT NULL | Template being viewed | `550e8400-...` |
| `viewed_at` | TIMESTAMPTZ | auto-generated | View timestamp | `2026-01-03 10:00:00+00` |
| `source` | TEXT | nullable | Referrer URL | `https://google.com` |
| `ip_address` | TEXT | nullable | User IP | `192.168.1.1` |
| `user_agent` | TEXT | nullable | Browser/device info | `Mozilla/5.0...` |

**Business Rules:**
- One view record per page load (simple analytics)
- No deduplication (multiple views from same user = multiple records)
- Used for funnel analysis: views → email captures conversion rate

---

## 4. Row Level Security (RLS) Policies

### 4.1 Security Context

**CRITICAL:** FlowMatrix AI's Supabase instance contains sensitive business data (invoices, client data, etc.). The templates system must be isolated with strict RLS policies.

**Access Levels:**
- **Anonymous (anon):** Public website visitors
- **Service Role:** Server-side operations, admin access

---

### 4.2 Table: `templates` RLS Policies

```sql
-- Enable RLS
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public can read ONLY published templates
CREATE POLICY "Allow public read access to published templates"
ON templates
FOR SELECT
TO anon
USING (status = 'published');

-- Policy 2: Service role has full access (for admin operations)
CREATE POLICY "Allow service role full access"
ON templates
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Policy 3: Authenticated users can read published (if you add auth later)
CREATE POLICY "Allow authenticated read access to published templates"
ON templates
FOR SELECT
TO authenticated
USING (status = 'published');
```

**Verification:**
- Test: Anonymous user tries `SELECT * FROM templates WHERE status = 'draft'` → Returns empty
- Test: Anonymous user tries `SELECT * FROM templates WHERE status = 'published'` → Returns published templates
- Test: Anonymous user tries `UPDATE templates SET title = 'hack'` → Permission denied

---

### 4.3 Table: `email_captures` RLS Policies

```sql
-- Enable RLS
ALTER TABLE email_captures ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public can INSERT (capture emails)
CREATE POLICY "Allow public insert for email captures"
ON email_captures
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy 2: Service role has full access (for analytics)
CREATE POLICY "Allow service role full access to email captures"
ON email_captures
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Policy 3: Block public SELECT (no reading other users' emails)
-- (Implicit: no SELECT policy for anon = SELECT blocked)
```

**Verification:**
- Test: Anonymous user tries `INSERT INTO email_captures (email, template_id) VALUES (...)` → Success
- Test: Anonymous user tries `SELECT * FROM email_captures` → Permission denied
- Test: Service role tries `SELECT * FROM email_captures` → Success

---

### 4.4 Table: `template_views` RLS Policies

```sql
-- Enable RLS
ALTER TABLE template_views ENABLE ROW LEVEL SECURITY;

-- Policy 1: Public can INSERT (track views)
CREATE POLICY "Allow public insert for template views"
ON template_views
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy 2: Service role has full access (for analytics)
CREATE POLICY "Allow service role full access to template views"
ON template_views
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
```

**Verification:**
- Test: Anonymous user tries `INSERT INTO template_views (template_id) VALUES (...)` → Success
- Test: Anonymous user tries `SELECT * FROM template_views` → Permission denied

---

### 4.5 Additional Security Measures

**Environment Variables:**
- `VITE_SUPABASE_URL`: Public Supabase URL (safe to expose)
- `VITE_SUPABASE_ANON_KEY`: Public anon key (RLS enforced)
- `SUPABASE_SERVICE_ROLE_KEY`: Server-side only (NEVER in frontend)

**Frontend Client:**
```typescript
// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// This client automatically uses anon role, RLS enforced
```

**n8n Workflow:**
- Use `SUPABASE_SERVICE_ROLE_KEY` for INSERT operations
- Bypass RLS to insert draft templates

---

## 5. Content Types & CTA Mapping

### 5.1 Content Type Definitions

| Type | Description | Use Case | CTA Button Text | CTA Behavior | Deliverable URL Required |
|------|-------------|----------|-----------------|--------------|--------------------------|
| `template` | Downloadable file (Notion, Excel, PDF, etc.) | Workflow templates, spreadsheets | "Download Template" | Download file after email | ✅ Required |
| `demo` | Live demo or interactive tool | App demos, calculators | "Access Demo" | Redirect to demo URL after email | ✅ Required |
| `document` | Educational content (PDF, guide, checklist) | Ebooks, whitepapers | "Get Document" | Download/redirect after email | ✅ Required |
| `discount` | Discount code reveal | Promo codes for services | "Claim Discount" | Reveal code immediately after email | ❌ Not required (uses `discount_code` field) |
| `tool` | Access to a software tool | SaaS trials, utilities | "Access Tool" | Redirect to tool after email | ✅ Required |
| `course` | Educational course or tutorial series | Video courses, learning paths | "Start Learning" | Redirect to course after email | ✅ Required |

### 5.2 CTA Component Logic

```typescript
// CTA button text mapping
const CTA_BUTTON_TEXT: Record<DeliverableType, string> = {
  template: 'Download Template',
  demo: 'Access Demo',
  document: 'Get Document',
  discount: 'Claim Discount',
  tool: 'Access Tool',
  course: 'Start Learning',
};

// CTA behavior after email submission
const handleCTAClick = (type: DeliverableType, deliverableUrl: string, discountCode?: string) => {
  switch (type) {
    case 'template':
    case 'document':
      // Download file
      window.open(deliverableUrl, '_blank');
      break;
    case 'demo':
    case 'tool':
    case 'course':
      // Redirect to URL
      window.location.href = deliverableUrl;
      break;
    case 'discount':
      // Display code in modal or copy to clipboard
      copyToClipboard(discountCode);
      toast.success(`Discount code copied: ${discountCode}`);
      break;
  }
};
```

### 5.3 Discount Type Special Handling

**Database Fields:**
- `discount_code`: The actual code (e.g., `FLOW25OFF`)
- `discount_expiry`: Optional expiration date
- `deliverable_url`: NOT required for discount type

**UI Display:**
```tsx
{type === 'discount' && (
  <div className="bg-card border border-border rounded-lg p-6">
    <h3 className="text-xl font-bold text-white mb-2">Your Discount Code</h3>
    <div className="flex items-center gap-3">
      <code className="text-2xl font-mono text-accent">{discountCode}</code>
      <Button onClick={() => copyToClipboard(discountCode)}>
        Copy Code
      </Button>
    </div>
    {discountExpiry && (
      <p className="text-sm text-muted-foreground mt-2">
        Expires: {new Date(discountExpiry).toLocaleDateString()}
      </p>
    )}
  </div>
)}
```

---

## 6. Design System Reference

### 6.1 Color Tokens

**FlowMatrix AI Design System (Black/White/Gold)**

```css
/* CSS Variables (from src/index.css) */
:root {
  --background: 0 0% 0%;           /* #000000 - Pure black background */
  --foreground: 0 0% 100%;         /* #FFFFFF - Pure white text */
  --card: 0 0% 4%;                 /* #0A0A0A - Elevated surfaces */
  --card-foreground: 0 0% 100%;    /* #FFFFFF - Text on cards */
  --border: 0 0% 15%;              /* #262626 - Borders */
  --muted: 0 0% 64%;               /* #A3A3A3 - Muted text */
  --muted-foreground: 0 0% 64%;    /* #A3A3A3 - Secondary text */
  --accent: 43 59% 55%;            /* #C9A227 - Warm gold (CTA, highlights) */
  --accent-foreground: 0 0% 0%;    /* #000000 - Text on accent */
  --radius: 0.5rem;                /* 8px - Border radius */
}
```

**Tailwind Classes:**
```css
bg-black          → #000000 (backgrounds)
bg-card           → #0A0A0A (cards, elevated surfaces)
text-white        → #FFFFFF (primary text)
text-foreground   → #FFFFFF (theme-aware text)
text-muted-foreground → #A3A3A3 (secondary text)
border-border     → #262626 (borders)
bg-accent         → #C9A227 (gold - CTAs, highlights)
text-accent       → #C9A227 (gold text)
hover:bg-accent/90 → Darker gold on hover
```

### 6.2 Typography

**Font Family:**
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Type Scale:**
| Element | Class | Size | Weight |
|---------|-------|------|--------|
| Page Heading | `text-4xl md:text-5xl lg:text-6xl` | 36px / 48px / 60px | Bold |
| Section Heading | `text-3xl md:text-4xl` | 30px / 36px | Bold |
| Card Title | `text-xl md:text-2xl` | 20px / 24px | Bold |
| Body | `text-base` | 16px | Normal |
| Small | `text-sm` | 14px | Normal |
| Muted | `text-sm text-muted-foreground` | 14px | Normal |

### 6.3 Spacing

**Padding/Margin Scale:**
```css
p-4  → 16px
p-6  → 24px
p-8  → 32px
p-10 → 40px
p-12 → 48px
```

**Section Padding:**
```css
py-16 md:py-20 lg:py-24  → Vertical section spacing (64px / 80px / 96px)
px-6 md:px-8 lg:px-12    → Horizontal page padding (24px / 32px / 48px)
```

### 6.4 Components

**Button Styles:**
```tsx
// Primary CTA Button
<Button className="bg-accent hover:bg-accent/90 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
  Download Template
</Button>

// Secondary Button
<Button variant="outline" className="border-border hover:bg-card">
  Learn More
</Button>

// Ghost Button
<Button variant="ghost" className="hover:bg-card">
  Cancel
</Button>
```

**Card Styles:**
```tsx
<div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
  {/* Card content */}
</div>
```

**Input Styles:**
```tsx
<Input
  type="email"
  className="bg-black border-border focus:border-accent focus:ring-accent"
  placeholder="your@email.com"
/>
```

### 6.5 Animation & Transitions

**Transition Classes:**
```css
transition-colors duration-300  → Smooth color transitions
transition-all duration-300     → All properties
hover:scale-105                 → Subtle hover scale
```

**Animation Examples:**
```tsx
// Card hover effect
className="transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"

// Button hover
className="transition-colors duration-200 hover:bg-accent/90"
```

---

## 7. Component Hierarchy

### 7.1 Page: `/templates` (Landing Page)

**Component Tree:**
```
TemplatesLandingPage.tsx
├── Helmet (SEO meta tags)
├── HeroSection
│   ├── Heading: "Templates & Resources"
│   ├── Subheading: "Free automation templates..."
│   └── Description text
├── FilterBar
│   ├── TypeFilter (dropdown or tabs)
│   │   └── Options: All, Template, Demo, Document, Discount, Tool, Course
│   └── LabelFilter (multi-select)
│       └── Dynamic options from database (unique labels)
├── TemplateGrid
│   ├── TemplateCard (×n - mapped from database)
│   │   ├── ThumbnailImage (YouTube or custom)
│   │   ├── Title
│   │   ├── Description (truncated, 2 lines)
│   │   ├── BadgeRow
│   │   │   ├── TypeBadge (e.g., "Template")
│   │   │   └── LabelBadges (e.g., "Automation", "CRM")
│   │   └── Link → /templates/[slug]
│   └── EmptyState (if no templates match filters)
└── FooterCTA
    ├── Heading: "Want to submit a template?"
    ├── Description: "Share your automation..."
    └── Button → ClickUp form link
```

**Component Files:**
```
src/pages/TemplatesLanding.tsx          // Main landing page
src/components/templates/
├── HeroSection.tsx                     // Hero section
├── FilterBar.tsx                       // Filter controls
├── TemplateGrid.tsx                    // Grid container
├── TemplateCard.tsx                    // Individual card
└── FooterCTA.tsx                       // Bottom CTA section
```

---

### 7.2 Page: `/templates/[slug]` (Detail Page)

**Component Tree:**
```
TemplateDetailPage.tsx
├── Helmet (dynamic SEO meta tags)
├── BackLink
│   └── Link: "← Back to Templates" → /templates
├── VideoSection
│   ├── YouTubeEmbed (ALWAYS visible, not gated)
│   │   └── iframe: youtube.com/embed/{youtube_id}
│   └── Caption: Video description (optional)
├── ContentSection
│   ├── Header
│   │   ├── TypeBadge
│   │   ├── Title (h1)
│   │   └── BuilderInfo ("Built by: Sebastian, Dom")
│   ├── Description (markdown support)
│   ├── ToolsUsedSection
│   │   ├── Heading: "Tools & Integrations"
│   │   └── BadgeList (e.g., "n8n", "Supabase", "OpenAI")
│   └── LabelsSection
│       ├── Heading: "Tags"
│       └── BadgeList (e.g., "Automation", "Email", "CRM")
├── EmailGateSection
│   ├── ConditionalRender: Check localStorage for email
│   ├── [IF NO EMAIL]
│   │   ├── GateHeading: "Get This [Type]"
│   │   ├── GateDescription: "Enter your email..."
│   │   └── EmailForm
│   │       ├── Input: email (type="email", required)
│   │       ├── SubmitButton: CTA_BUTTON_TEXT[type]
│   │       └── OnSubmit:
│   │           1. Validate email format
│   │           2. POST to Supabase email_captures
│   │           3. Save email to localStorage
│   │           4. Show DeliverableSection
│   └── [IF EMAIL EXISTS]
│       └── DeliverableSection (immediately visible)
└── DeliverableSection
    ├── SuccessMessage: "Check your email! (We sent a copy)"
    ├── ConditionalRender based on type:
    │   ├── [type = 'discount']
    │   │   ├── DiscountCodeDisplay
    │   │   │   ├── Code: {discount_code}
    │   │   │   ├── CopyButton
    │   │   │   └── ExpiryDate (if exists)
    │   └── [type != 'discount']
    │       └── CTAButton
    │           ├── Text: CTA_BUTTON_TEXT[type]
    │           ├── OnClick: handleCTAClick(type, deliverable_url)
    │           └── Icon: Download or ExternalLink
    └── SocialShare (optional)
        ├── "Share this resource:"
        └── ShareButtons (Twitter, LinkedIn, Copy Link)
```

**Component Files:**
```
src/pages/TemplateDetail.tsx            // Main detail page
src/components/templates/
├── BackLink.tsx                        // Navigation back
├── VideoSection.tsx                    // YouTube embed
├── ContentSection.tsx                  // Description + metadata
├── EmailGateSection.tsx                // Email capture form
├── DeliverableSection.tsx              // Post-email deliverable access
└── SocialShare.tsx                     // Share buttons (optional)
```

---

### 7.3 Shared Components

**Reusable Components:**
```
src/components/templates/shared/
├── TypeBadge.tsx                       // Content type badge
│   └── Props: { type: DeliverableType }
│   └── Renders: Colored badge with icon + label
├── LabelBadge.tsx                      // Tag/label badge
│   └── Props: { label: string }
│   └── Renders: Muted badge
├── ToolBadge.tsx                       // Tool/integration badge
│   └── Props: { tool: string }
│   └── Renders: Badge with tool icon (if available)
└── EmailInput.tsx                      // Styled email input
    └── Props: { value, onChange, onSubmit }
    └── Renders: Input + validation
```

**Badge Color Mapping:**
```typescript
const TYPE_BADGE_COLORS: Record<DeliverableType, string> = {
  template: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  demo: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  document: 'bg-green-500/10 text-green-400 border-green-500/20',
  discount: 'bg-accent/10 text-accent border-accent/20',
  tool: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  course: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
};
```

---

## 8. User Flows

### 8.1 Flow A: New Visitor (No Email Captured)

**Scenario:** First-time visitor discovers a template and wants the deliverable.

```
STEP 1: Discovery
┌─────────────────────────────────────────────────────────────┐
│ User lands on flowmatrixai.com/templates                    │
│ - Sees grid of template cards                               │
│ - Can filter by type (Template, Demo, etc.)                 │
│ - Can filter by labels (Automation, CRM, Email, etc.)       │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 2: Browse & Filter
┌─────────────────────────────────────────────────────────────┐
│ User applies filters:                                        │
│ - Type: "Template"                                          │
│ - Labels: "Automation" + "Email"                            │
│ → Grid updates to show matching templates only             │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 3: Select Template
┌─────────────────────────────────────────────────────────────┐
│ User clicks on "Email Automation Template" card             │
│ → Navigates to /templates/email-automation-template        │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 4: Watch Video (Ungated)
┌─────────────────────────────────────────────────────────────┐
│ Detail page loads:                                           │
│ - YouTube video is IMMEDIATELY visible (not gated)          │
│ - User watches demo/tutorial video                          │
│ - Scrolls down to see description, tools, labels            │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 5: Decision Point - Want Deliverable
┌─────────────────────────────────────────────────────────────┐
│ User scrolls to "Email Gate" section                        │
│ → System checks: localStorage.getItem('userEmail')         │
│ → Result: null (no email saved)                            │
│ → Displays: Email capture form                             │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 6: Email Submission
┌─────────────────────────────────────────────────────────────┐
│ User enters email: "user@example.com"                       │
│ User clicks: "Download Template" button                     │
│                                                             │
│ Frontend actions:                                           │
│ 1. Validate email format                                    │
│ 2. POST to Supabase:                                        │
│    {                                                        │
│      email: "user@example.com",                            │
│      template_id: "550e8400-...",                          │
│      source_url: window.location.href,                     │
│      ip_address: (detected),                               │
│      user_agent: navigator.userAgent                       │
│    }                                                        │
│ 3. On success:                                              │
│    - localStorage.setItem('userEmail', 'user@example.com') │
│    - Show success toast                                     │
│    - Hide email form                                        │
│    - Reveal deliverable section                            │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 7: Access Deliverable
┌─────────────────────────────────────────────────────────────┐
│ Deliverable section now visible:                            │
│ - Success message: "Check your email!"                      │
│ - CTA button: "Download Template"                          │
│                                                             │
│ User clicks CTA:                                            │
│ → If type = 'template': Opens deliverable_url in new tab   │
│ → File downloads from Google Drive                         │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 8: Future Visits (Email Remembered)
┌─────────────────────────────────────────────────────────────┐
│ User visits ANY template detail page                        │
│ → System checks: localStorage.getItem('userEmail')         │
│ → Result: "user@example.com" (email exists!)               │
│ → Behavior: Email form HIDDEN, deliverable CTA IMMEDIATELY │
│             visible (skip email capture)                    │
└─────────────────────────────────────────────────────────────┘
```

**Key Decisions:**
- ✅ Video is ALWAYS visible (builds trust, shows value)
- ✅ Email gate ONLY blocks deliverable access (not video)
- ✅ localStorage persists email across sessions (UX convenience)
- ✅ Email still captured in database even if localStorage exists (data integrity)

---

### 8.2 Flow B: Returning Visitor (Email in localStorage)

**Scenario:** User previously submitted email, returns to browse more templates.

```
STEP 1: Return to Site
┌─────────────────────────────────────────────────────────────┐
│ User navigates to /templates                                 │
│ → System checks: localStorage.getItem('userEmail')         │
│ → Result: "user@example.com" (previously captured)          │
│ → No action taken (landing page doesn't gate anything)     │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 2: Select New Template
┌─────────────────────────────────────────────────────────────┐
│ User clicks on "CRM Integration Demo" card                  │
│ → Navigates to /templates/crm-integration-demo             │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 3: Immediate Access
┌─────────────────────────────────────────────────────────────┐
│ Detail page loads:                                           │
│ → System checks: localStorage.getItem('userEmail')         │
│ → Result: "user@example.com" (EXISTS!)                      │
│                                                             │
│ Page behavior:                                              │
│ - Video section: Visible (as always)                        │
│ - Email gate section: HIDDEN                                │
│ - Deliverable section: IMMEDIATELY VISIBLE                  │
│   └── CTA button: "Access Demo" (clickable right away)     │
│                                                             │
│ User experience:                                            │
│ → No email form shown (already have email)                  │
│ → Can immediately access deliverable                        │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 4: Track Analytics (Backend)
┌─────────────────────────────────────────────────────────────┐
│ Even though email exists in localStorage, we STILL track:   │
│                                                             │
│ Option A (Recommended): Silent email capture               │
│ - On page load, POST to email_captures again               │
│ - Shows user accessed MULTIPLE templates (conversion data) │
│ - No form shown to user (seamless UX)                       │
│                                                             │
│ Option B (Simpler): Only track views                        │
│ - POST to template_views                                    │
│ - Don't duplicate email_captures                            │
│ - User's email only captured once per template             │
└─────────────────────────────────────────────────────────────┘
```

**Key Decisions:**
- ✅ **Recommended:** Capture email silently for analytics (shows multi-template engagement)
- ✅ localStorage prevents form re-display (better UX)
- ✅ User gets immediate access without friction

---

### 8.3 Flow C: Discount Code Type (Special Case)

**Scenario:** User accesses a discount code deliverable.

```
STEP 1-5: Same as Flow A
(User discovers template, watches video, sees email gate)

STEP 6: Email Submission
┌─────────────────────────────────────────────────────────────┐
│ User enters email, clicks "Claim Discount"                  │
│ → Email saved to database + localStorage                    │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
STEP 7: Discount Code Reveal
┌─────────────────────────────────────────────────────────────┐
│ Deliverable section displays:                               │
│                                                             │
│ ┌─────────────────────────────────────────────────────┐   │
│ │  🎉 Your Discount Code                              │   │
│ │                                                      │   │
│ │  ┌──────────────────────────────────────┐           │   │
│ │  │  FLOW25OFF                            │  [Copy]  │   │
│ │  └──────────────────────────────────────┘           │   │
│ │                                                      │   │
│ │  Expires: December 31, 2026                         │   │
│ │                                                      │   │
│ │  Apply this code at checkout to save 25%            │   │
│ └─────────────────────────────────────────────────────┘   │
│                                                             │
│ User clicks "Copy" button:                                  │
│ → Code copied to clipboard                                 │
│ → Toast: "Discount code copied: FLOW25OFF"                 │
└─────────────────────────────────────────────────────────────┘
```

**Key Differences:**
- ❌ No external URL (no `deliverable_url` required)
- ✅ Code displayed in-page (can't be accessed externally)
- ✅ Copy-to-clipboard functionality
- ✅ Expiry date shown (if `discount_expiry` exists)

---

### 8.4 Edge Cases & Error Handling

**Edge Case 1: User Clears localStorage**
```
Scenario: User previously submitted email, then clears browser data
→ localStorage.getItem('userEmail') returns null
→ System behavior: Shows email form again
→ User re-submits email
→ Database: Creates NEW email_captures record (duplicate email, same template)
→ Result: Allowed (shows re-engagement, not a problem)
```

**Edge Case 2: Invalid Email Format**
```
Scenario: User enters "notanemail" in email field
→ Frontend validation catches error before submission
→ Error message: "Please enter a valid email address"
→ Form submit button disabled until valid
```

**Edge Case 3: Network Error During Email Submission**
```
Scenario: Supabase request fails (network issue, timeout)
→ Frontend shows error toast: "Failed to save email. Please try again."
→ Email NOT saved to localStorage (only save on success)
→ User can retry submission
```

**Edge Case 4: Template Not Found**
```
Scenario: User navigates to /templates/invalid-slug
→ Supabase query returns no results
→ Page shows 404 state:
   - "Template not found"
   - Link back to /templates
```

**Edge Case 5: Draft Template Leaked URL**
```
Scenario: User somehow gets URL to draft template
→ RLS blocks SELECT where status != 'published'
→ Supabase returns empty result (same as Edge Case 4)
→ Page shows 404 (hides existence of draft)
```

---

## 9. ClickUp Integration

### 9.1 ClickUp Form Setup

**Form Purpose:** Allow FlowMatrix team to submit templates/resources via ClickUp form.

**Form Fields:**

| Field Name | Type | Required | Validation | Maps to DB Column |
|------------|------|----------|------------|-------------------|
| Builder(s) | Dropdown (multi-select) | ✅ | Options: Sebastian, Dom, Other | `builders[]` |
| Landing Page Title | Text | ✅ | Max 100 chars | `title` |
| Youtube URL | URL | ✅ | Must be youtube.com or youtu.be | `youtube_url`, `youtube_id` (extracted) |
| Thumbnail Link | URL | ❌ | Google Drive URL | `thumbnail_url` |
| Description | Long Text | ✅ | Max 1000 chars | `description` |
| Post Labels | Dropdown (multi-select) | ❌ | Custom options | `labels[]` |
| Deliverable Type | Dropdown (single) | ✅ | Options: Template, Demo, Document, Discount, Tool, Course | `deliverable_type` (lowercase) |
| URL end-point | Text | ❌ | If blank, auto-generate from title | `slug` |
| Deliverable URL | URL | Conditional | Required if type != Discount | `deliverable_url` |
| Discount Code | Text | Conditional | Required if type = Discount | `discount_code` |
| Discount Expiry | Date | ❌ | Only if type = Discount | `discount_expiry` |
| Tools Used + Integrations | Dropdown (multi-select) | ❌ | Custom options: n8n, Supabase, OpenAI, Make, Zapier, etc. | `tools_used[]` |

**Conditional Logic:**
- If `Deliverable Type` = "Discount":
  - Show: `Discount Code` (required)
  - Show: `Discount Expiry` (optional)
  - Hide: `Deliverable URL`
- If `Deliverable Type` != "Discount":
  - Show: `Deliverable URL` (required)
  - Hide: `Discount Code`, `Discount Expiry`

---

### 9.2 n8n Workflow Design

**Trigger:** ClickUp form submission webhook

**Workflow Steps:**

```
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: Webhook Trigger                                     │
│ - Listen for ClickUp form submission                        │
│ - Receive JSON payload with all form fields                 │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: Extract YouTube ID                                  │
│ - Input: youtube_url (e.g., "https://youtu.be/ABC123")      │
│ - Regex: Extract video ID                                   │
│   - Pattern 1: youtube.com/watch?v=([^&]+)                  │
│   - Pattern 2: youtu.be/([^?]+)                             │
│ - Output: youtube_id = "ABC123"                             │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: Generate Slug (if not provided)                     │
│ - Check: If URL end-point field is empty                    │
│ - If empty:                                                 │
│   - Take "Landing Page Title"                               │
│   - Convert to lowercase                                    │
│   - Replace spaces with hyphens                             │
│   - Remove special characters                               │
│   - Example: "Email Automation Template" → "email-automation-template" │
│ - Else: Use provided URL end-point as-is                    │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: Transform Data                                      │
│ - Map ClickUp fields to Supabase columns:                   │
│   {                                                         │
│     title: "Landing Page Title",                           │
│     slug: (from Step 3),                                   │
│     description: "Description",                             │
│     youtube_url: "Youtube URL",                             │
│     youtube_id: (from Step 2),                             │
│     thumbnail_url: "Thumbnail Link" || null,               │
│     deliverable_type: "Deliverable Type".toLowerCase(),    │
│     deliverable_url: "Deliverable URL" || null,            │
│     discount_code: "Discount Code" || null,                │
│     discount_expiry: "Discount Expiry" || null,            │
│     tools_used: ["Tools Used + Integrations"],             │
│     labels: ["Post Labels"],                                │
│     builders: ["Builder(s)"],                               │
│     status: "draft"  // Always start as draft              │
│   }                                                         │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 5: Insert into Supabase                                │
│ - Use Supabase node with SERVICE_ROLE_KEY                   │
│ - INSERT INTO templates (...)                               │
│ - Handle errors:                                            │
│   - Duplicate slug → Send Slack alert to team              │
│   - Other errors → Log to n8n error workflow               │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 6: Send Confirmation (Optional)                        │
│ - Send Slack message to #templates channel:                 │
│   "New template submitted: [Title]                          │
│    Status: Draft                                            │
│    Review: [Supabase dashboard link]"                       │
└─────────────────────────────────────────────────────────────┘
```

**n8n Node Configuration:**

1. **Webhook Node:**
   - Method: POST
   - Authentication: None (ClickUp webhook secret validated in n8n)
   - Response: 200 OK

2. **Function Node (Extract YouTube ID):**
```javascript
const url = $input.item.json.youtube_url;
let videoId = '';

// Pattern 1: youtube.com/watch?v=...
const match1 = url.match(/[?&]v=([^&]+)/);
if (match1) {
  videoId = match1[1];
}

// Pattern 2: youtu.be/...
const match2 = url.match(/youtu\.be\/([^?]+)/);
if (match2) {
  videoId = match2[1];
}

return { json: { youtube_id: videoId } };
```

3. **Function Node (Generate Slug):**
```javascript
const title = $input.item.json.landing_page_title;
const providedSlug = $input.item.json.url_endpoint;

let slug = providedSlug;
if (!slug) {
  slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-')          // Spaces to hyphens
    .replace(/-+/g, '-')           // Multiple hyphens to single
    .trim();
}

return { json: { slug } };
```

4. **Supabase Node:**
   - Operation: Insert
   - Table: templates
   - Authentication: Service Role Key (from env)
   - Data: Mapped from transformed object

---

### 9.3 Admin Review Process

**After n8n inserts template (status = 'draft'):**

1. **Team receives Slack notification**
   - Template title, slug, type
   - Link to Supabase dashboard to review

2. **Admin reviews in Supabase dashboard:**
   - Check title, description for typos
   - Verify YouTube video plays correctly
   - Test deliverable URL (if applicable)
   - Confirm labels/tools are correct

3. **Admin publishes:**
   - Update `status` from 'draft' to 'published'
   - Trigger automatically sets `published_at` timestamp
   - Template immediately visible on /templates

4. **Optional: Announce on social media**
   - Tweet/LinkedIn post with link to template
   - Email newsletter feature (if applicable)

---

## 10. API Endpoints

### 10.1 Supabase Auto-Generated REST API

**Base URL:** `https://[PROJECT_ID].supabase.co/rest/v1/`

**Authentication:**
- Header: `apikey: [SUPABASE_ANON_KEY]`
- Header: `Authorization: Bearer [SUPABASE_ANON_KEY]`

---

### 10.2 GET /templates (List Templates)

**Endpoint:** `GET /rest/v1/templates`

**Query Parameters:**
- `status=eq.published` - Only published templates (RLS enforced for anon)
- `select=*` - Select all columns
- `order=published_at.desc` - Sort by publish date (newest first)
- `deliverable_type=eq.template` - Filter by type
- `labels=cs.{automation}` - Filter by labels (contains)

**Example Request:**
```javascript
const { data, error } = await supabase
  .from('templates')
  .select('*')
  .eq('status', 'published')
  .order('published_at', { ascending: false });
```

**Example Response:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "slug": "email-automation-template",
    "title": "Email Automation Template",
    "description": "Automate your email workflows with this n8n template...",
    "youtube_url": "https://www.youtube.com/watch?v=ABC123",
    "youtube_id": "ABC123",
    "thumbnail_url": "https://drive.google.com/...",
    "deliverable_type": "template",
    "deliverable_url": "https://drive.google.com/...",
    "discount_code": null,
    "discount_expiry": null,
    "tools_used": ["n8n", "Gmail", "OpenAI"],
    "labels": ["automation", "email", "productivity"],
    "builders": ["Sebastian"],
    "status": "published",
    "created_at": "2026-01-03T10:00:00Z",
    "updated_at": "2026-01-03T10:00:00Z",
    "published_at": "2026-01-03T16:00:00Z"
  }
]
```

---

### 10.3 GET /templates?slug=eq.[slug] (Single Template)

**Endpoint:** `GET /rest/v1/templates?slug=eq.email-automation-template`

**Example Request:**
```javascript
const { data, error } = await supabase
  .from('templates')
  .select('*')
  .eq('slug', 'email-automation-template')
  .eq('status', 'published')
  .single(); // Expect single result
```

**Example Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "slug": "email-automation-template",
  "title": "Email Automation Template",
  // ... (same as list response)
}
```

**Error Cases:**
- Template not found: `{ data: null, error: { message: 'No rows found' } }`
- Draft template (RLS blocks): Same as not found (security by obscurity)

---

### 10.4 POST /email_captures (Save Email)

**Endpoint:** `POST /rest/v1/email_captures`

**Request Body:**
```json
{
  "email": "user@example.com",
  "template_id": "550e8400-e29b-41d4-a716-446655440000",
  "source_url": "https://flowmatrixai.com/templates/email-automation-template",
  "ip_address": "192.168.1.1",
  "user_agent": "Mozilla/5.0..."
}
```

**Example Request:**
```javascript
const { data, error } = await supabase
  .from('email_captures')
  .insert({
    email: 'user@example.com',
    template_id: templateId,
    source_url: window.location.href,
    ip_address: await fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => d.ip),
    user_agent: navigator.userAgent,
  });
```

**Example Response (Success):**
```json
{
  "data": [
    {
      "id": "660e8400-e29b-41d4-a716-446655440000",
      "email": "user@example.com",
      "template_id": "550e8400-e29b-41d4-a716-446655440000",
      "source_url": "https://flowmatrixai.com/templates/email-automation-template",
      "captured_at": "2026-01-03T17:00:00Z",
      "ip_address": "192.168.1.1",
      "user_agent": "Mozilla/5.0..."
    }
  ],
  "error": null
}
```

**Error Cases:**
- Invalid template_id (FK constraint): `{ error: { message: 'Foreign key violation' } }`
- RLS blocks read: User can INSERT but not SELECT (by design)

---

### 10.5 POST /template_views (Track View)

**Endpoint:** `POST /rest/v1/template_views`

**Request Body:**
```json
{
  "template_id": "550e8400-e29b-41d4-a716-446655440000",
  "source": "https://google.com",
  "ip_address": "192.168.1.1",
  "user_agent": "Mozilla/5.0..."
}
```

**Example Request:**
```javascript
const { error } = await supabase
  .from('template_views')
  .insert({
    template_id: templateId,
    source: document.referrer,
    ip_address: await fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => d.ip),
    user_agent: navigator.userAgent,
  });
```

**Note:** Fire-and-forget analytics (don't wait for response, use `.catch()` to handle silently)

---

## 11. Build Phases

### Phase 1: Supabase Setup (2-4 hours)

**Tasks:**
- [ ] Create Supabase project (if not exists)
- [ ] Create `templates` table with schema from Section 3.1
- [ ] Create `email_captures` table with schema from Section 3.2
- [ ] Create `template_views` table with schema from Section 3.3
- [ ] Create indexes for performance
- [ ] Create triggers (auto-update `updated_at`, auto-set `published_at`)
- [ ] Enable RLS on all 3 tables
- [ ] Create RLS policies from Section 4
- [ ] Test RLS policies with anon key
- [ ] Seed 3-5 test templates (status = 'published')
- [ ] Verify templates query works via Supabase dashboard

**Verification:**
```sql
-- Test RLS: Should return only published templates
SELECT * FROM templates; -- (using anon key)

-- Test email capture: Should succeed
INSERT INTO email_captures (email, template_id) VALUES ('test@example.com', '[template_id]');

-- Test view tracking: Should succeed
INSERT INTO template_views (template_id) VALUES ('[template_id]');
```

**Deliverables:**
- Supabase tables created and accessible
- RLS policies enforced
- Test data seeded

---

### Phase 2: Frontend Foundation (3-4 hours)

**Tasks:**
- [ ] Create routing in `src/App.tsx`:
  - `<Route path="/templates" element={<TemplatesLanding />} />`
  - `<Route path="/templates/:slug" element={<TemplateDetail />} />`
- [ ] Create page components:
  - `src/pages/TemplatesLanding.tsx`
  - `src/pages/TemplateDetail.tsx`
- [ ] Create Supabase client helper (if not exists):
  - `src/integrations/supabase/client.ts`
- [ ] Create TypeScript types:
  - `src/types/templates.ts` (DeliverableType, Template, EmailCapture)
- [ ] Test navigation: `/templates` and `/templates/test-slug`

**TypeScript Types:**
```typescript
// src/types/templates.ts
export type DeliverableType = 'template' | 'demo' | 'document' | 'discount' | 'tool' | 'course';

export interface Template {
  id: string;
  slug: string;
  title: string;
  description: string;
  youtube_url: string;
  youtube_id: string;
  thumbnail_url: string | null;
  deliverable_type: DeliverableType;
  deliverable_url: string | null;
  discount_code: string | null;
  discount_expiry: string | null;
  tools_used: string[];
  labels: string[];
  builders: string[];
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export interface EmailCapture {
  id: string;
  email: string;
  template_id: string;
  source_url: string | null;
  captured_at: string;
  ip_address: string | null;
  user_agent: string | null;
}
```

**Deliverables:**
- Routes functional (no 404s)
- Basic page shells render
- TypeScript types defined

---

### Phase 3: Landing Page (/templates) (4-6 hours)

**Tasks:**
- [ ] Build `HeroSection.tsx`:
  - Heading: "Templates & Resources"
  - Subheading: "Free automation templates, demos, and tools to accelerate your business."
- [ ] Build `FilterBar.tsx`:
  - Type filter dropdown (All, Template, Demo, Document, Discount, Tool, Course)
  - Label filter multi-select (dynamic from database)
- [ ] Build `TemplateGrid.tsx`:
  - Query Supabase for published templates
  - Apply client-side filters
  - Map to `TemplateCard` components
- [ ] Build `TemplateCard.tsx`:
  - Thumbnail (YouTube or custom)
  - Title
  - Description (truncated)
  - Type badge
  - Label badges
  - Link to `/templates/[slug]`
- [ ] Build `FooterCTA.tsx`:
  - Heading: "Want to submit a template?"
  - Button: Link to ClickUp form
- [ ] Add SEO meta tags (Helmet)
- [ ] Test filtering and grid layout
- [ ] Mobile responsive testing

**Component Example:**
```tsx
// src/components/templates/TemplateCard.tsx
export const TemplateCard = ({ template }: { template: Template }) => {
  const thumbnailUrl = template.thumbnail_url ||
    `https://img.youtube.com/vi/${template.youtube_id}/maxresdefault.jpg`;

  return (
    <Link to={`/templates/${template.slug}`} className="block group">
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300">
        <img
          src={thumbnailUrl}
          alt={template.title}
          className="w-full aspect-video object-cover"
        />
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <TypeBadge type={template.deliverable_type} />
            {template.labels.slice(0, 2).map(label => (
              <LabelBadge key={label} label={label} />
            ))}
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
            {template.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">
            {template.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
```

**Deliverables:**
- Landing page fully functional
- Filters work correctly
- Cards link to detail pages
- Mobile responsive

---

### Phase 4: Detail Page (/templates/[slug]) (6-8 hours)

**Tasks:**
- [ ] Build `VideoSection.tsx`:
  - YouTube iframe embed (always visible)
  - Responsive sizing (16:9 aspect ratio)
- [ ] Build `ContentSection.tsx`:
  - Title (h1)
  - Type badge
  - Builder info
  - Description (markdown support with `react-markdown`)
  - Tools used badges
  - Labels badges
- [ ] Build `EmailGateSection.tsx`:
  - Check localStorage for existing email
  - If no email: Show form
  - If email exists: Hide form, show deliverable
- [ ] Build `DeliverableSection.tsx`:
  - Conditional rendering by type
  - CTA button with correct text
  - Discount code display (if type = 'discount')
  - Copy-to-clipboard functionality
- [ ] Implement email submission:
  - Validate email format
  - POST to Supabase `email_captures`
  - Save email to localStorage
  - Track view in `template_views`
- [ ] Add SEO meta tags (dynamic based on template)
- [ ] Test all content types (template, demo, document, discount, tool, course)
- [ ] Mobile responsive testing

**Email Submission Logic:**
```typescript
const handleEmailSubmit = async (email: string) => {
  // Validate email
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    toast.error('Please enter a valid email');
    return;
  }

  try {
    // Get IP address (optional)
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const { ip } = await ipResponse.json();

    // Save to Supabase
    const { error } = await supabase
      .from('email_captures')
      .insert({
        email,
        template_id: template.id,
        source_url: window.location.href,
        ip_address: ip,
        user_agent: navigator.userAgent,
      });

    if (error) throw error;

    // Save to localStorage
    localStorage.setItem('userEmail', email);

    // Show success
    toast.success('Email saved! Access your deliverable below.');
    setEmailSubmitted(true);
  } catch (error) {
    toast.error('Failed to save email. Please try again.');
    console.error(error);
  }
};
```

**Deliverables:**
- Detail page fully functional
- Email gate works correctly
- Deliverables unlock after email
- localStorage persists email
- All content types tested

---

### Phase 5: Email Gate System (2-3 hours)

**Tasks:**
- [ ] Implement localStorage email persistence:
  - Key: `userEmail`
  - Value: Email string
- [ ] Add email validation (format check)
- [ ] Add error handling for Supabase failures
- [ ] Add success toast notifications
- [ ] Test localStorage edge cases:
  - Clear localStorage → Form re-appears
  - Multiple templates → Email remembered
- [ ] Optional: Add "Not you? Clear email" button

**LocalStorage Helper:**
```typescript
// src/utils/emailStorage.ts
export const getStoredEmail = (): string | null => {
  return localStorage.getItem('userEmail');
};

export const setStoredEmail = (email: string): void => {
  localStorage.setItem('userEmail', email);
};

export const clearStoredEmail = (): void => {
  localStorage.removeItem('userEmail');
};
```

**Deliverables:**
- Email persistence works
- Form validation functional
- Error handling robust
- Edge cases tested

---

### Phase 6: n8n Integration (4-6 hours)

**Tasks:**
- [ ] Set up ClickUp form with all fields from Section 9.1
- [ ] Create n8n workflow:
  - Webhook trigger
  - Extract YouTube ID (Function node)
  - Generate slug (Function node)
  - Transform data (Set node)
  - Insert to Supabase (Supabase node)
  - Send Slack notification (Slack node)
- [ ] Test workflow end-to-end:
  - Submit ClickUp form
  - Verify template appears in Supabase (status = 'draft')
  - Check Slack notification received
- [ ] Document workflow for team

**n8n Workflow JSON:** (Export and save to `/docs/n8n-template-workflow.json`)

**Deliverables:**
- ClickUp form live
- n8n workflow functional
- Team can submit templates
- Slack notifications working

---

### Phase 7: Testing & Polish (3-4 hours)

**Tasks:**
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Lighthouse audit (Performance, Accessibility, SEO)
- [ ] Fix any accessibility issues (ARIA labels, keyboard navigation)
- [ ] Add loading states for async operations
- [ ] Add empty states (no templates, no results from filter)
- [ ] Test RLS policies with different scenarios
- [ ] Final code review and cleanup
- [ ] Update README with templates system documentation

**Lighthouse Targets:**
- Performance: >90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Deliverables:**
- All browsers tested
- Mobile responsive verified
- Lighthouse scores met
- Production-ready

---

## 12. Success Criteria

### 12.1 Functional Requirements

- [ ] **Landing Page:**
  - Loads in <2 seconds (initial paint)
  - Displays all published templates in grid
  - Filters work correctly (type + labels)
  - Cards link to correct detail pages
  - Mobile responsive (320px - 1920px)

- [ ] **Detail Page:**
  - YouTube video embeds correctly
  - Video is ALWAYS visible (not gated)
  - Email form appears for new visitors
  - Email form hidden for returning visitors (localStorage)
  - Email saves to Supabase successfully
  - Deliverable unlocks after email submission
  - All 6 content types render correctly

- [ ] **Email Gate:**
  - Validates email format client-side
  - Blocks CTA until email submitted
  - Saves email to database (RLS enforced)
  - Persists email to localStorage
  - Handles errors gracefully (network failures)

- [ ] **Security:**
  - RLS prevents unauthorized access to drafts
  - RLS allows anon to read published templates
  - RLS allows anon to insert email captures
  - Service role key never exposed in frontend
  - Other Supabase tables remain protected

- [ ] **ClickUp + n8n Integration:**
  - Form submissions trigger n8n webhook
  - YouTube ID extracted correctly
  - Slug auto-generated if not provided
  - Templates inserted as drafts
  - Team receives Slack notification

### 12.2 Non-Functional Requirements

- [ ] **Performance:**
  - Landing page: <2s initial load
  - Detail page: <2.5s initial load
  - YouTube embed: Lazy load below fold

- [ ] **Accessibility:**
  - WCAG 2.1 AA compliant
  - Keyboard navigation functional
  - Screen reader compatible
  - Focus states visible

- [ ] **SEO:**
  - Dynamic meta tags (title, description, og:image)
  - Semantic HTML (h1, h2, article, etc.)
  - Sitemap includes all published templates
  - Structured data (JSON-LD) for rich snippets

- [ ] **Design System:**
  - Matches FlowMatrix black/white/gold aesthetic
  - Uses only approved color tokens
  - Consistent spacing and typography
  - Smooth transitions and hover states

---

## 13. Technical Constraints

### 13.1 Existing Infrastructure

- **Frontend:** React 18 + Vite (must integrate with existing codebase)
- **Styling:** Tailwind CSS (use existing config)
- **Routing:** React Router v6 (add new routes)
- **Deployment:** Vercel (no config changes needed)
- **Database:** Supabase (shared with other FlowMatrix data)

### 13.2 Security Constraints

- **RLS Required:** Templates tables MUST use RLS to isolate from other tables
- **Anon Key Only:** Frontend uses anon key (service role key server-side only)
- **No Auth:** System does NOT require user authentication (anon access)
- **Email Privacy:** email_captures table readable only by service role

### 13.3 Design Constraints

- **Color Palette:** Black (#000000), White (#FFFFFF), Gold (#C9A227) ONLY
- **No Gradients:** Solid colors only (matches existing site)
- **Typography:** System fonts (no custom fonts)
- **Radius:** 0.5rem (8px) for all rounded corners

### 13.4 Performance Constraints

- **Video Embeds:** Lazy load YouTube iframes
- **Images:** Use YouTube thumbnails (no custom image uploads to reduce bandwidth)
- **Database Queries:** Index on `status`, `slug`, `labels`, `tools_used`
- **Analytics:** Fire-and-forget (don't block UI)

---

## 14. Future Considerations

### 14.1 Phase 8+ (Post-MVP)

**Features to Consider:**

1. **Search Functionality:**
   - Full-text search on title + description
   - Supabase text search or Algolia integration

2. **Related Templates:**
   - "You might also like" section on detail pages
   - Match by labels or tools_used

3. **Analytics Dashboard:**
   - Admin view of email captures by template
   - Conversion funnel (views → emails)
   - Most popular templates

4. **Email Automation:**
   - Send deliverable link via email (n8n workflow)
   - Drip campaign for new email captures
   - Newsletter signup integration

5. **Social Sharing:**
   - Share buttons on detail pages (Twitter, LinkedIn)
   - Pre-filled share text with template link

6. **Comments/Reviews:**
   - Allow users to rate templates
   - Comment section for questions/feedback

7. **User Accounts (Optional):**
   - Save favorite templates
   - Track download history
   - Personalized recommendations

8. **Template Versioning:**
   - Track updates to templates
   - Notify users of new versions

### 14.2 Monitoring & Observability

**Recommended Tools:**
- **Error Tracking:** Sentry integration for frontend errors
- **Analytics:** PostHog or Plausible for privacy-friendly analytics
- **Uptime Monitoring:** UptimeRobot for /templates endpoint
- **Database Monitoring:** Supabase built-in metrics

**Key Metrics to Track:**
- Templates landing page traffic
- Detail page views per template
- Email capture conversion rate (views → emails)
- Bounce rate on landing page
- Most popular templates (by views + emails)
- Filter usage patterns

### 14.3 Content Strategy

**Launch Plan:**
1. Seed with 5-10 high-quality templates (Week 1)
2. Add 2-3 new templates per week (Weeks 2-8)
3. Promote on social media (Twitter, LinkedIn)
4. Feature in newsletter (if applicable)
5. Cross-promote on FlowMatrix homepage

**Content Types Priority:**
- **Phase 1:** Templates (highest value, easiest to create)
- **Phase 2:** Tools + Demos (interactive, high engagement)
- **Phase 3:** Courses (time-intensive, high value)
- **Phase 4:** Discounts (promotional, limited use)

---

## Appendix

### A. Glossary

| Term | Definition |
|------|------------|
| **Anon Key** | Supabase public API key (safe to expose in frontend, RLS enforced) |
| **Service Role Key** | Supabase admin key (bypasses RLS, server-side only) |
| **RLS** | Row Level Security (PostgreSQL feature to control data access) |
| **Deliverable** | The gated content (template, demo, document, etc.) |
| **Email Gate** | UI pattern that requires email before revealing content |
| **Slug** | URL-safe identifier (e.g., `email-automation-template`) |
| **Type Badge** | Colored badge indicating deliverable type |
| **Label Badge** | Tag for filtering (e.g., "Automation", "CRM") |

### B. File Structure (New Files Only)

```
flowmatrixai/
├── docs/
│   ├── prd-templates-system.md          # This document
│   └── n8n-template-workflow.json       # n8n workflow export
├── src/
│   ├── pages/
│   │   ├── TemplatesLanding.tsx         # /templates page
│   │   └── TemplateDetail.tsx           # /templates/[slug] page
│   ├── components/
│   │   └── templates/
│   │       ├── HeroSection.tsx
│   │       ├── FilterBar.tsx
│   │       ├── TemplateGrid.tsx
│   │       ├── TemplateCard.tsx
│   │       ├── FooterCTA.tsx
│   │       ├── VideoSection.tsx
│   │       ├── ContentSection.tsx
│   │       ├── EmailGateSection.tsx
│   │       ├── DeliverableSection.tsx
│   │       └── shared/
│   │           ├── TypeBadge.tsx
│   │           ├── LabelBadge.tsx
│   │           ├── ToolBadge.tsx
│   │           └── EmailInput.tsx
│   ├── types/
│   │   └── templates.ts                 # TypeScript types
│   └── utils/
│       └── emailStorage.ts              # localStorage helpers
└── supabase/
    └── migrations/
        └── [timestamp]_create_templates_tables.sql
```

### C. Environment Variables

```env
# .env.local
VITE_SUPABASE_URL=https://[project-id].supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# .env (server-side, NOT committed to git)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### D. References

- [Supabase RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [React Router v6 Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [YouTube Embed API](https://developers.google.com/youtube/player_parameters)
- [n8n Documentation](https://docs.n8n.io/)

---

**End of PRD**

*This document is a living document and will be updated as requirements evolve.*
