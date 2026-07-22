import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import {
  BEYOND_SUPPLY,
  BRAND_PROOF,
  CATALOGUE_URL,
  CATEGORIES,
  CLIENT_SEGMENTS,
  COMMERCIAL_TERMS,
  CONTACT_ROUTES,
  CONTACT_URL,
  FAQS,
  FOUNDER,
  HOTEL_CLIENTS,
  KITCHEN_SPECS,
  LEGAL_DETAILS,
  OPERATING_MODEL,
  PHONE_DISPLAY,
  SAMPLES_URL,
  STANDARDS,
  SUPPLY_METRICS,
  VENDOR_URL,
  WHATSAPP_URL,
} from '@/lib/hospitality'

export const metadata: Metadata = {
  title: 'Five-star supply across India — Aeros',
  description:
    'How Aeros supplies in-room dining containers, café cups, guest amenities, and kitchen consumables to five-star hotels across India — locked specs, audit-ready documentation, and nationwide delivery.',
  openGraph: {
    title: 'Five-star supply across India — Aeros',
    description:
      'How Aeros supplies in-room dining containers, café cups, guest amenities, and kitchen consumables to five-star hotels across India.',
    type: 'website',
  },
}

export default function HospitalityPage() {
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
              Hospitality · India
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.75rem)]">
            We supply<br />
            five-star India.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            Room service, the café, the guest bath, the kitchen line — made at
            our own Mumbai plant and delivered to every property on the account
            in 7 to 10 days.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={SAMPLES_URL}
              className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Request a sample kit
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              WhatsApp {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Proof strip */}
        <div className="relative mt-20 max-w-3xl mx-auto">
          <div className="rounded-3xl border border-border-default bg-white grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-default overflow-hidden">
            {SUPPLY_METRICS.map((m) => (
              <div key={m.label} className="p-8 sm:text-center">
                <div className="text-3xl md:text-4xl font-bold text-fg-primary leading-none mb-2 tracking-tight">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we supply */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              Who we supply
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Names on the loading dock.
            </h2>
          </div>

          {HOTEL_CLIENTS.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {HOTEL_CLIENTS.map((c) => (
                <div
                  key={c.name}
                  className="bg-white p-8 rounded-3xl border border-border-default flex flex-col"
                >
                  {c.logo ? (
                    <div className="relative h-10 mb-4">
                      <Image
                        src={c.logo}
                        alt={c.name}
                        fill
                        sizes="200px"
                        className="object-contain object-left"
                      />
                    </div>
                  ) : null}
                  <div className="text-lg font-bold text-fg-primary leading-tight mb-1">
                    {c.name}
                  </div>
                  <div className="text-sm text-fg-muted">{c.detail}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-10 md:p-14 rounded-3xl border border-border-default max-w-2xl mx-auto text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {CLIENT_SEGMENTS.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-border-default text-fg-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-fg-muted leading-relaxed">
                We have supplied five-star India since 2021 — luxury hotel
                groups, airline and institutional catering, and international
                chains. Our clients&apos; names are theirs to share, so we
                don&apos;t publish them. References are available on request.
              </p>
              <a
                href={CONTACT_URL}
                className="mt-8 inline-flex px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
              >
                Ask for references
              </a>
            </div>
          )}
        </div>
      </section>

      {/* What we supply */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              What we supply
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Every floor of the property.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {CATEGORIES.map((c) => (
              <div
                key={c.eyebrow}
                className={`bg-bg-subtle rounded-3xl border border-border-default flex flex-col overflow-hidden${
                  c.wide ? ' md:col-span-2' : ''
                }`}
              >
                <div
                  className={`relative bg-white border-b border-border-default ${
                    c.wide ? 'aspect-[16/9]' : 'aspect-[3/2]'
                  }`}
                >
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes={
                      c.wide
                        ? '(min-width: 768px) 100vw, 100vw'
                        : '(min-width: 768px) 50vw, 100vw'
                    }
                    className="object-cover"
                  />
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
                    {c.eyebrow}
                  </div>
                  <h3 className="text-2xl font-bold text-fg-primary leading-tight mb-4">
                    {c.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed flex-1">
                    {c.body}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border-default text-fg-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plain stock → printed to spec */}
      <section className="py-32 px-6 bg-white border-t border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              Plain to printed
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Stock on the shelf, or your brand on it.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {BRAND_PROOF.map((img) => (
              <figure
                key={img.src}
                className="bg-white rounded-3xl border border-border-default overflow-hidden flex flex-col"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-auto"
                />
                <figcaption className="p-8 border-t border-border-default">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
                    {img.eyebrow}
                  </div>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {img.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* For the kitchen */}
      <section className="py-32 px-6 bg-white border-t border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              For the kitchen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              What the chef will ask.
            </h2>
            <p className="mt-6 text-fg-muted text-lg max-w-xl mx-auto leading-relaxed">
              A container the kitchen does not trust never gets used, whatever
              the rate. Capacity in ml, temperature ratings, and full specs sit
              on every product listing in the app.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {KITCHEN_SPECS.map((s) => (
              <div
                key={s.title}
                className="bg-bg-subtle p-10 rounded-3xl border border-border-default flex flex-col"
              >
                <h3 className="text-xl font-bold text-fg-primary leading-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed flex-1">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={CATALOGUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-muted hover:text-fg-primary transition-colors font-mono"
            >
              See capacities and specs on the app →
            </a>
          </div>
        </div>
      </section>

      {/* Samples & talk to a human */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              Before you commit
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Hold it in your hand first.
            </h2>
            <p className="mt-6 text-fg-muted text-lg max-w-xl mx-auto leading-relaxed">
              No purchase manager signs a rate contract off a website. Tell us
              what you use today and we will send a sample kit to the property.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SAMPLES_URL}
                className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
              >
                Request a sample kit
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-border-default bg-white text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
              >
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {CONTACT_ROUTES.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target={r.href.startsWith('http') ? '_blank' : undefined}
                rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white p-8 rounded-3xl border border-border-default hover:bg-bg-subtle transition-colors flex flex-col"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-3">
                  {r.label}
                </div>
                <div className="text-lg font-bold text-fg-primary leading-tight mb-2 break-words">
                  {r.value}
                </div>
                <p className="text-sm text-fg-muted leading-relaxed">{r.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How the supply runs */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              The operating model
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              How the supply actually runs.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OPERATING_MODEL.map((s) => (
              <div
                key={s.step}
                className="bg-white p-10 rounded-3xl border border-border-default flex flex-col"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-fg-primary leading-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed flex-1">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the account is contracted */}
      <section className="py-32 px-6 bg-white border-t border-border-default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              Commercials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              How the account is contracted.
            </h2>
          </div>

          <div className="rounded-3xl border border-border-default bg-bg-subtle divide-y divide-border-default">
            {COMMERCIAL_TERMS.map((t) => (
              <div
                key={t.label}
                className="px-8 py-7 md:px-12 grid grid-cols-1 md:grid-cols-[190px_220px_1fr] gap-2 md:gap-8 items-baseline"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                  {t.label}
                </div>
                <div className="text-fg-primary font-medium">{t.value}</div>
                <p className="text-sm text-fg-muted leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-border-default bg-white p-10 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-fg-primary leading-tight mb-3">
                Send us your vendor form.
              </h3>
              <p className="text-fg-muted leading-relaxed max-w-xl mx-auto">
                Every group has its own registration format. Send yours and we
                will return it completed, with our GST certificate, PAN, MSME
                registration, and cancelled cheque attached.
              </p>
            </div>

            <dl className="mt-10 border-t border-border-default">
              {LEGAL_DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="py-4 border-b border-border-default grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1 sm:gap-6 items-baseline"
                >
                  <dt className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                    {d.label}
                  </dt>
                  <dd className="text-sm text-fg-primary leading-relaxed">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 text-center">
              <a
                href={VENDOR_URL}
                className="inline-flex px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
              >
                Start vendor registration
              </a>
              <p className="mt-6 text-xs text-fg-muted/60 max-w-md mx-auto leading-relaxed">
                Bank details are shared on the completed vendor form, not
                published here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why five-star is different */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              The standard
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              A five-star account is a different problem.
            </h2>
          </div>

          <div className="rounded-3xl border border-border-default bg-bg-subtle divide-y divide-border-default">
            {STANDARDS.map((s) => (
              <div
                key={s.title}
                className="px-8 py-8 md:px-12 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-3 md:gap-10 items-baseline"
              >
                <h3 className="text-lg font-bold text-fg-primary leading-tight">
                  {s.title}
                </h3>
                <p className="text-fg-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond supply */}
      <section className="py-32 px-6 bg-bg-subtle border-t border-b border-border-default">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              Beyond supply
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              We do more than fill the order.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {BEYOND_SUPPLY.map((s) => (
              <div
                key={s.eyebrow}
                className="bg-white p-10 rounded-3xl border border-border-default flex flex-col"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
                  {s.eyebrow}
                </div>
                <h3 className="text-2xl font-bold text-fg-primary leading-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed flex-1">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* Founder direct line */}
          <div className="mt-4 bg-white rounded-3xl border border-border-default p-10 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
                Direct line
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-fg-primary leading-tight mb-3">
                Talking to more than one property?
              </h3>
              <p className="text-fg-muted leading-relaxed max-w-lg">
                For a packaging consultation, a group rate contract, or supply
                across multiple properties, skip the queue.{' '}
                {FOUNDER.name}, {FOUNDER.role.toLowerCase()}, takes these
                directly.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:min-w-[260px]">
              <a
                href={FOUNDER.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors text-center"
              >
                WhatsApp {FOUNDER.phoneDisplay}
              </a>
              <a
                href={`tel:${FOUNDER.phoneTel}`}
                className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors text-center"
              >
                Call {FOUNDER.phoneDisplay}
              </a>
              <a
                href={FOUNDER.mailto}
                className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors text-center break-words"
              >
                {FOUNDER.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              What buyers ask us first.
            </h2>
          </div>

          <div className="rounded-3xl border border-border-default bg-bg-subtle divide-y divide-border-default">
            {FAQS.map((f) => (
              <details key={f.q} className="group px-8 py-6 md:px-10">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="text-lg font-medium text-fg-primary leading-snug">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-fg-muted/60 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-fg-muted leading-relaxed max-w-2xl">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-white border-t border-border-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            Supply that holds<br />
            <span className="text-fg-muted/60">the standard.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Send us your property standard and we&apos;ll come back with a
            locked spec, a rate, and a delivery plan for every location on the
            account.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CONTACT_URL}
              className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              Talk to the hospitality team
            </a>
            <Link
              href="/products"
              className="px-8 py-4 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Browse the catalogue
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
