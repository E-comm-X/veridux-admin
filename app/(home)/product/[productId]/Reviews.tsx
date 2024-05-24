"use client"
import React from "react"
import { List } from "antd"
import { ReviewCard } from "./ReviewCard"
import { useGetProductReviewsQuery } from "@/services/product.service"

const moment = require("moment")

export const Reviews: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading } = useGetProductReviewsQuery({ id })
  return (
    <div className="product-reviews max-w-[600px] mb-6" id="product-reviews">
      <h3 className="font-semibold">REVIEWS</h3>
      <List
        dataSource={data?.slice()?.reverse()}
        renderItem={(review) => (
          <List.Item>
            <ReviewCard
              name={
                review.enduser.user.firstname +
                " " +
                review.enduser.user.lastname
              }
              image={review.enduser.user.profile_picture}
              remark={review.remark}
              rating={review.rating}
              date={moment(review.date).format("LL, LT")}
            />
          </List.Item>
        )}
        pagination={{ pageSize: 3 }}
        loading={isLoading}
      />
    </div>
  )
}
