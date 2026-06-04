import type { Metadata } from 'next'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Aeros',
  description: 'The terms that govern your use of the Aeros marketplace, operating system, AI, and hardware.',
}

const sections = [
  {
    title: '1. Agreement to Terms',
    content: [
      {
        heading: 'Acceptance',
        body: 'These Terms & Conditions (the "Terms") form a binding agreement between you and Aeros Ventures Private Limited ("Aeros", "we", "our", or "us") and govern your access to and use of our marketplace, operating system, AI, hardware, and related products and services (collectively, the "Services"). By creating an account, placing an order, or otherwise using the Services, you agree to these Terms. If you do not agree, do not use the Services.',
      },
      {
        heading: 'Authority to accept',
        body: 'If you use the Services on behalf of a business or other organization, you represent that you have the authority to bind that organization to these Terms, and "you" refers to that organization.',
      },
    ],
  },
  {
    title: '2. Definitions',
    content: [
      {
        heading: 'Key terms',
        body: '"Marketplace" means the Aeros platform where buyers and sellers transact. "Seller" means a user who lists or sells goods or services. "Buyer" means a user who purchases or requests goods or services. "Content" means any information, listings, data, or materials submitted to the Services. "Hardware" means Aeros devices such as Aeros Sight, Aeros Terminal, Aeros Badge, Aeros Sense, and AeroSeal equipment.',
      },
    ],
  },
  {
    title: '3. Accounts and Registration',
    content: [
      {
        heading: 'Creating an account',
        body: 'To access most features you must register for an account and provide accurate, current, and complete information. You must be at least 18 years old and use the Services for legitimate business purposes.',
      },
      {
        heading: 'Account security',
        body: 'You are responsible for safeguarding your credentials and for all activity that occurs under your account. Use a strong, unique password, enable two-factor authentication, and notify us promptly of any unauthorized use.',
      },
      {
        heading: 'Accurate information',
        body: 'You agree to keep your account and billing information up to date. We may suspend or terminate accounts that contain false, outdated, or incomplete information.',
      },
    ],
  },
  {
    title: '4. The Services',
    content: [
      {
        heading: 'What we provide',
        body: 'Aeros provides a B2B marketplace, a suite of operating-system products for running a business, an integrated AI layer, and connected hardware. Specific features available to you depend on the plan you select and the products you enable.',
      },
      {
        heading: 'Availability and changes',
        body: 'We continually improve the Services and may add, modify, or discontinue features. We will use reasonable efforts to notify you of material changes that adversely affect your use. We do not guarantee uninterrupted or error-free operation.',
      },
    ],
  },
  {
    title: '5. Marketplace Terms',
    content: [
      {
        heading: 'Aeros as an intermediary',
        body: 'The Marketplace is a venue that connects Buyers and Sellers. Aeros is not a party to the contract of sale between a Buyer and a Seller, does not take title to listed goods unless expressly stated, and is not responsible for the quality, safety, legality, or delivery of items transacted between users.',
      },
      {
        heading: 'Seller obligations',
        body: 'Sellers are responsible for the accuracy of their listings, for having the right to sell the items offered, for honoring accepted orders and quotes, for complying with applicable laws (including labeling, licensing, and tax obligations), and for fulfilling orders on the agreed terms.',
      },
      {
        heading: 'Buyer obligations',
        body: 'Buyers are responsible for evaluating items before purchase, for providing accurate order and delivery information, and for paying for accepted orders in full and on time.',
      },
      {
        heading: 'Listings and content',
        body: 'You are solely responsible for the Content you post. Listings must be accurate and not misleading, and must not infringe the rights of others. We may remove or restrict any listing that violates these Terms or applicable law.',
      },
      {
        heading: 'Orders, RFQs, and quotes',
        body: 'The Marketplace supports direct orders as well as requests for quotation (RFQs) and quotes. A binding order is formed when a Seller accepts an order or a Buyer accepts a quote, subject to these Terms and any additional terms agreed between the parties.',
      },
      {
        heading: 'Pricing, taxes, and payments',
        body: 'Prices are set by Sellers and shown at the point of transaction. You are responsible for all applicable taxes, duties, and levies (including GST where applicable) unless stated otherwise. Payments are processed through third-party payment providers; by transacting, you authorize the relevant charges and agree to the providers\' terms.',
      },
      {
        heading: 'Shipping and delivery',
        body: 'Unless otherwise agreed, the Seller is responsible for fulfillment and delivery. Shipping timelines, carriers, and costs are as specified at checkout or in the applicable quote. Risk and title pass according to the agreed delivery terms.',
      },
      {
        heading: 'Returns, cancellations, and disputes',
        body: 'Returns and cancellations are governed by the Seller\'s stated policy and applicable law. We may provide tools to help resolve disputes between Buyers and Sellers, but we are not obligated to mediate and are not liable for the outcome of any transaction.',
      },
      {
        heading: 'Prohibited and restricted items',
        body: 'You may not list, sell, or purchase items that are illegal, counterfeit, hazardous without proper authorization, or otherwise prohibited by applicable law or our policies.',
      },
    ],
  },
  {
    title: '6. Subscriptions, Fees, and Billing',
    content: [
      {
        heading: 'Plans and fees',
        body: 'Certain Services are offered on a subscription basis. The fees, features, and user limits for each plan are described at the point of purchase. We may also charge transaction, hardware, or usage-based fees as disclosed to you.',
      },
      {
        heading: 'Billing and renewal',
        body: 'Subscriptions are billed in advance on a recurring basis (for example, monthly or annually) and renew automatically for successive periods unless cancelled before the renewal date. You authorize us and our payment processors to charge your payment method for all applicable fees.',
      },
      {
        heading: 'Upgrades, downgrades, and changes',
        body: 'You may change your plan as permitted in your account. Upgrades take effect immediately and may be prorated; downgrades take effect at the next billing period. We may change fees on renewal with prior notice.',
      },
      {
        heading: 'Taxes',
        body: 'Fees are exclusive of taxes unless stated otherwise. You are responsible for all applicable taxes associated with your purchase, other than taxes based on our net income.',
      },
      {
        heading: 'Refunds',
        body: 'Except where required by law or expressly stated, fees are non-refundable and there are no refunds or credits for partial periods or unused features.',
      },
      {
        heading: 'Non-payment',
        body: 'If a payment fails or is overdue, we may suspend or terminate your access to paid Services after reasonable notice. You remain responsible for amounts owed.',
      },
      {
        heading: 'Free trials',
        body: 'If we offer a free trial, we will disclose its duration and terms. Unless you cancel before the trial ends, your subscription will convert to a paid plan and you will be charged the applicable fee.',
      },
    ],
  },
  {
    title: '7. Hardware Purchases and Warranty',
    content: [
      {
        heading: 'Orders and delivery',
        body: 'Purchases of Aeros Hardware are subject to availability and to any product-specific terms provided at the time of sale. Delivery timelines are estimates unless otherwise agreed in writing.',
      },
      {
        heading: 'Risk and title',
        body: 'Unless otherwise stated, risk of loss passes to you on delivery, and title passes once we have received full payment.',
      },
      {
        heading: 'Acceptable use of devices',
        body: 'You agree to install, operate, and maintain Hardware in accordance with our documentation and applicable law, including any notice and consent requirements where devices capture imagery or personal data. You must not tamper with, reverse engineer, or use the Hardware in a manner that compromises its security.',
      },
      {
        heading: 'Limited warranty',
        body: 'We provide a limited warranty against defects in materials and workmanship for the period stated in the applicable product documentation. This warranty does not cover damage from misuse, accident, unauthorized modification, or normal wear. To the extent permitted by law, this is the sole warranty for Hardware and replaces all others.',
      },
      {
        heading: 'Returns and RMA',
        body: 'Hardware returns are handled through our return merchandise authorization (RMA) process as described in the applicable product terms. Defective units within the warranty period will be repaired or replaced at our discretion.',
      },
      {
        heading: 'Firmware and software updates',
        body: 'Hardware may receive firmware and software updates that we provide to maintain security, reliability, and functionality. You consent to the automatic delivery and installation of such updates where applicable.',
      },
    ],
  },
  {
    title: '8. Aeros AI',
    content: [
      {
        heading: 'Assistive outputs',
        body: 'Aeros AI generates insights, summaries, recommendations, and answers based on the data you provide. Outputs are probabilistic and may be incomplete or inaccurate. They are intended to assist, not replace, your own judgment.',
      },
      {
        heading: 'No professional advice',
        body: 'AI outputs do not constitute legal, financial, tax, medical, or other professional advice. You are responsible for independently verifying outputs before relying on them.',
      },
      {
        heading: 'Your responsibility',
        body: 'You are responsible for the decisions you make and the actions you take based on AI outputs, and for ensuring that your use of the AI features complies with applicable law and the rights of third parties.',
      },
    ],
  },
  {
    title: '9. User Content and License',
    content: [
      {
        heading: 'Ownership',
        body: 'You retain ownership of the Content you submit to the Services. These Terms do not transfer any ownership of your Content to us.',
      },
      {
        heading: 'License to Aeros',
        body: 'You grant Aeros a worldwide, non-exclusive, royalty-free license to host, store, process, transmit, display, and otherwise use your Content solely as necessary to provide and improve the Services, and as otherwise permitted by our Privacy Policy.',
      },
      {
        heading: 'Your representations',
        body: 'You represent that you own or have the necessary rights to your Content and that it does not violate any law or infringe the rights of any third party.',
      },
    ],
  },
  {
    title: '10. Acceptable Use',
    content: [
      {
        heading: 'Prohibited conduct',
        body: 'You agree not to: use the Services for any unlawful purpose; infringe intellectual property or privacy rights; upload malware or attempt to gain unauthorized access; scrape, harvest, or systematically extract data without our permission; interfere with or disrupt the Services; misrepresent your identity or affiliation; or use the Services to send spam or unsolicited communications.',
      },
    ],
  },
  {
    title: '11. Intellectual Property',
    content: [
      {
        heading: 'Our intellectual property',
        body: 'The Services, including all software, designs, text, graphics, and other materials we provide, are owned by Aeros or our licensors and are protected by intellectual property laws. Except for the rights expressly granted to you, we reserve all rights.',
      },
      {
        heading: 'Trademarks',
        body: 'The "Aeros" name, logo, and product names are trademarks of Aeros. You may not use them without our prior written permission.',
      },
      {
        heading: 'Feedback',
        body: 'If you provide suggestions or feedback about the Services, you grant us a perpetual, irrevocable, royalty-free license to use it without restriction or obligation to you.',
      },
    ],
  },
  {
    title: '12. Third-Party Services and Integrations',
    content: [
      {
        heading: 'Third-party services',
        body: 'The Services may integrate with or link to third-party products, such as payment processors, accounting software, logistics carriers, and marketplaces. Your use of those services is governed by their own terms and privacy policies, and we are not responsible for them.',
      },
    ],
  },
  {
    title: '13. Confidentiality',
    content: [
      {
        heading: 'Confidential information',
        body: 'Each party may receive non-public information from the other in connection with the Services. The receiving party agrees to use such information only to perform under these Terms and to protect it with reasonable care, except where disclosure is required by law.',
      },
    ],
  },
  {
    title: '14. Disclaimers',
    content: [
      {
        heading: 'Services provided "as is"',
        body: 'To the maximum extent permitted by law, the Services are provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      },
      {
        heading: 'No guarantee of results',
        body: 'We do not warrant that the Services will be uninterrupted, secure, or error-free, that defects will be corrected, or that the Services will meet your requirements or produce particular business results.',
      },
    ],
  },
  {
    title: '15. Limitation of Liability',
    content: [
      {
        heading: 'Exclusion of indirect damages',
        body: 'To the maximum extent permitted by law, Aeros will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or goodwill, arising out of or related to your use of the Services.',
      },
      {
        heading: 'Liability cap',
        body: 'To the maximum extent permitted by law, our total aggregate liability arising out of or related to these Terms or the Services will not exceed the amounts you paid to us for the Services in the twelve months preceding the event giving rise to the claim.',
      },
    ],
  },
  {
    title: '16. Indemnification',
    content: [
      {
        heading: 'Your indemnity',
        body: 'You agree to indemnify and hold harmless Aeros and its officers, directors, employees, and agents from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising out of your Content, your use of the Services, your transactions on the Marketplace, or your violation of these Terms or applicable law.',
      },
    ],
  },
  {
    title: '17. Term, Suspension, and Termination',
    content: [
      {
        heading: 'Term',
        body: 'These Terms apply for as long as you use the Services or maintain an account.',
      },
      {
        heading: 'Termination by you',
        body: 'You may stop using the Services and close your account at any time, subject to any outstanding obligations, including fees owed.',
      },
      {
        heading: 'Suspension and termination by us',
        body: 'We may suspend or terminate your access, with or without notice, if you breach these Terms, create risk or legal exposure for us, or fail to pay amounts due. Where practical, we will provide notice and an opportunity to cure.',
      },
      {
        heading: 'Effect of termination',
        body: 'On termination, your right to use the Services ends. We will make your data available for export for a reasonable period as described in our Privacy Policy, after which we may delete it. Provisions that by their nature should survive termination will survive.',
      },
    ],
  },
  {
    title: '18. Changes to the Services and These Terms',
    content: [
      {
        heading: 'Updates',
        body: 'We may update these Terms from time to time. We will post the updated Terms on this page and update the "Last updated" date, and for material changes we will provide additional notice. Your continued use of the Services after the changes take effect constitutes acceptance of the revised Terms.',
      },
    ],
  },
  {
    title: '19. Force Majeure',
    content: [
      {
        heading: 'Events beyond our control',
        body: 'We will not be liable for any failure or delay in performance caused by events beyond our reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, governmental action, power or network failures, or third-party service disruptions.',
      },
    ],
  },
  {
    title: '20. Governing Law and Dispute Resolution',
    content: [
      {
        heading: 'Governing law',
        body: 'These Terms are governed by the laws of India, without regard to its conflict-of-laws principles.',
      },
      {
        heading: 'Informal resolution',
        body: 'Before bringing a formal claim, you agree to first contact us and attempt in good faith to resolve the dispute informally. Most concerns can be resolved this way.',
      },
      {
        heading: 'Arbitration and courts',
        body: 'If a dispute cannot be resolved informally, it will be finally resolved by binding arbitration seated in Mumbai, India, except that either party may seek injunctive relief in a court of competent jurisdiction to protect its intellectual property or confidential information.',
      },
    ],
  },
  {
    title: '21. Miscellaneous',
    content: [
      {
        heading: 'Entire agreement',
        body: 'These Terms, together with our Privacy Policy and any order forms or product-specific terms, constitute the entire agreement between you and Aeros regarding the Services and supersede any prior agreements on that subject.',
      },
      {
        heading: 'Severability and waiver',
        body: 'If any provision is found unenforceable, the remaining provisions will remain in effect. Our failure to enforce a provision is not a waiver of our right to do so later.',
      },
      {
        heading: 'Assignment and notices',
        body: 'You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets. We may provide notices to you by email or through the Services.',
      },
    ],
  },
  {
    title: '22. Contact Us',
    content: [
      {
        heading: 'Get in touch',
        body: 'If you have questions about these Terms, please contact us at legal@aeros-x.com. You can also write to us at one of the offices below.',
      },
      {
        heading: 'India (registered office)',
        body: 'Aeros Ventures Private Limited, 76/612, Motilal Nagar No. 1, Goregaon West, Mumbai 400104, India.',
      },
      {
        heading: 'United States',
        body: 'Office: 131 Continental Dr, Suite 305, Newark, DE 19713, USA. Mailing address: 2810 N Church St STE 88871, Wilmington, DE 19802, USA.',
      },
    ],
  },
]

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-bg-subtle border-b border-border-default">
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg-primary tracking-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-fg-muted text-lg leading-relaxed mb-6">
            These terms govern your access to and use of the Aeros marketplace, operating system, AI, and hardware.
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
              Please read these Terms &amp; Conditions carefully. They form a binding agreement between you and Aeros Ventures Private Limited (&quot;Aeros&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) and govern your use of our products and services. By using the Services, you agree to these Terms.
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
              These Terms apply to all Aeros products and services unless separate terms are provided. For questions, contact{' '}
              <a href="mailto:legal@aeros-x.com" className="text-fg-primary underline hover:text-royal-600 transition-colors">
                legal@aeros-x.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
