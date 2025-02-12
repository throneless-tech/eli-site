import { Providers } from '../providers'

import type { Metadata } from 'next'
// import './globals.css'

export const metadata: Metadata = {
  title: "Gallery | Eli's Site",
  description: 'Photos of Eli and that he took.',
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
