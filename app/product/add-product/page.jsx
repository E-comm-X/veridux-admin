import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import ButtonUI from "@/components/ButtonUI";
import Image from "next/image";
import ImageIcon from "@mui/icons-material/Image";

export default function AddProduct() {
  return (
    <main>
      {/* headeding */}
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Add Product</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="ml-auto">
            <ButtonUI text="Add Products">
              <AddIcon />
            </ButtonUI>
          </div>
          <ButtonUI text="Filter by Date">
            <FilterAltIcon />
          </ButtonUI>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      {/* body */}
      <div className="parent bg-white rounded-lg py-10 px-8 mt-6">
        <div className="top flex flex-col md:flex-row  gap-10  gap-4">
          <div className="right px-4 py-8   lg:basis-[489px] rounded-lg border-[1px] border-[#E0E2E7] flex flex-col ">
            <label htmlFor="productname" className="text-sm font-medium  mb-5">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
            />
            <label
              htmlFor="productname"
              className="text-sm font-medium mb-5 "
              placeholder=" Provide A Detail Description for the product..."
            >
              Product Description
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
            ></textarea>
          </div>
          <div className="left basis[50%] lg:basis[546px] p-4  rounded-lg border-[1px] border-[#E0E2E7] ">
            <h3 className="font-medium text-base mb-4">Product Image</h3>
            <div className="flex items-center justify-evenly gap-4 ">
              <div className="upload-image relative flex justify-center items-center border-dashed border-2 bg-[#ACD9FF1A] border-[#006FCF] rounded-lg text-center  w-[132px] h-[132px]">
                <div className="">
                  <ImageIcon style={{ fill: "#006FCF" }} />
                  <p className="font-semibold text-sm  underline text-[#00447E]">
                    Click Or Drag and Drop
                  </p>
                </div>
              </div>
              <div className=" self-start image1  w-[132px] h-[132px] relative rounded-lg mt-4 border-[1px]">
                <Image
                  fill={true}
                  className="absolute"
                  src="/veridux-logo.svg"
                />
              </div>
              <div className="image2  w-[132px] h-[132px] border-2 grid grid-cols-5 grid-rows-5 gap-4  gap-12">
                <div className="col-span-2">
                  <Image width={132} height={62} src="/veridux-logo.svg" />
                </div>
                <div className="col-span-2 col-start-1 row-start-2">
                  <Image width={132} height={62} src="/veridux-logo.svg" />
                </div>
                <div className="col-start-3 row-start-1">
                  <Image width={132} height={62} src="/veridux-logo.svg" />
                </div>
                <div className="col-start-3 row-start-2">
                  <Image width={132} height={62} src="/veridux-logo.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle w-full  md:w-[489px] mt-6  ">
          <h2 className="text-base font-semibold mb-4">Product Category</h2>
          <div className="rounded-lg border-[1px] border-[#E0E2E7] p-4 flex flex-col ">
            <label htmlFor="category" className="font-medium text-base mb-4">
              Select Category:
            </label>
            <select
              name="business type"
              id="business"
              className=" rounded text-sm font-semibold text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-4"
            >
              <option selected value="India">
                Fashion and Life Style
              </option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Australia">Australia</option>
            </select>
            <label htmlFor="category" className="font-medium text-base mb-4">
              Sub Category
            </label>
            <select
              name="business type"
              id="business"
              className=" rounded text-sm font-semibold text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-4"
            >
              <option selected value="India">
                Fashion and Life Style
              </option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>
        <div className="bottom basis-[50%] md:w-[500px]    ">
          <h2 className="text-base font-semibold mb-4 mt-4">Pricing</h2>
          <div className=" rounded-lg border-[1px] border-[#E0E2E7] flex justify-between p-6">
            <div>
              <h3 className="font-medium text-lg">Price</h3>
              <div className="flex items-center gap-4 border-[#C1C1C1] rounded border-[1px] mt-5  pr-10">
                <div className="signContainer h-[50px] w-[50px] bg-[#A1A1A15E] rounded relative">
                  <span className="font-medium text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    $
                  </span>
                </div>
                <input
                  className="w-[100px] font-medium text-xl border-0 outline-none placeholder:text-black placeholder:text-lg placeholder:font-medium"
                  placeholder="180"
                />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg">Discount</h3>
              <div className="flex items-center gap-4 border-[#C1C1C1] rounded border-[1px] mt-5  pr-10">
                <div className="signContainer h-[50px] w-[50px] bg-[#A1A1A15E] rounded relative">
                  <span className="font-medium text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    $
                  </span>
                </div>
                <input
                  className=" w-[100px] font-medium text-xl border-0 outline-none placeholder:text-black placeholder:text-lg placeholder:font-medium"
                  placeholder="180"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
