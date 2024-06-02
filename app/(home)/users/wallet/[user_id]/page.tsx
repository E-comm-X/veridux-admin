"use client"
import { GoBack } from "@/components/GoBack"
import React from "react"
import { useGetEndUserWalletInfoQuery } from "@/services/wallet.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useParams, useSearchParams } from "next/navigation"
import { TransactionI } from "@/interfaces/transactions"
import { LoadingOutlined } from "@ant-design/icons"
import { H2 } from "@/components/Typography"
import { WalletMetaData } from "@/components/WalletMetaData"
import { WalletI } from "@/interfaces/Wallet"
import { TransactionsTableAlt } from "@/components/TransactionsTableAlt"
import { useGetUserQuery } from "@/services/usergroup.service"
import { Avatar, Image } from "antd"

const UserWallet = () => {
  const user_id = useSearchParams().get("user_id") as string
  const { user_id: enduser_id } = useParams() as { user_id: string }
  const { token: authToken } = useAuthToken() as { token: string }
  const { data, isLoading } = useGetEndUserWalletInfoQuery({
    authToken,
    enduser_id,
  })
  const { data: user, isLoading: loadingProfile } = useGetUserQuery({
    authToken,
    user_id,
  })
  const loading = isLoading || loadingProfile
  return (
    <div>
      <GoBack />
      <h2 className="text-2xl text-black font-bold mt-3 mb-7">User Wallet</h2>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div>
        {loading ? (
          <div>
            <LoadingOutlined />
            <span className="ml-2">Loading User Wallet...</span>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-7">
              {user?.data?.user?.profile_picture ? (
                <Image
                  src={user?.data?.user?.profile_picture}
                  width={52}
                  height={52}
                  alt=""
                  className="object-cover rounded-full"
                  preview
                />
              ) : (
                <Avatar
                  size={52}
                  src={user?.data?.user?.profile_picture}
                  // icon={<UserOutlined />}
                  className="bg-primary uppercase"
                >
                  {user?.data?.user?.firstname[0] || "N"}
                  {user?.data?.user?.lastname[0] || "/A"}
                </Avatar>
              )}

              <div>
                <p className="capitalize">
                  {user?.data?.user?.firstname} {user?.data?.user?.lastname}
                </p>
                <p className="text-sm">{user?.data?.user?.email}</p>
              </div>
            </div>
            <WalletMetaData data={data as WalletI} />
            <H2 className="mt-10 mb-5">Transactions</H2>
            <TransactionsTableAlt
              data={data?.transactions as TransactionI[]}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default UserWallet
