"use client"
import { useAuthToken } from "@/hooks/useAuthToken"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { jwtDecode } from "jwt-decode"

export const RestrictedPages = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const router = useRouter()
  const { token, setToken } = useAuthToken()
  useEffect(() => {
    try {
      const { exp: expiryTime } = jwtDecode(token as string)
      const currentDate = new Date()
      const currentTime = currentDate.getTime()
      if (!token) {
        router.replace("/auth-signin")
      }
      if (currentTime > (expiryTime as number) * 10) {
        setToken("")
        router.replace("/auth-signin")
      }
    } catch (error) {
      router.replace("/auth-signin")
    }
  }, [token])
  return <React.Fragment>{children}</React.Fragment>
}
