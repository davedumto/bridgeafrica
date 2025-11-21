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
  title: 'BridgeAfrica - Number 1 Platform for Africa\'s Infrastructure Stories | Project Intelligence & Analysis',
  description: 'The definitive source for African infrastructure intelligence. Track major projects, financing networks, and development stories across transportation, energy, and telecommunications.',
  keywords: 'African infrastructure, Nigerian projects, infrastructure financing, development projects Africa, transportation Africa, energy projects, telecommunications infrastructure, African construction',
  authors: [{ name: 'BridgeAfrica' }],
  creator: 'BridgeAfrica',
  publisher: 'BridgeAfrica',
  alternates: {
    canonical: 'https://www.bridgeafricahq.com',
  },
  openGraph: {
    title: 'BridgeAfrica - Africa\'s Infrastructure Intelligence',
    description: 'The definitive source for African infrastructure intelligence. Track major projects, financing networks, and development stories.',
    url: 'https://www.bridgeafricahq.com',
    siteName: 'BridgeAfrica',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.bridgeafricahq.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BridgeAfrica - Africa\'s Infrastructure Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BridgeAfrica - Africa\'s Infrastructure Intelligence',
    description: 'The definitive source for African infrastructure intelligence. Track major projects and development stories.',
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
                      "description": "The definitive source for African infrastructure intelligence. Track major projects, financing networks, and development stories across transportation, energy, and telecommunications.",
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
                      "name": "BridgeAfrica - Africa's Infrastructure Intelligence",
                      "description": "The definitive source for African infrastructure intelligence and project tracking.",
                      "publisher": {
                        "@id": "https://www.bridgeafricahq.com/#organization"
                      },
                      "inLanguage": "en-US"
                    },
                    {
                      "@type": "Service",
                      "@id": "https://www.bridgeafricahq.com/#service",
                      "serviceType": "Infrastructure Intelligence Service",
                      "name": "African Infrastructure Intelligence",
                      "description": "Comprehensive infrastructure intelligence platform providing real-time tracking, analysis, and documentation of major African development projects.",
                      "provider": {
                        "@id": "https://www.bridgeafricahq.com/#organization"
                      },
                      "areaServed": {
                        "@type": "Place",
                        "name": "Global"
                      },
                      "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Infrastructure Intelligence Services",
                        "itemListElement": [
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Project Tracking",
                              "description": "Real-time monitoring and analysis of major African infrastructure projects"
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Network Mapping",
                              "description": "Comprehensive mapping of financing, stakeholders, and procurement networks"
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Market Analysis",
                              "description": "In-depth analysis of regulatory frameworks, policies, and geopolitical dynamics"
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