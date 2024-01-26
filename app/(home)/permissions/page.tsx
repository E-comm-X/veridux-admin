"use client"
import { H2 } from "@/components/Typography"
import React from "react"
import { PermissionGroups } from "./PermissionGroups"
import { Button } from "antd"
import { AddGroup } from "./AddGroup"
import { AddPrivilege } from "./AddPrivilege"

const Page = () => {
  return (
    <div>
      <div className="flex justify-between md:flex-row flex-col gap-3 md:items-center">
        <H2>Permission Groups</H2>
        <div className="flex gap-2">
          <AddGroup />
          <AddPrivilege />
        </div>
      </div>
      <PermissionGroups />
    </div>
  )
}

export default Page
