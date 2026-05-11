import { APP_MARKETPLACE_URL } from './categories'

export const AEROS_SELECT_TAGLINE =
  'Premium, hand-picked equipment and packaging — sourced, vetted, and stocked by Aeros.'

type SpecsSection = {
  kind: 'specs'
  heading: string
  intro?: string
  items: Array<{ label: string; value: string }>
}

type FeaturesSection = {
  kind: 'features'
  heading: string
  intro?: string
  items: Array<{ name: string; body: string }>
}

type UseCasesSection = {
  kind: 'use-cases'
  heading: string
  intro?: string
  items: Array<{ name: string; body: string }>
}

type VariantsSection = {
  kind: 'variants'
  heading: string
  intro?: string
  items: Array<{ name: string; body: string; tags?: string[] }>
}

type FaqSection = {
  kind: 'faq'
  heading: string
  items: Array<{ q: string; a: string }>
}

export type AerosSelectSection =
  | SpecsSection
  | FeaturesSection
  | UseCasesSection
  | VariantsSection
  | FaqSection

export type AerosSelectProduct = {
  slug: string
  name: string
  tagline: string
  hero: { eyebrow: string; title: string; subtitle: string }
  highlights: Array<{ label: string; value: string }>
  sections: AerosSelectSection[]
  orderUrl: string
  orderCtaLabel: string
}

const sealerMachines: AerosSelectProduct = {
  slug: 'sealer-machines',
  name: 'Sealer Machines',
  tagline:
    'Cup sealing machines for bubble tea, juice, and cold-brew operations — from countertop manuals to fully automatic.',
  hero: {
    eyebrow: 'Aeros Select · Equipment',
    title: 'Sealer machines.',
    subtitle:
      'Hot-seal PET, PP, and paper cups in one motion. Built for bubble-tea bars, juice counters, and cloud kitchens that need a reliable seal every time.',
  },
  highlights: [
    { label: 'Cup compatibility', value: '90 mm / 95 mm PET, PP, paper' },
    { label: 'Throughput', value: '300 – 1,200 cups/hr' },
    { label: 'Power', value: '110 V or 220 V, 50/60 Hz' },
    { label: 'Warranty', value: '12 months parts & labour' },
  ],
  sections: [
    {
      kind: 'variants',
      heading: 'Pick the right machine.',
      intro:
        'Three machine classes cover almost every operation. Pick by daily volume and counter footprint.',
      items: [
        {
          name: 'Manual sealer',
          tags: ['Countertop', '300 cups/hr'],
          body: 'Pull-handle operation. Best for outlets serving up to 200 sealed cups a day. Smallest footprint, lowest entry cost.',
        },
        {
          name: 'Semi-automatic sealer',
          tags: ['Countertop', '500 – 700 cups/hr'],
          body: 'Place the cup, machine seals and ejects. Reduces operator fatigue at lunch-rush volume; the workhorse choice for most boba shops.',
        },
        {
          name: 'Fully automatic sealer',
          tags: ['Floor-standing', '1,000 – 1,200 cups/hr'],
          body: 'Conveyor-fed with auto cup-detect, date-coding, and film auto-cut. For central kitchens, ghost-kitchen aggregators, and high-volume franchises.',
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Standard specifications.',
      intro:
        'All Aeros Select sealers ship with a standard configuration. Custom voltages and conveyor lengths are available on the automatic line.',
      items: [
        { label: 'Cup top diameter', value: '90 mm and 95 mm (interchangeable die)' },
        { label: 'Cup heights supported', value: '90 mm – 200 mm' },
        { label: 'Sealing temperature', value: '0 – 250 °C, digital PID controller' },
        { label: 'Sealing time', value: '0 – 5 s, digital timer' },
        { label: 'Film roll width', value: '95 mm / 105 mm / 130 mm' },
        { label: 'Film roll OD', value: 'Up to 220 mm — yields ≈ 3,000 seals per roll' },
        { label: 'Power consumption', value: '500 W (manual) – 1,200 W (automatic)' },
        { label: 'Build', value: 'Stainless steel housing, food-grade contact parts' },
      ],
    },
    {
      kind: 'features',
      heading: 'What is in the box.',
      items: [
        {
          name: 'Quick-swap die',
          body: 'Switch between 90 mm and 95 mm cup formats in under a minute — no tools required.',
        },
        {
          name: 'Digital PID temperature control',
          body: 'Holds the seal head within ±1 °C so the seal looks the same on cup #1 and cup #1,000.',
        },
        {
          name: 'Auto film-cut',
          body: 'Built-in cutter trims the film flush after each seal — no hanging tabs or ragged edges.',
        },
        {
          name: 'Counter & maintenance alerts',
          body: 'Tracks total seals and prompts when the heating element or cutter blade is due for service.',
        },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Built for these operations.',
      items: [
        {
          name: 'Bubble tea & boba bars',
          body: 'Standard 90 mm seal handles tapioca pearls and popping boba without splashing during shaker handoff.',
        },
        {
          name: 'Cold-pressed juice',
          body: 'Tamper-evident hot seal locks in HPP juice for retail-counter sale and same-day delivery.',
        },
        {
          name: 'Cloud kitchens & delivery',
          body: 'Spill-proof seal survives bag transit on Zomato, Swift, Zepto, and Blinkit handoffs — fewer refunds, fewer 1-star reviews.',
        },
        {
          name: 'Cafés serving cold drinks for takeaway',
          body: 'Single machine seals iced lattes, smoothies, and lemonades — no extra lid SKUs to stock.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'Which cup sizes will the machine seal?',
          a: 'Any cup with a 90 mm or 95 mm rim. The die set ships with both inserts. Cup height can be anywhere from 90 mm up to 200 mm.',
        },
        {
          q: 'What sealing film should I order?',
          a: 'Aeros stocks PP-laminated PET film in 95 mm, 105 mm, and 130 mm widths, in both clear and printed. One roll seals approximately 3,000 cups.',
        },
        {
          q: 'Is installation included?',
          a: 'The manual and semi-automatic models are plug-and-play — unbox, plug in, run. The fully automatic model ships with a free remote-onboarding session and an on-site visit in metro cities.',
        },
        {
          q: 'What is the warranty?',
          a: '12 months on parts and labour from delivery. The heating element and cutter blade are wear items and have a 6-month warranty.',
        },
        {
          q: 'Can I custom-print my film?',
          a: 'Yes — minimum order is 100 rolls (≈ 300,000 seals) on the standard 95 mm width. Lead time is 4 – 5 weeks. Reach out via the order page to start a print spec.',
        },
        {
          q: 'What is the lead time on a machine?',
          a: 'Manual and semi-automatic models ship in 3 – 5 working days from major Indian metros. Fully automatic units ship in 10 – 14 working days.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order a sealer machine',
}

const uShapePetCups: AerosSelectProduct = {
  slug: 'u-shape-pet-cups',
  name: 'U-Shape PET Cups',
  tagline:
    'Crystal-clear PET cold cups with a curved U-base — engineered to pair with our sealer machines.',
  hero: {
    eyebrow: 'Aeros Select · Packaging',
    title: 'U-Shape PET cups.',
    subtitle:
      'A premium clear cold cup with a rounded U-base, optimized for sealing machines and shelf presentation. Made from food-grade virgin PET.',
  },
  highlights: [
    { label: 'Rim diameter', value: '90 mm (standard) · 95 mm available' },
    { label: 'Material', value: 'Food-grade virgin PET (1)' },
    { label: 'Sizes', value: '360 ml · 500 ml · 700 ml' },
    { label: 'Pack', value: '50 cups / sleeve · 1,000 cups / carton' },
  ],
  sections: [
    {
      kind: 'variants',
      heading: 'Available sizes.',
      intro:
        'Three core sizes cover the bubble-tea and cold-drink range. All share a common 90 mm rim so one lid and one sealer film SKU work across the range.',
      items: [
        {
          name: '360 ml (12 oz)',
          tags: ['90 mm rim', 'H 105 mm'],
          body: 'Single-serve coffee, lemonades, kids portions. Stacks tight for retail-counter display.',
        },
        {
          name: '500 ml (16 oz)',
          tags: ['90 mm rim', 'H 130 mm'],
          body: 'Standard bubble-tea size. Comfortable hand grip and headroom for ice and toppings.',
        },
        {
          name: '700 ml (24 oz)',
          tags: ['90 mm rim', 'H 165 mm'],
          body: 'Large-format smoothies, tall iced lattes, and value-tier boba. Same lid and seal die as the smaller sizes.',
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Specifications.',
      items: [
        { label: 'Material', value: 'Virgin food-grade PET, FDA & FSSAI compliant' },
        { label: 'Resin code', value: '1 (PET) — recyclable in standard PET streams' },
        { label: 'Wall thickness', value: '0.30 mm — rigid, no flex on grab' },
        { label: 'Clarity', value: '> 92 % light transmission, no haze' },
        { label: 'Cold tolerance', value: 'Down to −20 °C, freezer-safe for slushies' },
        { label: 'Hot tolerance', value: 'Up to 60 °C — not for hot drinks' },
        { label: 'Lid compatibility', value: 'Sealable with 90 mm film, also works with PET dome and flat lids' },
        { label: 'Shelf life (unopened)', value: '24 months from manufacturing' },
      ],
    },
    {
      kind: 'features',
      heading: 'Why the U-shape matters.',
      items: [
        {
          name: 'Curved U-base',
          body: 'No sharp internal corners — drinks pour cleanly, ice cubes and tapioca pearls don\'t get trapped, and the cup looks fuller from the front.',
        },
        {
          name: 'Reinforced rim',
          body: 'Rolled 90 mm rim gives a perfectly flat sealing surface every time, so seal failures drop to near zero.',
        },
        {
          name: 'Stackable & shippable',
          body: 'Cups nest flush in 50-count sleeves; cartons are sized for standard EU and Indian pallet patterns.',
        },
        {
          name: 'Print-ready surface',
          body: 'Smooth outer wall accepts up to 4-colour offset printing. White-base or full-wrap designs both work.',
        },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Built for these drinks.',
      items: [
        {
          name: 'Bubble tea & boba',
          body: 'The category standard — pairs with a 90 mm sealer, BPA-free wide-bore straws, and standard topping ladles.',
        },
        {
          name: 'Cold-pressed juice',
          body: 'Crystal clarity shows off the colour of the juice — important when you\'re competing on a chilled retail shelf.',
        },
        {
          name: 'Smoothies & shakes',
          body: 'Wide opening accepts thick mixes and toppings; rigid wall holds shape under a tight seal.',
        },
        {
          name: 'Iced coffee & cold brew',
          body: 'Sealable for delivery — no leaks, no melted-ice dilution between counter and customer.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'What is the MOQ for plain (unprinted) cups?',
          a: 'No MOQ on stock cups — order a single carton (1,000 cups) on the marketplace and it ships next-day in metro cities.',
        },
        {
          q: 'What is the MOQ for printed cups?',
          a: 'Minimum 50,000 cups per SKU per size for custom-printed runs. Lead time is 3 – 4 weeks from artwork approval.',
        },
        {
          q: 'Are these cups recyclable?',
          a: 'Yes — PET (resin code 1) is the most widely recycled plastic in India and globally. Rinse, remove the seal film, and drop in any PET stream.',
        },
        {
          q: 'Can I use these with hot drinks?',
          a: 'No — PET deforms above 60 °C. For hot drinks use our paper hot-cup range (single-wall or double-wall).',
        },
        {
          q: 'Will my existing sealer machine work?',
          a: 'If your machine is set up for a 90 mm or 95 mm cup format, yes. The Aeros Select sealer ships with both die inserts.',
        },
        {
          q: 'Do you stock matching dome and flat lids?',
          a: 'Yes — 90 mm PET dome lids (with and without straw slot) and PET flat lids are listed alongside the cups on the marketplace.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order U-Shape PET cups',
}

export const aerosSelectProducts: AerosSelectProduct[] = [
  sealerMachines,
  uShapePetCups,
]

export function getAerosSelectProductBySlug(
  slug: string
): AerosSelectProduct | undefined {
  return aerosSelectProducts.find((p) => p.slug === slug)
}
