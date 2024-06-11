"use client"
import React from "react"
import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Modal,
  Popover,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
  message,
} from "antd"
import type { ColumnsType } from "antd/es/table"

import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { useAuthToken } from "@/hooks/useAuthToken"
import { DeleteOutlined, EditOutlined, Storefront } from "@mui/icons-material"
import Link from "next/link"
import {
  useGetCategoriesWithHiddenQuery,
  useToggleProductCategoryStatusMutation,
  useUpdateProductCategoryMutation,
} from "@/services/category.service"
import { CategoryI } from "@/interfaces/categories"

const MoreAction: React.FC<{ text: any; record: CategoryI }> = ({
  text,
  record,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useToggleProductCategoryStatusMutation()
  const [update, { isLoading: updating }] = useUpdateProductCategoryMutation()
  const [formData, setFormData] = React.useState({
    name: record.name,
    description: record.description,
    featured: record?.featured,
    position: record?.position,
    product_category_id: record._id,
  })

  const { refetch, isLoading: loadingCategories } =
    useGetCategoriesWithHiddenQuery({ authToken: token as string })

  const toggleCategoryStatus = async (action: "hide" | "show") => {
    console.log(record)
    try {
      const response = await mutate({
        action,
        id: record._id,
        authToken: token as string,
      }).unwrap()
      message.success(response.message)
      await refetch()
      message.success("Category updated successfully")
    } catch (error: any) {
      message.error(
        error?.data?.message || error?.message || "An Error Occured"
      )
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
        data: formData,
        authToken: token as string,
      }).unwrap()
      message.success(response.message)
      await refetch()
      setOpen(false)
      setOpenModal(false)
      // message.success("Category updated successfully")
    } catch (error: any) {
      message.error(
        error?.data?.message || error?.message || "An Error Occured"
      )
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
                      onClick={async () => await toggleCategoryStatus("hide")}
                    >
                      Hide
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      className="bg-primary w-full"
                      onClick={async () => await toggleCategoryStatus("show")}
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
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="phone" className="font-semibold text-md">
                Featured
              </label>
              <Checkbox
                value={formData.featured}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    featured: e.target.checked,
                  }))
                }
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

const columns: ColumnsType<CategoryI> = [
  {
    title: "Product Category",
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
        <Tag color="error" className="px-3 py-1">
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
  const { data, isLoading } = useGetCategoriesWithHiddenQuery({
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
