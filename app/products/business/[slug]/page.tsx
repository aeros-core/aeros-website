import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import ItemCard from '@/components/marketplace/ItemCard'
import { APP_MARKETPLACE_URL } from '@/lib/categories'
import {
  fetchCollection,
  fetchStorefront,
  type MarketCollection,
} from '@/lib/marketplace'
import { absoluteUrl, breadcrumbJsonLd } from '@/lib/seo'

// Matches MARKETPLACE_REVALIDATE — segment config must be a literal.
export const revalidate = 3600

/** Collections are curated in the app, so a new one gets a page here on the
 * next revalidation without a deploy — hence no `dynamicParams = false`. */
export async function generateStaticParams() {
  const { collections } = await fetchStorefront()
  return collections.map((c) => ({ slug: c.slug }))
}

async function findCollection(slug: string): Promise<MarketCollection | null> {
  const { collections } = await fetchStorefront()
  return collections.find((c) => c.slug === slug) ?? null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const collection = await findCollection(slug)
  if (!collection) return { title: 'Not found — Aeros' }

  const title = `Packaging for ${collection.name} — Aeros`
  const description = collection.description
  return {
    title,
    description,
    alternates: { canonical: `/products/business/${slug}` },
    openGraph: {
      title,
      description,
      type: 'website',
      ...(collection.coverImage ? { images: [collection.coverImage] } : {}),
    },
  }
}

export default async function BusinessCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { collections } = await fetchStorefront()
  const summary = collections.find((c) => c.slug === slug)
  if (!summary) notFound()

  const result = await fetchCollection(summary.publicId)
  const collection = result?.collection ?? summary
  const items = result?.items ?? []
  const others = collections.filter((c) => c.slug !== slug)
  const path = `/products/business/${slug}`

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Packaging for ${collection.name}`,
    url: absoluteUrl(path),
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: item.url,
      name: item.name,
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
              { name: collection.name, path },
            ]),
          ),
        }}
      />
      {items.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
      )}

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Link
              href="/products#shop-by-business"
              className="inline-flex items-center gap-2 text-xs text-fg-muted font-mono uppercase tracking-wider hover:text-fg-primary transition-colors mb-10"
            >
              <span aria-hidden>←</span> Shop by business
            </Link>
            <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.5rem,6vw,4.5rem)]">
              {collection.name}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-fg-muted leading-relaxed max-w-lg">
              {collection.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={APP_MARKETPLACE_URL}
                className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
              >
                Shop on the Aeros app
              </a>
              {items.length > 0 && (
                <span className="text-sm text-fg-muted">
                  {items.length} products, live on the app
                </span>
              )}
            </div>
          </div>

          {collection.coverImage && (
            <div className="aspect-square rounded-3xl overflow-hidden border border-border-default bg-bg-subtle">
              {/* eslint-disable-next-line @next/next/no-img-element -- remote app CDN */}
              <img
                src={collection.coverImage}
                alt={`Packaging for ${collection.name}`}
                width={1200}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Items */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-border-default border-b border-border-default">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / the kit list
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              What you&apos;ll need.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              The same list as the app&apos;s {collection.name} collection,
              refreshed every hour.
            </p>
          </div>

          {items.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="p-10 rounded-3xl border border-border-default bg-white text-center">
              <p className="text-fg-muted">
                This list is refreshing. Find it under Shop by Business in the
                Aeros app.
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

      {/* Other businesses */}
      {others.length > 0 && (
        <section className="py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / shop by business
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-fg-primary leading-tight mb-12">
              Running something else?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/business/${c.slug}`}
                  className="group p-6 rounded-3xl border border-border-default hover:bg-bg-subtle transition-colors flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-fg-primary">{c.name}</span>
                  <span
                    aria-hidden
                    className="text-fg-muted group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
