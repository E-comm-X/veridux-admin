"use client"
import React, { useState } from "react"
import { BsCloudArrowUp, BsPlusCircleFill } from "react-icons/bs"
import Image from "next/image"
import { Image as AntImage, FormInstance } from "antd"
import { CgTrash } from "react-icons/cg"
import { ProductRequestI } from "@/interfaces/product"

interface props {
  setFormData: React.Dispatch<React.SetStateAction<ProductRequestI>>
  product: ProductRequestI
}

export const UploadMultipleImage = ({ setFormData, product }: props) => {
  const [images, setImages] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])
  const addImage = (file: File) => {
    const imgFile = URL.createObjectURL(file)
    setFiles((prev) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        preview_image: [...(product.preview_image as Blob[]), file],
      }))
      return [...prev, file]
    })
    setImages((prev) => {
      return [...prev, imgFile]
    })
  }
  const removeCoverImage = () => {
    setImages((prev) => {
      const newArr = prev.slice()
      newArr[0] = ""
      return newArr
    })
    setFiles((prev) => {
      const newArr = prev.slice()
      newArr[0] = null as never
      setFormData((prevFormData) => ({
        ...prevFormData,
        preview_image: newArr,
      }))
      return newArr
    })
  }
  const removeImage = (index: number) => {
    setImages((prev) => {
      const newArr = prev.filter((_, position) => {
        return position !== index
      })
      return newArr
    })
    setFiles((prev) => {
      const newArr = prev.filter((_, position) => {
        return position !== index
      })
      setFormData((prevFormData) => ({
        ...prevFormData,
        preview_image: newArr,
      }))
      return newArr
    })
  }
  const addCoverImage = (file: File) => {
    const imgFile = URL.createObjectURL(file)
    setFiles((prev) => {
      const newArr = prev
      newArr[0] = file
      setFormData((prev) => {
        const newImages = prev.preview_image
        newImages[0] = file
        return {
          ...prev,
          preview_image: newImages,
        }
      })
      return [...prev]
    })
    setImages((prev) => {
      const newArr = prev
      newArr[0] = imgFile
      return prev
    })
  }
  return (
    <div>
      {!images[0] ? (
        <label htmlFor="product-image-upload" className="cursor-pointer">
          <input
            type="file"
            id="product-image-upload"
            accept=".jpg, .png"
            style={{ display: "none" }}
            onChange={(e) => addCoverImage(e.target.files![0])}
          />
          <div className="h-[236px] w-full rounded-lg border-[1px] border-primary border-dashed">
            <div className="text-center h-full flex flex-col items-center gap-1 justify-center">
              <BsCloudArrowUp className="text-[25px]" />
              <p className="text-md font-medium">Click to add an cover image</p>
              <p>PNG, JPG, up to 5MB</p>
            </div>
          </div>
        </label>
      ) : (
        <div className="relative h-[236px] w-full rounded-lg">
          <Image
            src={images[0]}
            alt="cover"
            className="object-cover rounded-lg h-full w-full"
            fill
          />
          <div
            className="cursor-pointer absolute top-2 right-2 z-30 h-7 w-7 rounded-full bg-white flex justify-center items-center"
            onClick={removeCoverImage}
          >
            <CgTrash className="text-red-500 text-[18px]" />
          </div>
        </div>
      )}
      {images.length > 0 && (
        <div className="grid grid-cols-4 mt-5 gap-5">
          {images.slice(1, 3).map((image, index) => (
            <div key={index}>
              <div className="relative h-[80px] w-full rounded-lg" key={index}>
                <Image
                  src={image}
                  alt="product"
                  className="object-cover rounded-lg h-full w-full"
                  fill
                />
                <div
                  className="cursor-pointer absolute top-2 right-2 z-30 h-5 w-5 rounded-full bg-white flex justify-center items-center"
                  onClick={() => removeImage(index + 1)}
                >
                  <CgTrash className="text-red-500" />
                </div>
              </div>
            </div>
          ))}
          {images.length > 3 && (
            <div className="relative">
              <AntImage.PreviewGroup items={images}>
                <AntImage
                  width={"100%"}
                  height={80}
                  className="object-cover rounded-lg"
                  src={images[images.length - 1]}
                />
              </AntImage.PreviewGroup>
              <span className="absolute top-[25%] left-[45%] z-50 font-bold text-white text-2xl">
                {images.length}
              </span>
            </div>
          )}
          <label htmlFor="product-image-sub-upload" className="cursor-pointer">
            <input
              type="file"
              id="product-image-sub-upload"
              accept=".jpg, .png"
              style={{ display: "none" }}
              onChange={(e) => addImage(e.target.files![0])}
            />
            <div className="h-[80px] w-full rounded-lg border-[1px] border-primary border-dashed flex flex-col items-center justify-center">
              <BsPlusCircleFill className="text-[25px] shadow-2xl block" />
            </div>
          </label>
        </div>
      )}
    </div>
  )
}
