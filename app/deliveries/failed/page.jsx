import React from "react";
import ButtonUI from "@/components/ButtonUI";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Link from "next/link";
import { deliveriesData } from "@/data/delivriesData";

import DeliverySummary from "../DeliverySummary";

export default function Page() {
  return (
    <main>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Delivery</h2>
          <p className="font-normal text-base text-[#0000006E]">Delivery</p>
        </div>
        <div className="ml-auto flex gap-4">
          <div>
            <ButtonUI text="Export">
              <FileDownloadIcon />
            </ButtonUI>
          </div>

          <ButtonUI text="Filter by date">
            <FilterAltIcon />
          </ButtonUI>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex lg:flex-row gap-4 items-center mb-8">
        <Link href="/deliveries">
          <div className="mr-4">
            <p className="font-semibold text-xl">Incoming orders</p>
            <hr className="rounded-md w-ful  border-2 " />
          </div>
        </Link>
        <Link href="/deliveries/shipped">
          <div className="mr-4">
            <p className="font-semibold text-xl">Shipped</p>
            <hr className="rounded-md w-ful border-2" />
          </div>
        </Link>
        <Link href="/deliveries/failed">
          <div className="mr-4">
            <p className="font-semibold text-xl">Cancelled</p>
            <hr className="rounded-md w-ful  border-2  border-[#006FCF]" />
          </div>
        </Link>

        <div className="mr-4">
          <p className="font-semibold text-xl">Action required</p>
          <hr className="rounded-md w-ful border-2 " />
        </div>
      </div>
      <div className="flex gap-8 flex-wrap">
        {deliveriesData
          .filter((data) => data.status === "Cancelled")
          .map((filterData) => (
            <DeliverySummary
              departure={filterData.departure}
              arrival={filterData.arrival}
              customerName={filterData.customerName}
              weight={filterData.weight}
              price={filterData.price}
              status={filterData.status}
              productName={filterData.productName}
              shippingAddress={filterData.shippingAddress}
              vendorName={filterData.vendorName}
              vendorImage={filterData.vendorImage}
            />
          ))}
        <div className="text-center">
          <button className="bg-white  text-black text-base  font-semibold self-center px-4 py-6 border-[#0000002B] rounded-lg border-2">
            Load More
          </button>
        </div>
      </div>
    </main>
  );
}
