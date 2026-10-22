import { company } from './company'

/**
 * Canonical origin for the public site. Every absolute URL in metadata,
 * sitemap entries, and structured data derives from this single value —
 * change it here and nothing else needs touching.
 */
export const SITE_URL = 'https://www.aeros-x.com'

export const SITE_NAME = 'Aeros'

/** Absolute URL for a site-relative path, for canonicals and JSON-LD. */
export function absoluteUrl(path = '/'): string {
  return new URL(path, SITE_URL).toString()
}

/**
 * Organization schema for the root layout. Reads from lib/company.ts, the
 * single source of truth for the registered entity — payment-gateway
 * reviews match the legal name on the site against the merchant record,
 * so it must never be retyped here.
 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: company.legalName,
    url: SITE_URL,
    description:
      'B2B packaging supplier and marketplace for Indian food service — paper cups, bagasse tableware, compostable bags, PET cold cups, and cup sealing machines.',
    telephone: company.phoneHref,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.postalCode,
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'Country', name: 'India' },
  }
}

/** Product schema for an Aeros Select detail page. */
export function productJsonLd({
  name,
  description,
  path,
  image,
}: {
  name: string
  description: string
  path: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url: absoluteUrl(path),
    ...(image ? { image: absoluteUrl(image) } : {}),
    brand: { '@type': 'Brand', name: SITE_NAME },
  }
}

/**
 * FAQPage schema. Product pages already carry a real FAQ section, so this
 * is the cheapest route to rich results — but only emit it when questions
 * actually exist on the page, or the markup contradicts the content.
 */
export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

/** BreadcrumbList schema from an ordered trail of crumbs. */
export function breadcrumbJsonLd(trail: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}
