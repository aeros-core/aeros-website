'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useSyncExternalStore } from 'react'
import { FBEVENTS_SRC, isTrackingHost, isUntrackedPath } from '@/lib/tracking/config'
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  subscribeConsent,
} from '@/lib/tracking/consent'
import {
  bootPixel,
  installLinkListeners,
  isPixelBooted,
  subscribePixelBoot,
  syncPixelConsent,
  trackPageView,
} from '@/lib/tracking/pixel'

const subscribeNever = () => () => {}
const browserHostname = () => window.location.hostname
const serverHostname = () => ''
const serverBooted = () => false

/**
 * The Meta Pixel for aeros-x.com. Mounted once, in the root layout (inside <Suspense>, because
 * it reads the search params).
 *
 * - Runs only on aeros-x.com / www.aeros-x.com and never on /nra/* routes.
 * - Boots fbq (consent, LDU, init) before rendering next/script, so fbevents.js always finds the
 *   queue it expects; `disablePushState` stops fbevents from adding its own navigation PageViews.
 * - Reports one PageView per URL on the first load and on every App Router navigation.
 * - Installs the site-wide link listener: Contact events for WhatsApp/mailto/tel links, and
 *   utm_* / fbclid carried onto app.aeros-x.com links (that part runs on every host).
 */
export default function MetaPixel() {
  const pathname = usePathname()
  const search = useSearchParams().toString()
  const hostname = useSyncExternalStore(subscribeNever, browserHostname, serverHostname)
  const { choice } = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  )
  const booted = useSyncExternalStore(subscribePixelBoot, isPixelBooted, serverBooted)
  const enabled = isTrackingHost(hostname) && !isUntrackedPath(pathname)

  useEffect(() => installLinkListeners(), [])

  useEffect(() => {
    if (enabled) bootPixel()
  }, [enabled])

  useEffect(() => {
    if (!enabled) return
    // `choice` re-runs this when the visitor accepts or opts out on this page.
    syncPixelConsent()
    trackPageView(search ? `${pathname}?${search}` : pathname)
  }, [enabled, choice, pathname, search])

  if (!enabled || !booted) return null
  return <Script id="meta-pixel" src={FBEVENTS_SRC} strategy="afterInteractive" />
}
