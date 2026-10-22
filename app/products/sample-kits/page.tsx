import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import ItemCard from '@/components/marketplace/ItemCard'
import { APP_MARKETPLACE_URL } from '@/lib/categories'
import {
  SAMPLE_KITS_CATEGORY_ID,
  fetchCategoryItems,
  fetchStorefront,
  type MarketItem,
} from '@/lib/marketplace'
import { absoluteUrl, breadcrumbJsonLd } from '@/lib/seo'

// Matches MARKETPLACE_REVALIDATE — segment config must be a literal.
export const revalidate = 3600

const title = 'Packaging Sample Kits — Aeros'
const description =
  'Order a sample kit before you buy in bulk — paper tubs, salad bowls, round containers, bagasse clamshells, paper cups and bags. Sold per kit on the Aeros app.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/products/sample-kits' },
  openGraph: { title, description, type: 'website' },
}

const steps = [
  {
    n: '01',
    title: 'Order a kit',
    body: 'Each kit holds every size in a range, sold as a single unit on the Aeros app. No minimum order.',
  },
  {
    n: '02',
    title: 'Test it with your food',
    body: 'Fill them with your own menu — check fit, lids, leaks and how they look on the counter.',
  },
  {
    n: '03',
    title: 'Buy the sizes you picked',
    body: 'The same items are sold in bulk cases on the app, so the sample is exactly what arrives.',
  },
]

/** The kits the app features on its storefront first, then the rest of
 * the category in the app's own order. */
async function getKits(): Promise<MarketItem[]> {
  const [storefront, all] = await Promise.all([
    fetchStorefront(),
    fetchCategoryItems(SAMPLE_KITS_CATEGORY_ID),
  ])
  const featured =
    storefront.rails.find((r) => r.seeAllCategoryId === SAMPLE_KITS_CATEGORY_ID)
      ?.items ?? []
  const featuredIds = new Set(featured.map((i) => i.id))
  return [...featured, ...all.filter((i) => !featuredIds.has(i.id))]
}

export default async function SampleKitsPage() {
  const kits = await getKits()

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Aeros packaging sample kits',
    url: absoluteUrl('/products/sample-kits'),
    itemListElement: kits.map((kit, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: kit.url,
      name: kit.name,
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Products', path: '/products' },
              { name: 'Sample kits', path: '/products/sample-kits' },
            ]),
          ),
        }}
      />
      {kits.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
      )}

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs text-fg-muted font-mono uppercase tracking-wider hover:text-fg-primary transition-colors mb-10"
          >
            <span aria-hidden>←</span> Products
          </Link>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.75rem)]">
            Try before<br />you buy.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            Sample kits hold a whole range — every size, colour and lid — so
            you can test it with your own food before ordering cases.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.n}
              className="p-8 rounded-3xl border border-border-default"
            >
              <div className="text-xs font-mono text-fg-muted/60 mb-6">
                {step.n}
              </div>
              <h2 className="text-xl font-bold text-fg-primary mb-2">
                {step.title}
              </h2>
              <p className="text-sm text-fg-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kits */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-border-default border-b border-border-default">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
                / live on the aeros app
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
                Every sample kit.
              </h2>
              <p className="mt-5 text-fg-muted text-lg">
                Pulled from the app every hour — the kits, contents and prices
                here are the ones you check out with.
              </p>
            </div>
            <a
              href={APP_MARKETPLACE_URL}
              className="self-start sm:self-end px-5 py-2.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              Open the app <span aria-hidden>↗</span>
            </a>
          </div>

          {kits.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kits.map((kit) => (
                <ItemCard key={kit.id} item={kit} />
              ))}
            </div>
          ) : (
            <div className="p-10 rounded-3xl border border-border-default bg-white text-center">
              <p className="text-fg-muted">
                The kit list is refreshing. Browse every sample kit under
                Sample Kits in the Aeros app.
              </p>
              <a
                href={APP_MARKETPLACE_URL}
                className="mt-6 inline-flex px-6 py-3 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
              >
                Open the marketplace
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
