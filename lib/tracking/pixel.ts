/**
 * The Meta Pixel on aeros-x.com (client only).
 *
 * `components/analytics/MetaPixel.tsx` boots it once and loads fbevents.js through next/script.
 * Every call here is a no-op unless the pixel was booted, the page is on a production host and
 * a tracked route, and the visitor's consent allows tracking — and every fbq call is wrapped so a
 * marketing call can never break a page.
 */
import {
  APP_HOST,
  META_PIXEL_ID,
  contactEventsAllowedOn,
  isTrackingHost,
  isUntrackedPath,
} from './config'
import { effectiveConsent, hasGlobalPrivacyControl, trackingAllowedNow } from './consent'
import { uuidv4 } from './ids'
import type { LeadTrackingInput } from './types'

type Fbq = {
  (...args: unknown[]): void
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  push: Fbq
  loaded: boolean
  version: string
  /** Read by fbevents.js: stop it from firing its own PageView on history.pushState. */
  disablePushState?: boolean
  /** Ours: set once `init` ran, so a re-evaluated module (dev HMR) never inits twice. */
  aerosInitialised?: boolean
}

type FbqWindow = Window & { fbq?: Fbq; _fbq?: Fbq }

export type ContactChannel = 'whatsapp' | 'email' | 'phone'

let booted = false
/** The consent state last applied to fbq (`grant`/`revoke` are only sent on a change). */
let appliedAllowed = false
/** The URL of the last PageView sent, so one URL never reports twice (first load, StrictMode). */
let lastPageViewUrl: string | null = null
const bootListeners = new Set<() => void>()

function fbq(...args: unknown[]) {
  try {
    const queue = (window as FbqWindow).fbq
    queue?.(...args)
  } catch {
    // A marketing call must never break the page.
  }
}

/** True when this page may run the pixel at all: a production host and a tracked route. */
export function pixelEnabledHere(): boolean {
  return isTrackingHost(window.location.hostname) && !isUntrackedPath(window.location.pathname)
}

export function subscribePixelBoot(listener: () => void): () => void {
  bootListeners.add(listener)
  return () => {
    bootListeners.delete(listener)
  }
}

export function isPixelBooted(): boolean {
  return booted
}

/** Meta's base-code queue stub: calls made before fbevents.js loads wait in `queue`. */
function createStub(): Fbq {
  const stub = ((...args: unknown[]) => {
    if (stub.callMethod) stub.callMethod(...args)
    else stub.queue.push(args)
  }) as Fbq
  stub.queue = []
  stub.push = stub
  stub.loaded = true
  stub.version = '2.0'
  return stub
}

/**
 * Installs fbq and initialises the pixel. Idempotent. Order matters — Meta applies these at
 * `init`, so they must come first:
 *   1. autoConfig off: no automatic button-click / page-metadata scraping (the partner form holds
 *      an EIN; only the events we fire explicitly are sent).
 *   2. Global Privacy Control → Limited Data Use.
 *   3. Not allowed (yet) → `consent revoke`, so Meta receives nothing until the visitor allows it.
 */
export function bootPixel(): void {
  if (booted) return
  try {
    const w = window as FbqWindow
    if (!w.fbq) {
      const stub = createStub()
      w.fbq = stub
      if (!w._fbq) w._fbq = stub
    }
    // App Router navigations report their own PageView (see trackPageView).
    w.fbq.disablePushState = true

    const allowed = trackingAllowedNow()
    if (!w.fbq.aerosInitialised) {
      fbq('set', 'autoConfig', false, META_PIXEL_ID)
      if (hasGlobalPrivacyControl()) fbq('dataProcessingOptions', ['LDU'], 0, 0)
      if (!allowed) fbq('consent', 'revoke')
      fbq('init', META_PIXEL_ID)
      w.fbq.aerosInitialised = true
    }
    appliedAllowed = allowed
    booted = true
  } catch {
    return
  }
  bootListeners.forEach((listener) => listener())
}

/** Applies a consent change to the running pixel: `grant` on allow, `revoke` on deny. */
export function syncPixelConsent(): void {
  if (!booted) return
  const allowed = trackingAllowedNow()
  if (allowed === appliedAllowed) return
  fbq('consent', allowed ? 'grant' : 'revoke')
  appliedAllowed = allowed
}

/**
 * One PageView per URL. The first load and every App Router navigation come through here (fbevents'
 * own pushState listener is disabled). A visitor who allows tracking mid-page gets the PageView
 * for the page they are on, once.
 */
export function trackPageView(url: string): void {
  if (!booted || !pixelEnabledHere() || !trackingAllowedNow() || url === lastPageViewUrl) return
  lastPageViewUrl = url
  fbq('track', 'PageView')
}

export function trackEvent(
  name: string,
  params: Readonly<Record<string, string | number>>,
  eventId: string
): void {
  if (!booted || !pixelEnabledHere() || !trackingAllowedNow()) return
  fbq('track', name, { ...params }, { eventID: eventId })
}

/** Which contact channel a link opens, if any. */
export function contactChannel(href: string): ContactChannel | null {
  const value = href.trim().toLowerCase()
  if (value.startsWith('mailto:')) return 'email'
  if (value.startsWith('tel:')) return 'phone'
  if (value.startsWith('whatsapp:')) return 'whatsapp'
  try {
    const { hostname } = new URL(value)
    if (hostname === 'wa.me' || hostname === 'api.whatsapp.com') return 'whatsapp'
  } catch {
    // Relative or malformed href — not a contact link.
  }
  return null
}

/** Copies the current page's `utm_*` and `fbclid` onto a marketplace link (never overwriting). */
export function decorateAppLink(anchor: HTMLAnchorElement): void {
  try {
    const target = new URL(anchor.href)
    if (target.hostname !== APP_HOST) return
    let changed = false
    new URLSearchParams(window.location.search).forEach((value, key) => {
      if ((key.startsWith('utm_') || key === 'fbclid') && value && !target.searchParams.has(key)) {
        target.searchParams.set(key, value)
        changed = true
      }
    })
    if (changed) anchor.href = target.toString()
  } catch {
    // Leave the link as it was.
  }
}

/**
 * One delegated, capture-phase listener for the whole site, so no page needs wiring:
 * - every link to app.aeros-x.com carries the landing page's ad parameters into the app;
 * - every WhatsApp / mailto / tel link reports a `Contact` event (when tracking is allowed),
 *   except on the privacy and cookie pages, where such a tap is a data-protection request.
 * Middle-clicks count too (`auxclick`). Returns the cleanup.
 */
export function installLinkListeners(): () => void {
  const onActivate = (event: MouseEvent) => {
    if (event.type === 'auxclick' && event.button !== 1) return
    const target = event.target
    if (!(target instanceof Element)) return
    const anchor = target.closest('a[href]')
    if (!(anchor instanceof HTMLAnchorElement)) return

    decorateAppLink(anchor)
    const channel = contactChannel(anchor.getAttribute('href') ?? '')
    if (channel && contactEventsAllowedOn(window.location.pathname)) {
      try {
        trackEvent('Contact', { content_category: channel }, uuidv4())
      } catch {
        // Ignore — the link still opens.
      }
    }
  }
  document.addEventListener('click', onActivate, true)
  document.addEventListener('auxclick', onActivate, true)
  return () => {
    document.removeEventListener('click', onActivate, true)
    document.removeEventListener('auxclick', onActivate, true)
  }
}

function readCookie(name: string): string | undefined {
  try {
    const entry = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`))
    return entry ? decodeURIComponent(entry.slice(name.length + 1)) : undefined
  } catch {
    return undefined
  }
}

function fbcFromUrl(): string | undefined {
  try {
    const fbclid = new URLSearchParams(window.location.search).get('fbclid')
    return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined
  } catch {
    return undefined
  }
}

/**
 * The context a lead form sends to its server action so the server-side Lead mirrors the browser
 * Lead (same event id → Meta deduplicates). Null when tracking isn't allowed on this page, in
 * which case neither side reports the lead.
 */
export function getLeadTrackingContext(): LeadTrackingInput | null {
  try {
    if (!pixelEnabledHere() || !trackingAllowedNow()) return null
    return {
      eventId: uuidv4(),
      consent: effectiveConsent(),
      fbp: readCookie('_fbp'),
      fbc: readCookie('_fbc') ?? fbcFromUrl(),
      eventSourceUrl: window.location.href,
    }
  } catch {
    return null
  }
}
