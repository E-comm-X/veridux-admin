"use client";
import { useState } from "react";
import ButtonUI from "@/components/ButtonUI";
import Link from "next/link";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PaymentsIcon from "@mui/icons-material/Payments";
import WalletIcon from "@mui/icons-material/Wallet";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Modal from "@/components/CreateVendorModal";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function page() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">FinTech Services</h2>
          <p className="font-normal text-base text-[#0000006E]">
            Explore an overview of the fintech services available on your
            platform.
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
          href="/setting/fintech-service"
          className="font-semibold text-sm underline decoration-[#006FCF] "
        >
          Fintech Services
        </Link>
        <Link href="/setting/support" className="font-semibold text-sm">
          Support
        </Link>
        <Link href="/setting/user-group" className="font-semibold text-sm">
          User Groups
        </Link>
      </div>
      {/* Body */}
      <div className="parent bg-white border-[1px] rounded-base mt-6 px-4 py-6 ">
        <div className="top flex flex-row justify-between items-center ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-base flex items-center bg-[#006FCF40] p-2 justify-center">
              <PaymentsIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">
                Payment Processing Options
              </h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Strengthen your admin account's security with an extra layer of
                protection.
              </p>
            </div>
          </div>
          <ArrowForwardIosIcon />
        </div>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
        <div className="top flex flex-row justify-between items-center ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-base flex items-center bg-[#006FCF40] p-2 justify-center">
              <WalletIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">Wallet Functionality</h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Define the features and limitations of user wallets
              </p>
            </div>
          </div>
          <ArrowForwardIosIcon />
        </div>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
        <div className="top flex flex-row justify-between items-center ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-base flex items-center bg-[#006FCF40] p-2 justify-center">
              <RequestQuoteIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">Currency Options</h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Choose the currencies you'll support for transactions
              </p>
            </div>
          </div>
          <ArrowForwardIosIcon />
        </div>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
        <div className="top flex flex-row justify-between items-center ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-base flex items-center bg-[#006FCF40] p-2 justify-center">
              <VerifiedUserIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">Compliance & Regulations </h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Stay compliant with financial regulations by configuring
                necessary settings
              </p>
            </div>
          </div>
          <ArrowForwardIosIcon />
        </div>

        <div className="bottom flex flex-row justify-between items-center mt-8 ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-base flex items-center bg-[#006FCF40] p-2 justify-center">
              <GpsFixedIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">
                Real-Time Transaction Monitoring
              </h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Choose the currencies you'll support for transactions
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
            <div className="iconContainer rounded-base flex items-center bg-[#006FCF40] p-2 justify-center">
              <ReceiptLongIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">Transaction Fees</h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Configure transaction fees for different types of transactions
              </p>
            </div>
          </div>
          <div onClick={() => setOpen(true)}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className=" w-96">
          <form action="" className="flex flex-col">
            <h2 className="text-center font-bold text-2xl">
              Transaction Fee Settings
            </h2>
            <p className="text-center font-normal text-base">
              This page allows you to set the fees for your fintech services.
              The fees you set will apply to all users of your services
            </p>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="font-bold text-base text-[#006FCF] mt-2"
              >
                Currency
              </label>
              <select
                name=""
                id=""
                className=" rounded text-sm font-semibold text-[#006FCFD9] border-[#d1d1d1] border-2 outline-none bg-[#006FCF21] p-2"
              >
                <option required value="">
                  Select Country
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="font-bold text-base text-[#006FCF] mt-2"
              >
                Enter Amount
              </label>
              <div className="flex relative">
                <input
                  type="text"
                  className="w-full rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#006FCFD9] border-[#006FCFD9] border-2 outline-none bg-[#006FCF21] p-2"
                  placeholder="Fee Amount"
                />
                <div className="flex absolute gap-6 bottom-0 right-0 top-[8px] right-[12px]  ">
                  <div className="flex rounded-lg justify-center items-center bg-[#006FCF] w-[30px] h-[30px] ">
                    <AddIcon style={{ fill: "#DEECF9" }} />
                  </div>
                  <div className="flex  rounded-lg justify-center items-center bg-[#006FCF] w-[30px] h-[30px] ">
                    <RemoveIcon style={{ fill: "#DEECF9" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="font-bold text-base text-[#006FCF] mt-2 "
              >
                Description
              </label>
              <textarea
                col="10"
                row="30"
                className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#006FCFD9] border-[#006FCFD9] border-2 outline-none bg-[#006FCF21] p-2"
                type="text"
                placeholder="A brief description of the fee. This could be helpful for users who are not familiar with your services"
              ></textarea>
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
