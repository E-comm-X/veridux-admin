"use client";
import ButtonUI from "@/components/ButtonUI";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import UserTables from "@/components/UserTables";
import { useState } from "react";
import Modal from "@/components/CreateVendorModal";

export default function UserPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Users</h2>
          <p className="font-normal text-base text-[#0000006E]">
            Update 5sec ago
          </p>
        </div>
        <div className="ml-auto flex gap-4">
          <div onClick={() => setOpen(true)}>
            <ButtonUI text="Add User">
              <AddIcon />
            </ButtonUI>
          </div>

          <ButtonUI text="Filter by date">
            <FilterAltIcon />
          </ButtonUI>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <UserTables />
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className=" w-96">
          <form action="">
            <h2 className="text-black text-4xl mt-2 text-center">
              Add New user
            </h2>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="fullName" className="font-semibold text-xl">
                Full Name
              </label>
              <input
                id="fullName"
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
              <label htmlFor="username" className="font-semibold text-xl">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center">
                <label htmlFor="password" className="font-semibold text-xl">
                  Password
                </label>
                <p className="ml-auto text-[#006FCF] text-sm font-semibold">
                  Generate a random password
                </p>
              </div>
              <input
                type="password"
                placeholder="Password"
                className=" border-2 p-2 rounded border-[#006FCF] bg-[#006FCF1F] outline-none"
              />
            </div>
            <button className=" my-4 w-full flex align-center justify-center text-center text-white bg-[#006FCF] font-semibold  rounded px-2 py-2">
              Add User
            </button>
            {/* <ButtonUI text="Add Vendor"></ButtonUI> */}
          </form>
        </div>
      </Modal>
    </div>
  );
}
