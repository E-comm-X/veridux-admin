"use client"
import {useState} from "react";
import ButtonUI from "@/components/ButtonUI";
import Link from "next/link";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PaymentsIcon from '@mui/icons-material/Payments';
import WalletIcon from '@mui/icons-material/Wallet';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Modal from "@/components/CreateVendorModal";

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
      <div className="parent bg-white border-[1px] rounded-lg mt-6 px-4 py-6 ">
        <div className="top flex flex-row justify-between items-center ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
              <PaymentsIcon style={{fill:"#006FCF"}}/>
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
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
           <WalletIcon style={{ fill: "#006FCF" }}/> 
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
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
              <RequestQuoteIcon style={{ fill: "#006FCF" }}/>
            </div>
            <div>
              <h2 className="font-bold text-base">
              Currency Options
              </h2>
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
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
             <VerifiedUserIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">
              Compliance & Regulations              </h2>
              <p className="font-normal text-sm text-[#00000099] ">
              Stay compliant with financial regulations by configuring necessary settings
              </p>
            </div>
          </div>
          <ArrowForwardIosIcon />
        </div>

        <div className="bottom flex flex-row justify-between items-center mt-8 ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
              <GpsFixedIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">Real-Time Transaction Monitoring</h2>
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
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
             <ReceiptLongIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">
              Transaction Fees
              </h2>
              <p className="font-normal text-sm text-[#00000099] ">
              Configure transaction fees for different types of transactions
              </p>
            </div>
          </div>
          <div  onClick={() => setOpen(true)}>
          <ArrowForwardIosIcon  />
          </div>
        
        </div>
      </div>
      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className=" w-96">
          <form action="">
            <h2 className="text-black text-4xl mt-2 text-center">Create Vendor</h2>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="vendor" className="font-semibold text-xl">Vendor</label>
              <input id="vendor" type="text" placeholder="Full Name" className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none"/>
            </div> 
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="phone"  className="font-semibold text-xl">Phone Number</label>
              <input type="text" placeholder="Enter Phone Number" className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="industry"  className="font-semibold text-xl">Industry</label>
              <input type="text" placeholder="Select Your Industry" className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none"  />
            </div>
            <div className="flex flex-col gap-2 mt-2" >
              <label htmlFor="services"  className="font-semibold text-xl">Vendor</label>
              <input type="text" placeholder="Select Services" className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none" />
            </div>
            <button className=" my-4 w-full flex align-center justify-center text-center text-white bg-[#006FCF] font-semibold  rounded px-2 py-2">Add Vendor</button>
            {/* <ButtonUI text="Add Vendor"></ButtonUI> */}
          </form>
        </div>
      </Modal>
    </main>
  );
}
