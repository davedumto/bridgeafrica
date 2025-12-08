'use client'

import { Navigation } from '@/components/Navigation'
import { MobileSidebar } from '@/components/MobileSidebar'
import { BlurWrapper } from '@/components/BlurWrapper'
import { FloatingCTAButton } from '@/components/FloatingCTAButton'
import { MenuProvider } from '@/contexts/MenuContext'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MenuProvider>
      <Navigation />
      <MobileSidebar />
      <BlurWrapper>
        {children}
      </BlurWrapper>
      <FloatingCTAButton />
    </MenuProvider>
  )
}
