import type { MetadataRoute } from 'next'
import { categories } from '@/lib/categories'
import { guides } from '@/lib/resources'
import { aerosSelectProducts } from '@/lib/aeros-select'
import { absoluteUrl } from '@/lib/seo'
import { fetchStorefront } from '@/lib/marketplace'

/**
 * The dynamic entries below reuse the same predicates as each route's
 * generateStaticParams. A sitemap that lists a page the router will not
 * build is a sitemap full of 404s, so these filters must stay in step.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const { collections } = await fetchStorefront()

  const staticRoutes: Array<{
    path: string
    priority: number
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  }> = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/products/aeros-select', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/products/sample-kits', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/hospitality', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/resources', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/clients', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/partners/us', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/nra', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/support', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/refund-policy', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/shipping-policy', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/cookie-policy', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  ]

  // Hand-built category pages (matches generateStaticParams: c.detail).
  const categoryRoutes = categories
    .filter((c) => c.detail)
    .map((c) => ({ path: `/products/${c.slug}`, priority: 0.8 }))

  // Every Aeros Select product, including sub-products under AeroSeal.
  const selectRoutes = aerosSelectProducts.map((p) => ({
    path: `/products/aeros-select/${p.slug}`,
    priority: 0.8,
  }))

  // Published guides only (matches generateStaticParams: published && sections).
  const guideRoutes = guides
    .filter((g) => g.published && g.sections)
    .map((g) => ({ path: `/resources/${g.slug}`, priority: 0.6 }))

  // Shop by Business pages (matches generateStaticParams: the app's collections).
  const businessRoutes = collections.map((c) => ({
    path: `/products/business/${c.slug}`,
    priority: 0.7,
  }))

  // Standalone page that lives outside the [slug] routes.
  const standaloneRoutes = [
    { path: '/products/paper-cups/double-wall-paper-cups', priority: 0.8 },
  ]

  return [
    ...staticRoutes.map((r) => ({
      url: absoluteUrl(r.path),
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...[
      ...categoryRoutes,
      ...selectRoutes,
      ...guideRoutes,
      ...businessRoutes,
      ...standaloneRoutes,
    ].map((r) => ({
      url: absoluteUrl(r.path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: r.priority,
    })),
  ]
}
