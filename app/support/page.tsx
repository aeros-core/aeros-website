import type { Metadata } from 'next'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Support — Aeros',
  description:
    'Get help with your Aeros account, orders, billing, and the marketplace. Contact support, browse FAQs, and find answers fast.',
}

const channels = [
  {
    title: 'Email support',
    body: 'Questions about your account, an order, or how something works. We reply within one business day.',
    action: 'support@aeros-x.com',
    href: 'mailto:support@aeros-x.com',
  },
  {
    title: 'Orders & delivery',
    body: 'Track a shipment, change a pending order, or start a return — all from your dashboard.',
    action: 'Open the marketplace',
    href: 'https://app.aeros-x.com',
  },
  {
    title: 'Sales & wholesale',
    body: 'Bulk pricing, recurring orders, or sourcing something you don’t see in the catalog.',
    action: 'sales@aeros-x.com',
    href: 'mailto:sales@aeros-x.com',
  },
]

const sections = [
  {
    title: '1. Orders & Delivery',
    content: [
      {
        heading: 'Placing an order',
        body: 'Browse the marketplace, add cases to your cart, and check out with a card or approved net terms. Most items ship from a regional warehouse, so availability and delivery dates are shown per item before you order.',
      },
      {
        heading: 'Tracking a shipment',
        body: 'Every order has a live status on your dashboard under Orders. You’ll get email updates when your order is confirmed, shipped, and delivered, along with a carrier tracking link.',
      },
      {
        heading: 'Changing or canceling an order',
        body: 'You can edit or cancel an order from the Orders page until it enters fulfillment. Once an order has shipped it can no longer be changed, but you can start a return when it arrives.',
      },
      {
        heading: 'Delivery times',
        body: 'In-stock items in major metro areas typically arrive next business day. Estimated delivery is shown at checkout based on your shipping address and the items in your cart.',
      },
    ],
  },
  {
    title: '2. Returns & Refunds',
    content: [
      {
        heading: 'Return policy',
        body: 'Unused, unopened cases can be returned within 30 days of delivery. Start a return from the Orders page and we’ll email you a prepaid label. Custom-printed and made-to-order items are non-returnable unless they arrive damaged or defective.',
      },
      {
        heading: 'Damaged or incorrect items',
        body: 'If an order arrives damaged or isn’t what you ordered, contact us within 7 days with a photo and your order number. We’ll send a replacement or issue a full refund — no need to ship the item back in most cases.',
      },
      {
        heading: 'Refund timing',
        body: 'Approved refunds are issued to your original payment method within 5–10 business days of us receiving the return or confirming a damage claim.',
      },
    ],
  },
  {
    title: '3. Billing & Payments',
    content: [
      {
        heading: 'Payment methods',
        body: 'We accept all major credit and debit cards. Qualified businesses can apply for net payment terms — reach out to sales@aeros-x.com to get started.',
      },
      {
        heading: 'Invoices & receipts',
        body: 'A receipt is emailed for every order, and all invoices are available to download from the Billing section of your dashboard at any time.',
      },
      {
        heading: 'Tax exemption',
        body: 'If your business is tax-exempt, upload your resale or exemption certificate from Billing → Tax settings and we’ll apply it to future orders.',
      },
    ],
  },
  {
    title: '4. Account & Access',
    content: [
      {
        heading: 'Managing your team',
        body: 'Account owners can invite teammates and set roles from Settings → Team, so buyers, approvers, and finance can each work with the access they need.',
      },
      {
        heading: 'Resetting your password',
        body: 'Use the “Forgot password” link on the sign-in page to reset it by email. If you can’t access your email or have lost access entirely, contact support@aeros-x.com and we’ll help you recover the account.',
      },
      {
        heading: 'Updating business details',
        body: 'Update your company name, shipping addresses, and billing information anytime from Settings. Changes apply to new orders going forward.',
      },
    ],
  },
  {
    title: '5. Selling on Aeros',
    content: [
      {
        heading: 'Becoming a supplier',
        body: 'Aeros is a curated marketplace for packaging and foodservice suppliers. If you manufacture or distribute and want to list your catalog, email sales@aeros-x.com with a bit about your business and product range.',
      },
      {
        heading: 'Supplier support',
        body: 'Approved suppliers get a dedicated dashboard to manage listings, pricing, inventory, and orders. Our partnerships team helps with onboarding, catalog setup, and your first fulfillments.',
      },
    ],
  },
]

export default function Support() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-bg-subtle border-b border-border-default">
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Help &amp; Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg-primary tracking-tight mb-4">
            How can we help?
          </h1>
          <p className="text-fg-muted text-lg leading-relaxed mb-6">
            Answers to common questions about orders, returns, billing, and your
            account — plus the fastest ways to reach a human when you need one.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-fg-muted/60 font-mono">
            <span>support@aeros-x.com</span>
            <span>Mon–Fri · 9 AM – 6 PM ET</span>
            <span>Replies within 1 business day</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {channels.map((c) => (
              <div
                key={c.title}
                className="flex flex-col p-5 rounded-2xl border border-border-default bg-white"
              >
                <h2 className="text-[15px] font-semibold text-fg-primary mb-2">
                  {c.title}
                </h2>
                <p className="text-fg-muted text-[13px] leading-relaxed flex-1">
                  {c.body}
                </p>
                <a
                  href={c.href}
                  className="mt-4 text-[13px] font-medium text-fg-primary underline underline-offset-4 hover:text-royal-600 transition-colors"
                >
                  {c.action}
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-fg-primary mb-6 pb-3 border-b border-border-default">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((item) => (
                    <div key={item.heading}>
                      <h3 className="text-[15px] font-semibold text-fg-primary mb-2">
                        {item.heading}
                      </h3>
                      <p className="text-fg-muted text-[15px] leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border-default">
            <p className="text-fg-muted text-sm leading-relaxed">
              Still need a hand? Email{' '}
              <a
                href="mailto:support@aeros-x.com"
                className="text-fg-primary underline hover:text-royal-600 transition-colors"
              >
                support@aeros-x.com
              </a>{' '}
              and we’ll get back to you within one business day. For anything
              involving your data or privacy, see our{' '}
              <a
                href="/privacy"
                className="text-fg-primary underline hover:text-royal-600 transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
