import type { Metadata } from 'next'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Aeros Mail Privacy Policy — Aeros',
  description:
    'How the Aeros Mail app for iPhone, iPad and Mac handles your email: stored on your device, sent only to your mail provider, and to Anthropic only if you add your own Claude API key.',
}

const sections = [
  {
    title: '1. The short version',
    content: [
      {
        heading: 'Your mail stays between you and your mail provider',
        body: 'Aeros Mail has no Aeros server and no Aeros account. The app talks directly from your device to Google (Gmail) or Microsoft (Outlook and Microsoft 365). We, Boson Machines OPC Pvt Ltd, never receive, store or see your email, contacts or sign-in details.',
      },
      {
        heading: 'No tracking',
        body: 'Aeros Mail contains no analytics, advertising, crash-reporting or tracking software. It does not build a profile of you and does not share data with data brokers or advertisers.',
      },
    ],
  },
  {
    title: '2. What the app stores, and where',
    content: [
      {
        heading: 'On your device',
        body: 'When you connect an account, Aeros Mail downloads recent messages, labels or folders, and drafts from your provider and keeps a copy in a database inside the app\'s private storage on your device, so the app works quickly and offline. Labels, priorities and summaries that the app\'s AI features produce are stored only in this database and are never written back to your mail provider.',
      },
      {
        heading: 'Sign-in tokens',
        body: 'Signing in with Google or Microsoft gives the app access tokens. They are stored in your device\'s Keychain and are only ever sent back to the provider that issued them. Aeros Mail never sees your password; you enter it on Google\'s or Microsoft\'s own sign-in page.',
      },
      {
        heading: 'Your Claude API key',
        body: 'If you choose to add your own Anthropic API key for the optional cloud AI features, it is stored in your device\'s Keychain and sent only to Anthropic.',
      },
    ],
  },
  {
    title: '3. Who the app sends data to',
    content: [
      {
        heading: 'Google and Microsoft',
        body: 'To show, send, organize and search your mail, the app exchanges data with the provider of each account you connect: the Gmail API (Google) or Microsoft Graph (Microsoft). Those providers process your mail under their own privacy policies, as they already do for your mailbox.',
      },
      {
        heading: 'Apple, on your device',
        body: 'By default, AI features such as sorting, summaries and draft replies run with Apple\'s on-device intelligence models. That processing happens on your device; Aeros does not receive it.',
      },
      {
        heading: 'Anthropic, only if you turn it on',
        body: 'Cloud AI is off unless you add your own Anthropic API key in Settings. When it is on, the text of the specific messages a feature needs (for example the thread you ask to summarize or reply to) is sent to Anthropic\'s Claude API using your key. Before anything leaves your device, the app masks card-like numbers, long number runs, and password- or token-style lines. Anthropic processes these requests under its own commercial terms and privacy policy. Remove the key at any time to stop all cloud AI requests.',
      },
      {
        heading: 'Nobody else',
        body: 'Aeros Mail does not send your data to Aeros or to any other party, and we do not sell it.',
      },
    ],
  },
  {
    title: '4. Google user data',
    content: [
      {
        heading: 'Limited Use',
        body: 'Aeros Mail\'s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Gmail data is used only to provide the mail features you see in the app. It is never used for advertising, never sold, and is transferred to a third party (Anthropic) only when you turn on cloud AI and only to provide the feature you asked for. No human at Aeros reads your Gmail data.',
      },
      {
        heading: 'No AI training',
        body: 'Aeros Mail does not use Google Workspace API data, including Gmail data, to develop, improve or train generalized or non-personalized AI or machine-learning models. Anthropic\'s commercial API terms do not permit Anthropic to train its models on content sent through the API.',
      },
      {
        heading: 'Permissions requested',
        body: 'Gmail: read, compose, send and manage your messages and labels (gmail.modify), plus your basic profile and email address to identify the account. Microsoft: read and write your mail (Mail.ReadWrite), send mail as you (Mail.Send), and your basic profile (User.Read), plus offline access so the app can keep syncing.',
      },
    ],
  },
  {
    title: '5. Your choices and deleting your data',
    content: [
      {
        heading: 'Remove an account',
        body: 'In Settings, removing an account deletes its local mail database entries and its sign-in tokens from your device. Deleting the app removes everything it stored.',
      },
      {
        heading: 'Revoke access',
        body: 'You can also revoke Aeros Mail\'s access at any time from your Google Account (Security › Third-party apps with account access) or your Microsoft account (Privacy › Apps and services).',
      },
      {
        heading: 'Notifications',
        body: 'New-mail notifications are generated on your device from mail the app has already downloaded. You can turn them off in the app\'s Settings or in your device\'s Settings.',
      },
    ],
  },
  {
    title: '6. Children',
    content: [
      {
        heading: 'Age',
        body: 'Aeros Mail is not directed to children under 13 and we do not knowingly collect personal information from children.',
      },
    ],
  },
  {
    title: '7. Changes and contact',
    content: [
      {
        heading: 'Changes',
        body: 'If the way Aeros Mail handles data changes, we will update this page and its "Last updated" date before the change ships in the app.',
      },
      {
        heading: 'Contact',
        body: 'Questions about Aeros Mail and privacy: support@aeros-x.com, or Boson Machines OPC Pvt Ltd, Data Protection Officer, 76/612, Motilal Nagar no. 1, Goregaon West, Mumbai, Maharashtra 400104, India.',
      },
    ],
  },
]

export default function AerosMailPrivacy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-bg-subtle border-b border-border-default">
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-fg-muted/60 mb-4">
            Legal · Aeros Mail
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fg-primary tracking-tight mb-4">
            Aeros Mail Privacy Policy
          </h1>
          <p className="text-fg-muted text-lg leading-relaxed mb-6">
            Aeros Mail is a mail app for iPhone, iPad and Mac. Your mail lives on your device and with your mail provider, not with us.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-fg-muted/60 font-mono">
            <span>Last updated: November 11, 2026</span>
            <span>Effective: November 8, 2026</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl border border-border-default bg-bg-subtle">
            <p className="text-fg-primary-800 leading-relaxed text-[15px]">
              This notice explains how the Aeros Mail app, published by Boson Machines OPC Pvt Ltd (&quot;Aeros&quot;, &quot;we&quot;, &quot;us&quot;), handles information. It applies only to Aeros Mail. The{' '}
              <a href="/privacy" className="text-fg-primary underline">
                Aeros Privacy Policy
              </a>{' '}
              covers our other products and services.
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
                      <h3 className="text-[15px] font-semibold text-fg-primary mb-2">{item.heading}</h3>
                      <p className="text-fg-muted text-[15px] leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
