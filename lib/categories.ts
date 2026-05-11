export const APP_MARKETPLACE_URL =
  'https://app.aeros-x.com/#/market-place-catalog-screen'

export type CategoryGroup = 'paper-disposables' | 'cleaning-hygiene'

export const CATEGORY_GROUPS: Record<
  CategoryGroup,
  { label: string; eyebrow: string; description: string }
> = {
  'paper-disposables': {
    label: 'Paper & disposables',
    eyebrow: '/ paper & disposables',
    description:
      'Everything single-use — cups, lids, plates, napkins, takeout containers.',
  },
  'cleaning-hygiene': {
    label: 'Cleaning & hygiene',
    eyebrow: '/ cleaning & hygiene',
    description:
      'Detergents, sanitizers, gloves, and consumables that keep the back-of-house running.',
  },
}

type TypesSection = {
  kind: 'types'
  heading: string
  intro?: string
  items: Array<{ name: string; whenToUse: string; sizes?: string }>
}

type MeasuringSection = {
  kind: 'measuring'
  heading: string
  intro?: string
  bullets: Array<{ label: string; body: string }>
  conversion?: string
}

type CoatingsSection = {
  kind: 'coatings'
  heading: string
  intro?: string
  items: Array<{
    name: string
    tags: string[]
    pro: string
    con: string
    whenToChoose: string
  }>
}

type PrintingSection = {
  kind: 'printing'
  heading: string
  intro?: string
  bullets: Array<{ label: string; body: string }>
}

type FaqSection = {
  kind: 'faq'
  heading: string
  items: Array<{ q: string; a: string }>
}

export type CategoryDetailSection =
  | TypesSection
  | MeasuringSection
  | CoatingsSection
  | PrintingSection
  | FaqSection

export type CategoryDetail = {
  hero: { eyebrow: string; title: string; subtitle: string }
  sections: CategoryDetailSection[]
}

export type Category = {
  slug: string
  group: CategoryGroup
  name: string
  blurb: string
  available: boolean
  detail?: CategoryDetail
}

const paperCupsDetail: CategoryDetail = {
  hero: {
    eyebrow: 'Paper & disposables',
    title: 'Paper cups.',
    subtitle:
      'Everything you need to spec, source, and order paper cups — types, sizing, coatings, and custom printing — in one place.',
  },
  sections: [
    {
      kind: 'types',
      heading: 'Types of paper cups.',
      intro:
        'Five families cover almost every back-of-house and front-of-house use case. Pick by serving temperature and how the cup is held.',
      items: [
        {
          name: 'Single-wall hot',
          whenToUse:
            'Drip coffee, tea, and other hot drinks served with a sleeve. The lowest-cost option.',
          sizes: '4, 6.5, 8, 12, 16, 20, 24 oz',
        },
        {
          name: 'Double-wall hot',
          whenToUse:
            'Specialty coffee and longer dwell times. Holds heat without a sleeve.',
          sizes: '8, 12, 16 oz',
        },
        {
          name: 'Ripple-wall',
          whenToUse:
            'Premium hot drinks on the go. Textured outer wall offers grip and insulation.',
          sizes: '8, 12, 16 oz',
        },
        {
          name: 'Cold cup',
          whenToUse:
            'Iced coffee, juice, soft drinks. Coated to resist condensation.',
          sizes: '9, 12, 16, 22, 32 oz',
        },
        {
          name: 'Compostable',
          whenToUse:
            'Programs that need to meet a sustainability target. Available across hot and cold.',
          sizes: '8, 12, 16 oz',
        },
      ],
    },
    {
      kind: 'measuring',
      heading: 'How to measure a paper cup.',
      intro:
        'Three measurements specify a cup. Take them with the cup right-side up on a flat surface.',
      bullets: [
        {
          label: 'Top diameter',
          body: 'Outer diameter at the rim, in mm. Critical for lid fit — every lid family is sized to a specific top diameter (typically 80mm, 90mm, or 73mm for small cups).',
        },
        {
          label: 'Bottom diameter',
          body: 'Outer diameter at the base, in mm. Affects stacking and sleeve fit, not lid choice.',
        },
        {
          label: 'Height',
          body: 'From base to rim, in mm. Combined with top diameter, this defines volume.',
        },
      ],
      conversion:
        '8 oz ≈ 240 ml · 12 oz ≈ 355 ml · 16 oz ≈ 475 ml. Spec by oz if your suppliers are US-based, by ml elsewhere.',
    },
    {
      kind: 'coatings',
      heading: 'Coatings available.',
      intro:
        'A paper cup is paper plus a thin barrier layer. The barrier choice drives recyclability, cost, and which drinks the cup can hold.',
      items: [
        {
          name: 'PE (polyethylene)',
          tags: ['Recyclable', 'Industry standard'],
          pro: 'Lowest cost, widest availability, handles both hot and cold.',
          con: 'Requires specialised recycling streams — not curbside-compatible everywhere.',
          whenToChoose:
            'Default for high-volume operations where cost and supply matter most.',
        },
        {
          name: 'PLA (polylactic acid)',
          tags: ['Compostable'],
          pro: 'Plant-based barrier from corn starch. Industrial-compostable.',
          con: 'Needs a commercial composting facility — does not break down in landfill.',
          whenToChoose:
            'Programs with a closed-loop compost partner or sustainability mandates.',
        },
        {
          name: 'Water-based',
          tags: ['Recyclable', 'Plastic-free'],
          pro: 'Fully repulpable with standard paper recycling. No plastic layer at all.',
          con: 'Higher cost per unit; slightly shorter dwell time for very hot drinks.',
          whenToChoose:
            'Operators who want a truly recyclable cup without changing their disposal stream.',
        },
        {
          name: 'Double-PE',
          tags: ['Heavy-duty'],
          pro: 'PE on both inner and outer walls. Resists soak-through for soups and stews.',
          con: 'Heavier, more material, costs more — overkill for most beverages.',
          whenToChoose:
            'Hot food applications: soup cups, broth, congee, ramen.',
        },
      ],
    },
    {
      kind: 'printing',
      heading: 'Custom printing & design guidelines.',
      intro:
        'Most suppliers on the marketplace support custom artwork. Follow these specs to keep proofs fast and reprints rare.',
      bullets: [
        {
          label: 'Artwork format',
          body: 'Vector preferred (AI, EPS, PDF). If raster, supply 300 dpi minimum at final print size. Outline all fonts.',
        },
        {
          label: 'Colour mode',
          body: 'CMYK for process printing. Spot colours by Pantone reference if you need brand-accurate red, blue, or green.',
        },
        {
          label: 'Bleed & safety',
          body: '3mm bleed on all edges. Keep critical artwork (logos, legal copy) 5mm inside the trim.',
        },
        {
          label: 'Colour limits',
          body: 'Up to 6 colours on flexo presses, full-CMYK on offset. Confirm with the supplier before designing dense gradients.',
        },
        {
          label: 'Dieline',
          body: 'Every size needs its own dieline — the cup is conical, so artwork wraps in a fan shape, not a rectangle. Request the dieline from the supplier before you start.',
        },
        {
          label: 'MOQ & lead time',
          body: 'Typical MOQ is 10,000 cups per SKU per size. Lead time is 3–4 weeks for the first run, 2–3 weeks for repeats.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'Can one lid fit multiple cup sizes?',
          a: 'Yes — lids match the top diameter, not the volume. An 8/12/16 oz family typically shares a 90mm lid; smaller cups (4 oz) take a different lid.',
        },
        {
          q: 'What is the difference between hot and cold cups?',
          a: 'Hot cups have a thicker board and a barrier rated for high temperatures. Cold cups are coated to resist condensation but can warp if used for hot liquids.',
        },
        {
          q: 'Are paper cups recyclable?',
          a: 'Depends on the coating. PE-coated cups need a paper-cup-specific recycling stream. Water-based-coated cups are fully repulpable in standard paper recycling. PLA cups need an industrial composting facility.',
        },
        {
          q: 'What is the MOQ for custom-printed cups?',
          a: 'Most suppliers start at 10,000 cups per SKU per size. Some run as low as 5,000 for cold cups. Stock (unprinted) cups have no MOQ — you can order a single carton.',
        },
        {
          q: 'How long does a custom print run take?',
          a: 'Plan on 3–4 weeks from artwork approval for the first run, then 2–3 weeks for reprints once the dieline and plates are on file with the supplier.',
        },
        {
          q: 'Can I source a small trial run before committing?',
          a: 'Yes. Stock cups ship same-week from most suppliers on the marketplace. Use those for trials; switch to custom-printed once the SKU is stable.',
        },
      ],
    },
  ],
}

export const categories: Category[] = [
  {
    slug: 'paper-cups',
    group: 'paper-disposables',
    name: 'Paper cups',
    blurb: 'Single-wall, double-wall, ripple, cold, and compostable.',
    available: true,
    detail: paperCupsDetail,
  },
  {
    slug: 'lids',
    group: 'paper-disposables',
    name: 'Lids',
    blurb: 'Sip, slot, and dome lids in PP and PLA.',
    available: false,
  },
  {
    slug: 'paper-bowls',
    group: 'paper-disposables',
    name: 'Paper bowls',
    blurb: 'Soup, salad, and noodle bowls with matching lids.',
    available: false,
  },
  {
    slug: 'takeout-containers',
    group: 'paper-disposables',
    name: 'Takeout containers',
    blurb: 'Bagasse, kraft, and aluminium — vented and leakproof.',
    available: false,
  },
  {
    slug: 'napkins',
    group: 'paper-disposables',
    name: 'Napkins',
    blurb: 'Dispenser, beverage, and dinner napkins by ply.',
    available: false,
  },
  {
    slug: 'paper-straws',
    group: 'paper-disposables',
    name: 'Paper straws',
    blurb: 'Standard, jumbo, and bendable — wrapped or unwrapped.',
    available: false,
  },
  {
    slug: 'paper-plates',
    group: 'paper-disposables',
    name: 'Paper plates',
    blurb: 'Compartment, round, and rectangle plates by gsm.',
    available: false,
  },
  {
    slug: 'sanitizers',
    group: 'cleaning-hygiene',
    name: 'Sanitizers',
    blurb: 'Hand, surface, and food-contact sanitizers.',
    available: false,
  },
  {
    slug: 'gloves',
    group: 'cleaning-hygiene',
    name: 'Gloves',
    blurb: 'Nitrile, vinyl, and latex disposable gloves by size.',
    available: false,
  },
  {
    slug: 'trash-bags',
    group: 'cleaning-hygiene',
    name: 'Trash bags',
    blurb: 'Liner, contractor, and compostable bags by gauge.',
    available: false,
  },
  {
    slug: 'surface-wipes',
    group: 'cleaning-hygiene',
    name: 'Surface wipes',
    blurb: 'Quat, alcohol, and food-contact wipes in tubs and refills.',
    available: false,
  },
  {
    slug: 'detergents',
    group: 'cleaning-hygiene',
    name: 'Detergents',
    blurb: 'Dish, laundry, and floor detergents for high-volume use.',
    available: false,
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getCategoriesByGroup(group: CategoryGroup): Category[] {
  return categories.filter((c) => c.group === group)
}

