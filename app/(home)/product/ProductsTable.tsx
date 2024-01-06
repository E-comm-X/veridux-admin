"use client"
import React from "react"
import { Avatar, Button, Popover, Space, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useGetAllProductsQuery } from "@/services/product.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { ProductI } from "@/interfaces/product"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

const MoreAction = (_: any, record: ProductI) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  return (
    <Popover
      placement="bottom"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      content={
        <div className="flex flex-col p-0 m-0 gap-2">
          <Button type="primary" className="bg-primary" icon={<EditOutlined />}>
            Edit
          </Button>
          <Button type="default" danger icon={<DeleteOutlined />}>
            Delete
          </Button>
        </div>
      }
    >
      <MoreOutlined />
    </Popover>
  )
}

const columns: ColumnsType<ProductI> = [
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <Avatar
          className="rounded-[8px]"
          size={"large"}
          src={record.preview_image}
        />
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: "Pricing",
    dataIndex: "price",
    key: "price",
    render: (text) => <p>₦{Number(text).toFixed(2)}</p>,
  },
  {
    title: "Brand",
    dataIndex: "brand_name",
    key: "brand_name",
  },
  {
    title: "Purchased",
    dataIndex: "purchased",
    key: "purchased",
    render: (text) => <p>-</p>,
  },
  {
    title: "Vendor",
    dataIndex: "store",
    key: "store",
    render: (text, record) => (
      <p>{record.store?.name || <p className="ml-[2rem]">-</p>}</p>
    ),
  },
  {
    title: "Total Sale",
    dataIndex: "Total_Sale",
    key: "Total_Sale",
    render: (text) => <p>-</p>,
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    render: (text) => <p>{Number(text).toFixed(1)}/5</p>,
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
    title: "",
    key: "action",
    render: (text, record) => <MoreAction {...text} {...record} />,
  },
]

export const ProductsTable: React.FC = () => {
  const { data, isLoading } = useGetAllProductsQuery(null)

  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <Table
          columns={columns}
          dataSource={data?.slice(0).reverse()}
          rowSelection={{}}
        />
      )}
    </>
  )
}
