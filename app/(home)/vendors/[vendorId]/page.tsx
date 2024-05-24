"use client"
import ButtonUI from "@/components/ButtonUI"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import Modal from "@/components/CreateVendorModal"
import Link from "next/link"
import VendorData from "./VendorData"
import VendorDocuments from "./VendorDocuments"
import UserActivity from "../../users/[id]/UserActivity"
import { StoresTable } from "../StoresTable"
import { GoBack } from "@/components/GoBack"
import { useSearchParams } from "next/navigation"

export default function VendorPage() {
  const company_name = useSearchParams().get("name")

  return (
    <main>
      <GoBack />
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="md:text-2xl text-lg text-black font-bold">
            {company_name} - Stores
          </h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="mt-2 flex items-center gap-4">
          {/* <div className="ml-auto" onClick={() => setOpen(true)}>
            <ButtonUI text="Add Vendor">
              <AddIcon />
            </ButtonUI>
          </div> */}
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <StoresTable />
    </main>
  )
}
