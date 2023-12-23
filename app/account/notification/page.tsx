import React from "react"
import { H2, Text } from "@/components/Typography"
import { Divider } from "antd"
import { AccountContainer } from "../components/AccountContainer"
import { Notification } from "../components/Notification"
import { Button } from "@mui/material"
import Link from "next/link"

export default function NotificationPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <H2>Account</H2>
          <Text>Notification</Text>
        </div>
        <Link href="/account/notification/new">
          <Button
            className="bg-primary font-bold capitalize"
            variant="contained"
          >
            + Add Notification
          </Button>
        </Link>
      </div>
      <Divider />
      <AccountContainer active="notification">
        <Notification />
      </AccountContainer>
    </div>
  )
}
