"use client"
import { CloudinaryWidget } from "@/components/CloudinaryWidget"
import { StoreI, StoreUpdateI } from "@/interfaces/store"
import { Button, Form, Image, Input, message, Modal } from "antd"
import { useForm } from "antd/es/form/Form"
import React, { useState } from "react"
import { CgInstagram } from "react-icons/cg"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
import { IoCloseCircleOutline } from "react-icons/io5"
import { useUpdateStoreMutation } from "@/services/store.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined } from "@ant-design/icons"

export const UpdateStore = ({
  store,
  refetch,
}: {
  store: StoreI
  refetch: () => void
}) => {
  const initData = {
    store_id: store._id,
    social_links: {
      twitter: store.social_links.twitter,
      facebook: store.social_links.facebook,
      instagram: store.social_links.instagram,
      linkedln: store.social_links.linkedln,
    },
    name: store.name,
    description: store.description,
    website: store.website,
    address: store.address,
    logo: store.logo,
  }
  const { token } = useAuthToken()

  const [form] = useForm<StoreUpdateI>()
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen(!open)
  const [imageUrl, setImageUrl] = useState("")
  const [mutate, { isLoading }] = useUpdateStoreMutation()

  const updateStore = async () => {
    try {
      const response = await mutate({
        data: { ...form.getFieldsValue(), logo: imageUrl } as any,
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
      <Button
        className="bg-primary"
        type="primary"
        size="large"
        onClick={toggleModal}
      >
        Update Store
      </Button>

      <Modal
        open={open}
        onCancel={toggleModal}
        title={"Update Store"}
        closeIcon={<IoCloseCircleOutline className="text-primary" />}
        footer={false}
      >
        <Form
          disabled={isLoading}
          initialValues={initData}
          layout="vertical"
          form={form}
          className="text-sm"
          onFinish={updateStore}
        >
          <div className="grid grid-col">
            <Form.Item>
              <div>
                <div className="mb-4">
                  <Image
                    src={imageUrl || store.logo}
                    alt="Store Image"
                    width={"100%"}
                    height={"10rem"}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </div>
                <CloudinaryWidget
                  btnText="Change Store Image"
                  folder="store"
                  setImageUrl={setImageUrl}
                />
              </div>
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-x-5">
            <Form.Item
              name={["social_links", "twitter"]}
              label="Twitter"
              rules={[{ type: "url" }]}
            >
              <Input
                className="w-full"
                size="large"
                prefix={<FaTwitter className="text-primary" />}
              />
            </Form.Item>
            <Form.Item
              name={["social_links", "facebook"]}
              label="Facebook"
              rules={[{ type: "url" }]}
            >
              <Input
                className="w-full"
                size="large"
                prefix={<FaFacebook className="text-primary" />}
              />
            </Form.Item>
            <Form.Item
              name={["social_links", "instagram"]}
              label="Instagram"
              rules={[{ type: "url" }]}
            >
              <Input
                className="w-full"
                size="large"
                prefix={<CgInstagram className="text-pink-500" />}
              />
            </Form.Item>
            <Form.Item
              name={["social_links", "linkedln"]}
              label="Linkedln"
              rules={[{ type: "url" }]}
            >
              <Input
                className="w-full"
                size="large"
                prefix={<FaLinkedin className="text-primary" />}
              />
            </Form.Item>
          </div>
          <Form.Item
            name={"name"}
            label="Store Name"
            rules={[{ required: true }]}
          >
            <Input className="w-full" size="large" />
          </Form.Item>
          <Form.Item
            name={"description"}
            label="Store Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              className="w-full text-sm"
              style={{ minHeight: 80 }}
              size="large"
            />
          </Form.Item>
          <Form.Item
            name={"address"}
            label="Store Address"
            rules={[{ required: true }]}
          >
            <Input className="w-full" size="large" />
          </Form.Item>
          {/* <Form.Item
            name={"website"}
            label="Store Website"
            rules={[{ type: "url" }]}
          >
            <Input className="w-full" size="large" />
          </Form.Item> */}

          <Button
            className="bg-primary w-full"
            size="large"
            type="primary"
            disabled={isLoading}
            htmlType="submit"
          >
            {isLoading ? <LoadingOutlined /> : "Update Store"}
          </Button>
        </Form>
      </Modal>
      <div className=""></div>
    </div>
  )
}
