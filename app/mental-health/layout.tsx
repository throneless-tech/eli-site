import { Providers } from '../providers'

import type { Metadata } from 'next'
// import './globals.css'

export const metadata: Metadata = {
  title: "Mental Health | Eli's Site",
  description: 'Mental health was essential to Eli.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>{children}</Providers>  
  )
}
