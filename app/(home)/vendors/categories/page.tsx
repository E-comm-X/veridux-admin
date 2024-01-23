"use client"
import React from "react"
import { CategoriesTable } from "./CatTable"
import { H2 } from "@/components/Typography"
import { Button } from "antd"

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <H2>Store Categories</H2>
        <Button className="bg-primary" type="primary" size="large">
          Add Category
        </Button>
      </div>
      <CategoriesTable />
    </div>
  )
}

export default Page
