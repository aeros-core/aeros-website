import {
  SHOW_PRICES,
  descriptionBlocks,
  formatPrice,
  type MarketItem,
} from '@/lib/marketplace'

/**
 * One live app listing. The whole card links to the product in the Aeros
 * app — the only screen there that opens from a cold link — where it can
 * be added to the cart.
 */
export default function ItemCard({ item }: { item: MarketItem }) {
  const lead = descriptionBlocks(item.description).find((b) => b.kind === 'p')
  const image = item.images[0]

  return (
    <a
      href={item.url}
      className="group bg-white rounded-3xl border border-border-default overflow-hidden flex flex-col h-full hover:bg-bg-subtle transition-colors"
    >
      <div className="aspect-square bg-bg-subtle border-b border-border-default overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- remote app CDN
          <img
            src={image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            width={800}
            height={800}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs font-mono text-fg-muted/60">
            / aeros
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-fg-primary leading-snug">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="mt-1 text-sm text-fg-muted">{item.subtitle}</p>
        )}
        {lead?.kind === 'p' && (
          <p className="mt-4 text-sm text-fg-muted line-clamp-3">{lead.text}</p>
        )}

        <div className="mt-auto pt-6 flex items-end justify-between gap-4">
          {SHOW_PRICES && item.price !== null ? (
            <div>
              <div className="text-xl font-bold text-fg-primary">
                {formatPrice(item.price)}
              </div>
              <div className="text-[11px] text-fg-muted">
                excl. GST{item.moq > 1 ? ` · MOQ ${item.moq} ${item.unit}` : ''}
              </div>
            </div>
          ) : (
            <span />
          )}
          <span className="text-sm text-fg-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all whitespace-nowrap">
            Buy on the app <span aria-hidden>↗</span>
          </span>
        </div>
      </div>
    </a>
  )
}
