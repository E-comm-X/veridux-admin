"use client"
import React, { useState } from "react"
import {
  Modal,
  Button,
  Form,
  Input,
  message,
  Checkbox,
  Select,
  Image,
} from "antd"
import {
  useGetAllCategoriesQuery,
  useAddCategoryMutation,
  useGetCategoriesWithHiddenQuery,
} from "@/services/category.service"
import { CategoryI, CategoryRequestI } from "@/interfaces/categories"
import { useAuthToken } from "@/hooks/useAuthToken"
import { CloudinaryWidget } from "@/components/CloudinaryWidget"

const reqData: CategoryRequestI = {
  name: "",
  description: "",
  is_first_level: true,
  featured: false,
  preview_image: "",
}

const transformToOptions: (
  categories: CategoryI[] | undefined
) => { value: string; label: string }[] = (categories) => {
  if (categories) {
    const newData = categories?.map((category) => {
      return { value: category._id, label: category.name }
    })
    return newData
  }
  return []
}

export const AddCategory = () => {
  const { token: authToken } = useAuthToken() as { token: string }
  const [open, setOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const {
    refetch,
    isLoading: gettingCategories,
    data: categories,
  } = useGetCategoriesWithHiddenQuery({ authToken })
  const categoryOptions = transformToOptions(categories)
  const [addCategory, { isLoading }] = useAddCategoryMutation()
  const [data, setData] = useState<CategoryRequestI>(reqData)
  const onFinish = async () => {
    try {
      if (data.name && data.description) {
        const response = await addCategory({
          data: { ...data, preview_image: imageUrl },
          authToken,
        }).unwrap()
        message.success("Category added successfully")
        setOpen(false)
        refetch()
      } else {
        message.warning("Please fill all the fields")
      }
    } catch (error: any) {
      console.log(error)
      message.error(`Failed: ${error.data.message}`)
    }
  }
  return (
    <div>
      <Button
        className="border-primary text-primary"
        size="large"
        onClick={() => setOpen(true)}
      >
        + Add Category
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        title="Add Category"
      >
        <Form className="mt-10" onFinish={onFinish}>
          <Form.Item>
            <label htmlFor="" className="block mb-1">
              Category Name
            </label>
            <Input
              placeholder="Category Name"
              size="large"
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </Form.Item>
          <Form.Item>
            <label htmlFor="" className="block mb-1">
              Description
            </label>
            <Input.TextArea
              placeholder="Description"
              style={{ minHeight: "9rem" }}
              onChange={(e) =>
                setData((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </Form.Item>
          <div className="grid grid-cols-2 gap-3">
            <Form.Item>
              <label htmlFor="" className="block mb-1">
                Featured
              </label>
              <Checkbox
                value={data.featured}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, featured: e.target.checked }))
                }
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="" className="block mb-1">
                First Level Category
              </label>
              <Checkbox
                value={data.is_first_level}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    is_first_level: e.target.checked,
                  }))
                }
              />
            </Form.Item>
          </div>
          {!data.is_first_level && (
            <Form.Item>
              <label htmlFor="" className="block mb-1">
                Parent Category
              </label>
              <Select
                size="large"
                value={data.parent_category_id}
                options={categoryOptions}
                onChange={(value) =>
                  setData((prev) => ({ ...prev, parent_category_id: value }))
                }
              />
            </Form.Item>
          )}

          <div>
            <div className="mb-4">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="Store Image"
                  width={"100%"}
                  height={"10rem"}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              )}
            </div>
            <CloudinaryWidget
              btnText="Add Category Preview Image"
              setImageUrl={setImageUrl}
            />
          </div>
          <Button
            htmlType="submit"
            type="primary"
            className="bg-primary w-full mt-4"
            size="large"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "+ Add Category"}
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
