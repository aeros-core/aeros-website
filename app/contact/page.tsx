import type { Metadata } from 'next'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { company, addressLines, addressOneLine } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Contact Us — Aeros',
  description: `Contact ${company.legalName} (trading as ${company.brand}) — registered office at ${addressOneLine}. Email ${company.email}, phone ${company.phone}.`,
}

const channels = [
  {
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
    note: `Orders, artwork and support · ${company.salesEmail} for quotations`,
  },
  {
    label: 'Phone',
    value: company.phone,
    href: `tel:${company.phoneHref}`,
    note: company.businessHours,
  },
  {
    label: 'Marketplace',
    value: 'app.aeros-x.com',
    href: company.marketplace,
    note: 'Browse products, pricing and place orders',
  },
]

const enquiries = [
  {
    heading: 'Sales and quotations',
    body: `Product specifications, minimum order quantities, samples, pricing for volume orders, and quotations for custom-printed packaging. Write to ${company.salesEmail}.`,
  },
  {
    heading: 'Existing orders',
    body: `Order status, artwork proofs and approvals, dispatch dates, tracking references and delivery coordination. Write to ${company.email} and quote your order or invoice number so we can pull the job up quickly. Common questions are already answered on our Support page.`,
  },
  {
    heading: 'Returns, claims and refunds',
    body: 'Damaged, short or incorrect deliveries, and refund queries. Send photographs of the goods, the outer packaging and the carrier label with your order number. The process is set out in our Refund & Cancellation Policy.',
  },
  {
    heading: 'Billing and tax documents',
    body: 'Tax invoices, GST details, credit notes and payment confirmations. Invoices are issued by the registered entity named below.',
  },
  {
    heading: 'Grievances',
    body: 'If a query has not been resolved to your satisfaction, reply on the same email thread and ask for it to be escalated to the grievance officer. We aim to respond to escalations within 7 business days.',
  },
]

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-bg-subtle border-b border-border-default">
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg-primary tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-fg-muted text-lg leading-relaxed">
            Talk to us about packaging specifications, an order in progress, or anything that needs
            putting right. We read every message that reaches {company.email}.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="block p-5 rounded-2xl border border-border-default bg-bg-subtle hover:border-fg-muted/40 transition-colors"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-3">
                  {c.label}
                </div>
                <div className="text-[15px] font-semibold text-fg-primary mb-2 break-words">
                  {c.value}
                </div>
                <div className="text-xs text-fg-muted leading-relaxed">{c.note}</div>
              </a>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-border-default">
            <h2 className="text-xl font-bold text-fg-primary mb-6 pb-3 border-b border-border-default">
              Registered Office
            </h2>

            <address className="not-italic text-[15px] leading-relaxed text-fg-primary">
              {addressLines.map((line, i) => (
                <div key={line} className={i === 0 ? 'font-semibold' : 'text-fg-muted'}>
                  {line}
                </div>
              ))}
            </address>

            <dl className="mt-6 pt-6 border-t border-border-default grid sm:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                  GSTIN
                </dt>
                <dd className="text-[15px] text-fg-primary font-mono">{company.gstin}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                  PAN
                </dt>
                <dd className="text-[15px] text-fg-primary font-mono">{company.pan}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                  Email
                </dt>
                <dd className="text-[15px]">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-fg-primary underline hover:text-fg-muted transition-colors"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-1">
                  Phone
                </dt>
                <dd className="text-[15px]">
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="text-fg-primary underline hover:text-fg-muted transition-colors"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <p className="mt-6 pt-6 border-t border-border-default text-sm text-fg-muted leading-relaxed">
              {company.brandAttribution} All orders, invoices and tax documents are issued by{' '}
              {company.legalName}.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-bold text-fg-primary mb-6 pb-3 border-b border-border-default">
              What to write to us about
            </h2>
            <div className="space-y-6">
              {enquiries.map((e) => (
                <div key={e.heading}>
                  <h3 className="text-[15px] font-semibold text-fg-primary mb-2">{e.heading}</h3>
                  <p className="text-fg-muted text-[15px] leading-relaxed">{e.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border-default">
            <p className="text-fg-muted text-sm leading-relaxed">
              Business hours are {company.businessHours}. Messages received outside these hours are
              answered on the next business day.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
