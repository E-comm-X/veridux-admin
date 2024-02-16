import { WalletI } from "@/interfaces/Wallet"
import { Wallet } from "@mui/icons-material"
import moment from "moment"
import React from "react"

export const WalletMetaData = ({ data }: { data: WalletI }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg block  bg-white px-2 py-4 pr-4 text-black border-[1px] border-[#00000026] hover:border-primary hover:shadow-md">
          <div className="flex gap-4">
            <div className="rounded-md bg-[#006FCF21] h-15 w-15 self-start flex align-center justify-center p-2">
              <Wallet style={{ fill: "#006FCF" }} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg capitalize">Wallet Balance</h3>
              {/* <p className="text-xs font-normal text-[#0000005C]">{date}</p> */}
              <h4 className="text-xl font-semibold ">
                {Intl.NumberFormat("en-US", {
                  currency: "NGN",
                  style: "currency",
                }).format(data?.balance as number)}
              </h4>
            </div>
          </div>
          <p className="text-[#0000005c] flex justify-between px-3 mt-3">
            <span className="text-[#36CF00]">{1.7}%</span>{" "}
            <span>{moment(data?.updatedAt).fromNow()}</span>
          </p>
        </div>

        <div className="rounded-lg block  bg-white px-2 py-4 pr-4 text-black border-[1px] border-[#00000026] hover:border-primary hover:shadow-md">
          <div className="flex gap-4">
            <div className="rounded-md bg-[#006FCF21] h-15 w-15 self-start flex align-center justify-center p-2">
              <Wallet style={{ fill: "#006FCF" }} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg capitalize">
                Total Pending Credit Balance
              </h3>
              {/* <p className="text-xs font-normal text-[#0000005C]">{date}</p> */}
              <h4 className="text-xl font-semibold ">
                {Intl.NumberFormat("en-US", {
                  currency: "NGN",
                  style: "currency",
                }).format(data?.pending_credit as number)}
              </h4>
            </div>
          </div>
          <p className="text-[#0000005c] flex justify-between px-3 mt-3">
            <span className="text-[#36CF00]">{1.7}%</span>{" "}
            <span>{moment(data?.updatedAt).fromNow()}</span>
          </p>
        </div>

        <div className="rounded-lg block  bg-white px-2 py-4 pr-4 text-black border-[1px] border-[#00000026] hover:border-primary hover:shadow-md">
          <div className="flex gap-4">
            <div className="rounded-md bg-[#006FCF21] h-15 w-15 self-start flex align-center justify-center p-2">
              <Wallet style={{ fill: "#006FCF" }} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg capitalize">
                Total Pending Debit Balance
              </h3>
              {/* <p className="text-xs font-normal text-[#0000005C]">{date}</p> */}
              <h4 className="text-xl font-semibold ">
                {Intl.NumberFormat("en-US", {
                  currency: "NGN",
                  style: "currency",
                }).format(data?.pending_debit as number)}
              </h4>
            </div>
          </div>
          <p className="text-[#0000005c] flex justify-between px-3 mt-3">
            <span className="text-[#36CF00]">{1.7}%</span>{" "}
            <span>{moment(data?.updatedAt).fromNow()}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
