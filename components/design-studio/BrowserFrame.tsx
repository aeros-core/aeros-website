import Image from 'next/image'

type BrowserFrameProps = {
  src: string
  alt: string
  /** Pixel size of the source image, for layout without shift. */
  width?: number
  height?: number
  /** Address shown in the bar. */
  url?: string
  /** Dark chrome for use on Ink sections. */
  tone?: 'light' | 'dark'
  priority?: boolean
  sizes?: string
  className?: string
}

/**
 * A browser window around an app screenshot. Taken from the landing-page
 * mockup in components/landing/Hero.tsx, kept to three dots and a mono
 * address so the screenshot carries the page.
 */
export default function BrowserFrame({
  src,
  alt,
  width = 2400,
  height = 1500,
  url = 'design-studio.aeros-x.com',
  tone = 'light',
  priority = false,
  sizes = '(min-width: 1280px) 1152px, 100vw',
  className = '',
}: BrowserFrameProps) {
  const dark = tone === 'dark'
  return (
    <div
      className={`rounded-xl md:rounded-2xl overflow-hidden border ${
        dark
          ? 'border-white/15 bg-ink-800 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]'
          : 'border-border-default bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]'
      } ${className}`}
    >
      <div
        className={`flex items-center gap-1.5 px-3 md:px-4 py-2 md:py-2.5 border-b ${
          dark ? 'border-white/10 bg-white/[0.03]' : 'border-border-default bg-bg-subtle'
        }`}
      >
        <span className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${dark ? 'bg-white/15' : 'bg-border-default'}`} />
        <span className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${dark ? 'bg-white/15' : 'bg-border-default'}`} />
        <span className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${dark ? 'bg-white/15' : 'bg-border-default'}`} />
        <span
          className={`ml-2 md:ml-3 truncate text-[10px] md:text-[11px] font-mono ${
            dark ? 'text-white/40' : 'text-fg-muted/60'
          }`}
        >
          {url}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="block w-full h-auto"
      />
    </div>
  )
}
