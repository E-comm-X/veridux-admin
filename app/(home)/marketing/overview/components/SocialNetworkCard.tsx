"use client"
import { H4, Text } from "@/components/Typography"
import { Button } from "@mui/material"
import React, { FC } from "react"

interface props {
  icon: React.ReactNode
  title: string
  text: string
  onConnect?: () => void
}

export const SocialNetworkCard: FC<props> = ({ ...props }) => {
  return (
    <div className="rounded-[10px] border-[1px] p-[20px] flex flex-col gap-[8px]">
      <div className="flex items-center justify-between">
        {props.icon}
        <Button variant="outlined">Connect</Button>
      </div>
      <div>
        <H4>{props.title}</H4>
      </div>
      <div>
        <Text className="text-grey-500">{props.text}</Text>
      </div>
    </div>
  )
}
