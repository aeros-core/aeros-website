import type { Metadata } from 'next'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

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
        heading: 'Types of cookies we use',
        body: 'We use essential cookies necessary for our services to function, performance cookies to understand how our services are used, and functional cookies to remember your preferences. We do not use third-party advertising cookies.',
      },
      {
        heading: 'Your cookie choices',
        body: 'You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our services. For more details, see our Cookie Policy.',
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
            <span>Last updated: March 25, 2026</span>
            <span>Effective: March 25, 2026</span>
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
