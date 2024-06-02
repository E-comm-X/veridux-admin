"use client"
import { useAuthToken } from "@/hooks/useAuthToken"
import React, { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { jwtDecode } from "jwt-decode"
import { useGetUserDataQuery } from "@/services/auth.service"
import { useRole } from "@/hooks/useRole"

export const RestrictedPages = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const { token, setToken } = useAuthToken()
  const { setRole } = useRole()
  const { isError, refetch } = useGetUserDataQuery({
    authToken: token as string,
  })
  useEffect(() => {
    if (!token) {
      return router.replace("/auth")
    }
    try {
      const { exp: expiryTime } = jwtDecode(token as string)
      const currentDate = new Date()
      const currentTime = currentDate.getTime()

      if (currentTime > (expiryTime as number) * 10) {
        setToken("")
        setRole("")
        return router.replace("/auth")
      }
    } catch (error) {
      return router.replace("/auth")
    }
  }, [token])

  useEffect(() => {
    if (isError) {
      setToken("")
      setRole("")
      return router.replace("/auth")
    }
  }, [isError])

  useEffect(() => {
    refetch()
  }, [pathname])

  return <React.Fragment>{children}</React.Fragment>
}
