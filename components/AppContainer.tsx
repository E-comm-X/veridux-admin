"use client"
import React, { useEffect } from "react"
import { Header } from "./Header"
import { MainBody } from "./MainBody"
import { Provider } from "react-redux"
import { store } from "@/context/store"
import { usePathname, useRouter } from "next/navigation"
import { RestrictedPages } from "./RestrictedPages"
import { useRole } from "@/hooks/useRole"

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()
  const { role } = useRole()
  const router = useRouter()
  
  useEffect(() => {
    const vendorPaths = ["/", "/stores", "/product", "/deliveries", "/account"]
    if (role.toLowerCase() === "vendor" && !vendorPaths.includes(pathName)) {
      router.replace("/")
    }
  }, [pathName, role, router])

  return (
    <Provider store={store}>
      <RestrictedPages>
        <Header />
        <MainBody>{children}</MainBody>
      </RestrictedPages>
    </Provider>
  )
}
