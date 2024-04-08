"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { ArrowLeftOutlined } from "@ant-design/icons"

export const GoBack = () => {
  const { back } = useRouter()
  return (
    <div
      className="inline-flex items-center gap-2 my-2 text-sm cursor-pointer"
      onClick={back}
    >
      <ArrowLeftOutlined />
      <span>Go Back</span>
    </div>
  )
}
