"use client"
import React from "react"
import ButtonUI from "@/components/ButtonUI"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import { VendorTable } from "./VendorTable"
import { useGetAllStoresQuery } from "@/services/store.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { Form, Input, Select, message } from "antd"
import { Modal } from "antd"

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">All Vendors</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="ml-auto" onClick={() => setOpen(true)}>
            <ButtonUI text="Add Vendor">
              <AddIcon />
            </ButtonUI>
          </div>
          <ButtonUI text="Filter by Date">
            <FilterAltIcon />
          </ButtonUI>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <VendorTable />
      {/* Modal */}
      <Modal open={open} onCancel={() => setOpen(false)} footer={false}>
        <div className="">
          <Form>
            <h2 className="text-black text-4xl mt-2 text-center">
              Create Vendor
            </h2>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="vendor" className="font-semibold text-xl">
                Name
              </label>
              <Input
                size="large"
                id="vendor"
                type="text"
                placeholder="Vendor Name"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="phone" className="font-semibold text-xl">
                Description
              </label>
              <Input size="large" type="text" placeholder="Enter Description" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="industry" className="font-semibold text-xl">
                Address
              </label>
              <Input size="large" type="text" placeholder="Address" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="services" className="font-semibold text-xl">
                Category
              </label>
              <Select placeholder={"Select Category"} size="large" />
            </div>
            <button className=" my-4 w-full flex align-center justify-center text-center text-white bg-[#006FCF] font-semibold  rounded px-2 py-2">
              Add Vendor
            </button>
            {/* <ButtonUI text="Add Vendor"></ButtonUI> */}
          </Form>
        </div>
      </Modal>
    </main>
  )
}
