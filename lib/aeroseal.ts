import { APP_MARKETPLACE_URL } from './categories'

export const AEROSEAL_TAGLINE =
  'The sealing platform for beverage delivery. Cups, tubs, and the aluminium seal foils that go on them — engineered as one, stocked across India and the US.'

export const AEROSEAL_HERO_PROBLEM =
  'Leaking smoothies. Spilled boba. Refunded orders, 1-star reviews, and DoorDash, Zomato, and Swiggy credits eating your margin. The seal is the last thing that touches a delivery — and the first thing the customer judges.'

export const AEROSEAL_HERO_PROMISE =
  'AeroSeal fixes that. One brand for every cup and tub your kitchen ships — sourced, branded, and supported by Aeros across India and the US.'

export const AEROSEAL_ORDER_URL = APP_MARKETPLACE_URL
export const AEROSEAL_ORDER_LABEL = 'Order on the Aeros app'

export type AerosealCategory = 'cup' | 'tub' | 'universal'

export type AerosealModel = {
  slug: 'mini' | 'plus' | 'pro' | 'tub' | 'one'
  name: string
  fullName: string
  category: AerosealCategory
  positioning: string
  tagline: string
  blurb: string
  format: string
  throughput: string
  power: string
  footprintMm: string
  weightKg: string
  cupCompat: string
  tubCompat: string
  bestFor: string
  highlights: string[]
  isFlagship?: boolean
}

export const AEROSEAL_MODELS: AerosealModel[] = [
  {
    slug: 'mini',
    name: 'Mini',
    fullName: 'AeroSeal Mini',
    category: 'cup',
    positioning: 'Entry',
    tagline: 'The countertop manual.',
    blurb:
      'Pull-handle cup sealer for outlets serving up to 200 sealed cups a day. Smallest footprint, lowest entry cost, zero ramp-up.',
    format: 'Countertop · manual lever',
    throughput: '300 cups / hr',
    power: '500 W · 110 / 220 V · 50/60 Hz',
    footprintMm: '270 × 310 × 510',
    weightKg: '21 kg',
    cupCompat: '90 / 95 mm · 250 – 700 ml',
    tubCompat: '—',
    bestFor: 'Single-counter cafés, boba kiosks, juice bars, weekend popups',
    highlights: [
      'Digital PID temperature, ±1 °C',
      '90 mm and 95 mm die in box',
      'Plug-and-play — no install',
    ],
  },
  {
    slug: 'plus',
    name: 'Plus',
    fullName: 'AeroSeal Plus',
    category: 'cup',
    positioning: 'Standard',
    tagline: 'The boba-bar workhorse.',
    blurb:
      'Semi-automatic cup sealer. Place the cup, the machine seals and ejects. Built to absorb lunch-rush spikes without operator fatigue.',
    format: 'Countertop · auto-seal cycle',
    throughput: '500 – 700 cups / hr',
    power: '750 W · 110 / 220 V · 50/60 Hz',
    footprintMm: '330 × 410 × 670',
    weightKg: '38 kg',
    cupCompat: '90 / 95 mm · 250 – 700 ml',
    tubCompat: '—',
    bestFor: 'Bubble tea shops, juice counters, smoothie chains, multi-outlet QSR',
    highlights: [
      'Auto film-cut after every seal',
      'Cycle counter & service alerts',
      'Stainless food-contact surfaces',
    ],
  },
  {
    slug: 'pro',
    name: 'Pro',
    fullName: 'AeroSeal Pro',
    category: 'cup',
    positioning: 'High volume',
    tagline: 'The central-kitchen cup line.',
    blurb:
      'Fully automatic, conveyor-fed, with cup auto-detect, date coding, and film auto-cut. Built for high-volume cloud kitchens shipping cups by the thousand.',
    format: 'Floor-standing · conveyor-fed',
    throughput: '1,000 – 1,200 cups / hr',
    power: '1,200 W · 208 / 220 V',
    footprintMm: '750 × 560 × 1,150',
    weightKg: '95 kg',
    cupCompat: '90 / 95 mm · 250 – 700 ml',
    tubCompat: '—',
    bestFor: 'Cloud and ghost kitchens, franchise commissaries, beverage brands at scale',
    highlights: [
      'Auto cup-detect on conveyor',
      'Inline date / lot coder',
      'Free remote install + on-site visit in major metros',
    ],
  },
  {
    slug: 'tub',
    name: 'Tub',
    fullName: 'AeroSeal Tub',
    category: 'tub',
    positioning: 'Kitchen',
    tagline: 'For soups, gravies, and bowls.',
    blurb:
      'Manual tub sealer for the back-of-house. Hot-seals round food tubs from 250 ml to 1 L (8 – 32 oz) — the leak that kills delivery reviews, finally fixed.',
    format: 'Countertop · manual lever',
    throughput: '400 tubs / hr',
    power: '650 W · 110 / 220 V · 50/60 Hz',
    footprintMm: '300 × 350 × 540',
    weightKg: '26 kg',
    cupCompat: '—',
    tubCompat: '100 / 120 / 150 mm · 250 ml – 1 L',
    bestFor: 'Soup chains, ramen shops, biryani brands, açai bowls, ghost kitchens',
    highlights: [
      'Round tubs 100 – 150 mm',
      'Works with pre-cut aluminium foil lids',
      'Same PID platform as cup line',
    ],
  },
  {
    slug: 'one',
    name: 'One',
    fullName: 'AeroSeal One',
    category: 'universal',
    isFlagship: true,
    positioning: 'Flagship · Universal',
    tagline: 'One machine. Every format.',
    blurb:
      'The flagship. Quick-change tooling swaps between cup heads and tub heads in under 90 seconds — so one machine seals your entire delivery portfolio. Cups, tubs, oddly shaped bowls. Done.',
    format: 'Floor-standing · multi-format',
    throughput: '800 – 900 / hr',
    power: '1,100 W · 208 / 220 V',
    footprintMm: '720 × 540 × 1,120',
    weightKg: '88 kg',
    cupCompat: '90 / 95 mm · 250 – 700 ml',
    tubCompat: '100 / 120 / 150 mm · 250 ml – 1 L',
    bestFor: 'Mixed kitchens running beverages + meals on the same delivery line',
    highlights: [
      'Cup + tub heads (both ship)',
      '90-second tool change',
      'Universal die: 90 / 95 / 100 / 120 / 150 mm',
    ],
  },
]

export function getAerosealModelBySlug(
  slug: string
): AerosealModel | undefined {
  return AEROSEAL_MODELS.find((m) => m.slug === slug)
}

export const AEROSEAL_SPECS: Array<{ label: string; value: string }> = [
  { label: 'Sealing temperature', value: '0 – 250 °C, digital PID controller' },
  { label: 'Sealing time', value: '0 – 5 s, digital timer' },
  { label: 'Film roll width', value: '95 / 105 / 130 mm' },
  { label: 'Film roll yield', value: '≈ 3,000 seals per roll' },
  { label: 'Build', value: 'Stainless steel housing, food-grade contact parts' },
  {
    label: 'Compliance',
    value: 'FDA food-contact · NSF · UL (US) · FSSAI · CE · ISI (India)',
  },
]

export const AEROSEAL_BUILT_FOR: Array<{ name: string; body: string }> = [
  {
    name: 'Bubble tea & boba bars',
    body: 'The category lead. 90 mm cup seal handles tapioca pearls and popping boba without splashing during shaker handoff — the standard in every boba shop on the marketplace.',
  },
  {
    name: 'Cold-pressed juice & wellness',
    body: 'Tamper-evident hot seal locks in HPP juice, kombucha, and turmeric shots for retail-counter sale and same-day delivery.',
  },
  {
    name: 'Smoothies, shakes & lemonades',
    body: 'Thick mixes and frozen blends survive the bag — sealed once, sipped fresh, no leaks across the longest drive.',
  },
  {
    name: 'Beverage delivery on every app',
    body: 'Spill-proof seal survives 45-minute drives on DoorDash, UberEats, Grubhub, Zomato, Swiggy, Zepto, and Blinkit — fewer refunds, fewer credits, fewer 1-star reviews.',
  },
  {
    name: 'Soup, ramen, dal & gravies',
    body: 'AeroSeal Tub locks soup, broth, dressings, dals, and curries into round tubs from 8 oz to 32 oz — no leak, no spill, no soggy bag.',
  },
  {
    name: 'Poke, açai, biryani & bowls',
    body: 'Foil-lid the bowl, film-seal the drink cup. One brand, one delivery, one less complaint at the door.',
  },
]

export type AerosealAccessory = {
  slug: string
  name: string
  blurb: string
  spec: string
}

export const AEROSEAL_ECOSYSTEM: AerosealAccessory[] = [
  {
    slug: 'foils',
    name: 'AeroSeal Foils',
    blurb:
      'Aluminium-based seal foils, tuned to AeroSeal heat profiles. Clear, branded, or co-printed with your logo — the consumable every machine ships.',
    spec: 'Aluminium laminate · 95 / 105 / 130 mm widths · ≈ 3,000 seals per roll',
  },
  {
    slug: 'lids',
    name: 'AeroSeal Lids',
    blurb:
      'Pre-cut aluminium foil lids for tub sealing. Tamper-evident with a printed tear-back tab — or your own artwork.',
    spec: 'Aluminium · 100 / 120 / 150 mm diameters · 40 µm food-grade',
  },
]

export const AEROSEAL_FOIL_PRINT = {
  moq: '30,000 pcs',
  colors: 'Up to 4',
  material: 'Aluminium laminate, food-grade',
  leadTime: '4 – 5 weeks from artwork approval',
  notes:
    'Vector artwork preferred (AI / EPS / PDF). Pantone spot colours supported within the 4-colour limit. Full print spec sheet available on request.',
}

export const AEROSEAL_VS_TINCAN = {
  intro:
    'A lot of beverage operators still seam aluminium cans. Here is why the AeroSeal + PET cup combination wins on cost, speed, branding, and customer experience.',
  rows: [
    {
      dimension: 'Capex (equipment)',
      aeroseal: 'From a countertop AeroSeal Mini to a floor-standing Pro — well under the cost of a can line',
      tincan: 'Entry-level can seamer typically 8 – 20× the price of an AeroSeal Plus',
    },
    {
      dimension: 'Throughput',
      aeroseal: '300 – 1,200 sealed cups / hr',
      tincan: '60 – 200 cans / hr on a small seamer',
    },
    {
      dimension: 'Consumable cost per unit',
      aeroseal: 'PET cup + aluminium seal foil — pennies per cup',
      tincan: 'Aluminium can + end + pre-printed label — multiple times more',
    },
    {
      dimension: 'Branding',
      aeroseal: 'Full-wrap printed cup + 4-colour printed foil — change artwork per drink, per season, per outlet',
      tincan: 'Pre-printed cans only — 50,000+ MOQ per SKU, frozen artwork',
    },
    {
      dimension: 'Customer visibility',
      aeroseal: 'See-through PET shows the drink — colour, layers, fruit, toppings. Built for boba, smoothies, and matcha.',
      tincan: 'Opaque can — no visibility into the drink',
    },
    {
      dimension: 'Format flexibility',
      aeroseal: 'One machine handles 90 / 95 mm cups, 250 – 700 ml, hot or cold',
      tincan: 'Each can diameter and height needs separate tooling',
    },
    {
      dimension: 'Footprint',
      aeroseal: 'Countertop from 270 mm wide; Pro line floor unit',
      tincan: 'Floor unit, typically 1.5 m+ footprint plus depalletiser',
    },
    {
      dimension: 'Maintenance',
      aeroseal: 'Plug-and-play, wear parts swap in minutes, no calibration',
      tincan: 'Seam-roll calibration required regularly to avoid bad seams',
    },
    {
      dimension: 'MOQ to launch a new SKU',
      aeroseal: 'Stock cup + custom-printed foil from 30,000 pcs',
      tincan: 'Cans typically need a 50,000 – 100,000 minimum per SKU',
    },
  ],
}

export const AEROSEAL_FAQ: Array<{ q: string; a: string }> = [
  {
    q: 'Which cup and tub sizes does AeroSeal handle?',
    a: 'Cups: any 90 mm or 95 mm rim, 90 – 200 mm height (250 – 700 ml). Tubs: round 100, 120, or 150 mm (250 ml – 1 L / 8 – 32 oz). The AeroSeal One ships with all five dies.',
  },
  {
    q: 'How do I order?',
    a: 'One link. Place every order on the Aeros app — live pricing, live stock, live delivery dates across the entire AeroSeal range and consumables. India and US warehouses.',
  },
  {
    q: 'What seal foils should I order?',
    a: 'AeroSeal Foils — aluminium-laminated seal foils in 95, 105, and 130 mm widths. One roll seals ≈ 3,000 cups. Stocked clear or printed on the Aeros app.',
  },
  {
    q: 'What is the MOQ for printed foils?',
    a: '30,000 pieces per design. Up to 4 colours, food-grade aluminium laminate, 4 – 5 week lead time from artwork approval. Vector artwork preferred.',
  },
  {
    q: 'Why AeroSeal + PET cups instead of tin cans?',
    a: 'A fraction of the equipment cost, 5 – 10× the throughput per hour, full-wrap printed branding you can change per drink, and see-through PET that shows the colour and layers of the drink. See the comparison above.',
  },
  {
    q: 'Is installation included?',
    a: 'Mini, Plus, and Tub are plug-and-play — unbox, plug in (110 / 220 V), run. Pro and One ship with free remote onboarding and an on-site visit in major US and Indian metros.',
  },
  {
    q: 'What is the warranty?',
    a: '12 months on parts and labour from delivery. Heating element and cutter blade are wear items with a 6-month warranty.',
  },
  {
    q: 'What is the lead time on a machine?',
    a: 'Mini, Plus, and Tub ship in 3 – 5 business days from US and Indian warehouses. Pro and One ship in 10 – 14 business days.',
  },
]
