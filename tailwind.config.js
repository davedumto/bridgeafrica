/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2342',
          dark: '#1F2937'
        },
        secondary: {
          DEFAULT: '#D0312D',
          dark: '#EF4444'
        },
        accent: {
          DEFAULT: '#F6BE00',
          dark: '#FBBF24'
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#111827'
        },
        surface: {
          DEFAULT: '#f9fafb',
          dark: '#1F2937'
        },
        'surface-elevated': {
          DEFAULT: '#ffffff',
          dark: '#374151'
        }
      }
    },
  },
  plugins: [],
}