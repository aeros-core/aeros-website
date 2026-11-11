import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Aeros'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** The share card: the Paper logo on an Ink ground, straight from the brand kit. */
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
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0B0C',
        }}
      >
        <img src={src} alt="Aeros" width={560} height={152} />
      </div>
    ),
    size,
  )
}
