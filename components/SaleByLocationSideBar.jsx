import React from 'react'
import {locationData} from "@/data/locationData"
import Image from 'next/image'
import MoreVertIcon from "@mui/icons-material/MoreVert"
export default function SaleByLocationSideBar() {
    function bg(sign) {
        return sign >  0 ? "bg-[#E7F4EE] rounded-full py-2 px-4"
          : sign < 0 ? "bg-[#FEEDEC] rounded-full py-2 px-4 "
          : sign === 0  ? "#F0F1F3 rounded-full py-2 px-4"
          : value4;
      }
      
      function text(sign) {
        return sign >  0 ? "text-[#0D894F] font-medium font-xs"
        : sign < 0 ? "text-[#F04438] font-xs font-medium "
        : sign === 0  ? "text-[#667085] font-xs font-medium"
        : value4;
      }
    

  return (
    <div  className='text-black lg:w-[357px]  bg-white p-6  border-2 rounded-lg border-[#00000026]'>
        <div className='flex bg-white mb-2'>
            <div>
                <h3  className="font-medium text-lg ">Sales by Location</h3>
                <p className=" text-sm text-[#667085]">Sales performance by location</p>
            </div>
            <div className='ml-auto cursor-pointer'>
                <MoreVertIcon/>
            </div> 
        </div>
        <div className="flex gap-4 flex-col ">
        {
            locationData.map((item)=>(
                <div key={item.id} className="flex gap-4 items-center">
                <div className="imageContainer">
                    <Image src={item.image} className="w-9 h-9"  />
                </div>
                <div className="textContainer flex flex-col">
                    <h4 className='font-medium text-sm'>{item.city}</h4>
                    <p className='font-normal text-xs text-[#667085]'>{item.noOfSales} Sales</p>
                </div>
                <div className="amountContainer flex items-center  ml-auto gap-4">
                    <h4 className='font-medium text-sm'>${item.amount}</h4>
                    <div className={bg(item.percentage)}>
                        <p className={text(item.percentage)}>{item.percentage} %</p>
                    </div>
                </div>
            </div>
            ))
        }
       
        </div>
      


    </div>
  )
}
