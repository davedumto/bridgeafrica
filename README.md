# BridgeAfrica - Talent Marketplace

**Connecting visionary companies with Africa's top 1% talent**

A modern, responsive Next.js 15 application showcasing BridgeAfrica's talent placement services. Built with TypeScript, Tailwind CSS, and featuring a comprehensive dark mode implementation.

## 🌟 Features

### Design & UX
- **Responsive Design**: Mobile-first approach with fluid layouts across all devices
- **Dark Mode**: Complete dark/light theme switching with smooth transitions
- **Animated UI Elements**: 
  - Smooth scroll parallax effects on decorative elements
  - Animated hamburger menu and dark mode toggles
  - Sliding mobile sidebar with rounded corners and borders
  - Curved section dividers with proper dark mode support

### Navigation & Layout
- **Smart Mobile Menu**: Slides from right with backdrop blur on page content only
- **Selective Blur Effects**: Navigation and sidebar stay sharp while content gets blurred
- **Animated Icons**: Rotating transitions for hamburger/close and sun/moon icons
- **Sticky Navigation**: Fixed header with backdrop blur and transparency

### Content & Sections
- **Hero Section**: Compelling headline with animated geometric backgrounds
- **Value Propositions**: Card-based layout with hover effects and dark mode borders
- **Process Overview**: Step-by-step breakdown of BridgeAfrica's approach
- **Testimonials**: Auto-rotating client testimonials with manual navigation
- **Contact Options**: Multiple engagement paths (calls, profiles, shortlists)

### Technical Implementation
- **Next.js 15**: Latest App Router with server-side rendering
- **TypeScript**: Full type safety across components and contexts
- **Tailwind CSS**: Utility-first styling with custom design system colors
- **Component Architecture**: Reusable, composable React components
- **Context Management**: Dark mode and menu state handled via React Context

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bridgeafrica
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary Navy**: `#0A2342` (headings, borders, buttons)
- **Accent Red**: `#D0312D` (CTAs, highlights) 
- **Accent Yellow**: `#F6BE00` (decorative elements, icons)
- **Dark Mode**: Slate color palette (slate-700, slate-800, slate-900)

### Typography
- **Headings**: Bold, hierarchy-respecting sizes from mobile to desktop
- **Body Text**: Optimized line-height (1.7) for readability
- **Interactive Elements**: Hover states and focus indicators

## 📱 Mobile Experience

- **Reduced Hero Height**: 80vh on mobile vs full screen on desktop
- **Optimized Decorations**: Smaller, repositioned geometric elements
- **Touch-Friendly**: Larger tap targets and appropriate spacing
- **Slide-Out Menu**: 30vh height with elegant rounded corners and borders

## 🌙 Dark Mode Implementation

- **System Preference**: Detects user's OS preference on first visit
- **Persistent**: Remembers choice in localStorage
- **Comprehensive**: All components, borders, and backgrounds adapt
- **Smooth Transitions**: 300ms duration across all color changes

## 📄 Pages

- **Home** (`/`): Main landing page with hero, features, and testimonials
- **About** (`/about`): Company story, mission, and team approach  
- **Contact** (`/contact`): Multiple engagement options and contact form

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context
- **Build Tool**: Next.js built-in compiler
- **Deployment Ready**: Optimized static generation

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/page.tsx     # About page
│   ├── contact/page.tsx   # Contact page
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── AnimatedSection.tsx
│   ├── BlurWrapper.tsx    # Blur effect management
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── MobileSidebar.tsx  # Mobile sidebar component
│   ├── Navigation.tsx     # Header navigation
│   └── SectionDivider.tsx # Curved section separators
└── contexts/              # React Context providers
    ├── DarkModeContext.tsx # Dark mode state management
    └── MenuContext.tsx     # Mobile menu state management
```

## 🎯 Key Interactions

1. **Dark Mode Toggle**: Animated sun/moon icon transitions
2. **Mobile Menu**: Hamburger transforms to X with sliding sidebar
3. **Scroll Effects**: Geometric elements move on scroll with smooth easing
4. **Card Hovers**: Elevation and shadow changes on interactive elements
5. **Form Interactions**: Focus states and validation feedback

---

Built with ❤️ for connecting global companies with African talent.
