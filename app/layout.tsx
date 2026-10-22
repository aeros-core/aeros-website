import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SITE_URL, SITE_NAME, organizationJsonLd } from '@/lib/seo'
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

const SITE_TITLE = 'Aeros — B2B Packaging for Indian Food Service'
const SITE_DESCRIPTION =
  'Paper cups, bagasse tableware, compostable bags, PET cold cups, and cup sealing machines — stocked, printed, and delivered across India by Aeros.'

export const metadata: Metadata = {
  // Without metadataBase, relative OG images and canonicals resolve against
  // localhost in production. Everything else here depends on it.
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'packaging supplier india',
    'paper cups manufacturer',
    'bagasse tableware',
    'compostable bags',
    'PET cold cups',
    'cup sealing machine',
    'food packaging mumbai',
    'B2B packaging marketplace',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
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
