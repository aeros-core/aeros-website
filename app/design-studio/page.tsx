import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import BrowserFrame from '@/components/design-studio/BrowserFrame'
import CapabilityTabs, { type Capability } from '@/components/design-studio/CapabilityTabs'
import Reveal from '@/components/design-studio/Reveal'
import { company } from '@/lib/company'
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  softwareApplicationJsonLd,
} from '@/lib/seo'

const PATH = '/design-studio'
const APP_URL = 'https://design-studio.aeros-x.com'
const ACCESS_URL = `mailto:${company.salesEmail}?subject=${encodeURIComponent(
  'Design Studio early access',
)}&body=${encodeURIComponent(
  'Hi Aeros,\n\nI would like early access to Design Studio.\n\nCompany:\nWhat I want to design:\n',
)}`
const IMG = '/products/design-studio'

const TITLE = 'Design Studio — Aeros'
const DESCRIPTION =
  'Aeros Design Studio is professional 2D and 3D CAD in your browser. Model parts, fold cartons, put artwork on cups, and export STEP, DXF, dielines and print-ready PDFs. Now in private beta.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: TITLE,
    description:
      'Design it, engineer it, send it to the press. Professional CAD in your browser, with an AI assistant that proposes and never overwrites.',
    type: 'website',
    url: absoluteUrl(PATH),
  },
}

const PROOF = [
  { value: 'Exact solids', label: 'A real CAD kernel, not a mesh' },
  { value: 'In the browser', label: 'Nothing to install' },
  { value: 'STEP · DXF · PDF', label: 'Open formats out' },
  { value: 'Press-ready', label: 'Bleed, dielines, spot inks' },
]

const FLOW = [
  {
    step: '01',
    name: 'Start from a template',
    body: 'Pick a cup die or a carton style. The geometry comes from real factory tooling, so the size is right before you touch it.',
  },
  {
    step: '02',
    name: 'Put your artwork on it',
    body: 'Place a logo, text and colour on the flat blank. See it wrap the cup or fold into the box in 3D, with print checks as you go.',
  },
  {
    step: '03',
    name: 'Engineer anything else',
    body: 'Underneath sits a full parametric modeller: sketches, solids, surfaces, sheet metal, assemblies and drawings.',
  },
]

const CAPABILITIES: Capability[] = [
  {
    key: 'sketch',
    label: 'Sketch',
    title: 'Sketches that know their constraints.',
    body: 'Draw, then pin it down. Dimensions take formulas from named parameters, and the panel tells you how many degrees of freedom are left.',
    points: [
      'Lines, rectangles, circles, arcs and splines',
      'Horizontal, vertical, parallel, tangent, equal and more',
      'Driving dimensions that accept parameter expressions',
      'Live drag with a degrees-of-freedom read-out',
      'Closed regions found automatically, even where curves cross',
    ],
    image: `${IMG}/sketch.webp`,
    alt: 'A dimensioned 80 by 50 mm sketch with two 6 mm radius circles and a degrees-of-freedom badge',
  },
  {
    key: 'solid',
    label: 'Solid',
    title: 'Parametric solids, rebuilt in milliseconds.',
    body: 'Every feature is in the tree and every number is a parameter. Change one and the part rebuilds on your machine, checked by the kernel.',
    points: [
      'Extrude, cut, revolve, sweep and loft',
      'Fillet, chamfer, shell and draft',
      'Plain, counterbore and countersink holes',
      'Linear and circular patterns, mirror and split',
      'Named configurations, materials and mass properties',
    ],
    image: `${IMG}/modeler.webp`,
    alt: 'The Solid workspace showing a mounting plate with a boss, its feature tree, parameters and mass properties',
  },
  {
    key: 'surface',
    label: 'Surface',
    title: 'Surfaces you can trust before you thicken them.',
    body: 'Build freeform shapes from curves, then read their quality with zebra stripes and draft analysis before they become a solid.',
    points: [
      'Extrude, revolve, sweep and loft surfaces',
      'Planar, offset, fill and boundary surfaces',
      'Trim, extend, knit, delete face and thicken',
      'Zebra-stripe and draft-angle analysis',
    ],
    image: `${IMG}/surface-zebra.webp`,
    alt: 'Zebra-stripe analysis on a mounting plate in the Surface workspace',
  },
  {
    key: 'sheet',
    label: 'Sheet metal',
    title: 'Bend it in 3D. Cut it flat.',
    body: 'Flanges, tabs and hems with a true flat pattern. Bend allowance comes from your bend radius and K-factor, not a guess.',
    points: [
      'Base flange, edge flanges, tabs and hems',
      'Cuts across bends',
      'Flat pattern with bend allowance and deduction',
      'K-factor presets for soft, mild and hard metals',
      'Flat pattern out as 1:1 DXF or SVG',
    ],
    image: `${IMG}/sheet-metal.webp`,
    alt: 'A sheet-metal bracket with one 90 degree flange and its bend allowance in the flat-pattern panel',
  },
  {
    key: 'assembly',
    label: 'Assemblies',
    title: 'Put saved parts together.',
    body: 'Place copies of your parts, mate their faces, and watch the solver count the freedom that is left.',
    points: [
      'Components are placed copies of saved parts',
      'Coincident, flush, distance, parallel and concentric mates',
      'A live degrees-of-freedom count',
      'Total mass properties for the assembly',
    ],
    image: `${IMG}/assembly.webp`,
    alt: 'An assembly of a mounting plate and a bent bracket joined by a flush mate',
  },
]

const PACKAGING = [
  {
    name: 'Fold the dieline',
    body: 'Creases, perforations and slits fold the flat blank into the real box, so you see the carton before a die is cut.',
  },
  {
    name: 'Carton templates',
    body: 'Tuck-end carton, tray and sleeve. Change length, width, height or board caliper and every panel follows.',
  },
  {
    name: 'Artwork that stays put',
    body: 'Floods, panels, text and images sit on their panel and follow it when the carton is resized. Bleed and safety distance are checked.',
  },
  {
    name: 'Files the die-maker wants',
    body: 'A die PDF with CutContour, Crease and Perforation spot colours, a print PDF with bleed, and a press-sheet layout.',
  },
]

const CUP_POINTS = [
  'Six TPC dies: 250, 350 and 450 ml, single and double wall',
  'A custom single-wall cup with its dimensions exposed',
  'Logo, text and background placed around and up the cup',
  'The flat die blank and the printed cup update together',
  'Brim capacity and board volume measured from the solid',
  'Download STEP, the die line as SVG, and a print PDF',
]

const DRAWING_POINTS = [
  'Exact hidden-line front, top, side and isometric views',
  'First- or third-angle projection on A4, A3 or A2',
  'Overall dimensions and hole callouts, placed for you',
  'Your own dimensions on top, and a filled-in title block',
  'Vector PDF, SVG, and DXF at 1:1',
]

const AI_POINTS = [
  {
    name: 'It works on a copy',
    body: 'The assistant builds on a working copy of your part. Nothing changes until you press Apply, and one Undo takes it all back.',
  },
  {
    name: 'The kernel checks it',
    body: 'Every step is rebuilt by the same geometry engine you use. It inspects bodies and looks at the 3D view to correct itself.',
  },
  {
    name: 'It cannot go further than that',
    body: 'It proposes. It cannot save, export, approve or delete. Those stay with you.',
  },
  {
    name: 'Same commands as you',
    body: 'Every action in the interface is a command the assistant can issue too, and outside agents can reach the same tools over MCP.',
  },
]

const EXPORTS = [
  { format: 'STEP', use: 'Exact solids for any CAD or CAM system' },
  { format: 'DXF', use: 'Flat patterns and drawings at 1:1 for laser and cutting' },
  { format: 'SVG', use: 'Dielines, flat patterns and drawing sheets' },
  { format: 'Drawing PDF', use: 'Vector drawings with a title block' },
  { format: 'Print PDF', use: 'Bleed, type as outlines, identical bytes on every run' },
  { format: 'Die PDF', use: 'CutContour, Crease and Perforation spot colours' },
]

const FAQS = [
  {
    q: 'What is Aeros Design Studio?',
    a: 'A 2D and 3D parametric CAD tool that runs in your browser. It models parts, sheet metal and assemblies, folds cartons from dielines, puts artwork on paper cups, and exports files that go straight to a press, a die-maker or a laser.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. Design Studio runs in a modern browser. The geometry engine runs on your own machine through WebAssembly and draws with WebGPU, falling back to WebGL2 where WebGPU is not available. Your designs are saved to your Aeros account.',
  },
  {
    q: 'Who is it for?',
    a: 'Brands designing their own cups and cartons, sellers preparing artwork and specs for production, and engineers and designers who need professional CAD without a desktop licence.',
  },
  {
    q: 'Is it only for packaging?',
    a: 'No. Cups and cartons are the first templates built on top of a general modeller. The same workspace handles solid and surface modelling, sheet metal, assemblies and engineering drawings.',
  },
  {
    q: 'Which file formats can I export?',
    a: 'STEP for solids; DXF and SVG for flat patterns, dielines and drawings; vector PDF for drawings; print PDFs with bleed for cups and cartons; and die PDFs with CutContour, Crease and Perforation spot colours.',
  },
  {
    q: 'What does the AI assistant do?',
    a: 'Describe a part or a change in plain words. The assistant builds it on a working copy, checks it with the geometry engine and shows you a proposal. You apply it or discard it. It cannot save, export or delete anything.',
  },
  {
    q: 'How do I get access?',
    a: `Design Studio is in private beta. Email ${company.salesEmail} to request access. If your organisation already has it, sign in at design-studio.aeros-x.com with your Aeros account.`,
  },
]

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div
      className={`text-[10px] font-mono uppercase tracking-widest mb-4 ${
        dark ? 'text-white/50' : 'text-fg-muted/60'
      }`}
    >
      {children}
    </div>
  )
}

function PrimaryCta({ size = 'md', dark = false }: { size?: 'md' | 'lg'; dark?: boolean }) {
  const pad = size === 'lg' ? 'px-8 py-4' : 'px-7 py-3.5'
  return (
    <a
      href={ACCESS_URL}
      className={`${pad} rounded-full text-sm font-medium transition-colors ${
        dark ? 'bg-white text-ink-900 hover:bg-ink-50' : 'bg-ink-900 text-white hover:bg-ink-800'
      }`}
    >
      Request early access
    </a>
  )
}

function SignInCta({ size = 'md', dark = false }: { size?: 'md' | 'lg'; dark?: boolean }) {
  const pad = size === 'lg' ? 'px-8 py-4' : 'px-7 py-3.5'
  return (
    <a
      href={APP_URL}
      className={`${pad} rounded-full border text-sm font-medium transition-colors inline-flex items-center gap-2 ${
        dark
          ? 'border-white/20 text-white hover:bg-white/10'
          : 'border-border-default text-fg-primary hover:bg-bg-subtle'
      }`}
    >
      Sign in <span aria-hidden>→</span>
    </a>
  )
}

export default function DesignStudioPage() {
  const jsonLd = [
    softwareApplicationJsonLd({
      name: 'Aeros Design Studio',
      description: DESCRIPTION,
      path: PATH,
      appUrl: APP_URL,
      category: 'DesignApplication',
      image: `${IMG}/modeler.webp`,
    }),
    faqJsonLd(FAQS),
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Design Studio', path: PATH },
    ]),
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      {/* Hero */}
      <section className="relative pt-36 md:pt-40 pb-20 md:pb-28 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default bg-white mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-ink-900" />
            <span className="text-xs text-fg-muted font-mono uppercase tracking-wider">
              Aeros Design Studio · Private beta
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,5.5rem)] text-balance">
            <span className="whitespace-nowrap">Design it.</span>{' '}
            <span className="whitespace-nowrap">Engineer it.</span>
            <br />
            <span className="text-fg-muted/60">Send it to the press.</span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-2xl mx-auto leading-relaxed">
            Professional 2D and 3D CAD that runs in your browser. Model the part,
            fold the carton, wrap the cup, and export files a factory can use the
            same day.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrimaryCta />
            <SignInCta />
          </div>
        </div>

        <Reveal className="relative max-w-6xl mx-auto mt-16 md:mt-20">
          <BrowserFrame
            src={`${IMG}/modeler.webp`}
            alt="Aeros Design Studio: a parametric mounting plate in the Solid workspace, with the feature tree, parameters and mass properties"
            priority
          />
        </Reveal>
      </section>

      {/* Proof strip */}
      <section className="px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 border-y border-border-default">
          {PROOF.map((p, i) => (
            <div
              key={p.value}
              className={`py-8 md:py-10 px-4 md:px-6 ${
                i % 2 === 1 ? 'border-l border-border-default' : ''
              } ${i >= 2 ? 'border-t md:border-t-0 border-border-default' : ''} ${
                i === 2 ? 'md:border-l' : ''
              }`}
            >
              <div className="text-lg md:text-2xl font-bold text-fg-primary leading-tight">
                {p.value}
              </div>
              <div className="mt-2 text-[10px] md:text-[11px] font-mono uppercase tracking-wider md:tracking-widest text-fg-muted/60 leading-snug">
                {p.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-28 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-16">
            <Eyebrow>/ one editor</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Start simple. Go as deep as the job needs.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              The same workspace serves a café owner putting a logo on a cup and
              an engineer drawing a bracket. You only see the depth you use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {FLOW.map((f, i) => (
              <Reveal key={f.step} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border-default bg-white p-7 md:p-8">
                  <div className="text-xs font-mono text-fg-muted/60">{f.step}</div>
                  <div className="mt-8 text-xl font-bold text-fg-primary">{f.name}</div>
                  <p className="mt-3 text-sm text-fg-muted leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modelling */}
      <section
        id="modelling"
        className="py-28 md:py-32 px-6 bg-bg-subtle border-t border-b border-border-default"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow>/ modelling</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              A full modeller, not a configurator.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Sketch, solid, surface and sheet-metal workspaces, assemblies on
              top. Every feature lives in a tree you can roll back, suppress and
              edit.
            </p>
          </div>
          <CapabilityTabs items={CAPABILITIES} />
        </div>
      </section>

      {/* Packaging */}
      <section id="packaging" className="py-28 md:py-32 px-6 bg-ink-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-14 md:mb-16">
            <div className="lg:col-span-7">
              <Eyebrow dark>/ paper and board</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                From flat blank to folded box.
              </h2>
              <p className="mt-5 text-white/60 text-lg max-w-xl">
                Draw the dieline once. Design Studio folds it along its creases,
                lays artwork on the printed side, and writes the files your
                die-maker and printer ask for.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Image
                src={`${IMG}/render-carton.webp`}
                alt="A white carton blank lying beside the folded tuck-end box"
                width={2000}
                height={1493}
                sizes="(min-width: 1024px) 440px, 100vw"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Reveal>
              <BrowserFrame
                tone="dark"
                src={`${IMG}/carton-flat.webp`}
                alt="A tuck-end carton blank in the flat view with a kraft flood, two logos and the words Pour-over kit"
                sizes="(min-width: 768px) 560px, 100vw"
              />
              <div className="mt-3 text-[11px] font-mono uppercase tracking-widest text-white/40">
                Artwork on the flat blank
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <BrowserFrame
                tone="dark"
                src={`${IMG}/carton-folded.webp`}
                alt="The same carton folded in 3D, printed in kraft with the Aeros logo"
                sizes="(min-width: 768px) 560px, 100vw"
              />
              <div className="mt-3 text-[11px] font-mono uppercase tracking-widest text-white/40">
                Folded along its creases
              </div>
            </Reveal>
          </div>

          <div className="mt-14 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PACKAGING.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="font-semibold">{p.name}</div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cup studio */}
      <section id="cups" className="py-28 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>/ cup studio</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
                Your logo on a real cup die.
              </h2>
              <p className="mt-5 text-fg-muted text-lg">
                The cup shapes come from the tooling Aeros prints on. Place your
                artwork, check it on the flat blank and the printed cup at once,
                and download a file the press can run.
              </p>
              <ul className="mt-8 space-y-3">
                {CUP_POINTS.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-fg-primary leading-relaxed">
                    <span aria-hidden className="mt-2 w-1 h-1 rounded-full bg-ink-900 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Reveal className="lg:col-span-7 lg:pt-14">
              <BrowserFrame
                src={`${IMG}/cup-studio.webp`}
                alt="Cup studio: a 350 ml double-wall cup printed black with the Aeros logo and the words Brewed in Bengaluru, its die blank and measured brim capacity"
                sizes="(min-width: 1024px) 680px, 100vw"
              />
              <div className="mt-4 grid sm:grid-cols-5 gap-4">
                <Image
                  src={`${IMG}/render-cup.webp`}
                  alt="A plain black paper cup casting a long shadow on paper"
                  width={2000}
                  height={1493}
                  sizes="(min-width: 1024px) 400px, 60vw"
                  className="sm:col-span-3 w-full h-full object-cover rounded-2xl"
                />
                <div className="sm:col-span-2 rounded-2xl bg-ink-900 text-white p-5 md:p-6 flex flex-col justify-between gap-8">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                    Measured from the solid
                  </div>
                  <div>
                    <div className="text-3xl md:text-5xl font-bold tracking-tight">419 ml</div>
                    <div className="mt-2 text-xs md:text-sm text-white/60 leading-snug">
                      Brim capacity of the 350 ml double-wall die, read off the
                      real geometry.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Drawings */}
      <section
        id="drawings"
        className="py-28 md:py-32 px-6 bg-bg-subtle border-t border-b border-border-default"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <Reveal className="lg:col-span-7 order-2 lg:order-1">
              <BrowserFrame
                src={`${IMG}/drawing.webp`}
                alt="An A3 engineering drawing of the mounting plate with front, top, side and isometric views, dimensions and a title block"
                sizes="(min-width: 1024px) 680px, 100vw"
              />
            </Reveal>
            <div className="lg:col-span-5 order-1 lg:order-2 lg:pt-6">
              <Eyebrow>/ drawings</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
                The drawing follows the part.
              </h2>
              <p className="mt-5 text-fg-muted text-lg">
                Drawings are generated from the model, not traced over it.
                Change a parameter and every view, dimension and callout moves
                with it.
              </p>
              <ul className="mt-8 space-y-3">
                {DRAWING_POINTS.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-fg-primary leading-relaxed">
                    <span aria-hidden className="mt-2 w-1 h-1 rounded-full bg-ink-900 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI assistant */}
      <section id="assistant" className="py-28 md:py-32 px-6 bg-ink-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-16">
            <Eyebrow dark>/ assistant</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              It proposes. You apply.
            </h2>
            <p className="mt-5 text-white/60 text-lg">
              Describe a part or a change in plain words. The assistant plans
              it, builds it with the same tools you have, and puts it on screen
              as a proposal.
            </p>
          </div>

          <Reveal>
            <BrowserFrame
              tone="dark"
              src={`${IMG}/assistant-dark.webp`}
              alt="The Assistant panel listing each step it took to build a mounting plate, with the proposal on screen and an Apply button"
            />
          </Reveal>

          <div className="mt-14 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_POINTS.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="font-semibold">{p.name}</div>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-28 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-16">
            <Eyebrow>/ how it runs</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Cloud document. Local compute.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Your design lives in your Aeros account. The geometry engine runs
              on your own machine, so a rebuild takes milliseconds and never
              waits on a server.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-stretch">
            <div className="rounded-2xl border border-border-default p-7 md:p-8 bg-white">
              <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60">
                Your browser
              </div>
              <div className="mt-6 text-xl font-bold text-fg-primary">The geometry engine</div>
              <ul className="mt-5 space-y-2.5 text-sm text-fg-muted">
                <li>An exact B-rep CAD kernel, compiled to WebAssembly</li>
                <li>A constraint solver for sketches</li>
                <li>A WebGPU viewport, with WebGL2 as a fallback</li>
                <li>Measurements and mass properties from the exact solid</li>
              </ul>
            </div>

            <div className="flex md:flex-col items-center justify-center gap-3 md:px-8 py-2 md:py-0 text-fg-muted/60">
              <div className="flex md:flex-col items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest">commands</span>
                <span aria-hidden className="md:hidden">↓</span>
                <svg aria-hidden className="hidden md:block w-16 h-3" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h60m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="flex md:flex-col-reverse items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest">document</span>
                <span aria-hidden className="md:hidden">↑</span>
                <svg aria-hidden className="hidden md:block w-16 h-3" viewBox="0 0 64 12" fill="none">
                  <path d="M64 6H4m0 0 5-5M4 6l5 5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-900 p-7 md:p-8 bg-ink-900 text-white">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                Aeros cloud
              </div>
              <div className="mt-6 text-xl font-bold">The design document</div>
              <ul className="mt-5 space-y-2.5 text-sm text-white/60">
                <li>Features, parameters and configurations</li>
                <li>Undo and redo history, saved with the part</li>
                <li>Your saved parts, assemblies and cartons</li>
                <li>Signed in with your Aeros account</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exports */}
      <section
        id="exports"
        className="py-28 md:py-32 px-6 bg-bg-subtle border-t border-b border-border-default"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-16">
            <Eyebrow>/ files out</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Open formats. No lock-in.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              What comes out of Design Studio opens in the tools your suppliers
              already run.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-border-default bg-border-default">
            {EXPORTS.map((e) => (
              <div key={e.format} className="bg-white p-7">
                <div className="font-mono text-sm font-semibold text-fg-primary">{e.format}</div>
                <p className="mt-2 text-sm text-fg-muted leading-relaxed">{e.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-2xl mb-14 md:mb-16">
            <Eyebrow>/ faq</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Frequently asked questions.
            </h2>
          </div>
          <div>
            {FAQS.map((f) => (
              <div key={f.q} className="py-6 border-t border-border-default last:border-b">
                <div className="font-semibold text-fg-primary">{f.q}</div>
                <p className="mt-2 text-fg-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-36 md:py-40 px-6 bg-white border-t border-border-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            Start designing.
            <br />
            <span className="text-fg-muted/60">Ship the file.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            Design Studio is in private beta. Tell us what you want to design
            and we will set up your organisation.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrimaryCta size="lg" />
            <SignInCta size="lg" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
