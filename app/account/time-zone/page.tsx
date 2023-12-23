import React from "react"
import { H2, Text } from "@/components/Typography"
import { Button } from "@mui/material"
import { ExitToAppOutlined } from "@mui/icons-material"
import { Divider } from "antd"
import { AccountContainer } from "../components/AccountContainer"
import { TimeZone } from "../components/TimeZone"

export default function TimeZonePage() {
  return (
    <div>
      <div>
        <H2>Account</H2>
        <Text>Time Zone & Language</Text>
      </div>
      <Divider />
      <AccountContainer active="time-zone">
        <TimeZone />
      </AccountContainer>
    </div>
  )
}
