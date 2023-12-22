import React from "react"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Image from "next/image"

export default function VendorDocuments() {
  return (
    <div>
      <h3 className="text-base font-semibold md:basis-[20%] basis-full ">
        {" "}
        Documents
      </h3>
      <div className="parent md:basis[80%] flex flex-col md:flex-row gap-4 md:ml-40 mt-5 justify-between ">
        <div className="border-[0.75px] rounded border-[#00000038]  flex p-2 flex-col ">
          <div className="ml-auto cursor-pointer">
            <MoreVertIcon />
          </div>
          <div className="flex items-center flex-col  justify-items-center p-4">
            <Image alt="" src="/veridux-logo.svg" width={93} height={93} />
            <h3 className="font-semibold text-xs">CAC DOC ONE.PDF</h3>
          </div>
        </div>
        <div className="border-[0.75px] rounded border-[#00000038]  flex p-2 flex-col ">
          <div className="ml-auto cursor-pointer">
            <MoreVertIcon />
          </div>
          <div className="flex items-center flex-col  justify-items-center p-4">
            <Image alt="" src="/veridux-logo.svg" width={93} height={93} />
            <h3 className="font-semibold text-xs">CAC DOC ONE.PDF</h3>
          </div>
        </div>
        <div className="border-[0.75px] rounded border-[#00000038]  flex p-2 flex-col ">
          <div className="ml-auto cursor-pointer">
            <MoreVertIcon />
          </div>
          <div className="flex items-center flex-col  justify-items-center p-4">
            <Image alt="" src="/veridux-logo.svg" width={93} height={93} />
            <h3 className="font-semibold text-xs">CAC DOC ONE.PDF</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
