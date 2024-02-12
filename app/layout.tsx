import { Providers } from './providers'

import type { Metadata } from 'next'
// import './globals.css'

export const metadata: Metadata = {
  title: "Eli's Site",
  description: 'A memorial website for Eli Cragin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>  
      </body>
    </html>
  )
}
