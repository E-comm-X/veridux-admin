"use client"
import { StackedColumns } from "@/components/StackColumnsPlot"
import { H2, H3, Text } from "@/components/Typography"
import { CalendarMonth } from "@mui/icons-material"
import { Select } from "antd"
import React from "react"

export const EmailSent = () => {
  return (
    <div className="bg-white border-[1px] md:p-[16px] p-[10px] rounded-[10px] h-full md:flex md:flex-col md:justify-between">
      <div className="flex justify-between">
        <div>
          <Text className="text-grey-500 text-semibold">Email Sent</Text>
          <H2>100,045</H2>
          <Text className="text-grey-500">Total emails</Text>
        </div>
        <div>
          <Select
            size="large"
            options={[{ value: "last_month", label: "Last Month" }]}
            defaultValue={"last_month"}
            style={{ borderColor: "#667185" }}
          />
        </div>
      </div>

      <div className="mt-[1.5rem] md:h-[355px]">
        <StackedColumns />
      </div>
    </div>
  )
}
