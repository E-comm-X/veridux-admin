"use client";
import { useState } from "react";
import React from "react";
import ButtonUI from "@/components/ButtonUI";
import Link from "next/link";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Modal from "@/components/CreateVendorModal";
import CheckIcon from "@mui/icons-material/Check";
export default function page() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">
            Compliance & Regulations
          </h2>
          <p className="font-normal text-base text-[#0000006E]">
            Define the features and limitations of user wallets
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
        <div className="bottom flex flex-row justify-between items-center mt-4 ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
              <AccountBalanceWalletIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">AML Checks</h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Implement Anti-Money Laundering (AML) checks to enhance
                security.
              </p>
            </div>
          </div>
          <div className="toggle relative w-[50px] h-[25px] bg-black rounded-full">
            <div className="absolute w-[25px] h-[25px] bg-white rounded-full"></div>
          </div>
        </div>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
        <div className="top flex flex-row justify-between items-center ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
              <AccountBalanceWalletIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">KYC Requirements</h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Set up user verification processes to meet Know Your Customer
                (KYC) regulations.
              </p>
            </div>
          </div>
          <div className="" onClick={() => setOpen(true)}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-96 md:w-auto">
          <form action="" className="flex flex-col">
            <h2 className="text-center font-bold text-2xl">KYC Requirement</h2>
            <p className="text-center font-normal text-base">
              KYC requirements are essential for establishing trust and
              compliance within your ecosystem
            </p>
            <h3 className="font-semibold  text-xl mb-2  mt-2 ">
              Document Types
            </h3>
            <div className="container mt-2 mb-2 ">
              <div className="flex  flex-wrap md:flex-nowrap gap-4">
                <div className="flex bg-[#006FCF1A] basis-[30%]  rounded-lg border-2 border-[#006FCF] items-center p-2 gap-4">
                  <div className="iconContainer w-[26px] h-[26px] rounded-full flex items-center justify-center rounded-full bg-[#006FCF40] border-[#006FCF] border-2 ">
                    <CheckIcon style={{ fill: "#006FCF" }} />
                  </div>
                  <h5 className="text-[29.24px] font-semibold text-[#006FCF]">
                    Pdf
                  </h5>
                </div>
                <div className="flex bg-[#006FCF1A] basis-[30%] rounded-lg border-2 border-[#006FCF] items-center p-2 gap-4">
                  <div className="iconContainer w-[26px] h-[26px] rounded-full flex items-center justify-center rounded-full bg-[#006FCF40] border-[#006FCF] border-2 ">
                    <CheckIcon style={{ fill: "#006FCF" }} />
                  </div>
                  <h5 className="text-[29.24px] font-semibold text-[#006FCF]">
                    Png
                  </h5>
                </div>
                <div className="flex bg-[#006FCF1A] basis-[30%] rounded-lg border-2 border-[#006FCF] items-center p-2 gap-4">
                  <div className="iconContainer w-[26px] h-[26px] rounded-full flex items-center justify-center rounded-full bg-[#006FCF40] border-[#006FCF] border-2 ">
                    <CheckIcon style={{ fill: "#006FCF" }} />
                  </div>
                  <h5 className="text-[29.24px] font-semibold text-[#006FCF]">
                    Word
                  </h5>
                </div>
                <div className="flex bg-[#006FCF1A] basis-[30%] rounded-lg border-2 border-[#006FCF] items-center p-2 gap-4">
                  <div className="iconContainer w-[26px] h-[26px] rounded-full flex items-center justify-center rounded-full bg-[#006FCF40] border-[#006FCF] border-2 ">
                    <CheckIcon style={{ fill: "#006FCF" }} />
                  </div>
                  <h5 className="text-[29.24px] font-semibold text-[#006FCF]">
                    jpg
                  </h5>
                </div>
              </div>
            </div>
            <h3 className="font-semibold  text-xl">Store Details</h3>
            <div className="relative">
              <input
                type="text"
                placeholder=" Registration Number"
                className="mt-2 rounded text-sm font-semibold placeholder:text-[#006FCFD9] border-[#006FCF] border-2 outline-none bg-[#006FCF21] py-4 px-8"
              />
              <div className="iconContainer absolute bottom-[12px] left-[7px] w-[26px] h-[26px] rounded-full flex items-center justify-center rounded-full bg-[#006FCF40] border-[#006FCF] border-2 ">
                <CheckIcon style={{ fill: "#006FCF" }} />
              </div>
            </div>

            <div className="flex flex-col gap-2 ">
              <label htmlFor="" className="font-semibold text-xl mt-2">
                Currency
              </label>
              <select
                name=""
                id=""
                className=" rounded text-sm font-semibold text-[#006FCFD9] border-[#006FCF] border-2 outline-none bg-[#006FCF21] p-4"
              >
                <option required value="">
                  Select Country
                </option>
              </select>
            </div>

            <div className="buttonConatiner text-center mx-auto  flex mt-4 ">
              <button className=" flex align-center mr-6 justify-center text-center text-[#006FCF] bg-[#006FCF40] font-semibold  rounded px-4 py-2 ">
                Cancel
              </button>
              <button className=" flex align-center justify-center text-center text-white bg-[#006FCF] font-semibold  rounded px-4 py-2 ">
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </main>
  );
}
