'use client'

import { useEffect, useState } from 'react'

const LAUNCH_DATE = new Date('2026-06-10T00:00:00-04:00')

type Parts = { days: number; hours: number; minutes: number; seconds: number } | null

function useCountdown(target: Date): Parts {
  const [parts, setParts] = useState<Parts>(null)

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now())
      setParts({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return parts
}

function Cell({ value, label }: { value: number | null; label: string }) {
  const display = value === null ? '--' : String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center min-w-[64px] md:min-w-[88px]">
      <div className="text-3xl md:text-5xl font-bold tabular-nums text-fg-primary leading-none">
        {display}
      </div>
      <div className="mt-2 text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-fg-muted/60">
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const t = useCountdown(LAUNCH_DATE)

  return (
    <section className="relative pt-40 pb-32 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default mb-10">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-royal-600 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-royal-600" />
          </span>
          <span className="text-xs text-fg-muted font-mono uppercase tracking-wider">
            Launching in US · June 10, 2026
          </span>
        </div>

        <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8.5vw,6.5rem)]">
          All your packaging.<br />
          <span className="text-fg-muted/60">One shop.</span>
        </h1>

        <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
          Order every box, mailer, and label your business needs from a
          single marketplace — coming to the United States this June.
        </p>

        <div
          className="mt-14 inline-flex items-stretch justify-center gap-2 md:gap-4 px-5 md:px-8 py-6 rounded-3xl border border-border-default bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)]"
          aria-label="Time until US launch on June 10, 2026"
        >
          <Cell value={t?.days ?? null} label="Days" />
          <div className="w-px bg-border-default" aria-hidden />
          <Cell value={t?.hours ?? null} label="Hours" />
          <div className="w-px bg-border-default" aria-hidden />
          <Cell value={t?.minutes ?? null} label="Min" />
          <div className="w-px bg-border-default" aria-hidden />
          <Cell value={t?.seconds ?? null} label="Sec" />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://app.aeros-x.com"
            className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
          >
            Preview the marketplace
          </a>
          <a
            href="https://app.aeros-x.com"
            className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
          >
            Sign in
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
              app.aeros-x.com/dashboard
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
