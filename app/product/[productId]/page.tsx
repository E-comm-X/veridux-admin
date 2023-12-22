"use client"
import React from "react";
import ButtonUI from "@/components/ButtonUI";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import ProductVendorData from "./ProductVendorData";
import ProductsData from "./ProductsData"
export default function ProductDetails() {
  return (
    <div>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">All Products</h2>
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
      <div className="flex lg:flex-row gap-4 items-center">
        <Link href="/vendors">
          <div className="mr-4">
            <p className="font-semibold text-xl">Products</p>
            <hr className="rounded-md w-ful  border-2" />
          </div>
        </Link>

        <div className="mr-4">
          <p className="font-semibold text-xl">Products Information</p>
          <hr className="rounded-md w-ful border-[#006FCF] border-2" />
        </div>
      </div>
      <div className="parent bg-white rounded-lg py-10 px-8 mt-6">
        <ProductsData />
        <hr />
        <ProductVendorData />
      </div>
    </div>
  );
}
