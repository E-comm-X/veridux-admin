import React from "react";
import ButtonUI from "@/components/ButtonUI";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import ReceiptIcon from "@mui/icons-material/Receipt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function PaymentDatils() {
  return (
    <main>
      {/* header */}
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Payment Details</h2>
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
              <ExpandMoreIcon />
            </ButtonUI>
          </div>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />

      {/* body */}

      <div className="parentContainer flex flex-col md:flex-row gap-8  bg-white rounded-lg  px-4 py-8">
        <div className="right  basis-[70%] border-[#D9D9D93D] rounded-lg border-[1px]">
          <div className="bg-[#D9D9D93D]  flex p-4 flex justify-between rounded-t-lg ">
            <h3 className="font-medium text-xl">Expense Details</h3>
            <button className="bg-[#FDD4D4] px-4 py-2 rounded font-semibold align-center text-base text-[#FF3C3C]">
              Failed
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-6">
              <h4 className="font-medium text-[21.81px]">Vendor</h4>
              <p className="font-medium text-[21.81px] text-[#00000066]">
                John Doe
              </p>
            </div>
            <div className="flex justify-between mb-6">
              <h4 className="font-medium text-[21.81px]">User</h4>
              <p className="font-medium text-[21.81px] text-[#00000066]">
                John frank
              </p>
            </div>
            <div className="flex justify-between mb-6">
              <h4 className="font-medium text-[21.81px]">Category</h4>
              <p className="font-medium text-[21.81px] text-[#00000066]">
                Health and Wellness
              </p>
            </div>
            <div className="flex justify-between mb-6">
              <h4 className="font-medium text-[21.81px]">Payment Method</h4>
              <p className="font-medium text-[21.81px] text-[#00000066]">
                Master Card
              </p>
            </div>
            <div className="flex justify-between mb-6">
              <h4 className="font-medium text-[21.81px]">Description</h4>
              <p className="font-medium text-[21.81px] text-[#00000066]">
                Description
              </p>
            </div>
            <div className="flex justify-between mb-6">
              <h4 className="font-medium text-[21.81px]">Reciept Date</h4>
              <p className="font-medium text-[21.81px] text-[#00000066]">
                23 December 2023
              </p>
            </div>
            <div className="flex justify-between mb-6">
              <h4 className="font-medium text-[21.81px]">Refrence Number</h4>
              <p className="font-medium text-[21.81px] text-[#00000066]">
                Jd97769t087
              </p>
            </div>
          </div>
        </div>
        <div className="left basis-[30%]">
          <div className="top border-[#D9D9D93D] rounded-lg  border-[1px]">
            <div className="bg-[#D9D9D93D] p-4 rounded-t-lg ">
              <h3 className="font-medium text-xl">Refund</h3>
            </div>
            <div className="pt-2 pb-8 pl-2 pr-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Amount"
                className=" w-full mb-4 rounded placeholder:text-sm placeholder:font-semibold placeholder:text-black border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
              />
              <ButtonUI text="Proceed To Refund" />
            </div>
          </div>
          <div className="bottom mt-8 border-[#D9D9D93D] rounded border-[1px]">
            <div className="bg-[#D9D9D93D] p-4 rounded-t-lg ">
              <h3 className="font-medium text-xl">Timeline</h3>
            </div>

            <div className="px-4 py-8  ">
              <div className="flex items-center gap-4 mb-4 ">
                <div className="  border-[8px] rounded-full w-[37px] h-[37px] border-[#CF000045] flex justify-center items-center">
                  <CancelIcon style={{ fill: "#CF0000" }} />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Failed to Process</h4>
                  <h5 className="font-normal text-sm text-[#0000004F]">
                    11:00AM May 23 2023
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="border-[#36CF0045] border-[8px] rounded-full w-[37px] h-[37px] flex justify-center items-center">
                  <PlayArrowIcon style={{ fill: "#36CF00" }} />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Intiated</h4>
                  <h5 className="font-normal text-sm text-[#0000004F]">
                    11:00AM May 23 2023
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
