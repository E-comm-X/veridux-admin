"use client"
import { UploadImage } from "@/components/UploadImage"
import { useAuthToken } from "@/hooks/useAuthToken"
import { Button, Form, Input, message } from "antd"
import React, { FC, useState } from "react"
import { useAddProductVariantMutation } from "@/services/product.service"

const reqData = {
  preview_image: null,
  product_id: "",
  total_quantity: "",
  color: "",
  authToken: "",
}
export const AddVariant: FC<{ product_id: string }> = ({ product_id }) => {
  const { token } = useAuthToken()
  const [formData, setFormData] = useState({
    ...reqData,
    authToken: token as string,
  })
  const [mutation, { isLoading }] = useAddProductVariantMutation()

  const onFinish = async () => {
    try {
      if (formData.preview_image === null) throw Error("Please upload an image")
      if (!formData.color) throw Error("Please enter a color")
      if (!formData.total_quantity) throw Error("Please enter a total quantity")
      const res = await mutation({ ...formData, product_id }).unwrap()
      message.success("Variant added successfully")
    } catch (error: any) {
      message.error(
        error?.message || error?.data?.message || "An error occurred"
      )
    }
  }
  return (
    <div className="p-4  rounded-lg border-[1px] border-[#E0E2E7] mb-10 mt-3">
      <h3 className="text-lg font-semibold mb-5">Add Product Variant</h3>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Color">
          <Input
            className="w-full"
            size="large"
            onChange={(e) =>
              setFormData({ ...formData, color: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Total Quantity">
          <Input
            className="w-full"
            size="large"
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, total_quantity: e.target.value })
            }
          />
        </Form.Item>

        <div className="p-4 mb-5 rounded-lg border-[1px] border-[#E0E2E7] ">
          <h3 className="font-medium text-base mb-4">Variant Image</h3>
          <UploadImage setProductPreviewImage={setFormData as any} />
        </div>
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          className="bg-primary"
          disabled={isLoading}
        >
          {isLoading ? "Adding Variant..." : "Add Variant"}
        </Button>
      </Form>
    </div>
  )
}
