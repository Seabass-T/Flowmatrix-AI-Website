# FlowMatrix Templates System - Deployment Guide

## 📋 Prerequisites

Before deploying to production, ensure you have:

- ✅ Supabase project created (https://app.supabase.com)
- ✅ Vercel or Netlify account (for frontend hosting)
- ✅ Git repository with all code committed
- ✅ Environment variables ready
- ✅ At least 3-5 real templates ready to publish

---

## 🗄️ Step 1: Database Setup (One-Time)

### 1.1 Apply Database Migrations

**Option A: Supabase Dashboard (Recommended)**

1. Go to https://app.supabase.com → Your Project
2. Click **SQL Editor** → **New query**
3. Open `supabase/migrations/reset_templates_system.sql`
4. Copy entire contents and paste into SQL Editor
5. Click **Run** (Cmd/Ctrl + Enter)
6. Wait for completion (2-3 seconds)

**Option B: Supabase CLI**

```bash
# Login to Supabase
npx supabase login

# Link to your project
npx supabase link --project-ref YOUR_PROJECT_REF

# Push migrations
npx supabase db push
```

### 1.2 Verify Database Setup

Run these queries in SQL Editor to verify:

```sql
-- Check tables exist
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name IN ('templates', 'email_captures', 'template_views');
-- Should return 3 rows

-- Check RLS is enabled
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('templates', 'email_captures', 'template_views');
-- All 3 should have rowsecurity = true

-- Check policies exist
SELECT tablename, COUNT(*) as policy_count
FROM pg_policies
WHERE schemaname = 'public'
GROUP BY tablename;
-- templates: 4 policies
-- email_captures: 3 policies
-- template_views: 3 policies
```

### 1.3 Delete Example Template (Optional)

The migration creates 1 example template for testing. Delete it:

```sql
DELETE FROM public.templates
WHERE slug = 'example-email-organizer';
```

---

## 📝 Step 2: Seed Your Templates

### 2.1 Add Real Templates

Use the Supabase Table Editor or SQL:

```sql
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
  'your-template-slug',  -- lowercase, hyphens only
  'Detailed description of what this template does...',
  'YOUTUBE_VIDEO_ID',    -- Get from: https://youtu.be/VIDEO_ID
  'template',            -- Options: template, demo, document, discount, tool, course
  'https://your-download-link.com',
  ARRAY['Label1', 'Label2', 'Label3'],
  ARRAY['Tool1', 'Tool2', 'Tool3'],
  ARRAY['Your Name'],
  'published',           -- Options: draft, published, archived
  now()
);
```

**Quick Reference Queries:** See `supabase/migrations/templates_quick_queries.sql`

### 2.2 Verify Templates

```sql
SELECT id, title, slug, status, published_at
FROM public.templates
ORDER BY published_at DESC;
```

---

## 🚀 Step 3: Frontend Deployment

### 3.1 Set Environment Variables

**Vercel:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - Name: `VITE_SUPABASE_URL`
   - Value: `https://xxx.supabase.co`
   - Environment: Production
3. Add:
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJI...` (your anon key)
   - Environment: Production

**Netlify:**
1. Go to Netlify Dashboard → Your Site → Site settings → Environment variables
2. Add the same variables as above

**Get Your Keys:**
- Go to Supabase Dashboard → Project Settings → API
- **URL:** Project URL
- **Key:** `anon` `public` key (NOT service_role)

### 3.2 Build Verification (Local)

Before deploying, verify the build works:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Should complete in ~2-3 seconds with 0 errors
# Check output for any warnings
```

**Expected Output:**
```
✓ built in 2.20s
dist/index.html                    8.74 kB │ gzip:  2.71 kB
dist/assets/index-*.css           73.88 kB │ gzip: 12.85 kB
dist/assets/index-*.js           100.26 kB │ gzip: 32.19 kB
...
```

### 3.3 Deploy Frontend

**Vercel (Automatic):**
1. Push to `main` branch
2. Vercel auto-deploys
3. Wait ~1 minute
4. Check deployment logs for errors

**Netlify (Automatic):**
1. Push to `main` branch
2. Netlify auto-builds and deploys
3. Check deploy logs

**Manual Deploy:**
```bash
# Vercel
npx vercel --prod

# Netlify
npx netlify deploy --prod
```

---

## ✅ Step 4: Post-Deployment Verification

### 4.1 Smoke Test (5 minutes)

Run through this checklist on your production URL:

1. **Landing Page Test:**
   - [ ] Navigate to `https://yoursite.com/free`
   - [ ] Templates load (check DevTools console for errors)
   - [ ] Count badge shows correct number
   - [ ] Click a template card

2. **Detail Page Test:**
   - [ ] Detail page loads
   - [ ] YouTube video shows
   - [ ] Play video (should work)
   - [ ] Tools and labels display

3. **Email Capture Test:**
   - [ ] Enter test email: `test@yourcompany.com`
   - [ ] Submit form
   - [ ] Should unlock with success animation
   - [ ] CTA button should appear

4. **Data Verification:**
   - [ ] Go to Supabase → Table Editor → `email_captures`
   - [ ] Should see new row with your test email
   - [ ] Check `template_views` has view tracked

5. **Return Visitor Test:**
   - [ ] Navigate to a different template detail page
   - [ ] Should auto-unlock (no form shown)
   - [ ] CTA should be visible immediately

6. **Mobile Test:**
   - [ ] Open site on mobile device or emulator
   - [ ] Landing page is readable
   - [ ] Detail page is readable
   - [ ] Email form works
   - [ ] Video plays

### 4.2 SEO Verification

Check these on production:

```bash
# View page source (Cmd+U in browser)
# Verify these tags exist:
```

**Landing Page** (`/free`):
- `<title>Templates & Resources | FlowMatrix AI</title>`
- `<meta name="description" content="Browse our collection...">`

**Detail Page** (`/free/your-slug`):
- `<title>Your Template Title | FlowMatrix AI Templates</title>`
- `<meta name="description" content="...">`
- `<meta property="og:title" content="...">`
- `<meta property="og:image" content="...">`

### 4.3 Performance Verification

1. Open Chrome DevTools (F12)
2. Click Lighthouse tab
3. Select Performance + Desktop
4. Run audit

**Target Scores:**
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >90

---

## 🔒 Step 5: Security Verification

### 5.1 RLS Policy Test

**Test 1: Anon User Can Read Published Templates**
```sql
-- Run in Supabase SQL Editor
-- Switch to "Authenticated" or "Anonymous" role at bottom
SELECT * FROM templates WHERE status = 'published';
-- Should return all published templates
```

**Test 2: Anon User Cannot Read Draft Templates**
```sql
SELECT * FROM templates WHERE status = 'draft';
-- Should return 0 rows (RLS blocks access)
```

**Test 3: Anon User Can Insert Email Captures**
```sql
INSERT INTO email_captures (email, template_id, source_url)
VALUES ('test@test.com', (SELECT id FROM templates LIMIT 1), 'https://test.com');
-- Should succeed
```

**Test 4: Anon User Cannot Read Email Captures**
```sql
SELECT * FROM email_captures;
-- Should return 0 rows (RLS blocks access)
```

### 5.2 Frontend Security Check

**Check Network Tab:**
1. Open DevTools → Network tab
2. Submit email on detail page
3. Check POST request to Supabase
4. Verify payload ONLY contains: email, template_id, source_url, user_agent
5. Verify NO service_role key in headers

**Check Console:**
- No errors about CORS
- No errors about RLS policies
- No sensitive data logged

### 5.3 Environment Variables Check

**Verify in Vercel/Netlify:**
1. Check environment variables dashboard
2. Confirm only ANON key is set (not service_role)
3. Confirm URL is correct production Supabase URL

---

## 🔄 Step 6: Ongoing Maintenance

### 6.1 Adding New Templates

**Via Supabase Dashboard:**
1. Go to Table Editor → `templates`
2. Click "Insert" → "Insert row"
3. Fill in all fields
4. Set `status = 'published'`
5. Set `published_at = now()`

**Via SQL:**
```sql
-- Use the INSERT query from Step 2.1
-- Or use templates from templates_quick_queries.sql
```

### 6.2 Monitoring Email Captures

**View Recent Captures:**
```sql
SELECT
  ec.email,
  t.title,
  ec.captured_at
FROM email_captures ec
JOIN templates t ON ec.template_id = t.id
ORDER BY ec.captured_at DESC
LIMIT 50;
```

**Export Email List:**
```sql
SELECT DISTINCT email
FROM email_captures
ORDER BY email;
```

**Analytics:**
```sql
-- Captures per template
SELECT
  t.title,
  COUNT(ec.id) as capture_count,
  COUNT(DISTINCT ec.email) as unique_emails
FROM templates t
LEFT JOIN email_captures ec ON t.id = ec.template_id
GROUP BY t.id, t.title
ORDER BY capture_count DESC;
```

### 6.3 Monitoring Template Views

```sql
-- Views per template (last 7 days)
SELECT
  t.title,
  COUNT(tv.id) as view_count
FROM templates t
LEFT JOIN template_views tv ON t.id = tv.template_id
WHERE tv.viewed_at > now() - interval '7 days'
GROUP BY t.id, t.title
ORDER BY view_count DESC;
```

---

## 🐛 Troubleshooting

### Issue: Templates Not Loading

**Symptoms:**
- Landing page shows "Failed to Load Templates"
- Console error: "Failed to fetch templates"

**Solutions:**
1. Check Supabase URL is correct in environment variables
2. Check RLS is enabled on `templates` table
3. Check RLS policy allows anon SELECT where status='published'
4. Check at least 1 template exists with status='published'

**Debug Query:**
```sql
-- Run in Supabase (as anon user)
SELECT * FROM templates WHERE status = 'published';
```

### Issue: Email Not Saving

**Symptoms:**
- Form submits but doesn't unlock
- Console error: "Failed to save email"

**Solutions:**
1. Check RLS policy on `email_captures` allows anon INSERT
2. Check template_id exists in templates table
3. Check foreign key constraint is valid

**Debug Query:**
```sql
-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename = 'email_captures';

-- Test INSERT manually
INSERT INTO email_captures (email, template_id, source_url)
VALUES ('debug@test.com', 'REAL_TEMPLATE_ID', 'https://test.com');
```

### Issue: Video Not Playing

**Symptoms:**
- Gray placeholder instead of video
- YouTube error message

**Solutions:**
1. Check youtube_id is correct (11-character alphanumeric)
2. Check video is public or unlisted (not private)
3. Test video URL manually: `https://www.youtube.com/watch?v=YOUR_ID`

### Issue: Page Shows 404

**Symptoms:**
- Navigating to `/free/slug` shows 404
- Works on localhost but not production

**Solutions:**
1. Check `vercel.json` has SPA rewrite rule
2. Check deployment included all routes
3. Check slug exists in templates table

**Verify vercel.json:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 🔙 Rollback Procedures

### Frontend Rollback

**Vercel:**
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

**Netlify:**
1. Go to Deploys
2. Find previous working deploy
3. Click "Publish deploy"

### Database Rollback

**⚠️ WARNING: No automatic rollback for database changes**

**If you need to rollback database:**
1. Restore from Supabase automatic backup (if <7 days)
2. Or re-run migration with old schema
3. Or manually DELETE/UPDATE rows in Table Editor

**Prevention:**
- Test migrations on staging first
- Don't run destructive migrations (DROP TABLE) in production
- Use `UPDATE` instead of `DELETE` when possible

---

## 📊 Success Metrics

After 1 week, check these metrics:

**Email Captures:**
```sql
SELECT
  DATE(captured_at) as date,
  COUNT(*) as captures,
  COUNT(DISTINCT email) as unique_emails
FROM email_captures
WHERE captured_at > now() - interval '7 days'
GROUP BY DATE(captured_at)
ORDER BY date;
```

**Template Performance:**
```sql
-- Conversion rate (views to captures)
SELECT
  t.title,
  COUNT(DISTINCT tv.id) as views,
  COUNT(DISTINCT ec.id) as captures,
  ROUND(
    CASE
      WHEN COUNT(DISTINCT tv.id) > 0
      THEN (COUNT(DISTINCT ec.id)::NUMERIC / COUNT(DISTINCT tv.id)::NUMERIC) * 100
      ELSE 0
    END,
    2
  ) as conversion_rate_percent
FROM templates t
LEFT JOIN template_views tv ON t.id = tv.template_id
LEFT JOIN email_captures ec ON t.id = ec.template_id
WHERE t.status = 'published'
GROUP BY t.id, t.title
ORDER BY conversion_rate_percent DESC;
```

**Target Benchmarks:**
- Conversion rate: 15-30% (views to email captures)
- Page load time: <2 seconds
- Bounce rate: <50%

---

## 🎯 Deployment Checklist

Use this before every deployment:

**Pre-Deploy:**
- [ ] All TypeScript errors fixed (`npm run build`)
- [ ] Supabase migrations applied to production DB
- [ ] Environment variables set in hosting platform
- [ ] At least 3-5 templates with status='published'
- [ ] YouTube videos are public/unlisted
- [ ] Deliverable URLs are valid

**Deploy:**
- [ ] Git commit and push to main branch
- [ ] Verify auto-deploy triggered in Vercel/Netlify
- [ ] Check deploy logs for errors
- [ ] Wait for deployment to complete (~1-2 minutes)

**Post-Deploy:**
- [ ] Visit `/free` - templates load
- [ ] Click template - detail page loads
- [ ] Submit test email - saves to Supabase
- [ ] Check Supabase Table Editor for email row
- [ ] Test on mobile device/emulator
- [ ] Run Lighthouse performance audit
- [ ] No console errors in DevTools

**Sign-Off:**
- [ ] Product Owner approval
- [ ] Stakeholder notification
- [ ] Documentation updated
- [ ] Team informed of new feature

---

## 📞 Support

**Issues?**
- Check TESTING_GUIDE.md for debugging steps
- Check Supabase logs for database errors
- Check Vercel/Netlify logs for build errors
- Review templates_quick_queries.sql for helpful queries

**Questions?**
- Refer to PRD.md for original specifications
- Check reset_templates_system.sql for schema
- Review code comments in source files

---

**Deployment Complete!** 🎉

Your FlowMatrix Templates System is now live and ready to capture leads!
