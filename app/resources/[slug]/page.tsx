import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import {
  RESOURCE_CATEGORIES,
  guides,
  getGuideBySlug,
  type GuideSection,
} from '@/lib/resources'

export function generateStaticParams() {
  return guides
    .filter((g) => g.published && g.sections)
    .map((g) => ({ slug: g.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide?.hero) {
    return { title: 'Not found — Aeros' }
  }
  const title = `${guide.title} — Aeros`
  const description = guide.excerpt
  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
  }
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide?.hero || !guide.sections) notFound()

  const categoryMeta = RESOURCE_CATEGORIES[guide.category]
  const { hero, sections } = guide

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
            <Link
              href="/resources"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              ← All resources
            </Link>
          </div>

          <div className="mt-12 inline-flex items-center gap-3 text-[11px] font-mono text-fg-muted/60 uppercase tracking-widest">
            <span>{categoryMeta.label}</span>
            <span aria-hidden>·</span>
            <span>{guide.readTime}</span>
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
            Now go<br />
            <span className="text-fg-muted/60">source it.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Compare suppliers, see live pricing, and place an order — all on
            the Aeros marketplace.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products"
              className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Browse the catalog
            </Link>
            <Link
              href="/resources"
              className="px-8 py-4 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              More guides
            </Link>
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
  section: GuideSection
  idx: number
}) {
  const isSubtle = idx % 2 === 0
  const bg = isSubtle
    ? 'bg-bg-subtle border-t border-b border-border-default'
    : 'bg-white'

  return (
    <section className={`py-32 px-6 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        {section.kind === 'prose' && <ProseContent section={section} />}
        {section.kind === 'types' && <TypesContent section={section} />}
        {section.kind === 'tips' && <TipsContent section={section} />}
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

function ProseContent({
  section,
}: {
  section: Extract<GuideSection, { kind: 'prose' }>
}) {
  return (
    <>
      <SectionHeader eyebrow="/ overview" heading={section.heading} />
      <div className="max-w-2xl space-y-6">
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-fg-primary text-lg leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </>
  )
}

function TypesContent({
  section,
}: {
  section: Extract<GuideSection, { kind: 'types' }>
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
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none whitespace-nowrap bg-ink-50 text-ink-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <p className="text-fg-muted text-sm leading-relaxed mb-5 flex-1">
              {item.description}
            </p>
            <div className="space-y-3">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                  Best for
                </div>
                <div className="text-sm text-fg-primary leading-relaxed">
                  {item.bestFor}
                </div>
              </div>
              {item.heatSafe && (
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                    Heat-safe
                  </div>
                  <div className="text-sm text-fg-primary leading-relaxed">
                    {item.heatSafe}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function TipsContent({
  section,
}: {
  section: Extract<GuideSection, { kind: 'tips' }>
}) {
  return (
    <>
      <SectionHeader
        eyebrow="/ how to choose"
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
    </>
  )
}

function FaqContent({
  section,
}: {
  section: Extract<GuideSection, { kind: 'faq' }>
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
