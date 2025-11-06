import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { DarkModeProvider } from '@/contexts/DarkModeContext'
import { MenuProvider } from '@/contexts/MenuContext'
import { MobileSidebar } from '@/components/MobileSidebar'
import { BlurWrapper } from '@/components/BlurWrapper'
import { Toaster } from 'sonner'
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