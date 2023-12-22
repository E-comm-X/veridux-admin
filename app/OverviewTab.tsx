"use client"
import React from "react"
import { Tabs } from "antd"
import type { TabsProps } from "antd"
import { CampaignsTable } from "./marketing/campaigns/components/CampaignsTable"

const onChange = (key: string) => {}

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Vendors",
    children: <CampaignsTable />,
  },
  {
    key: "2",
    label: "Users",
    children: <CampaignsTable />,
  },
  {
    key: "3",
    label: "Products",
    children: <CampaignsTable />,
  },
]

export const OverviewTab: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
)
