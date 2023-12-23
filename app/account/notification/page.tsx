import React from "react"
import { H2, Text } from "@/components/Typography"
import { Divider } from "antd"
import { AccountContainer } from "../components/AccountContainer"
import { Notification } from "../components/Notification"

export default function NotificationPage() {
  return (
    <div>
      <div>
        <H2>Account</H2>
        <Text>Notification</Text>
      </div>
      <Divider />
      <AccountContainer active="notification">
        <Notification />
      </AccountContainer>
    </div>
  )
}
