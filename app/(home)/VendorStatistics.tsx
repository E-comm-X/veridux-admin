"use client"
import { useState } from "react"
import { Modal } from "antd"
import { Input } from "antd"
import { Button } from "@mui/material"
import { MultiLinePlot } from "@/components/MultiLinePlot"

export function VendorStatistics() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="bg-white rounded-xl p-2 border-[1px]">
        <div className="flex items-center m-6 text-black">
          <h2 className="text-2xl font-semibold ">Vendors Statistic</h2>
          {/* <div className="ml-auto" onClick={() => setOpen(true)}>
            <Button className="bg-primary" variant="contained">
              + Add Vendor
            </Button>
          </div> */}
        </div>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
        <h2 className="mb-3 px-5">Statistics</h2>
        <div className="md:h-[265px]">
          <MultiLinePlot />
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onCancel={() => setOpen(false)} footer={false}>
        <div>
          <form action="">
            <h2 className="text-black text-4xl mt-2 text-center mb-5">
              Create Vendor
            </h2>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="vendor" className="font-semibold text-lg">
                Vendor Name
              </label>
              <Input size="large" className="w-full" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="phone" className="font-semibold text-lg">
                Phone Number
              </label>
              <Input size="large" className="w-full" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="industry" className="font-semibold text-lg">
                Industry
              </label>
              <Input size="large" className="w-full" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="services" className="font-semibold text-lg">
                Vendor
              </label>
              <Input size="large" className="w-full" />
            </div>
            <Button className="w-full mt-5 bg-primary" variant="contained">
              Add Vendor
            </Button>
            {/* <ButtonUI text="Add Vendor"></ButtonUI> */}
          </form>
        </div>
      </Modal>
    </>
  )
}
