/** The visitor's stored answer. Absent (null) means they haven't chosen yet. */
export type ConsentChoice = 'granted' | 'denied'

/**
 * `opt_in`: tracking stays off until the visitor accepts (European time zones).
 * `notice`: tracking is on unless the visitor opts out (everywhere else).
 */
export type ConsentMode = 'opt_in' | 'notice'

/** What a consent receipt records as the place the choice was made. */
export type ConsentSource = 'banner' | 'settings'

/**
 * Consent as reported to the server: not allowed → `denied`; allowed with Global Privacy Control
 * → `ldu` (Meta Limited Data Use); otherwise `granted`.
 */
export type EffectiveConsent = 'granted' | 'denied' | 'ldu'

/**
 * Sent by the browser with a form submission so the server can mirror the browser's pixel event
 * through the Conversions API with the SAME event id (Meta deduplicates the pair). The browser
 * only sends it when tracking is allowed; the server re-validates every field.
 */
export type LeadTrackingInput = {
  eventId: string
  consent: EffectiveConsent
  /** `_fbp` cookie value, when present. The server prefers the cookie it receives itself. */
  fbp?: string
  /** `_fbc` cookie value, or one built from the page's `fbclid`. */
  fbc?: string
  /** The page the form was submitted from. */
  eventSourceUrl?: string
}
