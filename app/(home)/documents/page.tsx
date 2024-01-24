"use client"
import { H2 } from "@/components/Typography"
import React from "react"
import { DocumentsRequestTable } from "./DocumentsRequestTable"

const Page = () => {
  return (
    <div>
      <H2 className="mb-7">Documents</H2>
      <div>
        <DocumentsRequestTable />
      </div>
    </div>
  )
}

export default Page
