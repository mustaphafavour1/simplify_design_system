import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'

export const metadata: Metadata = {
  title: 'Simplify Synergy — Design System',
  description: 'The official design system for Simplify Synergy products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Sidebar />
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