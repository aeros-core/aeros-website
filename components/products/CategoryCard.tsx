import Link from 'next/link'
import type { Category } from '@/lib/categories'

export default function CategoryCard({ category }: { category: Category }) {
  const isLinkable = category.available && Boolean(category.detail)
  const href = isLinkable ? `/products/${category.slug}` : null

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3 mb-6">
        <div className="text-xs font-mono text-fg-muted/60">
          / {category.name.toLowerCase()}
        </div>
        {category.aerosSelect && (
          <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap bg-royal-50 text-royal-800">
            Aeros Select
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-fg-primary mb-2">
        {category.name}
      </h3>
      <p className="text-fg-muted text-sm mb-8">{category.blurb}</p>

      {isLinkable ? (
        <span className="text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more <span aria-hidden>→</span>
        </span>
      ) : (
        <span className="self-start text-[11px] font-mono px-2.5 py-1 rounded-full border border-border-default text-fg-muted">
          Coming soon
        </span>
      )}
    </>
  )

  const baseClasses =
    'bg-white p-8 rounded-3xl border border-border-default flex flex-col h-full'

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} group hover:bg-bg-subtle transition-colors`}
      >
        {inner}
      </Link>
    )
  }

  return <div className={baseClasses}>{inner}</div>
}
