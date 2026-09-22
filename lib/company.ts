/**
 * Registered-entity details — single source of truth for the legal pages and
 * the site footer.
 *
 * Payment-gateway and acquiring-bank compliance reviews match the business name
 * printed on the website against the name on the merchant record. "Aeros" /
 * "Aeros Packaging" is the trading brand; the contracting and billing party is
 * always the company below. Keep these strings exactly as they appear on the
 * certificate of incorporation and the GST registration.
 */
export const company = {
  legalName: 'Boson Machines OPC Pvt Ltd',
  brand: 'Aeros Packaging',
  /** Use wherever the brand is named first and the entity has to follow. */
  brandAttribution:
    'Aeros and Aeros Packaging are brands operated by Boson Machines OPC Pvt Ltd.',

  address: {
    line1: '76/612, Motilal Nagar no. 1',
    line2: 'Goregaon West',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400104',
    country: 'India',
  },

  gstin: '27AAHCB4282B1ZW',
  pan: 'AAHCB4282B',

  /** Support/claims address — the one already published on /support. */
  email: 'support@aeros-x.com',
  /** Quotations, volume pricing and new-supplier enquiries. */
  salesEmail: 'sales@aeros-x.com',
  phone: '+91 98709 83696',
  /** tel: href — digits only, no spaces. */
  phoneHref: '+919870983696',

  website: 'www.aeros-x.com',
  marketplace: 'https://app.aeros-x.com',

  businessHours: 'Monday to Saturday, 10:00 to 18:30 IST (excluding public holidays)',
  /** Courts named in the governing-law clause. */
  jurisdiction: 'Mumbai, Maharashtra',
} as const

/** Registered address as a single line — for meta descriptions and the footer. */
export const addressOneLine = [
  company.address.line1,
  company.address.line2,
  company.address.city,
  `${company.address.state} ${company.address.postalCode}`,
  company.address.country,
].join(', ')

/** Registered address as separate lines — for the contact card. */
export const addressLines = [
  company.legalName,
  company.address.line1,
  `${company.address.line2}, ${company.address.city}`,
  `${company.address.state} ${company.address.postalCode}`,
  company.address.country,
]
