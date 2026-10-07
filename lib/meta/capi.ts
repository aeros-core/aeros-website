/**
 * Meta Conversions API (server side) for aeros-x.com.
 *
 * Mirrors a browser pixel event from the server with the same `event_id`, so Meta counts the pair
 * once and still gets the event when an ad blocker stopped the pixel. Dark by default: nothing is
 * sent unless BOTH `META_PIXEL_ID` and `META_CAPI_ACCESS_TOKEN` are set (server-only env vars;
 * never NEXT_PUBLIC_). Optional `META_CAPI_TEST_EVENT_CODE` routes events to Events Manager →
 * Test Events while verifying.
 *
 * Never throws into the caller: every failure is logged with Meta's error and swallowed.
 * Log lines use the backend's `meta.capi: sent` / `meta.capi: send failed` wording so the same
 * searches find both.
 */
import 'server-only'

import { createHash } from 'node:crypto'
import { cookies, headers } from 'next/headers'
import { after } from 'next/server'
import { isTrackingHost } from '@/lib/tracking/config'
import type { LeadTrackingInput } from '@/lib/tracking/types'

const GRAPH_API_VERSION = 'v23.0'
const SEND_TIMEOUT_MS = 5_000
const DEFAULT_EVENT_SOURCE_URL = 'https://www.aeros-x.com/'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
/** `_fbp` / `_fbc` shape: fb.<subdomain index>.<creation ms>.<random or fbclid>[.<appendix>] */
const FB_COOKIE_RE = /^fb\.\d\.\d{10,16}\.[A-Za-z0-9._-]{1,500}$/
const IP_RE = /^[0-9a-fA-F:.]{3,45}$/

type CapiConfig = { pixelId: string; accessToken: string; testEventCode?: string }

type CapiEvent = {
  event_name: string
  event_time: number
  event_id: string
  event_source_url: string
  action_source: 'website'
  user_data: {
    em?: string[]
    ph?: string[]
    client_ip_address?: string
    client_user_agent?: string
    fbp?: string
    fbc?: string
  }
  custom_data?: Record<string, string | number>
  data_processing_options: string[]
  data_processing_options_country?: number
  data_processing_options_state?: number
}

type GraphResponse = {
  events_received?: number
  fbtrace_id?: string
  error?: {
    message?: string
    type?: string
    code?: number
    error_subcode?: number
    error_user_msg?: string
    fbtrace_id?: string
  }
}

function capiConfig(): CapiConfig | null {
  const pixelId = process.env.META_PIXEL_ID?.trim()
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN?.trim()
  if (!pixelId || !accessToken) return null
  if (!/^\d+$/.test(pixelId)) {
    console.error('meta.capi: META_PIXEL_ID is not a numeric dataset id; not sending')
    return null
  }
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE?.trim() || undefined
  return { pixelId, accessToken, testEventCode }
}

function sha256(value: string): string {
  return createHash('sha256').update(value, 'utf8').digest('hex')
}

/** Meta's email normalisation: trimmed and lower-cased. */
export function normalizeEmail(raw: string): string | null {
  const value = raw.trim().toLowerCase()
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? value : null
}

/**
 * Meta's phone normalisation: digits only, country code included, no `+` or leading zeros.
 * A 10-digit national number gets `defaultCountryCode` (the partner form is US-only, so `1`).
 * Returns null when the country can't be determined rather than sending a wrong number.
 */
export function normalizePhone(raw: string, defaultCountryCode = '1'): string | null {
  const trimmed = raw.trim()
  let digits = trimmed.replace(/\D/g, '')
  if (!digits) return null
  if (!trimmed.startsWith('+')) {
    if (digits.startsWith('00')) {
      digits = digits.slice(2) // international dialling prefix
    } else {
      const national = digits.replace(/^0+/, '') // trunk prefix
      digits = national.length === 10 ? `${defaultCountryCode}${national}` : national
    }
  }
  return /^[1-9]\d{7,14}$/.test(digits) ? digits : null
}

function validFbCookie(value: string | undefined): string | undefined {
  return value && FB_COOKIE_RE.test(value) ? value : undefined
}

function requestHost(h: Headers): string {
  const raw = h.get('x-forwarded-host') ?? h.get('host') ?? ''
  return raw.split(',')[0].trim().split(':')[0].toLowerCase()
}

/** The visitor's IP: the first `x-forwarded-for` hop (set by Vercel's edge), else `x-real-ip`. */
function clientIp(h: Headers): string | undefined {
  const ip = (h.get('x-forwarded-for')?.split(',')[0] ?? h.get('x-real-ip') ?? '').trim()
  return IP_RE.test(ip) ? ip : undefined
}

function eventSourceUrl(candidate: string | undefined): string {
  try {
    if (!candidate) return DEFAULT_EVENT_SOURCE_URL
    const url = new URL(candidate)
    return url.protocol === 'https:' && isTrackingHost(url.hostname)
      ? url.toString()
      : DEFAULT_EVENT_SOURCE_URL
  } catch {
    return DEFAULT_EVENT_SOURCE_URL
  }
}

async function sendEvents(config: CapiConfig, events: CapiEvent[]): Promise<void> {
  const summary = {
    events: events.map((e) => `${e.event_name}:${e.event_id}`),
    test: Boolean(config.testEventCode),
  }
  try {
    const response = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${config.pixelId}/events`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // The access token travels in the body, never in the URL (URLs end up in logs).
        body: JSON.stringify({
          data: events,
          access_token: config.accessToken,
          ...(config.testEventCode ? { test_event_code: config.testEventCode } : {}),
        }),
        signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
        cache: 'no-store',
      }
    )
    const json = (await response.json().catch(() => null)) as GraphResponse | null
    if (!response.ok) {
      const error = json?.error
      console.error('meta.capi: send failed', {
        ...summary,
        status: response.status,
        code: error?.code,
        subcode: error?.error_subcode,
        type: error?.type,
        message: error?.message,
        user_message: error?.error_user_msg,
        fbtrace_id: error?.fbtrace_id,
      })
      return
    }
    console.log('meta.capi: sent', {
      ...summary,
      events_received: json?.events_received,
      fbtrace_id: json?.fbtrace_id,
    })
  } catch (err) {
    console.error('meta.capi: send failed', {
      ...summary,
      reason: err instanceof Error ? `${err.name}: ${err.message}` : String(err),
    })
  }
}

type LeadInput = {
  email: string
  phone: string
  tracking: LeadTrackingInput | undefined
  customData: Readonly<Record<string, string>>
}

/**
 * Schedules a server-side `Lead` that mirrors the browser's (same event id), sent after the
 * response so Meta's latency never delays the form. Sends nothing unless the env vars are set,
 * the browser said tracking is allowed, and the request came to a production host. Only the
 * contact email and phone are sent, hashed — callers must never pass anything else (no EIN).
 */
export async function scheduleMetaLead({ email, phone, tracking, customData }: LeadInput) {
  try {
    const config = capiConfig()
    if (!config) return
    if (!tracking || (tracking.consent !== 'granted' && tracking.consent !== 'ldu')) return
    if (typeof tracking.eventId !== 'string' || !UUID_RE.test(tracking.eventId)) return

    const h = await headers()
    // Never from Vercel previews or local builds, even if they carry the env vars.
    if (!isTrackingHost(requestHost(h))) return

    const jar = await cookies()
    // Global Privacy Control reaches the server too, as the Sec-GPC request header.
    const limitedDataUse = tracking.consent === 'ldu' || h.get('sec-gpc') === '1'
    const normalizedEmail = normalizeEmail(email)
    const normalizedPhone = normalizePhone(phone)
    const userAgent = h.get('user-agent')?.slice(0, 512)

    const event: CapiEvent = {
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: tracking.eventId,
      event_source_url: eventSourceUrl(tracking.eventSourceUrl),
      action_source: 'website',
      user_data: {
        ...(normalizedEmail ? { em: [sha256(normalizedEmail)] } : {}),
        ...(normalizedPhone ? { ph: [sha256(normalizedPhone)] } : {}),
        client_ip_address: clientIp(h),
        client_user_agent: userAgent || undefined,
        // Prefer the cookies this request carried; fall back to what the browser read.
        fbp: validFbCookie(jar.get('_fbp')?.value) ?? validFbCookie(tracking.fbp),
        fbc: validFbCookie(jar.get('_fbc')?.value) ?? validFbCookie(tracking.fbc),
      },
      custom_data: { ...customData },
      data_processing_options: limitedDataUse ? ['LDU'] : [],
      ...(limitedDataUse
        ? { data_processing_options_country: 0, data_processing_options_state: 0 }
        : {}),
    }

    after(() => sendEvents(config, [event]))
  } catch (err) {
    console.error('meta.capi: Lead not scheduled', {
      reason: err instanceof Error ? err.message : String(err),
    })
  }
}
