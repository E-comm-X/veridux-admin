"use client"
import { H2 } from "@/components/Typography"
import React from "react"
import { AddPrivilege } from "../permissions/AddPrivilege"
import { PrivilegesTable } from "./PrivilegesTable"

const Page = () => {
  return (
    <div>
      <div className="flex justify-between md:flex-row flex-col gap-3 md:items-center mb-7">
        <H2>Privileges</H2>
        <div className="flex gap-2">
          <AddPrivilege />
        </div>
      </div>
      <PrivilegesTable />
    </div>
  )
}

export default Page
