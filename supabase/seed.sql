-- Seed data for FlowMatrix AI Templates System
-- Purpose: Test templates covering all 6 content types
-- Run after migrations: 20260103_templates_system.sql and 20260103_rls_force_security.sql
-- Database: iqcwmkacfxgqkzpzdwpe
-- Date: 2026-01-03

-- ============================================================================
-- SEED TEMPLATES (6 Published + 2 Draft)
-- ============================================================================

INSERT INTO public.templates (
  title,
  slug,
  description,
  youtube_url,
  youtube_id,
  thumbnail_url,
  deliverable_type,
  deliverable_url,
  discount_code,
  discount_expiry,
  tools_used,
  labels,
  builders,
  status,
  published_at
) VALUES

-- ============================================================================
-- 1. TEMPLATE TYPE - Speed-to-Lead Automation
-- ============================================================================
(
  'Speed-to-Lead Automation',
  'speed-to-lead-automation',
  'Respond to inbound leads in under 60 seconds—automatically. This n8n workflow connects your CRM to SMS and email for instant follow-up that converts. Perfect for service businesses drowning in manual lead response. Set it up once, never miss a hot lead again.',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  'template',
  'https://drive.google.com/file/d/1234567890abcdef/view?usp=sharing',
  NULL,
  NULL,
  ARRAY['n8n', 'ServiceTitan', 'Twilio', 'Gmail'],
  ARRAY['lead-response', 'automation', 'service-business', 'crm'],
  ARRAY['Sebastian Tamburro'],
  'published',
  NOW()
),

-- ============================================================================
-- 2. DEMO TYPE - AI Voice Agent Live Demo
-- ============================================================================
(
  'AI Voice Agent Live Demo',
  'ai-voice-agent-demo',
  'See FlowMatrix AI''s voice agent in action. This live demo showcases conversational AI handling inbound calls, booking appointments, and qualifying leads—completely hands-free. Built with VAPI, OpenAI GPT-4, and Make automation. Experience the future of customer service without writing a single line of code.',
  'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  'jNQXAC9IVRw',
  'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
  'demo',
  'https://demo.flowmatrixai.com/voice-agent',
  NULL,
  NULL,
  ARRAY['VAPI', 'OpenAI', 'Make', 'Twilio'],
  ARRAY['voice-ai', 'demo', 'live', 'customer-service', 'appointment-booking'],
  ARRAY['Sebastian Tamburro', 'Dom Joseph'],
  'published',
  NOW()
),

-- ============================================================================
-- 3. DOCUMENT TYPE - AI Implementation Checklist
-- ============================================================================
(
  'AI Implementation Checklist',
  'ai-implementation-checklist',
  'Your step-by-step roadmap to successful AI automation. This comprehensive checklist walks you through process mapping, tool selection, pilot testing, and full deployment. Based on 100+ implementations across construction, HVAC, and service industries. Download the PDF and eliminate the guesswork from your AI transformation.',
  'https://www.youtube.com/watch?v=9bZkp7q19f0',
  '9bZkp7q19f0',
  'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
  'document',
  'https://drive.google.com/file/d/abcdef1234567890/view?usp=sharing',
  NULL,
  NULL,
  ARRAY['n8n', 'Make', 'ChatGPT'],
  ARRAY['guide', 'checklist', 'strategy', 'implementation', 'planning'],
  ARRAY['Dom Joseph'],
  'published',
  NOW()
),

-- ============================================================================
-- 4. DISCOUNT TYPE - n8n Cloud 20% Off
-- ============================================================================
(
  'n8n Cloud - 20% Off First 3 Months',
  'n8n-cloud-discount',
  'Get started with n8n Cloud at 20% off your first three months. FlowMatrix AI partners exclusively with n8n to bring you professional automation infrastructure without the DevOps headache. This discount applies to all n8n Cloud plans—Starter, Pro, or Enterprise. Valid for new accounts only. Claim your code below and start building workflows in minutes.',
  'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
  'kJQP7kiw5Fk',
  'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
  'discount',
  NULL,
  'FLOWMATRIX20',
  NOW() + INTERVAL '90 days',
  ARRAY['n8n'],
  ARRAY['discount', 'n8n', 'tools', 'partner-offer'],
  ARRAY['Sebastian Tamburro'],
  'published',
  NOW()
),

-- ============================================================================
-- 5. TOOL TYPE - ROI Calculator for AI Automation
-- ============================================================================
(
  'ROI Calculator for AI Automation',
  'roi-calculator',
  'Calculate the exact dollar value of automating your business processes. This interactive calculator helps you quantify time saved, labor costs reduced, and revenue gained from AI automation. Input your current process metrics and get instant ROI projections. Built for service businesses, contractors, and operations teams who need to justify AI investments to leadership.',
  'https://www.youtube.com/watch?v=Hg6L_7qLIEQ',
  'Hg6L_7qLIEQ',
  'https://img.youtube.com/vi/Hg6L_7qLIEQ/maxresdefault.jpg',
  'tool',
  'https://calculator.flowmatrixai.com/roi',
  NULL,
  NULL,
  ARRAY['Google Sheets', 'Airtable'],
  ARRAY['calculator', 'roi', 'free-tool', 'planning', 'business-case'],
  ARRAY['Dom Joseph', 'Sebastian Tamburro'],
  'published',
  NOW()
),

-- ============================================================================
-- 6. COURSE TYPE - n8n Fundamentals Playlist
-- ============================================================================
(
  'n8n Fundamentals - Complete Video Course',
  'n8n-fundamentals',
  'Master n8n automation from zero to production-ready workflows. This 12-video course covers nodes, triggers, webhooks, error handling, and real-world integrations. Perfect for non-technical founders and operations managers who want to build their own automations. By the end, you''ll deploy live workflows that save your team 10+ hours per week. No coding experience required.',
  'https://www.youtube.com/watch?v=videoseries',
  'videoseries',
  'https://img.youtube.com/vi/videoseries/maxresdefault.jpg',
  'course',
  'https://www.youtube.com/playlist?list=PLhfxuQVMs-nxQKWY5nw5KPb3g6ZA5VHkv',
  NULL,
  NULL,
  ARRAY['n8n', 'Webhook', 'API'],
  ARRAY['course', 'n8n', 'beginner', 'video-series', 'training'],
  ARRAY['Sebastian Tamburro'],
  'published',
  NOW()
),

-- ============================================================================
-- 7. DRAFT TEMPLATE - Email Organizer (For RLS Testing)
-- ============================================================================
(
  'Email Organizer and Summarizer',
  'email-organizer',
  'Automatically organize, label, and summarize your inbox using AI. This n8n workflow monitors your Gmail, extracts key information, and generates daily summaries. Save 5-15 hours per week on email management. Built with OpenAI GPT-4 and Gmail API.',
  'https://www.youtube.com/watch?v=5qap5aO4i9A',
  '5qap5aO4i9A',
  'https://img.youtube.com/vi/5qap5aO4i9A/maxresdefault.jpg',
  'template',
  'https://drive.google.com/file/d/draft1234567890/view?usp=sharing',
  NULL,
  NULL,
  ARRAY['n8n', 'OpenAI', 'Gmail'],
  ARRAY['email', 'automation', 'ai', 'productivity'],
  ARRAY['Sebastian Tamburro'],
  'draft',
  NULL
),

-- ============================================================================
-- 8. DRAFT TEMPLATE - Invoice Lifecycle Manager (For RLS Testing)
-- ============================================================================
(
  'Invoice Lifecycle Manager',
  'invoice-lifecycle-manager',
  'End-to-end invoice automation from creation to payment collection. This workflow handles invoice generation, delivery, payment tracking, and automated follow-ups. Reduce late payments by 40% and save 8-12 hours per month on accounts receivable. Integrates with QuickBooks, Stripe, and email.',
  'https://www.youtube.com/watch?v=6_XnGTYzS7A',
  '6_XnGTYzS7A',
  'https://img.youtube.com/vi/6_XnGTYzS7A/maxresdefault.jpg',
  'template',
  'https://drive.google.com/file/d/draft0987654321/view?usp=sharing',
  NULL,
  NULL,
  ARRAY['n8n', 'QuickBooks', 'Stripe', 'Gmail'],
  ARRAY['invoicing', 'automation', 'finance', 'payment-collection'],
  ARRAY['Dom Joseph'],
  'draft',
  NULL
);

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Verify all 8 templates were inserted
-- SELECT COUNT(*) as total_templates FROM templates;
-- Expected: 8

-- Verify 6 published templates
-- SELECT COUNT(*) as published_templates FROM templates WHERE status = 'published';
-- Expected: 6

-- Verify 2 draft templates
-- SELECT COUNT(*) as draft_templates FROM templates WHERE status = 'draft';
-- Expected: 2

-- Verify all 6 content types are represented
-- SELECT deliverable_type, COUNT(*) as count
-- FROM templates
-- WHERE status = 'published'
-- GROUP BY deliverable_type
-- ORDER BY deliverable_type;
-- Expected: 6 rows (template, demo, document, discount, tool, course)

-- Verify discount type has discount_code and expiry
-- SELECT title, discount_code, discount_expiry
-- FROM templates
-- WHERE deliverable_type = 'discount';
-- Expected: 1 row with code 'FLOWMATRIX20' and future expiry date

-- Verify non-discount types have deliverable_url
-- SELECT title, deliverable_type, deliverable_url
-- FROM templates
-- WHERE deliverable_type != 'discount' AND status = 'published';
-- Expected: 5 rows, all with non-NULL deliverable_url

-- Verify array fields are populated correctly
-- SELECT title, tools_used, labels, builders
-- FROM templates
-- WHERE status = 'published'
-- LIMIT 1;
-- Expected: Arrays should display as {element1,element2,...}

-- ============================================================================
-- RLS TESTING QUERIES (Run these with anon key)
-- ============================================================================

-- TEST 1: Anon should see ONLY published templates (6 rows)
-- SET ROLE anon;
-- SELECT id, title, status FROM templates;
-- Expected: 6 rows, all status = 'published'
-- RESET ROLE;

-- TEST 2: Anon should NOT see draft templates (0 rows)
-- SET ROLE anon;
-- SELECT id, title, status FROM templates WHERE status = 'draft';
-- Expected: 0 rows
-- RESET ROLE;

-- TEST 3: Service role should see ALL templates (8 rows)
-- SET ROLE service_role;
-- SELECT COUNT(*) FROM templates;
-- Expected: 8 rows
-- RESET ROLE;

-- ============================================================================
-- END OF SEED DATA
-- ============================================================================
