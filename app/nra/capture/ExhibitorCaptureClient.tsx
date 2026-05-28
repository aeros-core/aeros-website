'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type Lead = {
  id: string
  createdAt: number
  updatedAt: number
  name: string
  company: string
  role: string
  email: string
  phone: string
  category: string
  booth: string
  interests: string[]
  notes: string
  // Factory-specific (only filled if interests includes 'Factory')
  factorySize: string
  factoryMachines: string
  factoryProducts: string
  // Warehouse-specific (only filled if interests includes 'Warehouse')
  warehouseSize: string
  warehousePallets: string
  warehouseGoods: string
  // Captured by: 'self' = visitor filled it in, 'owner' = Arjun captured it
  source: 'self' | 'owner'
}

const STORAGE_KEY = 'aeros:nra2026:exhibitors'
const OWNER_FLAG = 'aeros:nra2026:owner'

const CATEGORIES = [
  'Operator',
  'Distributor',
  'Disposables',
  'Packaging',
  'Equipment',
  'Refrigeration',
  'Beverage',
  'Smallwares',
  'Cleaning',
  'POS / Tech',
  'Other',
] as const

const INTERESTS = [
  'Factory',
  'Warehouse',
  'Marketplace',
  'Just exploring',
] as const

type Draft = Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'source'>

const emptyDraft = (): Draft => ({
  name: '',
  company: '',
  role: '',
  email: '',
  phone: '',
  category: '',
  booth: '',
  interests: [],
  notes: '',
  factorySize: '',
  factoryMachines: '',
  factoryProducts: '',
  warehouseSize: '',
  warehousePallets: '',
  warehouseGoods: '',
})

function csvEscape(value: string): string {
  if (value === '') return ''
  if (/[",\n\r]/.test(value)) return `"${value.replace(/"/g, '""')}"`
  return value
}

function buildCsv(rows: Lead[]): string {
  const headers = [
    'Captured at',
    'Source',
    'Name',
    'Company',
    'Role',
    'Email',
    'Phone',
    'Category',
    'Booth',
    'Interested in',
    'Factory size (sq ft)',
    'Factory machines',
    'Factory products',
    'Warehouse size (sq ft)',
    'Warehouse pallet positions',
    'Warehouse goods',
    'Notes',
  ]
  const lines = [headers.map(csvEscape).join(',')]
  for (const r of rows) {
    lines.push(
      [
        new Date(r.createdAt).toISOString(),
        r.source,
        r.name,
        r.company,
        r.role,
        r.email,
        r.phone,
        r.category,
        r.booth,
        r.interests.join('; '),
        r.factorySize,
        r.factoryMachines,
        r.factoryProducts,
        r.warehouseSize,
        r.warehousePallets,
        r.warehouseGoods,
        r.notes,
      ]
        .map(csvEscape)
        .join(','),
    )
  }
  return lines.join('\n')
}

function downloadBlob(filename: string, mime: string, body: string) {
  const blob = new Blob([body], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function timeAgo(ts: number): string {
  const diff = Date.now() - ts
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  return `${d}d ago`
}

function firstNameOf(name: string): string {
  const trimmed = name.trim()
  if (!trimmed) return 'there'
  return trimmed.split(/\s+/)[0]
}

// Coerce older entries (single `interest`, no `source`, etc.) into the current shape.
function migrate(raw: unknown): Lead[] {
  if (!Array.isArray(raw)) return []
  return raw
    .map((r): Lead | null => {
      if (!r || typeof r !== 'object') return null
      const o = r as Record<string, unknown>
      const id = typeof o.id === 'string' ? o.id : null
      const company =
        typeof o.company === 'string' ? o.company : ''
      if (!id || !company) return null
      const interestsRaw = o.interests
      const interests = Array.isArray(interestsRaw)
        ? interestsRaw.filter((x): x is string => typeof x === 'string')
        : typeof o.interest === 'string' && o.interest
          ? [String(o.interest)]
          : []
      return {
        id,
        createdAt:
          typeof o.createdAt === 'number' ? o.createdAt : Date.now(),
        updatedAt:
          typeof o.updatedAt === 'number'
            ? o.updatedAt
            : typeof o.createdAt === 'number'
              ? o.createdAt
              : Date.now(),
        name:
          (typeof o.name === 'string' && o.name) ||
          (typeof o.contactName === 'string' ? o.contactName : '') ||
          '',
        company,
        role:
          (typeof o.role === 'string' && o.role) ||
          (typeof o.contactRole === 'string' ? o.contactRole : '') ||
          '',
        email: typeof o.email === 'string' ? o.email : '',
        phone: typeof o.phone === 'string' ? o.phone : '',
        category: typeof o.category === 'string' ? o.category : '',
        booth: typeof o.booth === 'string' ? o.booth : '',
        interests,
        notes: typeof o.notes === 'string' ? o.notes : '',
        factorySize: typeof o.factorySize === 'string' ? o.factorySize : '',
        factoryMachines:
          typeof o.factoryMachines === 'string' ? o.factoryMachines : '',
        factoryProducts:
          typeof o.factoryProducts === 'string' ? o.factoryProducts : '',
        warehouseSize:
          typeof o.warehouseSize === 'string' ? o.warehouseSize : '',
        warehousePallets:
          typeof o.warehousePallets === 'string' ? o.warehousePallets : '',
        warehouseGoods:
          typeof o.warehouseGoods === 'string' ? o.warehouseGoods : '',
        source: o.source === 'self' ? 'self' : 'owner',
      }
    })
    .filter((x): x is Lead => x !== null)
}

const AEROS_VCARD = `BEGIN:VCARD
VERSION:3.0
FN:Aeros
ORG:Aeros — Boson Machines OPC Pvt Ltd
EMAIL;TYPE=WORK:hello@aeros.io
URL:https://aeros.io
TITLE:Marketplace for the back-of-house
NOTE:Met at NRA Show 2026, Booth #12937, McCormick Place Chicago.
END:VCARD
`

type Mode = 'form' | 'thanks' | 'owner'

export default function ExhibitorCaptureClient() {
  const [mode, setMode] = useState<Mode>('form')
  const [leads, setLeads] = useState<Lead[]>([])
  const [draft, setDraft] = useState<Draft>(emptyDraft())
  const [editingId, setEditingId] = useState<string | null>(null)
  const [lastSubmittedName, setLastSubmittedName] = useState('')
  const [hydrated, setHydrated] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [exportOpen, setExportOpen] = useState(false)
  const [resetSecs, setResetSecs] = useState(10)

  const nameRef = useRef<HTMLInputElement | null>(null)
  const exportMenuRef = useRef<HTMLDivElement | null>(null)
  const tapCounter = useRef<{ count: number; firstTap: number }>({
    count: 0,
    firstTap: 0,
  })

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setLeads(migrate(JSON.parse(raw)))
      // Owner mode is session-only — survives navigation, not reloads.
      if (window.sessionStorage.getItem(OWNER_FLAG) === '1') {
        setMode('owner')
      }
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  // Persist leads
  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads))
    } catch {
      setToast('Could not save — storage is full.')
    }
  }, [leads, hydrated])

  // Auto-hide toast
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2400)
    return () => clearTimeout(t)
  }, [toast])

  // Outside-click closes export menu
  useEffect(() => {
    if (!exportOpen) return
    const handler = (e: MouseEvent) => {
      if (
        exportMenuRef.current &&
        !exportMenuRef.current.contains(e.target as Node)
      ) {
        setExportOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [exportOpen])

  // Thanks-screen countdown + auto-reset
  useEffect(() => {
    if (mode !== 'thanks') return
    setResetSecs(10)
    const tick = setInterval(() => {
      setResetSecs((s) => {
        if (s <= 1) {
          clearInterval(tick)
          setMode('form')
          setDraft(emptyDraft())
          setEditingId(null)
          setTimeout(() => nameRef.current?.focus(), 100)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(tick)
  }, [mode])

  const filtered = useMemo(() => {
    const sorted = [...leads].sort((a, b) => b.createdAt - a.createdAt)
    const q = search.trim().toLowerCase()
    if (!q) return sorted
    return sorted.filter((e) =>
      [
        e.name,
        e.company,
        e.role,
        e.email,
        e.phone,
        e.category,
        e.booth,
        e.interests.join(' '),
        e.notes,
      ]
        .join(' ')
        .toLowerCase()
        .includes(q),
    )
  }, [leads, search])

  const handleWordmarkTap = () => {
    const now = Date.now()
    const state = tapCounter.current
    if (now - state.firstTap > 3000) {
      state.count = 1
      state.firstTap = now
      return
    }
    state.count += 1
    if (state.count >= 5) {
      state.count = 0
      state.firstTap = 0
      try {
        window.sessionStorage.setItem(OWNER_FLAG, '1')
      } catch {
        // ignore
      }
      setMode('owner')
      setToast('Owner mode unlocked.')
    }
  }

  const exitOwnerMode = () => {
    try {
      window.sessionStorage.removeItem(OWNER_FLAG)
    } catch {
      // ignore
    }
    setMode('form')
    setEditingId(null)
    setDraft(emptyDraft())
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const name = draft.name.trim()
    const company = draft.company.trim()
    const email = draft.email.trim()
    if (!name || !company || !email) {
      setToast('Name, company, and email are required.')
      return
    }
    const now = Date.now()
    if (editingId) {
      setLeads((prev) =>
        prev.map((r) =>
          r.id === editingId
            ? { ...r, ...draft, name, company, email, updatedAt: now }
            : r,
        ),
      )
      setEditingId(null)
      setDraft(emptyDraft())
      setToast('Updated.')
      return
    }
    const entry: Lead = {
      id:
        typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : `id-${now}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: now,
      updatedAt: now,
      ...draft,
      name,
      company,
      email,
      // If owner is editing the dashboard, count it as 'owner'. Otherwise self.
      source: mode === 'owner' ? 'owner' : 'self',
    }
    setLeads((prev) => [entry, ...prev])
    if (mode === 'owner') {
      setDraft(emptyDraft())
      setToast('Added.')
    } else {
      setLastSubmittedName(name)
      setMode('thanks')
    }
  }

  const handleEdit = (id: string) => {
    const row = leads.find((r) => r.id === id)
    if (!row) return
    setDraft({
      name: row.name,
      company: row.company,
      role: row.role,
      email: row.email,
      phone: row.phone,
      category: row.category,
      booth: row.booth,
      interests: row.interests,
      notes: row.notes,
      factorySize: row.factorySize,
      factoryMachines: row.factoryMachines,
      factoryProducts: row.factoryProducts,
      warehouseSize: row.warehouseSize,
      warehousePallets: row.warehousePallets,
      warehouseGoods: row.warehouseGoods,
    })
    setEditingId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => nameRef.current?.focus(), 200)
  }

  const handleDelete = (id: string) => {
    const row = leads.find((r) => r.id === id)
    if (!row) return
    if (
      !window.confirm(
        `Delete ${row.name || row.company}? This can't be undone.`,
      )
    )
      return
    setLeads((prev) => prev.filter((r) => r.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setDraft(emptyDraft())
    }
    setToast('Deleted.')
  }

  const handleExportCsv = () => {
    if (leads.length === 0) return setToast('Nothing to export yet.')
    const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')
    downloadBlob(
      `nra2026-leads-${stamp}.csv`,
      'text/csv;charset=utf-8',
      buildCsv(leads),
    )
    setExportOpen(false)
  }

  const handleExportJson = () => {
    if (leads.length === 0) return setToast('Nothing to export yet.')
    const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')
    downloadBlob(
      `nra2026-leads-${stamp}.json`,
      'application/json',
      JSON.stringify(leads, null, 2),
    )
    setExportOpen(false)
  }

  const handleCopyCsv = async () => {
    if (leads.length === 0) return setToast('Nothing to copy yet.')
    try {
      await navigator.clipboard.writeText(buildCsv(leads))
      setToast('CSV copied.')
    } catch {
      setToast('Copy failed — use Download instead.')
    }
    setExportOpen(false)
  }

  const handleEmail = () => {
    if (leads.length === 0) return setToast('Nothing to send yet.')
    const csv = buildCsv(leads)
    const subject = `NRA Show 2026 — ${leads.length} lead${leads.length === 1 ? '' : 's'}`
    const body =
      csv.length > 1800
        ? `${leads.length} leads captured at NRA 2026. The full CSV is too long for an email body — download it from the dashboard instead.`
        : `${leads.length} leads captured at NRA 2026.\n\nCSV below.\n\n${csv}`
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setExportOpen(false)
  }

  const handleClearAll = () => {
    if (leads.length === 0) return
    if (
      !window.confirm(
        `Delete ALL ${leads.length} leads? Export first if you want a backup.`,
      )
    )
      return
    setLeads([])
    setEditingId(null)
    setDraft(emptyDraft())
    setToast('All entries cleared.')
    setExportOpen(false)
  }

  const handleDownloadVcard = () => {
    downloadBlob('aeros.vcf', 'text/vcard;charset=utf-8', AEROS_VCARD)
  }

  // ---------- THANKS VIEW ----------
  if (mode === 'thanks') {
    return (
      <main className="min-h-screen bg-bg-canvas flex flex-col">
        <section className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-md w-full text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-ink-900 text-white flex items-center justify-center mb-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-fg-primary leading-[1.05] tracking-tight">
              Thanks, {firstNameOf(lastSubmittedName)}.
            </h1>

            <p className="mt-6 text-fg-muted text-lg leading-relaxed">
              We&apos;ll follow up after the show with what you wanted to hear
              about.
            </p>

            <div className="mt-10 rounded-2xl border border-border-default bg-white p-5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
                Find us
              </div>
              <div className="text-fg-primary font-semibold">
                Aeros · Booth #12937
              </div>
              <div className="text-sm text-fg-muted mt-1">
                McCormick Place, Chicago · May 16–19
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleDownloadVcard}
                className="px-6 py-3.5 rounded-full border border-border-default bg-white text-fg-primary text-sm font-semibold hover:bg-bg-subtle transition-colors"
              >
                Save Aeros to your contacts
              </button>
              <button
                type="button"
                onClick={() => {
                  setDraft(emptyDraft())
                  setEditingId(null)
                  setMode('form')
                  setTimeout(() => nameRef.current?.focus(), 100)
                }}
                className="px-6 py-3.5 rounded-full bg-ink-900 text-white text-sm font-semibold hover:bg-ink-800 transition-colors"
              >
                Register someone else
              </button>
            </div>

            <p className="mt-8 text-xs text-fg-muted/60 font-mono">
              Resetting in {resetSecs}s
            </p>
          </div>
        </section>
      </main>
    )
  }

  // ---------- FORM + OWNER VIEW (shared form, owner shows list below) ----------
  return (
    <main className="min-h-screen bg-bg-canvas pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-border-default">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            type="button"
            onClick={handleWordmarkTap}
            className="aeros-logo text-fg-primary text-2xl font-bold tracking-tight select-none"
            aria-label="Aeros"
          >
            Aeros
          </button>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
              NRA 2026 · Booth #12937
            </div>
            <div className="text-fg-primary text-sm font-medium leading-tight truncate">
              {mode === 'owner' ? 'Lead dashboard' : 'Say hello'}
            </div>
          </div>
          {mode === 'owner' && (
            <>
              <div className="text-right">
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                  Total
                </div>
                <div className="text-fg-primary font-semibold tabular-nums">
                  {leads.length}
                </div>
              </div>
              <div className="relative" ref={exportMenuRef}>
                <button
                  type="button"
                  onClick={() => setExportOpen((v) => !v)}
                  className="px-3 py-2 rounded-full bg-ink-900 text-white text-xs font-medium hover:bg-ink-800 transition-colors"
                  aria-haspopup="menu"
                  aria-expanded={exportOpen}
                >
                  Export
                </button>
                {exportOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-56 rounded-2xl border border-border-default bg-white shadow-lg overflow-hidden"
                  >
                    <MenuItem onClick={handleExportCsv}>Download CSV</MenuItem>
                    <MenuItem onClick={handleExportJson} divided>
                      Download JSON (backup)
                    </MenuItem>
                    <MenuItem onClick={handleCopyCsv} divided>
                      Copy CSV to clipboard
                    </MenuItem>
                    <MenuItem onClick={handleEmail} divided>
                      Email it to myself
                    </MenuItem>
                    <MenuItem
                      onClick={handleClearAll}
                      divided
                      tone="danger"
                    >
                      Clear all
                    </MenuItem>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={exitOwnerMode}
                className="px-3 py-2 rounded-full border border-border-default text-xs text-fg-primary hover:bg-bg-subtle transition-colors"
              >
                Exit
              </button>
            </>
          )}
        </div>
      </header>

      {/* Public hero (form mode only) */}
      {mode === 'form' && !editingId && (
        <section className="px-6 pt-12 pb-2">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default mb-6">
              <span className="w-1 h-1 rounded-full bg-royal-600" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-fg-muted">
                Live · May 16–19, 2026
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-fg-primary leading-[1.05] tracking-tight">
              Let&apos;s stay in touch.
            </h1>
            <p className="mt-5 text-fg-muted text-base sm:text-lg leading-relaxed max-w-md mx-auto">
              Drop your details and we&apos;ll follow up after the show with
              anything you wanted to hear more about.
            </p>
          </div>
        </section>
      )}

      {/* Form */}
      <section className="px-4 pt-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-3xl border border-border-default p-5 sm:p-7 space-y-5"
        >
          {(mode === 'owner' || editingId) && (
            <div className="flex items-baseline justify-between">
              <h2 className="text-fg-primary font-bold text-lg">
                {editingId
                  ? 'Edit lead'
                  : mode === 'owner'
                    ? 'Add lead manually'
                    : ''}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null)
                    setDraft(emptyDraft())
                  }}
                  className="text-xs text-fg-muted hover:text-fg-primary font-mono"
                >
                  Cancel
                </button>
              )}
            </div>
          )}

          <Field label="Your name" required>
            <input
              ref={nameRef}
              type="text"
              value={draft.name}
              onChange={(e) =>
                setDraft((d) => ({ ...d, name: e.target.value }))
              }
              autoComplete="name"
              autoCapitalize="words"
              required
              placeholder="Full name"
              className={inputCls}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Company" required>
              <input
                type="text"
                value={draft.company}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, company: e.target.value }))
                }
                autoComplete="organization"
                autoCapitalize="words"
                required
                placeholder="Your company"
                className={inputCls}
              />
            </Field>
            <Field label="Role">
              <input
                type="text"
                value={draft.role}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, role: e.target.value }))
                }
                autoComplete="organization-title"
                placeholder="e.g. Director of Ops"
                className={inputCls}
              />
            </Field>
          </div>

          <Field label="Email" required>
            <input
              type="email"
              inputMode="email"
              value={draft.email}
              onChange={(e) =>
                setDraft((d) => ({ ...d, email: e.target.value }))
              }
              autoComplete="email"
              autoCapitalize="off"
              required
              placeholder="you@company.com"
              className={inputCls}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Phone">
              <input
                type="tel"
                inputMode="tel"
                value={draft.phone}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, phone: e.target.value }))
                }
                autoComplete="tel"
                placeholder="Optional"
                className={inputCls}
              />
            </Field>
            <Field label="Your booth (if exhibiting)">
              <input
                type="text"
                inputMode="numeric"
                value={draft.booth}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, booth: e.target.value }))
                }
                autoComplete="off"
                placeholder="e.g. 4231"
                className={inputCls}
              />
            </Field>
          </div>

          <Field label="What you do">
            <div className="flex gap-1.5 flex-wrap pt-1">
              {CATEGORIES.map((cat) => {
                const active = draft.category === cat
                return (
                  <button
                    type="button"
                    key={cat}
                    onClick={() =>
                      setDraft((d) => ({
                        ...d,
                        category: active ? '' : cat,
                      }))
                    }
                    className={chipCls(active)}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </Field>

          <Field
            label="Want to hear about"
            hint="Pick all that apply"
          >
            <div className="flex gap-1.5 flex-wrap pt-1">
              {INTERESTS.map((topic) => {
                const active = draft.interests.includes(topic)
                return (
                  <button
                    type="button"
                    key={topic}
                    onClick={() =>
                      setDraft((d) => ({
                        ...d,
                        interests: active
                          ? d.interests.filter((t) => t !== topic)
                          : [...d.interests, topic],
                      }))
                    }
                    className={chipCls(active)}
                  >
                    {topic}
                  </button>
                )
              })}
            </div>
          </Field>

          {draft.interests.includes('Factory') && (
            <SubSection title="About your factory">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Size (sq ft)">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={draft.factorySize}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, factorySize: e.target.value }))
                    }
                    placeholder="e.g. 25,000"
                    className={inputCls}
                  />
                </Field>
                <Field label="Machines">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={draft.factoryMachines}
                    onChange={(e) =>
                      setDraft((d) => ({
                        ...d,
                        factoryMachines: e.target.value,
                      }))
                    }
                    placeholder="e.g. 12"
                    className={inputCls}
                  />
                </Field>
              </div>
              <Field label="What you manufacture">
                <textarea
                  value={draft.factoryProducts}
                  onChange={(e) =>
                    setDraft((d) => ({
                      ...d,
                      factoryProducts: e.target.value,
                    }))
                  }
                  rows={2}
                  placeholder="e.g. Paper cups, lids, food containers"
                  className={`${inputCls} resize-y min-h-[68px]`}
                />
              </Field>
            </SubSection>
          )}

          {draft.interests.includes('Warehouse') && (
            <SubSection title="About your warehouse">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Size (sq ft)">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={draft.warehouseSize}
                    onChange={(e) =>
                      setDraft((d) => ({
                        ...d,
                        warehouseSize: e.target.value,
                      }))
                    }
                    placeholder="e.g. 40,000"
                    className={inputCls}
                  />
                </Field>
                <Field label="Pallet positions">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={draft.warehousePallets}
                    onChange={(e) =>
                      setDraft((d) => ({
                        ...d,
                        warehousePallets: e.target.value,
                      }))
                    }
                    placeholder="e.g. 1,200"
                    className={inputCls}
                  />
                </Field>
              </div>
              <Field label="What you store">
                <textarea
                  value={draft.warehouseGoods}
                  onChange={(e) =>
                    setDraft((d) => ({
                      ...d,
                      warehouseGoods: e.target.value,
                    }))
                  }
                  rows={2}
                  placeholder="e.g. Dry goods, refrigerated, restaurant disposables"
                  className={`${inputCls} resize-y min-h-[68px]`}
                />
              </Field>
            </SubSection>
          )}

          <Field label="Anything else?">
            <textarea
              value={draft.notes}
              onChange={(e) =>
                setDraft((d) => ({ ...d, notes: e.target.value }))
              }
              rows={3}
              placeholder="Optional"
              className={`${inputCls} resize-y min-h-[88px]`}
            />
          </Field>

          <button
            type="submit"
            className="w-full px-6 py-4 rounded-full bg-ink-900 text-white text-base font-semibold hover:bg-ink-800 transition-colors"
          >
            {editingId
              ? 'Save changes'
              : mode === 'owner'
                ? 'Add lead'
                : 'Submit'}
          </button>

          {mode === 'form' && !editingId && (
            <p className="text-center text-xs text-fg-muted/60 font-mono pt-1">
              We&apos;ll only use this to follow up about Aeros.
            </p>
          )}
        </form>
      </section>

      {/* Owner: leads list */}
      {mode === 'owner' && (
        <section className="px-4 pt-10">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                Captured · {leads.length}
              </div>
              {leads.length > 0 && (
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="text-sm px-3 py-1.5 rounded-full bg-white border border-border-default text-fg-primary placeholder:text-fg-muted/60 w-40 focus:outline-none focus:ring-2 focus:ring-ink-900/10"
                />
              )}
            </div>

            {!hydrated ? null : leads.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border-default bg-white p-8 text-center">
                <div className="text-fg-primary font-medium">
                  No leads yet.
                </div>
                <p className="text-sm text-fg-muted mt-1">
                  Exit owner mode and hand the phone to a visitor — or add one
                  manually above.
                </p>
              </div>
            ) : (
              <ul className="space-y-2">
                {filtered.map((row) => (
                  <li
                    key={row.id}
                    className={`bg-white rounded-2xl border ${
                      editingId === row.id
                        ? 'border-ink-900'
                        : 'border-border-default'
                    } p-4`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-fg-primary font-semibold truncate">
                            {row.name || '—'}
                          </span>
                          <span className="text-xs text-fg-muted truncate">
                            · {row.company}
                          </span>
                          {row.booth && (
                            <span className="text-[11px] font-mono text-fg-muted">
                              #{row.booth}
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              row.source === 'self'
                                ? 'bg-ink-900 text-white'
                                : 'bg-bg-subtle text-fg-muted border border-border-default'
                            }`}
                            title={
                              row.source === 'self'
                                ? 'Visitor filled this in'
                                : 'You added this'
                            }
                          >
                            {row.source}
                          </span>
                        </div>
                        <div className="text-xs text-fg-muted mt-1 truncate">
                          {[row.role, row.category, row.email, row.phone]
                            .filter(Boolean)
                            .join(' · ') || '—'}
                        </div>
                        {row.interests.length > 0 && (
                          <div className="flex gap-1 flex-wrap mt-2">
                            {row.interests.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border-default text-fg-muted"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                        {(row.factorySize ||
                          row.factoryMachines ||
                          row.factoryProducts) && (
                          <div className="text-[11px] text-fg-muted mt-2">
                            <span className="font-mono uppercase tracking-wider text-fg-muted/60">
                              Factory ·{' '}
                            </span>
                            {[
                              row.factorySize && `${row.factorySize} sq ft`,
                              row.factoryMachines &&
                                `${row.factoryMachines} machines`,
                              row.factoryProducts,
                            ]
                              .filter(Boolean)
                              .join(' · ')}
                          </div>
                        )}
                        {(row.warehouseSize ||
                          row.warehousePallets ||
                          row.warehouseGoods) && (
                          <div className="text-[11px] text-fg-muted mt-1">
                            <span className="font-mono uppercase tracking-wider text-fg-muted/60">
                              Warehouse ·{' '}
                            </span>
                            {[
                              row.warehouseSize &&
                                `${row.warehouseSize} sq ft`,
                              row.warehousePallets &&
                                `${row.warehousePallets} pallets`,
                              row.warehouseGoods,
                            ]
                              .filter(Boolean)
                              .join(' · ')}
                          </div>
                        )}
                        {row.notes && (
                          <div className="text-xs text-fg-muted mt-2 line-clamp-2">
                            {row.notes}
                          </div>
                        )}
                        <div className="text-[10px] font-mono text-fg-muted/60 mt-2">
                          {timeAgo(row.createdAt)}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleEdit(row.id)}
                          className="px-3 py-1.5 rounded-full border border-border-default text-xs text-fg-primary hover:bg-bg-subtle transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(row.id)}
                          className="px-3 py-1.5 rounded-full border border-border-default text-xs text-fg-muted hover:text-red-600 hover:border-red-300 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
                {filtered.length === 0 && (
                  <li className="text-center text-sm text-fg-muted py-6">
                    No matches for &ldquo;{search}&rdquo;.
                  </li>
                )}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 py-2.5 rounded-full bg-ink-900 text-white text-sm shadow-lg">
          {toast}
        </div>
      )}
    </main>
  )
}

const inputCls =
  'w-full px-3.5 py-3 rounded-xl bg-white border border-border-default text-fg-primary placeholder:text-fg-muted/60 text-[16px] focus:outline-none focus:ring-2 focus:ring-ink-900/10 focus:border-ink-900'

function chipCls(active: boolean) {
  return `px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
    active
      ? 'bg-ink-900 text-white border-ink-900'
      : 'bg-white text-fg-muted border-border-default hover:text-fg-primary'
  }`
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string
  required?: boolean
  hint?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between mb-1.5">
        <span className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
        {hint && (
          <span className="text-[10px] font-mono text-fg-muted/50">
            {hint}
          </span>
        )}
      </span>
      {children}
    </label>
  )
}

function SubSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl bg-bg-subtle border border-border-default p-4 sm:p-5 space-y-4">
      <div className="text-[11px] font-mono uppercase tracking-widest text-fg-primary">
        {title}
      </div>
      {children}
    </div>
  )
}

function MenuItem({
  children,
  onClick,
  divided,
  tone,
}: {
  children: React.ReactNode
  onClick: () => void
  divided?: boolean
  tone?: 'danger'
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 text-sm hover:bg-bg-subtle ${
        divided ? 'border-t border-border-default' : ''
      } ${tone === 'danger' ? 'text-red-600' : 'text-fg-primary'}`}
    >
      {children}
    </button>
  )
}
