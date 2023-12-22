"use client"
import React from "react"
import { Column } from "@ant-design/plots"
import { data } from "@/data/stackedColumnData"

export const StackedColumns = () => {
  const config = {
    data,
    isStack: true,
    xField: "month",
    yField: "value",
    seriesField: "type",
    color: ["#006FCF33", "#006FCF"],
  }

  return <Column {...config} />
}
