import React from "react";
import ButtonUI from "@/components/ButtonUI";

export default function CreateUserGroup() {
  return (
    <main>
      <h2 className="text-2xl text-black font-bold">
        Creating a New User Group
      </h2>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />

      <div className="bg-white rounded p-4 ">
        <h2 className="text-xl text-black font-bold">
          Creating a New User Group
        </h2>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />

        <div className="flex gap-4  flex-col md:flex-row my-4 ">
          <div className="flex flex-col  gap-2 md:basis-[50%]  basis-full ">
            <label htmlFor="" className="font-semibold text-lg ">
              User Group Name:
            </label>
            <input
              type="text"
              placeholder="Enter the name of the new user group..."
              className="  border-[#006FCF] rounded-lg border-[1px] p-4 outline-none placeholder:text-[#00000078] placeholder:font-normal"
            />
          </div>
          <div className="md:basis-[50%] basis-full flex gap-2 flex-col">
            <label htmlFor="" className="font-semibold text-lg">
              Select Recipients:
            </label>
            <select
              name=""
              id=""
              className=" border-[#006FCF] rounded-lg border-[1px] p-4 outline-none text-[#00000078] font-normal"
            >
              <option required >Choose a user group</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 ">
          <label htmlFor="" className="font-semibold text-lg">
            Select users to add to this group
          </label>
          <select name="" id="" 
              className="border-[#006FCF] rounded-lg border-[1px] p-4 outline-none text-[#00000078] font-normal"
          
          >
            <option required value="Type to search for users..."></option>
          </select>
        </div>
        <div  className="flex flex-col mt-4 gap-2 mb-8">
          <label htmlFor="" className="font-semibold text-lg">
            User Group Description:
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="border-[#006FCF] rounded-lg border-[1px] p-4 outline-none placeholder:text-[#00000078] placeholder:font-normal"
            placeholder="Describe the purpose or role of this user group..."
          ></textarea>
        </div>
        <ButtonUI>Create User Group</ButtonUI>
      </div>
    </main>
  );
}
