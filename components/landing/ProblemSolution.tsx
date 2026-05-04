export default function ProblemSolution() {
  return (
    <section id="marketplace" className="py-32 px-6 bg-bg-subtle border-t border-border-default border-b border-border-default">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
        <div className="bg-white p-10 md:p-14 rounded-3xl border border-border-default">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            The problem
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-fg-primary leading-tight mb-5">
            Broken workflows.
          </h3>
          <p className="text-fg-muted leading-relaxed mb-6 max-w-sm">
            Five WhatsApp groups, three spreadsheets, no visibility. Your
            supply chain runs despite your tools, not because of them.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Disconnected', 'Manual', 'Slow'].map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border-default text-fg-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 md:p-14 rounded-3xl border border-border-default">
          <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
            The solution
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-fg-primary leading-tight mb-5">
            One marketplace.
          </h3>
          <p className="text-fg-muted leading-relaxed mb-6 max-w-sm">
            Source products, manage orders, and grow your B2B network —
            all from a single platform.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Unified', 'Automated', 'Real-time'].map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-ink-900 text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
