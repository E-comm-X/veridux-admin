"use client"
import { PieChart } from "@/charts/PieChart"
import { H3, H4, Text } from "@/components/Typography"
import { ChartUpIcon } from "@/icons"
import React from "react"

const continentSubscribers = []

export const ActiveSubcribers = () => {
  return (
    <div className="bg-white border-[1px] md:p-[24px] p-[16px] rounded-[10px]">
      <Text className="text-[#475367] font-[500]">Active Subscribers</Text>
      <div className="flex gap-1 items-center mt-[16px] mb-[2px]">
        <H3>13,450</H3>
        <Text className="text-grey-500">views</Text>
      </div>
      <div className="flex items-center gap-2">
        <H4 className="text-success-500 flex items-center gap-1">
          <ChartUpIcon />
          <span>45%</span>
        </H4>
        <Text className="text-grey-500">(+69,008)</Text>
      </div>

      <div className="my-[21px]">
        <PieChart />
      </div>

      <div></div>
    </div>
  )
}
