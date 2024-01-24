"use client"
import React from "react"
import { Avatar, Space, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useGetAllProductsQuery } from "@/services/product.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { ProductI } from "@/interfaces/product"
import { userI } from "@/interfaces/userGroup"
import { UserOutlined } from "@ant-design/icons"
import { useGetUsersInGroupQuery } from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"

const columns: ColumnsType<userI> = [
  {
    title: "Full Name",
    dataIndex: "first_name",
    key: "first_name",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <Avatar
          size={"large"}
          src={record.profile_picture}
          icon={<UserOutlined />}
        />
        <p className="capitalize">
          {text} {record.lastname}
        </p>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Account Reference",
    dataIndex: "account_reference",
    key: "account_reference",
  },
  {
    title: "Phone Number",
    dataIndex: "phone_number",
    key: "phone_number",
    render: (text) => <p>-</p>,
  },

  {
    title: "Member Since",
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

export const UsersTable: React.FC<{ group_id: string }> = ({ group_id }) => {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetUsersInGroupQuery({
    group_id,
    authToken: token as string,
  })

  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <Table
          columns={columns}
          dataSource={data?.data.users.slice(0).reverse()}
          rowSelection={{}}
          pagination={{
            pageSizeOptions: ["20", "30", "50"],
          }}
        />
      )}
    </>
  )
}
