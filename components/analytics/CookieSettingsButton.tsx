'use client'

import { useSyncExternalStore } from 'react'
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  openCookieSettings,
  subscribeConsent,
} from '@/lib/tracking/consent'

/** Reopens the cookie banner so the visitor can change their choice. */
export default function CookieSettingsButton({
  className,
  children = 'Cookie settings',
}: {
  className?: string
  children?: React.ReactNode
}) {
  const { settingsOpen } = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  )

  return (
    <button
      type="button"
      aria-expanded={settingsOpen}
      onClick={(event) => openCookieSettings(event.currentTarget)}
      className={className}
    >
      {children}
    </button>
  )
}
