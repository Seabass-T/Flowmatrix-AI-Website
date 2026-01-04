# FlowMatrix AI - SEO Automation Scripts

This directory contains automated tools for maintaining SEO optimization across all templates.

## Available Scripts

### 1. `validate-seo.ts`
**Purpose:** Validates all published templates for SEO compliance

**Usage:**
```bash
npm run validate-seo
```

**What it checks:**
- Title length and quality (50-60 chars optimal)
- Description optimization (150-160 chars)
- Slug format (lowercase, hyphens, descriptive)
- Labels/tags presence (3-5 recommended)
- Tools listing
- Media presence (YouTube or thumbnail)
- Required fields completion

**Output:**
- ✅ Pass: No issues found
- ⚠️  Warnings: Should fix but not blocking
- ❌ Errors: MUST fix before publishing

---

### 2. `update-sitemap.ts`
**Purpose:** Automatically generates sitemap.xml from Supabase templates

**Usage:**
```bash
npm run update-sitemap
```

**What it does:**
- Fetches ALL published templates from Supabase
- Generates complete sitemap.xml with proper priorities
- Sets lastmod dates automatically
- Saves to `public/sitemap.xml`

**Priority Levels:**
- Homepage: 1.0
- /free landing: 0.9
- Tools: 0.9
- Templates/Demos: 0.8
- Courses/Documents: 0.7
- Legal pages: 0.3

---

### 3. Combined Command
**Purpose:** Run both scripts in sequence

**Usage:**
```bash
npm run seo
```

Equivalent to:
```bash
npm run validate-seo && npm run update-sitemap
```

---

## Workflow: Adding a New Template

```bash
# 1. Add template to Supabase (via dashboard or SQL)

# 2. Validate SEO
npm run validate-seo

# 3. If validation passes, update sitemap
npm run update-sitemap

# 4. Commit the updated sitemap
git add public/sitemap.xml
git commit -m "Add new template: [name]"
git push

# 5. Request indexing in Google Search Console (manual)
```

---

## Requirements

These scripts require:
- **Node.js** 18+ (for ESM support)
- **tsx** package (installed as dev dependency)
- **Supabase connection** (credentials in scripts)
- **Published templates** in Supabase with status='published'

---

## Troubleshooting

### "Cannot find module 'tsx'"
```bash
npm install --save-dev tsx
```

### "Error fetching templates from Supabase"
- Check Supabase credentials in script files
- Verify internet connection
- Check Supabase project is accessible

### "No templates found"
- Verify templates exist in Supabase
- Check `status` field is set to `'published'`
- Not `'draft'` or `'archived'`

### "Validation failing"
- Read the error messages carefully
- Fix the specific fields mentioned
- Common issues:
  - Title too short/long
  - Description too short/long
  - Invalid slug format (uppercase, spaces, special chars)
  - Missing required fields

---

## File Locations

```
flowmatrixai/
├── scripts/
│   ├── validate-seo.ts      # SEO validation
│   ├── update-sitemap.ts    # Sitemap generator
│   └── README.md            # This file
├── public/
│   └── sitemap.xml          # Generated sitemap
├── docs/
│   └── NEW_TEMPLATE_WORKFLOW.md  # Complete workflow guide
└── package.json             # npm scripts configuration
```

---

## Additional Resources

- **Complete Workflow Guide:** `docs/NEW_TEMPLATE_WORKFLOW.md`
- **Supabase Dashboard:** https://supabase.com/dashboard/project/iqcwmkacfxgqkzpzdwpe
- **Google Search Console:** https://search.google.com/search-console
- **Rich Results Test:** https://search.google.com/test/rich-results

---

**Last Updated:** 2026-01-03
**Maintained By:** FlowMatrix AI Development Team
