import { H2, H4, Text } from "@/components/Typography"
import { ArrowDownward, ArrowUpward, ChevronLeft } from "@mui/icons-material"
import { Tag } from "antd"
import React, { FC } from "react"

export interface overviewProps {
  status: string
  numbers: string | number
  percentage: number
  last_interacted_with?: string
}

export const OverviewCard: FC<overviewProps> = ({ ...props }) => {
  return (
    <div className="bg-white border-[1px] md:p-[16px] p-[10px] rounded-[10px] flex flex-col justify-between h-[125px]">
      <div className="flex md:justify-between md:flex-row flex-col">
        <Text className="capitalize font-[500] text-[#344054]">
          {props.status}
        </Text>
        <div className="flex items-center gap-[1px]">
          <Text variant="small" className="text-grey-500">
            {props.last_interacted_with}
          </Text>
          <ChevronLeft className="text-grey-500 rotate-[270deg]" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <H2>{props.numbers}</H2>
        <Tag
          color={props.percentage > 0 ? "success" : "error"}
          bordered={false}
          className="text-[12px]"
        >
          {props.percentage > 0 ? (
            <>
              <ArrowUpward className="text-[12px]" />
              {props.percentage}%
            </>
          ) : (
            <>
              <ArrowDownward className="text-[12px]" />
              {props.percentage * -1}%
            </>
          )}
        </Tag>
      </div>
    </div>
  )
}
