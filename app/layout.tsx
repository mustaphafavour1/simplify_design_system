import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'
import { getNavSections } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Simplify Synergy — Design System',
  description: 'The official design system for Simplify Synergy products.',
  icons: {
    icon: '/public/simplify-icon.png',
    apple: '/public/simplify-icon.png',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch dynamic nav sections from Sanity.
  // Falls back to empty array gracefully if Sanity isn't connected yet.
  let dynamicSections = []
  try {
    dynamicSections = await getNavSections()
  } catch {
    // Sanity not configured yet — use static nav only
  }

  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Sidebar dynamicSections={dynamicSections} />
          <div className="main-area">
            <TopBar />
            <main className="page-content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}