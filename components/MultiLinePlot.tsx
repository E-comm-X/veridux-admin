"use client"
import React, { useState, useEffect } from "react"
import { Area } from "@ant-design/plots"
import { data } from "@/data/multilineData"

export const MultiLinePlot = () => {
  const config = {
    data,
    xField: "month",
    yField: "value",
    seriesField: "type",
    smooth: true,

    yAxis: {
      label: {
        formatter: (v: any) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  }

  return <Area {...config} />
}
