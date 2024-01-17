import { Providers } from './providers'

import type { Metadata } from 'next'
import { Chivo } from 'next/font/google'
// import './globals.css'

const chivo = Chivo({ subsets: ['latin'] })

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
      <body className={chivo.className}>
        <Providers>{children}</Providers>  
      </body>
    </html>
  )
}
