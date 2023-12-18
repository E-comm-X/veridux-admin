"use client"
import React from 'react'
import UserTables from "@/components/UserTables";
import { useState } from "react";
import ButtonUI from "@/components/ButtonUI";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@/components/CreateVendorModal";
import Link from "next/link"

export default function UserDetails() {
  const [open, setOpen] = useState(false);

  return (
    <div>
       <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Users</h2>
          <p className="font-normal text-base text-[#0000006E]">
            Today
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
      <div className="flex lg:flex-row gap-4 items-center">
        <Link href="/users">
        <div className="mr-4">
            <p className="font-semibold text-xl">Users</p>
            <hr className="rounded-md w-ful  border-2" />
          </div>
        </Link>
         
          <div className="mr-4">
            <p className="font-semibold text-xl">User Information</p>
            <hr className="rounded-md w-ful border-[#006FCF] border-2" />
          </div>
        </div>

        <div className="parent bg-white rounded-lg">
          <div className="children">children</div>
          <div className="children">children</div>

          <div className="children">children</div>

        </div>

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
  )
}
