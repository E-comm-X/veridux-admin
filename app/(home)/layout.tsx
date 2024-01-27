import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppContainer } from "@/components/AppContainer"
import { RestrictedPages } from "@/components/RestrictedPages"

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
        <RestrictedPages>
          <AppContainer>{children}</AppContainer>
        </RestrictedPages>
      </body>
    </html>
  )
}
