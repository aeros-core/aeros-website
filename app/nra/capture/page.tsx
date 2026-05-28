import type { Metadata } from 'next'
import ExhibitorCaptureClient from './ExhibitorCaptureClient'

export const metadata: Metadata = {
  title: 'NRA Show — Exhibitor Capture',
  description: 'Internal lead-capture tool for the NRA Show floor.',
  robots: { index: false, follow: false },
}

export default function NraCapturePage() {
  return <ExhibitorCaptureClient />
}
