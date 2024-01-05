"use client"
import React, { useState } from "react"
import { Modal, Button, Form, Input, message } from "antd"
import {
  useGetAllCategoriesQuery,
  useAddCategoryMutation,
} from "@/services/category.service"
import { CategoryRequestI } from "@/interfaces/categories"
import { useAuthToken } from "@/hooks/useAuthToken"

const reqData: CategoryRequestI = {
  name: "",
  description: "",
  is_first_level: true,
}

export const AddCategory = () => {
  const [open, setOpen] = useState(false)
  const { refetch } = useGetAllCategoriesQuery(null)
  const [addCategory, { isLoading }] = useAddCategoryMutation()
  const { token: authToken } = useAuthToken()
  const [data, setData] = useState<CategoryRequestI>(reqData)
  const onFinish = async () => {
    try {
      if (data.name && data.description) {
        const response = await addCategory({ data, authToken }).unwrap()
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
          <Button
            htmlType="submit"
            type="primary"
            className="bg-primary w-full"
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
