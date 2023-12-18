import React from 'react'
import {locationData} from "@/data/locationData"
import Image from 'next/image'
import MoreVertIcon from "@mui/icons-material/MoreVert"
export default function SaleByLocationSideBar() {
  return (
    <div  className='text-black'>
        <div className='flex bg-white border-2 rounded-lg border-[#00000026]'>
            <div>
                <h3  className="font-medium text-lg ">Sales by Location</h3>
                <p className=" text-sm text-[#667085]">Sales performance by location</p>
            </div>
            <div>
                <MoreVerticon/>
            </div> 
        </div>
        {
            locationData.map((item)=>(
                <div key={item.id}>
                <div className="imageContainer">
                    <Image src={item.image} className="w-9 h-9"  />
                </div>
                <div className="textContainer">
                    <h4>{item.city}</h4>
                    <p>{item.noOfSales} Sales</p>
                </div>
                <div className="amountContainer">
                    <h4>${item.amount}</h4>
                    <div className="percentage">
                        <p>{item.percentage} %</p>
                    </div>
                </div>
            </div>
            ))
        }
       


    </div>
  )
}
