import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import CategoryCard from '@/components/products/CategoryCard'
import {
  APP_MARKETPLACE_URL,
  CATEGORY_GROUPS,
  type CategoryGroup,
  getCategoriesByGroup,
} from '@/lib/categories'
import { aerosSelectProducts } from '@/lib/aeros-select'

export const metadata: Metadata = {
  title: 'Products & Categories — Aeros',
  description:
    'Browse the Aeros marketplace catalog — paper cups, lids, takeout containers, sanitizers, gloves, and more. Sourcing guides for every category.',
  openGraph: {
    title: 'Products & Categories — Aeros',
    description:
      'Browse the Aeros marketplace catalog and learn how to spec every product.',
    type: 'website',
  },
}

const groupOrder: CategoryGroup[] = ['paper-disposables', 'cleaning-hygiene']

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default mb-10">
            <span className="w-1 h-1 rounded-full bg-royal-600" />
            <span className="text-xs text-fg-muted font-mono uppercase tracking-wider">
              Catalog · Live on the marketplace
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.75rem)]">
            Everything<br />you source.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            One catalog for the back-of-house — paper, packaging, cleaning, and
            consumables. Spec it here, order it on the marketplace.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={APP_MARKETPLACE_URL}
              className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Browse the marketplace
            </a>
            <Link
              href="/aeroseal"
              className="px-7 py-3.5 rounded-full border border-royal-600 text-royal-700 text-sm font-medium hover:bg-royal-50 transition-colors inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-royal-600" />
              AeroSeal
            </Link>
            <Link
              href="/products/aeros-select"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Aeros Select
            </Link>
          </div>
        </div>
      </section>

      {/* Products & Categories */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-border-default border-b border-border-default">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / catalog
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Products &amp; categories.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              The full catalog, grouped the way operators actually shop it.
              Click any live category for sizing, coatings, and printing
              guides.
            </p>
          </div>

          <div className="space-y-16">
            {groupOrder.map((group) => {
              const items = getCategoriesByGroup(group)
              const meta = CATEGORY_GROUPS[group]
              return (
                <div key={group}>
                  <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
                        {meta.eyebrow}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-fg-primary leading-tight">
                        {meta.label}
                      </h3>
                    </div>
                    <p className="text-sm text-fg-muted max-w-md">
                      {meta.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((category) => (
                      <CategoryCard
                        key={category.slug}
                        category={category}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Aeros Select */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
                / aeros select
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
                Hand-picked by Aeros.
              </h2>
              <p className="mt-5 text-fg-muted text-lg">
                Premium equipment and packaging sourced, vetted, and stocked by
                us. Browse the lineup or jump straight into a product.
              </p>
            </div>
            <Link
              href="/products/aeros-select"
              className="self-start sm:self-end px-5 py-2.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              See the full lineup <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {aerosSelectProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/aeros-select/${product.slug}`}
                className="group bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full hover:bg-bg-subtle transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="text-xs font-mono text-fg-muted/60">
                    / {product.name.toLowerCase()}
                  </div>
                  <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap bg-royal-50 text-royal-800">
                    Aeros Select
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-fg-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-fg-muted text-sm mb-8 flex-1">
                  {product.tagline}
                </p>
                <span className="text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  See full details <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-white border-t border-border-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            Source everything<br />
            <span className="text-fg-muted/60">in one place.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Browse the live catalog, compare suppliers, and place orders — all
            from the Aeros marketplace.
          </p>
          <div className="mt-12 flex items-center justify-center">
            <a
              href={APP_MARKETPLACE_URL}
              className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Open the marketplace
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
