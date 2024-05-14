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
import { useGetShipmentsQuery } from "@/services/deliveries.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined } from "@ant-design/icons"

export default function Page() {
  const { token: authToken } = useAuthToken() as { token: string }
  const { data, isLoading } = useGetShipmentsQuery({ authToken })
  const drafts = data?.filter((shipment) => shipment?.status === "draft")
  const booked = data?.filter((shipment) => shipment?.status === "booked")
  const picked_up = data?.filter((shipment) => shipment?.status === "picked_up")

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "All",
      children: (
        <div className="">
          <List
            loading={isLoading}
            dataSource={data}
            renderItem={(shipment, index) => (
              <List.Item>
                <DeliverySummary {...shipment} />
              </List.Item>
            )}
            pagination={{ pageSize: 6, size: "small", align: "start" }}
            grid={{ column: 3, md: 2, sm: 1, xs: 1, gutter: [12, 0] }}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: "Drafts",
      children: (
        <div className="">
          <List
            loading={isLoading}
            dataSource={drafts}
            renderItem={(shipment, index) => (
              <List.Item>
                <DeliverySummary {...shipment} />
              </List.Item>
            )}
            pagination={{ pageSize: 6, size: "small", align: "start" }}
            grid={{ column: 3, md: 2, sm: 1, xs: 1, gutter: [12, 0] }}
          />
        </div>
      ),
    },
    {
      key: "3",
      label: "Booked",
      children: (
        <div className="">
          <List
            loading={isLoading}
            dataSource={booked}
            renderItem={(shipment, index) => (
              <List.Item>
                <DeliverySummary {...shipment} />
              </List.Item>
            )}
            pagination={{ pageSize: 6, size: "small", align: "start" }}
            grid={{ column: 3, md: 2, sm: 1, xs: 1, gutter: [12, 0] }}
          />
        </div>
      ),
    },
    {
      key: "4",
      label: "Picked Up",
      children: (
        <div className="">
          <List
            loading={isLoading}
            dataSource={picked_up}
            renderItem={(shipment, index) => (
              <List.Item>
                <DeliverySummary {...shipment} />
              </List.Item>
            )}
            pagination={{ pageSize: 6, size: "small", align: "start" }}
            grid={{ column: 3, md: 2, sm: 1, xs: 1, gutter: [12, 0] }}
          />
        </div>
      ),
    },
  ]
  return (
    <main>
      <div className="flex gap-3 md:flex-row flex-col md:items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Delivery</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="md:ml-auto flex gap-4">
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
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <Tabs defaultActiveKey="1" items={items} size="large" />
      )}
    </main>
  )
}
