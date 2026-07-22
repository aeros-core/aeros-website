import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

const PRODUCT_URL = 'https://app.aeros-x.com/market-catalog-details/577'
const WHATSAPP_URL =
  'https://wa.me/917977077571?text=Hi%20Aeros%2C%20I%20would%20like%20a%20quote%20for%20paper%20cups.'
const CANONICAL =
  'https://www.aeros-x.com/products/paper-cups/double-wall-paper-cups'

export const metadata: Metadata = {
  title: 'Double Wall Paper Cups — Aeros',
  description:
    'Factory-direct double-wall paper cups for hot beverages. 4 sizes (250–450 mL), plain white or custom printed up to 4 colours. MOQ from 500 pcs. Free PAN-India shipping.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Double Wall Paper Cups — Aeros',
    description:
      'Plain white or custom-printed double-wall paper cups, factory-direct. MOQ from 500 pcs, free delivery across India.',
    type: 'article',
    url: CANONICAL,
  },
}

const FEATURES = [
  {
    name: 'Double-wall insulation',
    body: 'An insulating air gap between two board layers keeps drinks hotter, longer.',
  },
  {
    name: 'Heat-resistant grip',
    body: 'The outer wall stays cool to the touch. Serve straight off the brew.',
  },
  {
    name: 'Leak-proof & sturdy',
    body: 'PE-lined with a rigid double-wall build. No soggy seams, no drips.',
  },
  {
    name: 'Food-grade quality',
    body: 'Food-safe board and inks, made for cafes, cloud kitchens and F&B service.',
  },
]

const SIZES = [
  { oz: '8 oz', ml: '250 mL', top: '80 mm', height: '92 mm' },
  { oz: '10 oz', ml: '300 mL', top: '90 mm', height: '95 mm' },
  { oz: '12 oz', ml: '350 mL', top: '90 mm', height: '110 mm' },
  { oz: '16 oz', ml: '450 mL', top: '90 mm', height: '135 mm' },
]

const PRINT_POINTS = [
  {
    label: 'Up to 4 colours',
    body: 'full-wrap print of your logo and artwork',
  },
  {
    label: 'Digital proof approved by you',
    body: 'before production begins',
  },
  {
    label: 'From 3,000 pieces',
    body: 'plate charges waived above 5,000 pcs',
  },
  {
    label: 'Artwork support included',
    body: 'send your logo, we set up the print file',
  },
]

const STEPS = [
  {
    name: 'Message us',
    body: 'Share product, size, quantity, plain or printed, and delivery pincode on WhatsApp.',
  },
  {
    name: 'Get your quote',
    body: 'We reply with the delivered per-piece price for your quantity slab.',
  },
  {
    name: 'Approve the proof',
    body: 'For printed cups, approve your artwork proof before production.',
  },
  {
    name: 'Confirm the order',
    body: 'Confirm quantity and payment terms. Production begins.',
  },
  {
    name: 'Track delivery',
    body: 'We produce, dispatch from Mumbai, and share live tracking.',
  },
]

const FAQS = [
  {
    q: 'What sizes do you offer?',
    a: 'Four double-wall sizes: 250 mL (8 oz), 300 mL (10 oz), 350 mL (12 oz) and 450 mL (16 oz) — plain white or custom printed.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'Plain white cups start from 500 pieces (one carton). Custom-printed cups start from 3,000 pieces.',
  },
  {
    q: 'Can you print my logo on the cups?',
    a: 'Yes — full-wrap printing in up to 4 colours. We share a digital proof for your approval before production. A one-time plate charge applies and is waived on orders above 5,000 pieces.',
  },
  {
    q: 'How do bulk discounts work?',
    a: 'Per-piece prices step down through seven quantity slabs as your order grows. Sign up on the Aeros app to see every slab price, or message us your quantity for a quote.',
  },
  {
    q: 'Do you deliver to my city?',
    a: 'Yes — free delivery across India via Delhivery B2B surface freight, dispatched from Mumbai. North-East states and Ladakh are quoted individually.',
  },
  {
    q: 'Do prices include GST?',
    a: 'Prices are per piece with shipping included, and GST @ 18% is extra. A tax invoice is provided with every order.',
  },
  {
    q: 'Can I get a sample first?',
    a: 'Yes — samples are available on request. Message us your size and delivery pincode and we arrange it.',
  },
]

export default function DoubleWallPaperCupsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default mb-10">
            <span className="w-1 h-1 rounded-full bg-royal-600" />
            <span className="text-xs text-fg-muted font-mono uppercase tracking-wider">
              / paper cups / double wall
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.25rem)]">
            Double wall paper cups.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            Factory-direct double-wall cups for hot beverages. Plain white or
            printed with your brand. Low minimums, free delivery anywhere in
            India.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PRODUCT_URL}
              className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              View on the Aeros app
            </a>
            <a
              href={WHATSAPP_URL}
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              WhatsApp for a quote
            </a>
          </div>

          <div className="mt-14">
            <Image
              src="/products/double-wall-paper-cups/hero.jpg"
              alt="Double wall paper cups in 8, 10, 12 and 16 oz"
              width={2000}
              height={1200}
              className="w-full max-w-2xl mx-auto h-auto rounded-2xl shadow-md"
              priority
            />
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-[11px] font-mono text-fg-muted/60 uppercase tracking-widest">
            <span>
              Trusted by Thirdwave Coffee · Ab Coffee · Zepto · Blue Tokai ·
              Ettara · Taj Hotels
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / built double-wall
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Two walls. No sleeve. No burnt fingers.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Two layers of food-grade cup-stock board with an insulating air
              gap in between — comfortable to hold with the hottest pours, no
              separate sleeve needed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.name}
                className="rounded-xl border border-border-default bg-white p-6"
              >
                <div className="text-fg-primary font-semibold">{f.name}</div>
                <p className="mt-2 text-sm text-fg-muted leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes & dimensions */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / four sizes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              From espresso runs to large lattes.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Standard double-wall sizes covering every menu. Pick one size or
              mix quantities across sizes in a single order.
            </p>
          </div>

          <div className="rounded-xl border border-border-default bg-white p-6 sm:p-10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-8">
              technical dimensions — mm
            </div>
            <Image
              src="/products/double-wall-paper-cups/dimensions.svg"
              alt="Dimension drawing of the four double wall cup sizes"
              width={1384}
              height={530}
              className="w-full h-auto"
            />
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-border-default">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-bg-subtle text-[11px] font-mono uppercase tracking-wider text-fg-muted">
                  <th className="px-5 py-3 font-medium">Size</th>
                  <th className="px-5 py-3 font-medium">Capacity</th>
                  <th className="px-5 py-3 font-medium">Top Ø</th>
                  <th className="px-5 py-3 font-medium">Height</th>
                  <th className="px-5 py-3 font-medium">Construction</th>
                  <th className="px-5 py-3 font-medium">Packing</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((s) => (
                  <tr
                    key={s.oz}
                    className="border-t border-border-default"
                  >
                    <td className="px-5 py-3.5 font-bold text-fg-primary">
                      {s.oz}
                    </td>
                    <td className="px-5 py-3.5 font-mono text-fg-secondary">
                      {s.ml}
                    </td>
                    <td className="px-5 py-3.5 font-mono text-fg-secondary">
                      {s.top}
                    </td>
                    <td className="px-5 py-3.5 font-mono text-fg-secondary">
                      {s.height}
                    </td>
                    <td className="px-5 py-3.5 text-fg-secondary">
                      Double-wall
                    </td>
                    <td className="px-5 py-3.5 font-mono text-fg-secondary">
                      25 / sleeve · 500 / carton
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-fg-muted">
            Cup-stock paperboard, 280–300 gsm. Dimensions are indicative and
            confirmed at the time of quotation.
          </p>
        </div>
      </section>

      {/* Pricing on the app */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Live slab pricing, on the app.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Delivered per-piece prices step down through seven quantity
              slabs. Sign up on the Aeros app to see your price for every size
              and quantity, or message us on WhatsApp for a quote.
            </p>
          </div>

          <div className="rounded-xl border border-border-default bg-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex flex-col gap-2.5">
              <span className="inline-flex w-fit items-center rounded-full bg-ink-900 text-white text-[11px] font-semibold px-3 py-1.5">
                Plain white — MOQ 500 pcs
              </span>
              <span className="inline-flex w-fit items-center rounded-full border border-border-default text-fg-secondary text-[11px] font-semibold px-3 py-1.5">
                Custom printed — MOQ 3,000 pcs
              </span>
            </div>
            <p className="flex-1 text-sm text-fg-muted leading-relaxed">
              Prices are per piece and delivered — freight anywhere in India
              is included. Every slab price is visible in the app after
              sign-up. GST @ 18% extra. North-East &amp; Ladakh lanes quoted
              individually. Samples available on request.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={PRODUCT_URL}
                className="px-6 py-3 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors text-center"
              >
                See prices on the app
              </a>
              <a
                href={WHATSAPP_URL}
                className="px-6 py-3 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors text-center"
              >
                WhatsApp for a quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom printing */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / custom printing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Your brand on every sip.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Full-wrap custom printing in up to 4 colours — logo, artwork,
              patterns. Your cup becomes a billboard your customers hold for
              twenty minutes.
            </p>
            <ul className="mt-8 space-y-3">
              {PRINT_POINTS.map((p) => (
                <li key={p.label} className="flex gap-3 text-fg-secondary">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ink-900 shrink-0" />
                  <span>
                    <span className="font-semibold text-fg-primary">
                      {p.label}
                    </span>{' '}
                    — {p.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border-default overflow-hidden">
            <Image
              src="/products/double-wall-paper-cups/printed.jpg"
              alt="Custom printed double wall cups with cafe brand artwork"
              width={2000}
              height={1280}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / how to order
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              From enquiry to doorstep in 5 steps.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <div
                key={s.name}
                className="rounded-xl border border-border-default bg-white p-5"
              >
                <div className="font-mono text-sm text-fg-muted">
                  0{i + 1}
                </div>
                <div className="mt-2 font-semibold text-fg-primary">
                  {s.name}
                </div>
                <p className="mt-1.5 text-[13px] text-fg-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / faq
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Frequently asked questions.
            </h2>
          </div>
          <div>
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="py-6 border-t border-border-default last:border-b"
              >
                <div className="font-semibold text-fg-primary">{f.q}</div>
                <p className="mt-2 text-fg-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-white border-t border-border-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            Start pouring<br />
            <span className="text-fg-muted/60">double wall.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Share your size and quantity — we do the rest. Slab quotes,
            samples, and artwork support, direct from the factory floor.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PRODUCT_URL}
              className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Order on the Aeros app
            </a>
            <a
              href={WHATSAPP_URL}
              className="px-8 py-4 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              WhatsApp +91 79770 77571
            </a>
          </div>
          <div className="mt-10">
            <Link
              href="/products/paper-cups"
              className="text-sm text-fg-muted underline underline-offset-4 hover:text-fg-primary"
            >
              Learn more about paper cups — types, coatings &amp; sizing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
