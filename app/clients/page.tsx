import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Clients — Aeros',
  description:
    'The brands sealing cups, tubs, and meal boxes with AeroSeal. Coffee houses, QSRs, cloud kitchens, quick commerce, ice cream, chai, and boba — across India and beyond.',
  openGraph: {
    title: 'Clients — Aeros',
    description:
      'The brands sealing with AeroSeal — coffee, QSR, cloud kitchens, quick commerce, ice cream, chai, and boba.',
    type: 'website',
  },
}

type Brand = { name: string; logo: string }
type ClientGroup = {
  eyebrow: string
  title: string
  description: string
  brands: Brand[]
}

const groups: ClientGroup[] = [
  {
    eyebrow: '/ coffee',
    title: 'Coffee houses.',
    description:
      'Cold brew, iced lattes, frappés — sealed clean for grab-and-go and aggregator delivery.',
    brands: [
      { name: 'Starbucks', logo: 'Starbucks.png' },
      { name: 'Tim Hortons', logo: 'Tim-Hortons.png' },
      { name: 'Cafe Coffee Day', logo: 'Cafe-coffee-day.png' },
      { name: 'Blue Tokai', logo: 'Blue-Tokai.png' },
      { name: 'Third Wave Coffee', logo: 'Third-Wave-Coffee.png' },
      { name: 'Chaayos', logo: 'Chaayos.png' },
      { name: 'Araku', logo: 'Araku.png' },
      { name: 'Maverick & Farmer', logo: 'Maverick-farmer-coffee.png' },
      { name: 'Pret', logo: 'Pret.png' },
      { name: 'Roastery Coffee', logo: 'Roastery-Coffee.png' },
      { name: 'Boojee', logo: 'Boojee.png' },
      { name: 'Bokka Coffee', logo: 'Bokka-Coffee.png' },
      { name: 'BeCafe', logo: 'BeCafe.png' },
      { name: 'Coffee Culture', logo: 'Coffee-Culture.png' },
      { name: 'Coffee Sutra', logo: 'Coffee-Sutra.png' },
      { name: 'Double Shot', logo: 'Double-Shot.png' },
      { name: 'Kiosk', logo: 'Kiosk.png' },
      { name: 'Wildbean', logo: 'Wildbean.png' },
      { name: 'Roast', logo: 'Roast.png' },
      { name: 'Sabko', logo: 'Sabko.png' },
      { name: 'Sealed with Love', logo: 'Sealed-with-love.png' },
      { name: 'The Byke', logo: 'The-Byke.png' },
      { name: 'Chelvis', logo: 'Chelvis.png' },
      { name: 'BCC', logo: 'BCC.png' },
    ],
  },
  {
    eyebrow: '/ qsr',
    title: 'Quick service.',
    description:
      'Soft drinks, iced teas, lemonades — leak-proof from counter to drive-thru window.',
    brands: [
      { name: "McDonald's", logo: 'MacD.png' },
      { name: 'Subway', logo: 'Subway.png' },
      { name: 'Haldirams', logo: 'Haldirams.png' },
      { name: '7-Eleven', logo: '7-Elevens.png' },
      { name: 'Beyond Burg', logo: 'Beyond-Burg.png' },
      { name: 'Biggies Burger', logo: 'Biggies-Burger.png' },
      { name: 'Good Flippin Burgers', logo: 'Good-Flippin-Burgers.png' },
      { name: 'Belgian Waffle', logo: 'Belgian-waffle.png' },
    ],
  },
  {
    eyebrow: '/ restaurants & cloud kitchens',
    title: 'Restaurants & cloud kitchens.',
    description:
      'Dal, curry, dessert, and broth — sealed at the pass so it arrives the way it left.',
    brands: [
      { name: 'Bombay Sweet Shop', logo: 'Bombay-Sweet-Shop.png' },
      { name: 'O Pedro', logo: 'O-Pedro.png' },
      { name: 'Aubree', logo: 'Aubree.png' },
      { name: 'Nik Bakers', logo: 'Nik-Bakers.png' },
      { name: 'Brick Oven', logo: 'Brick-Oven.png' },
      { name: 'China Bistro', logo: 'China-Bistro.png' },
      { name: 'Zepto Cafe', logo: 'Zepto-Cafe.png' },
      { name: 'Poetry', logo: 'Poetry.png' },
      { name: 'Prasad Food Divine', logo: 'Prasad-Food-Divine.png' },
      { name: 'Smokin Curries', logo: 'Smokin-Curries.png' },
      { name: 'The Coffee Bean', logo: 'The-coffee-bean.png' },
      { name: 'Yuki with Love', logo: 'Yuki-with-love.png' },
    ],
  },
  {
    eyebrow: '/ quick commerce',
    title: 'Quick commerce.',
    description:
      'Ten-minute groceries, ready meals, and fresh drinks — sealed for the dark store and the rider bag.',
    brands: [
      { name: 'Blinkit', logo: 'blinkit.png' },
      { name: 'Zepto', logo: 'zepto.png' },
      { name: 'Swiggy', logo: 'swiggy.png' },
      { name: 'Swish', logo: 'swish.png' },
    ],
  },
  {
    eyebrow: '/ ice cream & dessert',
    title: 'Ice cream & dessert.',
    description:
      'Falooda, gelato, sundaes — tub sealing that survives the freezer line and the bag.',
    brands: [
      { name: 'Gianis', logo: 'Gianis.png' },
      { name: 'Milano', logo: 'Milano.png' },
      { name: 'Baba Falooda', logo: 'Baba-Falooda.png' },
      { name: 'Cold Love', logo: 'Cold-Love.png' },
      { name: 'Bono', logo: 'Bono.png' },
      { name: 'UK14', logo: 'Uk14.png' },
    ],
  },
  {
    eyebrow: '/ chai & boba',
    title: 'Chai houses & boba bars.',
    description:
      'PET U-Shape cold cups with pearls, popping boba, and kulfi-chai — sealed at the shaker handoff.',
    brands: [
      { name: 'Chaayos', logo: 'Chaayos.png' },
      { name: 'Kulfichai', logo: 'Kulfichai.png' },
      { name: 'Cha Cha Chai', logo: 'Cha-Cha-Chai.png' },
      { name: 'BARAKO', logo: 'BARAKO.png' },
      { name: 'BUB-IT', logo: 'BUB-IT.png' },
      { name: 'Bobakat', logo: 'Bobakat.png' },
      { name: 'My Tea Chapel', logo: 'My-Tea-Chapel.png' },
      { name: 'Got Tea', logo: 'Got-Tea.png' },
    ],
  },
]

const stats: { value: string; label: string }[] = [
  { value: '7,281', label: 'AeroSeal machines built' },
  { value: '56.92 M', label: 'Cups & tubs sealed' },
  { value: '15+', label: 'Countries served' },
]

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default mb-10">
            <span className="w-1 h-1 rounded-full bg-royal-600" />
            <span className="text-xs text-fg-muted font-mono uppercase tracking-wider">
              Clients · Sealing with AeroSeal
            </span>
          </div>

          <h1 className="font-bold text-fg-primary leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.75rem)]">
            The brands<br />
            <span className="text-fg-muted/60">you already know.</span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            From the first Starbucks cold brew of the day to the last
            ten-minute Zepto order at night — these are the operators sealing
            with AeroSeal.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products/aeros-select/sealer-machines"
              className="px-7 py-3.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              See AeroSeal
            </Link>
            <a
              href="mailto:hello@aeros.io?subject=AeroSeal%20for%20our%20stores"
              className="px-7 py-3.5 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-t border-b border-border-default bg-bg-subtle">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-4xl md:text-5xl font-bold text-fg-primary tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-fg-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Groups */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
            <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
              / who we seal for
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-fg-primary leading-tight">
              Across the menu, across the city.
            </h2>
            <p className="mt-5 text-fg-muted text-lg">
              Six segments. One sealing platform.
            </p>
          </div>

          <div className="space-y-24">
            {groups.map((group) => (
              <div key={group.title}>
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-2">
                      {group.eyebrow}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-fg-primary leading-tight">
                      {group.title}
                    </h3>
                  </div>
                  <p className="text-sm text-fg-muted max-w-md">
                    {group.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border-default border border-border-default rounded-2xl overflow-hidden">
                  {group.brands.map((brand) => (
                    <li
                      key={brand.name}
                      className="group relative bg-white aspect-square flex flex-col items-center justify-center p-5 transition-colors hover:bg-bg-subtle"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={`/clients/${brand.logo}`}
                          alt={`${brand.name} logo`}
                          width={200}
                          height={200}
                          className="max-h-[70%] max-w-[80%] w-auto h-auto object-contain transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                        />
                      </div>
                      <span className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-mono uppercase tracking-widest text-fg-muted/0 group-hover:text-fg-muted/60 transition-colors">
                        {brand.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet note on logos */}
      <section className="border-t border-border-default bg-bg-subtle">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <p className="text-xs text-fg-muted/70 font-mono uppercase tracking-widest">
            All brand names and logos are property of their respective owners.
            Listed as operators of AeroSeal equipment.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-white border-t border-border-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-fg-primary leading-[0.95] tracking-tight">
            Seal like<br />
            <span className="text-fg-muted/60">they do.</span>
          </h2>
          <p className="mt-8 text-fg-muted text-lg max-w-lg mx-auto">
            One manual countertop machine. Precut foils. The same workflow as
            the brands above — at the same intro price.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products/aeros-select/sealer-machines"
              className="px-8 py-4 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors"
            >
              See AeroSeal V3
            </Link>
            <a
              href="mailto:hello@aeros.io?subject=Order%20an%20AeroSeal"
              className="px-8 py-4 rounded-full border border-border-default text-fg-primary text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              Order one for your store
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
