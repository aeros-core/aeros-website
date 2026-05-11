import type { Metadata } from 'next'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import CategoryCard from '@/components/products/CategoryCard'
import {
  APP_MARKETPLACE_URL,
  CATEGORY_GROUPS,
  type CategoryGroup,
  getAerosSelectCategories,
  getCategoriesByGroup,
} from '@/lib/categories'

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
  const aerosSelect = getAerosSelectCategories()

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
            <a
              href="mailto:hello@aeros.io?subject=Marketplace%20catalog"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Talk to sales
            </a>
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
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
              / aeros select
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Verified vendors only.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Aeros Select is the same catalog, narrowed to suppliers we have
              vetted on quality, lead time, and consistency. Look for the tag
              wherever it appears.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aerosSelect.map((category) => (
              <CategoryCard key={category.slug} category={category} />
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
