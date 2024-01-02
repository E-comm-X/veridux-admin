import Image from "next/image"
import PauseIcon from "@mui/icons-material/Pause"
import MessageIcon from "@mui/icons-material/Message"
import CallIcon from "@mui/icons-material/Call"

function shippingStatus(status: any) {
  return status === "incoming"
    ? "bg-[#FF9900] border-[1px] border-[#8C5400] px-4  py-2 text-white rounded text-center"
    : status === "Shipped"
    ? "bg-[#3EC2003B] border-[1px] border-[#3EC2006E] px-4 py-2 text-[#3EC2006E] rounded text-center"
    : status === "Cancelled"
    ? "bg-[#C200003B] border-[1px] border-[#C200006E] px-4  py-2 text-[#C200006E] rounded text-center"
    : null
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

export default function DeliverySummary({
  departure,
  arrival,
  customerName,
  weight,
  price,
  status,
  image,
  productName,
  shippingAddress,
  vendorName,
  vendorImage,
}: any) {
  return (
    <div className="bg-white rounded-lg border-[2px] border-[#00000014] p-6 md:basis-[31%] basis-full ">
      <div className="flex top ">
        <div className="top-right bais-[80%] flex flex-col">
          <div className="top-right-top flex items-center gap-4">
            <div className="top-right-right w-[14px] h-[14px] border-2 border-[#006FCF] rounded  "></div>
            <div className="top-right-left">
              <p className="text-[#00000066] text-sm font-normal">
                Departure Date
              </p>
              <h5 className="text-base font-normal">{departure}</h5>
            </div>
          </div>
          <div className="top-right-bottom flex items-center gap-4 mt-4 ">
            <div className="top-right-right w-[14px] h-[14px] border-2 bg-[#006FCF] rounded"></div>
            <div className="top-right-left">
              <p className="text-[#00000066] text-sm font-normal">
                Arrival Date
              </p>
              <h5 className="text-base font-normal">{arrival}</h5>
            </div>
          </div>
        </div>
        <div className="top-left basis-[20%] ml-auto h-[40px]">
          <button className={shippingStatus(status) as any}>{status}</button>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex gap-4">
        <div className="flex flex-col">
          <h2 className="font-bold text-base">Customer</h2>
          <p className="font-normal text-sm text-[#00000078]">{customerName}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-base">Total Weight</h2>
          <p className="font-normal text-sm text-[#00000078]">{weight}lb</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-base">Total Price</h2>
          <p className="font-normal text-sm text-[#00000078]">${price}</p>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex">
        <div className="imageContainer rounded w-[47px] h-[47px] relative">
          <Image alt="image" src={image} fill={true} className="absolute" />
        </div>
        <div className="ml-auto">
          <h4 className="font-semibold text-base">Name of Product</h4>
          <p className="font-semibold text-sm text-[#0000006E]">
            {productName}
          </p>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex">
        <div>
          <h4 className="font-semibold text-base">Shipping Address</h4>
          <p className="font-semibold text-sm text-[#0000006E]">
            {shippingAddress}
          </p>
        </div>
        <p className="font-semibold text-sm text-[#0000006E] ml-auto">
          {shippingAddress}
        </p>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex justify-evenly">
        <div className="imageContainer rounded w-[47px] h-[47px] relative">
          <Image
            alt="image"
            src={vendorImage}
            fill={true}
            className="absolute"
          />
        </div>
        <div>
          <h5 className="text-base font-semibold">{vendorName}</h5>
          <h5 className="text-base font-semibold text-[#292D3278] ">Vendor</h5>
        </div>
        <div className="flex gap-2 items-center  ">
          <div className="bg-[#006FCF40] h-[37px] w-[37px] rounded-lg flex items-center justify-center">
            <PauseIcon style={{ fill: "#006FCF" }} />
          </div>
          <div className="bg-[#006FCF40] h-[37px] w-[37px] rounded-lg flex items-center justify-center">
            <MessageIcon style={{ fill: "#006FCF" }} />
          </div>
          <div className="bg-[#006FCF40] h-[37px] w-[37px] rounded-lg flex items-center justify-center">
            <CallIcon style={{ fill: "#006FCF" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
