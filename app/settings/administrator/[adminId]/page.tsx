import React from "react";
import ButtonUI from "@/components/ButtonUI";
import Link from "next/link";
import Image from "next/image";

export default function adminDetails() {
  return (
    <main>
      <div className="flex items-center gap-4 mt-4">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Administrator</h2>
          <p className="font-normal text-base text-[#0000006E]">
            The Permission Handler is exclusive to SuperAdmins, ensuring that
            high-level control remains in trusted hands
          </p>
        </div>
        <div className="mt-2 ml-auto flex items-center gap-4 mt-4 gap-4">
          <div className="ml-auto">
            <button className="flex align-center justify-center text-center text-[#006FCF] bg-[#006FCF40] font-semibold  rounded px-4 py-2 ">
              Cancel
            </button>
          </div>
          <div className="ml-auto">
            <ButtonUI text="Save"></ButtonUI>
          </div>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex gap-4 flex-col md:flex-row bg-white items-center gap-4 mt-4 p-2 rounded ">
        <Link href="/setting" className="font-semibold text-sm  ">
          General
        </Link>
        <Link
          href="/setting/administrator"
          className="font-semibold text-sm underline decoration-[#006FCF]"
        >
          User Management
        </Link>
        <Link href="/setting/security" className="font-semibold text-sm">
          Security & Compliance
        </Link>
        <Link href="/setting/fintech-services" className="font-semibold text-sm">
          Fintech Services
        </Link>
        <Link href="/setting/support" className="font-semibold text-sm">
          Support
        </Link>
        <Link href="/settings/user-group" className="font-semibold text-sm">
          User Groups
        </Link>
      </div>
      <hr className="h-px bg-gray-200 border-0 mt-8 mb-16 " />
      <h2 className="text-2xl text-black  font-bold">Administrator Details</h2>
      <div className="flex gap-8  flex-col md:flex-row mt-4 ">
        <div className="right self-start basis-full md:basis-[50%] bg-white  border-[1px] rounded-lg px-4 py-8  border-[#0000004F] ">
          <div className="flex  gap-8 ">
            <div className="imageContainer border-[1px] rounded-lg w-[156px] h-[156px] relative  ">
              <Image className="absolute" fill={true} src="/veridux-logo.svg"/>
            </div>
            <div className="detailsContainer">
              <h5 className="font-semibold text-xl">Linda brate</h5>
              <p className=" font-normal text-lg text-[#0000007D]">
                Lindabrate@mail.com
              </p>
              <p className=" font-normal text-lg text-[#0000007D]">
                +234 -345-5343-23
              </p>
            </div>
          </div>
          <p className="font-normal text-lg mt-2">Super Admin</p>
          <p className=" font-normal text-base text-[#0000007D]">
            [This information we visible to you only]
          </p>
        </div>
        <div className="left basis-full md:basis-[50%] bg-white  border-[1px] rounded-lg px-4 py-8  border-[#0000004F] ">
          <h3 className="text-[19.82px] font-bold">Managing permission</h3>
          <hr className="h-px bg-gray-200 border-0 mt-8 mb-8 " />
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Remove a privilege</h4>
              <p className="text-[14.53px] font-semibold">Add a new privilege</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Update Privilege</h4>
              <p className="text-[14.53px] font-semibold">Modify an existing privilege</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Update Permitted Groups for Privilege</h4>
              <p className="text-[14.53px] font-semibold">Adjust permitted groups for a privilege</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Delete Privilege</h4>
              <p className="text-[14.53px] font-semibold">Remove a privilege</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Get All Privileges</h4>
              <p className="text-[14.53px] font-semibold">Retrieve a list of all privileges</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Get Privilege Data</h4>
              <p className="text-[14.53px] font-semibold">Access detailed information about a privilege</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Add Permission Group</h4>
              <p className="text-[14.53px] font-semibold">Create a new permission group</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Add Permission Group</h4>
              <p className="text-[14.53px] font-semibold">Create a new permission group</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Add Permission Group</h4>
              <p className="text-[14.53px] font-semibold">Create a new permission group</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Add Permission Group</h4>
              <p className="text-[14.53px] font-semibold">Create a new permission group</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="texts">
              <h4 className="text-[19.82px] font-bold">Add Permission Group</h4>
              <p className="text-[14.53px] font-semibold">Create a new permission group</p>
            </div>
            <div className="checkbox rounded-lg bg-[#006FCF40] w-[43px] h-[43px] ">
              <input type="checkbox" name="" id="" className="bg-[#006FCF40] w-[43px] h-[43px] rounded-lg" />
            </div>
          </div>




        </div>
      </div>
    </main>
  );
}
