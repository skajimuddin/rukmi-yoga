// This is git branch V2
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "RUKMI YOGA",
  description: "RUKMI YOGA",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
