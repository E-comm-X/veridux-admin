"use client"
import { UploadImage } from "@/components/UploadImage"
import { useAuthToken } from "@/hooks/useAuthToken"
import { Button, Form, Input } from "antd"
import React, { FC, useState } from "react"

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
  return (
    <div className="p-4  rounded-lg border-[1px] border-[#E0E2E7] my-10">
      <h3 className="text-lg font-semibold mb-5">Add Product Variant</h3>
      <Form layout="vertical">
        <Form.Item label="Color">
          <Input className="w-full" size="large" />
        </Form.Item>
        <Form.Item label="Total Quantity">
          <Input className="w-full" size="large" type="number" />
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
        >
          Add Variant
        </Button>
      </Form>
    </div>
  )
}
