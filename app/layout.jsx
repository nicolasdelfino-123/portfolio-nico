import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio - Desarrollador Full Stack",
  description:
    "Portfolio profesional de desarrollador full stack especializado en React, Node.js y tecnologías modernas",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
