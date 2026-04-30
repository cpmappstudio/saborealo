/**
 * Convert a human-formatted phone string (e.g. "(305) 614-0202")
 * into a `tel:` href, preserving an optional leading country code.
 * Defaults to "+1" when the string has no `+` prefix.
 */
export function phoneToHref(phone: string, defaultCountryCode = "1"): string {
  const trimmed = phone.trim()
  const hasPlus = trimmed.startsWith("+")
  const digits = trimmed.replace(/\D/g, "")
  if (!digits) return ""
  return hasPlus ? `tel:+${digits}` : `tel:+${defaultCountryCode}${digits}`
}

export function emailToHref(email: string): string {
  const trimmed = email.trim()
  return trimmed ? `mailto:${trimmed}` : ""
}
