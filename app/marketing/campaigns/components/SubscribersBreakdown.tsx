"use client"
import { PieChart } from "@/charts/PieChart"
import { H3, H4, Text } from "@/components/Typography"
import { ChartUpIcon } from "@/icons"
import React from "react"

export const SubscribersBreakdown = () => {
  return (
    <div className="bg-white border-[1px] md:p-[24px] p-[16px] rounded-[10px]">
      <Text className="text-[#475367] font-[500]">Subscribers Breakdown</Text>

      <div className="my-[21px]">
        <PieChart />
      </div>

      <div></div>
    </div>
  )
}
