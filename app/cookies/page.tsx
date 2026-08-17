import type { Metadata } from 'next'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Cookie Policy — Aeros',
  description: 'How Aeros uses cookies and similar technologies, and how you can control them.',
}

const sections = [
  {
    title: '1. What Are Cookies',
    content: [
      {
        heading: 'About cookies',
        body: 'Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to improve performance, and to provide information to the site owner. We also use similar technologies such as local storage and pixels, which we refer to collectively as "cookies" in this policy.',
      },
    ],
  },
  {
    title: '2. How We Use Cookies',
    content: [
      {
        heading: 'Why we use them',
        body: 'We use cookies to keep you signed in, remember your preferences, keep the Services secure, understand how our Services are used, and improve their performance. We do not use third-party advertising cookies.',
      },
    ],
  },
  {
    title: '3. Types of Cookies We Use',
    content: [
      {
        heading: 'Essential cookies',
        body: 'These are necessary for the Services to function, such as authenticating you, maintaining your session, and protecting against fraud. The Services cannot operate properly without them, so they cannot be disabled through our controls.',
      },
      {
        heading: 'Performance and analytics cookies',
        body: 'These help us understand how visitors interact with our Services by collecting aggregated information about pages visited, time spent, and errors encountered, so we can improve the experience.',
      },
      {
        heading: 'Functional cookies',
        body: 'These remember choices you make — such as your preferences and settings — to provide a more personalized experience.',
      },
    ],
  },
  {
    title: '4. Third-Party Cookies',
    content: [
      {
        heading: 'Cookies set by our providers',
        body: 'Some cookies may be set by trusted third parties that provide services on our behalf, such as analytics providers and payment processors. These providers may process limited data in accordance with their own policies and our agreements with them.',
      },
    ],
  },
  {
    title: '5. Managing Your Preferences',
    content: [
      {
        heading: 'Browser controls',
        body: 'Most browsers let you view, manage, delete, and block cookies through their settings. If you block or delete certain cookies, some parts of the Services may not function correctly.',
      },
      {
        heading: 'Consent',
        body: 'Where required by law, we will ask for your consent before placing non-essential cookies, and you can change your choices at any time through your browser or, where available, our cookie controls.',
      },
    ],
  },
  {
    title: '6. Changes to This Cookie Policy',
    content: [
      {
        heading: 'Policy updates',
        body: 'We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for operational, legal, or regulatory reasons. We will post the updated policy on this page and update the "Last updated" date.',
      },
    ],
  },
  {
    title: '7. Contact Us',
    content: [
      {
        heading: 'Get in touch',
        body: 'If you have questions about our use of cookies, please contact us at privacy@aeros.io. For more on how we handle personal information, see our Privacy Policy.',
      },
    ],
  },
]

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-bg-subtle border-b border-border-default">
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg-primary tracking-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-fg-muted text-lg leading-relaxed mb-6">
            This policy explains how we use cookies and similar technologies, and how you can control them.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-fg-muted/60 font-mono">
            <span>Last updated: June 4, 2026</span>
            <span>Effective: June 4, 2026</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl border border-border-default bg-bg-subtle">
            <p className="text-fg-primary-800 leading-relaxed text-[15px]">
              This Cookie Policy describes how Aeros Ventures Private Limited (&quot;Aeros&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar technologies across our products and services (&quot;Services&quot;). It should be read together with our Privacy Policy.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-fg-primary mb-6 pb-3 border-b border-border-default">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((item) => (
                    <div key={item.heading}>
                      <h3 className="text-[15px] font-semibold text-fg-primary mb-2">
                        {item.heading}
                      </h3>
                      <p className="text-fg-muted text-[15px] leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border-default">
            <p className="text-fg-muted text-sm leading-relaxed">
              For more information about how we handle your personal information, see our{' '}
              <a href="/privacy" className="text-fg-primary underline hover:text-royal-600 transition-colors">
                Privacy Policy
              </a>{' '}or contact{' '}
              <a href="mailto:privacy@aeros.io" className="text-fg-primary underline hover:text-royal-600 transition-colors">
                privacy@aeros.io
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
