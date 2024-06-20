"use client"
import React, { useState } from "react"
import { Avatar, Divider, Rate } from "antd"
import Image from "next/image"

export const ReviewCard: React.FC<{
  name: string
  image: string
  remark: string
  rating: number
  date: string
}> = ({ name, image, remark, rating, date }) => {
  const [isLiked, setIsliked] = useState<boolean>()
  return (
    <div style={{ color: "#6A6B6C" }} className="p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Avatar src={image} size={"large"} />
          <p className="ml-3 font-bold capitalize">{name}</p>
        </div>
      </div>

      <div className="my-1">
        <Rate value={rating} allowHalf disabled />
        <span className="ml-1"> {date}</span>
      </div>
      <p className="text-sm">{remark}</p>
    </div>
  )
}
