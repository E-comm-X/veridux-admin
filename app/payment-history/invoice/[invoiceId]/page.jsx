import React from "react";
import ButtonUI from "@/components/ButtonUI";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
export default function INvoiceDetails() {
  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Invoice Details</h2>
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
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-2 " />
      <section className="bg-white p-6 rounded-lg">
        <div className="md:w-1/2 w-full">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl">
              Show Order Summary <span>icon</span>
            </h3>
            <h3 className="font-bold text-xl">$23</h3>
          </div>
          <div className="flex mt-4  border-2 rounded-lg ">
            <div className="imageContainer basis-[20%] relative">
              <Image fill={true} className="absolute" src="/veridux-logo.svg" />
            </div>
            <div className="textContainer basis-[80%] p-4">
              <div className="title flex justify-between">
                <h4 className="font-semibold text-base">
                  Unsettled Hoodie Tokyo Ghoul cotton fleece premium
                </h4>
                <h4 className="font-semibold text-base">$28</h4>
              </div>
              <div className="details flex gap-4 mt-4">
                <div className="flex gap-2">
                  <p className="font-medium text-base text-[#677489]">Qty:</p>
                  <p className="font-medium text-base">1</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-medium text-base text-[#677489]">Size: </p>
                  <p className="font-medium text-base">xl</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-medium text-base text-[#677489]">Color:</p>
                  <p className="font-medium text-base">blue</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <h6 className="font-medium text-base text-[#677489]">Subtotal</h6>
            <h6 className="font-medium text-base">$28</h6>
          </div>
          <div className="flex justify-between mt-2">
            <h6 className="font-medium text-base text-[#677489]">
              Shipping Cost
            </h6>
            <h6 className="font-medium text-base">$8</h6>
          </div>
          <div className="flex justify-between mt-2">
            <h6 className="font-medium text-base text-[#677489]">
              Discount (-10%)
            </h6>
            <h6 className="font-medium text-base">-$13</h6>
          </div>
          <hr className="h-px mt-4 mb-4 bg-gray-200 border-[1px] " />
          <div className="flex justify-between mt-2">
            <h6 className="font-medium text-base ">Total</h6>
            <h6 className="font-medium text-base">-$23</h6>
          </div>
          <h3 className="font-semibold text-lg mt-6  ">Payment Details </h3>
          <div className="mt-8 flex justify-between">
            <h4 className="font-semibold text-base">Payment</h4>
            <p>icon</p>
          </div>
          <hr className="h-px mt-4 mb-4 bg-gray-200 border-[1px] " />

          <h4 className="font-semibold text-base mb-2">Payment method</h4>
          <div className="payment-methods mb-4  flex gap-4">
            <div className="payment1 flex-col md:flex-row basis-[40%] flex rounded-lg p-2 gap-4 justify-evenly border-[#4B7DF3] border-2">
              <div>
                <input type="checkbox" name="" id="" />
              </div>
              <div>
                <h5 className="font-bold text-sm">***** 6685</h5>
                <div className="flex gap-2">
                  <p className="font-medium text-[#677489]">Visa</p>
                  <span className="w-[4px] h-[4px] bg-[#677489] self-center rounded-full"></span>
                  <p className="font-medium text-[#677489]">Edit</p>
                </div>
              </div>
              <Image src="/veridux-logo.svg" width={40} height={40} />
            </div>
            <div className="payment2 basis-[40%] flex flex-col md:flex-row rounded-lg p-2 gap-4 justify-evenly border-[#E3E8EF] border-2">
              <div>
                <input type="checkbox" name="" id="" />
              </div>
              <div>
                <h5 className="font-bold text-sm">***** 6685</h5>
                <div className="flex gap-2">
                  <p className="font-medium text-[#677489]">Visa</p>
                  <span className="w-[4px] h-[4px] bg-[#677489] self-center rounded-full"></span>
                  <p className="font-medium text-[#677489]">Edit</p>
                </div>
              </div>
              <Image src="/veridux-logo.svg" width={40} height={40} />
            </div>
            <div className="payment3 p-4 basis-[20%] border-[#E3E8EF] rounded-lg border 2 justify-center items-center">
              <div className="iconConatiner flex items-center justify-center border-8 rounded-lg w-[60px] border-[#4B7DF3]">
                <AddIcon style={{ fill: "#4B7DF3" }} />
              </div>
              <h6 className="mt-2 font-medium text-sm text-center text-[#4B7DF3] ">
                New
              </h6>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cardholder"
              className=" my-4 text-base font-bold text-[#111729] "
            >
              Card holder name
            </label>
            <input
              type="text"
              placeholder="Ex Jane Copper"
              className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cardholder"
              className=" my-4 text-base font-bold text-[#111729] "
            >
              Billing Address
            </label>
            <select
              name="business type"
              id="business"
              className=" rounded text-sm font-semibold text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-4"
            >
              <option selected value="India">
                United States
              </option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div className="flex gap-4 pr-4 ">
            <div className="basis-[50%] flex flex-col">
              <label
                htmlFor="zip"
                className=" my-4 text-base font-bold text-[#111729] "
              >
                Zip Code
              </label>
              <input
                type="text"
                placeholder="EX. 46476"
                className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
              />
            </div>
            <div className="basis-[50%] flex flex-col">
              <label
                htmlFor="zip"
                className=" my-4 text-base font-bold text-[#111729] "
              >
                City
              </label>
              <input
                type="text"
                placeholder="New York"
                className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
              />
            </div>
          </div>
          <div className="flex mt-6 gap-2 items-center">
            <input type="checkbox" name="" id="" />
            <p className="text-base font-medium text-[#677489]">Billing address is same as shipping</p>
          </div>
          <button className="text-white text-base font-bold text-center bg-[#4B7DF3] mt-4 rounded-lg px-[11px] py-[14px] w-full">Pay $51:00</button>
        </div>
      </section>
    </main>
  );
}
