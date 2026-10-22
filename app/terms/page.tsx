import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/legal/LegalPage'
import { company, addressOneLine } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Aeros',
  description: `The terms on which ${company.legalName} (trading as ${company.brand}) sells packaging products and provides the Aeros platform.`,
}

const sections: LegalSection[] = [
  {
    title: '1. About These Terms',
    content: [
      {
        heading: 'Who you are contracting with',
        body: `These Terms & Conditions govern your use of the Aeros platform and your purchase of goods through it. The contracting and billing party is ${company.legalName}, a company registered in India with its registered office at ${addressOneLine}, GSTIN ${company.gstin}. "Aeros" and "${company.brand}" are trading brands of ${company.legalName}. References to "we", "us" and "our" mean ${company.legalName}.`,
      },
      {
        heading: 'Acceptance',
        body: 'By creating an account, placing an order, or otherwise using the platform, you confirm that you have read and accept these Terms, together with our Privacy Policy, Refund & Cancellation Policy and Shipping Policy, each of which forms part of the agreement between us.',
      },
      {
        heading: 'Business customers',
        body: 'The platform is intended for business-to-business use. By transacting with us you confirm that you are purchasing in the course of a business or profession, that you are at least 18 years old, and that the person accepting these Terms is authorised to bind the entity they represent.',
      },
    ],
  },
  {
    title: '2. Accounts',
    content: [
      {
        heading: 'Registration and accuracy',
        body: 'You must provide accurate and complete business details when registering, including your legal entity name, GSTIN where applicable, and a valid billing and delivery address. Tax documents are issued against the details on your account, so you are responsible for keeping them current.',
      },
      {
        heading: 'Account security',
        body: 'You are responsible for all activity under your account and for safeguarding your login credentials. Tell us promptly if you believe your account has been accessed without authorisation.',
      },
      {
        heading: 'Suspension',
        body: 'We may suspend or close an account where we reasonably believe it has been used fraudulently, in breach of these Terms, or in a way that exposes us or other users to legal or security risk.',
      },
    ],
  },
  {
    title: '3. Products, Specifications and Samples',
    content: [
      {
        heading: 'Product information',
        body: 'We list product specifications — sizes, capacities, board grades, print processes, pack configurations and minimum order quantities — as accurately as we can. Because our goods are manufactured, small variations are inherent to the process and do not amount to a defect.',
      },
      {
        heading: 'Manufacturing tolerances',
        body: 'Unless a written specification says otherwise, ordinary manufacturing tolerances apply to dimensions, board weight (GSM), colour and quantity delivered. Print colour reproduction may vary from on-screen previews and between production runs; where exact colour matching matters, ask us for a physical sample or a pre-production proof before placing the order.',
      },
      {
        heading: 'Quantity tolerance on made-to-order goods',
        body: 'For custom-printed and made-to-order goods, production runs may over- or under-deliver against the ordered quantity within an agreed tolerance. You will be invoiced for the quantity actually delivered. The applicable tolerance is stated on your quotation or order confirmation.',
      },
      {
        heading: 'Samples',
        body: 'Samples are supplied to show general character and quality. They do not form a sale by sample unless we confirm in writing that the delivered goods will correspond to a specific sample in every respect.',
      },
    ],
  },
  {
    title: '4. Quotations, Orders and Acceptance',
    content: [
      {
        heading: 'Quotations',
        body: 'Quotations and price lists are invitations to order and are valid for the period stated on them. Where no period is stated, a quotation lapses 30 days after it is issued.',
      },
      {
        heading: 'How an order is formed',
        body: 'Placing an order, submitting a purchase order or completing checkout is an offer to buy. A binding contract is formed only when we confirm acceptance of the order, or — for made-to-order goods — when we confirm your artwork approval and release the job to production, whichever is earlier.',
      },
      {
        heading: 'Our right to decline',
        body: 'We may decline or cancel an order before dispatch where the goods are unavailable, where there is a pricing or description error, where credit or verification checks are not satisfied, or where supplying the order would breach applicable law. If you have already paid, we refund in full.',
      },
      {
        heading: 'Minimum order quantities',
        body: 'Minimum order quantities apply to many products and are shown on the product listing. Orders below the stated minimum cannot be accepted.',
      },
    ],
  },
  {
    title: '5. Prices, Taxes and Payment',
    content: [
      {
        heading: 'Prices',
        body: 'Prices are in Indian Rupees (INR) and are those in force at the time we accept your order. Unless expressly stated otherwise, prices exclude Goods and Services Tax and delivery charges, which are shown separately at checkout and on the invoice.',
      },
      {
        heading: 'Taxes',
        body: `GST is charged at the rate applicable to the goods supplied. Tax invoices are issued by ${company.legalName} under GSTIN ${company.gstin}. Input tax credit is available only where the GSTIN on your account is correct and active at the time of invoicing, so please verify it before ordering.`,
      },
      {
        heading: 'Payment terms',
        body: 'Unless we have agreed credit terms with you in writing, payment is due in full before dispatch. Where an advance is agreed for a made-to-order job, production begins after the advance is received and the balance falls due at the trigger stated on your order — typically before dispatch. Orders placed against an approved credit facility or a signed contract are payable on the terms recorded there.',
      },
      {
        heading: 'Accepted payment methods',
        body: 'We accept payments through our payment gateway partners, including net banking, UPI, debit and credit cards, and bank transfer. Payments are processed by regulated payment service providers; we do not store your full card or banking credentials on our systems.',
      },
      {
        heading: 'Late payment',
        body: 'Where payment is overdue we may suspend further dispatches, withhold undelivered goods, and charge interest on the overdue amount at the rate stated on the invoice or as permitted by law.',
      },
    ],
  },
  {
    title: '6. Delivery, Title and Risk',
    content: [
      {
        heading: 'Delivery',
        body: 'Delivery timelines, charges and carrier arrangements are set out in our Shipping Policy, which forms part of these Terms. Dispatch and delivery dates are estimates given in good faith and are not guaranteed unless we confirm a fixed date in writing.',
      },
      {
        heading: 'Risk and title',
        body: 'Risk in the goods passes to you on delivery to the address on the order. Title passes only when we have received payment in full for those goods, including any applicable tax and delivery charges.',
      },
      {
        heading: 'Inspection on delivery',
        body: 'Please inspect consignments on arrival. Shortages, visible damage or wrong goods must be noted on the carrier documentation at the time of delivery and reported to us within the claim window set out in our Refund & Cancellation Policy.',
      },
      {
        heading: 'Failed delivery',
        body: 'If delivery fails because the address was incorrect, the premises were closed, or the consignment was refused, we may charge the cost of re-delivery or of returning the goods.',
      },
    ],
  },
  {
    title: '7. Artwork, Tooling and Intellectual Property',
    content: [
      {
        heading: 'Your artwork and your warranty to us',
        body: 'Where you supply artwork, logos, trade marks or other content for printing, you grant us the licence needed to reproduce it for your order. You warrant that you own or are licensed to use that material and that printing it will not infringe any third party right. You agree to indemnify us against claims, losses and costs arising from a breach of that warranty.',
      },
      {
        heading: 'Artwork approval is binding',
        body: 'We print from the artwork proof you approve. Once you approve a proof, that approval fixes the content, layout, colour references and dimensions of the job, and you are responsible for errors it contains — including spelling, statutory declarations, barcodes and net-quantity statements. Check proofs carefully before approving.',
      },
      {
        heading: 'Tooling, dies and plates',
        body: 'Dies, printing plates, cylinders and other tooling remain our property even where you have paid a tooling or origination charge, unless we agree otherwise in writing. We are not obliged to retain tooling indefinitely and may dispose of it if a job has been dormant for an extended period.',
      },
      {
        heading: 'Our intellectual property',
        body: 'The platform, its software, design, content and the Aeros name and marks are owned by us or our licensors. Nothing in these Terms transfers any right in them to you beyond the limited right to use the platform for its intended purpose.',
      },
      {
        heading: 'Statutory and regulatory compliance of printed content',
        body: 'Where goods are used for food contact or carry statutory declarations, you remain responsible for ensuring that the printed content complies with applicable law, including packaging and labelling rules. Tell us in advance if goods are intended for direct food contact so that appropriate materials are specified.',
      },
    ],
  },
  {
    title: '8. Warranties and Claims',
    content: [
      {
        heading: 'What we warrant',
        body: 'We warrant that goods will correspond to their agreed specification, subject to the tolerances described above, and will be free from material defects in materials and workmanship at the time of delivery.',
      },
      {
        heading: 'Making a claim',
        body: 'Claims for defective, damaged, short or wrongly supplied goods must be raised within the window and in the manner set out in our Refund & Cancellation Policy. Please keep the goods and their packaging available for inspection, and do not use or dispose of them until the claim is resolved.',
      },
      {
        heading: 'Our remedy',
        body: 'Where a claim is accepted, we will at our option replace the affected goods, re-perform the work, or refund the price paid for them. That is your exclusive remedy for defective goods.',
      },
      {
        heading: 'Storage and handling',
        body: 'Paper-based packaging is sensitive to moisture, heat and compression. The warranty does not cover deterioration caused by storage or handling conditions after delivery, or by use outside the product’s stated purpose.',
      },
    ],
  },
  {
    title: '9. Cancellation and Refunds',
    content: [
      {
        heading: 'Where the detail lives',
        body: 'Cancellation rights, claim windows, refund methods and processing timelines are set out in our Refund & Cancellation Policy, which forms part of these Terms.',
      },
      {
        heading: 'Made-to-order goods',
        body: 'Custom-printed and made-to-order goods are produced specifically for you and cannot be cancelled or returned once production has started, except where they are defective, damaged or not as specified.',
      },
    ],
  },
  {
    title: '10. Liability',
    content: [
      {
        heading: 'Limit on our liability',
        body: 'Our total liability arising out of or in connection with an order, whether in contract, tort (including negligence), under statute or otherwise, is limited to the amount paid by you for the goods giving rise to the claim.',
      },
      {
        heading: 'Indirect loss',
        body: 'We are not liable for loss of profit, loss of business, loss of contracts, loss of anticipated savings, wasted expenditure, or any indirect or consequential loss, however caused.',
      },
      {
        heading: 'What we do not exclude',
        body: 'Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be excluded or limited.',
      },
    ],
  },
  {
    title: '11. Force Majeure',
    content: [
      {
        heading: 'Events beyond reasonable control',
        body: 'We are not in breach of these Terms and are not liable for delay or failure in performance caused by events beyond our reasonable control, including natural disasters, epidemics, fire, flood, war, civil unrest, strikes, failure of utilities or transport networks, carrier disruption, raw-material shortages, and acts or restrictions of government. Where such an event continues for an extended period, either party may cancel the affected order and we will refund amounts paid for goods not delivered.',
      },
    ],
  },
  {
    title: '12. Confidentiality and Data',
    content: [
      {
        heading: 'Confidential information',
        body: 'Each party will keep confidential the non-public commercial information it receives from the other in connection with an order, and use it only for the purpose of performing the contract.',
      },
      {
        heading: 'Personal data',
        body: 'We handle personal data in accordance with our Privacy Policy. Where you provide personal data relating to your own staff or customers, you confirm you have the lawful basis to share it with us for the purpose of fulfilling the order.',
      },
    ],
  },
  {
    title: '13. General',
    content: [
      {
        heading: 'Governing law and jurisdiction',
        body: `These Terms and any dispute arising out of them are governed by the laws of India. The courts at ${company.jurisdiction} have exclusive jurisdiction, save that we may bring proceedings to recover sums due in any court of competent jurisdiction.`,
      },
      {
        heading: 'Entire agreement',
        body: 'These Terms, together with the policies referred to in them and any written quotation, order confirmation or signed contract between us, form the entire agreement in respect of an order and supersede any earlier understanding. Where a signed contract conflicts with these Terms, the signed contract prevails for that order.',
      },
      {
        heading: 'Changes to these Terms',
        body: 'We may update these Terms from time to time. The version in force when your order is accepted is the version that applies to that order. Material changes will be notified on this page with a revised effective date.',
      },
      {
        heading: 'Severability and waiver',
        body: 'If any provision of these Terms is found unenforceable, the rest remain in force. A delay in enforcing a right is not a waiver of it.',
      },
      {
        heading: 'Assignment',
        body: 'You may not assign or transfer your rights under these Terms without our written consent. We may assign our rights to a successor of our business.',
      },
    ],
  },
  {
    title: '14. Contact',
    content: [
      {
        heading: 'Reaching us',
        body: `Questions about these Terms should be sent to ${company.email} or addressed to ${company.legalName}, ${addressOneLine}. Our full contact details, including our registered address and telephone number, are on the Contact page.`,
      },
    ],
  },
]

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      summary={`The terms on which ${company.legalName} sells packaging products and provides the Aeros platform.`}
      lastUpdated="September 22, 2026"
      effective="September 22, 2026"
      preamble={`These Terms & Conditions are issued by ${company.legalName}, a company registered in India with its registered office at ${addressOneLine} (GSTIN ${company.gstin}). ${company.brandAttribution} They govern your use of the Aeros platform and every order you place through it, so please read them before transacting with us.`}
      sections={sections}
    />
  )
}
