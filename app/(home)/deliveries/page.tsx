"use client"
import React from "react"
import ButtonUI from "@/components/ButtonUI"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import Link from "next/link"
import { deliveriesData } from "@/data/delivriesData"
import DeliverySummary from "./DeliverySummary"
import { Button, List, Tabs } from "antd"
import type { TabsProps } from "antd"
import { LocalShipping } from "@mui/icons-material"

export default function Page() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Incoming orders",
      children: (
        <div className="flex gap-8 flex-wrap">
          <List
            dataSource={deliveriesData}
            renderItem={(filterData, index) => (
              <List.Item>
                <DeliverySummary
                  departure={filterData.departure}
                  arrival={filterData.arrival}
                  customerName={filterData.customerName}
                  weight={filterData.weight}
                  price={filterData.price}
                  status={filterData.status}
                  productName={filterData.productName}
                  shippingAddress={filterData.shippingAddress}
                  vendorName={filterData.vendorName}
                  vendorImage={filterData.vendorImage}
                  key={index}
                  image={filterData.image}
                />
              </List.Item>
            )}
            pagination={{ pageSize: 6, size: "small", align: "start" }}
            grid={{ column: 3, md: 2, sm: 1, xs: 1, gutter: [12, 0] }}
          />
          <div className="text-center">
            <button className="bg-white  text-black text-base  font-semibold self-center px-4 py-6 border-[#0000002B] rounded-lg border-2">
              Load More
            </button>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Shipped",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Cancelled",
      children: "Content of Tab Pane 3",
    },
  ]
  return (
    <main>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Delivery</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="ml-auto flex gap-4">
          <div>
            <Button
              className="bg-primary"
              type="primary"
              size="large"
              icon={<LocalShipping />}
            >
              Arrange Pickup and Delivery
            </Button>
          </div>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <Tabs defaultActiveKey="1" items={items} size="large" />
    </main>
  )
}
