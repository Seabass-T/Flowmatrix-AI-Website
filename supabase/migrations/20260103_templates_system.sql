-- Migration: Templates & Resources System
-- Description: Create templates system tables with RLS policies
-- Project: FlowMatrix AI Templates System
-- Database: iqcwmkacfxgqkzpzdwpe
-- Date: 2026-01-03
-- Reference: /docs/prd-templates-system.md

-- ============================================================================
-- TABLES
-- ============================================================================

-- Table 1: templates
-- Purpose: Store all template/resource metadata
CREATE TABLE IF NOT EXISTS public.templates (
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
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  published_at TIMESTAMPTZ
);

-- Table 2: email_captures
-- Purpose: Track all email captures for lead generation
CREATE TABLE IF NOT EXISTS public.email_captures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  template_id UUID NOT NULL REFERENCES public.templates(id) ON DELETE CASCADE,
  source_url TEXT,
  captured_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Table 3: template_views
-- Purpose: Analytics tracking for template page views
CREATE TABLE IF NOT EXISTS public.template_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID NOT NULL REFERENCES public.templates(id) ON DELETE CASCADE,
  viewed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  source TEXT,
  ip_address TEXT,
  user_agent TEXT
);

-- ============================================================================
-- INDEXES
-- ============================================================================

-- Templates table indexes
CREATE INDEX IF NOT EXISTS idx_templates_status ON public.templates(status);
CREATE INDEX IF NOT EXISTS idx_templates_slug ON public.templates(slug);
CREATE INDEX IF NOT EXISTS idx_templates_deliverable_type ON public.templates(deliverable_type);
CREATE INDEX IF NOT EXISTS idx_templates_labels ON public.templates USING GIN(labels);
CREATE INDEX IF NOT EXISTS idx_templates_tools_used ON public.templates USING GIN(tools_used);
CREATE INDEX IF NOT EXISTS idx_templates_published_at ON public.templates(published_at DESC) WHERE status = 'published';

-- Email captures indexes
CREATE INDEX IF NOT EXISTS idx_email_captures_email ON public.email_captures(email);
CREATE INDEX IF NOT EXISTS idx_email_captures_template_id ON public.email_captures(template_id);
CREATE INDEX IF NOT EXISTS idx_email_captures_captured_at ON public.email_captures(captured_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_captures_template_email ON public.email_captures(template_id, email);

-- Template views indexes
CREATE INDEX IF NOT EXISTS idx_template_views_template_id ON public.template_views(template_id);
CREATE INDEX IF NOT EXISTS idx_template_views_viewed_at ON public.template_views(viewed_at DESC);

-- ============================================================================
-- TRIGGERS & FUNCTIONS
-- ============================================================================

-- Function: Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger: Auto-update updated_at on templates table
DROP TRIGGER IF EXISTS update_templates_updated_at ON public.templates;
CREATE TRIGGER update_templates_updated_at
  BEFORE UPDATE ON public.templates
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Function: Auto-set published_at when status changes to published
CREATE OR REPLACE FUNCTION public.set_published_at()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'published' AND (OLD.status IS NULL OR OLD.status != 'published') THEN
    NEW.published_at = now();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger: Auto-set published_at on templates table
DROP TRIGGER IF EXISTS set_templates_published_at ON public.templates;
CREATE TRIGGER set_templates_published_at
  BEFORE UPDATE ON public.templates
  FOR EACH ROW
  EXECUTE FUNCTION public.set_published_at();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_captures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.template_views ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- Table: templates - RLS Policies
-- ============================================================================

-- Policy 1: Public (anon) can read ONLY published templates
DROP POLICY IF EXISTS "Allow public read access to published templates" ON public.templates;
CREATE POLICY "Allow public read access to published templates"
  ON public.templates
  FOR SELECT
  TO anon
  USING (status = 'published');

-- Policy 2: Service role has full access (for admin operations)
DROP POLICY IF EXISTS "Allow service role full access to templates" ON public.templates;
CREATE POLICY "Allow service role full access to templates"
  ON public.templates
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy 3: Authenticated users can read published templates
DROP POLICY IF EXISTS "Allow authenticated read access to published templates" ON public.templates;
CREATE POLICY "Allow authenticated read access to published templates"
  ON public.templates
  FOR SELECT
  TO authenticated
  USING (status = 'published');

-- ============================================================================
-- Table: email_captures - RLS Policies
-- ============================================================================

-- Policy 1: Public (anon) can INSERT (capture emails)
DROP POLICY IF EXISTS "Allow public insert for email captures" ON public.email_captures;
CREATE POLICY "Allow public insert for email captures"
  ON public.email_captures
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy 2: Service role has full access (for analytics)
DROP POLICY IF EXISTS "Allow service role full access to email captures" ON public.email_captures;
CREATE POLICY "Allow service role full access to email captures"
  ON public.email_captures
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy 3: Authenticated users can read their own email captures
DROP POLICY IF EXISTS "Allow authenticated read own email captures" ON public.email_captures;
CREATE POLICY "Allow authenticated read own email captures"
  ON public.email_captures
  FOR SELECT
  TO authenticated
  USING (email = auth.email());

-- Note: No SELECT policy for anon = anon cannot read email_captures (security)

-- ============================================================================
-- Table: template_views - RLS Policies
-- ============================================================================

-- Policy 1: Public (anon) can INSERT (track views)
DROP POLICY IF EXISTS "Allow public insert for template views" ON public.template_views;
CREATE POLICY "Allow public insert for template views"
  ON public.template_views
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy 2: Service role has full access (for analytics)
DROP POLICY IF EXISTS "Allow service role full access to template views" ON public.template_views;
CREATE POLICY "Allow service role full access to template views"
  ON public.template_views
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Note: No SELECT policy for anon = anon cannot read template_views (security)

-- ============================================================================
-- VERIFICATION QUERIES (Comment out after testing)
-- ============================================================================

-- Uncomment to verify tables were created:
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name IN ('templates', 'email_captures', 'template_views');

-- Uncomment to verify indexes were created:
-- SELECT indexname FROM pg_indexes WHERE tablename IN ('templates', 'email_captures', 'template_views');

-- Uncomment to verify RLS is enabled:
-- SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public' AND tablename IN ('templates', 'email_captures', 'template_views');

-- ============================================================================
-- END OF MIGRATION
-- ============================================================================
