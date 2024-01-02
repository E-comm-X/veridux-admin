"use client";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";

export default function page() {
  return (
    <div className="page flex flex-col">
      <h2 className="text-2xl text-black font-bold">User Group</h2>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="self-end">
        <Link href="/settings/user-group/create-usergroup">
          {" "}
          <button className="bg-[#006FCF] text-white text-center py-2 px-4 rounded-lg   ">
            Create User Group
          </button>
        </Link>
      </div>
      <div className="container gap-4 flex-wrap flex mt-4 ">
        <div className="single bg-white border-2 rounded-lg p-4 flex flex-col gap-4">
          <h3 className="font-semibold">Admin Group</h3>
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
          <h3 className="font-semibold">Vendors</h3>
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
          <h3 className="font-semibold">Users</h3>
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
          <h3 className="font-semibold">Super Admin</h3>
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

// <main className="p-2">
//       <h2 className="text-2xl text-black font-bold">User Group</h2>
//       <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
//       <div className="">
//         <Link href="/settings/user-group/create-usergroup">
//           <button className="bg-[#006FCF] text-white text-center py-2 p2-4 ">
//             Create User Group
//           </button>
//         </Link>
//       </div>
//       <div className="container  flex">
//         <div className="single border-2 rounded-lg p-4">
//           <h3 className="font-semibold">Admin Group</h3>
//           <p className="text-[#0000009E]">
//             The primary user group responsible for managing the application.
//           </p>
//           <div className="flex justify-between">
//             <div className="userImageContainer">
//               <div class="z-40 ...">05</div>
//               <div class="z-30 ...">04</div>
//               <div class="z-20 ...">03</div>
//               <div class="z-10 ...">02</div>
//               <div class="z-40 rounded-full w-20 h-20 flex items-center justify-center ...">
//                 <AddIcon />
//               </div>
//             </div>
//             <div className="cursor-pointer">
//               <MoreVertIcon />
//             </div>
//           </div>
//         </div>
//         <div className="single border-2 rounded-lg p-4">
//           <h3 className="font-semibold">Admin Group</h3>
//           <p className="text-[#0000009E]">
//             The primary user group responsible for managing the application.
//           </p>
//           <div className="flex justify-between">
//             <div className="userImageContainer">
//               <div class="z-40 ...">05</div>
//               <div class="z-30 ...">04</div>
//               <div class="z-20 ...">03</div>
//               <div class="z-10 ...">02</div>
//               <div class="z-40 rounded-full w-20 h-20 flex items-center justify-center ...">
//                 <AddIcon />
//               </div>
//             </div>
//             <div className="cursor-pointer">
//               <MoreVertIcon />
//             </div>
//           </div>
//         </div>
//         <div className="single border-2 rounded-lg p-4">
//           <h3 className="font-semibold">Admin Group</h3>
//           <p className="text-[#0000009E]">
//             The primary user group responsible for managing the application.
//           </p>
//           <div className="flex justify-between">
//             <div className="userImageContainer">
//               <div class="z-40 ...">05</div>
//               <div class="z-30 ...">04</div>
//               <div class="z-20 ...">03</div>
//               <div class="z-10 ...">02</div>
//               <div class="z-40 rounded-full w-20 h-20 flex items-center justify-center ...">
//                 <AddIcon />
//               </div>
//             </div>
//             <div className="cursor-pointer">
//               <MoreVertIcon />
//             </div>
//           </div>
//         </div>
//         <div className="single border-2 rounded-lg p-4">
//           <h3 className="font-semibold">Admin Group</h3>
//           <p className="text-[#0000009E]">
//             The primary user group responsible for managing the application.
//           </p>
//           <div className="flex justify-between">
//             <div className="userImageContainer">
//               <div class="z-0  rounded-full w-20 h-20...">05</div>
//               <div class="z-10 rounded-full w-20 h-20  ...">04</div>
//               <div class="z-20  rounded-full w-20 h-20....">03</div>
//               <div class="z-30 rounded-full w-20 h-20. ...">02</div>
//               <div class="z-40 rounded-full w-20 h-20 flex items-center justify-center ...">
//                 <AddIcon />
//               </div>
//             </div>
//             <div className="cursor-pointer">
//               <MoreVertIcon />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
