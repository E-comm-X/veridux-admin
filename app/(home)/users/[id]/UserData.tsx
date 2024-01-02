import React from 'react'
import ButtonUI from "@/components/ButtonUI";

export default function UserData() {
  return (
    <div className="rounded-lg border-2 border-[#00000061] p-4 mb-4 flex flex-col  gap-3 ">
          <h3 className="text-base font-semibold md:basis-[20%] basis-full ">User Data</h3>

          <div className="md:ml-20 md:basis-[80%] basis-full">
            <form action="" className="">
              <div className=" flex flex-col lg:flex-row gap-2">
                <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
                  <label htmlFor="" className="font-semibold text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Select your Product"
                    className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#006FCF1F] p-2"
                  />
                </div>
                <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
                  <label htmlFor="" className="font-semibold text-sm ">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Input Email"
                    className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#006FCF1F] p-2"
                  />
                </div>
              </div>
              <div className=" flex flex-col lg:flex-row gap-2 mt-6">
                <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
                  <label htmlFor="" className="font-semibold text-sm ">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Input Phone Number"
                    className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#006FCF1F] p-2"
                  />
                </div>
                <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
                  <label htmlFor="" className="font-semibold text-sm ">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Null"
                    className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#006FCF] border-2 outline-none bg-[#006FCF1F] p-2"
                  />
                </div>
              </div>
              <div className="mt-8 flex gap-16 items-center">
                <button className="bg-[#006FCF40] text-[#006FCF] align-centet rounded px-4 p-2">
                  cancel
                </button>
                <ButtonUI  text="save"/>
              </div>
            </form>
          </div>
        </div>
  )
}
