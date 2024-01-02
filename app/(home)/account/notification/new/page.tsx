"use client"
import { H2, Text } from "@/components/Typography"
import { ArrowBack } from "@mui/icons-material"
import { Divider } from "antd"
import Link from "next/link"
import React from "react"
import { AddNotificationForm } from "../../components/AddNotificationForm"

const AddNotification = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <Link href="/account/notification">
          <ArrowBack />
        </Link>
        <div>
          <H2>Notification</H2>
          <Text>Add Notification</Text>
        </div>
      </div>
      <Divider />
      <AddNotificationForm />
    </div>
  )
}

export default AddNotification
