'use server'

import { Client } from '@notionhq/client'

export type PartnerApplicationInput = {
  businessName: string
  dba?: string
  proprietorName: string
  ein: string
  yearFounded: string
  website?: string
  businessModel: string
  categories: string[]
  imports: string
  importCountries?: string
  employeeRange: string
  annualVolume: string
  hasWarehouse: string
  warehouseCity?: string
  warehouseState?: string
  warehouseSize?: string
  warehouseCount?: string
  contactName: string
  contactTitle?: string
  contactEmail: string
  contactPhone: string
  operatingState: string
  notes?: string
}

export type PartnerApplicationResult =
  | { ok: true }
  | { ok: false; error: string }

const BUSINESS_MODEL_LABEL: Record<string, string> = {
  distributor: 'Distributor / Wholesaler',
  manufacturer: 'Manufacturer',
  'manufacturer-distributor': 'Manufacturer + Distributor',
  reseller: 'Reseller / E-commerce',
  'small-buyer': 'Small buyer / Operator',
}

const CATEGORY_LABEL: Record<string, string> = {
  'paper-packaging': 'Paper packaging',
  'food-containers': 'Takeout & food containers',
  'cleaning-hygiene': 'Cleaning & hygiene',
  'gloves-ppe': 'Gloves & PPE',
  equipment: 'Kitchen equipment',
  other: 'Other',
}

const IMPORTS_LABEL: Record<string, string> = {
  yes: 'Yes',
  no: 'No',
  planning: 'Planning',
}

const WAREHOUSE_LABEL: Record<string, string> = {
  yes: 'Yes',
  '3pl': '3PL',
  no: 'No',
}

function isValidEin(ein: string) {
  return /^\d{2}-?\d{7}$/.test(ein.trim())
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function richText(value: string | undefined) {
  if (!value) return { rich_text: [] }
  return { rich_text: [{ type: 'text' as const, text: { content: value } }] }
}

function optionalNumber(value: string | undefined) {
  if (!value) return { number: null }
  const cleaned = value.replace(/[, ]+/g, '')
  const n = Number(cleaned)
  return { number: Number.isFinite(n) ? n : null }
}

export async function submitPartnerApplication(
  input: PartnerApplicationInput
): Promise<PartnerApplicationResult> {
  const required: (keyof PartnerApplicationInput)[] = [
    'businessName',
    'proprietorName',
    'ein',
    'yearFounded',
    'businessModel',
    'imports',
    'employeeRange',
    'annualVolume',
    'hasWarehouse',
    'contactName',
    'contactEmail',
    'contactPhone',
    'operatingState',
  ]

  for (const key of required) {
    const value = input[key]
    if (typeof value !== 'string' || value.trim() === '') {
      return { ok: false, error: `Missing required field: ${key}` }
    }
  }

  if (!isValidEin(input.ein)) {
    return { ok: false, error: 'EIN must be in the format XX-XXXXXXX.' }
  }
  if (!isValidEmail(input.contactEmail)) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  const token = process.env.NOTION_TOKEN
  const databaseId = process.env.NOTION_PARTNER_APPLICATIONS_DB_ID

  console.log('[partners/us] new application', {
    business: input.businessName,
    proprietor: input.proprietorName,
    email: input.contactEmail,
    state: input.operatingState,
    model: input.businessModel,
  })

  if (!token || !databaseId) {
    console.error(
      '[partners/us] Notion env vars missing — application logged but not persisted'
    )
    return {
      ok: false,
      error: 'Submission service is not configured. Please try again later.',
    }
  }

  try {
    const notion = new Client({ auth: token })

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Business Name': {
          title: [{ type: 'text', text: { content: input.businessName } }],
        },
        Status: { select: { name: 'New' } },
        'Submitted At': { date: { start: new Date().toISOString() } },
        'Proprietor Name': richText(input.proprietorName),
        DBA: richText(input.dba),
        EIN: richText(input.ein),
        'Year Founded': optionalNumber(input.yearFounded),
        Website: { url: input.website ? input.website : null },
        'Business Model': {
          select: BUSINESS_MODEL_LABEL[input.businessModel]
            ? { name: BUSINESS_MODEL_LABEL[input.businessModel] }
            : null,
        },
        Categories: {
          multi_select: input.categories
            .map((c) => CATEGORY_LABEL[c])
            .filter(Boolean)
            .map((name) => ({ name })),
        },
        Imports: {
          select: IMPORTS_LABEL[input.imports]
            ? { name: IMPORTS_LABEL[input.imports] }
            : null,
        },
        'Import Origins': richText(input.importCountries),
        Employees: { select: { name: input.employeeRange } },
        'Annual Volume': { select: { name: input.annualVolume } },
        'Has Warehouse': {
          select: WAREHOUSE_LABEL[input.hasWarehouse]
            ? { name: WAREHOUSE_LABEL[input.hasWarehouse] }
            : null,
        },
        'Warehouse City': richText(input.warehouseCity),
        'Warehouse State': richText(input.warehouseState),
        'Warehouse Size (sqft)': optionalNumber(input.warehouseSize),
        Facilities: optionalNumber(input.warehouseCount),
        'Contact Name': richText(input.contactName),
        'Contact Title': richText(input.contactTitle),
        'Contact Email': { email: input.contactEmail },
        'Contact Phone': { phone_number: input.contactPhone },
        'Operating State': richText(input.operatingState),
        Notes: richText(input.notes),
      },
    })

    return { ok: true }
  } catch (err) {
    console.error('[partners/us] Notion write failed', err)
    return {
      ok: false,
      error:
        'We could not record your application. Please try again, or email hello@aeros.io.',
    }
  }
}
