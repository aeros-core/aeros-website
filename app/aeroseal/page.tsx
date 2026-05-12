import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import {
  AEROSEAL_BUILT_FOR,
  AEROSEAL_ECOSYSTEM,
  AEROSEAL_FAQ,
  AEROSEAL_FOIL_PRINT,
  AEROSEAL_HERO_PROBLEM,
  AEROSEAL_HERO_PROMISE,
  AEROSEAL_MODELS,
  AEROSEAL_ORDER_LABEL,
  AEROSEAL_ORDER_URL,
  AEROSEAL_SPECS,
  AEROSEAL_TAGLINE,
  AEROSEAL_VS_TINCAN,
  type AerosealModel,
} from '@/lib/aeroseal'

const TITLE =
  'AeroSeal — Cup & tub sealing for beverage delivery. India & US.'

export const metadata: Metadata = {
  title: TITLE,
  description: AEROSEAL_TAGLINE,
  openGraph: {
    title: TITLE,
    description: AEROSEAL_TAGLINE,
    type: 'website',
  },
}

const flagship = AEROSEAL_MODELS.find((m) => m.isFlagship)!
const standardModels = AEROSEAL_MODELS.filter((m) => !m.isFlagship)

export default function AerosealPage() {
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
              A new brand by Aeros · India & US
            </span>
          </div>

          <h1 className="aeros-logo font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(3rem,10vw,7rem)]">
            AeroSeal<span className="text-royal-600">.</span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            {AEROSEAL_TAGLINE}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <OrderButton primary />
            <Link
              href="#lineup"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Compare the lineup
            </Link>
          </div>

          <div className="mt-14 inline-flex items-center gap-2 text-[11px] font-mono text-fg-muted/60 uppercase tracking-widest">
            <span>An</span>
            <span className="aeros-logo text-fg-primary">Aeros</span>
            <span>brand</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap bg-royal-50 text-royal-800">
              Stocked across India & the US
            </span>
          </div>
        </div>
      </section>

      {/* Problem / promise */}
      <section className="py-24 px-6 bg-ink-900 text-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4">
              / why this matters
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              The seal is the last thing that touches a delivery.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              {AEROSEAL_HERO_PROBLEM}
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {AEROSEAL_HERO_PROMISE}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="#lineup"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
              >
                See the five machines <span aria-hidden>→</span>
              </Link>
              <Link
                href="#vs-tincan"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
              >
                AeroSeal vs tin-can sealer <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Range strip */}
      <section className="py-16 px-6 bg-bg-subtle border-b border-border-default">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Machines in range', value: '5 · cup, tub, and universal' },
              { label: 'Container compatibility', value: '90 / 95 mm cups · 100 – 150 mm tubs' },
              { label: 'Throughput ceiling', value: '1,200 / hr · AeroSeal Pro' },
              { label: 'Warranty', value: '12 months parts & labour' },
            ].map((h) => (
              <div
                key={h.label}
                className="bg-white p-6 rounded-3xl border border-border-default"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
                  {h.label}
                </div>
                <div className="text-fg-primary text-base font-semibold leading-snug">
                  {h.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vs Tin Can */}
      <section
        id="vs-tincan"
        className="py-32 px-6 bg-white scroll-mt-24 border-b border-border-default"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
              / aeroseal + pet vs tin-can sealer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Cheaper. Faster.<br />
              <span className="text-fg-muted/60">And the customer sees the drink.</span>
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              {AEROSEAL_VS_TINCAN.intro}
            </p>
          </div>

          {/* Comparison table */}
          <div className="rounded-3xl border border-border-default overflow-hidden bg-white">
            <div className="grid grid-cols-12 gap-0 bg-bg-subtle border-b border-border-default">
              <div className="col-span-12 sm:col-span-4 px-6 py-4 text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                / dimension
              </div>
              <div className="hidden sm:flex sm:col-span-4 px-6 py-4 items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-royal-600" />
                <span className="aeros-logo text-sm font-bold text-fg-primary">
                  AeroSeal + PET
                </span>
              </div>
              <div className="hidden sm:block sm:col-span-4 px-6 py-4 text-sm font-bold text-fg-muted">
                Tin-can sealer
              </div>
            </div>
            <div className="divide-y divide-border-default">
              {AEROSEAL_VS_TINCAN.rows.map((row) => (
                <div
                  key={row.dimension}
                  className="grid grid-cols-12 gap-0 items-start"
                >
                  <div className="col-span-12 sm:col-span-4 px-6 py-5 text-[11px] font-mono uppercase tracking-widest text-fg-muted/60 sm:pt-6">
                    {row.dimension}
                  </div>
                  <div className="col-span-12 sm:col-span-4 px-6 py-3 sm:py-5 bg-royal-50/30 sm:bg-transparent">
                    <div className="sm:hidden text-[10px] font-mono uppercase tracking-widest text-royal-700 mb-1">
                      AeroSeal + PET
                    </div>
                    <p className="text-fg-primary text-[14px] leading-relaxed">
                      {row.aeroseal}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-span-4 px-6 py-3 sm:py-5">
                    <div className="sm:hidden text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                      Tin-can sealer
                    </div>
                    <p className="text-fg-muted text-[14px] leading-relaxed">
                      {row.tincan}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm text-fg-muted/80 max-w-3xl">
            For a beverage brand running on DoorDash, Zomato, or both — every
            comparison above shifts margin, brand control, and customer
            experience in favour of AeroSeal.
          </p>
        </div>
      </section>

      {/* Lineup */}
      <section id="lineup" className="py-32 px-6 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / the lineup
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Five machines.<br />
              <span className="text-fg-muted/60">One sealing standard.</span>
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Cup line, tub line, and the flagship that does both. Every
              AeroSeal runs the same PID temperature platform — so a foil roll
              bought for the Mini also fits the Pro and the One.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {standardModels.map((m) => (
              <ModelCard key={m.slug} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Compare specs side-by-side */}
      <section className="px-6 pb-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / compare side-by-side
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-fg-primary leading-tight">
              All five models, every spec.
            </h3>
          </div>

          <div className="rounded-3xl border border-border-default overflow-hidden bg-white overflow-x-auto">
            <table className="w-full min-w-[820px] text-sm">
              <thead>
                <tr className="bg-bg-subtle border-b border-border-default">
                  <th className="text-left px-6 py-4 text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 font-medium">
                    / spec
                  </th>
                  {AEROSEAL_MODELS.map((m) => (
                    <th
                      key={m.slug}
                      className="text-left px-6 py-4 align-bottom"
                    >
                      <div className="aeros-logo text-sm font-bold text-fg-primary leading-tight">
                        AeroSeal{' '}
                        <span
                          className={
                            m.isFlagship ? 'text-royal-600' : 'text-fg-primary'
                          }
                        >
                          {m.name}
                        </span>
                      </div>
                      <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                        {m.positioning}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-default">
                <CompareRow
                  label="Format"
                  values={AEROSEAL_MODELS.map((m) => m.format)}
                />
                <CompareRow
                  label="Throughput"
                  values={AEROSEAL_MODELS.map((m) => m.throughput)}
                />
                <CompareRow
                  label="Cup compatibility"
                  values={AEROSEAL_MODELS.map((m) => m.cupCompat)}
                />
                <CompareRow
                  label="Tub compatibility"
                  values={AEROSEAL_MODELS.map((m) => m.tubCompat)}
                />
                <CompareRow
                  label="Power"
                  values={AEROSEAL_MODELS.map((m) => m.power)}
                />
                <CompareRow
                  label="Footprint (mm)"
                  values={AEROSEAL_MODELS.map((m) => m.footprintMm)}
                />
                <CompareRow
                  label="Weight"
                  values={AEROSEAL_MODELS.map((m) => m.weightKg)}
                />
                <CompareRow
                  label="Best for"
                  values={AEROSEAL_MODELS.map((m) => m.bestFor)}
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Flagship spotlight: AeroSeal One */}
      <section className="px-6 pb-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[2rem] bg-ink-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-10 p-10 md:p-14 lg:p-16">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 mb-8">
                  <span className="w-1 h-1 rounded-full bg-royal-400" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/70">
                    Flagship
                  </span>
                </div>
                <h2 className="aeros-logo text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                  AeroSeal <span className="text-royal-400">One</span>.
                </h2>
                <p className="mt-6 text-xl md:text-2xl text-white/80 leading-snug max-w-xl">
                  {flagship.tagline} One machine. Cups, tubs, and everything
                  your kitchen ships out the door.
                </p>
                <p className="mt-6 text-white/60 leading-relaxed max-w-xl">
                  {flagship.blurb}
                </p>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 max-w-xl">
                  <FlagshipStat label="Throughput" value={flagship.throughput} />
                  <FlagshipStat label="Format" value={flagship.format} />
                  <FlagshipStat label="Tool change" value="≤ 90 seconds" />
                  <FlagshipStat label="Cup dies" value="90, 95 mm" />
                  <FlagshipStat label="Tub dies" value="100, 120, 150 mm" />
                  <FlagshipStat label="Power" value={flagship.power} />
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-3">
                  <a
                    href={AEROSEAL_ORDER_URL}
                    className="px-7 py-3.5 rounded-full bg-white text-ink-900 text-sm font-medium hover:bg-white/90 transition-colors text-center"
                  >
                    {AEROSEAL_ORDER_LABEL}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12 flex flex-col gap-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  / why the One
                </div>
                {[
                  {
                    h: 'A single SKU on your floor.',
                    p: 'One machine to train staff on, one machine to service, one machine to budget for — instead of separate cup and tub lines.',
                  },
                  {
                    h: '90-second tool change.',
                    p: 'Quick-release heads swap between cup dies (90 / 95 mm) and tub dies (100 / 120 / 150 mm) without tools.',
                  },
                  {
                    h: 'Same foils, same lids.',
                    p: 'Runs the entire AeroSeal Foils and Lids range — no separate consumable supply chain per machine.',
                  },
                ].map((b) => (
                  <div key={b.h}>
                    <h3 className="text-base font-semibold text-white">
                      {b.h}
                    </h3>
                    <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
                      {b.p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared platform */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / shared platform
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              One platform underneath.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Every AeroSeal ships on the same sealing platform — so consumables
              and service parts are shared across the entire range.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-border-default overflow-hidden">
            <dl className="divide-y divide-border-default">
              {AEROSEAL_SPECS.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 px-6 sm:px-8 py-5"
                >
                  <dt className="text-[11px] font-mono uppercase tracking-widest text-fg-muted/60 sm:pt-1">
                    {item.label}
                  </dt>
                  <dd className="sm:col-span-2 text-fg-primary text-[15px] leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / built for
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Beverage delivery first.<br />
              <span className="text-fg-muted/60">Then everything else.</span>
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              The majority of AeroSeal customers seal a beverage — boba, juice,
              smoothies, lemonades, cold brew. The same machine then carries
              soups, gravies, and bowls when you need it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AEROSEAL_BUILT_FOR.map((item) => (
              <div
                key={item.name}
                className="bg-white p-8 rounded-3xl border border-border-default"
              >
                <h3 className="text-lg font-bold text-fg-primary mb-3">
                  {item.name}
                </h3>
                <p className="text-fg-muted text-[15px] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seal Foils — expanded */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / aeroseal foils
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              The seal foils,<br />
              <span className="text-fg-muted/60">in your brand or ours.</span>
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Every machine needs a foil. AeroSeal Foils are aluminium-laminated,
              food-grade, and tuned to the heat profile of every AeroSeal
              machine — stocked clear, or custom-printed with your artwork.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-4">
            {/* Ecosystem cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {AEROSEAL_ECOSYSTEM.map((item) => (
                <div
                  key={item.slug}
                  className="bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full"
                >
                  <div className="text-xs font-mono text-fg-muted/60 mb-6">
                    / {item.slug}
                  </div>
                  <h3 className="aeros-logo text-2xl font-bold text-fg-primary mb-3">
                    {item.name}
                  </h3>
                  <p className="text-fg-muted text-[15px] leading-relaxed mb-6">
                    {item.blurb}
                  </p>
                  <div className="mt-auto pt-6 border-t border-border-default">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
                      Spec
                    </div>
                    <p className="text-fg-primary text-sm">{item.spec}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom print panel */}
            <div className="lg:col-span-5 bg-ink-900 text-white p-10 rounded-3xl flex flex-col">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4">
                / custom-printed foils
              </div>
              <h3 className="text-2xl font-bold leading-snug mb-3">
                Print your brand on every cup.
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">
                Co-brand your seal foil with your logo, drink name, or
                promotional artwork. Every cup that leaves your kitchen carries
                your mark.
              </p>

              <dl className="space-y-5 mb-8">
                <FoilSpec label="Material" value={AEROSEAL_FOIL_PRINT.material} />
                <FoilSpec label="Print MOQ" value={AEROSEAL_FOIL_PRINT.moq} />
                <FoilSpec
                  label="Colour limit"
                  value={AEROSEAL_FOIL_PRINT.colors}
                />
                <FoilSpec
                  label="Lead time"
                  value={AEROSEAL_FOIL_PRINT.leadTime}
                />
              </dl>

              <p className="text-white/50 text-xs leading-relaxed mb-8">
                {AEROSEAL_FOIL_PRINT.notes}
              </p>

              <div className="mt-auto">
                <a
                  href={AEROSEAL_ORDER_URL}
                  className="block w-full px-7 py-3.5 rounded-full bg-white text-ink-900 text-sm font-medium hover:bg-white/90 transition-colors text-center"
                >
                  {AEROSEAL_ORDER_LABEL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner program */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[2rem] border border-border-default p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
                / partner program
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-fg-primary leading-tight">
                Sell, service, or distribute<br />
                AeroSeal in your city.
              </h2>
              <p className="mt-5 text-fg-muted text-lg max-w-xl">
                We&apos;re onboarding regional distributors, on-site service
                partners, and consumables resellers across India and the US.
                Margins, training, and demo stock included.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="mailto:partners@aeros.io?subject=AeroSeal%20partner%20program"
                className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors text-center"
              >
                Apply as a partner
              </a>
              <a
                href="mailto:service@aeros.io?subject=AeroSeal%20service%20request"
                className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors text-center"
              >
                Service & support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / faq
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Before you order.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {AEROSEAL_FAQ.map((item) => (
              <div
                key={item.q}
                className="bg-white p-8 rounded-3xl border border-border-default"
              >
                <h3 className="text-lg font-bold text-fg-primary leading-tight mb-3">
                  {item.q}
                </h3>
                <p className="text-fg-muted text-[15px] leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — one order link */}
      <section className="py-40 px-6 bg-white border-t border-border-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            One seal.<br />
            <span className="text-fg-muted/60">
              Every cup. Every tub.<br />Every time.
            </span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            One link to order — machines, foils, lids, and replacement parts.
            Pricing and stock live across India and the US.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <OrderButton primary large />
            <Link
              href="/products"
              className="px-8 py-4 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              All Aeros products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function OrderButton({
  primary,
  large,
}: {
  primary?: boolean
  large?: boolean
}) {
  const base = large ? 'px-8 py-4' : 'px-7 py-3.5'
  const color = primary
    ? 'bg-ink-900 text-white hover:bg-ink-800'
    : 'border border-border-default text-fg-primary hover:bg-bg-subtle'
  return (
    <a
      href={AEROSEAL_ORDER_URL}
      className={`${base} rounded-full text-sm font-medium transition-colors ${color}`}
    >
      {AEROSEAL_ORDER_LABEL}
    </a>
  )
}

function ModelCard({ model }: { model: AerosealModel }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full">
      <div className="flex items-start justify-between gap-3 mb-6">
        <div className="text-xs font-mono text-fg-muted/60">
          / aeroseal {model.slug}
        </div>
        <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap bg-ink-50 text-ink-600">
          {model.positioning}
        </span>
      </div>

      <h3 className="aeros-logo text-2xl font-bold text-fg-primary leading-tight">
        AeroSeal <span className="text-royal-600">{model.name}</span>
      </h3>
      <p className="mt-2 text-fg-primary text-sm font-medium">
        {model.tagline}
      </p>
      <p className="mt-4 text-fg-muted text-sm leading-relaxed">
        {model.blurb}
      </p>

      <dl className="mt-8 space-y-3 text-[13px]">
        <SpecRow label="Format" value={model.format} />
        <SpecRow label="Throughput" value={model.throughput} />
        <SpecRow label="Power" value={model.power} />
        <SpecRow label="Footprint" value={`${model.footprintMm} mm`} />
        <SpecRow label="Weight" value={model.weightKg} />
      </dl>

      <ul className="mt-6 space-y-2">
        {model.highlights.map((h) => (
          <li
            key={h}
            className="text-[13px] text-fg-muted leading-snug flex items-start gap-2"
          >
            <span
              aria-hidden
              className="mt-1.5 w-1 h-1 rounded-full bg-royal-600 shrink-0"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-6 border-t border-border-default">
        <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
          Best for
        </div>
        <p className="text-fg-primary text-sm leading-snug">{model.bestFor}</p>
      </div>
    </div>
  )
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 pt-0.5 shrink-0">
        {label}
      </dt>
      <dd className="text-fg-primary text-[13px] leading-snug text-right">
        {value}
      </dd>
    </div>
  )
}

function CompareRow({
  label,
  values,
}: {
  label: string
  values: string[]
}) {
  return (
    <tr>
      <td className="px-6 py-4 align-top text-[11px] font-mono uppercase tracking-widest text-fg-muted/60 w-[200px]">
        {label}
      </td>
      {values.map((v, i) => (
        <td
          key={i}
          className="px-6 py-4 align-top text-fg-primary text-[13px] leading-snug"
        >
          {v}
        </td>
      ))}
    </tr>
  )
}

function FlagshipStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1.5">
        {label}
      </div>
      <div className="text-white text-sm font-medium leading-snug">{value}</div>
    </div>
  )
}

function FoilSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6">
      <dt className="text-[10px] font-mono uppercase tracking-widest text-white/40 pt-0.5 shrink-0">
        {label}
      </dt>
      <dd className="text-white text-sm font-medium leading-snug text-right">
        {value}
      </dd>
    </div>
  )
}
