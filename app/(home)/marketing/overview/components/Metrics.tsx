"use client"
import { H3, Text } from "@/components/Typography"
import React from "react"
import { MetricCard, metricProps } from "./MetricCard"

const metrics: metricProps[] = [
  {
    numbers: "20,502",
    percentage: 10,
    last_interacted_with: "Last 30 days",
    type: "Customer PR",
  },
  {
    numbers: "14,295",
    percentage: -1.89,
    last_interacted_with: "Last 30 days",
    type: "Unique PPV",
  },
  {
    numbers: "270,258",
    percentage: 20,
    last_interacted_with: "Last 30 days",
    type: "Total Campaign Reach",
  },
]

export const Metrics = () => {
  return (
    <div className="bg-white border-[1px] md:p-[16px] p-[10px] rounded-[10px] h-full">
      <div>
        <H3>Metrics</H3>
        <Text className="text-grey-500">Monitor your customer behaviour</Text>
      </div>
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[16px] mt-[24px] mb-[16px] h-full justify-stretch">
          {metrics.slice(0, 2).map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
        <div className="mt-[16px] h-full">
          <MetricCard {...metrics[2]} />
        </div>
      </div>
    </div>
  )
}
