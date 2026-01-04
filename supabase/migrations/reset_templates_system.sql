-- =====================================================
-- RESET TEMPLATES SYSTEM - Complete Schema Rebuild
-- =====================================================
-- WARNING: This will DELETE ALL DATA in templates tables
-- Run this ONLY if you want to start fresh
-- =====================================================

-- 1. DROP ALL EXISTING TABLES (cascades to foreign keys)
-- =====================================================

DROP TABLE IF EXISTS public.template_views CASCADE;
DROP TABLE IF EXISTS public.email_captures CASCADE;
DROP TABLE IF EXISTS public.templates CASCADE;

-- 2. CREATE TEMPLATES TABLE
-- =====================================================

CREATE TABLE public.templates (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Core Info
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,

  -- Media
  youtube_id TEXT NOT NULL,
  thumbnail_url TEXT,

  -- Deliverable Info
  deliverable_type TEXT NOT NULL CHECK (deliverable_type IN ('template', 'demo', 'document', 'discount', 'tool', 'course')),
  deliverable_url TEXT,
  discount_code TEXT,
  discount_expiry TIMESTAMPTZ,

  -- Categorization
  labels TEXT[] DEFAULT '{}',
  tools_used TEXT[] DEFAULT '{}',
  builders TEXT[] DEFAULT '{}',

  -- Publishing
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMPTZ,

  -- Timestamps
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for templates
CREATE INDEX idx_templates_status ON public.templates(status);
CREATE INDEX idx_templates_slug ON public.templates(slug);
CREATE INDEX idx_templates_deliverable_type ON public.templates(deliverable_type);
CREATE INDEX idx_templates_published_at ON public.templates(published_at DESC);
CREATE INDEX idx_templates_labels ON public.templates USING GIN(labels);
CREATE INDEX idx_templates_tools_used ON public.templates USING GIN(tools_used);

-- Updated_at trigger for templates
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_templates_updated_at
  BEFORE UPDATE ON public.templates
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 3. CREATE EMAIL_CAPTURES TABLE
-- =====================================================

CREATE TABLE public.email_captures (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Email Info
  email TEXT NOT NULL,

  -- Template Reference
  template_id UUID NOT NULL REFERENCES public.templates(id) ON DELETE CASCADE,

  -- Tracking Info
  source_url TEXT,
  ip_address TEXT,
  user_agent TEXT,

  -- Timestamps
  captured_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for email_captures
CREATE INDEX idx_email_captures_email ON public.email_captures(email);
CREATE INDEX idx_email_captures_template_id ON public.email_captures(template_id);
CREATE INDEX idx_email_captures_captured_at ON public.email_captures(captured_at DESC);
CREATE INDEX idx_email_captures_email_template ON public.email_captures(email, template_id);

-- 4. CREATE TEMPLATE_VIEWS TABLE
-- =====================================================

CREATE TABLE public.template_views (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Template Reference
  template_id UUID NOT NULL REFERENCES public.templates(id) ON DELETE CASCADE,

  -- Tracking Info
  source_url TEXT,
  ip_address TEXT,
  user_agent TEXT,

  -- Timestamps
  viewed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for template_views
CREATE INDEX idx_template_views_template_id ON public.template_views(template_id);
CREATE INDEX idx_template_views_viewed_at ON public.template_views(viewed_at DESC);
CREATE INDEX idx_template_views_ip_template ON public.template_views(ip_address, template_id);

-- 5. ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_captures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.template_views ENABLE ROW LEVEL SECURITY;

-- TEMPLATES - Public read for published, authenticated write
CREATE POLICY "Public can view published templates"
  ON public.templates
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "Authenticated users can insert templates"
  ON public.templates
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update templates"
  ON public.templates
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete templates"
  ON public.templates
  FOR DELETE
  TO authenticated
  USING (true);

-- EMAIL_CAPTURES - Anyone can insert (for lead capture), authenticated can read
CREATE POLICY "Anyone can insert email captures"
  ON public.email_captures
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view email captures"
  ON public.email_captures
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete email captures"
  ON public.email_captures
  FOR DELETE
  TO authenticated
  USING (true);

-- TEMPLATE_VIEWS - Anyone can insert (for analytics), authenticated can read
CREATE POLICY "Anyone can insert template views"
  ON public.template_views
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view template views"
  ON public.template_views
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete template views"
  ON public.template_views
  FOR DELETE
  TO authenticated
  USING (true);

-- 6. GRANT PERMISSIONS
-- =====================================================

-- Grant usage on schema
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant permissions on templates
GRANT SELECT ON public.templates TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.templates TO authenticated;

-- Grant permissions on email_captures
GRANT INSERT ON public.email_captures TO anon, authenticated;
GRANT SELECT, DELETE ON public.email_captures TO authenticated;

-- Grant permissions on template_views
GRANT INSERT ON public.template_views TO anon, authenticated;
GRANT SELECT, DELETE ON public.template_views TO authenticated;

-- 7. SEED DATA (OPTIONAL - Example Template)
-- =====================================================

INSERT INTO public.templates (
  title,
  slug,
  description,
  youtube_id,
  deliverable_type,
  deliverable_url,
  labels,
  tools_used,
  builders,
  status,
  published_at
) VALUES (
  'Example Template - Email Organizer',
  'example-email-organizer',
  'AI-powered email organization system that automatically categorizes, summarizes, and prioritizes your inbox. Save 5-15 hours per week on email management.',
  'dQw4w9WgXcQ',
  'template',
  'https://example.com/template-download',
  ARRAY['Productivity', 'Email Automation', 'AI'],
  ARRAY['n8n', 'OpenAI', 'Gmail API'],
  ARRAY['FlowMatrix Team'],
  'published',
  now()
);

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================
-- Run these to verify the setup worked:

-- Check tables exist
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name IN ('templates', 'email_captures', 'template_views')
ORDER BY table_name;

-- Check RLS is enabled
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('templates', 'email_captures', 'template_views')
ORDER BY tablename;

-- Check policies exist
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('templates', 'email_captures', 'template_views')
ORDER BY tablename, policyname;

-- Check indexes exist
SELECT schemaname, tablename, indexname
FROM pg_indexes
WHERE schemaname = 'public'
  AND tablename IN ('templates', 'email_captures', 'template_views')
ORDER BY tablename, indexname;

-- Count records
SELECT
  (SELECT COUNT(*) FROM public.templates) as templates_count,
  (SELECT COUNT(*) FROM public.email_captures) as email_captures_count,
  (SELECT COUNT(*) FROM public.template_views) as template_views_count;

-- =====================================================
-- COMPLETE - Templates System Reset Successfully
-- =====================================================
