import { H2, H3, H4, Text } from "@/components/Typography"
import React from "react"
import { Overviews } from "./components/Overviews"
import { Button } from "@mui/material"
import { HistoryEduOutlined } from "@mui/icons-material"
import { SubscribersBreakdown } from "./components/SubscribersBreakdown"
import { EmailSent } from "./components/EmailSent"
import { CampaignsTable } from "./components/CampaignsTable"
import { CampaignsTab } from "./components/CampaignsTab"

const Page = () => {
  return (
    <div className="md:p-[24px]">
      <div className="flex justify-between md:items-center md:flex-row flex-col gap-3">
        <div>
          <H2>Dashboard view</H2>
          <Text className="text-grey-500">
            Showing your publication overview last 30 days
          </Text>
        </div>
        <div className="flex gap-5">
          <Button variant="outlined" size="large" className="capitalize">
            + Use Template
          </Button>
          <Button
            variant="contained"
            size="large"
            className="capitalize bg-primary"
            startIcon={<HistoryEduOutlined />}
          >
            Write Campaign
          </Button>
        </div>
      </div>
      <Overviews />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[16px] justify-items-stretch mb-[16px]">
        <div className="md:col-span-2 h-full">
          <EmailSent />
        </div>
        <div className="">
          <SubscribersBreakdown />
        </div>
      </div>
      <div>
        <H4 className="mb-5 mt-10">Campaigns</H4>
        <div className="bg-white p-[24px]">
          <CampaignsTab />
        </div>
        <div className="md:w-[50%] md:mx-auto mt-5">
          <Button variant="outlined" size="large" className="capitalize w-full">
            View All Campaigns
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page
