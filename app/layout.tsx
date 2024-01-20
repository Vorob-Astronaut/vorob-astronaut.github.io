import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const font = localFont({ src: './fonts/ClashDisplay-Variable.ttf' })

export const metadata: Metadata = {
  title: 'Receiptify',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
