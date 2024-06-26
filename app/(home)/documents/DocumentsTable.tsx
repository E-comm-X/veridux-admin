"use client"
import React from "react"
import {
  Avatar,
  Button,
  Popover,
  Select,
  Skeleton,
  Space,
  Table,
  Tag,
  Tooltip,
  message,
} from "antd"
import type { ColumnsType } from "antd/es/table"
import {
  useGetAllStoresQuery,
  useToggleStoreStatusMutation,
} from "@/services/store.service"
import {
  useGetAllDocumentRequestsQuery,
  useUpdateDocumentMutation,
} from "@/services/documents.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { StoreI } from "@/interfaces/store"
import { VendorI } from "@/interfaces/product"
import { useAuthToken } from "@/hooks/useAuthToken"
import { DeleteOutlined, EditOutlined, PictureAsPdf } from "@mui/icons-material"
import { UserOutlined } from "@ant-design/icons"
import Link from "next/link"
import { DocumentI, DocumentRequestI } from "@/interfaces/documents"
import { useGetUserQuery } from "@/services/usergroup.service"

const SubmittedBy: React.FC<{ text: any; record: DocumentI }> = ({
  text,
  record,
}) => {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetUserQuery({
    authToken: token as string,
    user_id: record.user,
  })
  return (
    <>
      <Skeleton loading={isLoading} active avatar />
      {isLoading ? (
        <></>
      ) : (
        <div className="flex items-center gap-3">
          <Avatar size={"default"} src={data?.data.user.profile_picture}>
            <UserOutlined />
          </Avatar>
          <p className="capitalize">{`${data?.data.user.firstname} ${data?.data.user.lastname}`}</p>
        </div>
      )}
    </>
  )
}

const MoreAction: React.FC<{ text: any; record: DocumentI }> = ({
  text,
  record,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useUpdateDocumentMutation()
  const { refetch, isLoading: loadingStores } = useGetAllDocumentRequestsQuery({
    authToken: token as string,
  })

  const updateDocument = async (documents: {
    documents_to_approve?: string[]
    documents_to_reject?: string[]
  }) => {
    try {
      const response = await mutate({
        ...documents,
        authToken: token as string,
      }).unwrap()
      message.success(response.message)
      await refetch()
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
                  onClick={async () =>
                    await updateDocument({
                      documents_to_approve: [record._id],
                    })
                  }
                >
                  Approve Document
                </Button>
                <Button
                  type="default"
                  danger
                  className="w-full text-xs"
                  onClick={async () =>
                    await updateDocument({
                      documents_to_reject: [record._id],
                    })
                  }
                >
                  Reject Document
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

const columns: ColumnsType<DocumentI> = [
  {
    title: "Document URL",
    dataIndex: "file_url",
    key: "file_url",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <PictureAsPdf color="error" />
        <Tooltip title={record.file_url}>
          <Link href={text} className="text-primary underline" target="_blank">
            View Document
          </Link>
        </Tooltip>
      </div>
    ),
  },
  {
    title: "Submitted By",
    dataIndex: "user",
    key: "user",
    render: (text, record) => <SubmittedBy {...{ text, record }} />,
  },

  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <p className="uppercase">{record.type.split("_").join(" ")}</p>
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
    title: "Company Size",
    dataIndex: "company_size",
    key: "company_size",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <p>{record.company_size ? text : "-"}</p>
      </div>
    ),
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
    title: "Actions",
    key: "more",
    render: (text, record) => <MoreAction {...{ text, record }} />,
  },
]

export const DocumentsTable: React.FC<{ documents: DocumentI[] }> = ({
  documents,
}) => {
  const { token } = useAuthToken()

  return (
    <>
      <Table
        columns={columns}
        dataSource={documents?.slice(0).reverse()}
        // rowSelection={{}}
      />
    </>
  )
}
