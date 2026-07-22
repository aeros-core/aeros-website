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

/**
 * Organised by where in the property the item is used, not by material —
 * that is how a hotel purchase team actually buys.
 */
export const CATEGORIES = [
  {
    eyebrow: 'In-room dining',
    title: 'Room service that travels well.',
    body:
      'Paper containers and tubs with matching lids, plus cutlery pouches — food-grade and migration-tested, so a hot dish reaches the room the way the kitchen sent it.',
    tags: ['Containers & tubs', 'Lids', 'Cutlery pouches'],
  },
  {
    eyebrow: 'Café & F&B outlets',
    title: 'Branded, cup by cup.',
    body:
      'Paper cups and lids for the lobby café and outlets, with paper and premium carry bags for anything leaving with the guest. Printed to the property brand book.',
    tags: ['Paper cups', 'Lids', 'Paper & premium bags'],
  },
  {
    eyebrow: 'Guest room & bath',
    title: 'The small things, done properly.',
    body:
      'Toothbrush pouches, tissues, and key card holders. Low-value items a guest handles directly, which is exactly why the print and finish have to be right.',
    tags: ['Toothbrush pouches', 'Tissues', 'Key card holders'],
  },
  {
    eyebrow: 'Kitchen & back-of-house',
    title: 'Standing supply for the line.',
    body:
      'Kitchen rolls and tissue held on standing supply, on the same stock and lead-time commitment as everything else on the account.',
    tags: ['Kitchen rolls', 'Tissue', 'Standing supply'],
  },
]

/**
 * Two-shot band proving the "plain stock held ready" and "printed to the brand
 * book" claims. Both images are reused from the double wall paper cups product
 * page — they are the only premium, on-palette product photography we hold.
 *
 * TODO(arjun): we have no photography at all for paper bags, premium bags, key
 * card holders, tissue, or kitchen rolls. Those two categories render text-only
 * until real shots exist. The v5 assets are red line-art icons and are off
 * brand palette, so they are deliberately not used here.
 */
export const BRAND_PROOF = [
  {
    src: '/products/double-wall-paper-cups/hero.jpg',
    alt: 'Plain white double wall paper cups in four sizes',
    width: 2000,
    height: 1200,
    eyebrow: 'Plain stock',
    caption:
      'Held ready across almost every item, which is what makes a low MOQ possible.',
  },
  {
    src: '/products/double-wall-paper-cups/printed.jpg',
    alt: 'Double wall paper cups custom printed with brand artwork',
    width: 2000,
    height: 1280,
    eyebrow: 'Printed to spec',
    caption:
      'The same cup, run to the property brand book — colour, mark, and finish locked.',
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
