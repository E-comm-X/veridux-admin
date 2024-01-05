"use client"
import React from "react"
import ButtonUI from "@/components/ButtonUI"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import AddIcon from "@mui/icons-material/Add"
import { ProductsTable } from "./ProductsTable"
import Link from "next/link"
import { Button } from "antd"
import { AddCategory } from "./AddCategory"
export default function Page() {
  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">All Products</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="ml-auto">
            <Link href={"/product/new"}>
              <Button className="bg-primary" type="primary" size="large">
                + Add Product
              </Button>
            </Link>
          </div>
          <AddCategory />
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <ProductsTable />
    </main>
  )
}
