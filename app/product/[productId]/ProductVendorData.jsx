import React from "react";
import ButtonUI from "@/components/ButtonUI";
export default function () {
  return (
    <div className=" p-4 mb-4 flex flex-col  gap-3 ">
      <h3 className="text-base font-semibold md:basis-[20%] basis-full ">
        {" "}
        Vendor Data
      </h3>

      <div className="md:ml-20 md:basis-[80%] basis-full">
        <form action="" className="">
          <div className=" flex flex-col lg:flex-row gap-2">
            <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
              <label htmlFor="" className="font-semibold text-sm ">
                Bussiness Name
              </label>
              <input
                type="text"
                placeholder="Bussiness Name"
                className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
              />
            </div>
            <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
              <label htmlFor="" className="font-semibold text-sm ">
                Industry
              </label>
              <input
                type="text"
                placeholder="Select your Industry"
                className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
              />
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-2 mt-6">
            <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
              <label htmlFor="" className="font-semibold text-sm ">
                Services
              </label>
              <input
                type="text"
                placeholder="Select Services"
                className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
              />
            </div>
            <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
              <label htmlFor="" className="font-semibold text-sm ">
                Bussiness Type
              </label>
              <select name="business type" id="business"
                className= " rounded text-sm font-semibold text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"

              >
                <option selected value="India">Business type</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Australia">Australia</option>
              </select>
              
            </div>
          </div>
          <div className="mt-8 flex gap-6 items-center">
            <button className="border-[#006FCF] border-2 text-center rounded px-6 py-2 bg-white text-[#006FCF] font-semibold text-sm">
              Draft
            </button>

            <ButtonUI text="save" />
          </div>
        </form>
      </div>
    </div>
  );
}
