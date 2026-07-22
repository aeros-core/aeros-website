export type ResourceCategoryId =
  | 'packaging-disposables'
  | 'cleaning-hygiene'
  | 'buying-guides'
  | 'sustainability'

export const RESOURCE_CATEGORIES: Record<
  ResourceCategoryId,
  { label: string; eyebrow: string; description: string }
> = {
  'packaging-disposables': {
    label: 'Packaging & disposables',
    eyebrow: '/ packaging & disposables',
    description:
      'Wraps, cups, containers, and everything single-use — how to spec it and what to order.',
  },
  'cleaning-hygiene': {
    label: 'Cleaning & hygiene',
    eyebrow: '/ cleaning & hygiene',
    description:
      'Sanitizers, gloves, and consumables that keep the back-of-house compliant.',
  },
  'buying-guides': {
    label: 'Buying guides',
    eyebrow: '/ buying guides',
    description:
      'Side-by-side breakdowns to help you choose the right product for the job.',
  },
  sustainability: {
    label: 'Sustainability',
    eyebrow: '/ sustainability',
    description:
      'Compostable, recyclable, and plastic-free options — what the labels actually mean.',
  },
}

type ProseSection = {
  kind: 'prose'
  heading: string
  paragraphs: string[]
}

type TypesSection = {
  kind: 'types'
  heading: string
  intro?: string
  items: Array<{
    name: string
    description: string
    bestFor: string
    heatSafe?: string
    tags?: string[]
  }>
}

type TipsSection = {
  kind: 'tips'
  heading: string
  intro?: string
  bullets: Array<{ label: string; body: string }>
}

type FaqSection = {
  kind: 'faq'
  heading: string
  items: Array<{ q: string; a: string }>
}

export type GuideSection =
  | ProseSection
  | TypesSection
  | TipsSection
  | FaqSection

export type Guide = {
  slug: string
  category: ResourceCategoryId
  title: string
  excerpt: string
  readTime: string
  published: boolean
  hero?: { eyebrow: string; title: string; subtitle: string }
  sections?: GuideSection[]
}

const wrappingPaperGuide: Guide = {
  slug: 'types-of-food-wrapping-paper',
  category: 'packaging-disposables',
  title: 'Types of food wrapping paper',
  excerpt:
    'Butcher, freezer, deli, wax, parchment, and kraft — what each wrapping paper is for, which are heat-safe, and how to pick the right one.',
  readTime: '6 min read',
  published: true,
  hero: {
    eyebrow: 'Packaging & disposables',
    title: 'Types of food wrapping paper.',
    subtitle:
      'Six families of wrapping paper cover almost every kitchen and counter use. Here is what each one does, where it shines, and where it will fail you.',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What is food wrapping paper?',
      paragraphs: [
        'Food wrapping paper is any food-safe sheet or roll used to wrap, line, store, or serve food. The differences between types come down to the coating: a bare paper, a wax coating, a silicone coating, or a poly (plastic) coating each behave very differently around heat, grease, and moisture.',
        'Picking the wrong one is a common — and expensive — mistake. Wax paper melts in the oven, freezer paper is overkill for a deli sandwich, and parchment is wasted money if all you need is a basket liner. Match the coating to the job and you spend less while keeping food in better shape.',
      ],
    },
    {
      kind: 'types',
      heading: 'The six families.',
      intro:
        'Choose by the two things that matter most: whether the paper sees heat, and whether it has to hold back grease or moisture.',
      items: [
        {
          name: 'Butcher paper',
          description:
            'Heavy, uncoated kraft paper. Breathable, so it lets meat surfaces dry and form a bark — which is why pitmasters wrap brisket in the pink/peach variety.',
          bestFor:
            'Wrapping raw meat at the counter, BBQ, table covers, and craft serving.',
          heatSafe: 'Yes — low-and-slow smoking, not direct oven contact.',
          tags: ['Uncoated', 'Breathable'],
        },
        {
          name: 'Freezer paper',
          description:
            'Kraft paper with a poly (plastic) coating on one side. The coating seals out air and locks in moisture to prevent freezer burn for long storage.',
          bestFor:
            'Freezing meat, fish, and poultry for weeks to months.',
          heatSafe: 'No — the poly coating is not oven-safe.',
          tags: ['Poly-coated', 'Moisture barrier'],
        },
        {
          name: 'Deli paper',
          description:
            'Lightweight, grease-resistant sheets — often dry-waxed. Cheap, food-contact safe, and the everyday workhorse for counters and serving baskets.',
          bestFor:
            'Sandwiches, basket liners, separating slices, and grab-and-go.',
          heatSafe: 'No — for serving and wrapping, not cooking.',
          tags: ['Grease-resistant', 'Single-use'],
        },
        {
          name: 'Wax paper',
          description:
            'Paper coated with paraffin or soybean wax on both sides. Moisture- and grease-resistant, but the wax melts and can smoke under heat.',
          bestFor:
            'Wrapping cold food, layering between items, and counter prep.',
          heatSafe: 'No — never use in the oven or under a broiler.',
          tags: ['Wax-coated', 'Cold use only'],
        },
        {
          name: 'Parchment paper',
          description:
            'Paper with a silicone coating that is non-stick and heat-stable. The only family on this list designed to go into a hot oven.',
          bestFor:
            'Baking, lining sheet pans, en papillote, and no-stick prep.',
          heatSafe: 'Yes — typically rated to about 420–450°F.',
          tags: ['Silicone-coated', 'Non-stick', 'Oven-safe'],
        },
        {
          name: 'Kraft paper',
          description:
            'Natural, unbleached brown paper. Sturdy and recyclable, with a craft look that reads well for sustainable and artisan brands.',
          bestFor:
            'Wrapping, basket liners, void fill, and branded serving.',
          heatSafe: 'No — a serving and packing material, not for cooking.',
          tags: ['Uncoated', 'Recyclable'],
        },
      ],
    },
    {
      kind: 'tips',
      heading: 'How to choose.',
      intro:
        'Run the job through these four questions before you order a single case.',
      bullets: [
        {
          label: 'Does it touch heat?',
          body: 'If the paper goes in an oven, only parchment is safe. Everything else can melt, smoke, or ignite.',
        },
        {
          label: 'Is it greasy or wet?',
          body: 'For greasy or moist food, reach for dry-wax deli paper, wax paper, or a poly-coated wrap. Bare kraft and butcher paper will soak through.',
        },
        {
          label: 'How long is storage?',
          body: 'For long freezer storage, freezer paper beats everything. For same-day service, deli or kraft is plenty and far cheaper.',
        },
        {
          label: 'Does it need to look the part?',
          body: 'Custom-printed deli sheets and kraft liners carry your branding at the table. Match the print spec to the supplier before you commit to a run.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'Is wax paper the same as parchment paper?',
          a: 'No. Wax paper is coated in wax and is not heat-safe — it melts and can smoke in the oven. Parchment is coated in silicone and is built for baking. They are not interchangeable when heat is involved.',
        },
        {
          q: 'Can you put butcher paper in the oven?',
          a: 'Uncoated butcher paper tolerates the low, indirect heat of a smoker, which is why it is used for brisket. It is not made for direct, high-heat oven contact — use parchment for that.',
        },
        {
          q: 'What is the difference between deli paper and wax paper?',
          a: 'Deli paper is a light, grease-resistant (often dry-waxed) sheet for serving and wrapping. Wax paper has a heavier wax coating on both sides for a stronger moisture barrier in cold applications. Deli paper is the cheaper everyday choice.',
        },
        {
          q: 'Why is some butcher paper pink?',
          a: 'Pink (or peach) butcher paper is unbleached and unwaxed, prized in BBQ because it breathes — it lets a brisket keep its bark while retaining moisture during a long wrap.',
        },
        {
          q: 'Which wrapping papers are recyclable or compostable?',
          a: 'Uncoated kraft and butcher paper are the most recyclable. Poly-coated freezer paper and wax-coated sheets are generally not curbside-recyclable. Check for a compostable certification if that is a program requirement.',
        },
        {
          q: 'What is the MOQ for custom-printed deli paper?',
          a: 'Most suppliers on the marketplace start around 10,000 sheets per design. Stock (unprinted) deli and kraft paper has no MOQ — order a single case to trial it first.',
        },
      ],
    },
  ],
}

const takeoutContainersGuide: Guide = {
  slug: 'disposable-takeout-containers',
  category: 'packaging-disposables',
  title: 'Disposable take-out container guide',
  excerpt:
    'Foam, PP, PET, paperboard, bagasse, and foil — how each material travels, which are microwave- and leak-safe, and the container styles to match each menu.',
  readTime: '7 min read',
  published: true,
  hero: {
    eyebrow: 'Packaging & disposables',
    title: 'Disposable take-out containers.',
    subtitle:
      'The container is the last thing a customer touches before they eat. Pick the wrong material and food arrives soggy, leaking, or cold — here is how to get it right.',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What to look for.',
      paragraphs: [
        'A take-out container has one job: get food from your line to a table somewhere else in the same condition it left. The material decides almost everything about how well it does that — how it handles heat, grease, and moisture, whether it leaks in a delivery bag, and whether your customer can microwave the leftovers.',
        'Start from the food, not the container. Hot and saucy needs a sealed, heat-tolerant box with a vent. Crisp and fried needs airflow so steam escapes. Cold salads want a clear shell that shows the product. Match the material to the dish and the rest of the decision — size, style, branding — falls into place.',
      ],
    },
    {
      kind: 'types',
      heading: 'Materials at a glance.',
      intro:
        'Six materials cover nearly every take-out program. They trade off heat tolerance, cost, and how green they are.',
      items: [
        {
          name: 'Foam (EPS)',
          description:
            'Expanded polystyrene. Cheap, light, and a strong insulator that keeps food hot. Banned in a growing list of cities and not widely recyclable or compostable.',
          bestFor:
            'Low-cost, high-volume hot food where local rules still allow foam.',
          heatSafe: 'No — not microwave-safe; insulates but cannot be reheated in.',
          tags: ['Lowest cost', 'Insulating'],
        },
        {
          name: 'Polypropylene (PP)',
          description:
            'Sturdy, flexible plastic that handles hot food and seals tightly. Microwave-safe and reusable, with a snap-fit lid that resists leaks in a delivery bag.',
          bestFor:
            'Hot entrées, saucy dishes, soups, and anything heading into delivery.',
          heatSafe: 'Yes — microwave-safe; not for ovens.',
          tags: ['Microwave-safe', 'Leak-resistant', 'Recyclable #5'],
        },
        {
          name: 'PET plastic',
          description:
            'Rigid, crystal-clear plastic that shows the product. Built for cold food — it warps and is not safe with hot fills or reheating.',
          bestFor:
            'Salads, cold bowls, parfaits, and grab-and-go displays.',
          heatSafe: 'No — cold use only; do not microwave.',
          tags: ['Clear', 'Cold use', 'Recyclable #1'],
        },
        {
          name: 'Paperboard / kraft',
          description:
            'Coated paper boxes — the classic food pail and lined hot box. PE or PLA lining adds a grease and moisture barrier; many are microwave-safe.',
          bestFor:
            'Rice bowls, noodles, fries, and dry-to-moderately-saucy hot food.',
          heatSafe: 'Some — check for a microwave-safe (PLA-lined) variant.',
          tags: ['Recyclable', 'Custom-printable'],
        },
        {
          name: 'Bagasse (molded fiber)',
          description:
            'Pressed sugarcane pulp. Sturdy, naturally grease- and water-resistant, and certified compostable. Handles hot, oily food and goes from freezer to microwave.',
          bestFor:
            'Sustainability-driven programs serving hot, greasy, or saucy food.',
          heatSafe: 'Yes — microwave- and freezer-safe.',
          tags: ['Compostable', 'Microwave-safe', 'Soak-resistant'],
        },
        {
          name: 'Aluminium foil',
          description:
            'Foil pans with board or foil lids. The only option that goes straight into a conventional oven, so customers can reheat without re-plating.',
          bestFor:
            'Catering trays, casseroles, and meals meant to be oven-reheated.',
          heatSafe: 'Yes — oven-safe; never microwave.',
          tags: ['Oven-safe', 'Recyclable'],
        },
      ],
    },
    {
      kind: 'types',
      heading: 'Common styles.',
      intro:
        'Once the material is set, pick the shape that fits how the dish is plated and carried.',
      items: [
        {
          name: 'Hinged clamshell',
          description:
            'One-piece box with an attached lid that snaps shut. Fast to close one-handed on a busy line — the default for burgers, sandwiches, and combo plates.',
          bestFor: 'Single-handed service and combo meals.',
          tags: ['One-piece', 'Fast close'],
        },
        {
          name: 'Compartment tray',
          description:
            'Two- or three-section trays that keep sides, sauces, and mains apart so nothing goes soggy or bleeds together in transit.',
          bestFor: 'Plate lunches, sides, and meals that must stay separated.',
          tags: ['Multi-section'],
        },
        {
          name: 'Soup & deli cups',
          description:
            'Round tubs with tight snap lids in a range of sizes. Stack and nest to save shelf space, and seal well enough for thin liquids.',
          bestFor: 'Soups, sauces, dressings, and saucy sides.',
          tags: ['Nestable', 'Tight seal'],
        },
        {
          name: 'Bowls with lids',
          description:
            'Wide, shallow bowls for build-your-own bowls and salads. Clear PET lids show the product; PP versions take hot fills.',
          bestFor: 'Grain bowls, poke, and composed salads.',
          tags: ['Display-friendly'],
        },
      ],
    },
    {
      kind: 'tips',
      heading: 'How to choose.',
      intro:
        'Run the dish through these five questions before you commit to a case.',
      bullets: [
        {
          label: 'Hot or cold?',
          body: 'Hot food needs PP, paperboard, bagasse, or foil. Cold food can use clear PET, which shows the product but warps under heat.',
        },
        {
          label: 'Will it leak?',
          body: 'Saucy and soupy dishes need a snap-tight or hinged seal — PP tubs and clamshells. A loose lid in a delivery bag is a refund waiting to happen.',
        },
        {
          label: 'Does it need to vent?',
          body: 'Fried and crispy food traps steam and goes soft. Vented lids or perforated boxes let steam escape so fries and tempura stay crisp.',
        },
        {
          label: 'Will the customer reheat it?',
          body: 'For microwave reheating choose PP or PLA-lined paperboard or bagasse. For oven reheating, only foil works. PET and foam do neither.',
        },
        {
          label: 'What is your sustainability target?',
          body: 'Bagasse and PLA-lined paperboard are compostable; PP and PET are recyclable where streams exist; foam is neither and is banned in many areas.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'FAQ.',
      items: [
        {
          q: 'Which take-out containers are microwave-safe?',
          a: 'Polypropylene (PP), bagasse (molded fiber), and PLA-lined paperboard are microwave-safe. Foam, PET, and aluminium foil are not — foil can spark, and PET and foam can warp or melt.',
        },
        {
          q: 'What keeps fried food from getting soggy?',
          a: 'Steam. Use vented lids or perforated containers so moisture escapes, and avoid fully airtight boxes for anything crispy. Some operators pack fries in a separate vented bag.',
        },
        {
          q: 'Are bagasse containers actually compostable?',
          a: 'Yes, in a commercial composting facility — bagasse is pressed sugarcane fibre and breaks down there. It will not compost meaningfully in a backyard bin or a landfill, so it needs an industrial compost stream to deliver on the claim.',
        },
        {
          q: 'PP or PET — which plastic should I use?',
          a: 'PP for hot, saucy, microwavable food; it is opaque, sturdy, and seals tight. PET for cold items you want to show off; it is crystal-clear but warps with heat. They suit opposite menus.',
        },
        {
          q: 'How do I stop containers leaking in delivery?',
          a: 'Match lid to base from the same product line, fill leak-prone items (soups, sauces) into snap-lid deli cups rather than clamshells, and leave headroom so the lid seats fully. Tamper-evident bands add a final seal.',
        },
        {
          q: 'What is the MOQ for custom-printed containers?',
          a: 'Custom print on paperboard and kraft typically starts around 10,000 units per design. Stock (unprinted) containers across every material have no MOQ — order a single case to trial fit and seal first.',
        },
      ],
    },
  ],
}

export const guides: Guide[] = [
  wrappingPaperGuide,
  takeoutContainersGuide,
  {
    slug: 'how-to-choose-paper-cups',
    category: 'buying-guides',
    title: 'How to choose paper cups',
    excerpt:
      'Single-wall vs double-wall, hot vs cold, coatings, sizing, and lid fit — the full spec walkthrough.',
    readTime: '7 min read',
    published: false,
  },
  {
    slug: 'compostable-vs-recyclable',
    category: 'sustainability',
    title: 'Compostable vs recyclable',
    excerpt:
      'What the labels actually mean, which disposal stream each needs, and how to avoid greenwashing.',
    readTime: '6 min read',
    published: false,
  },
  {
    slug: 'glove-selection-guide',
    category: 'cleaning-hygiene',
    title: 'Disposable glove selection guide',
    excerpt:
      'Nitrile, vinyl, and latex — when to use each, sizing, and food-contact compliance.',
    readTime: '4 min read',
    published: false,
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export function getGuidesByCategory(category: ResourceCategoryId): Guide[] {
  return guides.filter((g) => g.category === category)
}
