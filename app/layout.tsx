import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { MainBody } from "@/components/MainBody"

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
        <Header />
        <MainBody>{children}</MainBody>
      </body>
    </html>
  )
}
