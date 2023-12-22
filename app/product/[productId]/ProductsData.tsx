import React from "react";
import ButtonUI from "@/components/ButtonUI";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";

export default function ProductsData() {
  return (
    <div className=" p-4 mb-4 flex flex-col  gap-3 ">
      <h3 className="text-base font-semibold md:basis-[20%] basis-full ">
        Product Data
      </h3>

      <div className="md:ml-20 md:basis-[80%] basis-full">
        <form action="" className="">
          <div className=" flex flex-col lg:flex-row gap-2">
            <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
              <label htmlFor="" className="font-semibold text-sm ">
                Product
              </label>
              <input
                type="text"
                placeholder="Select your Product"
                className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
              />
            </div>
            <div className="lg:basis-2/4 basis-full gap-2 flex flex-col">
              <label htmlFor="" className="font-semibold text-sm ">
                Pricing and Offers
              </label>
              <input
                type="text"
                placeholder="Select your industry"
                className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
              />
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-2 mt-6 ">
            <div className="basis-2/4">
              <div className="basis-full  gap-2 flex flex-col">
                <label htmlFor="" className="font-semibold text-sm ">
                  Pricing and Offers
                </label>
                <input
                  type="text"
                  placeholder="Select Service"
                  className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
                />
              </div>
              <div className="imageContainer flex mt-6 gap-4 ">
                <Image
                  src="/veridux-logo.svg"
                  width={69}
                  height={69}
                  className="rounded border-[1px] border-[#006FCF]"
                />
                <Image
                  src="/veridux-logo.svg"
                  width={69}
                  height={69}
                  className="rounded border-[1px] border-[#006FCF]"
                />
                <div className="w-[69px] h-[69px] rounded relative border-dashed border-[1px] border-[#006FCF] bg-[#006FCF4A]">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <AddIcon style={{ fill: "#006FCF" }} />
                  </div>
                </div>
              </div>
            </div>

            <textarea
              className=" mt-6  h-[141px]  basis-2/4 rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
              placeholder="product description"
            />
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
