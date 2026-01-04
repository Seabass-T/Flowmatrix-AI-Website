#!/usr/bin/env ts-node
/**
 * SEO Validation Helper for FlowMatrix AI Templates
 *
 * Validates that all published templates have proper SEO configuration
 * Checks: titles, descriptions, keywords, structured data, meta tags
 *
 * Usage:
 *   npm run validate-seo
 *
 * OR manually:
 *   ts-node scripts/validate-seo.ts
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://iqcwmkacfxgqkzpzdwpe.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxY3dta2FjZnhncWt6cHpkd3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTE4OTMsImV4cCI6MjA3NTg2Nzg5M30.qGEnfqpA1aOIESftQiItJbQcUvd9DhTTc_Mh9dinlNg";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

interface Template {
  id: string;
  slug: string;
  title: string;
  description: string;
  youtube_id: string | null;
  deliverable_type: string;
  labels: string[] | null;
  tools_used: string[] | null;
  deliverable_url: string | null;
  thumbnail_url: string | null;
  published_at: string | null;
}

interface SEOIssue {
  severity: 'error' | 'warning' | 'info';
  field: string;
  message: string;
  recommendation: string;
}

class SEOValidator {
  private issues: Map<string, SEOIssue[]> = new Map();

  validateTemplate(template: Template): void {
    const issues: SEOIssue[] = [];

    // 1. Validate Title
    if (!template.title || template.title.trim().length === 0) {
      issues.push({
        severity: 'error',
        field: 'title',
        message: 'Title is missing',
        recommendation: 'Add a descriptive title (50-60 characters optimal)'
      });
    } else if (template.title.length < 30) {
      issues.push({
        severity: 'warning',
        field: 'title',
        message: `Title is too short (${template.title.length} chars)`,
        recommendation: 'Titles should be 50-60 characters for best SEO'
      });
    } else if (template.title.length > 70) {
      issues.push({
        severity: 'warning',
        field: 'title',
        message: `Title is too long (${template.title.length} chars, will be truncated in search)`,
        recommendation: 'Keep titles under 60 characters to avoid truncation'
      });
    }

    // Check for FlowMatrix AI in title
    if (!template.title.toLowerCase().includes('flowmatrix')) {
      issues.push({
        severity: 'info',
        field: 'title',
        message: 'Title doesn\'t include brand name',
        recommendation: 'Consider adding "FlowMatrix AI" for brand recognition (added automatically in template page)'
      });
    }

    // 2. Validate Description
    if (!template.description || template.description.trim().length === 0) {
      issues.push({
        severity: 'error',
        field: 'description',
        message: 'Description is missing',
        recommendation: 'Add a detailed description (150-160 characters optimal for meta description)'
      });
    } else if (template.description.length < 100) {
      issues.push({
        severity: 'warning',
        field: 'description',
        message: `Description is too short (${template.description.length} chars)`,
        recommendation: 'Descriptions should be 150-160 characters for best SEO'
      });
    } else if (template.description.length > 200) {
      issues.push({
        severity: 'warning',
        field: 'description',
        message: `Description is too long (${template.description.length} chars, will be truncated)`,
        recommendation: 'Keep descriptions under 160 characters for meta tags'
      });
    }

    // 3. Validate Slug (URL-friendly)
    if (!template.slug || template.slug.trim().length === 0) {
      issues.push({
        severity: 'error',
        field: 'slug',
        message: 'Slug is missing',
        recommendation: 'Add a URL-friendly slug (lowercase, hyphens, no spaces)'
      });
    } else {
      // Check slug format
      if (!/^[a-z0-9-]+$/.test(template.slug)) {
        issues.push({
          severity: 'error',
          field: 'slug',
          message: 'Slug contains invalid characters',
          recommendation: 'Use only lowercase letters, numbers, and hyphens'
        });
      }
      if (template.slug.includes('_')) {
        issues.push({
          severity: 'warning',
          field: 'slug',
          message: 'Slug contains underscores',
          recommendation: 'Use hyphens instead of underscores for better SEO'
        });
      }
      if (template.slug.length < 3) {
        issues.push({
          severity: 'warning',
          field: 'slug',
          message: 'Slug is very short',
          recommendation: 'Use descriptive slugs (e.g., "email-automation-template")'
        });
      }
    }

    // 4. Validate Labels (for keywords/tags)
    if (!template.labels || template.labels.length === 0) {
      issues.push({
        severity: 'warning',
        field: 'labels',
        message: 'No labels/tags defined',
        recommendation: 'Add 3-5 relevant labels for better categorization and SEO'
      });
    } else if (template.labels.length < 2) {
      issues.push({
        severity: 'info',
        field: 'labels',
        message: 'Only one label defined',
        recommendation: 'Add more labels (3-5 optimal) for better discoverability'
      });
    }

    // 5. Validate Tools Used (for keywords)
    if (!template.tools_used || template.tools_used.length === 0) {
      issues.push({
        severity: 'info',
        field: 'tools_used',
        message: 'No tools specified',
        recommendation: 'Add tool names (e.g., "n8n", "OpenAI") for better keyword targeting'
      });
    }

    // 6. Validate Media (YouTube or Thumbnail)
    if (!template.youtube_id && !template.thumbnail_url) {
      issues.push({
        severity: 'warning',
        field: 'media',
        message: 'No video or thumbnail image',
        recommendation: 'Add YouTube video ID or thumbnail URL for visual appeal and video schema'
      });
    }

    // 7. Validate Deliverable URL
    if (!template.deliverable_url) {
      issues.push({
        severity: 'info',
        field: 'deliverable_url',
        message: 'No deliverable URL provided',
        recommendation: 'Add a URL to the actual template/resource for users to access'
      });
    }

    // 8. Validate Published Date
    if (!template.published_at) {
      issues.push({
        severity: 'info',
        field: 'published_at',
        message: 'No publish date set',
        recommendation: 'Set published_at for article schema and freshness signals'
      });
    }

    // Store issues for this template
    if (issues.length > 0) {
      this.issues.set(template.slug, issues);
    }
  }

  printReport(): void {
    console.log('\n' + '='.repeat(80));
    console.log('📊 SEO VALIDATION REPORT FOR FLOWMATRIX AI TEMPLATES');
    console.log('='.repeat(80) + '\n');

    if (this.issues.size === 0) {
      console.log('✅ All templates are SEO-optimized! No issues found.\n');
      return;
    }

    let totalErrors = 0;
    let totalWarnings = 0;
    let totalInfo = 0;

    this.issues.forEach((issues, slug) => {
      const errors = issues.filter(i => i.severity === 'error').length;
      const warnings = issues.filter(i => i.severity === 'warning').length;
      const info = issues.filter(i => i.severity === 'info').length;

      totalErrors += errors;
      totalWarnings += warnings;
      totalInfo += info;

      console.log(`\n📄 Template: ${slug}`);
      console.log(`   URL: https://flowmatrixai.com/free/${slug}`);
      console.log(`   Issues: ${errors} errors, ${warnings} warnings, ${info} info\n`);

      issues.forEach(issue => {
        const icon = issue.severity === 'error' ? '❌' :
                     issue.severity === 'warning' ? '⚠️ ' : 'ℹ️ ';
        console.log(`   ${icon} [${issue.severity.toUpperCase()}] ${issue.field}`);
        console.log(`      ${issue.message}`);
        console.log(`      💡 ${issue.recommendation}\n`);
      });
    });

    console.log('='.repeat(80));
    console.log(`\n📈 SUMMARY:`);
    console.log(`   Total Templates Checked: ${this.issues.size}`);
    console.log(`   ❌ Errors: ${totalErrors}`);
    console.log(`   ⚠️  Warnings: ${totalWarnings}`);
    console.log(`   ℹ️  Info: ${totalInfo}\n`);

    if (totalErrors > 0) {
      console.log('⚠️  CRITICAL: Fix all errors before publishing to production!\n');
      process.exit(1);
    } else if (totalWarnings > 0) {
      console.log('✅ No critical errors, but consider addressing warnings for optimal SEO.\n');
    } else {
      console.log('✅ All templates look good! Only minor suggestions.\n');
    }
  }
}

async function validateSEO() {
  console.log('🔍 Fetching published templates from Supabase...\n');

  const { data: templates, error } = await supabase
    .from('templates')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('❌ Error fetching templates:', error);
    process.exit(1);
  }

  if (!templates || templates.length === 0) {
    console.warn('⚠️  No published templates found.\n');
    return;
  }

  console.log(`✅ Found ${templates.length} published templates\n`);

  const validator = new SEOValidator();

  templates.forEach((template: Template) => {
    validator.validateTemplate(template);
  });

  validator.printReport();
}

// Run validation
validateSEO().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
