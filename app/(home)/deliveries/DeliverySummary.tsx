import Image from "next/image"
import PauseIcon from "@mui/icons-material/Pause"
import MessageIcon from "@mui/icons-material/Message"
import CallIcon from "@mui/icons-material/Call"
import { ShipmentI } from "@/interfaces/shipment"
import moment from "moment"
import { Phone } from "@mui/icons-material"
import { MutateDelivery } from "./MutateDelivery"
import { Divider } from "antd"

function shippingStatus(status: any) {
  return status === "draft"
    ? "bg-[#FF9900] border-[1px] border-[#8C5400] px-4  py-2 text-white rounded text-center"
    : status === "picked_up"
    ? "bg-[#3EC2003B] border-[1px] border-[#3EC2006E] px-4 py-2 text-[#0008] rounded text-center"
    : status === "booked"
    ? "bg-primary border-[1px] border-primary px-4  py-2 text-white rounded text-center"
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

export default function DeliverySummary({ ...shipment }: ShipmentI) {
  return (
    <div className="bg-white rounded-lg border-[2px] border-[#00000014] p-6 w-full min-h-[535px]">
      <div className="flex top ">
        <div className="top-right bais-[80%] flex flex-col">
          <div className="top-right-top flex items-center gap-4">
            <div className="top-right-right w-[14px] h-[14px] border-2 border-[#006FCF] rounded  "></div>
            <div className="top-right-left">
              <p className="text-[#00000066] text-sm font-normal">
                Departure Date
              </p>
              <h5 className="text-base font-normal">
                {moment(shipment.createdAt).format("LL")}
              </h5>
            </div>
          </div>
          <div className="top-right-bottom flex items-center gap-4 mt-4 ">
            <div className="top-right-right w-[14px] h-[14px] border-2 bg-[#006FCF] rounded"></div>
            <div className="top-right-left">
              <p className="text-[#00000066] text-sm font-normal">
                Arrival Date
              </p>
              <h5 className="text-base font-normal">
                {moment(shipment.pickup_date).format("LL")}
              </h5>
            </div>
          </div>
        </div>
        <div className="top-left basis-[20%] ml-auto h-[40px]">
          <button className={shippingStatus(shipment.status) as string}>
            {shipment.status}
          </button>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex gap-4">
        <div className="flex flex-col">
          <h2 className="font-bold text-base">Customer</h2>
          <p className="font-normal text-sm text-[#00000078]">
            {shipment.receivers_info?.name || "N/A"}
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold text-base">Shipping Cost</h2>
          <p className="font-normal text-sm text-[#00000078]">
            {Intl.NumberFormat("en-NG", {
              currency: "NGN",
              style: "currency",
            }).format(shipment.incurred_cost)}
          </p>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      {/* <div className="flex">
        <div className="imageContainer rounded w-[47px] h-[47px] relative">
          <Image alt="image" src={image} fill={true} className="absolute" />
        </div>
        <div className="ml-auto">
          <h4 className="font-semibold text-base">Name of Product</h4>
          <p className="font-semibold text-sm text-[#0000006E]">
            {productName}
          </p>
        </div>
      </div> */}
      {/* <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " /> */}
      <div className="flex">
        <div>
          <h4 className="font-semibold text-base">Shipping Address</h4>
          <p className="font-semibold text-sm text-[#0000006E]">
            {shipment.dropoff_location.name}
          </p>

          <p className="font-semibold text-sm text-[#0000006E] mt-1">
            <span>
              <Phone className="text-[16px]" />
            </span>{" "}
            {shipment.receivers_info.phone}
          </p>
        </div>
        <p className="font-semibold text-sm text-[#0000006E] ml-auto">
          {shipment.dropoff_location.country}
        </p>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex">
        <div>
          <h4 className="font-semibold text-base">Pickup Address</h4>
          <p className="font-semibold text-sm text-[#0000006E]">
            {shipment.pickup_location.name}
          </p>
          <p className="font-semibold text-sm text-[#0000006E] mt-1">
            <span>
              <Phone className="text-[16px]" />
            </span>{" "}
            {shipment.pickup_location.phone}
          </p>
        </div>
        <p className="font-semibold text-sm text-[#0000006E] ml-auto">
          {shipment.pickup_location.country}
        </p>
      </div>
      {/* <div className="flex justify-evenly">
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
      </div> */}
      <Divider />
      <MutateDelivery record={shipment} />
    </div>
  )
}
