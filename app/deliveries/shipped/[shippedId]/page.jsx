import Image from "next/image"
import React from "react"
import MessageIcon from "@mui/icons-material/Message"
import CallIcon from "@mui/icons-material/Call"
import GpsFixedIcon from "@mui/icons-material/GpsFixed"
import LocationOnIcon from "@mui/icons-material/LocationOn"

export default function FailedDelivires() {
  return (
    <main>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Delivery</h2>
          <p className="font-normal text-base text-[#0000006E]">
            Order details
          </p>
        </div>
      </div>
      <hr className="h-px mt-4 mb-8  bg-gray-200 border-0 " />
      {/* body */}
      <div className="parent flex flex-col gap-8">
        <div className="container flex-col md:flex-row flex gap-4">
          {/* right side */}
          <div className="right md:basis-[50%] border-[#0000005E] border-[1px] rounded-lg  bg-white p-6">
            <h4 className="font-bold text-2xl">Shipment/Order Tracker</h4>
            <p className="font-normal text-base text-[#00000042]">
              Track shipment/Order using tracking ID
            </p>
            <div className="inside-right mx-6 my-4 p-4 border-[#0000005E] border-[1px] rounded-lg  bg-white ">
              <h4 className="font-bold text-2xl">Order Number</h4>
              <p className="font-normal text-lg text-[#00000042]">
                KLM234589928
              </p>
              <div className="flex justify-between px-2 py-4 border-[#0000005E] border-2 rounded-lg mt-4">
                <LocationOnIcon style={{ fill: "#00000042" }} />
                <p className="font-normal text-lg text-[#00000042] ">
                  Gon salu - street avenue one
                </p>
              </div>
              <div className="buttonContainer flex mt-4 gap-4 items-center justify-between">
                <button className="text-center px-5 font-semibold text-lg py-2 border-[#EA2020] rounded-lg border-[1px] bg-white text-[#EA2020]">
                  Cancel
                </button>
                <button className="text-center px-5 bg-[#006FCF40] font-semibold text-lg py-2 border-[#006FCF] rounded-lg border-[1px] bg-white text-[#006FCF]">
                  Pause
                </button>
              </div>
            </div>
          </div>
          {/* left side */}
          <div className="left md:basis-[50%]">
            <div className="1 flex justify-between mb-4">
              <h4 className="font-semibold text-lg">
                Order Number:<span className="font-normal"> KLM234589928</span>
              </h4>
              <button className="bg-[#3EC2003B] border-[1px] border-[#3EC2006E] px-4 py-2 text-[#3EC2006E] rounded text-center">
                Shiped
              </button>
            </div>
            {/* rider details */}
            <div className="2 rounded-lg border-[1px] border-[#0000004A] bg-white p-4 ">
              <h4 className="font-semibold text-lg">Rider Details</h4>
              <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
              <div className="flex justify-between items-center">
                <div className="imageTextContainer flex gap-4">
                  <Image
                    src="/veridux-logo.svg"
                    width={40}
                    height={40}
                    className="rounded-lg "
                    alt=""
                  />
                  <h5 className="font-bold text-base">Robert Stockwind</h5>
                </div>
                <div className="iconContainer flex gap-4 ">
                  <div className="rounded-lg bg-[#006FCF40] text-[#006FCF] flex items-center justify-center p-4">
                    <CallIcon style={{ fill: "#006FCF" }} />
                  </div>
                  <div className="rounded-lg bg-[#006FCF40] text-[#006FCF] flex items-center justify-center p-4">
                    <MessageIcon style={{ fill: "#006FCF" }} />
                  </div>
                  <div className=" font-bold text-base rounded-lg bg-[#006FCF40] text-[#006FCF] flex items-center justify-center p-4">
                    Track Driver
                  </div>
                </div>
              </div>
            </div>
            {/* Item Details */}
            <div className="3 mt-4 rounded-lg border-[1px] border-[#0000004A] bg-white p-4 ">
              <h4 className="font-semibold text-lg">Item Details</h4>
              <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
              <div className="container flex justify-between">
                <div className="ImageContainer">
                  <Image
                    src="/veridux-logo.svg"
                    width={121}
                    height={121}
                    alt=""
                  />
                </div>
                <div className="textContainer flex flex-col gap-4">
                  <h5 className="font-semibold text-lg">Name of Product</h5>
                  <h6 className="font-semibold text-lg text-[#0000006E]">
                    Fashion/Makeup
                  </h6>
                </div>
              </div>
              <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
              <div className="customerDetails flex justify-between">
                <div className="text-center">
                  <h4 className="font-bold text-lg">Customer</h4>
                  <p className="font-normal text-sm text-[#00000078]">
                    Shodeke Angel
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg">Total Weight</h4>
                  <p className="font-normal text-sm text-[#00000078]">1.0lb</p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg">Total Price</h4>
                  <p className="font-normal text-sm text-[#00000078]">$1200</p>
                </div>
              </div>
              <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-[50%] "></div>
          <div className="4 md:basis-[50%] basis-full  mt-4 rounded-lg border-[1px] border-[#0000004A] bg-white p-4">
            <div className="flex justify-between ">
              <h4 className="font-semibold text-lg">Item Details</h4>
              <div className="orderState flex gap-2 p-3 rounded-lg font-semibold bg-[#006FCF40] text-[#006FCF]">
                <GpsFixedIcon style={{ fill: "#006FCF" }} />
                <p>Order State</p>
              </div>
            </div>
            <div className="map">map</div>
          </div>
        </div>
      </div>
    </main>
  )
}
