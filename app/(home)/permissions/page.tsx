"use client"
import { H2 } from "@/components/Typography"
import React from "react"
import { PermissionGroups } from "./PermissionGroups"
import { AddGroup } from "./AddGroup"

const Page = () => {
  return (
    <div>
      <div className="flex justify-between md:flex-row flex-col gap-3 md:items-center">
        <H2>Permission Groups</H2>
        <div className="flex gap-2">
          <AddGroup />
        </div>
      </div>
      <PermissionGroups />
    </div>
  )
}

export default Page
