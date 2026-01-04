/**
 * Templates System API Helper Functions
 * Provides typed wrappers for Supabase queries to templates, email_captures, and template_views
 */

import { supabase } from '@/integrations/supabase/client'
import type { Database } from '@/integrations/supabase/types'

// Type aliases for convenience
export type Template = Database['public']['Tables']['templates']['Row']
export type EmailCapture = Database['public']['Tables']['email_captures']['Insert']
export type TemplateView = Database['public']['Tables']['template_views']['Insert']

// Deliverable type enum
export type DeliverableType = 'template' | 'demo' | 'document' | 'discount' | 'tool' | 'course'
export type TemplateStatus = 'draft' | 'published' | 'archived'

/**
 * Fetch all published templates, ordered by publish date (newest first)
 * @returns Array of published templates
 * @throws Error if query fails
 */
export async function getTemplates(): Promise<Template[]> {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching templates:', error)
    throw new Error(`Failed to fetch templates: ${error.message}`)
  }

  return data || []
}

/**
 * Fetch all published templates filtered by deliverable type
 * @param type - Deliverable type to filter by
 * @returns Array of published templates matching the type
 * @throws Error if query fails
 */
export async function getTemplatesByType(type: DeliverableType): Promise<Template[]> {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('status', 'published')
    .eq('deliverable_type', type)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching templates by type:', error)
    throw new Error(`Failed to fetch templates: ${error.message}`)
  }

  return data || []
}

/**
 * Fetch a single published template by slug
 * @param slug - URL-safe slug identifier
 * @returns Template object or null if not found
 * @throws Error if query fails
 */
export async function getTemplateBySlug(slug: string): Promise<Template | null> {
  const { data, error } = await supabase
    .from('templates')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    // Return null if not found (404 case), throw for other errors
    if (error.code === 'PGRST116') {
      return null
    }
    console.error('Error fetching template by slug:', error)
    throw new Error(`Failed to fetch template: ${error.message}`)
  }

  return data
}

/**
 * Save an email capture to the database
 * @param capture - Email capture data (email, template_id, etc.)
 * @returns The created email capture record
 * @throws Error if insertion fails
 */
export async function saveEmailCapture(capture: EmailCapture): Promise<Database['public']['Tables']['email_captures']['Row']> {
  const { data, error } = await supabase
    .from('email_captures')
    .insert(capture)
    .select()
    .single()

  if (error) {
    console.error('Error saving email capture:', error)
    throw new Error(`Failed to save email: ${error.message}`)
  }

  return data
}

/**
 * Simplified email capture helper for components
 * @param email - User's email address
 * @param templateId - Template ID being unlocked
 * @param sourceUrl - Current page URL
 * @returns Boolean indicating success
 */
export async function captureEmail(
  email: string,
  templateId: string,
  sourceUrl: string
): Promise<boolean> {
  try {
    await saveEmailCapture({
      email,
      template_id: templateId,
      source_url: sourceUrl,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      // Note: IP address can only be captured server-side
    })
    return true
  } catch (error) {
    console.error('Failed to capture email:', error)
    return false
  }
}

/**
 * Track a template page view (non-critical, fire-and-forget)
 * @param view - Template view data (template_id, source, etc.)
 */
export async function trackTemplateView(view: TemplateView): Promise<void> {
  const { error } = await supabase
    .from('template_views')
    .insert(view)

  // Don't throw on view tracking errors - non-critical analytics
  if (error) {
    console.warn('View tracking failed (non-critical):', error)
  }
}

/**
 * Get all unique labels from published templates for filtering UI
 * @returns Sorted array of unique labels
 * @throws Error if query fails
 */
export async function getUniqueLabels(): Promise<string[]> {
  const { data, error } = await supabase
    .from('templates')
    .select('labels')
    .eq('status', 'published')

  if (error) {
    console.error('Error fetching unique labels:', error)
    throw new Error(`Failed to fetch labels: ${error.message}`)
  }

  // Flatten all labels arrays and get unique values
  const allLabels = data?.flatMap(t => t.labels || []) || []
  return [...new Set(allLabels)].sort()
}

/**
 * Get all unique tools from published templates for filtering UI
 * @returns Sorted array of unique tools
 * @throws Error if query fails
 */
export async function getUniqueTools(): Promise<string[]> {
  const { data, error } = await supabase
    .from('templates')
    .select('tools_used')
    .eq('status', 'published')

  if (error) {
    console.error('Error fetching unique tools:', error)
    throw new Error(`Failed to fetch tools: ${error.message}`)
  }

  // Flatten all tools arrays and get unique values
  const allTools = data?.flatMap(t => t.tools_used || []) || []
  return [...new Set(allTools)].sort()
}

/**
 * Get IP address of current user (for analytics)
 * Uses ipify.org API (free, no API key required)
 * @returns IP address string or null if fetch fails
 */
export async function getUserIP(): Promise<string | null> {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip || null
  } catch (error) {
    console.warn('Failed to fetch IP address:', error)
    return null
  }
}

/**
 * Helper to create a complete EmailCapture object with all fields
 * @param email - User email
 * @param templateId - Template ID
 * @returns EmailCapture object ready for insertion
 */
export async function createEmailCapture(email: string, templateId: string): Promise<EmailCapture> {
  const ip = await getUserIP()

  return {
    email,
    template_id: templateId,
    source_url: window.location.href,
    ip_address: ip,
    user_agent: navigator.userAgent,
  }
}

/**
 * Helper to create a complete TemplateView object with all fields
 * @param templateId - Template ID
 * @returns TemplateView object ready for insertion
 */
export async function createTemplateView(templateId: string): Promise<TemplateView> {
  const ip = await getUserIP()

  return {
    template_id: templateId,
    source_url: document.referrer || null,
    ip_address: ip,
    user_agent: navigator.userAgent,
  }
}
