import React from "react"
import ButtonUI from "@/components/ButtonUI"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import ReceiptIcon from "@mui/icons-material/Receipt"

export default function CreateInvoice() {
  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Create Invoice</h2>
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
      <div className="px-4 py-8 bg-white rounded-lg my-4  border-gray border-[1px]">
        <div className="bg-white px-4 py-8  border-gray border-[1px] rounded-lg ">
          <h3 className="font-medium text-xl">Invoice Details</h3>
          <hr />
          <div className="parent p-8">
            <div className="  top items-center flex flex-col md:flex-row gap-6">
              <div className="right basis-[50%] flex flex-col">
                <input
                  type="text"
                  className=" w-full rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#ffffff] p-2"
                  placeholder="Automatically generated or enter a custom invoice number..."
                />
                <div className="flex flex-col">
                  <label
                    className="font-medium text-lg mt-4 mb-2 "
                    htmlFor="clientName"
                  >
                    Client Name:
                  </label>
                  <input
                    className=" w-full rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#ffffff] p-2"
                    type="text"
                    placeholder="Enter the client Name or Bussiness Name..."
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="quantity"
                    className="font-medium text-lg mt-4 mb-2 "
                  >
                    Quantity:
                  </label>
                  <input
                    type="text"
                    className=" w-full rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#ffffff] p-2"
                    placeholder="Enter the Quantity..."
                  />
                </div>
                <div className="mt-4 mb-2 ">
                  <ButtonUI text="Add" />
                </div>
              </div>
              <div className="left basis-[50%]  ">
                <div className="dateContainer  flex items-center gap-8">
                  <div className="flex flex-col basis[50%]">
                    <label
                      htmlFor=""
                      className="font-medium text-lg mt-4 mb-2 "
                    >
                      Issue Date
                    </label>
                    <select
                      name=""
                      id=""
                      className=" rounded text-sm font-semibold text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#ffffff] p-4"
                    >
                      Select Date
                      <option selected value="India">
                        Select Date
                      </option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                  <div className="flex flex-col basis[50%]">
                    <label
                      htmlFor=""
                      className="font-medium text-lg mt-4 mb-2 "
                    >
                      Due Date
                    </label>
                    <select
                      name=""
                      id=""
                      className=" rounded text-sm font-semibold text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#ffffff] p-4"
                    >
                      Select Date
                      <option selected value="India">
                        Select Date
                      </option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-medium text-lg mt-4 mb-2 ">
                    Invoice Items:
                  </label>
                  <input
                    className=" w-full rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#ffffff] p-2"
                    type="text"
                    placeholder="Describe the item or services"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-medium text-lg mt-4 mb-2 ">
                    Unit Price:
                  </label>
                  <input
                    type="text"
                    className=" w-full rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#ffffff] p-2"
                    placeholder="Enter unit Price"
                  />
                </div>
              </div>
            </div>
            <div className="bottom">
              <h4 className="font-medium text-lg mt-4 mb-2 ">
                Addition Information (Optional)
              </h4>
              <div className="flex flex-col">
                <label
                  htmlFor="notes"
                  className="font-medium text-lg mt-4 mb-2 "
                >
                  Notes:
                </label>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Add any additional notes or terms here..."
                  className=" mb-5 rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#ffffff] p-2"
                ></textarea>
              </div>

              <ButtonUI text="Create Invoice" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
