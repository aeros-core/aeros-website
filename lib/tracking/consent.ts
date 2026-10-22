/**
 * Visitor consent for advertising/measurement tracking on aeros-x.com (client only).
 *
 * Model (Aeros Meta tracking contract v2, shared with app.aeros-x.com):
 * - Region mode is inferred from the browser time zone: `Europe/*` → `opt_in`, else `notice`.
 * - The choice lives in localStorage `aeros_tracking_consent` as `granted` | `denied`.
 * - Tracking allowed = notice ? choice !== 'denied' : choice === 'granted'.
 * - A Global Privacy Control signal keeps tracking allowed but switches Meta to Limited Data Use.
 *
 * State is exposed as a tiny external store for `useSyncExternalStore`, so components read it
 * without effects and render nothing about it on the server (where the choice is unknown).
 */
import {
  ANON_ID_STORAGE_KEY,
  CONSENT_RECEIPT_URL,
  CONSENT_STORAGE_KEY,
  isTrackingHost,
} from './config'
import { uuidv4 } from './ids'
import type { ConsentChoice, ConsentMode, ConsentSource, EffectiveConsent } from './types'

export type ConsentSnapshot = {
  /** False on the server and during hydration, where the stored choice can't be known. */
  ready: boolean
  choice: ConsentChoice | null
  /** The visitor reopened the banner from a "Cookie settings" control. */
  settingsOpen: boolean
}

const SERVER_SNAPSHOT: ConsentSnapshot = { ready: false, choice: null, settingsOpen: false }

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

let snapshot: ConsentSnapshot | null = null
const listeners = new Set<() => void>()
let returnFocusTo: HTMLElement | null = null

export function getConsentMode(): ConsentMode {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? ''
    return timeZone.startsWith('Europe/') ? 'opt_in' : 'notice'
  } catch {
    // If the region can't be inferred, fail closed: ask before tracking.
    return 'opt_in'
  }
}

export function hasGlobalPrivacyControl(): boolean {
  try {
    return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true
  } catch {
    return false
  }
}

export function isTrackingAllowed(mode: ConsentMode, choice: ConsentChoice | null): boolean {
  return mode === 'notice' ? choice !== 'denied' : choice === 'granted'
}

function readStoredChoice(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

function current(): ConsentSnapshot {
  if (!snapshot) snapshot = { ready: true, choice: readStoredChoice(), settingsOpen: false }
  return snapshot
}

function update(patch: Partial<ConsentSnapshot>) {
  snapshot = { ...current(), ...patch }
  listeners.forEach((listener) => listener())
}

function onStorage(event: StorageEvent) {
  // A choice made in another tab applies here too.
  if (event.key === CONSENT_STORAGE_KEY) update({ choice: readStoredChoice() })
}

export function subscribeConsent(listener: () => void): () => void {
  listeners.add(listener)
  if (listeners.size === 1) window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) window.removeEventListener('storage', onStorage)
  }
}

export function getConsentSnapshot(): ConsentSnapshot {
  return current()
}

export function getServerConsentSnapshot(): ConsentSnapshot {
  return SERVER_SNAPSHOT
}

/** Whether Meta tracking may run in this browser right now. */
export function trackingAllowedNow(): boolean {
  return isTrackingAllowed(getConsentMode(), current().choice)
}

export function effectiveConsent(): EffectiveConsent {
  if (!trackingAllowedNow()) return 'denied'
  return hasGlobalPrivacyControl() ? 'ldu' : 'granted'
}

/** Reopens the banner so the visitor can change their choice. */
export function openCookieSettings(trigger?: HTMLElement | null) {
  returnFocusTo = trigger ?? null
  update({ settingsOpen: true })
}

export function closeCookieSettings() {
  update({ settingsOpen: false })
  restoreFocus()
}

/** Stores the visitor's choice, closes the banner and records a consent receipt. */
export function chooseConsent(choice: ConsentChoice, source: ConsentSource) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice)
  } catch {
    // Storage blocked (e.g. some private modes): the choice still holds for this page.
  }
  update({ choice, settingsOpen: false })
  sendConsentReceipt(choice, source)
  restoreFocus()
}

function restoreFocus() {
  const target = returnFocusTo
  returnFocusTo = null
  if (target?.isConnected) target.focus()
}

function anonId(): string {
  try {
    const existing = window.localStorage.getItem(ANON_ID_STORAGE_KEY)
    if (existing && UUID_RE.test(existing)) return existing
    const id = uuidv4()
    window.localStorage.setItem(ANON_ID_STORAGE_KEY, id)
    return id
  } catch {
    return uuidv4()
  }
}

function sendConsentReceipt(state: ConsentChoice, source: ConsentSource) {
  try {
    // Receipts are production evidence; local and preview hosts would only add noise (and CORS
    // rejects them anyway).
    if (!isTrackingHost(window.location.hostname)) return
    const body = JSON.stringify({
      state,
      mode: getConsentMode(),
      gpc: hasGlobalPrivacyControl(),
      source,
      surface: 'website',
      anon_id: anonId(),
    })
    void fetch(CONSENT_RECEIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      credentials: 'omit',
      keepalive: true,
    }).catch(() => {
      // Fire-and-forget: a failed receipt (including a 404 before the backend ships) never
      // affects the visitor.
    })
  } catch {
    // Never let a receipt break the page.
  }
}
