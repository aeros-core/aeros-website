import type { Metadata } from 'next'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import PartnerApplicationForm from '@/components/partners/PartnerApplicationForm'

export const metadata: Metadata = {
  title: 'Become a US Partner — Aeros',
  description:
    'Apply to partner with Aeros in the United States. Distributors, manufacturers, importers, and small buyers — tell us about your business and our team will be in touch.',
  openGraph: {
    title: 'Become a US Partner — Aeros',
    description:
      'Apply to partner with Aeros in the United States. Distributors, manufacturers, importers, and small buyers — tell us about your business and our team will be in touch.',
    type: 'website',
  },
}

const highlights = [
  {
    label: 'For distributors',
    body: 'Buy direct from the source. Container-level pricing on paper, packaging, and disposables — landed at your dock.',
  },
  {
    label: 'For new businesses',
    body: 'Launch with stocked inventory and no MOQs. Operator-friendly pricing while you ramp your accounts.',
  },
  {
    label: 'For small buyers',
    body: 'Skip the brokers. Buy by the pallet on the marketplace with transparent pricing and live availability.',
  },
]

export default function PartnersUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default mb-10">
            <span className="w-1 h-1 rounded-full bg-royal-600" />
            <span className="text-xs text-fg-muted font-mono uppercase tracking-wider">
              United States · Partner program
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.5rem)]">
            Partner with<br />Aeros in the US.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            Distributors, manufacturers, importers, and small buyers — tell us
            about your business. We&apos;ll match you with the right team and
            terms.
          </p>
        </div>

        <div className="relative mt-20 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-border-default bg-white grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-default overflow-hidden">
            {highlights.map((h) => (
              <div key={h.label} className="p-6 sm:p-8">
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-3">
                  {h.label}
                </div>
                <p className="text-sm text-fg-primary leading-relaxed">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 bg-bg-subtle border-t border-border-default border-b border-border-default">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              Application
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-fg-primary leading-tight">
              Tell us about your business.
            </h2>
            <p className="mt-4 text-fg-muted max-w-lg mx-auto">
              About 5 minutes. Every application is reviewed by a human on the
              partnerships team.
            </p>
          </div>

          <PartnerApplicationForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
