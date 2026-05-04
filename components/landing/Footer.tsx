const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Marketplace', href: '/#marketplace' },
      { label: 'Pricing', href: '/#pricing' },
    ],
  },
  {
    title: 'Solutions',
    links: [
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
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#' },
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
              Aeros<span className="text-royal-600">.</span>
            </div>
            <p className="mt-4 text-sm text-fg-muted max-w-xs leading-relaxed">
              One operating system for your entire business.
            </p>
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

        <div className="mt-20 pt-8 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-muted/60 font-mono">
            © {new Date().getFullYear()} Aeros. All rights reserved.
          </p>
          <p className="text-xs text-fg-muted/60 font-mono">
            Made for operators.
          </p>
        </div>
      </div>
    </footer>
  )
}
