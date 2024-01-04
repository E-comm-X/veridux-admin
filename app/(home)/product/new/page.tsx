"use client"
import React from "react"
import { Input, Select } from "antd"
import { UploadImage } from "@/components/UploadImage"

export default function AddProduct() {
  return (
    <main>
      {/* headeding */}
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Add Product</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      {/* body */}
      <div className="parent bg-white rounded-lg py-10 px-8 mt-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="right px-4 py-8   lg:basis-[489px] rounded-lg border-[1px] border-[#E0E2E7] flex flex-col ">
            <div className="mb-5">
              <label
                htmlFor="productname"
                className="text-sm font-medium block mb-1"
              >
                Product Name
              </label>
              <Input
                type="text"
                placeholder="Enter Product Name"
                size="large"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="productname"
                className="text-sm font-medium block mb-1"
                // placeholder=" Provide A Detail Description for the product..."
              >
                Product Description
              </label>
              <Input.TextArea
                name=""
                id=""
                style={{ minHeight: "8rem" }}
              ></Input.TextArea>
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-sm font-medium block mb-1">
                Quantity
              </label>
              <Input type="number" placeholder="Enter Quantity" size="large" />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-sm font-medium block mb-1">
                Brand Name
              </label>
              <Input type="text" placeholder="Enter Brand Name" size="large" />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-sm font-medium block mb-1">
                Package size
              </label>
              <Input
                type="number"
                placeholder="Enter Package size"
                size="large"
              />
            </div>
          </div>
          <div className="left basis[50%] lg:basis[546px] p-4  rounded-lg border-[1px] border-[#E0E2E7] ">
            <h3 className="font-medium text-base mb-4">Product Image</h3>
            <UploadImage />
          </div>
        </div>
        <div className="middle w-full md:w-[48%] mt-6">
          <h2 className="text-base font-semibold mb-4">Product Category</h2>
          <div className="rounded-lg border-[1px] border-[#E0E2E7] p-4">
            <div className="mb-5">
              <label
                htmlFor="category"
                className="font-medium text-base mb-1 block mb-1"
              >
                Select Category:
              </label>
              <Select placeholder="Category" size="large" className="w-full" />
            </div>

            <div>
              <label
                htmlFor="category"
                className="font-medium text-base block mb-1"
              >
                Sub Category
              </label>
              <Select
                placeholder="Sub Category"
                size="large"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="bottom basis-[50%] md:w-[48%]">
          <h2 className="text-base font-semibold mb-4 mt-4">Pricing</h2>
          <div className=" rounded-lg border-[1px] border-[#E0E2E7] flex justify-between gap-[1rem] p-6">
            <div>
              <h3 className="font-medium text-lg">Price</h3>
              <div className="flex items-center gap-4 border-[#C1C1C1] rounded border-[1px] mt-5  pr-10">
                <div className="signContainer h-[50px] w-[50px] bg-[#A1A1A15E] rounded relative">
                  <span className="font-medium text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    $
                  </span>
                </div>
                <input
                  className="w-[100%] font-medium text-xl border-0 outline-none placeholder:text-black placeholder:text-lg placeholder:font-medium"
                  placeholder=""
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
                  className=" w-[100%] font-medium text-xl border-0 outline-none placeholder:text-black placeholder:text-lg placeholder:font-medium"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
