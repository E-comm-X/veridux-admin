"use client"
import React from "react"
import Image from "next/image"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import LoopIcon from "@mui/icons-material/Loop"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import { useGetAllStoresQuery } from "@/services/store.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { FaMoneyBill, FaProductHunt, FaStore } from "react-icons/fa"
import { useGetCompanyWalletsQuery } from "@/services/wallet.service"
import { LoadingOutlined } from "@ant-design/icons"
import { Wallet } from "@mui/icons-material"
import Link from "next/link"
import moment from "moment"

interface SummaryProps {
  icon?: React.ReactNode
  title?: string
  id?: number
  date?: string
  value?: number
  percentage?: number
  prev?: string
  purpose: string
  updatedAt: string
}

const Summary = ({
  icon,
  title,
  id,
  date,
  value,
  percentage,
  purpose,
  updatedAt,
}: SummaryProps) => {
  return (
    <Link
      href={`/wallet/${purpose}`}
      className="rounded-lg block  bg-white px-2 py-4 pr-4 text-black border-[1px] border-[#00000026] hover:border-primary hover:shadow-md"
    >
      <div className="flex gap-4">
        <div className="rounded-md bg-[#006FCF21] h-15 w-15 self-start flex align-center justify-center p-2">
          {icon}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg capitalize">
            {title?.replaceAll("_", " ")}
          </h3>
          {/* <p className="text-xs font-normal text-[#0000005C]">{date}</p> */}
          <h4 className="text-xl font-semibold ">
            {Intl.NumberFormat("en-US", {
              currency: "NGN",
              style: "currency",
            }).format(value as number)}
          </h4>
        </div>
      </div>
      {percentage && (
        <p className="text-[#0000005c] flex justify-between px-3 mt-3">
          <span className="text-[#36CF00]">{percentage}%</span>{" "}
          <span>{moment(updatedAt).fromNow()}</span>
        </p>
      )}
    </Link>
  )
}
function Summaries() {
  const { token } = useAuthToken()

  const { data, isLoading } = useGetCompanyWalletsQuery({
    authToken: token as string,
  })

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {isLoading ? (
        <>...</>
      ) : (
        <>
          {data?.map((wallet) => (
            <Summary
              purpose={wallet.purpose}
              key={wallet.id}
              icon={<Wallet style={{ fill: "#006FCF" }} />}
              title={wallet.purpose}
              date={wallet.createdAt}
              value={wallet.balance}
              percentage={1.7}
              updatedAt={wallet.updatedAt}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default Summaries
