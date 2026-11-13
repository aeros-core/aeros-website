'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import BrowserFrame from './BrowserFrame'

export type Capability = {
  key: string
  label: string
  title: string
  body: string
  points: string[]
  image: string
  alt: string
}

/**
 * The modelling showcase: a row of tabs, each swapping in a real screenshot
 * and its feature list. Arrow keys move between tabs (WAI-ARIA tabs pattern).
 */
export default function CapabilityTabs({ items }: { items: Capability[] }) {
  const [active, setActive] = useState(0)
  const tabs = useRef<Array<HTMLButtonElement | null>>([])
  const id = useId()
  const current = items[active]

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = items.length - 1
    let next: number | null = null
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <div>
      <div className="-mx-6 px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div
          role="tablist"
          aria-label="Modelling workspaces"
          onKeyDown={onKeyDown}
          className="inline-flex gap-1 p-1 rounded-full border border-border-default bg-white"
        >
          {items.map((item, i) => {
            const selected = i === active
            return (
              <button
                key={item.key}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                id={`${id}-tab-${item.key}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`px-4 md:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selected
                    ? 'bg-ink-900 text-white'
                    : 'text-fg-muted hover:text-fg-primary hover:bg-bg-subtle'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${current.key}`}
        className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start"
      >
        <div className="lg:col-span-4 lg:pt-4">
          <h3 className="text-2xl md:text-3xl font-bold text-fg-primary leading-tight">
            {current.title}
          </h3>
          <p className="mt-4 text-fg-muted leading-relaxed">{current.body}</p>
          <ul className="mt-8 space-y-3">
            {current.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-fg-primary leading-relaxed">
                <span aria-hidden className="mt-2 w-1 h-1 rounded-full bg-ink-900 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-8">
          <BrowserFrame
            key={current.key}
            src={current.image}
            alt={current.alt}
            sizes="(min-width: 1024px) 760px, 100vw"
          />
        </div>
      </div>
    </div>
  )
}
