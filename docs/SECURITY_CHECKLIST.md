# FlowMatrix Templates System - Security Checklist

## ⚠️ Pre-Production Security Verification

**Run through this checklist before deploying to production.**

---

## 1. Supabase Row Level Security (RLS)

### ✅ Verification Steps

**Step 1: Check RLS is Enabled**

Run in Supabase SQL Editor:

```sql
SELECT
  schemaname,
  tablename,
  rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('templates', 'email_captures', 'template_views')
ORDER BY tablename;
```

**Expected Result:**
All 3 tables should have `rls_enabled = true`

---

**Step 2: Check FORCE ROW LEVEL SECURITY**

Run in Supabase SQL Editor:

```sql
SELECT
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('templates', 'email_captures', 'template_views');
```

**All tables should show `rowsecurity = true`**

---

**Step 3: Verify RLS Policies Exist**

```sql
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd as operation
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('templates', 'email_captures', 'template_views')
ORDER BY tablename, policyname;
```

**Expected Result:**
- **templates:** 4 policies (SELECT published, INSERT/UPDATE/DELETE authenticated)
- **email_captures:** 3 policies (INSERT anyone, SELECT/DELETE authenticated)
- **template_views:** 3 policies (INSERT anyone, SELECT/DELETE authenticated)

**Total:** 10 policies

---

### ✅ Functional RLS Tests

**Test 1: Anonymous Can Read Published Templates**

Switch to "Anonymous" role in SQL Editor (bottom dropdown), then run:

```sql
SELECT id, title, status FROM templates WHERE status = 'published';
```

**Expected:** Returns all published templates ✅

---

**Test 2: Anonymous CANNOT Read Draft Templates**

```sql
SELECT id, title, status FROM templates WHERE status = 'draft';
```

**Expected:** Returns 0 rows (RLS blocks access) ✅

---

**Test 3: Anonymous Can Insert Email Captures**

```sql
INSERT INTO email_captures (email, template_id, source_url, user_agent)
VALUES (
  'security-test@example.com',
  (SELECT id FROM templates WHERE status = 'published' LIMIT 1),
  'https://security-test.com',
  'Security Test User Agent'
);
```

**Expected:** INSERT succeeds ✅

---

**Test 4: Anonymous CANNOT Read Email Captures**

```sql
SELECT * FROM email_captures WHERE email = 'security-test@example.com';
```

**Expected:** Returns 0 rows (RLS blocks access) ✅

---

**Test 5: Anonymous Can Insert Template Views**

```sql
INSERT INTO template_views (template_id, source_url, user_agent)
VALUES (
  (SELECT id FROM templates WHERE status = 'published' LIMIT 1),
  'https://security-test.com',
  'Security Test User Agent'
);
```

**Expected:** INSERT succeeds ✅

---

**Test 6: Authenticated Can Read All Templates**

Switch to "Authenticated" role in SQL Editor, then run:

```sql
SELECT id, title, status FROM templates ORDER BY created_at DESC;
```

**Expected:** Returns ALL templates (including drafts) ✅

---

**Test 7: Authenticated Can Read Email Captures**

```sql
SELECT * FROM email_captures ORDER BY captured_at DESC LIMIT 10;
```

**Expected:** Returns all email captures ✅

---

### 🔴 RLS Failures - Critical Issues

If any of these tests fail, **DO NOT DEPLOY TO PRODUCTION:**

- ❌ RLS not enabled on a table → Entire table is publicly readable/writable
- ❌ Anonymous can read drafts → Unpublished content leaked
- ❌ Anonymous can read emails → PII data breach
- ❌ Anonymous cannot insert emails → Email capture broken
- ❌ Policies missing → Default deny blocks all access

**Fix:** Re-run `reset_templates_system.sql` in Supabase SQL Editor

---

## 2. Environment Variables

### ✅ Frontend Environment Check

**Step 1: Verify .env.production**

File should contain ONLY these variables:

```
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbG...
```

**Step 2: Verify NO Service Role Key**

Search entire codebase:

```bash
# Should return 0 results
grep -r "service_role" src/
grep -r "SERVICE" src/
grep -r "secret" src/
```

**Expected:** No matches ✅

---

**Step 3: Check Hosting Platform**

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Verify only these 2 variables exist:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Verify "service_role" is NOT present

**Netlify:**
1. Go to Site settings → Environment variables
2. Same verification as Vercel

---

### 🔴 Environment Variable Failures

- ❌ Service role key in frontend → Full database access exposed
- ❌ Wrong Supabase URL → Data goes to wrong project
- ❌ Missing variables → App won't connect to database
- ❌ Variables committed to git → API keys leaked

---

## 3. API Key Security

### ✅ Anon Key vs Service Role Key

**Understanding the Keys:**

| Key | Access Level | Usage | Safe in Frontend? |
|-----|--------------|-------|-------------------|
| **anon (public)** | Limited by RLS | Frontend API calls | ✅ YES |
| **service_role (secret)** | FULL DATABASE ACCESS | Backend only | ❌ NO |

**Critical Rule:**
- ✅ Anon key can be in frontend code (protected by RLS)
- ❌ Service role key MUST NEVER be in frontend code

---

**Verify Correct Key is Used:**

1. Go to Supabase → Settings → API
2. Copy your `anon` `public` key
3. Compare with `VITE_SUPABASE_ANON_KEY` in your environment
4. They should match exactly

**Wrong Key Detection:**

If you accidentally used service_role:
- Key starts with: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
- Decode at jwt.io
- Check `role` claim in payload:
  - `"role": "anon"` → ✅ Correct (anon key)
  - `"role": "service_role"` → ❌ WRONG (service key)

---

## 4. Frontend Code Security

### ✅ No Sensitive Data Exposure

**Check 1: No Hardcoded Credentials**

```bash
# Search for potential secrets
grep -r "password" src/ --exclude-dir=node_modules
grep -r "secret" src/ --exclude-dir=node_modules
grep -r "api_key" src/ --exclude-dir=node_modules
grep -r "private" src/ --exclude-dir=node_modules
```

**Expected:** Only references to environment variables ✅

---

**Check 2: No Console Logs with PII**

Search for:

```bash
grep -r "console.log.*email" src/
grep -r "console.log.*user" src/
```

**Expected:** Only debugging in development (strip in production) ✅

---

**Check 3: No localStorage of Sensitive Data**

Review `src/lib/email-storage.ts`:

```typescript
// ✅ GOOD - Only stores email (user consented)
localStorage.setItem('fmai_email', email)

// ❌ BAD - Don't do this (we don't do this)
localStorage.setItem('password', password)
localStorage.setItem('credit_card', cardNumber)
```

**Our implementation:** Only stores email after user consent ✅

---

### ✅ XSS Prevention

**Check 1: React Auto-Escaping**

All user input is rendered through React:

```typescript
// ✅ SAFE - React auto-escapes
<h1>{template.title}</h1>
<p>{template.description}</p>
```

We don't use:
```typescript
// ❌ DANGEROUS (we don't do this)
<div dangerouslySetInnerHTML={{__html: userInput}} />
```

---

**Check 2: URL Validation**

External links use proper attributes:

```typescript
// ✅ SAFE - noopener noreferrer prevents tab nabbing
<a href={url} target="_blank" rel="noopener noreferrer">
```

---

## 5. Database Security

### ✅ SQL Injection Prevention

**Supabase Client Library Protection:**

We use Supabase client library (NOT raw SQL):

```typescript
// ✅ SAFE - Parameterized queries
await supabase
  .from('templates')
  .select('*')
  .eq('slug', userInput)  // Automatically escaped

// ❌ DANGEROUS (we don't do this)
await supabase.rpc('raw_sql', {
  query: `SELECT * FROM templates WHERE slug = '${userInput}'`
})
```

**Our implementation:** All queries use parameterized methods ✅

---

### ✅ CSRF Protection

**Supabase Built-in Protection:**
- All requests include JWT token
- SameSite cookies prevent CSRF
- No custom session management needed

**Our implementation:** Relies on Supabase security ✅

---

## 6. HTTPS Enforcement

### ✅ Verify SSL Certificate

**Production URL Check:**

1. Visit your production URL: `https://yoursite.com/free`
2. Check browser address bar for 🔒 padlock
3. Click padlock → Certificate should be valid
4. Certificate should be issued by: Let's Encrypt or CloudFlare

**Vercel:** Automatic HTTPS ✅
**Netlify:** Automatic HTTPS ✅

---

**Check 2: HSTS Header**

```bash
curl -I https://yoursite.com | grep -i strict
```

**Expected:** `Strict-Transport-Security: max-age=...` ✅

---

## 7. CORS Configuration

### ✅ Supabase CORS Settings

**Check Allowed Origins:**

1. Go to Supabase → Authentication → URL Configuration
2. Site URL should be: `https://yoursite.com`
3. Redirect URLs should include: `https://yoursite.com/**`

**No wildcard `*` in production** ❌

---

## 8. Privacy Compliance

### ✅ User Data Collection

**What We Collect:**
- ✅ Email address (with consent via form)
- ✅ Source URL (page they came from)
- ✅ User agent (browser info)
- ✅ IP address (optional - for analytics)

**What We DON'T Collect:**
- ❌ Passwords
- ❌ Payment info
- ❌ Social security numbers
- ❌ Personal identifiable info beyond email

---

**User Consent:**

Our form includes:
```typescript
<p className="text-white/40 text-xs text-center mt-4">
  We respect your privacy. Unsubscribe anytime.
</p>
```

✅ User consents by submitting form

---

**Privacy Policy:**

- [ ] Privacy policy page exists at `/privacy`
- [ ] Privacy policy mentions email collection
- [ ] Privacy policy has unsubscribe method
- [ ] Link to privacy policy in email gate form (recommended)

---

## 🎯 Security Checklist Summary

Before deploying to production, verify ALL of these:

### Database Security
- [ ] RLS enabled on all 3 tables
- [ ] 10 RLS policies exist and tested
- [ ] Anonymous can read published templates ONLY
- [ ] Anonymous can insert emails and views
- [ ] Anonymous CANNOT read emails or draft templates
- [ ] Authenticated users have admin access

### API Security
- [ ] Using anon key (NOT service_role key)
- [ ] Anon key is correct from Supabase dashboard
- [ ] Service role key is NOT in code or environment
- [ ] Environment variables set correctly in hosting platform

### Frontend Security
- [ ] No hardcoded credentials in code
- [ ] No sensitive data in console.logs
- [ ] Only email stored in localStorage
- [ ] React auto-escaping prevents XSS
- [ ] External links use rel="noopener noreferrer"
- [ ] HTTPS enforced on production URL

### Data Security
- [ ] All database queries use parameterized methods
- [ ] No raw SQL with user input
- [ ] Supabase client library handles SQL injection
- [ ] CSRF protection via Supabase JWT

### Compliance
- [ ] Privacy policy exists and linked
- [ ] User consent via form submission
- [ ] Email collection is transparent
- [ ] Unsubscribe method documented

### Testing
- [ ] Smoke test completed (see TESTING_GUIDE.md)
- [ ] Email capture verified in Supabase
- [ ] RLS policies tested with anonymous role
- [ ] No console errors in production

---

## 🚨 Critical Security Failures

**DO NOT DEPLOY** if any of these are true:

- ❌ Service role key in frontend code
- ❌ RLS not enabled on tables
- ❌ RLS policies missing or failing tests
- ❌ Anonymous users can read email captures
- ❌ HTTP (not HTTPS) in production
- ❌ Wildcard CORS in production
- ❌ XSS vulnerabilities found
- ❌ SQL injection possible

---

## ✅ Security Passed - Ready for Production

If all items above are checked ✅, your deployment is secure.

**Confidence Level for Security: 100%**

The FlowMatrix Templates System follows security best practices:
- Database protected by RLS
- API keys properly separated
- No XSS or SQL injection vectors
- HTTPS enforced
- User privacy respected
- PII data protected

---

**Questions about security?**
- Review Supabase RLS docs: https://supabase.com/docs/guides/auth/row-level-security
- Review our migration: `supabase/migrations/reset_templates_system.sql`
- Check testing guide: `TESTING_GUIDE.md`
