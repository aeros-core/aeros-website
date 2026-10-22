import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import CookieSettingsButton from '@/components/analytics/CookieSettingsButton'

export const metadata: Metadata = {
  title: 'Privacy Policy — Aeros',
  description: 'Learn how Aeros collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      {
        heading: 'Information you provide to us',
        body: 'We collect information you provide directly to us, including when you create an account, subscribe to a plan, contact us for support, or otherwise interact with our services. This may include your name, email address, phone number, business name, billing information, and any other information you choose to provide.',
      },
      {
        heading: 'Information we collect automatically',
        body: 'When you use our services, we automatically collect certain information about your device and usage, including your IP address, browser type, operating system, referring URLs, pages viewed, time spent on pages, and other diagnostic data.',
      },
      {
        heading: 'Information from third parties',
        body: 'We may receive information about you from third-party services you connect to Aeros, such as payment processors, accounting software, or marketplace integrations. We only collect such information with your explicit authorization.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      {
        heading: 'Providing and improving our services',
        body: 'We use your information to operate, maintain, and improve Aeros, including to process transactions, provide customer support, send service-related communications, and develop new features.',
      },
      {
        heading: 'Personalization',
        body: 'We use your information to personalize your experience, including tailoring content, recommendations, and AI-powered insights to your business context and usage patterns.',
      },
      {
        heading: 'Communications',
        body: 'With your consent, we may send you promotional communications about Aeros products, features, and events. You can opt out of marketing emails at any time by clicking "unsubscribe" in any email or contacting us directly.',
      },
      {
        heading: 'Legal and compliance',
        body: 'We may use your information to comply with applicable laws and regulations, enforce our terms of service, protect the rights and safety of Aeros and our users, and respond to lawful requests from public authorities.',
      },
    ],
  },
  {
    title: '3. How We Share Your Information',
    content: [
      {
        heading: 'Service providers',
        body: 'We share your information with third-party service providers who perform services on our behalf, such as cloud hosting, payment processing, analytics, and customer support. These providers are contractually obligated to use your information only as directed by us.',
      },
      {
        heading: 'Meta (advertising measurement)',
        body: 'We share information with Meta Platforms, Inc. and Meta Platforms Ireland Limited ("Meta"), which operate Facebook, Instagram and WhatsApp, so that we can measure and improve our advertising on those services. This includes information collected by the Meta Pixel on aeros-x.com and app.aeros-x.com and events we send to Meta from our servers through Meta\'s Conversions API, such as hashed contact identifiers, order values and ad-click identifiers. Meta also processes this information under its own privacy policy. Section 7 explains what is shared and how to opt out.',
      },
      {
        heading: 'Business transfers',
        body: 'If Aeros is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have.',
      },
      {
        heading: 'Legal requirements',
        body: 'We may disclose your information if required to do so by law or in response to valid legal process, including to meet national security or law enforcement requirements.',
      },
      {
        heading: 'With your consent',
        body: 'We may share your information for other purposes with your explicit consent.',
      },
    ],
  },
  {
    title: '4. Data Retention',
    content: [
      {
        heading: 'Retention periods',
        body: 'We retain your personal information for as long as necessary to provide our services, comply with our legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we securely delete or anonymize it.',
      },
      {
        heading: 'Account deletion',
        body: 'When you delete your account, we will delete or anonymize your personal information within 90 days, except where we are required to retain it for legal or compliance purposes.',
      },
    ],
  },
  {
    title: '5. Security',
    content: [
      {
        heading: 'Our security practices',
        body: 'We take the security of your information seriously. We use industry-standard encryption (TLS 1.3+) for data in transit, AES-256 encryption for data at rest, regular security audits, and strict access controls. Our infrastructure is hosted on SOC 2 Type II certified providers.',
      },
      {
        heading: 'Your responsibilities',
        body: 'You are responsible for maintaining the security of your account credentials. Please use a strong, unique password and enable two-factor authentication. Notify us immediately if you suspect unauthorized access to your account.',
      },
    ],
  },
  {
    title: '6. Your Rights and Choices',
    content: [
      {
        heading: 'Access and portability',
        body: 'You have the right to access the personal information we hold about you and to receive a copy of your data in a structured, machine-readable format.',
      },
      {
        heading: 'Correction and deletion',
        body: 'You may update or correct inaccurate personal information at any time through your account settings. You may also request deletion of your personal information, subject to certain legal exceptions.',
      },
      {
        heading: 'Objection and restriction',
        body: 'You have the right to object to or request restriction of certain processing of your personal information, including for direct marketing purposes.',
      },
      {
        heading: 'Exercising your rights',
        body: 'To exercise any of these rights, please contact us at support@aeros-x.com. We will respond to your request within 30 days.',
      },
    ],
  },
  {
    title: '7. Cookies and Tracking',
    content: [
      {
        heading: 'Essential cookies and storage',
        body: 'Our websites and apps use cookies and similar technologies, such as your browser\'s local storage, that they need in order to work: to keep you signed in and your session secure, to remember the items in your cart, and to remember the cookie choice you make. Our sign-in and payment providers (such as Google Sign-In, Razorpay and Stripe) may also set cookies needed for secure sign-in, payment processing and fraud prevention. These cannot be switched off, because the services would not work without them.',
      },
      {
        heading: 'The Meta Pixel',
        body: 'On aeros-x.com and app.aeros-x.com we use the Meta Pixel, a technology provided by Meta, to measure how well our ads on Facebook, Instagram and WhatsApp work and to show our ads to people likely to be interested in Aeros. When it is active, the pixel tells Meta which pages you visit and the actions you take, such as viewing a product, adding it to your cart, starting checkout, placing an order, submitting an enquiry, or tapping our WhatsApp, email or phone links, together with your IP address and browser details. It uses two cookies set on our own domain: _fbp, which identifies your browser to Meta, and _fbc, which stores the ad-click identifier when you arrive from one of our Meta ads; each expires 90 days after it was last set. When you are signed in to app.aeros-x.com, or enter your email address or phone number in one of our forms, the pixel may also send your email address, phone number and account identifier in hashed (SHA-256) form, so that Meta can match the activity to a Meta account.',
      },
      {
        heading: 'Server-side events (Meta Conversions API)',
        body: 'We also send events to Meta directly from our servers through Meta\'s Conversions API. This lets us report actions that are not completed in your browser, such as an order paid through UPI or a payment link and confirmed by our payment provider, and keeps measurement working when a browser blocks the pixel. These events can include your email address, phone number and account identifier in hashed (SHA-256) form; for orders, also your name and the city, state, postcode and country of the delivery address, likewise hashed; the order value, currency and the products ordered; your IP address and browser user agent; and the _fbp and _fbc values. Hashing turns these details into fixed-length codes, so we do not send your email address or phone number to Meta in readable form; Meta compares the codes with those it holds to match events to Meta accounts. Meta uses this information to measure and improve the delivery of our ads and to help us build advertising audiences, for example people who have visited our website or who are similar to our existing customers.',
      },
      {
        heading: 'WhatsApp click-to-chat ads',
        body: 'Some of our ads open a WhatsApp conversation with us. When you message us from one of these ads, Meta gives us an identifier for that ad click. We report back to Meta, against that identifier, how the conversation progressed (that a lead was received, that it became a qualified lead, and whether it led to a purchase, with the order value) so that Meta can measure and optimise those ads. We do not send the content of your messages to Meta for this purpose.',
      },
      {
        heading: 'Your choices',
        body: (
          <>
            The first time you visit aeros-x.com or app.aeros-x.com, a banner explains this tracking.
            If you visit from Europe (which we infer from your device&apos;s time zone), the Meta
            Pixel stays off unless you accept it; elsewhere it is on by default and you can opt out
            at any time. You can change your choice whenever you like using{' '}
            <CookieSettingsButton className="text-fg-primary underline hover:text-fg-muted transition-colors cursor-pointer" />{' '}
            at the bottom of every page on aeros-x.com, or the privacy setting in the Aeros app. When
            you opt out, the pixel stops sending events and we stop sending server-side events
            about what you do in that browser. If your browser sends a Global Privacy Control (GPC)
            signal, we honour it by switching on Meta&apos;s Limited Data Use mode for the events we
            send. Our{' '}
            <Link href="/cookie-policy" className="text-fg-primary underline hover:text-fg-muted transition-colors">
              Cookie Policy
            </Link>{' '}
            lists the cookies we use and how long each one lasts.
          </>
        ),
      },
      {
        heading: 'Other ways to opt out',
        body: (
          <>
            You can block or delete cookies in your browser settings; essential features may then
            stop working, and your cookie choice will be forgotten. You can also control how Meta
            uses information from other businesses to show you ads in your Facebook or Instagram
            settings. To ask us to stop sending your information to Meta altogether, including
            server-side events about your orders and WhatsApp conversations, write to{' '}
            <a href="mailto:support@aeros-x.com" className="text-fg-primary underline hover:text-fg-muted transition-colors">
              support@aeros-x.com
            </a>
            . If you are in India, you can exercise your rights under the Digital Personal Data
            Protection Act, 2023, including withdrawing your consent, in the same way; if you are
            not satisfied with our response, ask for your request to be escalated to our grievance
            officer, as described on our{' '}
            <Link href="/contact" className="text-fg-primary underline hover:text-fg-muted transition-colors">
              Contact page
            </Link>
            .
          </>
        ),
      },
      {
        heading: 'Retention',
        body: 'The _fbp and _fbc cookies expire 90 days after they were last set. Your cookie choice stays in your browser until you change it or clear your browser data. We keep a record of each choice (the choice, when it was made and a random identifier for your browser) so that we can show what you agreed to. On our own systems, the hashed identifiers, IP address and user agent attached to server-side events are deleted after 30 days; we keep only the record that an event was sent. Meta keeps the information it receives in line with its own privacy policy.',
      },
    ],
  },
  {
    title: '8. International Data Transfers',
    content: [
      {
        heading: 'Cross-border transfers',
        body: 'Aeros operates globally and may transfer your information to countries other than your country of residence. Where we transfer data internationally, we rely on appropriate safeguards such as Standard Contractual Clauses approved by the European Commission, or other legally recognized mechanisms.',
      },
    ],
  },
  {
    title: '9. Children\'s Privacy',
    content: [
      {
        heading: 'Age restrictions',
        body: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will delete it.',
      },
    ],
  },
  {
    title: '10. Changes to This Policy',
    content: [
      {
        heading: 'Policy updates',
        body: 'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we will provide additional notice via email or a prominent notice on our platform.',
      },
    ],
  },
  {
    title: '11. Contact Us',
    content: [
      {
        heading: 'Get in touch',
        body: 'If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer at support@aeros-x.com or write to us at: Boson Machines OPC Pvt Ltd, Data Protection Officer, 76/612, Motilal Nagar no. 1, Goregaon West, Mumbai, Maharashtra 400104, India.',
      },
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-bg-subtle border-b border-border-default">
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg-primary tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-fg-muted text-lg leading-relaxed mb-6">
            We are committed to protecting your personal information and being transparent about how we collect and use it.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-fg-muted/60 font-mono">
            <span>Last updated: October 6, 2026</span>
            <span>Effective: October 6, 2026</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl border border-border-default bg-bg-subtle">
            <p className="text-fg-primary-800 leading-relaxed text-[15px]">
              This Privacy Policy describes how Boson Machines OPC Pvt Ltd, trading as Aeros and Aeros Packaging (&quot;Aeros&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), collects, uses, shares, and protects personal information when you use our platform, products, and services (&quot;Services&quot;). By using our Services, you agree to the collection and use of information in accordance with this policy.
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
              This policy is issued by Boson Machines OPC Pvt Ltd and applies to all Aeros products and services unless a separate privacy notice is provided. For questions, contact{' '}
              <a href="mailto:support@aeros-x.com" className="text-fg-primary underline hover:text-royal-600 transition-colors">
                support@aeros-x.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
