import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import ButtonUI from "@/components/ButtonUI";
import Image from "next/image";

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
      <div className="parent flex-flex col bg-white rounded-lg py-10 px-8 mt-6">
        <div className="top flex basis-full gap-4">
          <div className="right">
            <label htmlFor="productname">Product Name</label>
            <input type="text" placeholder="Enter Product Name" />
            <label
              htmlFor="productname"
              placeholder=" Provide A Detail Description for the product..."
            >
              Product Description
            </label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="left">
            <h3>Product Image</h3>
            <div className="upload-image"></div>
            <div className="image1"></div>
            <div className="image2">
              <Image />
              <Image />

              <Image />

              <Image />
            </div>
          </div>
        </div>
        <div className="middle basis-[50%]">middle</div>
        <div className="bottom basis-[50%]">bottom</div>
      </div>
    </main>
  );
}
