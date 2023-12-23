"use client"
import { H2, H3, H5, Text } from "@/components/Typography"
import { ChevronRight, Edit } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Avatar, Divider } from "antd"
import React from "react"

export const TimeZone = () => {
  return (
    <div>
      <div className="mb-[2rem]">
        <H3>TimeZone and Langueage</H3>
        <Text className="text-grey-500">
          Set your preferred time zone and language for a tailored experience
        </Text>
      </div>
      <div className="rounded-[27px] border-[1px]">
        <div className="md:p-[24px] p-[16px] border-b-[1px] flex items-center justify-between cursor-pointer">
          <div>
            <H5>Set Your Time Zone</H5>
            <Text className="text-grey-500">
              Choose the time zone that reflects your location or operational
              base
            </Text>
          </div>
          <ChevronRight />
        </div>

        <div className="md:p-[24px] p-[16px] flex items-center justify-between cursor-pointer">
          <div>
            <H5>Set Your Time Zone</H5>
            <Text className="text-grey-500">
              Choose the time zone that reflects your location or operational
              base
            </Text>
          </div>
          <ChevronRight />
        </div>
      </div>
    </div>
  )
}
