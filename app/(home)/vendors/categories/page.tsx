"use client"
import React, { use, useEffect, useState } from "react"
import { CategoriesTable } from "./CatTable"
import { H2 } from "@/components/Typography"
import { useAuthToken } from "@/hooks/useAuthToken"
import {
  useCreateStoreCategoryMutation,
  useGetStoreCategoriesQuery,
} from "@/services/store.service"
import { Button, Form, Input, Radio, Select, Space, message } from "antd"
import { Modal } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

type Form = {
  name: string
  description: string
  is_first_level: boolean
  // parent_category_id: string[]
  preview_image?: string
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

const Page = () => {
  const [open, setOpen] = useState(false)
  const { token } = useAuthToken()
  const {
    data: categories,
    isLoading,
    refetch,
  } = useGetStoreCategoriesQuery({
    authToken: token as string,
  })
  const categoryOptions = transformData(categories as [])
  const [formData, setFormData] = useState<Form>({
    name: "",
    description: "",
    is_first_level: false,
    // parent_category_id: [],
    preview_image:
      "https://res.cloudinary.com/dfejczpjx/image/upload/v1697980517/cld-sample-3.jpg",
  })
  const [mutate, { isLoading: creatingStoreCategory }] =
    useCreateStoreCategoryMutation()

  const isFilled = Object.values({
    name: formData.name,
    description: formData.description,
    is_first_level: formData.is_first_level,
  }).every((el) => el.toString().length > 0)
  const createCategory = async () => {
    try {
      // if (
      //   formData.is_first_level === false &&
      //   formData.parent_category_id.length === 0
      // ) {
      //   message.error("Please select a parent category")
      //   return
      // }
      const response = await mutate({
        data: formData,
        authToken: token as string,
      }).unwrap()
      message.success(response.message)
      await refetch()
      setOpen(false)
      // message.success("Stores table updated successfully")
    } catch (error: any) {
      message.error(error.data.message)
    }
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <H2>Store Categories</H2>
        <Button
          className="bg-primary"
          type="primary"
          size="large"
          onClick={() => setOpen(true)}
        >
          Add Category
        </Button>
      </div>
      <CategoriesTable />

      <div>
        {/* Modal */}
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <Modal open={open} onCancel={() => setOpen(false)} footer={false}>
            <div className="">
              <Form onFinish={createCategory}>
                <h2 className="text-black text-4xl mt-2 text-center">
                  Create Store Category
                </h2>
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="category" className="font-semibold text-xl">
                    Name
                  </label>
                  <Input
                    size="large"
                    id="category"
                    type="text"
                    placeholder="Category Name"
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="phone" className="font-semibold text-xl">
                    Description
                  </label>
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter Description"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="industry" className="font-semibold text-xl">
                    Should be first level?
                  </label>
                  <Radio.Group
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        is_first_level: e.target.value,
                      }))
                    }
                    value={formData.is_first_level}
                  >
                    <Space direction="vertical">
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </Space>
                  </Radio.Group>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="services" className="font-semibold text-xl">
                    Parent Category
                  </label>
                  <Select
                    placeholder={"Select Parent Category"}
                    disabled={Boolean(formData.is_first_level)}
                    size="large"
                    options={categoryOptions}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        parent_category_id: value as string[],
                      }))
                    }
                    allowClear
                    mode="multiple"
                  />
                </div>
                <Button
                  className=" w-full bg-[#006FCF] mt-5"
                  disabled={!isFilled}
                  type="primary"
                  size="large"
                  htmlType="submit"
                >
                  {creatingStoreCategory ? (
                    <LoadingOutlined />
                  ) : (
                    "Create Store Category"
                  )}
                </Button>
                {/* <ButtonUI text="Add Vendor"></ButtonUI> */}
              </Form>
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default Page
