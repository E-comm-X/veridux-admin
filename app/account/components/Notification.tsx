"use client"
import { H2, H3, H5, Text } from "@/components/Typography"
import { ChevronRight, Edit, Settings } from "@mui/icons-material"
import { Switch } from "antd"
import React from "react"
import Link from "next/link"

export const Notification = () => {
  return (
    <div>
      <div className="mb-[2rem]">
        <H3>Notification Settings</H3>
      </div>
      <div className="rounded-[27px] border-[1px] mb-[1rem]">
        <div className="md:p-[24px] p-[16px] border-b-[1px] flex items-center justify-between cursor-pointer">
          <div>
            <H5>Notification Preference</H5>
            <Text className="text-grey-500">
              Choose how you want to receive notifications. Select from the
              following options
            </Text>
          </div>
          <Settings />
        </div>

        <div className="md:p-[24px] p-[16px] flex items-center justify-between border-b-[1px]">
          <div>
            <H5>Reminder Email</H5>
            <Text className="text-grey-500">
              Let remind you of the transaction you might foget
            </Text>
          </div>
          <Switch className="bg-black" />
        </div>

        <div className="md:p-[24px] p-[16px] flex items-center justify-between border-b-[1px]">
          <div>
            <H5>Reminder Email</H5>
            <Text className="text-grey-500">
              Let remind you of the transaction you might foget
            </Text>
          </div>
          <Switch className="bg-black" />
        </div>

        <div className="md:p-[24px] p-[16px] flex items-center justify-between border-b-[1px]">
          <div>
            <H5>Reminder Email</H5>
            <Text className="text-grey-500">
              Let remind you of the transaction you might foget
            </Text>
          </div>
          <Switch className="bg-black" />
        </div>

        <div className="md:p-[24px] p-[16px] flex items-center justify-between">
          <div>
            <H5>Reminder Email</H5>
            <Text className="text-grey-500">
              Let remind you of the transaction you might foget
            </Text>
          </div>
          <Switch className="bg-black" />
        </div>
      </div>
      <Link
        href={"/account/notification/history"}
        className="md:p-[24px] p-[16px] flex items-center justify-between cursor-pointer rounded-[27px] border-[1px]"
      >
        <div>
          <H5>Notification History</H5>
          <Text className="text-grey-500 md:w-[60%] w-[70%]">
            Notification History feature allows you to track and manage all
            notifications sent to users or user groups. Stay informed about past
            notifications and their statuses.
          </Text>
        </div>
        <ChevronRight />
      </Link>
    </div>
  )
}
