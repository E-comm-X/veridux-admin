"use client"
import React from "react"
import { Avatar, Space, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useGetAllProductsQuery } from "@/services/product.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { ProductI } from "@/interfaces/product"

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
    render: (_, record) => {
      return (
        <>
          {/* <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space> */}
          <>
            <MoreOutlined />
          </>
        </>
      )
    },
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
