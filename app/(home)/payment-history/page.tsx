import React from "react";
import ButtonUI from "@/components/ButtonUI";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentsTable from "./PaymentsTable";

export default function Page() {
  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Payments</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="ml-auto">
            <ButtonUI text="Export">
              <FileDownloadIcon />
            </ButtonUI>
          </div>
          <div className="ml-auto">
            <ButtonUI text="Invoice">
              <ReceiptIcon />
            </ButtonUI>
          </div>
          <ButtonUI text="Filter by Date">
            <FilterAltIcon />
          </ButtonUI>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />

      <p className="font-semibold text-xl">All Payments</p>
          <hr className="rounded-md w-[300px] mt-1 mb-8 border-[#006FCF] border-2" />
          <PaymentsTable />
    </main>
  );
}
