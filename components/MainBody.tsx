"use client"
import React, { FC } from "react"
interface props {
  children: React.ReactNode
}

export const MainBody: FC<props> = ({ ...props }) => {
  return (
    <div className="md:ml-[420px] md:px-[1.5rem] md:pr-[24px] px-[1rem] md:py-[1.5rem] py-[1.5rem] bg-[#F0F0F0] min-h-[88vh]">
      {props.children}
    </div>
  )
}
