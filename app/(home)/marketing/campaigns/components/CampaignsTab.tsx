"use client"
import React from "react"
import { Tabs } from "antd"
import type { TabsProps } from "antd"
import { CampaignsTable } from "./CampaignsTable"

const onChange = (key: string) => {}

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "All Campaigns",
    children: <CampaignsTable />,
  },
  {
    key: "2",
    label: "Drafts",
    children: <CampaignsTable />,
  },
  {
    key: "3",
    label: "Sent",
    children: <CampaignsTable />,
  },
  {
    key: "4",
    label: "Scheduled",
    children: <CampaignsTable />,
  },
]

export const CampaignsTab: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
)
