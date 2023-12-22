"use client"
import React, { useState, useEffect } from "react"
import { Pie } from "@ant-design/plots";

export const PieChart = () => {
  const data = [
    {
      type: "Africa",
      value: 27,
    },
    {
      type: "Europe",
      value: 25,
    },
    {
      type: "Australia",
      value: 18,
    },
    {
      type: "South America",
      value: 15,
    },
    {
      type: "Asia",
      value: 10,
    },
    {
      type: "Antarctica",
      value: 5,
    },
    {
      type: "North America",
      value: 5,
    },
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
    },
    legend: { position: "bottom" },
    interactions: [
      {
        type: "element-active",
        layout: "vertical",
      },
    ],
  }
  return <Pie {...config} />
}
