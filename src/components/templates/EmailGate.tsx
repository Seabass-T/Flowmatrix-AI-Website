/**
 * EmailGate Component
 * Captures user email before revealing template deliverables
 * Saves email to Supabase and persists in localStorage
 */

import { useState, useEffect } from 'react'
import { captureEmail } from '@/lib/templates'
import { getSavedEmail, saveEmail } from '@/lib/email-storage'
import type { EmailGateProps } from './types'
import type { DeliverableType } from '@/lib/templates'

// Type-specific CTA text
const ctaText: Record<DeliverableType, { locked: string; unlocked: string }> = {
  template: {
    locked: 'Get Free Template',
    unlocked: 'Download Template'
  },
  demo: {
    locked: 'Access Live Demo',
    unlocked: 'Launch Demo'
  },
  document: {
    locked: 'Get Free Document',
    unlocked: 'Download Document'
  },
  discount: {
    locked: 'Claim Discount',
    unlocked: 'Get Your Code'
  },
  tool: {
    locked: 'Access Free Tool',
    unlocked: 'Open Tool'
  },
  course: {
    locked: 'Start Learning',
    unlocked: 'Go to Course'
  },
}

export function EmailGate({ template, onSuccess }: EmailGateProps) {
  const [email, setEmail] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const cta = ctaText[template.deliverable_type]

  // Check localStorage on mount
  useEffect(() => {
    const savedEmail = getSavedEmail()
    if (savedEmail) {
      setEmail(savedEmail)
      setIsUnlocked(true)
      // Notify parent that content is already unlocked
      onSuccess(savedEmail)
    }
  }, [onSuccess])

  // Listen for storage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'fmai_email' && e.newValue) {
        setEmail(e.newValue)
        setIsUnlocked(true)
        onSuccess(e.newValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [onSuccess])

  // Email validation (RFC 5322 simplified)
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // EDGE CASE: Returning visitor - check if email already saved
      const savedEmail = getSavedEmail()
      const isReturningVisitor = savedEmail && savedEmail === email

      if (!isReturningVisitor) {
        // New visitor or different email - save to Supabase
        const success = await captureEmail(
          email,
          template.id,
          window.location.href
        )

        if (!success) {
          setError('Something went wrong. Please try again.')
          setIsSubmitting(false)
          return
        }

        // Save to localStorage for persistence
        saveEmail(email)
      }

      // Show success flash animation
      setShowSuccess(true)

      // Wait for animation, then unlock
      setTimeout(() => {
        setIsUnlocked(true)
        setShowSuccess(false)
        onSuccess(email)
      }, 600) // Match animation duration
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Email capture error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCopyCode = async () => {
    if (template.discount_code) {
      try {
        await navigator.clipboard.writeText(template.discount_code)
        // Could add a toast notification here in the future
      } catch (err) {
        console.error('Failed to copy code:', err)
      }
    }
  }

  // LOCKED STATE - Show email form
  if (!isUnlocked) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 md:p-8 relative">
        {/* Success Flash Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 flex items-center justify-center bg-accent/20 rounded-lg animate-success-flash z-10">
            <svg className="w-16 h-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        <div className="text-center mb-6">
          {/* Lock Icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h3 className="text-xl font-semibold text-white mb-2">
            {cta.locked}
          </h3>
          <p className="text-white/60" id="email-gate-description">
            Enter your email to unlock this {template.deliverable_type}
          </p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto" aria-labelledby="email-gate-description">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              id="email-capture"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              disabled={isSubmitting}
              aria-label="Email address"
              aria-describedby="email-help"
              aria-invalid={!!error}
              className="flex-1 px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="px-6 py-3 bg-accent text-black font-medium rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Unlocking...</span>
                </>
              ) : (
                'Unlock Free'
              )}
            </button>
          </div>

          <p id="email-help" className="sr-only">
            Enter your email to unlock this free resource
          </p>

          {error && (
            <p className="text-red-400 text-sm mt-2 text-center animate-shake" role="alert">
              {error}
            </p>
          )}

          <p className="text-white/40 text-xs text-center mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </div>
    )
  }

  // UNLOCKED STATE - Show CTA
  return (
    <div className="bg-card border border-accent/30 rounded-lg p-6 md:p-8 animate-unlock" role="region" aria-label="Unlocked content">
      <div className="text-center">
        {/* Unlock Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">
          Access Unlocked!
        </h3>

        {/* Type-specific content: Discount Code Display */}
        {template.deliverable_type === 'discount' && template.discount_code && (
          <div className="mb-6">
            <p className="text-white/60 text-sm mb-3" id="discount-code-label">Your discount code:</p>
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-black border border-accent/50 rounded-lg">
              <code className="text-accent font-mono text-lg font-semibold" aria-labelledby="discount-code-label">
                {template.discount_code}
              </code>
              <button
                onClick={handleCopyCode}
                className="text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 rounded p-1"
                aria-label={`Copy discount code ${template.discount_code}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
            {template.discount_expiry && (
              <p className="text-white/40 text-xs mt-2">
                Expires: {new Date(template.discount_expiry).toLocaleDateString()}
              </p>
            )}
          </div>
        )}

        {/* CTA Button */}
        {template.deliverable_url && (
          <a
            href={template.deliverable_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            {cta.unlocked}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}

        <p className="text-white/60 text-sm mt-4">
          Check your email - we sent you a copy!
        </p>
      </div>
    </div>
  )
}
