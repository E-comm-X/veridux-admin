import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import { AddIcon } from "@mui/icons-material";

export default function AllUsersGroup() {
  return (
    <main className="p-2">
      <h2 className="text-2xl text-black font-bold">User Group</h2>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="">
        <Link href='/settings/user-group/create-usergroup'>
          <button className="bg-[#006FCF] text-white text-center py-2 p2-4 ">
            Create User Group
          </button>
        </Link>
      </div>
      <div className="container  flex">
        <div className="single border-2 rounded-lg p-4">
          <h3 className="font-semibold">Admin Group</h3>
          <p className="text-[#0000009E]">
            The primary user group responsible for managing the application.
          </p>
          <div className="flex justify-between">
            <div className="userImageContainer">
              <div class="z-40 ...">05</div>
              <div class="z-30 ...">04</div>
              <div class="z-20 ...">03</div>
              <div class="z-10 ...">02</div>
              <div class="z-40 rounded-full w-20 h-20 flex items-center justify-center ...">
                <AddIcon />
              </div>
            </div>
            <div className="cursor-pointer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div className="single border-2 rounded-lg p-4">
          <h3 className="font-semibold">Admin Group</h3>
          <p className="text-[#0000009E]">
            The primary user group responsible for managing the application.
          </p>
          <div className="flex justify-between">
            <div className="userImageContainer">
              <div class="z-40 ...">05</div>
              <div class="z-30 ...">04</div>
              <div class="z-20 ...">03</div>
              <div class="z-10 ...">02</div>
              <div class="z-40 rounded-full w-20 h-20 flex items-center justify-center ...">
                <AddIcon />
              </div>
            </div>
            <div className="cursor-pointer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div className="single border-2 rounded-lg p-4">
          <h3 className="font-semibold">Admin Group</h3>
          <p className="text-[#0000009E]">
            The primary user group responsible for managing the application.
          </p>
          <div className="flex justify-between">
            <div className="userImageContainer">
              <div class="z-40 ...">05</div>
              <div class="z-30 ...">04</div>
              <div class="z-20 ...">03</div>
              <div class="z-10 ...">02</div>
              <div class="z-40 rounded-full w-20 h-20 flex items-center justify-center ...">
                <AddIcon />
              </div>
            </div>
            <div className="cursor-pointer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div className="single border-2 rounded-lg p-4">
          <h3 className="font-semibold">Admin Group</h3>
          <p className="text-[#0000009E]">
            The primary user group responsible for managing the application.
          </p>
          <div className="flex justify-between">
            <div className="userImageContainer">
              <div class="z-0  rounded-full w-20 h-20...">05</div>
              <div class="z-10 rounded-full w-20 h-20  ...">04</div>
              <div class="z-20  rounded-full w-20 h-20....">03</div>
              <div class="z-30 rounded-full w-20 h-20. ...">02</div>
              <div class="z-40 rounded-full w-20 h-20 flex items-center justify-center ...">
                <AddIcon />
              </div>
            </div>
            <div className="cursor-pointer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
