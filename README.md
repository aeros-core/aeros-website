# aeros-website

The Aeros marketing site (aeros-x.com). Next.js 16 + `@aeros/react` design system.

## Stack

- **Next.js 16** (Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **`@aeros/react` + `@aeros/tokens`** — design system, vendored as a git submodule under `vendor/aeros-design-system` and linked into the pnpm workspace.

## Prerequisites

- **Node.js ≥ 20.9** (recommended: 24.x — install via `nvm install 24`)
- **pnpm ≥ 9** (`npm i -g pnpm` or via [corepack](https://nodejs.org/api/corepack.html))

## First-time setup

```bash
git clone --recurse-submodules https://github.com/aeros-core/aeros-website.git
cd aeros-website
pnpm install
```

If you cloned without `--recurse-submodules`:

```bash
git submodule update --init --recursive
pnpm install
```

`pnpm install` automatically links `@aeros/react` and `@aeros/tokens` from the vendored submodule via the workspace. The first build will compile their `dist/` outputs (handled by the `prebuild` / `predev` hooks).

## Develop

```bash
pnpm dev
```

Opens at [http://localhost:3000](http://localhost:3000). The `predev` hook builds the design system once on startup; if you change DS source, run `pnpm ds:build` to rebuild.

## Build

```bash
pnpm build
```

Runs `pnpm ds:build` first, then `next build`. Output is fully static.

## Lint

```bash
pnpm lint
```

## Working on the design system

The DS lives in `vendor/aeros-design-system` as a submodule pinned to a specific commit. To change a DS component:

```bash
cd vendor/aeros-design-system
git checkout -b my-fix
# … make changes …
git commit -am "fix: …"
git push origin my-fix
```

Then back in the website root:

```bash
cd ../..
git add vendor/aeros-design-system
git commit -m "chore: bump design system to <sha>"
```

`pnpm install` will pick up the new commit. The `predev` / `prebuild` hooks rebuild the DS dist automatically.

## Project layout

```
app/                          Next.js app router
  layout.tsx                  Imports @aeros/react/styles.css + globals.css
  page.tsx                    Landing page composition
  globals.css                 Site-only utilities (.bg-grid, scrollbar)
components/landing/           Hero, Navbar, Footer, etc. (use DS alias classes)
vendor/aeros-design-system/   Submodule (pinned commit)
  packages/tokens/            @aeros/tokens — source of truth
  packages/react/             @aeros/react — components
pnpm-workspace.yaml           Workspace config (root + DS packages)
```

## Deploy on Vercel

Vercel auto-detects pnpm via `pnpm-lock.yaml`. Recommended settings:

- **Install Command:** `pnpm install --frozen-lockfile`
- **Build Command:** `pnpm build` (default — `prebuild` runs `ds:build` automatically)
- **Output Directory:** `.next` (default)

> Make sure Vercel checks out submodules. Project Settings → Git → "Include source files outside of the Root Directory in the Build Step" should be on, and set the install command above.
