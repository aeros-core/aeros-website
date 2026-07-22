import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import {
  RESOURCE_CATEGORIES,
  type ResourceCategoryId,
  getGuidesByCategory,
  guides,
} from '@/lib/resources'

export const metadata: Metadata = {
  title: 'Food Service Resources — Aeros',
  description:
    'Guides and buying advice for the back-of-house — wrapping paper, cups, takeout containers, cleaning, and sustainability. Spec it here, source it on the Aeros marketplace.',
  openGraph: {
    title: 'Food Service Resources — Aeros',
    description:
      'Guides and buying advice for the back-of-house, from the team behind the Aeros marketplace.',
    type: 'website',
  },
}

const categoryOrder: ResourceCategoryId[] = [
  'packaging-disposables',
  'buying-guides',
  'cleaning-hygiene',
  'sustainability',
]

const featured = guides.find((g) => g.published)

export default function ResourcesPage() {
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
              Resources · Guides for operators
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.75rem)]">
            Food Service<br />Resources.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            Plain-spoken guides to spec every product the back-of-house runs
            on. Learn it here, source it on the marketplace.
          </p>
        </div>
      </section>

      {/* Featured guide */}
      {featured && (
        <section className="py-20 px-6 bg-bg-subtle border-t border-b border-border-default">
          <div className="max-w-5xl mx-auto">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-6">
              / featured guide
            </div>
            <Link
              href={`/resources/${featured.slug}`}
              className="group block bg-white rounded-3xl border border-border-default p-10 md:p-14 hover:bg-bg-subtle transition-colors"
            >
              <div className="text-[11px] font-mono uppercase tracking-widest text-royal-600 mb-4">
                {RESOURCE_CATEGORIES[featured.category].label}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-fg-primary leading-tight max-w-2xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-fg-muted text-lg max-w-xl leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read the guide <span aria-hidden>→</span>
                </span>
                <span className="text-xs font-mono text-fg-muted/60">
                  {featured.readTime}
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / browse by topic
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Browse the library.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Grouped the way operators actually think about the back-of-house.
              More guides land every month.
            </p>
          </div>

          <div className="space-y-16">
            {categoryOrder.map((id) => {
              const meta = RESOURCE_CATEGORIES[id]
              const items = getGuidesByCategory(id)
              if (items.length === 0) return null
              return (
                <div key={id}>
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
                    {items.map((guide) =>
                      guide.published ? (
                        <Link
                          key={guide.slug}
                          href={`/resources/${guide.slug}`}
                          className="group bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full hover:bg-bg-subtle transition-colors"
                        >
                          <div className="flex items-center justify-between gap-3 mb-6">
                            <div className="text-xs font-mono text-fg-muted/60">
                              / guide
                            </div>
                            <span className="text-xs font-mono text-fg-muted/60">
                              {guide.readTime}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold text-fg-primary mb-2">
                            {guide.title}
                          </h4>
                          <p className="text-fg-muted text-sm mb-8 flex-1 leading-relaxed">
                            {guide.excerpt}
                          </p>
                          <span className="text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read the guide <span aria-hidden>→</span>
                          </span>
                        </Link>
                      ) : (
                        <div
                          key={guide.slug}
                          className="bg-bg-subtle p-8 rounded-3xl border border-border-default flex flex-col h-full"
                        >
                          <div className="flex items-center justify-between gap-3 mb-6">
                            <div className="text-xs font-mono text-fg-muted/60">
                              / guide
                            </div>
                            <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap bg-ink-50 text-ink-600">
                              Coming soon
                            </span>
                          </div>
                          <h4 className="text-xl font-bold text-fg-primary/70 mb-2">
                            {guide.title}
                          </h4>
                          <p className="text-fg-muted/70 text-sm flex-1 leading-relaxed">
                            {guide.excerpt}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-white border-t border-border-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            Know what you need?<br />
            <span className="text-fg-muted/60">Go source it.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Take what you learned to the marketplace — compare suppliers, see
            live pricing, and place an order in minutes.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products"
              className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Browse the catalog
            </Link>
            <a
              href="mailto:hello@aeros.io?subject=Food%20Service%20Resources"
              className="px-8 py-4 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Suggest a guide
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
