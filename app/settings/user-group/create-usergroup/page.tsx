"use client"
import React, { useState } from "react"
import ButtonUI from "@/components/ButtonUI"
import Modal from "@/components/CreateVendorModal";


export default function CreateUserGroup() {
  const [open, setOpen] = useState(true)

  return (
    <main>
      <h2 className="text-2xl text-black font-bold">
        Creating a New User Group
      </h2>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />

      <div className="bg-white rounded p-4 ">
        <h2 className="text-xl text-black font-bold">
          Creating a New User Group
        </h2>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />

        <div className="flex gap-4  flex-col md:flex-row my-4 ">
          <div className="flex flex-col  gap-2 md:basis-[50%]  basis-full ">
            <label htmlFor="" className="font-semibold text-lg ">
              User Group Name:
            </label>
            <input
              type="text"
              placeholder="Enter the name of the new user group..."
              className="  border-[#006FCF] rounded-lg border-[1px] p-4 outline-none placeholder:text-[#00000078] placeholder:font-normal"
            />
          </div>
          <div className="md:basis-[50%] basis-full flex gap-2 flex-col">
            <label htmlFor="" className="font-semibold text-lg">
              Select Recipients:
            </label>
            <select
              name=""
              id=""
              className=" border-[#006FCF] rounded-lg border-[1px] p-4 outline-none text-[#00000078] font-normal"
            >
              <option>Choose a user group</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 ">
          <label htmlFor="" className="font-semibold text-lg">
            Select users to add to this group
          </label>
          <select
            name=""
            id=""
            className="border-[#006FCF] rounded-lg border-[1px] p-4 outline-none text-[#00000078] font-normal"
          >
            <option value="Type to search for users..."></option>
          </select>
        </div>
        <div className="flex flex-col mt-4 gap-2 mb-8">
          <label htmlFor="" className="font-semibold text-lg">
            User Group Description:
          </label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="border-[#006FCF] rounded-lg border-[1px] p-4 outline-none placeholder:text-[#00000078] placeholder:font-normal"
            placeholder="Describe the purpose or role of this user group..."
          ></textarea>
        </div>
        <div>
        <ButtonUI>Create User Group</ButtonUI>

        </div>
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
    </main>
  )
}
