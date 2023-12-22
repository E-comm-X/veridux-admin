import React from "react";
import ButtonUI from "@/components/ButtonUI";
import Link from "next/link";
import HouseSidingIcon from '@mui/icons-material/HouseSiding';

export default function page() {
  return (
    <main>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Currency Options</h2>
          <p className="font-normal text-base text-[#0000006E]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="mt-2 ml-auto flex items-center gap-4">
          <div className="ml-auto">
            <button className="flex align-center justify-center text-center text-[#006FCF] bg-[#006FCF40] font-semibold  rounded px-4 py-2 ">
              Cancel
            </button>
          </div>
          <div className="ml-auto">
            <ButtonUI text="Save"></ButtonUI>
          </div>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex gap-4 flex-col md:flex-row bg-white items-center p-2 rounded ">
        <Link href="/setting" className="font-semibold text-sm  ">
          General
        </Link>
        <Link href="/setting/administrator" className="font-semibold text-sm ">
          User Management
        </Link>
        <Link href="/setting/security" className="font-semibold text-sm  ">
          Security & Compliance
        </Link>
        <Link
          href="/setting/fintech-services"
          className="font-semibold text-sm underline decoration-[#006FCF] "
        >
          Fintech Services
        </Link>
        <Link href="/setting/support" className="font-semibold text-sm">
          Support
        </Link>
        <Link href="/settings/user-group" className="font-semibold text-sm">
          User Groups
        </Link>
      </div>
      {/* Body */}
      <div className="parent bg-white border-[1px] rounded-lg mt-6 px-4 py-6 ">
        <h3 className="font-bold text-[19.27px]"> Choose the Currencies</h3>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
        <div className="container flex  flex-col md:flex-row">
          <div className="right flex basis-[45%] gap-4 ">
            <div className="iconContainer  w-[53px] rounded-lg h-[53px] bg-[#006FCF40] flex items-center justify-center">
               <HouseSidingIcon style={{fill: "#006FCF"}} />
            </div>
            <div className="inputContainer basis-[80%] flex flex-col gap-4">
              <label htmlFor="country" className="font-semibold text-[19.27px]">
                Select Country
              </label>
              <select name="usa" id=""
              className=" rounded w-full text-sm font-semibold text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-4"
              
              >
                <option selected value="India">
                USA
              </option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Australia">Australia</option>
              </select>
            </div>
          </div>
          <div className="left basis-[45%] flex flex-col gap-4">
            <label
              htmlFor="Currency symbol"
              className="font-semibold text-[19.27px]"
            >
              currency symbol
            </label>
            <input
              type="text"
              placeholder="$300"
              className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#00000057] border-2 outline-none  p-4"
            />
            <ButtonUI text="Save" />
          </div>
        </div>
      </div>
    </main>
  );
}
