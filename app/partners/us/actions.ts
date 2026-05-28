'use server'

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

function isValidEin(ein: string) {
  return /^\d{2}-?\d{7}$/.test(ein.trim())
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
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

  // TODO: wire to CRM / email / Supabase. For now we log + accept.
  console.log('[partners/us] new application', {
    business: input.businessName,
    proprietor: input.proprietorName,
    email: input.contactEmail,
    state: input.operatingState,
    model: input.businessModel,
  })

  return { ok: true }
}
