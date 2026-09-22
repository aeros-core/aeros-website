import { company, addressLines } from '@/lib/company'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Products', href: '/products' },
      { label: 'Resources', href: '/resources' },
      { label: 'Marketplace', href: '/#marketplace' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Hotels', href: '/hospitality' },
      { label: 'For Manufacturers', href: '#' },
      { label: 'For Retailers', href: '#' },
      { label: 'For Traders', href: '#' },
      { label: 'Enterprise', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Refund & Cancellation', href: '/refund-policy' },
      { label: 'Shipping Policy', href: '/shipping-policy' },
      { label: 'Support', href: '/support' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-default px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <div className="aeros-logo text-xl text-fg-primary">
              Aeros
            </div>
            <p className="mt-4 text-sm text-fg-muted max-w-xs leading-relaxed">
              One operating system for your entire business.
            </p>

            <address className="mt-6 not-italic text-xs text-fg-muted leading-relaxed">
              {addressLines.map((line, i) => (
                <div key={line} className={i === 0 ? 'font-semibold text-fg-primary' : undefined}>
                  {line}
                </div>
              ))}
            </address>

            <div className="mt-4 space-y-1 text-xs text-fg-muted">
              <div>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-fg-primary transition-colors"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="hover:text-fg-primary transition-colors"
                >
                  {company.phone}
                </a>
              </div>
              <div className="font-mono text-fg-muted/70 pt-1">GSTIN {company.gstin}</div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-fg-muted hover:text-fg-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-fg-muted/60 font-mono">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-fg-muted/60 font-mono">
            {company.brandAttribution}
          </p>
        </div>
      </div>
    </footer>
  )
}
