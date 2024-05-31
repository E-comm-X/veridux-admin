"use client"
import { GoBack } from "@/components/GoBack"
import { useSearchParams } from "next/navigation"
import { StoresTable } from "./StoresTable"

export default function StoresPage() {
  return (
    <main>
      <GoBack />
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="md:text-2xl text-lg text-black font-bold">
            My Stores
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
