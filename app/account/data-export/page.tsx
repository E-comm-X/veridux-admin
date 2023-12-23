"use client"
import React from "react"
import { H2, Text } from "@/components/Typography"
import { Divider } from "antd"
import { AccountContainer } from "../components/AccountContainer"
import { DataExport } from "../components/DataExport"

export default function DataExportPage() {
  return (
    <div>
      <div>
        <H2>Account</H2>
        <Text>Data Export</Text>
      </div>
      <Divider />
      <AccountContainer active="data-export">
        <DataExport />
      </AccountContainer>
    </div>
  )
}
