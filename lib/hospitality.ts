/**
 * Content for /hospitality — the five-star supply proof page.
 *
 * Everything customer-facing lives here so it can be edited without touching
 * the page.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * NAMED CLIENTS — PUBLISHED WITH CONSENT
 *
 * Arjun confirmed on 2026-07-22 that these brands have consented to being
 * named publicly. Everything in HOTEL_CLIENTS renders on the live page and
 * ships in the client JS bundle, so do not add a brand here without that
 * same confirmation, and remove one the moment consent is withdrawn.
 *
 * Names are rendered as plain text. Logos are third-party trademarks — only
 * ever use a logo file supplied by the brand itself. Never approximate,
 * redraw, or generate one.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type HotelClient = {
  /** Brand or group name, exactly as it should appear on the page. */
  name: string
  /** Short qualifier — city, property count, or the group it belongs to. */
  detail: string
  /**
   * Path to a brand-supplied logo in /public/clients. Leave undefined to
   * render the name as text. TODO(arjun): supply official logo files.
   */
  logo?: string
}

export const HOTEL_CLIENTS: HotelClient[] = [
  { name: 'Taj Qmin', detail: 'Central rate contract' },
  { name: 'Taj SATS', detail: 'Airline & institutional catering' },
  { name: 'JW Marriott', detail: 'International five-star chain' },
  { name: 'Fern India', detail: 'Premium Indian hotel group' },
]

/**
 * Rendered only when HOTEL_CLIENTS is empty, as a non-identifying fallback.
 * Kept so the page degrades safely if consent is ever withdrawn.
 */
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

export type SupplyCategory = {
  eyebrow: string
  title: string
  body: string
  tags: string[]
  image: string
  alt: string
  /** Renders full grid width with a wider image crop. */
  wide?: boolean
}

/**
 * Organised by where in the property the item is used, not by material —
 * that is how a hotel purchase team actually buys.
 */
export const CATEGORIES: SupplyCategory[] = [
  {
    eyebrow: 'In-room dining',
    title: 'Room service that travels well.',
    body:
      'Paper containers and tubs with matching lids, plus cutlery pouches — food-grade and migration-tested, so a hot dish reaches the room the way the kitchen sent it.',
    tags: ['Containers & tubs', 'Lids', 'Cutlery pouches'],
    image: '/products/hospitality/in-room-dining.jpg',
    alt: 'Kraft paper food containers and tubs with lids beside a paper cutlery pouch',
  },
  {
    eyebrow: 'Café & F&B outlets',
    title: 'Branded, cup by cup.',
    body:
      'Paper cups and lids for the lobby café, the banquet floor, and every outlet in the property — printed to the brand book so the cup in one city matches the cup in another.',
    tags: ['Paper cups', 'Lids', 'Printed to brand'],
    image: '/products/double-wall-paper-cups/printed.jpg',
    alt: 'Double wall paper cups custom printed with brand artwork',
  },
  {
    eyebrow: 'Guest room & bath',
    title: 'The small things, done properly.',
    body:
      'Toothbrush pouches, tissues, and key card holders. Low-value items a guest handles directly, which is exactly why the print and finish have to be right.',
    tags: ['Toothbrush pouches', 'Tissues', 'Key card holders'],
    image: '/products/hospitality/guest-room-bath.jpg',
    alt: 'Paper toothbrush pouch, key card holder sleeve, and folded facial tissues',
  },
  {
    eyebrow: 'Kitchen & back-of-house',
    title: 'Standing supply for the line.',
    body:
      'Kitchen rolls and tissue held on standing supply, on the same stock and lead-time commitment as everything else on the account.',
    tags: ['Kitchen rolls', 'Tissue', 'Standing supply'],
    image: '/products/hospitality/kitchen-boh.jpg',
    alt: 'Commercial kitchen paper towel rolls beside folded kitchen tissue',
  },
  {
    eyebrow: 'Bags & takeaway',
    title: 'What leaves with the guest.',
    body:
      'Kraft carry bags for everyday outlet use and premium white bags for retail, boutique, and gifting. The last thing a guest is handed, so the paper weight and the finish carry the property name.',
    tags: ['Kraft carry bags', 'Premium white', 'Retail & gifting'],
    image: '/products/hospitality/paper-bags.jpg',
    alt: 'Kraft and white paper carry bags with twisted paper handles, two sizes each',
    /** Spans the full grid width so five cards leave no orphan cell. */
    wide: true,
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
      'Dispatch to every property on the account from one order under our pan-India logistics agreement with Delhivery, on a seven-day lead time whether it is a metro or a resort town.',
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
      'Our Bhiwandi facility has been audited on-site by client procurement teams, including Taj Qmin and Zepto.',
  },
  {
    title: 'Printed to the brand book',
    body:
      'Print, colour, and finish are held to the property standard. A key card holder or a carry bag is a brand surface, and it gets treated like one.',
  },
  {
    title: 'Live tracking, not phone calls',
    body:
      'A pan-India logistics agreement with Delhivery moves every order, and shipment status reports live into the Aeros app — so a property can see where its stock is without chasing anyone for an update.',
  },
  {
    title: 'Low MOQ, ready stock',
    body:
      'Plain stock held across almost all items means a property can order what it actually needs this month instead of committing to a full production run.',
  },
]

export const LEGAL_ENTITY = 'Boson Machines OPC Pvt Ltd'
export const PHONE_DISPLAY = '+91 79770 77571'
export const PHONE_TEL = '+917977077571'

export const WHATSAPP_URL =
  'https://wa.me/917977077571?text=Hi%20Aeros%2C%20I%20am%20from%20a%20hotel%20purchase%20team%20and%20would%20like%20a%20sample%20kit.'

export const SAMPLES_URL =
  'mailto:sales@aeros-x.com?subject=Sample%20kit%20request%20%E2%80%94%20hotel&body=Property%20%2F%20group%3A%0ACity%3A%0AItems%20of%20interest%3A%0ADelivery%20address%3A%0AContact%20number%3A'

/**
 * Deliberately three routes. A purchase manager who has run a desk for a
 * decade will pick up a phone or send a WhatsApp long before a web form.
 */
export const CONTACT_ROUTES = [
  {
    label: 'WhatsApp',
    value: PHONE_DISPLAY,
    href: WHATSAPP_URL,
    note: 'Fastest. Send a photo of what you use today and we will match it.',
  },
  {
    label: 'Phone',
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    note: 'Speak to the person who runs the account, not a call centre.',
  },
  {
    label: 'Email',
    value: 'sales@aeros-x.com',
    href: SAMPLES_URL,
    note: 'For sample kits, rate requests, and vendor registration papers.',
  },
]

export const CONTACT_EMAIL = 'sales@aeros-x.com'

export const CONTACT_URL =
  'mailto:sales@aeros-x.com?subject=Hospitality%20supply%20%E2%80%94%20enquiry'
