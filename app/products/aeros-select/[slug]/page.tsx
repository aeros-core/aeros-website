import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import {
  aerosSelectProducts,
  getAerosSelectProductBySlug,
  type AerosSelectSection,
} from '@/lib/aeros-select'

export function generateStaticParams() {
  return aerosSelectProducts.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getAerosSelectProductBySlug(slug)
  if (!product) {
    return { title: 'Not found — Aeros' }
  }
  const title = `${product.name} — Aeros Select`
  const description = product.hero.subtitle
  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
  }
}

export default async function AerosSelectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getAerosSelectProductBySlug(slug)
  if (!product) notFound()

  const { hero, highlights, sections, orderUrl, orderCtaLabel } = product

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
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.75rem)]">
            {hero.title}
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={orderUrl}
              className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              {orderCtaLabel}
            </a>
            <Link
              href="/products/aeros-select"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Back to Aeros Select
            </Link>
          </div>

          <div className="mt-12 inline-flex items-center gap-2 text-[11px] font-mono text-fg-muted/60 uppercase tracking-widest">
            <span>Aeros Select</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap bg-royal-50 text-royal-800">
              Stocked & shipped by Aeros
            </span>
          </div>

          {hero.image && (
            <div className="mt-20 mx-auto max-w-4xl">
              <div className="rounded-3xl border border-border-default bg-bg-subtle overflow-hidden aspect-[16/10] sm:aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero.image.src}
                  alt={hero.image.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Highlights strip */}
      <section className="py-16 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h) => (
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

      {sections.map((section, idx) => (
        <SectionRenderer
          key={`${section.kind}-${idx}`}
          section={section}
          idx={idx}
        />
      ))}

      {/* Final CTA */}
      <section className="py-40 px-6 bg-white border-t border-border-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            Order on<br />
            <span className="text-fg-muted/60">the Aeros app.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Place an order in seconds — pricing, stock, and delivery dates are
            live.
          </p>
          <div className="mt-12 flex items-center justify-center">
            <a
              href={orderUrl}
              className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              {orderCtaLabel}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function SectionRenderer({
  section,
  idx,
}: {
  section: AerosSelectSection
  idx: number
}) {
  const isSubtle = idx % 2 === 1
  const bg = isSubtle
    ? 'bg-bg-subtle border-t border-b border-border-default'
    : 'bg-white'

  return (
    <section className={`py-32 px-6 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        {section.kind === 'specs' && <SpecsContent section={section} />}
        {section.kind === 'features' && <FeaturesContent section={section} />}
        {section.kind === 'use-cases' && (
          <UseCasesContent section={section} />
        )}
        {section.kind === 'variants' && <VariantsContent section={section} />}
        {section.kind === 'faq' && <FaqContent section={section} />}
        {section.kind === 'customers' && (
          <CustomersContent section={section} />
        )}
        {section.kind === 'stats' && <StatsContent section={section} />}
        {section.kind === 'comparison' && (
          <ComparisonContent section={section} />
        )}
        {section.kind === 'video' && <VideoContent section={section} />}
      </div>
    </section>
  )
}

function SectionHeader({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string
  heading: string
  intro?: string
}) {
  return (
    <div className="max-w-2xl mb-16">
      <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
        {heading}
      </h2>
      {intro && <p className="mt-5 text-fg-muted text-lg">{intro}</p>}
    </div>
  )
}

function VariantsContent({
  section,
}: {
  section: Extract<AerosSelectSection, { kind: 'variants' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ variants"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {section.items.map((item) => {
          const content = (
            <>
              <h3 className="text-xl font-bold text-fg-primary mb-4">
                {item.name}
              </h3>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none whitespace-nowrap bg-ink-50 text-ink-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-fg-muted text-sm leading-relaxed flex-1">
                {item.body}
              </p>
              {item.href && (
                <span className="mt-6 text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  See full details <span aria-hidden>→</span>
                </span>
              )}
            </>
          )
          return item.href ? (
            <Link
              key={item.name}
              href={item.href}
              className="group bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full hover:bg-bg-subtle transition-colors"
            >
              {content}
            </Link>
          ) : (
            <div
              key={item.name}
              className="bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full"
            >
              {content}
            </div>
          )
        })}
      </div>
    </>
  )
}

function SpecsContent({
  section,
}: {
  section: Extract<AerosSelectSection, { kind: 'specs' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ specifications"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="bg-white rounded-3xl border border-border-default overflow-hidden">
        <dl className="divide-y divide-border-default">
          {section.items.map((item) => (
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
    </>
  )
}

function FeaturesContent({
  section,
}: {
  section: Extract<AerosSelectSection, { kind: 'features' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ features"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {section.items.map((item) => (
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
    </>
  )
}

function UseCasesContent({
  section,
}: {
  section: Extract<AerosSelectSection, { kind: 'use-cases' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ use cases"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {section.items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-3xl border border-border-default overflow-hidden flex flex-col"
          >
            {item.image && (
              <div className="aspect-[16/10] bg-bg-subtle overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-8 flex-1">
              <h3 className="text-lg font-bold text-fg-primary mb-3">
                {item.name}
              </h3>
              <p className="text-fg-muted text-[15px] leading-relaxed">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function ComparisonContent({
  section,
}: {
  section: Extract<AerosSelectSection, { kind: 'comparison' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ versions compared"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="bg-white rounded-3xl border border-border-default overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border-default">
                <th className="px-6 sm:px-8 py-5 text-[11px] font-mono uppercase tracking-widest text-fg-muted/60 font-medium w-1/3">
                  Feature
                </th>
                {section.columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 sm:px-8 py-5 text-fg-primary text-base font-bold tracking-tight"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              {section.rows.map((row) => (
                <tr key={row.label}>
                  <td className="px-6 sm:px-8 py-4 text-[11px] font-mono uppercase tracking-widest text-fg-muted/60 align-top">
                    {row.label}
                  </td>
                  {row.values.map((value, i) => (
                    <td
                      key={`${row.label}-${i}`}
                      className="px-6 sm:px-8 py-4 text-fg-primary text-[15px] leading-relaxed"
                    >
                      {value === '—' || value === '' ? (
                        <span className="text-fg-muted/40">—</span>
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

function StatsContent({
  section,
}: {
  section: Extract<AerosSelectSection, { kind: 'stats' }>
}) {
  return (
    <>
      {(section.heading || section.intro) && (
        <SectionHeader
          eyebrow="/ by the numbers"
          heading={section.heading ?? 'By the numbers.'}
          intro={section.intro}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {section.items.map((item) => (
          <div
            key={item.label}
            className="bg-white p-10 rounded-3xl border border-border-default flex flex-col items-start"
          >
            <div className="text-fg-primary font-extrabold tracking-tight leading-none text-[clamp(3rem,7vw,5rem)]">
              {item.value}
            </div>
            <div className="mt-6 text-[11px] font-mono uppercase tracking-widest text-fg-muted/70">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function CustomersContent({
  section,
}: {
  section: Extract<AerosSelectSection, { kind: 'customers' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ trusted by"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {section.items.map((item) => (
          <div
            key={item.name}
            className="bg-white p-8 rounded-3xl border border-border-default flex flex-col items-center justify-center text-center min-h-[140px]"
          >
            <div className="text-fg-primary text-xl md:text-2xl font-bold tracking-tight leading-none">
              {item.name}
            </div>
            {item.note && (
              <div className="mt-3 text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                {item.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

function VideoContent({
  section,
}: {
  section: Extract<AerosSelectSection, { kind: 'video' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ in motion"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="bg-white rounded-3xl border border-border-default overflow-hidden">
        <video
          src={section.src}
          poster={section.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-auto block"
        />
      </div>
    </>
  )
}

function FaqContent({
  section,
}: {
  section: Extract<AerosSelectSection, { kind: 'faq' }>
}) {
  return (
    <>
      <SectionHeader eyebrow="/ faq" heading={section.heading} />
      <div className="grid sm:grid-cols-2 gap-4">
        {section.items.map((item) => (
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
    </>
  )
}
