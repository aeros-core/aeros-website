<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Package manager: pnpm

This repo uses **pnpm**, not npm. Always use `pnpm install` / `pnpm dev` / `pnpm build` — never `npm install`. The `pnpm-lock.yaml` is the source of truth.

The `vendor/aeros-design-system` submodule is wired into `pnpm-workspace.yaml`, so `@aeros/react` and `@aeros/tokens` resolve via `workspace:*`. Do not change them to `file:` paths or to fixed versions.

# Design system

UI components and tokens come from `@aeros/react` (in the submodule). Always prefer DS alias classes (`bg-bg-surface`, `text-fg-primary`, `border-border-default`, `text-fg-muted`, etc.) over raw Tailwind colors or hex values. Reach for `@aeros/react` components (`Button`, `Card`, `Input`, …) before reinventing.

The logo is the woven A with the outlined "Aeros" wordmark. Always render it with `components/brand/Logo.tsx` (or the files in `public/brand/`) — never retype the wordmark in a font. It is monochrome: Ink on light grounds, Paper on dark grounds. The old `aeros-logo` (Nunito Sans) class is retired on this site.

# Brand palette

Brand kit, Nov 2026: monochrome — Ink `#0B0B0C` and Paper `#F5F5F2`, no accent colour. `app/globals.css` maps the design system's `ink` scale and alias tokens onto these for the website, and resolves the `royal` accent scale to Ink and Paper so nothing renders blue. Use DS alias classes rather than hex values, and don't add blue (Cobalt or Royal Blue) anywhere without explicit approval. Type is Inter, with IBM Plex Mono for data and captions.
