/**
 * Meta tracking on aeros-x.com — constants shared by the consent banner, the browser pixel and the
 * server-side Conversions API sender.
 *
 * These follow the Aeros Meta tracking contract (v2), which the Flutter app at app.aeros-x.com and
 * the backend implement too. Change them together, never on one surface alone.
 */

/** The "Aeros Pixel" dataset — the same one app.aeros-x.com reports to. */
export const META_PIXEL_ID = '1747364063279124'

export const FBEVENTS_SRC = 'https://connect.facebook.net/en_US/fbevents.js'

/**
 * The pixel runs, and consent receipts are sent, ONLY on these hosts — never on localhost or on
 * Vercel preview URLs, so development traffic can't pollute the production dataset.
 */
const TRACKING_HOSTS = new Set(['aeros-x.com', 'www.aeros-x.com'])

/** Routes that are never tracked: no pixel, no PageView, no events, no first-visit banner. */
const UNTRACKED_PATH_PREFIXES = ['/nra']

/**
 * Contact links on these pages are data-protection requests, not sales intent, so tapping them
 * never reports a Contact event to Meta.
 */
const NO_CONTACT_EVENT_PATHS = new Set(['/privacy', '/cookie-policy'])

/** localStorage: the visitor's choice, `granted` | `denied` (absent = not chosen yet). */
export const CONSENT_STORAGE_KEY = 'aeros_tracking_consent'

/** localStorage: a random per-browser UUID sent with consent receipts (never sent to Meta). */
export const ANON_ID_STORAGE_KEY = 'aeros_anon_id'

/** Records each consent choice as evidence (DPDP). Fire-and-forget; failures are ignored. */
export const CONSENT_RECEIPT_URL = 'https://api.aeros-x.com/api/v1/privacy/tracking-consent'

/**
 * Links to the marketplace carry the current page's `utm_*` and `fbclid` parameters, so ad
 * attribution survives the hop from the marketing site into the app.
 */
export const APP_HOST = 'app.aeros-x.com'

/** Meta's custom_data for the US partner application Lead (browser and server send the same). */
export const PARTNER_LEAD_PARAMS = {
  content_category: 'inquiry',
  content_name: 'partner_application_us',
} as const

export function isTrackingHost(hostname: string): boolean {
  return TRACKING_HOSTS.has(hostname.toLowerCase())
}

export function isUntrackedPath(pathname: string): boolean {
  return UNTRACKED_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  )
}

export function contactEventsAllowedOn(pathname: string): boolean {
  return !NO_CONTACT_EVENT_PATHS.has(pathname.replace(/\/+$/, '') || '/')
}
