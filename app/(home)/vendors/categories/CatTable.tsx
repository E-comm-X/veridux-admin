"use client"
import React, { useState } from "react"
import {
  Avatar,
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Popover,
  Select,
  Image,
  Table,
  Tag,
  Tooltip,
  message,
} from "antd"
import type { ColumnsType } from "antd/es/table"
import {
  useGetStoreCategoriesQuery,
  useToggleStoreCategoryStatusMutation,
  useUpdateCategoryMutation,
} from "@/services/store.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { StoreCategory } from "@/interfaces/store"
import { VendorI } from "@/interfaces/product"
import { useAuthToken } from "@/hooks/useAuthToken"
import { DeleteOutlined, EditOutlined, Storefront } from "@mui/icons-material"
import Link from "next/link"
import { store } from "@/context/store"
import { CloudinaryWidget } from "@/components/CloudinaryWidget"

const MoreAction: React.FC<{ text: any; record: StoreCategory }> = ({
  text,
  record,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState(record.preview_image)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useToggleStoreCategoryStatusMutation()
  const [update, { isLoading: updating }] = useUpdateCategoryMutation()
  const [formData, setFormData] = React.useState({
    name: record.name,
    description: record.description,
    store_category_id: record._id,
  })

  const { refetch, isLoading: loadingStores } = useGetStoreCategoriesQuery({
    authToken: token as string,
  })

  const toggleStoreStatus = async (action: "hide" | "show") => {
    console.log(record)
    try {
      const response = await mutate({
        action,
        id: record._id,
        authToken: token as string,
      }).unwrap()
      message.success(response.message)
      await refetch()
      message.success("Stores table updated successfully")
    } catch (error: any) {
      message.error(error.data.message)
    }
  }

  const isFilled = Object.values(formData).every((el) => Boolean(el))
  const updateCategory = async () => {
    try {
      // if (
      //   formData.is_first_level === false &&
      //   formData.parent_category_id.length === 0
      // ) {
      //   message.error("Please select a parent category")
      //   return
      // }
      const response = await update({
        data: { ...formData, preview_image: imageUrl },
        authToken: token as string,
      }).unwrap()
      message.success(response.message)
      await refetch()
      setOpen(false)
      setOpenModal(false)
      // message.success("Stores table updated successfully")
    } catch (error: any) {
      message.error(error.data.message)
    }
  }
  return (
    <>
      <Popover
        placement="bottom"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        content={
          <>
            {isLoading ? (
              <LoadingOutlined />
            ) : (
              <div className="flex flex-col p-0 m-0 gap-2">
                <p className="text-center text-md mb-1">{record.name}</p>
                <div className="flex flex-col gap-2">
                  {!record.hidden ? (
                    <Button
                      type="default"
                      danger
                      className="w-full"
                      onClick={async () => await toggleStoreStatus("hide")}
                    >
                      Hide
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      className="bg-primary w-full"
                      onClick={async () => await toggleStoreStatus("show")}
                    >
                      Show
                    </Button>
                  )}
                </div>
                <Button
                  type="primary"
                  className="bg-primary w-full"
                  onClick={() => setOpenModal(true)}
                >
                  Update Details
                </Button>
              </div>
            )}
          </>
        }
      >
        <MoreOutlined />
      </Popover>

      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={false}
      >
        <div className="">
          <Form onFinish={updateCategory}>
            <h2 className="text-black text-lg mt-5 text-center md:max-w-[450px] mx-auto">
              Update - {record.name}
            </h2>
            <Divider />
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="category" className="font-semibold text-md">
                Name
              </label>
              <Input
                size="large"
                id="category"
                type="text"
                placeholder="Category Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="phone" className="font-semibold text-md">
                Description
              </label>
              <Input
                size="large"
                type="text"
                placeholder="Enter Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <div className="mb-4">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt="Store Category Image"
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
              className=" w-full bg-[#006FCF] mt-5"
              disabled={!isFilled}
              type="primary"
              size="large"
              htmlType="submit"
            >
              {updating ? <LoadingOutlined /> : "Update"}
            </Button>
            {/* <ButtonUI text="Add Vendor"></ButtonUI> */}
          </Form>
        </div>
      </Modal>
    </>
  )
}

const columns: ColumnsType<StoreCategory> = [
  {
    title: "Store Category",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <Avatar
          className="bg-primary rounded-md p-0"
          src={record?.preview_image}
          size={50}
        >
          <Storefront />
        </Avatar>
        <p>{text}</p>
      </div>
    ),
  },

  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text, record) => (
      <div className="flex items-center gap-3 cursor-pointer">
        <Tooltip title={record.description}>
          <p>{record.description.slice(0, 80)}...</p>
        </Tooltip>
      </div>
    ),
  },

  {
    title: "First Level",
    dataIndex: "is_first_level",
    key: "is_first_level",
    render: (text, record) => {
      const status = record.is_first_level ? (
        <Tag color="success" className="px-3 py-1">
          Yes
        </Tag>
      ) : (
        <Tag color="processing" className="px-3 py-1">
          No
        </Tag>
      )
      return <p>{status}</p>
    },
  },

  {
    title: "Status",
    dataIndex: "hidden",
    key: "hidden",
    render: (text, record) => {
      const status = !record.hidden ? (
        <Tag color="success" className="px-3 py-1">
          Shown
        </Tag>
      ) : (
        <Tag color="error" className="px-3 py-1">
          Hidden
        </Tag>
      )
      return <p>{status}</p>
    },
  },

  {
    title: "Date Created",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => {
      const date = new Date(text).toDateString()
      return <p>{date}</p>
    },
  },

  {
    title: "Actions",
    key: "more",
    render: (text, record) => <MoreAction {...{ text, record }} />,
  },
]

export const CategoriesTable: React.FC = () => {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetStoreCategoriesQuery({
    authToken: token as string,
  })

  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <Table
          columns={columns}
          dataSource={data?.slice(0).reverse()}
          pagination={{ pageSize: 20 }}
          // rowSelection={{}}
        />
      )}
    </>
  )
}
