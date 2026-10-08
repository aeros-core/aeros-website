const benefits = [
  { value: 'Wholesale', label: 'factory-direct pricing' },
  { value: 'Next-day', label: 'delivery in major cities' },
  { value: 'Zero', label: 'order minimums' },
]

const categories = ['Cups & Lids', 'Containers', 'Bags & Wraps', 'Gloves', 'Labels']

const products = [
  { name: '12 oz Paper Cups', unit: '1,000 / case', price: '$38' },
  { name: 'Kraft Take-Out Box', unit: '450 / case', price: '$54' },
  { name: 'Vented Dome Lids', unit: '1,000 / case', price: '$29' },
  { name: 'Nitrile Gloves', unit: '1,000 / case', price: '$61' },
  { name: 'Paper Straws', unit: '3,000 / case', price: '$22' },
  { name: '8 oz Deli Cups', unit: '500 / case', price: '$31' },
]

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="aeros-logo text-fg-primary text-2xl sm:text-3xl md:text-4xl mb-6">
          Aeros
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default mb-10">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-royal-600 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-royal-600" />
          </span>
          <span className="text-xs text-fg-muted font-mono uppercase tracking-wider">
            Now live in the US
          </span>
        </div>

        <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.25rem,9vw,6.5rem)]">
          All your packaging.<br />
          <span className="text-fg-muted/60">One shop.</span>
        </h1>

        <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
          Order every cup, container, and case your business runs on from a
          single marketplace — wholesale prices, fast delivery, no minimums.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://app.aeros-x.com"
            className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
          >
            Browse the marketplace
          </a>
          <a
            href="https://app.aeros-x.com"
            className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
          >
            Sign in
          </a>
        </div>

        <div className="mt-14 w-full max-w-md md:max-w-xl mx-auto flex items-stretch divide-x divide-border-default px-2 md:px-6 py-5 rounded-3xl border border-border-default bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)]">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="flex-1 min-w-0 flex flex-col items-center justify-center text-center px-2 md:px-5"
            >
              <div className="text-base md:text-2xl font-bold text-fg-primary leading-none">
                {b.value}
              </div>
              <div className="mt-2 text-[9px] md:text-[11px] font-mono uppercase tracking-wide md:tracking-widest text-fg-muted/60 leading-tight">
                {b.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto mt-24">
        <div className="border border-border-default rounded-3xl overflow-hidden bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-default bg-bg-subtle">
            <div className="w-2.5 h-2.5 rounded-full bg-border-default" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-default" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-default" />
            <div className="ml-3 text-[11px] text-fg-muted/60 font-mono">
              app.aeros-x.com/marketplace
            </div>
          </div>

          <div className="grid grid-cols-12 min-h-[320px]">
            <aside className="col-span-3 border-b border-border-default border-r border-border-default p-4 space-y-1 bg-white hidden md:block">
              <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                Categories
              </div>
              {categories.map((item, i) => (
                <div
                  key={item}
                  className={`px-3 py-2 rounded-md text-xs ${
                    i === 0 ? 'bg-ink-900 text-white' : 'text-fg-muted'
                  }`}
                >
                  {item}
                </div>
              ))}
            </aside>

            <div className="col-span-12 md:col-span-9 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2 border border-border-default rounded-full px-4 py-2 text-xs text-fg-muted/60">
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <circle cx="7" cy="7" r="5" />
                    <path d="M11 11l3 3" strokeLinecap="round" />
                  </svg>
                  Search 1,200+ packaging SKUs
                </div>
                <div className="hidden sm:block text-[11px] font-mono text-fg-muted/60 whitespace-nowrap">
                  Ship to · New York, NY
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {products.map((p) => (
                  <div key={p.name} className="border border-border-default rounded-2xl p-3">
                    <div className="aspect-[4/3] rounded-xl bg-bg-subtle border border-border-default mb-3" />
                    <div className="text-fg-primary text-xs font-medium leading-tight">
                      {p.name}
                    </div>
                    <div className="mt-0.5 text-[10px] text-fg-muted/60 font-mono">
                      {p.unit}
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-fg-primary font-bold text-sm">
                        {p.price}
                      </span>
                      <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-ink-900 text-white">
                        Add
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
