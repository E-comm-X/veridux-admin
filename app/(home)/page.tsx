"use client"
import Summaries from "@/components/Summaries"
import SaleByLocationSideBar from "@/components/SaleByLocationSideBar"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import { VendorStatistics } from "./VendorStatistics"
import { Button } from "@mui/material"
import { OverviewTab } from "./OverviewTab"
import moment from "moment"
import { useGetTransactionsQuery } from "@/services/transactions.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { TransactionsTable } from "@/components/TransactionsTable"
import { TransactionI } from "@/interfaces/transactions"
import { LoadingOutlined } from "@ant-design/icons"
import { H2 } from "@/components/Typography"

export default function Home() {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetTransactionsQuery({
    authToken: token as string,
  })
  console.log(data, "Hey")
  return (
    <main className="min-h-[82vh]">
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Overview</h2>
          <p className="font-normal text-base text-[#0000006E]">
            {moment().format("LL")}
          </p>
        </div>
        {/* <div className="mt-2">
          <Button
            className="bg-primary capitalize"
            size="large"
            variant="contained"
            startIcon={<FilterAltIcon />}
          >
            Filter by Date
          </Button>
        </div> */}
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <Summaries />
            {/* <VendorStatistics /> */}
          </div>
          {/* <div className="md:basis-[30%]">
            <SaleByLocationSideBar />
          </div> */}
        </div>
        {/* <div className="bg-white my-5 p-[24px]">
          <OverviewTab />
        </div> */}

        <H2 className="mt-10 mb-5">Transactions</H2>
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <TransactionsTable
            data={data as TransactionI[]}
            isLoading={isLoading}
          />
        )}
      </div>
    </main>
  )
}
