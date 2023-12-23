"use client";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";

export default function page() {
  return (
    <div className="page flex flex-col">
      <h2 className="text-2xl text-black font-bold">Manage Existing Permission Groups</h2>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="self-end">
        <Link href="/settings/user-group/create-usergroup">
          {" "}
          <button className="bg-[#006FCF] text-white text-center py-2 px-4 rounded-lg   ">
          Create Permission Group
          </button>
        </Link>
      </div>
      <div className="container gap-4 flex-wrap flex mt-4 ">
        <div className="single bg-white border-2 rounded-lg p-4 flex flex-col gap-4">
          <h3 className="font-semibold">Standard Users</h3>
          <p className="text-[#0000009E]">
            The primary user group responsible for managing the application.
          </p>
          <div className="flex justify-between items-center">
            <div className="userImageContainer items-center  flex gap-2 ">
              <div className="z-40 w-10 h-10 rounded-full relative flex items-center justify-center ...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-30 w-10 h-10 relative flex items-center justify-center...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-20 w-10 h-10  relative flex items-center justify-center ...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover "
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-10 w-10 h-10 relative   flex items-center justify-center...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-40 bg-[#FFECE5] rounded-full w-fit h-10 flex items-center justify-center ...">
                <div className="flex"><AddIcon /><p className="font-semibold">10</p></div>
              </div>
            </div>
            <div className="cursor-pointer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div className="single bg-white border-2 rounded-lg p-4 flex flex-col gap-4">
          <h3 className="font-semibold">Editors</h3>
          <p className="text-[#0000009E]">
            The primary user group responsible for managing the application.
          </p>
          <div className="flex justify-between items-center">
            <div className="userImageContainer items-center  flex gap-2 ">
              <div className="z-40 w-10 h-10 rounded-full relative flex items-center justify-center ...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-30 w-10 h-10 relative flex items-center justify-center...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-20 w-10 h-10  relative flex items-center justify-center ...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover "
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-10 w-10 h-10 relative   flex items-center justify-center...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-40 bg-[#FFECE5] rounded-full w-fit h-10 flex items-center justify-center ...">
                <div className="flex"><AddIcon /><p className="font-semibold">10</p></div>
              </div>
            </div>
            <div className="cursor-pointer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div className="single bg-white border-2 rounded-lg p-4 flex flex-col gap-4">
          <h3 className="font-semibold">Administrators</h3>
          <p className="text-[#0000009E]">
            The primary user group responsible for managing the application.
          </p>
          <div className="flex justify-between items-center">
            <div className="userImageContainer items-center  flex gap-2 ">
              <div className="z-40 w-10 h-10 rounded-full relative flex items-center justify-center ...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-30 w-10 h-10 relative flex items-center justify-center...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-20 w-10 h-10  relative flex items-center justify-center ...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover "
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-10 w-10 h-10 relative   flex items-center justify-center...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-40 bg-[#FFECE5] rounded-full w-fit h-10 flex items-center justify-center ...">
                <div className="flex"><AddIcon /><p className="font-semibold">10</p></div>
              </div>
            </div>
            <div className="cursor-pointer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div className="single bg-white border-2 rounded-lg p-4 flex flex-col gap-4">
          <h3 className="font-semibold">Custom Group 1</h3>
          <p className="text-[#0000009E]">(Custom)</p>
          <p className="text-[#0000009E]">
            The primary user group responsible for managing the application.
          </p>
          <div className="flex justify-between items-center">
            <div className="userImageContainer items-center  flex gap-2 ">
              <div className="z-40 w-10 h-10 rounded-full relative flex items-center justify-center ...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-30 w-10 h-10 relative flex items-center justify-center...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-20 w-10 h-10  relative flex items-center justify-center ...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover "
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-10 w-10 h-10 relative   flex items-center justify-center...">
                <Image
                  fill={true}
                  className="absolute rounded-full object-cover"
                  src="/20944201.jpg"
                  alt="userImage"
                />
              </div>
              <div className="z-40 bg-[#FFECE5] rounded-full w-fit h-10 flex items-center justify-center ...">
                <div className="flex"><AddIcon /><p className="font-semibold">10</p></div>
              </div>
            </div>
            <div className="cursor-pointer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}


