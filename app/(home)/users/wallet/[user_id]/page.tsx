"use client"
import { GoBack } from "@/components/GoBack"
import React from "react"
import { useGetEndUserWalletInfoQuery } from "@/services/wallet.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useParams } from "next/navigation"

const UserWallet = () => {
  const { user_id: enduser_id } = useParams() as { user_id: string }
  const { token: authToken } = useAuthToken() as { token: string }
  const { data } = useGetEndUserWalletInfoQuery({ authToken, enduser_id })
  console.log(data)
  return (
    <div>
      <GoBack />
      <h2 className="text-2xl text-black font-bold mt-3 mb-7">User Wallet</h2>
    </div>
  )
}

export default UserWallet
