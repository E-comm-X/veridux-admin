"use client"
import React from "react"
import { H2, Text } from "@/components/Typography"
import Link from "next/link"
import { ArrowBack } from "@mui/icons-material"
import { HistoryTable } from "../../components/HistoryTable"

const NotificationHistory = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <Link href="/account/notification">
          <ArrowBack />
        </Link>
        <div>
          <H2>Notification history</H2>
          <Text></Text>
        </div>
      </div>
      <div className="bg-white mt-[3rem]">
        <HistoryTable />
      </div>
    </div>
  )
}

export default NotificationHistory
