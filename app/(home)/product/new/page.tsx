"use client"
import React, { useState } from "react"
import { Button, Input, Select, message } from "antd"
import { UploadImage } from "@/components/UploadImage"
import {
  useAddProductMutation,
  useGetAllProductsQuery,
} from "@/services/product.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { ProductRequestI } from "@/interfaces/product"
import { useGetAllCategoriesQuery } from "@/services/category.service"
import { useGetAllStoresQuery } from "@/services/store.service"
import { LoadingOutlined } from "@ant-design/icons"
import { GoBack } from "@/components/GoBack"
import { UploadMultipleImage } from "./UploadMultipleImage"

const reqData: ProductRequestI = {
  preview_image: [],
  store_id: "",
  product_name: "",
  details: "",
  price: "",
  total_quantity: "",
  category_ids: "",
  brand_name: "",
  package_size: "",
  authToken: "",
  commission: "",
}

const transformData = (data: { name: string; id: string }[]) => {
  const newData =
    data &&
    data?.map((data) => ({
      label: data.name,
      value: data.id,
    }))
  return newData
}

export default function AddProduct() {
  const [addProductMutation, { isLoading }] = useAddProductMutation()
  const { refetch } = useGetAllProductsQuery(null)
  const { token } = useAuthToken()
  const [formData, setFormData] = useState<ProductRequestI>({
    ...reqData,
    authToken: token as string,
  })
  const { data: categories } = useGetAllCategoriesQuery(null)
  const { data: stores } = useGetAllStoresQuery({ authToken: token as string })
  const [subCategories, setSubCategories] = useState<
    { label: string; value: string }[]
  >([])
  const categoryOptions = transformData(categories as [])
  const storesOptions = transformData(stores as [])
  const addProduct = async () => {
    try {
      if (
        formData.brand_name &&
        formData.preview_image![0] &&
        formData.price &&
        formData.product_name &&
        formData.total_quantity &&
        formData.category_ids &&
        formData.package_size
        // formData.store_id
      ) {
        await addProductMutation(formData).unwrap()
        message.success("Product Added Successfully")
        await refetch()
      } else {
        console.log(formData)
        message.warning("Please Fill All Fields")
      }
    } catch (error: any) {
      message.error(`Failed: ${error?.data?.message || error?.message}`)
      console.log(formData)
    }
  }
  return (
    <main>
      <GoBack />
      {/* headeding */}
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Add Product</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      {/* body */}
      <div className="parent bg-white rounded-lg py-10 px-8 mt-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="right px-4 py-8   lg:basis-[489px] rounded-lg border-[1px] border-[#E0E2E7] flex flex-col ">
            <div className="mb-5">
              <label
                htmlFor="productname"
                className="text-sm font-medium block mb-1"
              >
                Product Name
              </label>
              <Input
                type="text"
                placeholder="Enter Product Name"
                size="large"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    product_name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor=""
                className="text-sm font-medium block mb-1"
                // placeholder=" Provide A Detail Description for the product..."
              >
                Product Description
              </label>
              <Input.TextArea
                name=""
                id=""
                style={{ minHeight: "8rem" }}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    details: e.target.value,
                  }))
                }
              ></Input.TextArea>
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-sm font-medium block mb-1">
                Quantity
              </label>
              <Input
                type="number"
                placeholder="Enter Quantity"
                size="large"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    total_quantity: e.target.value,
                  }))
                }
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-sm font-medium block mb-1">
                Brand Name
              </label>
              <Input
                type="text"
                placeholder="Enter Brand Name"
                size="large"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    brand_name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-sm font-medium block mb-1">
                Package size
              </label>
              <Select
                showSearch
                placeholder="Package Size"
                size="large"
                className="w-full"
                options={[
                  "extra_small",
                  "small",
                  "medium",
                  "large",
                  "extra_large",
                ].map((size) => ({
                  label: size.replace("_", " ").toLocaleUpperCase(),
                  value: size,
                }))}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    package_size: value,
                  }))
                }
              />
            </div>
          </div>

          <div>
            <div className="p-4  rounded-lg border-[1px] border-[#E0E2E7] ">
              <h3 className="font-medium text-base mb-4">Product Image</h3>
              {/* <UploadImage setProductPreviewImage={setFormData as any} /> */}
              <UploadMultipleImage
                setFormData={setFormData}
                product={formData}
              />
            </div>

            {/* Add Product */}
            <Button
              onClick={addProduct}
              size="large"
              className="mt-5 bg-primary w-[70%] mx-auto block"
              type="primary"
              disabled={isLoading}
            >
              {isLoading ? <LoadingOutlined /> : "Add Product"}
            </Button>
          </div>
        </div>
        <div className="middle w-full md:w-[48%] mt-6">
          <h2 className="text-base font-semibold mb-4">Product Category</h2>
          <div className="rounded-lg border-[1px] border-[#E0E2E7] p-4">
            <div className="mb-5">
              <label
                htmlFor="category"
                className="font-medium text-base block mb-1"
              >
                Select Category:
              </label>
              <Select
                showSearch
                placeholder="Category"
                size="large"
                className="w-full"
                options={categoryOptions}
                onChange={(value) => {
                  const subCat_ = categories?.find(
                    (category) => category._id === value
                  )?.sub_categories
                  setSubCategories(transformData(subCat_ as []))
                  setFormData((prev) => ({
                    ...prev,
                    category_ids: value,
                  }))
                }}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="category"
                className="font-medium text-base block mb-1"
              >
                Sub Category
              </label>
              <Select
                placeholder="Sub Category"
                size="large"
                className="w-full"
                options={subCategories}
                onChange={(value) => {
                  setFormData((prev) => ({
                    ...prev,
                    category_ids: `${formData.category_ids},${value}`,
                  }))
                }}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="font-medium text-base block mb-1"
              >
                Store
              </label>
              <Select
                showSearch
                placeholder="Store"
                size="large"
                className="w-full"
                options={storesOptions}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    store_id: value,
                  }))
                }
              />
            </div>
          </div>
        </div>
        <div className="bottom basis-[50%] md:w-[48%]">
          <h2 className="text-base font-semibold mb-4 mt-4">Pricing</h2>
          <div className=" rounded-lg border-[1px] border-[#E0E2E7] flex justify-between gap-[1rem] p-6">
            <div>
              <h3 className="font-medium text-lg">Price</h3>
              <div className="flex items-center gap-4 border-[#C1C1C1] rounded border-[1px] mt-5  pr-10">
                <div className="signContainer h-[50px] w-[50px] bg-[#A1A1A15E] rounded relative">
                  <span className="font-medium text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    $
                  </span>
                </div>
                <input
                  type="number"
                  className="w-[100%] font-medium text-xl border-0 outline-none placeholder:text-black placeholder:text-lg placeholder:font-medium"
                  placeholder=""
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      price: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg">Commission</h3>
              <div className="flex items-center gap-4 border-[#C1C1C1] rounded border-[1px] mt-5  pr-10">
                <div className="signContainer h-[50px] w-[50px] bg-[#A1A1A15E] rounded relative">
                  <span className="font-medium text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    $
                  </span>
                </div>
                <input
                  type="number"
                  className=" w-[100%] font-medium text-xl border-0 outline-none placeholder:text-black placeholder:text-lg placeholder:font-medium"
                  placeholder=""
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      commission: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
