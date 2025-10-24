import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { DarkModeProvider } from '@/contexts/DarkModeContext'
import { MenuProvider } from '@/contexts/MenuContext'
import { MobileSidebar } from '@/components/MobileSidebar'
import { BlurWrapper } from '@/components/BlurWrapper'
import './globals.css'

export const metadata: Metadata = {
  title: 'BridgeAfrica - Africa\'s Top 1% Talent',
  description: 'Software · Admin · Creative — we place the best',
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
          </MenuProvider>
        </DarkModeProvider>
      </body>
    </html>
  )
}