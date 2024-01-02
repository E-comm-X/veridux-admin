"use client"
import React from "react"
import { Header } from "./Header"
import { MainBody } from "./MainBody"
import { Provider } from "react-redux"
import { store } from "@/context/store"
import { usePathname } from "next/navigation"

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()
  return (
    <Provider store={store}>
      <Header />
      <MainBody>{children}</MainBody>
    </Provider>
  )
}
