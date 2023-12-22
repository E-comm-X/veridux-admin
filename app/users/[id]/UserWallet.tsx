import React from "react";

export default function UserWallet() {
  return (
    <div className="rounded-lg border-2 border-[#00000061] p-4 mb-4 flex flex-col  gap-3 ">
      <h3 className="text-base font-semibold  basis-full ">User Wallet</h3>
      <div className="wrappeer flex flex-col lg:flex-row gap-4">
        <div className="flex justify-between gap-4 basis-[75%]">
          <div className="border-[#0000002B] rounded border-[1px] py-2 pl-2 pr-8 ">
            <h3 className="font-medium text-base mb-2 ">Total deposit</h3>
            <p className="text-[#000000A6] font-bold mb-2">$3000</p>
          </div>
          <div className="border-[#0000002B] rounded border-[1px] py-2 pl-2 pr-8 ">
            <h3 className="font-medium text-base mb-2 ">Total Withdrawal</h3>
            <p className="text-[#000000A6] font-bold mb-2">-$3000</p>
          </div>
          <div className="border-[#0000002B] rounded border-[1px] py-2 pl-2 pr-8 ">
            <h3 className="font-medium text-base mb-2 ">Wallet Balance</h3>
            <p className="text-[#000000A6] font-bold mb-2">$3000</p>
          </div>
        </div>
        <div class=" inline-block   w-0.5 self-stretch bg-[#D9D9D9] "></div>
        <div className="lockWallet basis-[20%] self-center  flex flex-col gap-2">
            <h2 className="font-bold text-lg self-center ">Lock Wallet</h2>
            <div className="bg-[#000000] rounded-full w-[50px] h-[24px] self-center relative">
                <div className="absolute bg-white rounded-full w-[24px] h-[24px] w-full"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
