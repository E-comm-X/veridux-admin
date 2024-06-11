"use client"
import React from "react"
import { List } from "antd"
import { ReviewCard } from "./ReviewCard"
import moment from "moment"
import { useGetStoreReviewsQuery } from "@/services/store.service"

export const Reviews: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading } = useGetStoreReviewsQuery({ id })
  return (
    <div className="product-reviews mb-6" id="product-reviews">
      <h3 className="font-semibold">REVIEWS</h3>
      <List
        dataSource={data?.slice()?.reverse()}
        grid={{ column: 2, md: 2, xs: 1 }}
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
        pagination={{ pageSize: 9 }}
        loading={isLoading}
      />
    </div>
  )
}
