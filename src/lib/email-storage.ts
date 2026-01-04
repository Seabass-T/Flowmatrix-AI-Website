/**
 * LocalStorage helper for email persistence
 * Allows users to remain "unlocked" after email capture
 */

const STORAGE_KEY = 'fmai_email'

/**
 * Get saved email from localStorage
 * @returns Email string or null if not found
 */
export function getSavedEmail(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Save email to localStorage
 * @param email - Email address to save
 */
export function saveEmail(email: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, email)
  } catch {
    console.error('Failed to save email to localStorage')
  }
}

/**
 * Clear saved email from localStorage
 */
export function clearSavedEmail(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Silently ignore errors
  }
}

/**
 * Check if an email is saved in localStorage
 * @returns Boolean indicating if email exists
 */
export function isEmailSaved(): boolean {
  return !!getSavedEmail()
}
