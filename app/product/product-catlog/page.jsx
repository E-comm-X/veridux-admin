import React from "react";
import ButtonUI from "@/components/ButtonUI";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import ImageIcon from "@mui/icons-material/Image";
export default function AddCategory() {
  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Product Categories</h2>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <ButtonUI text="Filter by Date">
            <FilterAltIcon />
          </ButtonUI>
        </div>
      </div>
      <div className="flex mt-8 items-center h-[40px]">
        <h4 className="font-medium text-lg text-[#333843] ">Add Category</h4>
        <div className="button-container ml-auto flex items-center gap-4 ">
          <button className=" flex align-center justify-center text-center rounded px-4 py-2 border-[#858D9D] border-[1px] bg-white text-[#858D9D]  rounded-lg  text-bases font-semibold">
            <CloseIcon />
            Cancel
          </button>

          <ButtonUI text="Add Category">
            <AddIcon />
          </ButtonUI>
        </div>
      </div>

      <div className="container flex  flex-col md:flex-row gap-4 mt-8">
        <div className="left basis-full md:basis-[30%] bg-white h-[20%] rounded-lg px-6 py-8 border-[1px] border-[#E0E2E7]">
          <h4 className="font-medium text-lg  text-[#1A1C21]">Thumbnail</h4>
          <p className="font-medium text-sm text-[#4D5464]">Photo</p>
          <div className="py-12 px-6 bg-[#F9F9FC] mt-4 text-center border-dashed border-[1px] flex flex-col  ">
            <div className="rounded-full  border-[4px] bg-[#DEDEFA] border-[#EFEFFD] self-center mt-4 w-[70px] h-[70px] relative">
              <ImageIcon
                style={{ fill: "#006FCF" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <p className="font-normal text-[#858D9D] text-base">
              Drag and drop image here, or click add image
            </p>
            <button className="bg-[#DEDEFA] px-[10px] py-5 px-7 mt-4 rounded-xl text-sm font-semibold text-[#006FCF]">
              Add Image
            </button>
          </div>
        </div>
        <div className="right basis-full md:basis-[70%] gap-8 flex flex-col ">
          <div className="top bg-white px-6 py-8 flex flex-col gap-4 rounded-lg border-[1px] border-[#E0E2E7] ">
            <h4 className="font-medium text-lg  text-[#1A1C21]">
              General Information
            </h4>
            <label htmlFor="" className="font-medium text-sm text-[#4D5464]">
              Category Information
            </label>
            <input
              type="text "
              placeholder="Type Category Name Here..."
              className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
            />
            <label htmlFor="" className="font-medium text-sm text-[#4D5464]">
              Description
            </label>
            <textarea
              placeholder="Type Category description...."
              name=""
              id=""
              cols="30"
              rows="10"
              className="rounded placeholder:text-sm placeholder:font-semibold placeholder:text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-2"
            ></textarea>
          </div>
          <div className="botton bg-white rounded-lg border-[1px] border-[#E0E2E7] flex flex-col gap-4  px-6 py-8 ">
            <h3 className="font-semibold text-xl">Select a category</h3>
            <h5 className="font-normal text-[#000000AD] basis-[50%]">
              A great way to start is by browsing through our categories to see
              what other authors are selling.
            </h5>
            <select
              name="business type"
              id="business"
              className=" rounded text-sm font-semibold text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-4"
            >
              <option selected value="India">
                Fashion and Life Style
              </option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Australia">Australia</option>
            </select>
            <h3>Subcategories</h3>
            <input
              type="text"
              placeholder="Women Clothing"
              className=" rounded text-sm font-semibold text-[#00101E73] border-[#d1d1d1] border-2 outline-none bg-[#E5E5E51F] p-4"
            />
            <div className="bg-white rounded-lg border-[1px] border-[#E0E2E7] flex flex-wrap  gap-4  px-6 py-4">
              <div className="flex bg-white rounded-lg border-[1px] border-[#E0E2E7] w-fit p-2  ">
                <p className="text-sm font-normal">Dress</p>
                <CloseIcon />
              </div>
              <div className="flex bg-white rounded-lg border-[1px] border-[#E0E2E7] w-fit p-2  ">
                <p className="text-sm font-normal">Dress</p>
                <CloseIcon />
              </div>
              <div className="flex bg-white rounded-lg border-[1px] border-[#E0E2E7] w-fit p-2  cursor-pointer">
                <p className="text-sm font-normal">Dress</p>
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
