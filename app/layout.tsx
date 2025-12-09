import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MedDrone - Fast & Eco-Friendly Medical Delivery",
  description:
    "Revolutionary drone delivery system for hospitals, pharmacies, and emergency medical services. Fast, safe, and environmentally sustainable.",
  keywords: "medical drone delivery, healthcare logistics, eco-friendly medicine transport, emergency medical delivery",
  openGraph: {
    title: "MedDrone - Medical Drone Delivery System",
    description: "Fast, safe, and eco-friendly drone delivery for medical supplies and medicines",
    type: "website",
  },
 
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(0.99 0 0)" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.12 0 0)" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      {/* Dark mode favicon */}
        <link
          rel="icon"
          href="logo-dark.jpg"
          media="(prefers-color-scheme: dark)"
          type="image/png"
          />
      <body className={`font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
