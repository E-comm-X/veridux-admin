"use client"
import React from "react"
import {
  Avatar,
  Button,
  Popover,
  Select,
  Space,
  Table,
  Tag,
  message,
} from "antd"
import type { ColumnsType } from "antd/es/table"
import {
  useGetStoreCategoriesQuery,
  useToggleStoreCategoryStatusMutation,
} from "@/services/store.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { StoreCategory } from "@/interfaces/store"
import { VendorI } from "@/interfaces/product"
import { useAuthToken } from "@/hooks/useAuthToken"
import { DeleteOutlined, EditOutlined } from "@mui/icons-material"
import Link from "next/link"

const MoreAction: React.FC<{ text: any; record: StoreCategory }> = ({
  text,
  record,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useToggleStoreCategoryStatusMutation()
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
  return (
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
              {/* <div className="flex gap-2 w-full">
                <Button
                  type="primary"
                  className="bg-primary w-full"
                  onClick={async () => await toggleStoreStatus("open")}
                >
                  Open Store
                </Button>
                <Button
                  type="default"
                  danger
                  className="w-full"
                  onClick={async () => await toggleStoreStatus("close")}
                >
                  Close Store
                </Button>
              </div> */}
            </div>
          )}
        </>
      }
    >
      <MoreOutlined />
    </Popover>
  )
}

const columns: ColumnsType<StoreCategory> = [
  {
    title: "Vendor",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <p>{text}</p>
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
          // rowSelection={{}}
        />
      )}
    </>
  )
}
