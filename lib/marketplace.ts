/**
 * Live read of the Aeros app's storefront, so the site lists exactly what
 * the app sells instead of a hand-copied snapshot that drifts.
 *
 * Every call goes through the app's public, unauthenticated marketplace API
 * and is cached for an hour (ISR). Nothing here throws: if the API is down
 * at build or revalidation time the fetchers return empty data, the pages
 * render their fallback copy, and the next revalidation picks the data up.
 */

const API_BASE = 'https://api.aeros-x.com/api/v1'

/** The Food Packaging marketplace — the storefront at app.aeros-x.com/market. */
export const FOOD_PACKAGING_MARKET_ID = 92

/** Category id of Sample Kits in the app. */
export const SAMPLE_KITS_CATEGORY_ID = 93

/** Seconds between refreshes. Route segments that read this data must use
 * the same literal in `export const revalidate`. */
export const MARKETPLACE_REVALIDATE = 3600

/** The app shows prices publicly, so the site does too. Flip to false to
 * hide every price on the site and keep only the "Buy on the app" links. */
export const SHOW_PRICES = true

/** Product pages are the one place the app can be deep-linked cold;
 * category and collection screens live in app memory, not the URL. */
export function appProductUrl(id: number): string {
  return `https://app.aeros-x.com/market-catalog-details/${id}`
}

export type MarketItem = {
  id: number
  name: string
  /** Name before the first " – " or " — ", e.g. "Paper Tub Sample Kit 115 mm". */
  title: string
  /** Name after that dash, e.g. "250 to 1000 ml, White & Kraft…". */
  subtitle: string | null
  sku: string
  brand: string
  /** Price per unit in rupees, excluding GST. Null when the app hides it. */
  price: number | null
  unit: string
  moq: number
  description: string
  images: string[]
  url: string
}

export type MarketCategory = { id: number; name: string; image: string | null }

export type MarketCollection = {
  publicId: string
  slug: string
  name: string
  description: string
  coverImage: string | null
  itemCount: number
}

export type ProductRail = {
  id: string
  title: string
  seeAllCategoryId: number | null
  items: MarketItem[]
}

export type Storefront = {
  categories: MarketCategory[]
  moreCategories: MarketCategory[]
  collections: MarketCollection[]
  rails: ProductRail[]
}

const EMPTY_STOREFRONT: Storefront = {
  categories: [],
  moreCategories: [],
  collections: [],
  rails: [],
}

/* eslint-disable @typescript-eslint/no-explicit-any -- the API is untyped JSON;
 * every field is narrowed in the parsers below before it leaves this file. */

async function getJson(path: string): Promise<any | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: MARKETPLACE_REVALIDATE, tags: ['marketplace'] },
    })
    if (!res.ok) return null
    const body = await res.json()
    if (body?.status === false) return null
    return body
  } catch {
    return null
  }
}

function parseItem(raw: any): MarketItem | null {
  if (!raw || typeof raw.id !== 'number' || typeof raw.name !== 'string') {
    return null
  }
  if (raw.status !== undefined && raw.status !== 1) return null

  const name = raw.name.trim()
  // Sellers separate the product from its variants with an en or em dash.
  const split = name.match(/\s[–—]\s/)
  const dash = split?.index ?? -1
  const rest = split ? name.slice(dash + split[0].length) : null
  const minor = Number.parseInt(raw.price_minor, 10)
  const images = Array.isArray(raw.catalogImage)
    ? [...raw.catalogImage]
        .filter((img) => typeof img?.image === 'string' && !img.deleted_at)
        .sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0))
        .map((img) => img.image as string)
    : []

  return {
    id: raw.id,
    name,
    title: dash > 0 ? name.slice(0, dash) : name,
    subtitle: dash > 0 ? rest : null,
    sku: typeof raw.sku === 'string' ? raw.sku : '',
    brand: typeof raw.brand === 'string' ? raw.brand : '',
    price:
      raw.visibility_mode === 'PUBLIC_PRICE' && Number.isFinite(minor)
        ? minor / 100
        : null,
    unit: typeof raw.unit === 'string' ? raw.unit : 'pcs',
    moq: typeof raw.moq === 'number' ? raw.moq : 1,
    description: typeof raw.description === 'string' ? raw.description : '',
    images,
    url: appProductUrl(raw.id),
  }
}

function parseItems(list: any): MarketItem[] {
  if (!Array.isArray(list)) return []
  return list
    .map((entry) => parseItem(entry?.item ?? entry))
    .filter((item): item is MarketItem => item !== null)
}

function parseCategories(list: any): MarketCategory[] {
  if (!Array.isArray(list)) return []
  return list
    .filter((c) => typeof c?.id === 'number' && typeof c?.name === 'string')
    .map((c) => ({
      id: c.id,
      name: c.name,
      image: typeof c.image === 'string' ? c.image : null,
    }))
}

export function slugify(name: string): string {
  return name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function parseCollections(list: any): MarketCollection[] {
  if (!Array.isArray(list)) return []
  return list
    .filter((c) => typeof c?.public_id === 'string' && typeof c?.name === 'string')
    .map((c) => ({
      publicId: c.public_id,
      slug: slugify(c.name),
      name: c.name,
      description: typeof c.description === 'string' ? c.description : '',
      coverImage: typeof c.cover_image === 'string' ? c.cover_image : null,
      itemCount: typeof c.item_count === 'number' ? c.item_count : 0,
    }))
}

/** The storefront the app renders at /market, block by block. */
export async function fetchStorefront(): Promise<Storefront> {
  const body = await getJson(
    `/marketplace/page?marketId=${FOOD_PACKAGING_MARKET_ID}`,
  )
  const blocks: any[] = body?.data?.blocks ?? body?.blocks
  if (!Array.isArray(blocks)) return EMPTY_STOREFRONT

  const byId = (id: string) => blocks.find((b) => b?.id === id)
  const grids = blocks.filter((b) => b?.type === 'category_grid')

  return {
    categories: parseCategories((byId('fp-cats-main') ?? grids[0])?.categories),
    moreCategories: parseCategories(
      (byId('fp-cats-more') ?? grids[1])?.categories,
    ),
    collections: parseCollections(
      blocks.find((b) => b?.type === 'collection_rail')?.collections,
    ),
    rails: blocks
      .filter((b) => b?.type === 'product_rail')
      .map((b) => ({
        id: String(b.id),
        title: typeof b.config?.title === 'string' ? b.config.title : '',
        seeAllCategoryId:
          typeof b.config?.see_all?.category_id === 'number'
            ? b.config.see_all.category_id
            : null,
        items: parseItems(b.items),
      })),
  }
}

/** Every live item in an app category, across all pages. */
export async function fetchCategoryItems(
  categoryId: number,
): Promise<MarketItem[]> {
  const items: MarketItem[] = []
  const seen = new Set<number>()
  // The API pages in 15s; the cap only guards against a runaway loop.
  for (let page = 1; page <= 20; page++) {
    const body = await getJson(
      `/marketplace/section/goods/items?categoryId=${categoryId}&marketId=${FOOD_PACKAGING_MARKET_ID}&page=${page}`,
    )
    const batch = parseItems(body?.data)
    if (batch.length === 0) break
    for (const item of batch) {
      if (!seen.has(item.id)) {
        seen.add(item.id)
        items.push(item)
      }
    }
    const total = body?.paginationData?.totalLength
    if (typeof total === 'number' && items.length >= total) break
  }
  return items
}

/** A "Shop by Business" collection and its items. */
export async function fetchCollection(
  publicId: string,
): Promise<{ collection: MarketCollection; items: MarketItem[] } | null> {
  const body = await getJson(
    `/marketplace/collection/${encodeURIComponent(publicId)}`,
  )
  const data = body?.data ?? body
  const [collection] = parseCollections(data?.collection ? [data.collection] : [])
  if (!collection) return null
  const items = parseItems(data.items)
  return { collection: { ...collection, itemCount: items.length }, items }
}

/* eslint-enable @typescript-eslint/no-explicit-any */

const inr = (fractionDigits: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })
const inrWhole = inr(0)
const inrPaise = inr(2)

/** ₹380 for whole rupees, ₹131.10 otherwise — never ₹131.1. */
export function formatPrice(price: number): string {
  return (Number.isInteger(price) ? inrWhole : inrPaise).format(price)
}

/**
 * Splits an app description into paragraphs and bullet lists. Sellers write
 * plain text with "•" bullets; this keeps that structure without trusting
 * any markup in it.
 */
export function descriptionBlocks(
  text: string,
): Array<{ kind: 'p'; text: string } | { kind: 'ul'; items: string[] }> {
  const blocks: Array<
    { kind: 'p'; text: string } | { kind: 'ul'; items: string[] }
  > = []
  for (const line of text.split(/\n+/).map((l) => l.trim())) {
    if (!line) continue
    const bullet = line.match(/^[•\-*]\s*(.+)$/)
    if (bullet) {
      const last = blocks[blocks.length - 1]
      if (last?.kind === 'ul') last.items.push(bullet[1])
      else blocks.push({ kind: 'ul', items: [bullet[1]] })
    } else {
      blocks.push({ kind: 'p', text: line })
    }
  }
  return blocks
}
