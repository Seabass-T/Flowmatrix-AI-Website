#!/usr/bin/env ts-node
/**
 * Automated Sitemap Generator for FlowMatrix AI
 *
 * This script automatically generates sitemap.xml based on published templates in Supabase
 * Run this after adding new templates to ensure they're discoverable by search engines
 *
 * Usage:
 *   npm run update-sitemap
 *
 * OR manually:
 *   ts-node scripts/update-sitemap.ts
 */

import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { join } from 'path';

const SUPABASE_URL = "https://iqcwmkacfxgqkzpzdwpe.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxY3dta2FjZnhncWt6cHpkd3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTE4OTMsImV4cCI6MjA3NTg2Nzg5M30.qGEnfqpA1aOIESftQiItJbQcUvd9DhTTc_Mh9dinlNg";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

interface Template {
  slug: string;
  updated_at: string;
  deliverable_type: string;
}

async function generateSitemap() {
  console.log('🔍 Fetching published templates from Supabase...');

  // Fetch all published templates
  const { data: templates, error } = await supabase
    .from('templates')
    .select('slug, updated_at, deliverable_type')
    .eq('status', 'published')
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('❌ Error fetching templates:', error);
    process.exit(1);
  }

  if (!templates || templates.length === 0) {
    console.warn('⚠️  No published templates found. Creating sitemap with static pages only.');
  }

  console.log(`✅ Found ${templates?.length || 0} published templates`);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Static pages configuration
  const staticPages = [
    {
      loc: 'https://flowmatrixai.com/',
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0',
      comment: 'Homepage'
    },
    {
      loc: 'https://flowmatrixai.com/free',
      lastmod: today,
      changefreq: 'daily',
      priority: '0.9',
      comment: 'Free Templates Landing Page'
    },
    {
      loc: 'https://flowmatrixai.com/terms',
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.3',
      comment: 'Terms of Service'
    },
    {
      loc: 'https://flowmatrixai.com/privacy',
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.3',
      comment: 'Privacy Policy'
    }
  ];

  // Generate template URLs with priority based on type
  const getTemplatePriority = (type: string): string => {
    switch (type) {
      case 'template':
        return '0.8';
      case 'demo':
        return '0.8';
      case 'tool':
        return '0.9'; // Tools are high priority
      case 'course':
        return '0.7';
      default:
        return '0.7';
    }
  };

  const templatePages = (templates || []).map((template: Template) => ({
    loc: `https://flowmatrixai.com/free/${template.slug}`,
    lastmod: template.updated_at ? template.updated_at.split('T')[0] : today,
    changefreq: 'weekly',
    priority: getTemplatePriority(template.deliverable_type),
    comment: `Template: ${template.slug}`
  }));

  // Combine all pages
  const allPages = [...staticPages, ...templatePages];

  // Generate XML
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urlEntries = allPages.map(page => {
    return `  <!-- ${page.comment} -->
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n\n');

  const xml = `${xmlHeader}
${urlsetOpen}
${urlEntries}
${urlsetClose}
`;

  // Write to public/sitemap.xml
  const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
  writeFileSync(sitemapPath, xml, 'utf-8');

  console.log(`\n✅ Sitemap generated successfully!`);
  console.log(`📄 File: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${allPages.length}`);
  console.log(`   - Static pages: ${staticPages.length}`);
  console.log(`   - Template pages: ${templatePages.length}`);
  console.log(`\n🌐 Sitemap URL: https://flowmatrixai.com/sitemap.xml`);
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Commit and push the updated sitemap.xml`);
  console.log(`   2. Submit to Google Search Console: https://search.google.com/search-console`);
  console.log(`   3. Request indexing for new template pages\n`);
}

// Run the generator
generateSitemap().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
