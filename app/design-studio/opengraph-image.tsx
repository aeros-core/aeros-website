import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Aeros Design Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** The share card for /design-studio: Paper logo and product name on Ink, with a hairline grid. */
export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public/brand/aeros-logo-paper.svg'))
  const src = `data:image/svg+xml;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#0B0B0C',
          backgroundImage:
            'linear-gradient(rgba(245,245,242,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,242,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          color: '#F5F5F2',
        }}
      >
        <img src={src} alt="Aeros" width={295} height={80} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            Design Studio
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(245,245,242,0.6)' }}>
            Design it. Engineer it. Send it to the press.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
