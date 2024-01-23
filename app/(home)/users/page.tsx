"use client"
import { H2 } from "@/components/Typography"
import React from "react"
import { UserGroups } from "./UserGroups"
import { Button } from "antd"

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <H2>User Groups</H2>
        <Button type="primary" className="bg-primary" size="large">
          Create User Group
        </Button>
      </div>
      <UserGroups />
    </div>
  )
}

export default Page
