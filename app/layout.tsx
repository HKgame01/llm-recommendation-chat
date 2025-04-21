import type React from "react"
import Sidebar from "./components/sidebar"
import "../app/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-background">
          <Sidebar />
          <main className="flex-1 ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
