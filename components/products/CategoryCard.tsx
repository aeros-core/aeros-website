import Link from 'next/link'
import { APP_MARKETPLACE_URL, type Category } from '@/lib/categories'

/**
 * Three states, decided by what exists for the category:
 * - a spec page on this site (`detail` or `href`) — links there
 * - live in the Aeros app with no page here — links out to the app
 * - not on sale yet — static, marked coming soon
 */
export default function CategoryCard({ category }: { category: Category }) {
  const internalHref = category.detail
    ? `/products/${category.slug}`
    : category.href
  const state = !category.available
    ? 'soon'
    : internalHref
      ? 'internal'
      : 'app'

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3 mb-6">
        <div className="text-xs font-mono text-fg-muted/60">
          / {category.name.toLowerCase()}
        </div>
        {state !== 'soon' && (
          <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap bg-ink-50 text-ink-600">
            <span className="w-1.5 h-1.5 rounded-full bg-ink-900" />
            Live
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-fg-primary mb-2">
        {category.name}
      </h3>
      <p className="text-fg-muted text-sm mb-8 flex-1">{category.blurb}</p>

      {state === 'internal' && (
        <span className="text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Specs &amp; sizes <span aria-hidden>→</span>
        </span>
      )}
      {state === 'app' && (
        <span className="text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Shop on the Aeros app <span aria-hidden>↗</span>
        </span>
      )}
      {state === 'soon' && (
        <span className="self-start text-[11px] font-mono px-2.5 py-1 rounded-full border border-border-default text-fg-muted">
          Coming soon
        </span>
      )}
    </>
  )

  const baseClasses =
    'bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full'
  const linkClasses = `${baseClasses} group hover:bg-bg-subtle transition-colors`

  if (state === 'internal' && internalHref) {
    return (
      <Link href={internalHref} className={linkClasses}>
        {inner}
      </Link>
    )
  }
  if (state === 'app') {
    return (
      <a href={APP_MARKETPLACE_URL} className={linkClasses}>
        {inner}
      </a>
    )
  }
  return <div className={baseClasses}>{inner}</div>
}
