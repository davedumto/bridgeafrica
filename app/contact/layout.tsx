import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact BridgeAfrica | Schedule a Call, View Profiles & Request Talent Shortlists',
  description: 'Ready to diversify your team with Africa\'s top 1% talent? Book a 15-minute call, view sample profiles of our vetted professionals, or request a custom shortlist of candidates. Get started with BridgeAfrica\'s 72-hour talent placement service today.',
  keywords: 'contact BridgeAfrica, schedule call African talent, request talent shortlist, African software engineers contact, hire African developers, talent placement consultation',
  openGraph: {
    title: 'Contact BridgeAfrica | Get Started with Top African Talent',
    description: 'Book a call, view profiles, or request a shortlist. Connect with Africa\'s top 1% talent through our managed placement service.',
    url: 'https://www.bridgeafricahq.com/contact',
  },
  alternates: {
    canonical: 'https://www.bridgeafricahq.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}