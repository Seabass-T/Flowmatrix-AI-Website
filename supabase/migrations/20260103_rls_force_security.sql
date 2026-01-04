-- Migration: 002_rls_force_security
-- Description: Add FORCE ROW LEVEL SECURITY to templates tables
-- SECURITY CRITICAL: Prevents table owners from bypassing RLS
-- Date: 2026-01-03
-- Reference: /docs/prd-templates-system.md Section 4

-- ============================================================================
-- FORCE ROW LEVEL SECURITY
-- ============================================================================
-- This ensures even table owners (postgres role) must follow RLS policies
-- Without FORCE, superusers and table owners can bypass RLS
-- This is critical for multi-tenant security

ALTER TABLE public.templates FORCE ROW LEVEL SECURITY;
ALTER TABLE public.email_captures FORCE ROW LEVEL SECURITY;
ALTER TABLE public.template_views FORCE ROW LEVEL SECURITY;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Verify FORCE RLS is enabled (should return 't' for all tables)
-- SELECT
--   tablename,
--   rowsecurity as rls_enabled,
--   CASE
--     WHEN relforcerowsecurity THEN 't'
--     ELSE 'f'
--   END as force_rls
-- FROM pg_tables
-- JOIN pg_class ON pg_tables.tablename = pg_class.relname
-- WHERE schemaname = 'public'
--   AND tablename IN ('templates', 'email_captures', 'template_views');

-- ============================================================================
-- SECURITY TEST QUERIES (Run these to verify policies work)
-- ============================================================================

-- TEST 1: Anon should only see published templates
-- Run this with anon key in Supabase dashboard:
-- SELECT id, slug, title, status FROM templates;
-- Expected: Only rows where status = 'published'

-- TEST 2: Anon cannot insert templates (should fail with permission denied)
-- INSERT INTO templates (slug, title, description, youtube_url, youtube_id, deliverable_type)
-- VALUES ('test-slug', 'Test', 'Test description', 'https://youtube.com/watch?v=test', 'test', 'template');
-- Expected: ERROR - new row violates row-level security policy

-- TEST 3: Anon CAN insert email captures (should succeed)
-- First, get a published template ID:
-- SELECT id FROM templates WHERE status = 'published' LIMIT 1;
-- Then insert:
-- INSERT INTO email_captures (email, template_id, source_url)
-- VALUES ('test@example.com', 'PASTE_TEMPLATE_ID_HERE', 'https://test.com');
-- Expected: Success

-- TEST 4: Anon cannot read email captures (should return empty)
-- SELECT * FROM email_captures;
-- Expected: 0 rows (even though data exists, anon cannot see it)

-- TEST 5: Anon CAN insert template views (should succeed)
-- INSERT INTO template_views (template_id, source)
-- VALUES ('PASTE_TEMPLATE_ID_HERE', 'https://test.com');
-- Expected: Success

-- TEST 6: Anon cannot read template views (should return empty)
-- SELECT * FROM template_views;
-- Expected: 0 rows (even though data exists, anon cannot see it)

-- TEST 7: Anon cannot update templates (should fail)
-- UPDATE templates SET title = 'Hacked' WHERE id = 'PASTE_TEMPLATE_ID_HERE';
-- Expected: ERROR - permission denied

-- TEST 8: Anon cannot delete templates (should fail)
-- DELETE FROM templates WHERE id = 'PASTE_TEMPLATE_ID_HERE';
-- Expected: ERROR - permission denied

-- ============================================================================
-- END OF MIGRATION
-- ============================================================================
