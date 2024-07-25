"use client"
import React, { useEffect, useState } from "react"
import { BsCloudArrowUp, BsPlusCircleFill } from "react-icons/bs"
import Image from "next/image"
import { Image as AntImage, Button, message } from "antd"
import { CgTrash } from "react-icons/cg"
import {
  useGetAllProductsQuery,
  useGetProductQuery,
  useUpdateProductPreviewImageMutation,
} from "@/services/product.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useParams } from "next/navigation"

interface props {
  preview_image: string
  sub_images: string[]
}

export const UpdateMultipleImage = ({ sub_images, preview_image }: props) => {
  const [productImages, setProductImages] = useState<File[]>([])
  const [covertingImages, setConvertingImages] = useState(false)
  const [previewImageState, setPreviewImageState] = useState(preview_image)
  useEffect(() => {
    setConvertingImages(true)
    fetch(preview_image)
      .then((res) => res.blob())
      .then((myBlob) => {
        const imageFile = new File([myBlob], "image.jpeg", {
          type: myBlob.type,
        })
        setProductImages((prev) => [imageFile])
        setPreviewImageState(URL.createObjectURL(imageFile))
      })
    for (const image_url of [...sub_images]) {
      fetch(image_url)
        .then((res) => res.blob())
        .then((myBlob) => {
          const imageFile = new File([myBlob], "image.jpeg", {
            type: myBlob.type,
          })
          setProductImages((prev) => [...prev, imageFile])
        })
    }
    setConvertingImages(false)
  }, [])

  const [updateProductPreviewImage, { isLoading }] =
    useUpdateProductPreviewImageMutation()
  const { productId } = useParams() as { productId: string }
  const { refetch } = useGetAllProductsQuery(null)
  const { refetch: refetchProduct } = useGetProductQuery({ id: productId })

  const { token } = useAuthToken() as { token: string }

  const handleImageUpdate = async () => {
    try {
      await updateProductPreviewImage({
        authToken: token,
        productId,
        preview_image: productImages,
      }).unwrap()
      message.success("Images updated successfully")
      refetchProduct()
      refetch()
    } catch (error: any) {
      message.error(`Failed: ${error?.data?.message || error?.message}`)
    }
  }

  const addImage = (file: File) => {
    setProductImages((prevImages) => {
      return [...prevImages, file]
    })
  }
  const removeCoverImage = () => {
    setProductImages((prev) => {
      const newArr = prev.slice()
      newArr[0] = null as never
      return newArr
    })
    setPreviewImageState("")
  }
  const removeImage = (index: number) => {
    setProductImages((prev) => {
      const newArr = prev.filter((_, position) => {
        return position !== index
      })
      return newArr
    })
  }
  const addCoverImage = (file: File) => {
    setProductImages((prev) => {
      const newImages = prev
      newImages[0] = file
      return newImages
    })
    setPreviewImageState(URL.createObjectURL(file))
  }
  return (
    <>
      {covertingImages ? (
        "..."
      ) : (
        <div>
          <div>
            {!productImages[0] ? (
              <label htmlFor="product-image-upload" className="cursor-pointer">
                <input
                  disabled={isLoading}
                  type="file"
                  id="product-image-upload"
                  accept=".jpg, .png"
                  style={{ display: "none" }}
                  onChange={(e) => addCoverImage(e.target.files![0])}
                />
                <div className="h-[236px] w-full rounded-lg border-[1px] border-primary border-dashed">
                  <div className="text-center h-full flex flex-col items-center gap-1 justify-center">
                    <BsCloudArrowUp className="text-[25px]" />
                    <p className="text-md font-medium">
                      Click to add an cover image
                    </p>
                    <p>PNG, JPG, up to 5MB</p>
                  </div>
                </div>
              </label>
            ) : (
              <div className="relative h-[236px] w-full rounded-lg">
                <Image
                  src={previewImageState}
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
            {productImages.length > 0 && (
              <div className="grid grid-cols-4 mt-5 gap-5">
                {productImages.slice(1, 3).map((image, index) => (
                  <div key={index}>
                    <div
                      className="relative h-[80px] w-full rounded-lg"
                      key={index}
                    >
                      <Image
                        src={URL.createObjectURL(image)}
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
                {productImages.length > 3 && (
                  <div className="relative">
                    <AntImage.PreviewGroup
                      items={productImages
                        .slice(3)
                        .map((image) =>
                          image ? URL.createObjectURL(image) : ""
                        )}
                    >
                      <AntImage
                        width={"100%"}
                        height={80}
                        className="object-cover rounded-lg"
                        src={URL.createObjectURL(
                          productImages[productImages.length - 1]
                        )}
                      />
                    </AntImage.PreviewGroup>
                    <span className="absolute top-[25%] left-[45%] z-50 font-bold text-white text-2xl">
                      {productImages.length - 3}
                    </span>
                  </div>
                )}
                <label
                  htmlFor="product-image-sub-upload"
                  className="cursor-pointer"
                >
                  <input
                    disabled={isLoading}
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

          <div className="mt-3">
            <Button
              size="large"
              type="primary"
              disabled={isLoading}
              onClick={handleImageUpdate}
            >
              {isLoading ? <>Updating...</> : "Update Images"}
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
