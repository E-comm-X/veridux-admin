import { H4, Text } from "@/components/Typography"
import {
  ArrowDownward,
  ArrowUpward,
  ChevronLeft,
  Layers,
} from "@mui/icons-material"
import { Tag } from "antd"
import React, { FC } from "react"

export interface metricProps {
  numbers: string | number
  percentage: number
  last_interacted_with: string
  type: string
}

export const MetricCard: FC<metricProps> = ({ ...props }) => {
  return (
    <div className="bg-white border-[1px] md:p-[16px] p-[10px] rounded-[10px] flex flex-col justify-between md:h-[260px] h-[185px]">
      <div className="flex justify-between flex-row">
        <div className="p-[6.67px] rounded-[10px] border-[1px]">
          <Layers className="text-primary" />
        </div>
        <div className="flex items-center gap-[1px]">
          <Text variant="small" className="text-grey-500">
            {props.last_interacted_with}
          </Text>
          <ChevronLeft className="text-grey-500 rotate-[270deg]" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <Text
            variant="large"
            className="capitalize font-[400] text-[#344054]"
          >
            {props.type}
          </Text>
          <div className="flex items-center gap-3">
            <H4 className="text-grey-900 font-[600]">{props.numbers}</H4>
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
        <div>
          <img src="/bar-chart.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
