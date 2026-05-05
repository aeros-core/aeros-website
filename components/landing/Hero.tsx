'use client'

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="aeros-logo text-fg-primary text-5xl sm:text-6xl md:text-7xl mb-10">
          aeros
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default mb-10">
          <span className="w-1 h-1 rounded-full bg-royal-600" />
          <span className="text-xs text-fg-muted font-mono uppercase tracking-wider">
            Now live
          </span>
        </div>

        <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(3.5rem,11vw,8rem)]">
          Run<br />everything.
        </h1>

        <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
          The B2B marketplace built for India's real economy. Source,
          sell, and scale — all in one place.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
          >
            Start for free
          </a>
          <a
            href="#"
            className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto mt-24">
        <div className="border border-border-default rounded-3xl overflow-hidden bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-default bg-bg-subtle">
            <div className="w-2.5 h-2.5 rounded-full bg-border-default" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-default" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-default" />
            <div className="ml-3 text-[11px] text-fg-muted/60 font-mono">
              app.aeros.io/dashboard
            </div>
          </div>

          <div className="grid grid-cols-12 min-h-[320px]">
            <aside className="col-span-3 border-b border-border-default border-r border-border-default p-4 space-y-1 bg-white hidden md:block">
              {['Dashboard', 'Marketplace', 'Orders', 'Reports'].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`px-3 py-2 rounded-md text-xs ${
                      i === 0 ? 'bg-ink-900 text-white' : 'text-fg-muted'
                    }`}
                  >
                    {item}
                  </div>
                ),
              )}
            </aside>

            <div className="col-span-12 md:col-span-9 p-6 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ['GMV Today', '₹4.2L'],
                  ['Orders', '847'],
                  ['Vendors', '1,240'],
                  ['Alerts', '2'],
                ].map(([label, value]) => (
                  <div key={label} className="border border-border-default rounded-2xl p-3">
                    <div className="text-[10px] text-fg-muted/60 uppercase tracking-wider mb-1">
                      {label}
                    </div>
                    <div className="text-fg-primary font-bold text-lg">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-border-default rounded-2xl p-4">
                <div className="text-[10px] text-fg-muted/60 uppercase tracking-wider mb-3">
                  Revenue · 30 days
                </div>
                <svg viewBox="0 0 400 60" className="w-full h-16" preserveAspectRatio="none">
                  <path
                    d="M0,50 L20,42 L40,44 L60,38 L80,35 L100,28 L120,30 L140,22 L160,25 L180,18 L200,20 L220,14 L240,16 L260,10 L280,12 L300,8 L320,5 L340,8 L360,4 L380,6 L400,3"
                    fill="none"
                    stroke="#0a0a0a"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
