"use client"
import "./globals.css"
import { Provider } from "react-redux"
import { store } from "@/context/store"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={""}>{children}</body>
      </Provider>
    </html>
  )
}
