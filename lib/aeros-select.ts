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
  items: Array<{
    name: string
    body: string
    image?: string
    /** See the note on hero.image.fit. 'bleed' fills the card's image band edge
     * to edge; 'cutout' (default) sits a background-free shot on the card. */
    imageFit?: 'cutout' | 'bleed'
  }>
}

type VariantsSection = {
  kind: 'variants'
  heading: string
  intro?: string
  items: Array<{
    name: string
    body: string
    tags?: string[]
    href?: string
    /** When provided, the variant renders in the expanded per-row layout
     * (image gallery left, content right) instead of the compact card grid. */
    images?: string[]
    /** Small per-variant spec table rendered under the body in the expanded
     * layout. Ignored in the compact card layout. */
    specs?: Array<{ label: string; value: string }>
  }>
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

type ComparisonSection = {
  kind: 'comparison'
  heading: string
  intro?: string
  /** Overrides the default '/ versions compared' mono eyebrow. */
  eyebrow?: string
  /** Label for the first column. Defaults to 'Feature'. */
  rowHeader?: string
  columns: string[]
  rows: Array<{ label: string; values: string[] }>
}

type VideoSection = {
  kind: 'video'
  heading: string
  intro?: string
  src: string
  poster?: string
}

type DiagramSection = {
  kind: 'diagram'
  heading: string
  intro?: string
  /** A drawing authored for the web (SVG in DS colours), not a lifted deck asset. */
  image: string
  alt: string
  /** Mono label printed above the figure, e.g. 'standard sizes — inches'. */
  figureLabel?: string
  /** Optional note under the figure for units, tolerances, or caveats. */
  caption?: string
}

type FormatShowcaseSection = {
  kind: 'format-showcase'
  heading: string
  intro?: string
  /** Hero shot of the plain (unprinted) format, displayed large on the left. */
  plain: { image: string; label: string }
  /** Branded printed examples shown as a grid on the right. */
  printed: Array<{ image: string; label: string }>
}

export type AerosSelectSection =
  | SpecsSection
  | FeaturesSection
  | UseCasesSection
  | VariantsSection
  | FaqSection
  | CustomersSection
  | StatsSection
  | ComparisonSection
  | VideoSection
  | FormatShowcaseSection
  | DiagramSection

export type AerosSelectProduct = {
  slug: string
  name: string
  tagline: string
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    /** `aspect` defaults to 'wide'. Use 'tall' for portrait shots so they fill
     * a 4:5 frame instead of letterboxing inside the 16:9 one.
     *
     * `fit` controls how the shot meets the page, and every image must pick the
     * one that leaves no visible seam:
     *  - 'cutout' (default) — a background-free PNG/WebP. Rendered straight onto
     *    the page with no card behind it, so there is no edge to see.
     *  - 'bleed' — a photograph that keeps its own background (a scene, a macro).
     *    Fills the rounded frame edge to edge, so again there is no gutter.
     * Never put a shot that has its own backdrop into 'cutout'. */
    image?: {
      src: string
      alt: string
      aspect?: 'wide' | 'tall'
      fit?: 'cutout' | 'bleed'
    }
  }
  highlights: Array<{ label: string; value: string }>
  sections: AerosSelectSection[]
  orderUrl: string
  orderCtaLabel: string
  /** When set, this product is a sub-product of another. It still gets its
   * own detail page but is hidden from the top-level Aeros Select listing —
   * the parent product surfaces it via a variants section. */
  parentSlug?: string
}

const sealerMachines: AerosSelectProduct = {
  slug: 'sealer-machines',
  name: 'AeroSeal',
  tagline:
    'AeroSeal — the family of cup and tub sealers in daily service at Starbucks, McDonald\'s, KFC, and Dunkin\' across India.',
  hero: {
    eyebrow: 'Aeros Select · Equipment',
    title: 'AeroSeal.',
    subtitle:
      'A family of manual countertop sealing machines for paper cups, PET cold cups, and food tubs — plus the precut foils that go on top. In daily service at Starbucks, McDonald\'s, KFC, and Dunkin\' counters across India.',
  },
  highlights: [
    { label: 'Range', value: '60 ml cups to 1 L family tubs' },
    { label: 'Compatible', value: 'Paper, PET, PP, bagasse' },
    { label: 'Operation', value: 'Manual countertop' },
    { label: 'Lineup', value: 'Cup Sealer · Tub Sealer · V5 · Foils' },
  ],
  sections: [
    {
      kind: 'customers',
      heading: 'Trusted by India\'s largest chains.',
      intro:
        'AeroSeal is installed and in daily service across some of India\'s biggest QSR and coffee operators.',
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
          name: 'AeroSeal Cup Sealer',
          tags: ['Manual', '60 ml – 600 ml cups', 'V1 → V4'],
          body: 'The cup-sealing machine in daily service across India\'s biggest QSR and coffee chains. Hot-seals paper and PET cups from 2 oz (60 ml) up to 20 oz (600 ml). Four versions — entry, analog timer, digital control, and CE-certified premium.',
          href: '/products/aeros-select/cup-sealer',
        },
        {
          name: 'AeroSeal Tub Sealer',
          tags: ['Manual', 'Up to 1 L tubs', 'Beverage cups to 8 oz'],
          body: 'Same look and feel as the cup sealer, with a wider sealing range — yoghurt and dessert tubs up to 1 L, plus beverage cups up to 8 oz (250 ml). Built for dairy lines, dessert counters, and meal-prep kitchens.',
          href: '/products/aeros-select/tub-sealer',
        },
        {
          name: 'AeroSeal V5 — One for everything',
          tags: ['Flagship', 'Cups + tubs', 'One machine, one workflow'],
          body: 'The flagship. One machine to seal the entire container portfolio — cups, tubs, dessert pots, meal boxes — through a single workflow at the counter. Built for cloud kitchens and delivery operations that need a single SOP across SKUs.',
          href: '/products/aeros-select/v5',
        },
        {
          name: 'AeroSeal Foils',
          tags: ['Consumable', 'Precut', 'Printed MOQ 30 k'],
          body: 'Precisely shaped and sized aluminium foil lids, cut from large rolls. Airtight, leak-proof, drop-and-seal — no in-machine cutter required. Plain foils stocked in single-case quantities; printed runs from 30,000 pieces per design.',
          href: '/products/aeros-select/foils',
        },
      ],
    },
    {
      kind: 'features',
      heading: 'What defines AeroSeal.',
      items: [
        {
          name: 'Manual countertop, every machine',
          body: 'Single-motion pull-handle across the lineup. No compressed air, no PLC, no operator training beyond five minutes — just plug in, set temperature, seal.',
        },
        {
          name: 'Precut foil lids',
          body: 'AeroSeal foils ship precut to size. Drop the disc, pull the handle, done. No in-machine cutter to maintain, no ragged edges, no jammed-cutter downtime.',
        },
        {
          name: 'Stainless Steel 304 build',
          body: 'Food-grade stainless across the housing and every contact part — easy wipe-down, no rust on the wet counter, built to live in service for years.',
        },
        {
          name: 'Digital PID temperature control',
          body: 'Holds the seal head within ±1 °C across the shift, so the seal looks the same on cup #1 and cup #1,000.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'Which AeroSeal machine should I order?',
          a: 'Cup Sealer for cup-only operations (2 oz – 20 oz cups). Tub Sealer if you also run tubs up to 1 L. V5 is the flagship — one machine across the entire menu, 65 mm to 165 mm diameter, hot fills and cold drinks. See each product page for the full breakdown.',
        },
        {
          q: 'Are all AeroSeal machines manual?',
          a: 'Yes — every machine in the lineup is manual countertop. The differences are in range, controller, and certification, not in automation.',
        },
        {
          q: 'What is the MOQ for printed foils?',
          a: '30,000 pieces per design for custom-printed AeroSeal foils. Plain foils are stocked and available in single-case quantities.',
        },
        {
          q: 'Do I need a foil cutter?',
          a: 'No — AeroSeal foils ship precut. Drop the foil disc, pull the handle, the cup or tub is sealed. There is no cutter to maintain and no offcut waste.',
        },
        {
          q: 'How is it shipped?',
          a: 'Standard machines ship door-to-door in 15 days via DHL air. For multi-machine rollouts, we offer LCL and 20 ft FCL freight at lower per-unit cost — ask us for a quote.',
        },
        {
          q: 'Is installation included?',
          a: 'Every AeroSeal is plug-and-play. Unbox, plug into single-phase mains, set temperature, run.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order an AeroSeal',
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
      kind: 'video',
      heading: 'See the U-shape in hand.',
      intro:
        'Curved U-base, rolled 92 mm rim, paired with the matching sipper lid.',
      src: 'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/u-shape-pet-cups-OWGdKnNqoB871krWJvqBUvzrAbaTAG.mp4',
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

const cupSealer: AerosSelectProduct = {
  slug: 'cup-sealer',
  name: 'AeroSeal Cup Sealer',
  tagline:
    'Manual cup sealing machine for paper and PET cups, 2 oz to 20 oz. Four versions — V1 through V4 — from entry to CE-certified premium.',
  hero: {
    eyebrow: 'AeroSeal · Cup Sealer',
    title: 'AeroSeal Cup Sealer.',
    subtitle:
      'A manual countertop hot-seal machine for beverage and sauce cups — 2 oz (60 ml) up to 20 oz (600 ml). Digital temperature controller, digital timer, in-built buzzer, anti-skid base. Four versions across the lineup.',
  },
  highlights: [
    { label: 'Cup range', value: '2 oz – 20 oz (60 – 600 ml)' },
    { label: 'Seal time', value: '1 – 5 seconds' },
    { label: 'Build', value: 'Stainless Steel 304' },
    { label: 'Versions', value: 'V1 · V2 · V3 · V4' },
  ],
  sections: [
    {
      kind: 'video',
      heading: 'The AeroSeal Cup Sealer at the counter.',
      intro:
        'One handle, one motion — paper or PET, 2 oz to 20 oz, sealed clean every time.',
      src: 'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-4rbhUaG362ifgeltL2ZOD4FzvNT3KG.mp4',
    },
    {
      kind: 'customers',
      heading: 'Trusted by India\'s largest chains.',
      intro:
        'The AeroSeal Cup Sealer is the cup-sealing machine in daily service across India\'s biggest QSR and coffee operators.',
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
      heading: 'Four versions. Pick by what your counter needs.',
      intro:
        'Every version is a manual countertop machine for cups 2 oz – 20 oz. Step up the line for digital control, a heater cover, and CE certification.',
      items: [
        {
          name: 'V1 — Entry',
          tags: ['Manual', 'No timer', 'Energy controller'],
          body: 'The entry point. Pull-handle hot-seal with an energy (analog) controller. Nylon-bush base. No timer, no heater cover. The right choice for counters that just need a clean seal and nothing more.',
          images: [
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v1-1-9E4c1Vh3wWNBKIqjjlO01GMHhfcVFJ.png',
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v1-2-0gXgkjV7bFISxgvrM1AalimJhSzv37.png',
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v1-3-XJIaGmfZn9c5OhW7VmGtmQfHJJRZwB.png',
          ],
          specs: [
            { label: 'Timer', value: 'No' },
            { label: 'Temperature control', value: 'Energy controller' },
            { label: 'Base mounts', value: 'Nylon bushes' },
            { label: 'Polycarbonate heater cover', value: 'No' },
            { label: 'Certification', value: 'No' },
          ],
        },
        {
          name: 'V2 — Analog Timer',
          tags: ['Manual', 'Analog timer', 'External buzzer'],
          body: 'Adds an analog timer and an external end-of-cycle buzzer to the V1 base. Operators stop guessing seal time — the buzzer tells them when the seal is done.',
          images: [
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v2-1-eLK74jeQZIkqPCfS2dwYDuuGMaUB0L.webp',
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v2-2-r6ZBjZsrJsHuklpTpTx11GnL7XiJiQ.webp',
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v2-3-SStc3uiUpTJ8gjbZnaBX1FmFwTHbIg.webp',
          ],
          specs: [
            { label: 'Timer', value: 'Analog' },
            { label: 'Temperature control', value: 'Energy controller' },
            { label: 'Base mounts', value: 'Nylon bushes' },
            { label: 'Polycarbonate heater cover', value: 'No' },
            { label: 'Certification', value: 'No' },
          ],
        },
        {
          name: 'V3 — Digital Control',
          tags: ['Manual', 'Digital PID', 'Polycarbonate cover', 'From $799'],
          body: 'Digital PID temperature controller with ±1 °C accuracy, analog timer, external buzzer, and a polycarbonate heater cover for safety. The most-ordered version. Intro $699 — first 15 days, ends at the NRA show.',
          images: [
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v3-1-PaQPxLE5fcbGasUrdis7yi9RB49M2P.png',
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v3-2-ZJNF1YU088SU3DyJtqnVF1Cl3h578l.png',
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v3-3-CawJg51Yqe95rJNDpzJRpU42bpL7wZ.webp',
          ],
          specs: [
            { label: 'Timer', value: 'Analog' },
            { label: 'Temperature control', value: 'Digital PID' },
            { label: 'Base mounts', value: 'Nylon bushes' },
            { label: 'Polycarbonate heater cover', value: 'Yes' },
            { label: 'Certification', value: 'No' },
          ],
        },
        {
          name: 'V4 — Premium · CE',
          tags: ['Manual', 'Digital timer', 'CE certified'],
          body: 'Digital timer with internal buzzer, digital PID controller, anti-skid rubber base, polycarbonate heater cover, CE certification. The export-ready version for operators that need a paper trail with the machine.',
          images: [
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v4-1-lvFM5oSQD12bZdE1H10SQAPFj7y5qa.webp',
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v4-2-zMmpnm5EUkRdbzDBpvnZaAKhVZglrW.webp',
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-cup-sealer-v4-3-whXwGyRIuEOHdwI2VEr2SVgqxUltoY.webp',
          ],
          specs: [
            { label: 'Timer', value: 'Digital' },
            { label: 'Temperature control', value: 'Digital PID' },
            { label: 'Base mounts', value: 'Anti-skid rubber' },
            { label: 'Polycarbonate heater cover', value: 'Yes' },
            { label: 'Certification', value: 'CE' },
          ],
        },
      ],
    },
    {
      kind: 'comparison',
      heading: 'V1 → V4 at a glance.',
      intro:
        'The same chassis and seal head across all four. What changes is the controller, the timer, the safety cover, and the certification.',
      columns: ['V1', 'V2', 'V3', 'V4'],
      rows: [
        {
          label: 'Operation',
          values: ['Manual', 'Manual', 'Manual', 'Manual'],
        },
        {
          label: 'Timer',
          values: ['—', 'Analog', 'Analog', 'Digital'],
        },
        {
          label: 'Buzzer',
          values: ['—', 'External', 'External', 'Internal'],
        },
        {
          label: 'Temperature controller',
          values: ['Energy (analog)', 'Energy (analog)', 'Digital PID', 'Digital PID'],
        },
        {
          label: 'Heater cover',
          values: ['—', '—', 'Polycarbonate', 'Polycarbonate'],
        },
        {
          label: 'Base',
          values: ['Nylon bushes', 'Nylon bushes', 'Nylon bushes', 'Anti-skid rubber'],
        },
        {
          label: 'Certification',
          values: ['—', '—', '—', 'CE'],
        },
        {
          label: 'Pricing',
          values: ['Quote', 'Quote', '$799 (intro $699)', 'Quote'],
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Specifications.',
      intro:
        'Shared specs across V1 – V4. Certification and accessories differ by version (see the table above).',
      items: [
        { label: 'Operation', value: 'Manual, countertop, single-motion pull-handle' },
        { label: 'Cup range', value: '2 oz – 20 oz (60 – 600 ml) · cup heights 90 – 200 mm' },
        { label: 'Cup top diameters', value: '80, 90, 92, 98 mm — four-die set (80 / 90 typically paper, 92 / 98 typically PET)' },
        { label: 'Sealing temperature', value: '0 – 250 °C' },
        { label: 'Sealing time', value: '1 – 5 s' },
        { label: 'Rated voltage', value: 'AC 230 V, 50 Hz' },
        { label: 'Maximum current', value: '0.83 A' },
        { label: 'Rated power', value: '190 W' },
        { label: 'Dimensions', value: '28.5 (L) × 28 (W) × 61 (H) cm' },
        { label: 'Weight', value: '10.5 – 13 kg' },
        { label: 'Material', value: 'Stainless Steel 304 housing, food-grade contact parts' },
        { label: 'Foil format', value: 'AeroSeal precut foil discs — no in-machine cutter required' },
        { label: 'Lead time — standard', value: '15 days door-to-door via DHL air' },
        { label: 'Lead time — custom', value: '30 days build + 15 days DHL air' },
        { label: 'Bulk freight', value: 'LCL and 20 ft FCL available for higher-load orders' },
      ],
    },
    {
      kind: 'features',
      heading: 'Top-of-the-line, every version.',
      items: [
        {
          name: 'Four-die set — 80 / 90 / 92 / 98 mm',
          body: 'Swap dies for the cup you are running. 80 mm and 90 mm cover most paper cups; 92 mm and 98 mm cover PET cold cups including our U-Shape range.',
        },
        {
          name: 'Precut AeroSeal foils',
          body: 'Foils ship precut to size — drop, seal, done. No in-machine cutter to maintain, no offcut waste, no jammed-cutter downtime.',
        },
        {
          name: 'Stainless Steel 304 housing',
          body: 'Food-grade stainless across the body and the contact parts — easy to wipe down, no rust on the wet counter, built to live in service.',
        },
        {
          name: 'No production counter',
          body: 'AeroSeal Cup Sealer is a clean manual machine — controller, timer, buzzer, seal head. No digital seal counter, no extra electronics to fail.',
        },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Used at the counter in.',
      items: [
        {
          name: 'Coffee chains & specialty cafés',
          body: 'Cold brew, iced lattes, and Frappé-style drinks sealed clean for grab-and-go and aggregator delivery.',
        },
        {
          name: 'Cloud kitchens, QSRs & casual dining',
          body: 'Cold-drink cups sealed before bagging — survive the drive-thru window and the delivery bag without leaks.',
        },
        {
          name: 'Ice-cream parlours',
          body: 'Single-serve sundae and dessert cups sealed for retail-counter display and takeaway.',
        },
        {
          name: 'Bubble tea & boba bars',
          body: '92 mm and 98 mm dies handle PET U-Shape cold cups with tapioca pearls and popping boba — no splashing at shaker handoff.',
        },
        {
          name: 'Juice centres',
          body: 'Cold-pressed juice and smoothie cups sealed for retail-shelf and same-day delivery.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'Which version should I order?',
          a: 'V3 is the most-ordered version — digital PID control, analog timer, polycarbonate cover. Step up to V4 if you need CE certification or an internal-buzzer digital timer. V1 / V2 are for operators that want the seal and nothing else.',
        },
        {
          q: 'What cup sizes will it seal?',
          a: 'Any cup from 2 oz (60 ml) up to 20 oz (600 ml), with a top diameter of 80, 90, 92, or 98 mm. The standard four-die set ships in the box.',
        },
        {
          q: 'How does the machine work?',
          a: 'Place a precut AeroSeal foil disc on the cup, slide the cup under the seal head, pull the handle. The heated head fuses the foil to the rim in 1 – 5 seconds. The buzzer (V2+) signals the end of cycle.',
        },
        {
          q: 'What is the price?',
          a: 'AeroSeal V3 is $799, with an introductory $699 for the first 15 days, ending at the NRA show. V1 / V2 / V4 are quoted on request — talk to us.',
        },
        {
          q: 'What is the MOQ for printed foils?',
          a: '30,000 pieces per design for custom-printed AeroSeal foils. Plain foils are stocked and available in single-case quantities.',
        },
        {
          q: 'How is it shipped?',
          a: 'Standard V1 – V4 ship door-to-door in 15 days via DHL air. For multi-machine rollouts we offer LCL and 20 ft FCL freight at lower per-unit cost.',
        },
        {
          q: 'Is installation included?',
          a: 'Every AeroSeal Cup Sealer is plug-and-play. Unbox, plug into single-phase 230 V mains, set the temperature, and run.',
        },
        {
          q: 'How durable is it?',
          a: 'Stainless Steel 304 housing, food-grade contact parts, and a single moving lever. With routine cleaning it lives at the counter for years — many of our deployments at QSR chains have been in service for the better part of a decade.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order an AeroSeal Cup Sealer',
  parentSlug: 'sealer-machines',
}

const tubSealer: AerosSelectProduct = {
  slug: 'tub-sealer',
  name: 'AeroSeal Tub Sealer',
  tagline:
    'Manual tub sealing machine for the wider range — 8 oz beverage cups up to 1 L tubs. Leak-proof seals for delivery, dairy, and dessert counters.',
  hero: {
    eyebrow: 'AeroSeal · Tub Sealer',
    title: 'AeroSeal Tub Sealer.',
    subtitle:
      'Leak-proof sealing for successful food deliveries. Same look and feel as the cup sealer, with a wider sealing range — 8 oz (250 ml) beverage cups all the way up to 1 L tubs.',
  },
  highlights: [
    { label: 'Container range', value: '8 oz – 1 L (250 ml – 1,000 ml)' },
    { label: 'Seal time', value: '1 – 5 seconds' },
    { label: 'Build', value: 'Stainless Steel 304' },
    { label: 'Operation', value: 'Manual countertop' },
  ],
  sections: [
    {
      kind: 'customers',
      heading: 'Trusted by India\'s largest chains.',
      intro:
        'AeroSeal is the cup and tub sealing system in daily service across some of India\'s biggest QSR and coffee operators.',
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
      kind: 'use-cases',
      heading: 'Built for these containers.',
      intro:
        'Anything inside the 250 ml – 1 L sealing range — from a 250 ml chutney pot to a 1 L family-size ice-cream tub.',
      items: [
        {
          name: 'Soups & ramen',
          body: 'Hot soup, ramen, and broth tubs sealed tight for cloud-kitchen delivery — no spill in the bag, no soaked paper bowls at the customer\'s door.',
        },
        {
          name: 'Gravies, sauces & relish',
          body: 'Curries, gravies, and dipping sauces sealed at the prep station — saves the staple separate-container dance and stops sauce migration in transit.',
        },
        {
          name: 'Ice-cream tubs',
          body: '500 ml and 1 L ice-cream tubs sealed for retail-counter sale and home delivery. The seal acts as a tamper-evident closure and a freezer-safe lid in one.',
        },
        {
          name: 'Salads, poke bowls & meal prep',
          body: 'Single-serve salad bowls and poke containers sealed clean — dressings stay on top of the leaves, not in the bag.',
        },
        {
          name: 'Dairy & dessert pots',
          body: 'Yoghurt, mousse, parfait, and dessert pots sealed at the counter or the production line — airtight, leak-proof, ready for the chiller.',
        },
        {
          name: 'Beverage cups to 8 oz',
          body: 'The lower end of the range — 250 ml espresso-shot cups and 8 oz cold cups also work, useful for kitchens running a mixed cup-and-tub portfolio on one machine.',
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Specifications.',
      intro:
        'A heavier-duty cousin of the Cup Sealer — same chassis dimensions, more rated power for the larger seal head and wider container range.',
      items: [
        { label: 'Operation', value: 'Manual, countertop, single-motion pull-handle' },
        { label: 'Container range', value: '8 oz (250 ml) – 1 L · cup and tub formats' },
        { label: 'Sealing temperature', value: '0 – 250 °C, digital PID controller' },
        { label: 'Sealing time', value: '1 – 5 s, digital timer' },
        { label: 'Rated voltage', value: 'AC 230 V, 50 Hz' },
        { label: 'Maximum current', value: '1.3 A' },
        { label: 'Rated power', value: '300 W' },
        { label: 'Dimensions', value: '28.5 (L) × 28 (W) × 61 (H) cm' },
        { label: 'Weight', value: '12 – 14.5 kg (varies with rings and add-ons)' },
        { label: 'Material', value: 'Stainless Steel 304 housing, food-grade contact parts' },
        { label: 'Foil format', value: 'AeroSeal precut foil lids — no in-machine cutter required' },
        { label: 'Lead time — standard', value: '15 days door-to-door via DHL air' },
        { label: 'Lead time — custom', value: '30 days build + 15 days DHL air' },
        { label: 'Bulk freight', value: 'LCL and 20 ft FCL available for higher-load orders' },
      ],
    },
    {
      kind: 'features',
      heading: 'Why this machine, this range.',
      items: [
        {
          name: 'Wider seal range than the Cup Sealer',
          body: 'Same chassis, a larger seal head and a 300 W heating circuit — sized for the bigger thermal mass of a 1 L tub without losing seal time on a 250 ml cup.',
        },
        {
          name: 'Precut foil lids',
          body: 'Aluminium foil lids ship precisely shaped and sized for each container format. Airtight, leak-proof, drop-and-seal — no in-machine cutter to maintain.',
        },
        {
          name: 'Stainless Steel 304 build',
          body: 'Food-grade stainless on the housing and every contact part — easy wipe-down on the wet kitchen line, no rust, built to live in service.',
        },
        {
          name: 'Familiar to operators',
          body: 'If your team runs the AeroSeal Cup Sealer, the Tub Sealer is the same SOP — same handle motion, same controller, same timer. No retraining.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'What is the difference between the Cup Sealer and the Tub Sealer?',
          a: 'The Cup Sealer covers 2 oz – 20 oz cups (60 – 600 ml). The Tub Sealer extends the upper end of the range — 8 oz cups up to 1 L tubs — with a larger seal head and a 300 W heater. If you only run cups, the Cup Sealer is enough; if you run tubs (or both), this is the machine.',
        },
        {
          q: 'What containers does it seal?',
          a: 'Anything in the 250 ml – 1 L range — soup tubs, ice-cream tubs, salad bowls, gravy and chutney pots, dessert containers, and 8 oz beverage cups. Talk to us with your container dimensions and we will confirm fit.',
        },
        {
          q: 'How does the machine work?',
          a: 'Place a precut foil lid on the container, slide it under the seal head, pull the handle. The heated head fuses the foil to the rim in 1 – 5 seconds. The timer and PID controller keep the seal consistent across the shift.',
        },
        {
          q: 'What is the MOQ for printed foil lids?',
          a: '30,000 pieces per design for custom-printed lids. Plain stocked lids are available in single-case quantities.',
        },
        {
          q: 'Can I run both cups and tubs on the same machine?',
          a: 'Yes — the lower end of the range covers 8 oz cups, so kitchens running a mixed cup-and-tub portfolio can standardize on one Tub Sealer. For cup-only operations, the Cup Sealer is the cheaper choice.',
        },
        {
          q: 'How is it shipped?',
          a: 'Standard machine ships door-to-door in 15 days via DHL air. For multi-machine rollouts we offer LCL and 20 ft FCL freight at lower per-unit cost.',
        },
        {
          q: 'Is installation included?',
          a: 'Every AeroSeal Tub Sealer is plug-and-play. Unbox, plug into single-phase 230 V mains, set the temperature, and run.',
        },
        {
          q: 'Custom container sizes?',
          a: 'We build to spec around a non-standard container. 30 days to manufacture, 15 days for DHL air delivery. Send us the container drawing to start.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order an AeroSeal Tub Sealer',
  parentSlug: 'sealer-machines',
}

const foils: AerosSelectProduct = {
  slug: 'foils',
  name: 'AeroSeal Foils',
  tagline:
    'Precut aluminium foil lids — precisely shaped and sized for every cup and tub. Airtight, leak-proof, drop-and-seal.',
  hero: {
    eyebrow: 'AeroSeal · Foils',
    title: 'AeroSeal Foils.',
    subtitle:
      'Precut aluminium foil lids, cut from large rolls and sized to your container. Airtight seal for food and beverage containers — keeps the contents fresh and stops leaks in the delivery bag.',
  },
  highlights: [
    { label: 'Format', value: 'Precut — tear-drop or circular' },
    { label: 'Diameter range', value: '70.5 mm – 155 mm' },
    { label: 'Material', value: 'Food-grade aluminium foil' },
    { label: 'Printed MOQ', value: '30,000 pcs per design' },
  ],
  sections: [
    {
      kind: 'customers',
      heading: 'On every cup at India\'s largest chains.',
      intro:
        'AeroSeal Foils are the foil lids on cups and tubs at India\'s biggest QSR and coffee operators.',
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
      kind: 'features',
      heading: 'Why precut, why aluminium.',
      items: [
        {
          name: 'Drop and seal — no in-machine cutter',
          body: 'Foils ship precut to size for each container. Place the disc, pull the handle, the cup is sealed. No cutter blade to maintain, no offcut waste, no jammed-cutter downtime in the middle of a lunch rush.',
        },
        {
          name: 'Airtight, leak-proof, freezer-safe',
          body: 'Aluminium is a barrier against moisture, oxygen, and light — the contents stay fresh on the shelf and stable in transit. Holds its seal from the freezer through the delivery bag.',
        },
        {
          name: 'Fast, low-temperature seal',
          body: 'Aluminium\'s heat conduction lets the seal form in 1 – 5 seconds at a lower head temperature than plastic film — less energy per cup, longer heater life.',
        },
        {
          name: 'Print-ready surface',
          body: 'The branding pops off aluminium with the right offset print — tweak the design per size, get a clean tear-open peel on top of every cup. Printed runs from 30,000 pieces per design.',
        },
        {
          name: 'Pinhole venting for hot beverages',
          body: 'For drinks sealed above 85 °C we add a 0.9 – 1 mm pinhole vent — the lid stays leak-proof in transit, but built-up steam has somewhere to escape. Specify on the order if you need it.',
        },
      ],
    },
    {
      kind: 'format-showcase',
      heading: 'Tear-drop shape.',
      intro:
        'The peel-tab silhouette — plain on the left, a handful of printed runs we have shipped on the right.',
      plain: {
        image:
          'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-foils-teardrop-tear-off-CFkQbZPs7QFhIa0TbZMVJQa7uiub4p.webp',
        label: 'Plain',
      },
      printed: [
        {
          image:
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-foils-teardrop-arabic-1ShAgBXnRsYpUbZhiNE5sVRLqA25Jk.webp',
          label: 'Shakar',
        },
        {
          image:
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-foils-teardrop-Kenangan-gy1fcmscLnRAFsOWjNGNuxhsgTo1NV.webp',
          label: 'Kenangan Coffee',
        },
        {
          image:
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-foils-teardrop-a-cup-of-happiness-uvGtvECCfaGquwYJmd3v7f6DsRgQt9.webp',
          label: 'ab Coffee',
        },
        {
          image:
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-foils-teardrop-third-wave-1-RuAgjvAa7T7WgqprRqZT0giOWQuQLt.webp',
          label: 'Third Wave Coffee',
        },
        {
          image:
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-foils-teardrop-dunkin-aesp29WUZJ23OK8VGiHFsVM5UyxrD6.webp',
          label: 'Dunkin\'',
        },
        {
          image:
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-foils-teardrop-tobys-estate-LhEC59ves9rWcZvD8ximr6BsMkLFVr.webp',
          label: 'Toby\'s Estate',
        },
        {
          image:
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-foils-teardrop-THF-wC9v0y6BHANIhtCKDRJjJrwJGv6a9H.webp',
          label: 'THF',
        },
        {
          image:
            'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-foils-teardrop-subko-Ff3swlyhFSAwLegVq9huSHJgePSDLV.webp',
          label: 'Subko',
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Tear-drop foils.',
      intro:
        'The tear-drop shape has a peel tab — operators can lift the foil off the cup cleanly without a knife or a straw poke.',
      items: [
        { label: 'Ø 70.5 mm', value: '40 – 200 ml containers — sauce cups, condiments, dipping pots' },
        { label: 'Ø 80.5 mm', value: '40 – 200 ml containers — small juice and condiment cups' },
        { label: 'Ø 85 mm', value: '200 – 300 ml containers — non-standard cups and small tubs' },
        { label: 'Ø 95.5 mm', value: '250 – 650 ml cups — beverage and ice-cream cups' },
        { label: 'Ø 115 mm', value: '300 – 1,500 ml tubs — gravy, soup, rice, ice-cream tubs' },
        { label: 'Ø 125 mm', value: '300 – 1,500 ml tubs' },
      ],
    },
    {
      kind: 'specs',
      heading: 'Circular foils.',
      intro:
        'The straight circular cut sits flat to the rim — the right call when the lid is going under a press-fit dome or a snap lid downstream.',
      items: [
        { label: 'Ø 99.4 mm', value: '250 – 650 ml beverage cups' },
        { label: 'Ø 115 mm', value: '300 – 1,500 ml food tubs' },
        { label: 'Ø 125 mm', value: '300 – 1,500 ml food tubs' },
        { label: 'Ø 130 mm', value: '300 – 1,500 ml food tubs' },
        { label: 'Ø 155 mm', value: 'Larger family-size tubs' },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Built for these counters.',
      items: [
        {
          name: 'Coffee & cold-brew chains',
          body: 'Iced lattes, cold brew, and tea cups sealed cleanly for grab-and-go and aggregator delivery — paired with the AeroSeal Cup Sealer.',
        },
        {
          name: 'QSR & cloud kitchens',
          body: 'Cold-drink cups, dessert pots, dip cups, and main-course tubs sealed at the prep station — survive the bag, the bike, and the drive-thru window without leaks.',
        },
        {
          name: 'Bubble tea & boba',
          body: '95.5 mm tear-drop fits 92 / 98 mm PET U-shape cups perfectly — the tab keeps fingers off the lip when the customer tears in.',
        },
        {
          name: 'Ice-cream & dessert tubs',
          body: '115 / 125 / 130 mm circular and tear-drop foils for 500 ml and 1 L ice-cream tubs — freezer-safe and tamper-evident.',
        },
        {
          name: 'Soup, gravy & ramen delivery',
          body: 'Bigger tear-drop or circular diameters handle the wider mouths of broth and gravy tubs. Pinhole vent recommended for hot fills.',
        },
        {
          name: 'Dairy & dessert pots',
          body: 'Yoghurt, mousse, parfait, and pudding cups sealed at the production line for shelf and retail-counter sale. Food-safety declarations available on request.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'What is the MOQ for printed foils?',
          a: '30,000 pieces per design. Plain stocked foils are available in single-case quantities — order on the Aeros app and we ship from the closest metro warehouse.',
        },
        {
          q: 'What is the difference between tear-drop and circular?',
          a: 'Tear-drop has a peel tab — best for customer-facing cups where the end consumer opens the lid. Circular is a clean disc — best on production lines and under press-fit dome or snap lids.',
        },
        {
          q: 'Which size fits my cup?',
          a: 'Match the lid diameter to a few mm above your cup\'s rim diameter. For our 92 mm and 98 mm U-shape PET cups, the 95.5 mm tear-drop or 99.4 mm circular foil is the right call.',
        },
        {
          q: 'Can I get a custom size?',
          a: 'Yes, provided the order volume justifies a new cutting die — talk to us with your container drawing and target volume and we will scope it.',
        },
        {
          q: 'Do they work for hot beverages?',
          a: 'Yes, with a 0.9 – 1 mm pinhole vent. Above ~85 °C the steam needs somewhere to escape or the seal pops — specify "hot fill" on your order and we add the vent.',
        },
        {
          q: 'What machines do these run on?',
          a: 'The AeroSeal Cup Sealer (cups 2 oz – 20 oz) and AeroSeal Tub Sealer (8 oz – 1 L). The foil format works the same way on both — drop the disc, seal, done.',
        },
        {
          q: 'Are food-safety declarations available?',
          a: 'Yes — written declarations of food-contact compliance are available on request for plain and printed foils.',
        },
        {
          q: 'How are they shipped?',
          a: 'Plain stocked foils ship from the nearest metro warehouse. Printed runs ship 3 – 4 weeks after artwork approval. For high-volume orders we offer LCL and 20 ft FCL freight.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order AeroSeal Foils',
  parentSlug: 'sealer-machines',
}

const v5: AerosSelectProduct = {
  slug: 'v5',
  name: 'AeroSeal V5',
  tagline:
    'One machine to seal them all. 65 – 165 mm diameter range, up to four lid sizes, hot and cold — the flagship for cloud kitchens and multi-format menus.',
  hero: {
    eyebrow: 'AeroSeal · V5 Flagship',
    title: 'One machine to seal them all.',
    subtitle:
      'For the café that wants to serve salad. For the pasta bar that wants to serve dessert. For the biryani house that wants to serve thick shakes. Open the menu up without worrying about leaks and spills in delivery.',
    image: {
      src: '/products/v5/hero.png',
      alt: 'AeroSeal V5 sealing the full portfolio — soups, ramen, rice, biryani, gravy, and sauce containers',
      // Shot on a beige backdrop, so it fills the frame rather than sitting as
      // a beige rectangle inside a grey card.
      fit: 'bleed',
    },
  },
  highlights: [
    { label: 'Diameter range', value: '65 mm – 165 mm' },
    { label: 'Lid formats', value: 'Up to 4 different sizes' },
    { label: 'Temperature', value: 'Seals piping hot + cold' },
    { label: 'Throughput', value: '8 – 10 cups / minute' },
  ],
  sections: [
    {
      kind: 'video',
      heading: 'V5 in motion.',
      intro:
        'One head, one motion — cups, tubs, dessert pots, and family tubs through the same SOP.',
      src: 'https://fdu0vqxj8cqurkpm.public.blob.vercel-storage.com/aeroseal-v5-PUqyKPGXVIAYFkmDkYWeRsHb8sXrJB.mp4',
    },
    {
      kind: 'customers',
      heading: 'Trusted by India\'s largest chains.',
      intro:
        'The AeroSeal V5 sits at the heart of multi-format kitchens — one machine across the whole menu, from sauce pots to family-size tubs.',
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
      kind: 'features',
      heading: 'Why V5 is the flagship.',
      intro:
        'The Cup Sealer is built for cups, the Tub Sealer is built for tubs. The V5 is built for everything — one chassis, one SOP, every container on your menu.',
      items: [
        {
          name: '65 – 165 mm in one machine',
          body: 'A 100 mm range span on a single chassis. From a 65 mm sauce pot to a 165 mm family biryani tub, the V5 takes the whole menu without swapping machines.',
        },
        {
          name: 'Up to four lid sizes in rotation',
          body: 'Set up the V5 with up to four different lid formats — S, M, L, XL — and switch between them at the counter without retooling the head.',
        },
        {
          name: 'Hot fills, cold drinks, same head',
          body: 'Seals piping-hot ramen and gravy AND ice-cold thick shakes through the same head — adjust temperature on the digital PID, the rest is the same motion.',
        },
        {
          name: 'Material-agnostic',
          body: 'Works on coated paper, PP, PET, and bagasse containers — the V5 doesn\'t care what the container is made of, as long as it\'s in the diameter range.',
        },
        {
          name: 'SUS-304 contact, powder-coated frame',
          body: 'Stainless steel on every food-contact surface, powder-coated mild-steel frame for the bigger chassis. Built for the rough side of a cloud-kitchen line.',
        },
      ],
    },
    {
      kind: 'comparison',
      heading: 'The S → XL container matrix.',
      intro:
        'Four size classes cover the menu. Pick the lids your operation needs — the V5 takes up to four formats at once.',
      columns: ['S', 'M', 'L', 'XL'],
      rows: [
        {
          label: 'Diameter',
          values: ['65 – 72 mm', '80 – 98.5 mm', '107 – 127 mm', '140 – 165 mm'],
        },
        {
          label: 'Capacity',
          values: ['60 – 120 ml', '200 – 600 ml', '250 – 1,000 ml', '500 – 1,000 ml'],
        },
        {
          label: 'Temperature',
          values: ['Cold + ambient', 'Hot + cold', 'Hot fills', 'Hot fills'],
        },
        {
          label: 'Typical applications',
          values: [
            'Sauces, chutneys, raita, ice-cream cups',
            'Hot and cold beverages',
            'Rice, dal, gravy, noodles, ramen, pasta',
            'Family-size rice, gravy, biryani, salad bowls',
          ],
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Specifications.',
      intro:
        'A heavier-duty chassis than the Cup Sealer and Tub Sealer — sized for the wider diameter range and the higher thermal load on hot fills.',
      items: [
        { label: 'Model', value: 'AeroSeal V5' },
        { label: 'Operation', value: 'Manual, countertop, single-motion seal head' },
        { label: 'Diameter range', value: '65 mm – 165 mm — up to 4 lid formats per machine' },
        { label: 'Capacity range', value: '60 ml – 1,000 ml across S / M / L / XL containers' },
        { label: 'Compatible materials', value: 'Coated paper, PP, PET, bagasse' },
        { label: 'Sealing temperature', value: '0 – 250 °C, digital PID controller — handles hot fills above 85 °C with pinhole-vented foils' },
        { label: 'Throughput', value: '8 – 10 cups / minute' },
        { label: 'Rated voltage', value: 'AC 230 V, 50 Hz' },
        { label: 'Maximum current', value: '2.2 A' },
        { label: 'Rated power', value: '500 W' },
        { label: 'Dimensions', value: '38 (L) × 25.5 (W) × 53.5 (H) cm' },
        { label: 'Weight', value: '20.5 kg (excluding add-ons)' },
        { label: 'Food-contact material', value: 'SUS-304 stainless steel' },
        { label: 'Frame material', value: 'Powder-coated mild steel' },
        { label: 'Foil format', value: 'AeroSeal precut foil lids — no in-machine cutter required' },
        { label: 'Lead time — standard', value: '15 days door-to-door via DHL air' },
        { label: 'Lead time — custom', value: '30 days build + 15 days DHL air' },
        { label: 'Bulk freight', value: 'LCL and 20 ft FCL available for higher-load orders' },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Seal the whole menu on one machine.',
      intro:
        'Designed for kitchens that have stopped being one thing. If your menu spans hot mains and cold desserts, salads and shakes, the V5 is the machine.',
      items: [
        {
          name: 'Biryani, rice, dal & gravy',
          body: 'XL and L lids cover the family-size tubs that anchor any biryani or rice-bowl menu — sealed at the prep station, leak-proof through delivery.',
        },
        {
          name: 'Ramen, noodles & pasta',
          body: 'Hot fills above 85 °C with the pinhole-vented foil — the V5\'s 500 W heater seals fast without warping the tub rim on its way to the customer.',
        },
        {
          name: 'Soups, broths & curries',
          body: 'Single-machine workflow for hot mains and sides — the same SOP across the cloud kitchen, regardless of which kitchen station the order came from.',
        },
        {
          name: 'Salads, poke bowls & meal prep',
          body: 'L and XL container range fits salad bowls and poke containers. Cold seal preserves greens and dressings on the way to the customer.',
        },
        {
          name: 'Thick shakes, smoothies & cold brew',
          body: 'M lids cover beverage cups; 92 / 98 mm fits our U-Shape PET cold cups for boba, smoothies, and shakes — sealed by the same V5 that handles your biryani.',
        },
        {
          name: 'Sauces, chutneys & condiments',
          body: 'S lids (65 – 72 mm) seal the sauce pots and chutney cups that ride along with main orders — fewer dipping-sauce spills on aggregator deliveries.',
        },
        {
          name: 'Desserts & ice cream',
          body: 'Single-serve dessert pots and 500 ml ice-cream tubs sealed for grab-and-go and retail-counter sale. Freezer-safe aluminium foil holds through the cold chain.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'How is V5 different from the Cup Sealer and Tub Sealer?',
          a: 'The Cup Sealer is sized for cups (60 – 600 ml, 80 – 98 mm). The Tub Sealer extends that to 1 L tubs (250 ml – 1 L). The V5 covers everything in one machine — 60 ml sauce pots to 1 L family tubs, 65 mm to 165 mm diameters, up to 4 lid formats running on the same head.',
        },
        {
          q: 'Why "one machine to seal them all"?',
          a: 'A typical cloud kitchen runs separate sealers for cups, tubs, and dessert pots. The V5 collapses that to one machine and one SOP — same handle, same controller, same operator training. Fewer machines on the floor, fewer breakdowns, one spare-parts bin.',
        },
        {
          q: 'What containers does it work with?',
          a: 'Any container from 65 mm to 165 mm in top diameter, capacities 60 ml – 1,000 ml. Works on coated paper, PP, PET, and bagasse. Send us your container drawings if you want us to confirm fit before ordering.',
        },
        {
          q: 'Can I seal hot food without warping the tub?',
          a: 'Yes — the V5 uses a digital PID controller to hold the seal head at the right temperature for the container material. For fills above 85 °C we ship pinhole-vented foil lids so trapped steam has somewhere to escape.',
        },
        {
          q: 'What is the throughput?',
          a: '8 – 10 cups per minute on a steady manual rhythm. The bottleneck on the V5 is the operator, not the machine — the head reheats in time for the next cup.',
        },
        {
          q: 'Is it still a manual machine?',
          a: 'Yes — every AeroSeal is manual countertop, including V5. The flagship label is about range and versatility, not automation.',
        },
        {
          q: 'How much floor space does it need?',
          a: 'Counter footprint is 38 × 25.5 cm, height 53.5 cm. Slightly taller than the Cup Sealer chassis because the head and heater are sized up for hot fills.',
        },
        {
          q: 'What is the MOQ for printed foil lids?',
          a: '30,000 pieces per design per size. The V5 takes up to four lid formats at once, so you can print all four with the same artwork or vary the design per size.',
        },
        {
          q: 'How is it shipped?',
          a: 'Standard V5 ships door-to-door in 15 days via DHL air. For multi-machine rollouts we offer LCL and 20 ft FCL freight at lower per-unit cost.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order an AeroSeal V5',
  parentSlug: 'sealer-machines',
}

const meshDeliveryBags: AerosSelectProduct = {
  slug: 'mesh-delivery-bags',
  name: 'Mesh Delivery Bags',
  tagline:
    'Laminated non-woven delivery bag with a silver thermal lining — built to keep every order dry and at temperature through the monsoon.',
  hero: {
    eyebrow: 'Aeros Select · Packaging',
    title: 'The all-weather delivery bag.',
    subtitle:
      'Rain and spills bead off the laminated non-woven surface, a silver thermal lining holds temperature in transit, and a tear-resistant body carries a full order without splitting — then gets reused instead of binned. Custom-printed edge to edge, any colour.',
    image: {
      src: '/products/mesh-delivery-bags/hero.webp',
      alt: 'Aeros mesh delivery bag in green with an all-over printed Aeros pattern and stitched loop handles',
    },
  },
  highlights: [
    { label: 'Material', value: 'BOPP-laminated spunbond non-woven' },
    { label: 'Lining', value: 'Silver thermal — hot and cold' },
    { label: 'MOQ', value: '10,000 pcs · custom printed' },
    { label: 'Lead time', value: '25 – 30 days · ships pan-India' },
  ],
  sections: [
    {
      kind: 'variants',
      heading: 'Two running sizes.',
      intro:
        'Both sizes carry a 35 mm flap closure, reinforced X-box stitched loop handles, and the same laminate and thermal lining. Custom sizes are quoted on request.',
      items: [
        {
          name: 'THB-001 — Standard',
          tags: ['220 × 150 × 250 mm', '+35 mm flap', 'From Rs 20/pc'],
          body: 'The single-order size — a meal for one or two, a coffee run, a dessert box. The size most cloud kitchens and cafés start on.',
          images: ['/products/mesh-delivery-bags/hero.webp'],
          specs: [
            { label: 'Dimensions', value: '220 × 150 × 250 mm' },
            { label: 'Flap', value: '+35 mm' },
            { label: 'Price from', value: 'Rs 20 / pc' },
            { label: 'MOQ', value: '10,000 pcs' },
          ],
        },
        {
          name: 'THB-002 — Large',
          tags: ['260 × 170 × 345 mm', '+35 mm flap', 'From Rs 26/pc'],
          body: 'The family-order size — multiple mains, 1 L tubs, a full grocery or party pickup. Taller body for upright containers that must not tip.',
          images: ['/products/mesh-delivery-bags/silver-lining.webp'],
          specs: [
            { label: 'Dimensions', value: '260 × 170 × 345 mm' },
            { label: 'Flap', value: '+35 mm' },
            { label: 'Price from', value: 'Rs 26 / pc' },
            { label: 'MOQ', value: '10,000 pcs' },
          ],
        },
      ],
    },
    {
      kind: 'features',
      heading: 'Built to deliver.',
      intro:
        'Five things separate a delivery-grade bag from a carry bag that happens to be used for delivery.',
      items: [
        {
          name: 'Weatherproof laminate',
          body: 'A BOPP laminate over spunbond non-woven — rain and spills bead up and run off instead of soaking in. Orders arrive dry, and the print underneath stays sharp.',
        },
        {
          name: 'Silver thermal lining',
          body: 'A reflective silver lining inside holds temperature in transit — hot mains stay hot, cold desserts and drinks stay cold, across the whole ride.',
        },
        {
          name: 'Tear-resistant body',
          body: 'The non-woven body holds a full order under load without splitting at the base or the gussets — the failure mode that ruins a paper bag on the third stop.',
        },
        {
          name: 'Reinforced X-box stitched handles',
          body: 'Loop handles stitched with an X-box at each anchor point — the stress concentrates where the stitching is strongest, not where the fabric is weakest.',
        },
        {
          name: 'Reusable, not single-use',
          body: 'Customers keep it and reuse it. Your brand keeps showing up long after the order, and you cut single-use waste on every delivery.',
        },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Built for these runs.',
      items: [
        {
          name: 'Monsoon delivery',
          body: 'The case the bag was designed for. Paper goes soggy and plastic tears in heavy rain — the laminate beads it off and the order arrives dry.',
          image: '/products/mesh-delivery-bags/texture.webp',
          imageFit: 'bleed',
        },
        {
          name: 'Cloud kitchens & aggregator orders',
          body: 'A gusseted body keeps sealed tubs and cups upright through the ride. Pairs with AeroSeal-sealed containers for a leak-proof handoff end to end.',
        },
        {
          name: 'Hot mains & cold desserts in one bag',
          body: 'The silver lining slows heat loss on curries and biryani and holds the chill on ice cream and shakes — useful when one order carries both.',
          image: '/products/mesh-delivery-bags/silver-lining.webp',
        },
        {
          name: 'Cafés & grab-and-go counters',
          body: 'A branded bag the customer keeps — for a café, cheaper per impression than almost any other media buy in the neighbourhood.',
        },
        {
          name: 'Brand campaigns & launches',
          body: 'Full-colour, all-over print in any colour. Run a seasonal or launch design across 10,000 bags and put it on every bike in the city.',
          image: '/products/mesh-delivery-bags/colours.webp',
        },
      ],
    },
    {
      kind: 'comparison',
      heading: 'Against paper and plastic.',
      intro:
        'The comparison that matters on a wet evening with a full order and thirty minutes on the clock.',
      columns: ['Aeros', 'Paper / Plastic'],
      rows: [
        { label: 'In the rain', values: ['Beads off, stays dry', 'Soaks and tears'] },
        { label: 'Temperature', values: ['Silver thermal lining', 'None'] },
        { label: 'Under load', values: ['Holds a full order', 'Splits'] },
        { label: 'Lifespan', values: ['Reused for months', 'One trip'] },
        { label: 'Branding', values: ['Full-colour, all-over', 'Limited'] },
      ],
    },
    {
      kind: 'specs',
      heading: 'Specifications.',
      items: [
        { label: 'Sizes', value: 'THB-001 — 220 × 150 × 250 mm · THB-002 — 260 × 170 × 345 mm' },
        { label: 'Flap', value: '+35 mm on both sizes' },
        { label: 'Body material', value: 'Spunbond non-woven with BOPP laminate' },
        { label: 'Lining', value: 'Silver thermal lining' },
        { label: 'Handles', value: 'Loop handles, reinforced X-box stitching' },
        { label: 'Printing', value: 'Full-colour, all-over custom print · any body colour' },
        { label: 'Pricing from', value: 'THB-001 — Rs 20 / pc · THB-002 — Rs 26 / pc' },
        { label: 'MOQ', value: '10,000 pcs per design' },
        { label: 'Production lead time', value: '25 – 30 days from artwork approval' },
        { label: 'Delivery', value: 'Pan-India' },
        { label: 'Reuse', value: 'Reusable — holds shape over repeated trips' },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'What is the MOQ?',
          a: '10,000 pieces per design. These are custom-printed to order — there is no plain stocked version of this bag.',
        },
        {
          q: 'How long does production take?',
          a: '25 – 30 days from artwork approval, then dispatch pan-India. Send artwork early if you are timing a launch or a season.',
        },
        {
          q: 'Which size should I order?',
          a: 'THB-001 (220 × 150 × 250 mm) for single and two-person orders — the volume runner for most kitchens. THB-002 (260 × 170 × 345 mm) for family orders, 1 L tubs, and taller containers. Many operators run both and pick at packing.',
        },
        {
          q: 'Can I get a custom size?',
          a: 'Yes, provided the volume justifies new tooling. Send us your container dimensions and target quantity and we will scope it.',
        },
        {
          q: 'Is it really waterproof?',
          a: 'It is water-repellent, not submersible. The BOPP laminate makes rain and spills bead up and run off the surface, so the order stays dry on a normal monsoon run — it is not a dry bag for standing water.',
        },
        {
          q: 'How well does it hold temperature?',
          a: 'The silver lining reflects radiant heat back and slows the loss, which covers a typical 20 – 40 minute delivery. It is insulation, not refrigeration — it holds what you put in, it does not cool or heat.',
        },
        {
          q: 'Can I print any colour?',
          a: 'Yes — full-colour, all-over print on any body colour. The bag becomes a moving billboard, which is most of the reason operators reorder.',
        },
        {
          q: 'Is it reusable?',
          a: 'Yes — that is the point. Customers keep it and reuse it, so your brand keeps showing up and you cut single-use waste on every order.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order Mesh Delivery Bags',
}

const clearPpCups: AerosSelectProduct = {
  slug: 'clear-pp-cups',
  name: 'Clear PP Cups',
  tagline:
    'Five sizes, two bottoms, one lid — a crystal-clear PP cold cup range where every size is capped by the same Ø85 string-lock lid.',
  hero: {
    eyebrow: 'Aeros Select · Packaging',
    title: 'Five sizes. Two shapes. One lid.',
    subtitle:
      'A crystal-clear PP cold cup family — 250, 350, and 500 ml flat-bottom, plus 350 and 500 ml U-bottom that sit cleaner in a holder. Every single size is sealed by the same 85 mm string-lock lid, so there is one lid SKU to stock for the whole range.',
    image: {
      src: '/products/clear-pp-cups/hero.webp',
      alt: 'The full clear PP cup range on a café counter — five sizes across flat-bottom and U-bottom, with string-lock lids',
      fit: 'bleed',
    },
  },
  highlights: [
    { label: 'Range', value: '5 sizes · flat and U bottom' },
    { label: 'One lid', value: 'Ø85 string-lock fits all five' },
    { label: 'Material', value: 'Crystal-clear PP · one-poly' },
    { label: 'Custom print', value: 'From 5,000 cups' },
  ],
  sections: [
    {
      kind: 'variants',
      heading: 'Two bottoms, one lid.',
      intro:
        'Pick the bottom that suits your counter — the flat-bottom for shelf stability and stack depth, the U-bottom for a cleaner sit in a car or bike holder. Both take the same lid.',
      items: [
        {
          name: 'Flat-bottom — 250 · 350 · 500 ml',
          tags: ['3 sizes', 'TD 85 mm', 'Stands on any surface'],
          body: 'The workhorse shape. A flat base means the cup stands unaided on a counter, a tray, or a shelf — the right call for dine-in, retail display, and anywhere a cup gets put down mid-drink.',
          images: ['/products/clear-pp-cups/flat-range.webp'],
          specs: [
            { label: '250 ml', value: 'TD 85 · BD 45 · H 96 mm · 1,000 / case' },
            { label: '350 ml', value: 'TD 85 · BD 49 · H 115 mm · 1,000 / case' },
            { label: '500 ml', value: 'TD 85 · BD 54 · H 155 mm · 500 / case' },
          ],
        },
        {
          name: 'U-bottom — 350 · 500 ml',
          tags: ['2 sizes', 'TD 85 mm', 'Sits cleaner in a holder'],
          body: 'A rounded U-base on a narrow 32 mm footprint — drops into a cup holder or a delivery carrier without rocking, and reads as the more premium shape on a cold-brew or mocktail menu.',
          images: ['/products/clear-pp-cups/u-range.webp'],
          specs: [
            { label: '350 ml', value: 'TD 85 · BD 32 · H 95 mm · 1,000 / case' },
            { label: '500 ml', value: 'TD 85 · BD 32 · H 134 mm · 500 / case' },
          ],
        },
        {
          name: 'Ø85 String-Lock Lid',
          tags: ['One lid, five cups', 'Tethered plug', 'Clear PP'],
          body: 'A clear 85 mm lid with a tethered plug that flips open to sip and snaps shut again. The plug stays attached to the lid — nothing to lose on the counter, and the closure resists spills in a bag or a holder.',
          images: ['/products/clear-pp-cups/lid.webp'],
          specs: [
            { label: 'Diameter', value: 'Ø 85 mm' },
            { label: 'Closure', value: 'Tethered string-lock plug' },
            { label: 'Fits', value: 'All five cups in the range' },
            { label: 'Material', value: 'Clear PP — same polymer as the cup' },
          ],
        },
      ],
    },
    {
      kind: 'comparison',
      heading: 'The range at a glance.',
      intro:
        'Every cup shares the same 85 mm top diameter — which is why one lid covers the whole range.',
      columns: ['250 Flat', '350 Flat', '500 Flat', '350 U', '500 U'],
      rows: [
        {
          label: 'TD × BD × H (mm)',
          values: [
            '85 × 45 × 96',
            '85 × 49 × 115',
            '85 × 54 × 155',
            '85 × 32 × 95',
            '85 × 32 × 134',
          ],
        },
        {
          label: 'Per case',
          values: ['1,000', '1,000', '500', '1,000', '500'],
        },
        {
          label: 'Lid',
          values: ['Ø85', 'Ø85', 'Ø85', 'Ø85', 'Ø85'],
        },
      ],
    },
    {
      kind: 'features',
      heading: 'Why one lid changes the counter.',
      items: [
        {
          name: 'One lid SKU for five cups',
          body: 'Every size shares an 85 mm top diameter, so there is one lid to buy, one lid to store, and one lid bin at the station. No mismatched sleeves, no wrong-lid handoffs during a rush.',
        },
        {
          name: 'Tethered string-lock plug',
          body: 'The plug flips open to sip and snaps shut, and stays attached to the lid throughout. Resists spills in a delivery bag or a cup holder — and there is no loose part for the customer to drop.',
        },
        {
          name: 'Crystal-clear PP',
          body: 'The cup is the packaging on a cold drink. Clear PP shows the layers in a cold brew, the colour of a mocktail, and the fruit in a smoothie — the reason clear cups outsell opaque ones on a chilled shelf.',
        },
        {
          name: 'Two bottoms, one decision',
          body: 'Flat-bottom stands anywhere; U-bottom drops cleanly into a holder. Same rim, same lid, same case logistics — so running both costs you nothing extra in stocking complexity.',
        },
        {
          name: 'One-poly cup and lid',
          body: 'Cup and lid are the same polymer, so the sealed unit goes into a single recycling stream instead of needing to be separated first.',
        },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Built for these drinks.',
      items: [
        {
          name: 'Cold brew & iced coffee',
          body: 'Clear walls show the pour and the ice. The 350 ml sizes are the volume runners on most café cold menus; 500 ml covers the large.',
          image: '/products/clear-pp-cups/12oz-pair.webp',
        },
        {
          name: 'Smoothies & shakes',
          body: '500 ml in either bottom takes a full blend. The rigid PP wall holds shape under a press-fit lid without flexing at the rim.',
        },
        {
          name: 'Mocktails & iced teas',
          body: 'Layered and garnished drinks read through clear PP — the U-bottom is the more premium silhouette for a bar or a hotel counter.',
        },
        {
          name: 'Delivery & aggregator orders',
          body: 'The tethered string-lock plug resists spills in the bag, and the U-bottom sits without rocking in a rider\'s carrier.',
        },
        {
          name: 'Branded café programmes',
          body: 'Custom print from 5,000 cups per design — cheap enough to run a seasonal design without committing to a year of stock.',
          image: '/products/clear-pp-cups/hero.webp',
          imageFit: 'bleed',
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Specifications.',
      items: [
        { label: 'Material', value: 'Crystal-clear polypropylene (PP)' },
        { label: 'Top diameter', value: '85 mm across all five sizes' },
        { label: 'Flat-bottom sizes', value: '250 ml (85 × 45 × 96) · 350 ml (85 × 49 × 115) · 500 ml (85 × 54 × 155) mm' },
        { label: 'U-bottom sizes', value: '350 ml (85 × 32 × 95) · 500 ml (85 × 32 × 134) mm' },
        { label: 'Case pack — 250 ml', value: '1,000 cups / case' },
        { label: 'Case pack — 350 ml', value: '1,000 cups / case (both bottoms)' },
        { label: 'Case pack — 500 ml', value: '500 cups / case (both bottoms)' },
        { label: 'Lid', value: 'Ø 85 mm clear PP string-lock lid with tethered plug — fits every size' },
        { label: 'Cup + lid', value: 'One-poly — cup and lid are the same material' },
        { label: 'Custom print', value: 'From 5,000 cups per design' },
        { label: 'Use temperature', value: 'Cold drinks' },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'Does one lid really fit all five cups?',
          a: 'Yes — every cup in the range is built on the same 85 mm top diameter, flat-bottom and U-bottom alike. One lid SKU covers the whole range.',
        },
        {
          q: 'What is a string-lock lid?',
          a: 'A clear lid with a plug tethered to it. The plug flips open to drink and snaps shut again, and never separates from the lid — so it resists spills in transit and there is no loose piece to lose.',
        },
        {
          q: 'Flat-bottom or U-bottom?',
          a: 'Flat-bottom stands unaided — better for dine-in, trays, and retail shelves. U-bottom sits cleaner in a cup holder or a delivery carrier and reads as the more premium shape. Same rim and same lid, so you can run both.',
        },
        {
          q: 'What is the MOQ?',
          a: 'Custom-printed runs start at 5,000 cups per design. Talk to us for current stock on plain cups and lids.',
        },
        {
          q: 'How do these differ from your U-Shape PET cups?',
          a: 'Different material and a different rim. The PET range is a 92 mm rim built for foil sealing and a sipper lid; this range is PP on an 85 mm rim built around the string-lock lid. The lids are not interchangeable between the two — pick the range, then stock its lid.',
        },
        {
          q: 'Can I use these for hot drinks?',
          a: 'These are specified as cold cups. If you need a container for a hot drink, use our paper hot-cup range — or write to us with the fill temperature and we will confirm what is safe.',
        },
        {
          q: 'Can I get them printed?',
          a: 'Yes — fully custom-printable, from 5,000 cups per design. Send us artwork and quantity and we will scope a lead time.',
        },
        {
          q: 'Are they recyclable?',
          a: 'The cup and lid are both PP, so the pair goes into one stream rather than needing separation. Rinse before disposal.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order Clear PP cups',
}

const compostableBags: AerosSelectProduct = {
  slug: 'compostable-bags',
  name: 'Compostable Bags',
  tagline:
    'Not a plastic bag. Corn-starch and PBAT, independently certified, composts in 180 days — carry bags, food pouches, and bin liners in six standard sizes.',
  hero: {
    eyebrow: 'Aeros Select · Packaging',
    title: 'Not a plastic bag.',
    subtitle:
      'Single-use plastic carry bags are restricted or banned across most of India. These are made from a corn-starch and PBAT blend — plant-based, food-grade, water-resistant — independently certified by CIPET, CPCB, and TUV Austria, and marked on every bag so your customer can see it.',
    image: {
      src: '/products/compostable-bags/product.webp',
      alt: 'Aeros compostable W-cut carry bag, marked "I am made from corn — I am NOT a plastic bag · 100% compostable" with the CPCB and TUV Austria certification line',
    },
  },
  highlights: [
    { label: 'Material', value: 'Corn-starch + PBAT · plant-based' },
    { label: 'Certified', value: 'CIPET · CPCB · TUV Austria' },
    { label: 'Composts in', value: '180 days · industrial composting' },
    { label: 'Sold by', value: 'Weight — 6 sizes, 20 – 60 micron' },
  ],
  sections: [
    {
      kind: 'diagram',
      heading: 'Six standard sizes.',
      intro:
        'Every format is made in the same six sizes. Drawn here to scale against each other, so you can see what actually fits an order before you pick one.',
      image: '/products/compostable-bags/sizes.svg',
      alt: 'The six standard compostable bag sizes drawn to scale — 8x10, 10x12, 11x14, 13x16, 16x20 and 22x24 inches',
      figureLabel: 'standard sizes — inches',
      caption:
        'Custom sizes are made to order. Thicker film is required as the bag gets bigger — see the thickness guidance below.',
    },
    {
      kind: 'comparison',
      eyebrow: '/ bags per kilo',
      rowHeader: 'Size',
      heading: 'What a kilo gets you.',
      intro:
        'These are sold by weight, not by piece — so this is the number that matters when you are working out how much to order. Approximate counts per kilogram, by size and film thickness.',
      columns: ['20 micron', '25 micron', '30 micron', '45 micron', '50 micron', '60 micron'],
      rows: [
        { label: '8 × 10 in', values: ['372', '298', '248', '165', '149', '124'] },
        { label: '10 × 12 in', values: ['248', '198', '165', '110', '99', '82'] },
        { label: '11 × 14 in', values: ['193', '154', '129', '86', '77', '64'] },
        { label: '13 × 16 in', values: ['143', '115', '95', '63', '57', '47'] },
        { label: '16 × 20 in', values: ['93', '74', '62', '41', '37', '31'] },
        { label: '22 × 24 in', values: ['56', '45', '37', '25', '22', '18'] },
      ],
    },
    {
      kind: 'diagram',
      heading: 'Four formats, one film.',
      intro:
        'The same certified compostable film, converted into the formats a shop or kitchen actually needs.',
      image: '/products/compostable-bags/formats.svg',
      alt: 'Line drawings of the four compostable bag formats — W-cut carry bag, D-cut carry bag, food pouch, and garbage bag',
      figureLabel: 'formats — not to scale',
    },
    {
      kind: 'variants',
      heading: 'Pick the format and the grade.',
      intro:
        'Carry bags and pouches come in two film grades; pouches add a translucent option where the customer should see the product. Minimums are per size, and every format is sold by the kilo.',
      items: [
        {
          name: 'Carry bags — W-cut & D-cut',
          tags: ['Grade A or B', 'Plain from 10 kg', 'Printed from 50 kg'],
          body: 'The direct replacement for the banned plastic carry bag. W-cut vest style for retail and takeaway counters; D-cut punched handle for a cleaner branded look at sweet shops and boutiques.',
        },
        {
          name: 'Food pouches',
          tags: ['Grade A, B or translucent', 'Plain from 30 kg', 'Printed from 50 kg'],
          body: 'Flat pouches for snacks, staples, and dry goods. The translucent film runs about 80% transparency, so the product shows through without giving up the compostable spec.',
        },
        {
          name: 'Garbage bags',
          tags: ['Bin liners', 'Kitchens, cafés, offices'],
          body: 'Compostable bin liners — the wet-waste stream can go to composting bag and all, instead of a plastic liner that has to be separated out first.',
        },
      ],
    },
    {
      kind: 'format-showcase',
      heading: 'Your brand, on a bag that composts.',
      intro:
        'Full-colour custom print, up to 3 colours. A handful of the printed runs we have shipped — sweet shops, restaurants, and cloud kitchens across India and the Gulf.',
      plain: {
        image: '/products/compostable-bags/product.webp',
        label: 'Plain',
      },
      printed: [
        { image: '/products/compostable-bags/branded/alfa-sweets.webp', label: 'Alfa Sweets' },
        { image: '/products/compostable-bags/branded/paradise.webp', label: 'Paradise' },
        { image: '/products/compostable-bags/branded/kwality-foods.webp', label: 'Kwality Foods Corner' },
        { image: '/products/compostable-bags/branded/asha-pan-palace.webp', label: 'Asha Pan Palace' },
        { image: '/products/compostable-bags/branded/turk-saram.webp', label: 'Turk Saram' },
        { image: '/products/compostable-bags/branded/mughal.webp', label: 'Mughal Restaurant' },
      ],
    },
    {
      kind: 'features',
      heading: 'Plants in. Soil out.',
      items: [
        {
          name: 'Corn-starch + PBAT, not petro-plastic',
          body: 'A plant-based blend rather than conventional polyethylene. It handles like a plastic bag on the counter — it just does not persist like one afterwards.',
        },
        {
          name: 'Independently certified',
          body: 'CIPET to ISO 17088, CPCB registration for India, and TUV Austria to EN 13432 for international compostability. Three separate bodies, not a self-declaration.',
        },
        {
          name: 'Composts in 180 days',
          body: 'In industrial composting conditions the film breaks down within 180 days, leaving no microplastics and no visible residue behind.',
        },
        {
          name: 'Holds up in the monsoon',
          body: 'Water beads off the film, so the bag keeps its shape and its load in the rain — the failure mode that makes paper a poor swap for plastic in an Indian monsoon.',
        },
        {
          name: 'Marked so customers can tell',
          body: 'Every bag carries "I am made from corn — I am NOT a plastic bag · 100% compostable" alongside the certification marks. It answers the question at the counter before it gets asked.',
        },
        {
          name: 'Printed with your brand',
          body: 'Food-safe printing up to 3 colours, on one or both sides, with a one-time plate charge per colour per side per size. Bag colour can be customised too.',
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Choosing a thickness.',
      intro:
        'Rate is the same whichever thickness you pick, so this is purely a strength decision — a big bag in thin film is the one complaint worth avoiding.',
      items: [
        { label: '8 × 10 · 10 × 12 in', value: 'Any thickness from 20 to 60 micron works' },
        { label: '11 × 14 · 13 × 16 in', value: '30 micron and above recommended — 20 to 25 micron only for light loads' },
        { label: '16 × 20 · 22 × 24 in', value: '45 micron and above ideal · 30 micron acceptable · 20 micron not recommended' },
      ],
    },
    {
      kind: 'use-cases',
      heading: 'Where these go.',
      items: [
        {
          name: 'Retail & kirana counters',
          body: 'The everyday carry bag, across the six standard sizes that cover a grocery run, a sweet box, or a single-item purchase.',
          image: '/products/compostable-bags/counter.webp',
          imageFit: 'bleed',
        },
        {
          name: 'Restaurants, cafés & takeaway',
          body: 'Food-grade and water-resistant, so hot and oily takeaway does not compromise the bag between the counter and the customer.',
          image: '/products/compostable-bags/material.webp',
          imageFit: 'bleed',
        },
        {
          name: 'Cloud kitchens & delivery',
          body: 'Holds shape in the rain on a bike, and the compostable marking travels with the order — visible sustainability at the customer\'s door.',
          image: '/products/compostable-bags/delivery.webp',
          imageFit: 'bleed',
        },
        {
          name: 'Kitchens & offices — waste streams',
          body: 'Compostable bin liners let wet waste go to composting with the liner still on, instead of being tipped out and the bag binned separately.',
        },
        {
          name: 'Packaged snacks & dry goods',
          body: 'Food pouches in plain, Grade B, or translucent film for shelf-packed staples — translucent where the product should sell itself.',
        },
      ],
    },
    {
      kind: 'specs',
      heading: 'Specifications.',
      items: [
        { label: 'Material', value: 'Corn-starch + PBAT compostable blend' },
        { label: 'Properties', value: 'Food-grade · water-resistant · heat-durable' },
        { label: 'Formats', value: 'Carry bags (W-cut, D-cut) · food pouches · garbage bags' },
        { label: 'Grades', value: 'Grade A and Grade B · pouches also in translucent (approx. 80% transparency)' },
        { label: 'Standard sizes', value: '8 × 10 · 10 × 12 · 11 × 14 · 13 × 16 · 16 × 20 · 22 × 24 in' },
        { label: 'Thickness', value: '20 · 25 · 30 · 45 · 50 · 60 micron' },
        { label: 'Custom sizes', value: 'Made to order — send dimensions and volumes' },
        { label: 'Sold by', value: 'Weight — rate is the same across every size and thickness' },
        { label: 'MOQ — carry bags', value: 'Plain 10 kg per size · printed 50 kg per size' },
        { label: 'MOQ — food pouches', value: 'Plain 30 kg per size · printed 50 kg per size' },
        { label: 'Printing', value: 'Food-safe, up to 3 colours, 1 or 2 sides · one-time plate charge per colour, per side, per size' },
        { label: 'Bag marking', value: '"I am made from corn — I am NOT a plastic bag · 100% compostable"' },
        { label: 'Certification — India', value: 'CIPET (ISO 17088) · CPCB' },
        { label: 'Certification — international', value: 'TUV Austria (EN 13432)' },
        { label: 'Compost time', value: '180 days in industrial composting — no microplastics, no residue' },
        { label: 'Packing', value: 'Bulk woven sacks of roughly 23 – 25 kg, marked with size and net weight — not cartoned' },
        { label: 'Samples', value: 'Free — ask and we will send them' },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'Why are these priced by weight instead of per bag?',
          a: 'Because the film is the cost, not the shape. The rate is the same across every size and thickness, so a kilo of 20 micron 8 × 10 costs what a kilo of 60 micron 22 × 24 costs — you just get a different number of bags. The table above converts weight to bag count.',
        },
        {
          q: 'What are these actually made of?',
          a: 'A blend of corn starch and PBAT. It is plant-based rather than petroleum-based, and formulated to handle like a conventional bag — food-grade, water-resistant, and heat-durable.',
        },
        {
          q: 'Who certifies them?',
          a: 'Three independent bodies: CIPET against ISO 17088, CPCB for India, and TUV Austria against EN 13432 for international compostability. Certificates are available on request.',
        },
        {
          q: 'Does 180 days mean they compost in my bin?',
          a: 'No — the 180-day figure is for industrial composting conditions, which run hotter and more controlled than a home compost heap. In a landfill or on the roadside these will not break down on that timeline. Plan for the bags to reach an industrial composting stream.',
        },
        {
          q: 'Do these satisfy the single-use plastic rules?',
          a: 'Certified compostable bags are the standard substitute where single-use plastic carry bags are restricted, and ours carry CPCB certification for India. Rules vary by state and change over time — we will share the current certificates so your compliance team can confirm against your local requirement.',
        },
        {
          q: 'What thickness should I order?',
          a: 'Small bags take any thickness. From 11 × 14 in upward go to 30 micron or above, and for the two largest sizes 45 micron and above is ideal. Since the rate does not change with thickness, err heavier on the big sizes.',
        },
        {
          q: 'What is the difference between Grade A and Grade B?',
          a: 'Two film grades at different price points, both certified compostable and both available across the standard sizes. Tell us the application and we will recommend the grade — or send samples of both so you can judge in hand.',
        },
        {
          q: 'What is the minimum order?',
          a: 'Plain carry bags start at 10 kg per size and plain pouches at 30 kg per size. Anything printed is 50 kg per size, plus a one-time plate charge per colour, per side, per size. Samples are free.',
        },
        {
          q: 'How do they arrive?',
          a: 'In bulk woven sacks of roughly 23 to 25 kg, marked with the size and net weight — these are not cartoned, so factor that into your storage.',
        },
      ],
    },
  ],
  orderUrl: APP_MARKETPLACE_URL,
  orderCtaLabel: 'Order compostable bags',
}

export const aerosSelectProducts: AerosSelectProduct[] = [
  sealerMachines,
  cupSealer,
  tubSealer,
  v5,
  foils,
  uShapePetCups,
  meshDeliveryBags,
  clearPpCups,
  compostableBags,
]

/** Products shown at the top of /products/aeros-select. Hides sub-products
 * like Cup Sealer / Tub Sealer / V5 / Foils that live under the AeroSeal umbrella. */
export const aerosSelectTopLevelProducts = aerosSelectProducts.filter(
  (p) => !p.parentSlug,
)

export function getAerosSelectProductBySlug(
  slug: string
): AerosSelectProduct | undefined {
  return aerosSelectProducts.find((p) => p.slug === slug)
}
