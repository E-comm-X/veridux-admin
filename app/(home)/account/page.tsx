"use client"
import React from "react"
import { H2, Text } from "@/components/Typography"
import { Button } from "@mui/material"
import { ExitToAppOutlined } from "@mui/icons-material"
import { Divider } from "antd"
import { AccountContainer } from "./components/AccountContainer"
import { Profile } from "./components/Profile"

export default function Account() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <H2>Account</H2>
          <Text>Today</Text>
        </div>
        <Button
          variant="contained"
          className="bg-primary capitalize"
          startIcon={<ExitToAppOutlined />}
        >
          Export
        </Button>
      </div>
      <Divider />
      <AccountContainer active="">
        <Profile />
      </AccountContainer>
    </div>
  )
}
