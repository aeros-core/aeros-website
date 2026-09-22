import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { company } from '@/lib/company'

export type LegalSection = {
  title: string
  content: {
    heading: string
    body: string
    bullets?: string[]
  }[]
}

type Props = {
  title: string
  summary: string
  lastUpdated: string
  effective: string
  /** Lead paragraph in the bordered card — names the contracting entity. */
  preamble: string
  sections: LegalSection[]
  /** Optional closing note; falls back to a contact line. */
  footnote?: React.ReactNode
}

export default function LegalPage({
  title,
  summary,
  lastUpdated,
  effective,
  preamble,
  sections,
  footnote,
}: Props) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-bg-subtle border-b border-border-default">
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg-primary tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-fg-muted text-lg leading-relaxed mb-6">{summary}</p>
          <div className="flex flex-wrap gap-6 text-xs text-fg-muted/60 font-mono">
            <span>Last updated: {lastUpdated}</span>
            <span>Effective: {effective}</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl border border-border-default bg-bg-subtle">
            <p className="text-fg-primary leading-relaxed text-[15px]">{preamble}</p>
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
                      <p className="text-fg-muted text-[15px] leading-relaxed">{item.body}</p>
                      {item.bullets && (
                        <ul className="mt-3 space-y-2">
                          {item.bullets.map((b) => (
                            <li
                              key={b}
                              className="text-fg-muted text-[15px] leading-relaxed pl-5 relative"
                            >
                              <span className="absolute left-0 top-[0.7em] w-1.5 h-px bg-fg-muted/50" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border-default">
            {footnote ?? (
              <p className="text-fg-muted text-sm leading-relaxed">
                This policy is issued by {company.legalName}. For questions, write to{' '}
                <a
                  href={`mailto:${company.email}`}
                  className="text-fg-primary underline hover:text-fg-muted transition-colors"
                >
                  {company.email}
                </a>{' '}
                or call{' '}
                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-fg-primary underline hover:text-fg-muted transition-colors"
                >
                  {company.phone}
                </a>
                .
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
