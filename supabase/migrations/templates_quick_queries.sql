-- =====================================================
-- TEMPLATES SYSTEM - QUICK REFERENCE QUERIES
-- =====================================================
-- Common queries for managing the templates system
-- Copy and paste into Supabase SQL Editor
-- =====================================================

-- =====================================================
-- 1. VIEW ALL TEMPLATES
-- =====================================================

SELECT
  id,
  title,
  slug,
  deliverable_type,
  status,
  published_at,
  created_at
FROM public.templates
ORDER BY published_at DESC NULLS LAST, created_at DESC;

-- =====================================================
-- 2. VIEW PUBLISHED TEMPLATES ONLY
-- =====================================================

SELECT
  id,
  title,
  slug,
  deliverable_type,
  array_length(labels, 1) as label_count,
  array_length(tools_used, 1) as tools_count,
  published_at
FROM public.templates
WHERE status = 'published'
ORDER BY published_at DESC;

-- =====================================================
-- 3. INSERT NEW TEMPLATE (Example)
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
  'Your Template Title',
  'your-template-slug',
  'Detailed description of what this template does and the value it provides.',
  'YOUTUBE_VIDEO_ID',
  'template',  -- Options: template, demo, document, discount, tool, course
  'https://your-download-url.com',
  ARRAY['Label1', 'Label2', 'Label3'],
  ARRAY['Tool1', 'Tool2', 'Tool3'],
  ARRAY['Builder Name'],
  'published',  -- Options: draft, published, archived
  now()
);

-- =====================================================
-- 4. UPDATE TEMPLATE STATUS
-- =====================================================

-- Publish a draft
UPDATE public.templates
SET
  status = 'published',
  published_at = now()
WHERE slug = 'your-template-slug';

-- Archive a template
UPDATE public.templates
SET status = 'archived'
WHERE slug = 'your-template-slug';

-- Unpublish (back to draft)
UPDATE public.templates
SET
  status = 'draft',
  published_at = NULL
WHERE slug = 'your-template-slug';

-- =====================================================
-- 5. VIEW EMAIL CAPTURES
-- =====================================================

-- All email captures with template info
SELECT
  ec.id,
  ec.email,
  t.title as template_title,
  t.slug as template_slug,
  ec.source_url,
  ec.captured_at
FROM public.email_captures ec
JOIN public.templates t ON ec.template_id = t.id
ORDER BY ec.captured_at DESC
LIMIT 100;

-- Count captures per template
SELECT
  t.title,
  t.slug,
  COUNT(ec.id) as capture_count,
  COUNT(DISTINCT ec.email) as unique_emails
FROM public.templates t
LEFT JOIN public.email_captures ec ON t.template_id = ec.id
GROUP BY t.id, t.title, t.slug
ORDER BY capture_count DESC;

-- Recent captures (last 24 hours)
SELECT
  ec.email,
  t.title,
  ec.captured_at
FROM public.email_captures ec
JOIN public.templates t ON ec.template_id = t.id
WHERE ec.captured_at > now() - interval '24 hours'
ORDER BY ec.captured_at DESC;

-- =====================================================
-- 6. VIEW TEMPLATE ANALYTICS
-- =====================================================

-- Views per template
SELECT
  t.title,
  t.slug,
  COUNT(tv.id) as view_count,
  COUNT(DISTINCT tv.ip_address) as unique_visitors
FROM public.templates t
LEFT JOIN public.template_views tv ON t.id = tv.template_id
GROUP BY t.id, t.title, t.slug
ORDER BY view_count DESC;

-- Conversion rate (views to captures)
SELECT
  t.title,
  t.slug,
  COUNT(DISTINCT tv.id) as views,
  COUNT(DISTINCT ec.id) as captures,
  CASE
    WHEN COUNT(DISTINCT tv.id) > 0
    THEN ROUND((COUNT(DISTINCT ec.id)::NUMERIC / COUNT(DISTINCT tv.id)::NUMERIC) * 100, 2)
    ELSE 0
  END as conversion_rate_percent
FROM public.templates t
LEFT JOIN public.template_views tv ON t.id = tv.template_id
LEFT JOIN public.email_captures ec ON t.id = ec.template_id
WHERE t.status = 'published'
GROUP BY t.id, t.title, t.slug
ORDER BY conversion_rate_percent DESC;

-- =====================================================
-- 7. EXPORT EMAIL LIST
-- =====================================================

-- All unique emails
SELECT DISTINCT email
FROM public.email_captures
ORDER BY email;

-- Emails with capture count
SELECT
  email,
  COUNT(*) as capture_count,
  MIN(captured_at) as first_capture,
  MAX(captured_at) as last_capture,
  array_agg(DISTINCT t.title) as templates_unlocked
FROM public.email_captures ec
JOIN public.templates t ON ec.template_id = t.id
GROUP BY email
ORDER BY capture_count DESC, first_capture DESC;

-- Export for email marketing (CSV format)
COPY (
  SELECT DISTINCT email
  FROM public.email_captures
  ORDER BY email
) TO STDOUT WITH CSV HEADER;

-- =====================================================
-- 8. CLEANUP OPERATIONS
-- =====================================================

-- Delete example template (if exists)
DELETE FROM public.templates
WHERE slug = 'example-email-organizer';

-- Clear all email captures (CAREFUL!)
TRUNCATE public.email_captures;

-- Clear all template views (CAREFUL!)
TRUNCATE public.template_views;

-- Delete specific template (cascades to captures/views)
DELETE FROM public.templates
WHERE slug = 'template-to-delete';

-- Remove duplicate email captures (keep first)
DELETE FROM public.email_captures
WHERE id IN (
  SELECT id
  FROM (
    SELECT
      id,
      ROW_NUMBER() OVER (PARTITION BY email, template_id ORDER BY captured_at) as rn
    FROM public.email_captures
  ) t
  WHERE rn > 1
);

-- =====================================================
-- 9. SEARCH & FILTER
-- =====================================================

-- Find templates by label
SELECT title, slug, labels
FROM public.templates
WHERE 'AI' = ANY(labels)
  AND status = 'published';

-- Find templates by tool
SELECT title, slug, tools_used
FROM public.templates
WHERE 'n8n' = ANY(tools_used)
  AND status = 'published';

-- Find templates by deliverable type
SELECT title, slug, deliverable_type
FROM public.templates
WHERE deliverable_type = 'template'
  AND status = 'published';

-- Search by keyword (title or description)
SELECT title, slug, description
FROM public.templates
WHERE (title ILIKE '%email%' OR description ILIKE '%email%')
  AND status = 'published';

-- =====================================================
-- 10. USEFUL AGGREGATIONS
-- =====================================================

-- Templates summary
SELECT
  status,
  deliverable_type,
  COUNT(*) as count
FROM public.templates
GROUP BY status, deliverable_type
ORDER BY status, deliverable_type;

-- Daily capture metrics (last 7 days)
SELECT
  DATE(captured_at) as capture_date,
  COUNT(*) as captures,
  COUNT(DISTINCT email) as unique_emails
FROM public.email_captures
WHERE captured_at > now() - interval '7 days'
GROUP BY DATE(captured_at)
ORDER BY capture_date DESC;

-- Most popular labels
SELECT
  label,
  COUNT(*) as template_count
FROM public.templates,
  UNNEST(labels) as label
WHERE status = 'published'
GROUP BY label
ORDER BY template_count DESC;

-- Most popular tools
SELECT
  tool,
  COUNT(*) as template_count
FROM public.templates,
  UNNEST(tools_used) as tool
WHERE status = 'published'
GROUP BY tool
ORDER BY template_count DESC;

-- =====================================================
-- 11. QUALITY CHECKS
-- =====================================================

-- Find templates missing deliverable_url
SELECT title, slug, deliverable_type
FROM public.templates
WHERE deliverable_url IS NULL
  AND status = 'published';

-- Find templates with no labels
SELECT title, slug
FROM public.templates
WHERE (labels IS NULL OR array_length(labels, 1) IS NULL)
  AND status = 'published';

-- Find templates with no tools
SELECT title, slug
FROM public.templates
WHERE (tools_used IS NULL OR array_length(tools_used, 1) IS NULL)
  AND status = 'published';

-- Find published templates with no publish date
SELECT title, slug, status, published_at
FROM public.templates
WHERE status = 'published'
  AND published_at IS NULL;

-- =====================================================
-- 12. PERFORMANCE MONITORING
-- =====================================================

-- Table sizes
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as total_size
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('templates', 'email_captures', 'template_views')
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- Index usage
SELECT
  schemaname,
  tablename,
  indexname,
  idx_scan as index_scans,
  idx_tup_read as tuples_read,
  idx_tup_fetch as tuples_fetched
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
  AND tablename IN ('templates', 'email_captures', 'template_views')
ORDER BY idx_scan DESC;

-- =====================================================
-- END OF QUICK QUERIES
-- =====================================================
