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
  items: Array<{ name: string; body: string; tags?: string[]; href?: string }>
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
  columns: string[]
  rows: Array<{ label: string; values: string[] }>
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

export type AerosSelectProduct = {
  slug: string
  name: string
  tagline: string
  hero: { eyebrow: string; title: string; subtitle: string }
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
        },
        {
          name: 'V2 — Analog Timer',
          tags: ['Manual', 'Analog timer', 'External buzzer'],
          body: 'Adds an analog timer and an external end-of-cycle buzzer to the V1 base. Operators stop guessing seal time — the buzzer tells them when the seal is done.',
        },
        {
          name: 'V3 — Digital Control',
          tags: ['Manual', 'Digital PID', 'Polycarbonate cover', 'From $799'],
          body: 'Digital PID temperature controller with ±1 °C accuracy, analog timer, external buzzer, and a polycarbonate heater cover for safety. The most-ordered version. Intro $699 — first 15 days, ends at the NRA show.',
        },
        {
          name: 'V4 — Premium · CE',
          tags: ['Manual', 'Digital timer', 'CE certified'],
          body: 'Digital timer with internal buzzer, digital PID controller, anti-skid rubber base, polycarbonate heater cover, CE certification. The export-ready version for operators that need a paper trail with the machine.',
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
  },
  highlights: [
    { label: 'Diameter range', value: '65 mm – 165 mm' },
    { label: 'Lid formats', value: 'Up to 4 different sizes' },
    { label: 'Temperature', value: 'Seals piping hot + cold' },
    { label: 'Throughput', value: '8 – 10 cups / minute' },
  ],
  sections: [
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

export const aerosSelectProducts: AerosSelectProduct[] = [
  sealerMachines,
  cupSealer,
  tubSealer,
  v5,
  uShapePetCups,
]

/** Products shown at the top of /products/aeros-select. Hides sub-products
 * like Cup Sealer / Tub Sealer / V5 that live under the AeroSeal umbrella. */
export const aerosSelectTopLevelProducts = aerosSelectProducts.filter(
  (p) => !p.parentSlug,
)

export function getAerosSelectProductBySlug(
  slug: string
): AerosSelectProduct | undefined {
  return aerosSelectProducts.find((p) => p.slug === slug)
}
