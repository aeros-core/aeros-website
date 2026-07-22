/**
 * Content for /hospitality — the five-star supply proof page.
 *
 * Everything customer-facing lives here so it can be edited without touching
 * the page.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * NAMED CLIENTS — DO NOT PUBLISH WITHOUT WRITTEN SIGN-OFF
 *
 * We supply Taj Qmin (central rate contract), Taj SATS, JW Marriott and Fern
 * India. As of the last check we do NOT have written permission from any of
 * them to use their name or marks publicly.
 *
 * Anything added to HOTEL_CLIENTS below is rendered on the live page AND
 * ships in the client JS bundle. Only add a name once that brand has given
 * written approval — one entry per approved brand.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type HotelClient = {
  /** Brand or group name, exactly as it should appear on the page. */
  name: string
  /** Short qualifier — city, property count, or the group it belongs to. */
  detail: string
}

/** Empty until brands approve. Page falls back to the anonymous block. */
export const HOTEL_CLIENTS: HotelClient[] = []

/** Non-identifying descriptions of the kinds of accounts we run. */
export const CLIENT_SEGMENTS = [
  'Luxury hotel groups',
  'Airline & institutional catering',
  'International five-star chains',
  'Premium Indian hotel brands',
]

/** Headline numbers. All three verified — see AGENTS note above before edits. */
export const SUPPLY_METRICS = [
  { value: '10+', label: 'Five-star properties supplied' },
  { value: 'Since 2021', label: 'Supplying five-star India' },
  { value: '7 days', label: 'Pan-India lead time' },
]

export const CATEGORIES = [
  {
    eyebrow: 'Paper packaging',
    title: 'Containers, cups, and lids.',
    body:
      'Paper containers and tubs, branded paper cups, and matching lids — food-grade, migration-tested, and printed to the property brand book.',
    tags: ['Containers & tubs', 'Paper cups', 'Lids'],
  },
  {
    eyebrow: 'Bags & guest-facing',
    title: 'What the guest actually holds.',
    body:
      'Paper bags, premium carry bags, and key card holders. The pieces that leave the property with the guest, so print and finish have to hold up.',
    tags: ['Paper bags', 'Premium bags', 'Key card holders'],
  },
  {
    eyebrow: 'Housekeeping consumables',
    title: 'The floors and the kitchen.',
    body:
      'Tissue and kitchen rolls on standing supply, held to the same stock and lead-time commitment as the packaging lines.',
    tags: ['Tissue', 'Kitchen rolls', 'Standing supply'],
  },
]

export const OPERATING_MODEL = [
  {
    step: '01',
    title: 'Spec lock',
    body:
      'We take the property standard — material, GSM, print, certification — and lock it as a fixed spec so every reorder matches the first one.',
  },
  {
    step: '02',
    title: 'Made at our own plant',
    body:
      'Production runs against that locked spec at our Bhiwandi, Mumbai facility. One plant, one process, no broker in between.',
  },
  {
    step: '03',
    title: 'Plain stock held ready',
    body:
      'We hold plain stock across almost every item, which is what lets us take low MOQs and cover a banquet spike without a fresh production run.',
  },
  {
    step: '04',
    title: 'Seven days, pan-India',
    body:
      'Dispatch to every property on the account from one order, on a seven-day lead time whether it is a metro or a resort town.',
  },
]

/** Why the five-star account is a different problem than a regular one. */
export const STANDARDS = [
  {
    title: 'Certified, not just claimed',
    body:
      'FSC and ISO certified, with migration testing on every packaging item — the food-contact documentation a procurement head needs, supplied with the shipment.',
  },
  {
    title: 'A plant that has been audited',
    body:
      'Our Bhiwandi facility has been audited on-site by client procurement teams, including a luxury hotel group and a national quick-commerce platform.',
  },
  {
    title: 'Printed to the brand book',
    body:
      'Print, colour, and finish are held to the property standard. A key card holder or a carry bag is a brand surface, and it gets treated like one.',
  },
  {
    title: 'Low MOQ, ready stock',
    body:
      'Plain stock held across almost all items means a property can order what it actually needs this month instead of committing to a full production run.',
  },
]

export const CONTACT_EMAIL = 'sales@aeros-x.com'

export const CONTACT_URL =
  'mailto:sales@aeros-x.com?subject=Hospitality%20supply%20%E2%80%94%20enquiry'
