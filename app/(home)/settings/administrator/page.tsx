import React from 'react'
import ButtonUI from "@/components/ButtonUI";
import Link from "next/link";
import AdmistratorTable from "./AdmistratorTable"

export default function page() {
  return (
    <main>
    <div className="flex items-center">
       <div className="flex flex-col">
         <h2 className="text-2xl text-black font-bold">Administrator</h2>
         <p className="font-normal text-base text-[#0000006E]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam corrupti adipisci!</p>
       </div>
       <div className="mt-2 ml-auto flex items-center gap-4">
          <div className="ml-auto">
            <button className='flex align-center justify-center text-center text-[#006FCF] bg-[#006FCF40] font-semibold  rounded px-4 py-2 '>Cancel</button>
          </div>
          <div className="ml-auto">
            <ButtonUI text="Save">
          
            </ButtonUI>
          </div>
        </div>
     </div>
     <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
     <div className="flex gap-4 flex-col md:flex-row bg-white items-center p-2 rounded ">
       <Link href='/setting' className="font-semibold text-sm  " >General</Link>
       <Link href='/settings/administrator' className="font-semibold text-sm underline decoration-[#006FCF]">User Management</Link>
       <Link href='/settings/security' className="font-semibold text-sm">Security & Compliance</Link>
       <Link href='/settings/fintech-service' className="font-semibold text-sm">Fintech Services</Link>
       <Link href='/settings/support' className="font-semibold text-sm">Support</Link>
       <Link href="/settings/user-group" className="font-semibold text-sm">User Groups</Link>
     </div>
     <hr className="h-px bg-gray-200 border-0 mt-8 mb-16 " />

     <AdmistratorTable />

     </main>
  )
}
