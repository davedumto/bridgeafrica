'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface DarkModeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check if there's a saved preference, otherwise default to dark
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      setIsDarkMode(JSON.parse(saved))
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
      if (isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [isDarkMode, mounted])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <DarkModeContext.Provider value={{ isDarkMode: true, toggleDarkMode: () => {} }}>
        <div className="dark">{children}</div>
      </DarkModeContext.Provider>
    )
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? 'dark' : ''}>
        {children}
      </div>
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}