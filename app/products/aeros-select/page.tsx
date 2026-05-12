import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import {
  AEROS_SELECT_TAGLINE,
  aerosSelectProducts,
} from '@/lib/aeros-select'
import { APP_MARKETPLACE_URL } from '@/lib/categories'

export const metadata: Metadata = {
  title: 'Aeros Select — Premium products by Aeros',
  description: AEROS_SELECT_TAGLINE,
  openGraph: {
    title: 'Aeros Select — Premium products by Aeros',
    description: AEROS_SELECT_TAGLINE,
    type: 'website',
  },
}

export default function AerosSelectIndexPage() {
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
              Aeros Select · Premium picks
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.75rem)]">
            Aeros Select.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            {AEROS_SELECT_TAGLINE}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={APP_MARKETPLACE_URL}
              className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Open the Aeros app
            </a>
            <Link
              href="/products"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Back to all products
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
              / aeros select
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              In the lineup.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              The curated lineup — sourced, vetted, and stocked by us. Pick a
              product to see the full spec sheet, then order on the Aeros app.
            </p>
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
      <section className="py-40 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            Hand-picked.<br />
            <span className="text-fg-muted/60">By us, for you.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Every Aeros Select product is sourced, tested, and stocked by the
            Aeros team. Place an order on the app and we ship from the closest
            metro warehouse.
          </p>
          <div className="mt-12 flex items-center justify-center">
            <a
              href={APP_MARKETPLACE_URL}
              className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Open the Aeros app
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
