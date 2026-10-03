import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Cracker's Arcade",
  description: 'A small collection of big adventures, made for curious people.',
  generator: '',
  icons: {
    icon: [
      {
        url: '',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '',
        type: 'image/svg+xml',
      },
    ],
    apple: '',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f7f9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
