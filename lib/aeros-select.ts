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

type CustomersSection = {
  kind: 'customers'
  heading: string
  intro?: string
  items: Array<{ name: string; note?: string }>
}

type StatsSection = {
  kind: 'stats'
  heading?: string
  intro?: string
  items: Array<{ value: string; label: string }>
}

export type AerosSelectSection =
  | SpecsSection
  | FeaturesSection
  | UseCasesSection
  | VariantsSection
  | FaqSection
  | CustomersSection
  | StatsSection

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
  name: 'AeroSeal',
  tagline:
    'AeroSeal V3 — a manual cup-sealing machine for paper and PET cups. In service at Starbucks, McDonald\'s, KFC, and Dunkin\' across India.',
  hero: {
    eyebrow: 'Aeros Select · Equipment',
    title: 'AeroSeal V3.',
    subtitle:
      'A manual, countertop hot-seal machine for paper and PET cups. Already in daily service at Starbucks, McDonald\'s, KFC, and Dunkin\' counters across India.',
  },
  highlights: [
    { label: 'Cup top diameter', value: '80 / 90 / 92 / 98 mm' },
    { label: 'Compatible cups', value: 'Paper (Aqueous, PE, PLA) + PET' },
    { label: 'Operation', value: 'Manual countertop' },
    { label: 'From', value: '$799 — intro $699 until NRA show' },
  ],
  sections: [
    {
      kind: 'customers',
      heading: 'Trusted by India\'s largest chains.',
      intro:
        'AeroSeal V3 is installed and in daily service across some of India\'s biggest QSR and coffee operators.',
      items: [
        { name: 'Starbucks', note: 'India' },
        { name: 'McDonald\'s', note: 'India' },
        { name: 'KFC', note: 'India' },
        { name: 'Dunkin\'', note: 'India' },
      ],
    },
    {
      kind: 'stats',
      items: [
        { value: '7,281', label: 'Machines built' },
        { value: '56.92 M', label: 'Cups & tubs sealed' },
        { value: '15+', label: 'Countries' },
      ],
    },
    {
      kind: 'variants',
      heading: 'The AeroSeal lineup.',
      intro:
        'Four products cover the counter — from a 60 ml shot cup to a 1 L tub, plus the precut foils that go on top. Every machine is manual countertop.',
      items: [
        {
          name: 'AeroSeal Cup Sealer — V3',
          tags: ['Manual', '60 ml – 600 ml cups', 'From $799'],
          body: 'The entry machine. Hot-seals paper and PET cups from 2 oz (60 ml) up to 20 oz (600 ml). Ships with the standard four-die set — 80, 90, 92, 98 mm. Intro $699 for the first 15 days, ends at the NRA show.',
        },
        {
          name: 'AeroSeal Tub Sealer',
          tags: ['Manual', 'Up to 1 L tubs', 'Beverage cups to 8 oz'],
          body: 'Same look and feel as the cup sealer, with a wider sealing range — yoghurt and dessert tubs up to 1 L, plus beverage cups up to 8 oz (250 ml). Built for dairy lines, dessert counters, and meal-prep kitchens.',
        },
        {
          name: 'AeroSeal V5 — One for everything',
          tags: ['Flagship', 'Cups + tubs', 'One machine, one workflow'],
          body: 'The flagship. One machine to seal the entire container portfolio — cups, tubs, dessert pots, meal boxes — through a single workflow at the counter. Built for cloud kitchens and delivery operations that need a single SOP across SKUs.',
        },
        {
          name: 'AeroSeal Foils',
          tags: ['Consumable', 'Precut', 'Printed MOQ 30 k'],
          body: 'Precisely shaped and sized aluminium foil lids, cut from large rolls. Airtight, leak-proof, drop-and-seal — no in-machine cutter required. Plain foils stocked in single-case quantities; printed runs from 30,000 pieces per design.',
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Standard specifications.',
      intro:
        'Every AeroSeal V3 ships with the standard four-die set. Custom geometries and freight options below cover the rest.',
      items: [
        { label: 'Model', value: 'AeroSeal V3' },
        { label: 'Operation', value: 'Manual, countertop, single-motion pull-handle' },
        { label: 'Cup top diameters', value: '80, 90, 92, 98 mm — four-die set included (80 / 90 typically paper, 92 / 98 typically PET)' },
        { label: 'Compatible cup coatings', value: 'Aqueous, PE, PLA on paper + virgin PET' },
        { label: 'Cup heights supported', value: '90 – 200 mm' },
        { label: 'Foil format', value: 'Precut foil discs — no in-machine cutting required' },
        { label: 'Sealing temperature', value: '0 – 250 °C, digital PID controller' },
        { label: 'Sealing time', value: '0 – 5 s, digital timer' },
        { label: 'Build', value: 'Stainless steel housing, food-grade contact parts' },
        { label: 'Pricing', value: 'From $799 · introductory $699 — first 15 days, ends at the NRA show' },
        { label: 'Lead time — standard', value: '15 days door-to-door via DHL air' },
        { label: 'Lead time — custom', value: '30 days build + 15 days DHL air' },
        { label: 'Bulk freight', value: 'LCL and 20 ft FCL available for higher-load orders' },
      ],
    },
    {
      kind: 'features',
      heading: 'What is in the box.',
      items: [
        {
          name: 'Four-die set — 80 / 90 / 92 / 98 mm',
          body: 'Swap dies for the cup you are running. 80 mm and 90 mm cover most paper-cup sizes; 92 mm and 98 mm cover PET cold cups including our U-Shape range.',
        },
        {
          name: 'Precut foil discs',
          body: 'AeroSeal foils ship pre-cut to size — drop, seal, done. No in-machine cutter, no ragged edges, no jammed-cutter downtime.',
        },
        {
          name: 'Digital PID temperature control',
          body: 'Holds the seal head within ±1 °C so the seal looks the same on cup #1 and cup #1,000.',
        },
        {
          name: 'Works across cup coatings',
          body: 'Seals cleanly on Aqueous, PE, and PLA-lined paper cups, plus virgin PET — one machine across the cold-drinks counter.',
        },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Built for these operations.',
      items: [
        {
          name: 'QSR cold-drink counters',
          body: 'Seals burger-meal soft drinks, iced teas, and lemonades at the counter — survives the bag and the drive-thru window without leaks.',
        },
        {
          name: 'Coffee chains',
          body: 'Cold brew, iced lattes, and Frappé-style drinks sealed clean for grab-and-go and aggregator delivery.',
        },
        {
          name: 'Bubble tea & boba bars',
          body: '92 mm and 98 mm dies handle PET U-Shape cold cups with tapioca pearls and popping boba — no splashing at shaker handoff.',
        },
        {
          name: 'Cloud kitchens & delivery',
          body: 'Spill-proof seal survives bag transit on Zomato, Swiggy, Zepto, and Blinkit handoffs — fewer refunds, fewer 1-star reviews.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'Which cup sizes will AeroSeal seal?',
          a: 'Any cup with an 80, 90, 92, or 98 mm top diameter. 80 and 90 mm are typically paper cups; 92 and 98 mm are typically PET cold cups. All four dies ship in the standard V3 box.',
        },
        {
          q: 'What about a cup size that is not on the standard die set?',
          a: 'We build to spec. A custom AeroSeal V3 around your cup geometry takes 30 days to manufacture and 15 days for DHL air delivery. Send us the cup drawing to start.',
        },
        {
          q: 'What is the price?',
          a: 'AeroSeal V3 starts at $799. There is an introductory $699 price for the first 15 days, ending at the NRA show.',
        },
        {
          q: 'What is the MOQ for printed foils?',
          a: '30,000 pieces per design for custom-printed AeroSeal foils. Plain foils are stocked and available in single-case quantities.',
        },
        {
          q: 'Do I need a foil cutter?',
          a: 'No — AeroSeal foils ship precut. Drop the foil disc, pull the handle, the cup is sealed. There is no cutter to maintain and no offcut waste.',
        },
        {
          q: 'Is there a seal counter on the machine?',
          a: 'No. AeroSeal V3 is a clean, manual machine — temperature controller, timer, and seal head. No digital seal counter.',
        },
        {
          q: 'How is it shipped?',
          a: 'Standard V3 ships door-to-door in 15 days via DHL air. For multi-machine rollouts, we offer LCL and 20 ft FCL freight at lower per-unit cost — ask us for a quote.',
        },
        {
          q: 'Is installation included?',
          a: 'AeroSeal V3 is plug-and-play. Unbox, plug into single-phase mains, set temperature, run.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order an AeroSeal V3',
}

const uShapePetCups: AerosSelectProduct = {
  slug: 'u-shape-pet-cups',
  name: 'U-Shape PET Cups',
  tagline:
    'Crystal-clear 350 ml / 12 oz PET cold cup with a curved U-base — paired with a matching 92 mm PET sipper lid.',
  hero: {
    eyebrow: 'Aeros Select · Packaging',
    title: 'U-Shape PET cups.',
    subtitle:
      'A premium clear 350 ml cold cup with a rounded U-base, paired with a 92 mm PET sipper lid. Food-grade virgin PET, ready to ship from Mumbai, India.',
  },
  highlights: [
    { label: 'Top diameter', value: '92 mm — fits our sipper lid' },
    { label: 'Volume', value: '350 ml / 12 oz' },
    { label: 'Material', value: 'Food-grade virgin PET (resin 1)' },
    { label: 'Pack', value: '1,800 cups / case · 3,600 lids / case' },
  ],
  sections: [
    {
      kind: 'variants',
      heading: 'The launch pair.',
      intro:
        'One cup and one lid, designed to ship together. The 92 mm top diameter is shared across the pair so they fit first-time, every time.',
      items: [
        {
          name: '350 ml / 12 oz U-Shape Cup',
          tags: ['TD 92 · BD 48 · H 90 mm', '11.50 g', 'Single wall'],
          body: 'Curved U-base, rolled 92 mm rim. Sized for single-serve cold drinks and bubble tea. Single SKU today; larger volumes on the same 92 mm rim are next on the roadmap.',
        },
        {
          name: '92 mm PET Sipper Lid — TF',
          tags: ['Ø 92 mm', '3.60 g', 'No straw cut'],
          body: 'Tear-foil sipper top with no straw slot — drink straight from the lid. Matched 1:1 to the U-shape cup so there are no mismatched sleeves to manage.',
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Specifications.',
      intro:
        'The numbers below are what ships out of our warehouse. Carton sizes are dialled in for standard pallet patterns.',
      items: [
        { label: 'Volume', value: '350 ml / 12 oz' },
        { label: 'Cup dimensions', value: 'TD 92 · BD 48 · H 90 mm' },
        { label: 'Material · wall', value: 'Virgin food-grade PET (resin 1) · single wall' },
        { label: 'Cup weight', value: '11.50 g per piece' },
        { label: 'Cup pack', value: '50 pcs / sleeve × 36 sleeves = 1,800 cups / case' },
        { label: 'Cup carton', value: '555 × 400 × 535 mm · 20.70 kg net / 21.91 kg gross' },
        { label: 'Matching lid', value: '92 mm PET sipper, tear-foil top, no straw cut · 3.60 g' },
        { label: 'Lid pack', value: '50 pcs / sleeve × 72 sleeves = 3,600 lids / case' },
        { label: 'Lid carton', value: '800 × 410 × 515 mm · 12.96 kg net / 14.56 kg gross' },
        { label: 'Wrapped', value: 'No — supplied loose-stack in sleeves' },
        { label: 'Use temperature', value: 'Cold drinks only — PET softens above ~60 °C' },
      ],
    },
    {
      kind: 'features',
      heading: 'Why the U-shape matters.',
      items: [
        {
          name: 'Curved U-base',
          body: 'No sharp internal corners — drinks pour cleanly, ice cubes and tapioca pearls do not get trapped, and the cup looks fuller from the front.',
        },
        {
          name: 'Rolled 92 mm rim',
          body: 'A flat, even rim gives the sipper lid a clean snap and the sealing film a uniform contact surface — fewer popped lids on delivery handoffs.',
        },
        {
          name: 'Stackable cases',
          body: 'Cups nest flush in 50-count sleeves and 36 sleeves to a carton. Cartons are sized for standard Indian pallet patterns.',
        },
        {
          name: 'One pair, no mix-ups',
          body: 'The cup and the sipper lid share the same 92 mm top diameter. Order both together and the line never needs to think about lid SKUs again.',
        },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Built for these drinks.',
      items: [
        {
          name: 'Bubble tea & boba',
          body: 'Pairs with a 90 / 95 mm sealer (AeroSeal covers this range) and wide-bore straws for tapioca and popping pearls.',
        },
        {
          name: 'Cold-pressed juice',
          body: 'Crystal clarity shows off the colour of the juice — important on a chilled retail shelf where the cup is the packaging.',
        },
        {
          name: 'Smoothies & shakes',
          body: '350 ml is the right portion for single-serve smoothies. Rigid wall holds shape under a tight seal or a press-fit sipper lid.',
        },
        {
          name: 'Iced coffee & cold brew',
          body: 'The sipper lid lets the customer drink straight off the cup — no straw needed for delivery or grab-and-go.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'What sizes are available right now?',
          a: 'A single 350 ml / 12 oz U-shape SKU on a 92 mm rim. Additional volumes on the same rim are on the roadmap — write to us if you need a specific size.',
        },
        {
          q: 'What is the MOQ for plain (unprinted) cups and lids?',
          a: 'No MOQ on the stocked SKU — order a single case (1,800 cups or 3,600 lids) on the Aeros app and we dispatch from Mumbai.',
        },
        {
          q: 'Can I print on these?',
          a: 'PET is a print-ready surface. Custom printed runs are quoted on request — write in with the artwork and quantity and we will scope a lead time.',
        },
        {
          q: 'Are these cups recyclable?',
          a: 'Yes — PET (resin code 1) is the most widely recycled plastic in India and globally. Rinse, remove the lid, and drop in any PET stream.',
        },
        {
          q: 'Can I use these with hot drinks?',
          a: 'No — PET softens above ~60 °C. For hot drinks use our paper hot-cup range (single-wall or double-wall).',
        },
        {
          q: 'Will my existing sealer machine work?',
          a: 'The 92 mm rim sits inside the working range of standard 90 / 95 mm cup sealers, including AeroSeal.',
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
