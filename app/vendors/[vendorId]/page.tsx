"use client";
import ButtonUI from "@/components/ButtonUI";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Modal from "@/components/CreateVendorModal";
import Link from "next/link";
import VendorData from "./VendorData";
import UserActivity from "@/app/users/[id]/UserActivity";
import VendorDocuments from "./VendorDocuments";

export default function VendorPage() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">All Vendors</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="ml-auto" onClick={() => setOpen(true)}>
            <ButtonUI text="Add Vendor">
              <AddIcon />
            </ButtonUI>
          </div>
          <ButtonUI text="Filter by Date">
            <FilterAltIcon />
          </ButtonUI>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex lg:flex-row gap-4 items-center">
        <Link href="/vendors">
          <div className="mr-4">
            <p className="font-semibold text-xl">Vendors</p>
            <hr className="rounded-md w-ful  border-2" />
          </div>
        </Link>

        <div className="mr-4">
          <p className="font-semibold text-xl">Vendors Information</p>
          <hr className="rounded-md w-ful border-[#006FCF] border-2" />
        </div>
      </div>
      <div className="parent bg-white rounded-lg py-4 px-6 mt-6">
        <VendorData />
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />

        <UserActivity />
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
        <VendorDocuments />
      </div>

      {/* Modal */}

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className=" w-96">
          <form action="">
            <h2 className="text-black text-4xl mt-2 text-center">
              Create Vendor
            </h2>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="vendor" className="font-semibold text-xl">
                Vendor
              </label>
              <input
                id="vendor"
                type="text"
                placeholder="Full Name"
                className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="phone" className="font-semibold text-xl">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="industry" className="font-semibold text-xl">
                Industry
              </label>
              <input
                type="text"
                placeholder="Select Your Industry"
                className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="services" className="font-semibold text-xl">
                Vendor
              </label>
              <input
                type="text"
                placeholder="Select Services"
                className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none"
              />
            </div>
            <button className=" my-4 w-full flex align-center justify-center text-center text-white bg-[#006FCF] font-semibold  rounded px-2 py-2">
              Add Vendor
            </button>
            {/* <ButtonUI text="Add Vendor"></ButtonUI> */}
          </form>
        </div>
      </Modal>
    </main>
  );
}
