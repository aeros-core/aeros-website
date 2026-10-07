import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google'
import ConsentBanner from '@/components/analytics/ConsentBanner'
import MetaPixel from '@/components/analytics/MetaPixel'
import '@aeros/react/styles.css'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aeros — Run Everything',
  description: 'One operating system for your entire business. Marketplace, operations, AI, and hardware — unified.',
  keywords: ['business operating system', 'marketplace', 'factory OS', 'AI operations', 'business platform'],
  openGraph: {
    title: 'Aeros — Run Everything',
    description: 'One operating system for your entire business.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`} data-theme="light">
      <body className="bg-bg-canvas text-fg-primary font-sans antialiased overflow-x-hidden">
        <ConsentBanner />
        {children}
        {/* Reads the search params, so it needs a Suspense boundary to keep pages static. */}
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  )
}
