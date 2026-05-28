'use client'

import { useMemo, useState, useTransition } from 'react'
import {
  Button,
  Checkbox,
  Field,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@aeros/react'
import { US_STATES } from '@/lib/us-states'
import {
  submitPartnerApplication,
  type PartnerApplicationInput,
} from '@/app/partners/us/actions'

const BUSINESS_MODELS = [
  { value: 'distributor', label: 'Distributor / Wholesaler' },
  { value: 'manufacturer', label: 'Manufacturer' },
  { value: 'manufacturer-distributor', label: 'Manufacturer + Distributor' },
  { value: 'reseller', label: 'Reseller / E-commerce' },
  { value: 'small-buyer', label: 'Small buyer / Operator' },
]

const EMPLOYEE_RANGES = [
  '1–10',
  '11–25',
  '26–50',
  '51–100',
  '101–250',
  '250+',
]

const ANNUAL_VOLUMES = [
  'Under $100k',
  '$100k – $500k',
  '$500k – $2M',
  '$2M – $10M',
  '$10M+',
]

const CATEGORY_OPTIONS = [
  { value: 'paper-packaging', label: 'Paper packaging (cups, lids, bags)' },
  { value: 'food-containers', label: 'Takeout & food containers' },
  { value: 'cleaning-hygiene', label: 'Cleaning & hygiene' },
  { value: 'gloves-ppe', label: 'Gloves & PPE' },
  { value: 'equipment', label: 'Kitchen equipment' },
  { value: 'other', label: 'Other' },
]

type FormState = {
  businessName: string
  dba: string
  proprietorName: string
  ein: string
  yearFounded: string
  website: string
  businessModel: string
  categories: string[]
  imports: string
  importCountries: string
  employeeRange: string
  annualVolume: string
  hasWarehouse: string
  warehouseCity: string
  warehouseState: string
  warehouseSize: string
  warehouseCount: string
  contactName: string
  contactTitle: string
  contactEmail: string
  contactPhone: string
  operatingState: string
  notes: string
}

const initialState: FormState = {
  businessName: '',
  dba: '',
  proprietorName: '',
  ein: '',
  yearFounded: '',
  website: '',
  businessModel: '',
  categories: [],
  imports: '',
  importCountries: '',
  employeeRange: '',
  annualVolume: '',
  hasWarehouse: '',
  warehouseCity: '',
  warehouseState: '',
  warehouseSize: '',
  warehouseCount: '',
  contactName: '',
  contactTitle: '',
  contactEmail: '',
  contactPhone: '',
  operatingState: '',
  notes: '',
}

function SectionHeader({
  step,
  eyebrow,
  title,
  subtitle,
}: {
  step: number
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8">
      <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-3">
        Step {step.toString().padStart(2, '0')} · {eyebrow}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-fg-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-fg-muted max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default function PartnerApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  const yearsInBusiness = useMemo(() => {
    const y = parseInt(form.yearFounded, 10)
    if (!y || y < 1800 || y > new Date().getFullYear()) return null
    return new Date().getFullYear() - y
  }, [form.yearFounded])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function toggleCategory(value: string, checked: boolean) {
    setForm((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((c) => c !== value),
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const payload: PartnerApplicationInput = {
      businessName: form.businessName.trim(),
      dba: form.dba.trim() || undefined,
      proprietorName: form.proprietorName.trim(),
      ein: form.ein.trim(),
      yearFounded: form.yearFounded.trim(),
      website: form.website.trim() || undefined,
      businessModel: form.businessModel,
      categories: form.categories,
      imports: form.imports,
      importCountries:
        form.imports === 'yes' ? form.importCountries.trim() : undefined,
      employeeRange: form.employeeRange,
      annualVolume: form.annualVolume,
      hasWarehouse: form.hasWarehouse,
      warehouseCity:
        form.hasWarehouse === 'yes' ? form.warehouseCity.trim() : undefined,
      warehouseState:
        form.hasWarehouse === 'yes' ? form.warehouseState : undefined,
      warehouseSize:
        form.hasWarehouse === 'yes' ? form.warehouseSize.trim() : undefined,
      warehouseCount:
        form.hasWarehouse === 'yes' ? form.warehouseCount.trim() : undefined,
      contactName: form.contactName.trim(),
      contactTitle: form.contactTitle.trim() || undefined,
      contactEmail: form.contactEmail.trim(),
      contactPhone: form.contactPhone.trim(),
      operatingState: form.operatingState,
      notes: form.notes.trim() || undefined,
    }

    startTransition(async () => {
      const result = await submitPartnerApplication(payload)
      if (result.ok) {
        setSuccess(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setError(result.error)
      }
    })
  }

  if (success) {
    return (
      <div className="rounded-3xl border border-border-default bg-bg-subtle p-10 md:p-14 text-center">
        <div className="text-[10px] font-mono uppercase tracking-widest text-royal-600 mb-4">
          Application received
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-fg-primary leading-tight mb-5">
          Thanks — we&apos;ll be in touch.
        </h2>
        <p className="text-fg-muted leading-relaxed max-w-md mx-auto">
          Our US partnerships team reviews every application personally. Expect
          a note from us within 3 business days at{' '}
          <span className="text-fg-primary font-medium">
            {form.contactEmail}
          </span>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Section 1 — Business basics */}
      <section className="rounded-3xl border border-border-default bg-white p-8 md:p-12">
        <SectionHeader
          step={1}
          eyebrow="Business basics"
          title="Tell us about the company."
          subtitle="Legal name, ownership, and tax identity. We use this to verify the entity."
        />

        <div className="grid md:grid-cols-2 gap-x-6">
          <Field label="Legal business name" htmlFor="businessName" required>
            <Input
              id="businessName"
              value={form.businessName}
              onChange={(e) => update('businessName', e.target.value)}
              placeholder="Acme Foodservice LLC"
              required
            />
          </Field>

          <Field label="DBA / Trading name" htmlFor="dba" hint="If different.">
            <Input
              id="dba"
              value={form.dba}
              onChange={(e) => update('dba', e.target.value)}
              placeholder="Acme Supply Co."
            />
          </Field>

          <Field label="Proprietor / owner name" htmlFor="proprietorName" required>
            <Input
              id="proprietorName"
              value={form.proprietorName}
              onChange={(e) => update('proprietorName', e.target.value)}
              placeholder="Jane Doe"
              required
            />
          </Field>

          <Field
            label="EIN"
            htmlFor="ein"
            required
            hint="Federal Employer Identification Number — format XX-XXXXXXX."
          >
            <Input
              id="ein"
              value={form.ein}
              onChange={(e) => update('ein', e.target.value)}
              placeholder="12-3456789"
              inputMode="numeric"
              required
            />
          </Field>

          <Field
            label="Year founded"
            htmlFor="yearFounded"
            required
            hint={
              yearsInBusiness !== null
                ? `${yearsInBusiness} ${yearsInBusiness === 1 ? 'year' : 'years'} in business.`
                : undefined
            }
          >
            <Input
              id="yearFounded"
              value={form.yearFounded}
              onChange={(e) => update('yearFounded', e.target.value)}
              placeholder="2015"
              inputMode="numeric"
              maxLength={4}
              required
            />
          </Field>

          <Field label="Website" htmlFor="website">
            <Input
              id="website"
              value={form.website}
              onChange={(e) => update('website', e.target.value)}
              placeholder="acmefoodservice.com"
              inputMode="url"
            />
          </Field>
        </div>
      </section>

      {/* Section 2 — Business model */}
      <section className="rounded-3xl border border-border-default bg-white p-8 md:p-12">
        <SectionHeader
          step={2}
          eyebrow="Business model"
          title="What do you do day-to-day?"
          subtitle="So we route you to the right team — sourcing, distribution, or operator success."
        />

        <Field label="Which best describes you?" required>
          <RadioGroup
            value={form.businessModel}
            onValueChange={(v) => update('businessModel', v)}
            className="grid sm:grid-cols-2 gap-2"
          >
            {BUSINESS_MODELS.map((opt) => (
              <label
                key={opt.value}
                htmlFor={`bm-${opt.value}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-border-default hover:bg-bg-subtle transition-colors cursor-pointer has-[[data-state=checked]]:border-ink-900 has-[[data-state=checked]]:bg-bg-subtle"
              >
                <RadioGroupItem id={`bm-${opt.value}`} value={opt.value} />
                <span className="text-sm font-medium text-fg-primary">
                  {opt.label}
                </span>
              </label>
            ))}
          </RadioGroup>
        </Field>

        <Field
          label="Categories you work with"
          hint="Select all that apply."
        >
          <div className="grid sm:grid-cols-2 gap-2">
            {CATEGORY_OPTIONS.map((opt) => {
              const checked = form.categories.includes(opt.value)
              return (
                <label
                  key={opt.value}
                  htmlFor={`cat-${opt.value}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border-default hover:bg-bg-subtle transition-colors cursor-pointer has-[[data-state=checked]]:border-ink-900 has-[[data-state=checked]]:bg-bg-subtle"
                >
                  <Checkbox
                    id={`cat-${opt.value}`}
                    checked={checked}
                    onCheckedChange={(v) =>
                      toggleCategory(opt.value, v === true)
                    }
                  />
                  <span className="text-sm font-medium text-fg-primary">
                    {opt.label}
                  </span>
                </label>
              )
            })}
          </div>
        </Field>

        <div className="grid md:grid-cols-2 gap-x-6">
          <Field label="Do you import goods?" required>
            <RadioGroup
              value={form.imports}
              onValueChange={(v) => update('imports', v)}
              className="flex gap-2"
            >
              {[
                { v: 'yes', l: 'Yes' },
                { v: 'no', l: 'No' },
                { v: 'planning', l: 'Planning to' },
              ].map((o) => (
                <label
                  key={o.v}
                  htmlFor={`imp-${o.v}`}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-border-default hover:bg-bg-subtle transition-colors cursor-pointer has-[[data-state=checked]]:border-ink-900 has-[[data-state=checked]]:bg-bg-subtle flex-1"
                >
                  <RadioGroupItem id={`imp-${o.v}`} value={o.v} />
                  <span className="text-sm font-medium text-fg-primary">
                    {o.l}
                  </span>
                </label>
              ))}
            </RadioGroup>
          </Field>

          {form.imports === 'yes' && (
            <Field
              label="Primary import origins"
              htmlFor="importCountries"
              hint="Countries you currently import from."
            >
              <Input
                id="importCountries"
                value={form.importCountries}
                onChange={(e) => update('importCountries', e.target.value)}
                placeholder="India, China, Vietnam"
              />
            </Field>
          )}

          <Field label="Number of employees" required>
            <Select
              value={form.employeeRange}
              onValueChange={(v) => update('employeeRange', v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {EMPLOYEE_RANGES.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Estimated annual purchase volume" required>
            <Select
              value={form.annualVolume}
              onValueChange={(v) => update('annualVolume', v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {ANNUAL_VOLUMES.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>
      </section>

      {/* Section 3 — Warehousing */}
      <section className="rounded-3xl border border-border-default bg-white p-8 md:p-12">
        <SectionHeader
          step={3}
          eyebrow="Warehousing"
          title="Do you hold inventory?"
          subtitle="Storage and fulfillment footprint help us understand how we can ship to or through you."
        />

        <Field label="Do you operate a warehouse?" required>
          <RadioGroup
            value={form.hasWarehouse}
            onValueChange={(v) => update('hasWarehouse', v)}
            className="flex gap-2"
          >
            {[
              { v: 'yes', l: 'Yes, we own / lease one' },
              { v: '3pl', l: 'We use a 3PL' },
              { v: 'no', l: 'No warehousing' },
            ].map((o) => (
              <label
                key={o.v}
                htmlFor={`wh-${o.v}`}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-border-default hover:bg-bg-subtle transition-colors cursor-pointer has-[[data-state=checked]]:border-ink-900 has-[[data-state=checked]]:bg-bg-subtle flex-1"
              >
                <RadioGroupItem id={`wh-${o.v}`} value={o.v} />
                <span className="text-sm font-medium text-fg-primary">
                  {o.l}
                </span>
              </label>
            ))}
          </RadioGroup>
        </Field>

        {form.hasWarehouse === 'yes' && (
          <div className="grid md:grid-cols-2 gap-x-6 mt-2">
            <Field label="Warehouse city" htmlFor="warehouseCity">
              <Input
                id="warehouseCity"
                value={form.warehouseCity}
                onChange={(e) => update('warehouseCity', e.target.value)}
                placeholder="Newark"
              />
            </Field>

            <Field label="Warehouse state">
              <Select
                value={form.warehouseState}
                onValueChange={(v) => update('warehouseState', v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {US_STATES.map((s) => (
                    <SelectItem key={s.code} value={s.code}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field
              label="Total warehouse size"
              htmlFor="warehouseSize"
              hint="Square feet across all facilities."
            >
              <Input
                id="warehouseSize"
                value={form.warehouseSize}
                onChange={(e) => update('warehouseSize', e.target.value)}
                placeholder="25,000"
                inputMode="numeric"
                suffix={
                  <span className="text-xs font-mono text-fg-muted pr-2">
                    sq ft
                  </span>
                }
              />
            </Field>

            <Field label="Number of facilities" htmlFor="warehouseCount">
              <Input
                id="warehouseCount"
                value={form.warehouseCount}
                onChange={(e) => update('warehouseCount', e.target.value)}
                placeholder="1"
                inputMode="numeric"
              />
            </Field>
          </div>
        )}
      </section>

      {/* Section 4 — Contact */}
      <section className="rounded-3xl border border-border-default bg-white p-8 md:p-12">
        <SectionHeader
          step={4}
          eyebrow="Contact"
          title="Who should we reach out to?"
          subtitle="The person on the other side of this conversation."
        />

        <div className="grid md:grid-cols-2 gap-x-6">
          <Field label="Primary contact name" htmlFor="contactName" required>
            <Input
              id="contactName"
              value={form.contactName}
              onChange={(e) => update('contactName', e.target.value)}
              placeholder="Jane Doe"
              required
            />
          </Field>

          <Field label="Title / role" htmlFor="contactTitle">
            <Input
              id="contactTitle"
              value={form.contactTitle}
              onChange={(e) => update('contactTitle', e.target.value)}
              placeholder="Head of Procurement"
            />
          </Field>

          <Field label="Work email" htmlFor="contactEmail" required>
            <Input
              id="contactEmail"
              type="email"
              value={form.contactEmail}
              onChange={(e) => update('contactEmail', e.target.value)}
              placeholder="jane@acmefoodservice.com"
              required
            />
          </Field>

          <Field label="Phone" htmlFor="contactPhone" required>
            <Input
              id="contactPhone"
              type="tel"
              value={form.contactPhone}
              onChange={(e) => update('contactPhone', e.target.value)}
              placeholder="(555) 123-4567"
              required
            />
          </Field>

          <Field label="State of primary operation" required>
            <Select
              value={form.operatingState}
              onValueChange={(v) => update('operatingState', v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {US_STATES.map((s) => (
                  <SelectItem key={s.code} value={s.code}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field
          label="Anything else we should know?"
          htmlFor="notes"
          hint="Optional — accounts you serve, growth plans, target categories."
          className="mt-2"
        >
          <Textarea
            id="notes"
            value={form.notes}
            onChange={(e) => update('notes', e.target.value)}
            placeholder="We supply 40 independent QSR locations across the Tri-State area…"
            rows={4}
          />
        </Field>
      </section>

      {/* Submit */}
      <div className="flex flex-col items-center gap-4">
        {error && (
          <p className="text-sm text-danger font-medium">{error}</p>
        )}
        <Button
          type="submit"
          variant="primary"
          size="xl"
          loading={isPending}
          className="rounded-full px-10"
        >
          Submit application
        </Button>
        <p className="text-xs text-fg-muted/60 font-mono">
          We&apos;ll reply within 3 business days · US partnerships team
        </p>
      </div>
    </form>
  )
}
