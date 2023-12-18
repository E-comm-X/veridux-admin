"use client";
import { useState } from "react";
import ButtonUI from "./ButtonUI";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@/components/CreateVendorModal";

export default function Charts() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" bg-white rounded-xl p-2">
        <div className="flex items-center m-6 text-black">
          <h2 className="texl-2xl font-semibold ">Vendors Statistic</h2>
          <div className="ml-auto" onClick={() => setOpen(true)}>
            <ButtonUI text="Add Vendor">
              <AddIcon />
            </ButtonUI>
          </div>
        </div>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
        <h2>Charts</h2>
      </div>
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
    </>
  );
}
