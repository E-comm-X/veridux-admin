"use client"
import React from "react"
import ButtonUI from "@/components/ButtonUI"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import AddIcon from "@mui/icons-material/Add"
import { ProductsTable } from "./ProductsTable"
import Link from "next/link"
import { Button } from "@mui/material"
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
              <Button
                style={{ textTransform: "capitalize" }}
                className="bg-primary"
                variant="contained"
                startIcon={<AddIcon />}
              >
                Add Product
              </Button>
            </Link>
          </div>
          <ButtonUI text="Filter by Date">
            <FilterAltIcon />
          </ButtonUI>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <ProductsTable />
    </main>
  )
}
