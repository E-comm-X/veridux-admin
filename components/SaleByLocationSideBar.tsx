import React from "react"
import { locationData } from "@/data/locationData"
import Image from "next/image"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { Avatar, Empty } from "antd"
export default function SaleByLocationSideBar() {
  function bg(sign: number) {
    return sign > 0
      ? "bg-[#E7F4EE] rounded-full py-2 px-4"
      : sign < 0
      ? "bg-[#FEEDEC] rounded-full py-2 px-4 "
      : sign === 0
      ? "#F0F1F3 rounded-full py-2 px-4"
      : ""
  }

  function text(sign: number) {
    return sign > 0
      ? "text-[#0D894F] font-medium font-xs"
      : sign < 0
      ? "text-[#F04438] font-xs font-medium "
      : sign === 0
      ? "text-[#667085] font-xs font-medium"
      : ""
  }

  return (
    <div className="text-black w-full h-full  bg-white p-6  border-[1px] rounded-lg">
      <div className="flex bg-white mb-2">
        <div>
          <h3 className="font-medium text-lg ">Sales by Location</h3>
          <p className=" text-sm text-[#667085]">
            Sales performance by location
          </p>
        </div>
        <div className="ml-auto cursor-pointer">
          <MoreVertIcon />
        </div>
      </div>
      <Empty />
      {/* Sales by location list */}
    </div>
  )
}

//  ;<div className="flex gap-4 flex-col ">
//    {locationData.map((item) => (
//      <div key={item.id} className="flex gap-4 items-center">
//        <div className="imageContainer">
//          <Avatar
//            src={"item.image"}
//            alt=""
//            size={"large"}
//            className="rounded-[7px]"
//          />
//          {/* <Image src={item.image} width={37} height={37} alt="" /> */}
//        </div>
//        <div className="textContainer flex flex-col">
//          <h4 className="font-medium text-sm">{item.city}</h4>
//          <p className="font-normal text-xs text-[#667085]">
//            {item.noOfSales} Sales
//          </p>
//        </div>
//        <div className="amountContainer flex items-center  ml-auto gap-4">
//          <h4 className="font-medium text-sm">${item.amount}</h4>
//          <div className={bg(item.percentage)}>
//            <p className={text(item.percentage)}>{item.percentage} %</p>
//          </div>
//        </div>
//      </div>
//    ))}
//  </div>
