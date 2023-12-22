import { H2, H3, Text } from "@/components/Typography"
import React from "react"
import { Overviews } from "./components/Overviews"
import { CreateCapaign } from "./components/CreateCapaign"
import { Metrics } from "./components/Metrics"
import { ActiveSubcribers } from "./components/ActiveSubcribers"
import { SocialNetworks } from "./components/SocialNetworks"

const Page = () => {
  return (
    <div className="md:p-[24px]">
      <div className="flex justify-between md:items-center md:flex-row flex-col gap-3">
        <div>
          <H2>Overview</H2>
          <Text className="text-grey-500">
            You&apos;ve <span className="text-primary">1,237</span> unread
            messages this month
          </Text>
        </div>
        <CreateCapaign />
      </div>
      <Overviews />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[16px] justify-items-stretch mb-[16px]">
        <div className="md:col-span-2 h-full">
          <Metrics />
        </div>
        <div className="">
          <ActiveSubcribers />
        </div>
      </div>
      <SocialNetworks />
    </div>
  )
}

export default Page
