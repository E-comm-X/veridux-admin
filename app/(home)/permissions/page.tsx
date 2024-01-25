"use client"
import { H2 } from "@/components/Typography"
import React from "react"
import { PermissionGroups } from "./PermissionGroups"
import { Button } from "antd"
import { AddGroup } from "./AddGroup"

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <H2>Permission Groups</H2>
        <AddGroup />
      </div>
      <PermissionGroups />
    </div>
  )
}

export default Page
