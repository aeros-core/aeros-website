import type { Metadata } from 'next'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Aeros Mail — Fast, private email for iPhone, iPad and Mac',
  description:
    'Aeros Mail is a native mail app for Gmail and Outlook on iPhone, iPad and Mac. Keyboard-first, on-device AI, and your mail stays on your device and with your provider.',
}

const appStoreUrl = 'https://apps.apple.com/app/id6832177430'

const features = [
  {
    title: 'Gmail and Outlook in one inbox',
    body: 'Sign in with Google or Microsoft and read, archive, label, snooze, search and send mail from every account in one place. Changes sync straight back to your mailbox.',
  },
  {
    title: 'Built for the keyboard',
    body: 'Single-key shortcuts and a command palette for every action, so you can clear your inbox without touching the mouse.',
  },
  {
    title: 'AI that runs on your device',
    body: 'Sorting, summaries and draft replies use Apple’s on-device intelligence by default. Cloud AI is optional and only runs with your own Anthropic API key.',
  },
  {
    title: 'Works offline',
    body: 'Recent mail is kept in a private database on your device, so the app opens instantly and stays usable without a connection.',
  },
]

const dataPoints = [
  {
    heading: 'No Aeros server',
    body: 'The app talks directly from your device to Google (Gmail API) or Microsoft (Microsoft Graph). Boson Machines OPC Pvt Ltd never receives, stores or reads your email.',
  },
  {
    heading: 'What the Gmail permission is for',
    body: 'Aeros Mail asks for permission to read, compose, send and manage your Gmail messages and labels. It uses that only to show your mail, apply the changes you make (archive, label, star, mark read, trash), sync drafts and send mail you write.',
  },
  {
    heading: 'Limited Use',
    body: 'Aeros Mail’s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Gmail data is never used for advertising, never sold, and never used to train AI models.',
  },
  {
    heading: 'You stay in control',
    body: 'Removing an account in Settings deletes its mail and sign-in tokens from your device. You can also revoke access at any time from your Google or Microsoft account.',
  },
]

export default function AerosMail() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-bg-subtle border-b border-border-default">
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Apps · Aeros Mail
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg-primary tracking-tight mb-4">Aeros Mail</h1>
          <p className="text-fg-muted text-lg leading-relaxed mb-8">
            A fast, private mail app for Gmail and Outlook on iPhone, iPad and Mac. Your mail lives on your device and
            with your mail provider, not with us.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={appStoreUrl}
              className="inline-flex items-center rounded-full bg-fg-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              Download on the App Store
            </a>
            <a
              href="/aeros-mail/privacy"
              className="inline-flex items-center rounded-full border border-border-default px-5 py-2.5 text-sm font-semibold text-fg-primary"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-xl font-bold text-fg-primary mb-6 pb-3 border-b border-border-default">What it does</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title}>
                  <h3 className="text-[15px] font-semibold text-fg-primary mb-2">{f.title}</h3>
                  <p className="text-fg-muted text-[15px] leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-fg-primary mb-6 pb-3 border-b border-border-default">
              How Aeros Mail handles your data
            </h2>
            <div className="space-y-6">
              {dataPoints.map((d) => (
                <div key={d.heading}>
                  <h3 className="text-[15px] font-semibold text-fg-primary mb-2">{d.heading}</h3>
                  <p className="text-fg-muted text-[15px] leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-fg-muted text-[15px] leading-relaxed">
              The full details are in the{' '}
              <a href="/aeros-mail/privacy" className="text-fg-primary underline">
                Aeros Mail Privacy Policy
              </a>
              . Use of the app is covered by our{' '}
              <a href="/terms" className="text-fg-primary underline">
                Terms &amp; Conditions
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-fg-primary mb-6 pb-3 border-b border-border-default">Support</h2>
            <p className="text-fg-muted text-[15px] leading-relaxed">
              Questions or problems with Aeros Mail: write to{' '}
              <a href="mailto:support@aeros-x.com" className="text-fg-primary underline">
                support@aeros-x.com
              </a>
              . Aeros Mail is published by Boson Machines OPC Pvt Ltd.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
