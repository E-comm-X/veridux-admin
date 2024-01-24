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
  useGetAllStoresQuery,
  useToggleStoreStatusMutation,
} from "@/services/store.service"
import { useGetAllDocumentRequestsQuery } from "@/services/documents.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { StoreI } from "@/interfaces/store"
import { VendorI } from "@/interfaces/product"
import { useAuthToken } from "@/hooks/useAuthToken"
import { DeleteOutlined, EditOutlined, PictureAsPdf } from "@mui/icons-material"
import { UserOutlined } from "@ant-design/icons"
import Link from "next/link"
import { DocumentRequestI } from "@/interfaces/documents"

const MoreAction: React.FC<{ text: any; record: DocumentRequestI }> = ({
  text,
  record,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useToggleStoreStatusMutation()
  const { refetch, isLoading: loadingStores } = useGetAllStoresQuery({
    authToken: token as string,
  })

  const toggleStoreStatus = async (
    action: "open" | "close" | "activate" | "deactivate"
  ) => {
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
              <div className="flex flex-col gap-2">
                <Button
                  type="primary"
                  className="bg-primary w-full text-xs"
                  onClick={async () => await toggleStoreStatus("open")}
                >
                  Approve All Documents
                </Button>
                <Button
                  type="default"
                  danger
                  className="w-full text-xs"
                  onClick={async () => await toggleStoreStatus("deactivate")}
                >
                  Reject All Documents
                </Button>
              </div>
            </div>
          )}
        </>
      }
    >
      <MoreOutlined />
    </Popover>
  )
}

const ViewDocuments: React.FC<{ text: any; record: DocumentRequestI }> = ({
  text,
  record,
}) => {
  const { token } = useAuthToken()
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <>
      <Button type="link">View Documents</Button>
    </>
  )
}

const columns: ColumnsType<DocumentRequestI> = [
  {
    title: "Submitted By",
    dataIndex: "user",
    key: "user",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <Avatar size={"large"}>
          <UserOutlined />
        </Avatar>
        <p>{text}</p>
      </div>
    ),
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text, record) => {
      const status =
        record.status.toLowerCase() === "approved" ? (
          <Tag color="success" className="px-3 py-1">
            Approved
          </Tag>
        ) : record.status.toLowerCase() === "pending" ? (
          <Tag color="warning" className="px-3 py-1">
            Pending
          </Tag>
        ) : (
          <Tag color="error" className="px-3 py-1">
            Rejected
          </Tag>
        )
      return <p>{status}</p>
    },
  },

  {
    title: "Date Submitted",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => {
      const date = new Date(text).toDateString()
      return <p>{date}</p>
    },
  },
  {
    title: "View Documents",
    key: "view_documents",
    render: (text, record) => <ViewDocuments {...{ text, record }} />,
  },
  {
    title: "Actions",
    key: "more",
    render: (text, record) => <MoreAction {...{ text, record }} />,
  },
]

export const DocumentsRequestTable: React.FC = () => {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetAllDocumentRequestsQuery({
    authToken: token as string,
  })
  console.log(data)

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
