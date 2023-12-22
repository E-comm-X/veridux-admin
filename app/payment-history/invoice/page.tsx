import React from "react"
import InvoiceTable from "./InvoiceTable"
import ButtonUI from "@/components/ButtonUI"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import ReceiptIcon from "@mui/icons-material/Receipt"
export default function Page() {
  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Invoice List</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="ml-auto">
            <ButtonUI text="Export">
              <FileDownloadIcon />
            </ButtonUI>
          </div>
          <div className="ml-auto">
            <ButtonUI text="Create Invoice">
              <ReceiptIcon />
            </ButtonUI>
          </div>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <InvoiceTable />
    </main>
  )
}
