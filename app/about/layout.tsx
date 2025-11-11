import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BridgeAfrica | Our Story & Mission to Connect Global Companies with African Talent',
  description: 'Learn about BridgeAfrica\'s journey from UC Berkeley Haas experiment to premier African talent placement service. Discover our operator DNA, rigorous vetting process, and commitment to building resilient global teams with Africa\'s top 1% talent.',
  keywords: 'BridgeAfrica story, African talent company, UC Berkeley Haas, talent placement service mission, African software engineers company, remote team building Africa',
  openGraph: {
    title: 'About BridgeAfrica | Our Story & Mission',
    description: 'Learn about BridgeAfrica\'s journey to becoming the premier African talent placement service connecting global companies with top 1% talent.',
    url: 'https://www.bridgeafricahq.com/about',
  },
  alternates: {
    canonical: 'https://www.bridgeafricahq.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}