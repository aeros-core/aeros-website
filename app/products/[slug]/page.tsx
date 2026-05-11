import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import {
  APP_MARKETPLACE_URL,
  CATEGORY_GROUPS,
  categories,
  getCategoryBySlug,
  type CategoryDetailSection,
} from '@/lib/categories'

export function generateStaticParams() {
  return categories
    .filter((c) => c.detail)
    .map((c) => ({ slug: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category?.detail) {
    return { title: 'Not found — Aeros' }
  }
  const title = `${category.name} — Aeros`
  const description = category.detail.hero.subtitle
  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
  }
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category?.detail) notFound()

  const groupMeta = CATEGORY_GROUPS[category.group]
  const { hero, sections } = category.detail

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
              href={APP_MARKETPLACE_URL}
              className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Browse {category.name.toLowerCase()} on the marketplace
            </a>
            <Link
              href="/products"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Back to all products
            </Link>
          </div>

          <div className="mt-12 inline-flex items-center gap-2 text-[11px] font-mono text-fg-muted/60 uppercase tracking-widest">
            <span>{groupMeta.label}</span>
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
            Start sourcing<br />
            <span className="text-fg-muted/60">
              {category.name.toLowerCase()}.
            </span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Compare suppliers, see live pricing, and place an order — all on
            the Aeros marketplace.
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

function SectionRenderer({
  section,
  idx,
}: {
  section: CategoryDetailSection
  idx: number
}) {
  // Alternate white / subtle backgrounds across sections.
  const isSubtle = idx % 2 === 0
  const bg = isSubtle
    ? 'bg-bg-subtle border-t border-b border-border-default'
    : 'bg-white'

  return (
    <section className={`py-32 px-6 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        {section.kind === 'types' && <TypesContent section={section} />}
        {section.kind === 'measuring' && (
          <MeasuringContent section={section} />
        )}
        {section.kind === 'coatings' && (
          <CoatingsContent section={section} />
        )}
        {section.kind === 'printing' && (
          <PrintingContent section={section} />
        )}
        {section.kind === 'faq' && <FaqContent section={section} />}
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

function TypesContent({
  section,
}: {
  section: Extract<CategoryDetailSection, { kind: 'types' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ types"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {section.items.map((item) => (
          <div
            key={item.name}
            className="bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-fg-primary mb-3">
              {item.name}
            </h3>
            <p className="text-fg-muted text-sm leading-relaxed mb-4 flex-1">
              {item.whenToUse}
            </p>
            {item.sizes && (
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                  Common sizes
                </div>
                <div className="text-sm text-fg-primary">{item.sizes}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

function MeasuringContent({
  section,
}: {
  section: Extract<CategoryDetailSection, { kind: 'measuring' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ how to measure"
        heading={section.heading}
        intro={section.intro}
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          {section.bullets.map((b) => (
            <div
              key={b.label}
              className="bg-white p-6 rounded-3xl border border-border-default"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
                {b.label}
              </div>
              <p className="text-fg-primary text-[15px] leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
          {section.conversion && (
            <div className="bg-white p-6 rounded-3xl border border-border-default">
              <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
                Volume conversions
              </div>
              <p className="text-fg-primary text-[15px] leading-relaxed">
                {section.conversion}
              </p>
            </div>
          )}
        </div>

        <div className="bg-white p-10 rounded-3xl border border-border-default flex items-center justify-center">
          <CupDiagram />
        </div>
      </div>
    </>
  )
}

function CoatingsContent({
  section,
}: {
  section: Extract<CategoryDetailSection, { kind: 'coatings' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ coatings"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {section.items.map((item) => (
          <div
            key={item.name}
            className="bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full"
          >
            <div className="flex items-start justify-between gap-3 mb-5">
              <h3 className="text-xl font-bold text-fg-primary">
                {item.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none whitespace-nowrap bg-ink-50 text-ink-600"
                >
                  {t}
                </span>
              ))}
            </div>
            <dl className="space-y-4 flex-1">
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                  Pro
                </dt>
                <dd className="text-[15px] text-fg-primary leading-relaxed">
                  {item.pro}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                  Con
                </dt>
                <dd className="text-[15px] text-fg-primary leading-relaxed">
                  {item.con}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                  When to choose
                </dt>
                <dd className="text-[15px] text-fg-primary leading-relaxed">
                  {item.whenToChoose}
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </>
  )
}

function PrintingContent({
  section,
}: {
  section: Extract<CategoryDetailSection, { kind: 'printing' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ custom printing"
        heading={section.heading}
        intro={section.intro}
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {section.bullets.map((b) => (
          <div
            key={b.label}
            className="bg-white p-6 rounded-3xl border border-border-default"
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
              {b.label}
            </div>
            <p className="text-fg-primary text-[15px] leading-relaxed">
              {b.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={APP_MARKETPLACE_URL}
          className="inline-flex px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
        >
          Upload artwork on the marketplace
        </a>
      </div>
    </>
  )
}

function FaqContent({
  section,
}: {
  section: Extract<CategoryDetailSection, { kind: 'faq' }>
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

function CupDiagram() {
  return (
    <svg
      viewBox="0 0 220 240"
      className="w-full max-w-[240px] h-auto"
      role="img"
      aria-label="Paper cup measurements: top diameter, bottom diameter, and height."
    >
      {/* Cup outline */}
      <path
        d="M50 30 L170 30 L150 210 L70 210 Z"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="1.5"
      />
      {/* Rim */}
      <ellipse
        cx="110"
        cy="30"
        rx="60"
        ry="6"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="1.5"
      />
      {/* Base */}
      <ellipse
        cx="110"
        cy="210"
        rx="40"
        ry="4"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="1.5"
      />

      {/* Top diameter callout */}
      <line
        x1="50"
        y1="14"
        x2="170"
        y2="14"
        stroke="#737373"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <line x1="50" y1="10" x2="50" y2="22" stroke="#737373" strokeWidth="1" />
      <line
        x1="170"
        y1="10"
        x2="170"
        y2="22"
        stroke="#737373"
        strokeWidth="1"
      />
      <text
        x="110"
        y="9"
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fill="#0A0A0A"
      >
        TOP Ø
      </text>

      {/* Bottom diameter callout */}
      <line
        x1="70"
        y1="228"
        x2="150"
        y2="228"
        stroke="#737373"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <line
        x1="70"
        y1="222"
        x2="70"
        y2="234"
        stroke="#737373"
        strokeWidth="1"
      />
      <line
        x1="150"
        y1="222"
        x2="150"
        y2="234"
        stroke="#737373"
        strokeWidth="1"
      />
      <text
        x="110"
        y="240"
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fill="#0A0A0A"
      >
        BOTTOM Ø
      </text>

      {/* Height callout */}
      <line
        x1="195"
        y1="30"
        x2="195"
        y2="210"
        stroke="#737373"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <line
        x1="189"
        y1="30"
        x2="201"
        y2="30"
        stroke="#737373"
        strokeWidth="1"
      />
      <line
        x1="189"
        y1="210"
        x2="201"
        y2="210"
        stroke="#737373"
        strokeWidth="1"
      />
      <text
        x="207"
        y="124"
        fontSize="10"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fill="#0A0A0A"
        transform="rotate(90 207 124)"
      >
        HEIGHT
      </text>
    </svg>
  )
}
