import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Navigation } from "@/components/layout/navigation"
import dynamic from "next/dynamic"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const CookieConsent = dynamic(() => import("@/components/cookie-consent"), {
  ssr: false,
})

export const metadata = {
  title: "arc muetze - Nachhaltige Architektur",
  description: "Wir erschaffen nicht nur Gebäude, sondern nachhaltige Lebensräume im Einklang mit der Natur.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
