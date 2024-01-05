"use client"
import React from "react"
import { Avatar, Select, Space, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useGetAllStoresQuery } from "@/services/store.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { StoreI } from "@/interfaces/store"
import { VendorI } from "@/interfaces/product"

const columns: ColumnsType<StoreI> = [
  {
    title: "Vendor",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <Avatar className="rounded-[8px]" size={"large"} src={record.logo} />
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <p>{text}</p>
      </div>
    ),
  },
  // {
  //   title: "Vendor Id",
  //   dataIndex: "vendor",
  //   key: "vendor",
  //   render: (text, record) => {
  //     const vendor = record.vendor as VendorI
  //     return <p>#{String(vendor.id).slice(0, 5)}</p>
  //   },
  // },
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
    title: "Status",
    dataIndex: "is_activated",
    key: "is_activated",
    render: (text, record) => {
      const status = record.is_open ? (
        <Tag color="success" className="px-3 py-1">
          Activated
        </Tag>
      ) : (
        <Tag color="success" className="px-3 py-1">
          Deactivated
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
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, record) => {
      return (
        <Select
          className="w-full placeholder:text-primary"
          placeholder="Action"
          options={[
            { label: "Activate", value: "activate" },
            { label: "Deactivate", value: "deactivate" },
          ]}
        />
      )
    },
  },

  {
    title: "",
    key: "more",
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

export const VendorTable: React.FC = () => {
  const { data, isLoading } = useGetAllStoresQuery(null)

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
