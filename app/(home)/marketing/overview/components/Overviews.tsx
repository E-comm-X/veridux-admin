"use client"
import React from "react"
import { OverviewCard, overviewProps } from "./OverviewCard"

const overviews: overviewProps[] = [
  {
    status: "Delivered",
    numbers: "4,639",
    percentage: 2.71,
    last_interacted_with: "Last 30 days",
  },
  {
    status: "opened",
    numbers: "1,264",
    percentage: -8,
    last_interacted_with: "Last 30 days",
  },
  {
    status: "clicked",
    numbers: "2,103",
    percentage: 5.26,
    last_interacted_with: "Last 30 days",
  },
  {
    status: "avg. views",
    numbers: "1,503",
    percentage: 1.43,
    last_interacted_with: "Last 30 days",
  },
]

export const Overviews = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-[16px] mt-[24px] mb-[16px]">
      {overviews.map((overview, index) => (
        <OverviewCard key={index} {...overview} />
      ))}
    </div>
  )
}
