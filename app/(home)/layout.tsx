import type { Metadata } from "next"
import "./globals.css"
import { AppContainer } from "@/components/AppContainer"

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
