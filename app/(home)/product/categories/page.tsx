"use client"
import React from "react"
import { CategoriesTable } from "./CatTable"
import { H2 } from "@/components/Typography"
import { AddCategory } from "../AddCategory"

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <H2>Products Categories</H2>
        <AddCategory />
      </div>
      <CategoriesTable />
    </div>
  )
}

export default Page
