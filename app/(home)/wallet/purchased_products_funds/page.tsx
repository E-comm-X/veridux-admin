"use client"
import moment from "moment"
import { useAuthToken } from "@/hooks/useAuthToken"
import { TransactionsTable } from "@/components/TransactionsTable"
import { TransactionI } from "@/interfaces/transactions"
import { LoadingOutlined } from "@ant-design/icons"
import { H2 } from "@/components/Typography"
import { useGetWalletInfoQuery } from "@/services/wallet.service"
import { usePathname } from "next/navigation"
import { WalletMetaData } from "@/components/WalletMetaData"
import { WalletI } from "@/interfaces/Wallet"

export default function Home() {
  const pathname = usePathname()
  const purpose = pathname.split("/")[pathname.split("/").length - 1]
  const { token } = useAuthToken()
  const { data, isLoading } = useGetWalletInfoQuery({
    authToken: token as string,
    purpose,
  })
  return (
    <main className="min-h-[82vh]">
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">
            Purchased Products Funds Wallet
          </h2>
          <p className="font-normal text-base text-[#0000006E]">
            {moment().format("LL")}
          </p>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div>
        {isLoading ? "..." : <WalletMetaData data={data as WalletI} />}

        <H2 className="mt-10 mb-5">Transactions</H2>
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <TransactionsTable
            data={data?.transactions as TransactionI[]}
            isLoading={isLoading}
          />
        )}
      </div>
    </main>
  )
}
