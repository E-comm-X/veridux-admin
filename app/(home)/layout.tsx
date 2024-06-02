import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppContainer } from "@/components/AppContainer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Veridux Admin",
  description: "Veridux Admin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={""}>
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  )
}
