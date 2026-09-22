import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/legal/LegalPage'
import { company, addressOneLine } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy — Aeros',
  description: `How ${company.legalName} (trading as ${company.brand}) handles order cancellations, returns, claims and refunds.`,
}

const sections: LegalSection[] = [
  {
    title: '1. Scope',
    content: [
      {
        heading: 'What this policy covers',
        body: `This policy explains when an order placed with ${company.legalName} can be cancelled, when goods can be returned, how to raise a claim for goods that arrive damaged, short or not as specified, and how and when refunds are paid. It forms part of our Terms & Conditions.`,
      },
      {
        heading: 'Two kinds of goods',
        body: 'Our rights and yours depend on which kind of goods you ordered, because the two are produced very differently:',
        bullets: [
          'Ready-stock goods — standard, unprinted or stock-printed items held in inventory and dispatched as they are.',
          'Made-to-order goods — custom-printed, custom-sized or otherwise bespoke items manufactured specifically for your order, including anything produced from artwork you approve.',
        ],
      },
    ],
  },
  {
    title: '2. Cancelling an Order',
    content: [
      {
        heading: 'Ready-stock goods, before dispatch',
        body: 'You may cancel an order for ready-stock goods at any time before it is dispatched, at no charge. Tell us as early as you can — once a consignment has been handed to the carrier it can no longer be stopped, and the return process below applies instead.',
      },
      {
        heading: 'Ready-stock goods, after dispatch',
        body: 'Once dispatched, an order can only be returned under the returns section below.',
      },
      {
        heading: 'Made-to-order goods, before production starts',
        body: 'You may cancel a made-to-order job at no charge at any point before you approve the artwork proof and we release the job to production. Any advance already paid is refunded in full.',
      },
      {
        heading: 'Made-to-order goods, after production starts',
        body: 'Once artwork is approved and production has started, a made-to-order job cannot be cancelled, because the materials are printed and converted specifically for you and have no resale value to us. If you ask us to stop a job that is already running, we will tell you what stage it has reached and what portion of the order value is recoverable. Tooling, origination and plate charges already incurred are not refundable.',
      },
      {
        heading: 'Cancellation by us',
        body: 'We may cancel an order before dispatch where the goods turn out to be unavailable, where there was a pricing or description error, or where verification or credit checks are not satisfied. Where we cancel, you receive a full refund of everything paid for that order.',
      },
    ],
  },
  {
    title: '3. Returns and Claims',
    content: [
      {
        heading: 'When you can return goods',
        body: 'We accept returns and pay refunds where goods are delivered damaged, defective, short in quantity beyond the agreed tolerance, or materially different from the specification you ordered or the proof you approved.',
      },
      {
        heading: 'The claim window',
        body: 'Claims must reach us within 7 days of delivery. Shortages, visible transit damage and wrong goods should additionally be noted on the carrier’s delivery documentation at the time of receipt, because carrier claims cannot be pursued without it. Latent defects that could not reasonably have been found on inspection should be reported as soon as they are discovered.',
      },
      {
        heading: 'Returning unused ready-stock goods',
        body: 'Unused, unopened cases of ready-stock goods can be returned within 30 days of delivery, even if there is nothing wrong with them. Start the return from the Orders page on your dashboard and we will email you a prepaid return label. Goods must come back in their original, unopened outer packaging and in resaleable condition.',
      },
      {
        heading: 'Made-to-order goods cannot be returned',
        body: 'The 30-day return window does not apply to custom-printed or made-to-order goods. They are produced specifically for your order and have no resale value to us, so they can only be returned if they arrive damaged, defective or not as specified.',
      },
      {
        heading: 'What is not eligible',
        body: 'The following are outside this policy:',
        bullets: [
          'Made-to-order goods that match the artwork proof you approved, including errors carried over from that proof.',
          'Variation within the manufacturing, colour and quantity tolerances described in our Terms & Conditions.',
          'Goods damaged after delivery by storage or handling conditions, including exposure to moisture, heat or compression.',
          'Goods that have been used, opened, printed on, converted or otherwise altered after delivery.',
          'Ready-stock goods returned more than 30 days after delivery.',
          'Claims raised after the claim window has closed.',
        ],
      },
    ],
  },
  {
    title: '4. How to Raise a Claim',
    content: [
      {
        heading: 'What to send us',
        body: `Write to ${company.email} with your order or invoice number, the quantity affected, a short description of the problem, and photographs showing the goods, the outer packaging and any carrier labels. Clear photographs at the point of receipt resolve claims fastest.`,
      },
      {
        heading: 'Hold the goods',
        body: 'In most damage and wrong-item claims we settle from the photographs and do not need the goods back. Please keep them and their original packaging available and unaltered until the claim is settled, in case we or the carrier need to inspect or collect them. Goods disposed of before the claim is resolved cannot be refunded.',
      },
      {
        heading: 'Our response',
        body: 'We acknowledge claims within 2 business days and aim to reach a decision within 7 business days of receiving the information and any inspection we need. If a claim takes longer, we will tell you why and when to expect an answer.',
      },
      {
        heading: 'Return freight',
        body: 'Where a claim is accepted, and for eligible 30-day returns of unused ready-stock goods, we arrange and pay for collection or provide a prepaid return label. Where goods are returned at your request and the claim is not accepted, or where returned goods arrive used, opened or damaged, the cost of return and re-delivery is yours.',
      },
    ],
  },
  {
    title: '5. Refunds',
    content: [
      {
        heading: 'Our remedies',
        body: 'Where a claim is accepted we will, at our option, replace the affected goods, re-run the affected portion of the job, issue a credit note against your account, or refund the amount paid for the affected goods. Where a replacement is not practical or you prefer a refund, we refund.',
      },
      {
        heading: 'How refunds are paid',
        body: 'Refunds are made to the original payment method used for the order. Card and net-banking payments are refunded to the same card or bank account; we cannot redirect a refund to a different instrument or a third-party account.',
      },
      {
        heading: 'Timelines',
        body: 'Approved refunds are issued to the original payment method within 5 to 10 business days of us receiving the returned goods or confirming a damage claim. The time your bank or card issuer then takes to post the credit is outside our control; we will share the payment-gateway reference so you can trace it with them.',
      },
      {
        heading: 'What is refunded',
        body: 'A refund covers the price paid for the affected goods and the GST charged on them. Where the entire order is cancelled or rejected, delivery charges are refunded too. Where only part of an order is affected, delivery charges are not refunded, since the consignment still had to be shipped.',
      },
      {
        heading: 'Orders paid by advance',
        body: 'Where you paid an advance against a made-to-order job that is cancelled before production starts, the advance is refunded in full by the same route. Where production had already started, the recoverable portion is refunded after deducting materials, tooling and work completed, and we will show you that breakdown before processing it.',
      },
    ],
  },
  {
    title: '6. Contact',
    content: [
      {
        heading: 'Raising a cancellation, return or refund',
        body: `Email ${company.email} or call ${company.phone} during business hours (${company.businessHours}). Written claims can be addressed to ${company.legalName}, ${addressOneLine}.`,
      },
      {
        heading: 'If you are not satisfied',
        body: `If a claim is not resolved to your satisfaction, ask for it to be escalated by replying to the same thread and marking it for the attention of the grievance officer at ${company.legalName}. We aim to respond to escalations within 7 business days.`,
      },
    ],
  },
]

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      summary="When an order can be cancelled, when goods can be returned, and how refunds are processed."
      lastUpdated="September 22, 2026"
      effective="September 22, 2026"
      preamble={`This Refund & Cancellation Policy is issued by ${company.legalName} (GSTIN ${company.gstin}), whose registered office is at ${addressOneLine}. ${company.brandAttribution} It applies to every order placed through the Aeros platform and forms part of our Terms & Conditions.`}
      sections={sections}
    />
  )
}
