import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { type LegalSection } from '@/components/legal/LegalPage'
import CookieSettingsButton from '@/components/analytics/CookieSettingsButton'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Cookie Policy — Aeros',
  description: `The cookies and similar technologies ${company.legalName} (trading as ${company.brand}) uses on aeros-x.com, what each one does, and how to change your choice.`,
}

const inlineLink = 'text-fg-primary underline hover:text-fg-muted transition-colors'

const sections: LegalSection[] = [
  {
    title: '1. What Cookies Are',
    content: [
      {
        heading: 'Cookies and similar technologies',
        body: 'Cookies are small text files that a website stores in your browser. Similar technologies include local storage and session storage, which let a website keep small pieces of information in your browser, and pixels, which are small pieces of code that report a visit or an action to another service. In this policy, "cookies" covers all of them.',
      },
    ],
  },
  {
    title: '2. Essential Cookies',
    content: [
      {
        heading: 'Always on',
        body: 'These are needed for the site to work or to remember a choice you have made. None of them is used for advertising, and they cannot be switched off.',
        bullets: [
          'aeros_tracking_consent (local storage, aeros-x.com): remembers whether you allowed or declined advertising and measurement cookies. Kept until you change your choice or clear your browser data.',
          'aeros_anon_id (local storage, aeros-x.com): a random identifier sent with your cookie choice so that we can keep a record of the choice you made. It is not shared with Meta. Kept until you clear your browser data.',
          'aeros:nra2026:exhibitors (local storage) and aeros:nra2026:owner (session storage): used only on our trade-show lead-capture page, to keep the entries made on that device. Nothing on that page is sent to us or to anyone else automatically, and Meta tracking is switched off on our trade-show pages.',
        ],
      },
    ],
  },
  {
    title: '3. Advertising and Measurement Cookies',
    content: [
      {
        heading: 'The Meta Pixel',
        body: 'We use the Meta Pixel, provided by Meta Platforms, Inc. and Meta Platforms Ireland Limited ("Meta"), to measure how well our ads on Facebook, Instagram and WhatsApp work and to show our ads to people likely to be interested in Aeros. When it is active, the pixel tells Meta which pages you view and when you tap one of our WhatsApp, email or phone links or submit our partner application, together with your IP address, browser details and the cookies below. If you type your email address or phone number into a form on this site, the pixel may also send them to Meta in hashed (SHA-256) form.',
        bullets: [
          '_fbp (cookie, set by the Meta Pixel on aeros-x.com): identifies your browser to Meta, so that visits and actions can be linked to our ads. Expires 90 days after it was last set.',
          '_fbc (cookie, set by the Meta Pixel on aeros-x.com): stores the ad-click identifier when you arrive from one of our Meta ads, so that the visit can be credited to that ad. Expires 90 days after it was last set.',
        ],
      },
      {
        heading: 'Shared with our marketplace',
        body: 'These cookies are set on the aeros-x.com domain, so our marketplace at app.aeros-x.com can read them too. That lets Meta connect a click on one of our ads with a later order on the marketplace. When you follow a link from this site to the marketplace, we also pass along the campaign parameters (such as utm_source and fbclid) that were in the address you arrived with.',
      },
      {
        heading: 'Server-side events',
        body: "When you submit our partner application and tracking is allowed, we also send the same Lead event to Meta from our server, using Meta's Conversions API, so that it is counted even if your browser blocks the pixel. It includes your email address and phone number in hashed (SHA-256) form, your IP address and browser user agent, and the _fbp and _fbc values. A shared event identifier lets Meta count the browser and server copies only once. We never send your EIN or the rest of your application to Meta.",
      },
      {
        heading: "Meta's own cookies",
        body: "If you are logged in to Facebook or Instagram in the same browser, Meta may also use cookies on its own domains. Those are covered by Meta's cookie policy, not this one.",
      },
    ],
  },
  {
    title: '4. Your Choices',
    content: [
      {
        heading: 'The cookie banner',
        body: "The first time you visit, a banner explains these cookies. If you visit from Europe (which we infer from your device's time zone), the Meta Pixel stays off unless you select Accept. Elsewhere it is on by default, and you can select Opt out.",
      },
      {
        heading: 'Changing your choice',
        body: (
          <>
            Use <CookieSettingsButton className={`${inlineLink} cursor-pointer`} />, also at the
            bottom of every page, to change your choice at any time. When you decline or opt out,
            the pixel stops sending information to Meta straight away and we stop sending
            server-side events from this site. Cookies that were already set stay in your browser
            until they expire or you delete them.
          </>
        ),
      },
      {
        heading: 'Global Privacy Control',
        body: "If your browser sends a Global Privacy Control (GPC) signal, we treat it as a request to limit how your information is used for advertising, and switch on Meta's Limited Data Use mode for the events we send.",
      },
      {
        heading: 'Browser and Meta settings',
        body: 'You can block or delete cookies in your browser settings. The site works without them, but your cookie choice will be forgotten and the banner will appear again. You can also control how Meta uses information from other businesses to show you ads in your Facebook or Instagram settings.',
      },
      {
        heading: 'Which sites your choice covers',
        body: 'Your choice is stored in this browser and applies to aeros-x.com. The marketplace at app.aeros-x.com asks for its own choice.',
      },
    ],
  },
  {
    title: '5. Changes to This Policy',
    content: [
      {
        heading: 'Updates',
        body: 'We update this policy when the cookies we use change, and revise the "Last updated" date above.',
      },
    ],
  },
  {
    title: '6. Contact Us',
    content: [
      {
        heading: 'Questions and requests',
        body: (
          <>
            For questions about this policy, or to ask us to stop sending your information to Meta,
            write to{' '}
            <a href={`mailto:${company.email}`} className={inlineLink}>
              {company.email}
            </a>
            . If you are in India, you can exercise your rights under the Digital Personal Data
            Protection Act, 2023 in the same way; if you are not satisfied with our response, ask
            for your request to be escalated to our grievance officer, as described on our{' '}
            <Link href="/contact" className={inlineLink}>
              Contact page
            </Link>
            . Our{' '}
            <Link href="/privacy" className={inlineLink}>
              Privacy Policy
            </Link>{' '}
            explains in full how we handle personal information.
          </>
        ),
      },
    ],
  },
]

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      summary="The cookies and similar technologies aeros-x.com uses, what each one does, and how to change your choice."
      lastUpdated="October 6, 2026"
      effective="October 6, 2026"
      preamble={`This Cookie Policy explains how ${company.legalName}, trading as Aeros and ${company.brand} ("Aeros", "we", "us"), uses cookies and similar technologies on aeros-x.com. It supplements our Privacy Policy, which explains in full how we collect, use and share personal information.`}
      sections={sections}
    />
  )
}
