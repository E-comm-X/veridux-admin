"use client"
import React from "react"
import Image from "next/image"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import LoopIcon from "@mui/icons-material/Loop"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import { useGetAllStoresQuery } from "@/services/store.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { FaMoneyBill, FaProductHunt, FaStore } from "react-icons/fa"

interface SummaryProps {
  icon?: React.ReactNode
  title?: string
  id?: number
  date?: string
  value?: number
  percentage?: number
  prev?: string
}

const Summary = ({
  icon,
  title,
  id,
  date,
  value,
  percentage,
  prev,
}: SummaryProps) => {
  return (
    <div className="  rounded-lg gap-4 bg-white px-2 py-4 pr-4 flex  text-black border-2 border-[#00000026]">
      <div className="rounded-md bg-[#006FCF21] h-15 w-15 self-start flex align-center justify-center p-2">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">{title}</h3>
        {/* <p className="text-xs font-normal text-[#0000005C]">{date}</p> */}
        <h4 className="text-xl font-semibold ">{value}</h4>
        {percentage && prev && (
          <p className="text-[#0000005c]">
            <span className="text-[#36CF00]">{percentage}%</span> vs {prev}
          </p>
        )}
      </div>
    </div>
  )
}
function Summaries() {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetAllStoresQuery({
    authToken: token as string,
  })
  const sumDetails = [
    {
      id: 1,
      icon: <FaMoneyBill style={{ fill: "#006FCF" }} />,
      title: "Commissions",
      date: "",
      value: isLoading ? "-" : data?.length,
      percentage: 1.7,
      prev: "last month",
    },
    {
      id: 2,
      icon: <PeopleAltIcon style={{ fill: "#006FCF" }} />,
      title: "End Users Funds",
      date: "",
      value: "-",
      percentage: 1.7,
      prev: "last month",
    },
    {
      id: 3,
      icon: <FaStore style={{ fill: "#006FCF" }} />,
      title: "Vendors Funds",
      date: "",
      value: "-",
      percentage: 1.7,
      prev: "last month",
    },
    {
      id: 3,
      icon: <FaProductHunt style={{ fill: "#006FCF" }} />,
      title: "Purchased Products Funds",
      date: "",
      value: "-",
      percentage: 1.7,
      prev: "last month",
    },
  ]
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {sumDetails.map((item) => (
        <Summary
          key={item.id}
          icon={item.icon}
          value={item.value as number}
          date={item.date}
          title={item.title}
          percentage={item.percentage}
          prev={item.prev}
        />
      ))}
    </div>
  )
}

export default Summaries
