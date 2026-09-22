import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/legal/LegalPage'
import { company, addressOneLine } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Shipping Policy — Aeros',
  description: `How ${company.legalName} (trading as ${company.brand}) dispatches, ships and delivers orders placed on the Aeros platform.`,
}

const sections: LegalSection[] = [
  {
    title: '1. Where We Ship',
    content: [
      {
        heading: 'Delivery area',
        body: `${company.legalName} ships across India. Serviceability depends on the delivery pin code and on the size and weight of the consignment; the platform checks serviceability against your delivery address before checkout and will tell you if an address cannot be served.`,
      },
      {
        heading: 'Delivery addresses',
        body: 'We deliver to commercial and residential addresses. Because packaging consignments are bulky and are often moved on pallets, please give a delivery address that can receive them during working hours and note any access restrictions — narrow approach, no loading bay, lift-only access, restricted delivery windows — at the time of ordering.',
      },
      {
        heading: 'International orders',
        body: `We do not currently ship outside India through the platform. For export enquiries, write to ${company.email}.`,
      },
    ],
  },
  {
    title: '2. Dispatch Timelines',
    content: [
      {
        heading: 'Ready-stock goods',
        body: 'Ready-stock items held in a regional warehouse are typically picked and dispatched on the same or next business day, subject to stock and payment realisation. The estimated delivery date for your address and cart is shown at checkout before you pay.',
      },
      {
        heading: 'Made-to-order goods',
        body: 'Made-to-order and custom-printed goods carry a production lead time that begins when you approve the artwork proof and the agreed advance is received — not when the order is placed. Lead time varies by product, print process and quantity, and the estimate for each product is shown on its listing and confirmed on your order.',
      },
      {
        heading: 'What can move a date',
        body: 'Dispatch estimates assume artwork is approved promptly, payment or advance has cleared, and the specified material is in stock. Delays in proof approval, changes to artwork after approval, or a specification change will move the dispatch date accordingly.',
      },
      {
        heading: 'Estimates, not guarantees',
        body: 'Dispatch and delivery dates are estimates given in good faith based on normal production and carrier performance. They are not guaranteed unless we confirm a fixed date in writing. Where you need goods by a specific date, tell us before ordering so we can confirm feasibility.',
      },
    ],
  },
  {
    title: '3. Delivery Timelines',
    content: [
      {
        heading: 'Transit time',
        body: 'In-stock items delivering to major metro areas typically arrive the next business day. Elsewhere, transit generally takes 2 to 4 business days within Maharashtra and 4 to 8 business days to the rest of India. Remote, hill and island destinations take longer. The estimate shown at checkout is specific to your delivery address and the items in your cart, and is the one to rely on.',
      },
      {
        heading: 'Business days',
        body: 'All timelines are given in business days and exclude Sundays and public holidays. Orders confirmed after working hours are processed on the next business day.',
      },
      {
        heading: 'Carriers',
        body: 'We ship through third-party surface and express carriers, selected by consignment size, destination and service level. The carrier handling your order is shown with the tracking details once the consignment is booked.',
      },
      {
        heading: 'Part shipments',
        body: 'Large orders may be dispatched in more than one consignment so that available stock can move without waiting for the balance. Where we part-ship, we tell you in advance and you are not charged extra delivery for the split.',
      },
    ],
  },
  {
    title: '4. Shipping Charges',
    content: [
      {
        heading: 'How charges are calculated',
        body: 'Delivery charges depend on the destination pin code, the weight and volume of the consignment and the service selected. Because packaging goods are light relative to their size, carriers generally charge on volumetric weight rather than actual weight.',
      },
      {
        heading: 'When you see the charge',
        body: 'The applicable delivery charge is calculated and shown at checkout before you pay, and appears as a separate line on your invoice. Where an order is quoted manually, the delivery charge is stated on the quotation.',
      },
      {
        heading: 'Taxes',
        body: 'GST applies to delivery charges at the applicable rate and is shown separately on the invoice.',
      },
    ],
  },
  {
    title: '5. Tracking Your Order',
    content: [
      {
        heading: 'Tracking details',
        body: 'When a consignment is booked we share the carrier name and tracking reference on your order, and send it to the email and phone number registered on your account. You can follow the shipment from the order screen on the platform.',
      },
      {
        heading: 'If tracking has not updated',
        body: `Carrier tracking can take up to 24 hours to show its first scan after booking, and surface consignments may not scan every day in transit. If tracking has not moved for more than 3 business days, write to ${company.email} with your order number and we will chase the carrier.`,
      },
    ],
  },
  {
    title: '6. Receiving Your Delivery',
    content: [
      {
        heading: 'Check before you sign',
        body: 'Please count the cartons and check them for visible damage before signing the carrier’s delivery documentation. If anything is missing or damaged, record it on the delivery note or proof of delivery at that moment and photograph the consignment as received.',
      },
      {
        heading: 'Why it matters',
        body: 'A note on the carrier documentation is what allows a transit claim to be pursued. Where a consignment is signed for as received in good condition, claims for transit damage or shortage become difficult to recover and may be declined.',
      },
      {
        heading: 'Reporting a problem',
        body: 'Damage, shortage or wrong goods must be reported to us within the claim window set out in our Refund & Cancellation Policy. Keep the goods and their packaging available for inspection until the claim is settled.',
      },
    ],
  },
  {
    title: '7. Failed or Delayed Delivery',
    content: [
      {
        heading: 'Failed delivery attempts',
        body: 'Carriers normally reattempt delivery. Where delivery fails because the address was incorrect or incomplete, the premises were closed, no one was available to receive the consignment, or the consignment was refused, we may charge the cost of re-delivery or of returning the goods to us.',
      },
      {
        heading: 'Unclaimed consignments',
        body: 'Consignments returned to us undelivered are held for 30 days. We will contact you to arrange re-delivery, which is chargeable. Where goods remain unclaimed beyond that period we may dispose of them and charge the costs incurred.',
      },
      {
        heading: 'Events beyond our control',
        body: 'Delivery timelines may be affected by weather, strikes, civil unrest, carrier network disruption, regulatory restrictions and other events beyond our reasonable control. We will keep you informed and work to deliver as soon as conditions allow; the force majeure provisions of our Terms & Conditions apply.',
      },
    ],
  },
  {
    title: '8. Contact',
    content: [
      {
        heading: 'Shipping and delivery queries',
        body: `For anything relating to dispatch, tracking or delivery, email ${company.email} or call ${company.phone} during business hours (${company.businessHours}). Written correspondence can be addressed to ${company.legalName}, ${addressOneLine}.`,
      },
    ],
  },
]

export default function ShippingPolicy() {
  return (
    <LegalPage
      title="Shipping Policy"
      summary="How orders are dispatched, shipped, tracked and delivered."
      lastUpdated="September 22, 2026"
      effective="September 22, 2026"
      preamble={`This Shipping Policy is issued by ${company.legalName} (GSTIN ${company.gstin}), whose registered office is at ${addressOneLine}. ${company.brandAttribution} It applies to every order dispatched through the Aeros platform and forms part of our Terms & Conditions.`}
      sections={sections}
    />
  )
}
