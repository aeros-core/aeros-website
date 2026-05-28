import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

const BOOTH = 'Booth #12937'
const BOOKING_URL =
  'mailto:hello@aeros.io?subject=NRA%20Show%20%E2%80%94%20Meeting%20Request'
const SHOW_URL = 'https://www.nationalrestaurantshow.com/'

export const metadata: Metadata = {
  title: 'NRA Show 2026 — Visit Aeros in Chicago',
  description:
    'Find Aeros at the National Restaurant Association Show, May 16–19, 2026 at McCormick Place Chicago. Book a meeting at our booth.',
  openGraph: {
    title: 'NRA Show 2026 — Visit Aeros in Chicago',
    description:
      'Find Aeros at the National Restaurant Association Show, May 16–19, 2026 at McCormick Place Chicago. Book a meeting at our booth.',
    type: 'website',
  },
}

type BoothHighlight = {
  label: string
  title: string
  body: string
  href?: string
  cta?: string
}

const boothHighlights: BoothHighlight[] = [
  {
    label: 'Live demo',
    title: 'Walk the marketplace.',
    body: 'See a real sourcing flow end-to-end with the team — from RFQ to delivery in one platform.',
  },
  {
    label: 'Aeros Select',
    title: 'Touch the lineup.',
    body: 'Hand-picked equipment and packaging on the table. Sourced, vetted, and stocked by Aeros.',
    href: '/products/aeros-select',
    cta: 'See the lineup',
  },
  {
    label: 'Show pricing',
    title: 'Onboarding offer.',
    body: 'Operators who sign up at the booth get our show-only onboarding terms. Bring a colleague.',
  },
  {
    label: 'Roadmap preview',
    title: "What's next.",
    body: 'Early look at Factory OS and the AI ops layer we are building for multi-unit operators.',
  },
]

const showDetails = [
  { label: 'Dates', value: 'May 16–19, 2026' },
  {
    label: 'Hours',
    value: 'Sat–Mon · 9:30 a.m. – 5:00 p.m.   ·   Tue · 9:30 a.m. – 3:00 p.m.',
  },
  {
    label: 'Venue',
    value: 'McCormick Place · 2301 S. King Drive · Chicago, IL 60616',
  },
  { label: 'Find us', value: BOOTH },
]

export default function NraShowPage() {
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
              Live event · May 16–19, 2026
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.75rem)]">
            See us at<br />
            NRA Show Chicago.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            The B2B marketplace built for the back-of-house. Come see how
            operators are sourcing smarter at McCormick Place.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BOOKING_URL}
              className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Book a meeting at our booth
            </a>
            <a
              href={SHOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              View show details
            </a>
          </div>
        </div>

        <div className="relative mt-20 max-w-3xl mx-auto">
          <div className="rounded-3xl border border-border-default bg-white grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-default overflow-hidden">
            <div className="p-6 sm:text-center">
              <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                When
              </div>
              <div className="text-fg-primary text-sm font-medium">
                May 16–19, 2026
              </div>
            </div>
            <div className="p-6 sm:text-center">
              <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                Where
              </div>
              <div className="text-fg-primary text-sm font-medium">
                McCormick Place, Chicago
              </div>
            </div>
            <div className="p-6 sm:text-center">
              <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                Find us
              </div>
              <div className="text-fg-primary text-sm font-medium">
                {BOOTH}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why come find us */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-border-default border-b border-border-default">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          <div className="bg-white p-10 md:p-14 rounded-3xl border border-border-default">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              The kitchen reality
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-fg-primary leading-tight mb-5">
              Sourcing is still spreadsheets and WhatsApp.
            </h3>
            <p className="text-fg-muted leading-relaxed mb-6 max-w-sm">
              Distributors sprawl across phone calls, paper POs, and opaque
              pricing. Operators reorder blind, and margins disappear into
              the gap.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Fragmented', 'Manual', 'Opaque'].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border-default text-fg-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-3xl border border-border-default">
            <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
              What Aeros runs
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-fg-primary leading-tight mb-5">
              One marketplace for the back-of-house.
            </h3>
            <p className="text-fg-muted leading-relaxed mb-6 max-w-sm">
              Unified sourcing, transparent pricing, and real-time orders —
              built for restaurants, multi-unit operators, and the people
              who supply them.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Unified', 'Transparent', 'Live'].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-ink-900 text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* At the booth */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-border-default border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              At the booth
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              What you&apos;ll see at our booth.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {boothHighlights.map((item) => {
              const cardBody = (
                <>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
                    {item.label}
                  </div>
                  <h3 className="text-xl font-bold text-fg-primary leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed flex-1">
                    {item.body}
                  </p>
                  {item.cta && (
                    <span className="mt-6 text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {item.cta} <span aria-hidden>→</span>
                    </span>
                  )}
                </>
              )

              return item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group bg-white p-10 rounded-3xl border border-border-default flex flex-col hover:bg-bg-subtle transition-colors"
                >
                  {cardBody}
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="bg-white p-10 rounded-3xl border border-border-default flex flex-col"
                >
                  {cardBody}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Show details strip */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              Show details
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-fg-primary leading-tight">
              Plan your visit.
            </h2>
          </div>

          <div className="rounded-3xl border border-border-default bg-bg-subtle divide-y divide-border-default">
            {showDetails.map((row) => (
              <div
                key={row.label}
                className="px-8 py-6 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 items-baseline"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                  {row.label}
                </div>
                <div className="text-fg-primary text-[15px] leading-relaxed">
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={SHOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-muted hover:text-fg-primary transition-colors font-mono"
            >
              View official show site →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-white border-t border-border-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            Let&apos;s meet in Chicago.<br />
            <span className="text-fg-muted/60">May 16–19.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Grab a 15-minute slot with the team. We&apos;ll walk you through
            the marketplace and the offer for show attendees.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BOOKING_URL}
              className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Book a meeting at our booth
            </a>
            <Link
              href="/partners/us"
              className="px-8 py-4 rounded-full border border-royal-600 text-royal-700 text-sm font-medium hover:bg-royal-50 transition-colors inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-royal-600" />
              Become a partner
            </Link>
          </div>
          <p className="mt-8 text-xs text-fg-muted/60 font-mono">
            15-minute slots · Operator-only · Coffee on us
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
