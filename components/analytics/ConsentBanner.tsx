'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useSyncExternalStore } from 'react'
import { Button } from '@aeros/react'
import { isUntrackedPath } from '@/lib/tracking/config'
import {
  chooseConsent,
  closeCookieSettings,
  getConsentMode,
  getConsentSnapshot,
  getServerConsentSnapshot,
  hasGlobalPrivacyControl,
  isTrackingAllowed,
  subscribeConsent,
} from '@/lib/tracking/consent'
import { syncPixelConsent } from '@/lib/tracking/pixel'
import type { ConsentChoice } from '@/lib/tracking/types'

const linkClass =
  'inline-flex min-h-11 items-center text-fg-primary underline underline-offset-4 hover:text-fg-muted transition-colors'

const buttonClass =
  'flex-1 sm:flex-none rounded-full px-6 focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2'

/**
 * The cookie banner. Shown once while no choice is stored (never on /nra/*), and again whenever
 * the visitor opens "Cookie settings". European time zones get Accept / Decline and tracking
 * stays off until they accept; everyone else gets a notice with OK / Opt out.
 *
 * Rendered first in <body> so keyboard and screen-reader users reach it first; it renders nothing
 * on the server, because the stored choice is only known in the browser.
 */
export default function ConsentBanner() {
  const pathname = usePathname()
  const { ready, choice, settingsOpen } = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  )
  const panelRef = useRef<HTMLElement>(null)

  const firstVisit = ready && choice === null && !isUntrackedPath(pathname)
  const open = ready && (settingsOpen || firstVisit)

  useEffect(() => {
    // Opened on request: move focus into the banner (Escape or Close hands it back).
    if (settingsOpen) panelRef.current?.focus()
  }, [settingsOpen])

  if (!open) return null

  const mode = getConsentMode()
  const allowed = isTrackingAllowed(mode, choice)
  const gpc = hasGlobalPrivacyControl()

  const choose = (next: ConsentChoice) => {
    chooseConsent(next, settingsOpen ? 'settings' : 'banner')
    syncPixelConsent()
  }

  const declineLabel = mode === 'opt_in' ? 'Decline' : 'Opt out'
  const acceptLabel = mode === 'opt_in' ? 'Accept' : settingsOpen ? 'Allow' : 'OK'

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
      <section
        ref={panelRef}
        tabIndex={-1}
        aria-label="Cookie choices"
        aria-describedby="cookie-banner-text"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && settingsOpen) closeCookieSettings()
        }}
        className="pointer-events-auto relative mx-auto max-w-2xl rounded-2xl border border-border-default bg-white p-5 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.28)] outline-none sm:p-6"
      >
        {settingsOpen && (
          <button
            type="button"
            onClick={closeCookieSettings}
            aria-label="Close cookie settings"
            className="absolute right-2 top-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg-primary"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" strokeLinecap="round" />
            </svg>
          </button>
        )}

        <div id="cookie-banner-text" className={settingsOpen ? 'pr-10' : undefined}>
          <p className="text-sm leading-relaxed text-fg-primary">
            We use cookies and similar tech, including Meta&apos;s pixel, to measure our ads and
            improve Aeros.{' '}
            <span className="text-fg-muted">
              {mode === 'opt_in'
                ? 'They stay off unless you accept.'
                : 'You can opt out at any time.'}
            </span>
          </p>
          {settingsOpen && (
            <p className="mt-2 text-[11px] font-mono uppercase tracking-widest text-fg-muted">
              Currently {allowed ? 'on' : 'off'}
            </p>
          )}
          {gpc && (
            <p className="mt-2 text-xs leading-relaxed text-fg-muted">
              Your browser&apos;s Global Privacy Control signal is on, so we limit how Meta can use
              this data.
            </p>
          )}
        </div>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center gap-5 text-sm">
            <Link href="/cookie-policy" className={linkClass}>
              Cookie policy
            </Link>
            <Link href="/privacy" className={linkClass}>
              Privacy policy
            </Link>
          </div>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className={buttonClass}
              onClick={() => choose('denied')}
            >
              {declineLabel}
            </Button>
            <Button
              type="button"
              variant="primary"
              size="lg"
              className={buttonClass}
              onClick={() => choose('granted')}
            >
              {acceptLabel}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
