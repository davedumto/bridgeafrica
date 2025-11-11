import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { DarkModeProvider } from '@/contexts/DarkModeContext'
import { MenuProvider } from '@/contexts/MenuContext'
import { MobileSidebar } from '@/components/MobileSidebar'
import { BlurWrapper } from '@/components/BlurWrapper'
import { FloatingCTAButton } from '@/components/FloatingCTAButton'
import { Toaster } from 'sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'BridgeAfrica - Africa\'s Top 1% Talent | Remote Software Engineers & Admin Professionals',
  description: 'Connect with Africa\'s top 1% software engineers, administrators, and creative professionals. Managed talent placement service with 72-hour delivery. Build resilient global teams.',
  keywords: 'African software developers, remote developers Africa, outsourcing to Africa, Nigerian developers, Kenyan engineers, South African talent, React developers Africa, Python engineers Africa',
  authors: [{ name: 'BridgeAfrica' }],
  creator: 'BridgeAfrica',
  publisher: 'BridgeAfrica',
  alternates: {
    canonical: 'https://www.bridgeafricahq.com',
  },
  openGraph: {
    title: 'BridgeAfrica - Africa\'s Top 1% Talent',
    description: 'Connect with Africa\'s top 1% software engineers, administrators, and creative professionals. 72-hour talent placement service.',
    url: 'https://www.bridgeafricahq.com',
    siteName: 'BridgeAfrica',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.bridgeafricahq.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BridgeAfrica - Connecting companies with Africa\'s top talent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BridgeAfrica - Africa\'s Top 1% Talent',
    description: 'Connect with Africa\'s top 1% software engineers, administrators, and creative professionals.',
    images: ['https://www.bridgeafricahq.com/twitter-card.png'],
    creator: '@bridgeafrica',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen">
        <DarkModeProvider>
          <MenuProvider>
            <Navigation />
            <MobileSidebar />
            <BlurWrapper>
              {children}
            </BlurWrapper>
            <FloatingCTAButton />
            
            {/* Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                    {
                      "@type": "Organization",
                      "@id": "https://www.bridgeafricahq.com/#organization",
                      "name": "BridgeAfrica",
                      "alternateName": "BridgeAfrica HQ",
                      "url": "https://www.bridgeafricahq.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.bridgeafricahq.com/bluelogo.svg",
                        "width": 160,
                        "height": 40
                      },
                      "description": "Connect with Africa's top 1% software engineers, administrators, and creative professionals. Managed talent placement service with 72-hour delivery.",
                      "contactPoint": [
                        {
                          "@type": "ContactPoint",
                          "telephone": "+1-XXX-XXX-XXXX",
                          "contactType": "customer service",
                          "availableLanguage": "English"
                        }
                      ],
                      "sameAs": [
                        "https://linkedin.com/company/bridgeafrica",
                        "https://twitter.com/bridgeafrica"
                      ],
                      "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "US"
                      }
                    },
                    {
                      "@type": "WebSite",
                      "@id": "https://www.bridgeafricahq.com/#website",
                      "url": "https://www.bridgeafricahq.com",
                      "name": "BridgeAfrica - Africa's Top 1% Talent",
                      "description": "Connect with Africa's top 1% software engineers, administrators, and creative professionals.",
                      "publisher": {
                        "@id": "https://www.bridgeafricahq.com/#organization"
                      },
                      "inLanguage": "en-US"
                    },
                    {
                      "@type": "Service",
                      "@id": "https://www.bridgeafricahq.com/#service",
                      "serviceType": "Talent Placement Service",
                      "name": "African Talent Placement",
                      "description": "Managed talent placement service connecting companies with Africa's top 1% software engineers, administrators, and creative professionals with 72-hour delivery.",
                      "provider": {
                        "@id": "https://www.bridgeafricahq.com/#organization"
                      },
                      "areaServed": {
                        "@type": "Place",
                        "name": "Global"
                      },
                      "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Talent Services",
                        "itemListElement": [
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Software Engineering Talent",
                              "description": "Top-tier African software engineers and developers"
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Administrative Talent",
                              "description": "Skilled African administrative and operational professionals"
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Creative Talent",
                              "description": "Creative professionals including designers and content creators"
                            }
                          }
                        ]
                      }
                    }
                  ]
                })
              }}
            />
            
            <Toaster 
              position="bottom-right"
              toastOptions={{
                style: {
                  background: '#ffffff',
                  color: '#0A2342',
                  border: '1px solid #e2e8f0',
                },
                className: 'sonner-toast',
              }}
              theme="light"
              richColors
            />
          </MenuProvider>
        </DarkModeProvider>
      </body>
    </html>
  )
}