"use client"
import React from "react"
import {
  OverviewCard,
  overviewProps,
} from "../../overview/components/OverviewCard"

const overviews: overviewProps[] = [
  {
    status: "Active Subscribers",
    numbers: "14,295",
    percentage: 2.71,
    last_interacted_with: "This Week",
  },
  {
    status: "Avg. Open Rate",
    numbers: "66.7%",
    percentage: -8,
    last_interacted_with: "This Week",
  },
  {
    status: "Avg. Open Clicked",
    numbers: "89.1%",
    percentage: 5.26,
    last_interacted_with: "This Week",
  },
  {
    status: "Total Emails",
    numbers: "807",
    percentage: 1.43,
    last_interacted_with: "This Week",
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
