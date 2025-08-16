import type React from "react"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
})

export const metadata = {
  title: "QClinic - Healthcare Queue Management System",
  description: "Less waiting, more healing. Where patient time matters most.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
