# aeros-website

Scope: this repo. Workspace context (brand, design-system rules, package-manager defaults) lives in @../AGENTS.md and @../memory/.
Last updated: 2026-04-30

## Purpose

The Aeros marketing site at `aeros-x.com`. Next.js 16 + React 19, consuming `@aeros/react` and `@aeros/tokens` from the `vendor/aeros-design-system` submodule via pnpm `workspace:*`.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind v4 · framer-motion · lucide-react · pnpm.

Remote: github.com/aeros-main/aeros-website

## Important: This is NOT the Next.js you know

Next 16 has breaking changes — APIs, conventions, and file structure may differ from training-data Next.js. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Architecture

```
app/             # Next.js app router
components/      # local components (lift to @aeros/react if reusable)
vendor/aeros-design-system   # submodule — see @../memory/design-system.md
public/          # static assets
```

The `predev` / `prebuild` hooks run `pnpm ds:build` — tokens build before React, then the site builds against the latest DS output. Don't try to build the site without building tokens first.

## Runbook

```
pnpm install                 # also pulls submodule deps via workspace
pnpm ds:build                # tokens + react (auto-runs before dev/build)
pnpm dev                     # next dev
pnpm build                   # next build
pnpm start                   # next start
pnpm lint                    # eslint
```

Submodule maintenance:

```
git submodule update --remote vendor/aeros-design-system
pnpm install
pnpm ds:build
```

## Conventions specific to this repo

- pnpm only (workspace default). Never `npm install`.
- `@aeros/react` / `@aeros/tokens` deps stay `workspace:*` — never `file:` or fixed versions (they resolve from the submodule).
- DS alias classes (`bg-bg-surface`, `text-fg-primary`, …) over raw Tailwind colors / hex.
- Wordmark "Aeros" → `aeros-logo` class. Royal Blue `#2347D9` only in `Badge` / `Tag` / `Alert` blue variants.
- Heavy DS-rule details: @../memory/design-system.md and @../memory/brand.md.

## Data / external deps

No backend (this is the marketing site). Forms / contact submissions, when added, would go through `aeros-backend`.

## Do NOT

- **Do NOT switch from pnpm to npm or yarn.**
- **Do NOT change `@aeros/react` / `@aeros/tokens` deps to `file:` paths or fixed versions.**
- **Do NOT introduce raw hex colors or Royal Blue outside the approved DS variants.**
- **Do NOT bypass `pnpm ds:build`** — the site builds against tokens that don't exist until that runs.

## Playbooks

Repo-specific procedures live in `memory/playbooks/` (none yet). Workspace-wide procedures: @../memory/playbooks/.

## Open ADRs

(none yet)
