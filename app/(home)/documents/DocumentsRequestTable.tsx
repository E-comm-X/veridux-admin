"use client"
import React from "react"
import {
  Avatar,
  Button,
  Drawer,
  Popover,
  Skeleton,
  Table,
  Tag,
  message,
} from "antd"
import type { ColumnsType } from "antd/es/table"
import {
  useGetAllDocumentRequestsQuery,
  useUpdateDocumentMutation,
} from "@/services/documents.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { useAuthToken } from "@/hooks/useAuthToken"
import { UserOutlined } from "@ant-design/icons"
import { DocumentRequestI } from "@/interfaces/documents"
import { DocumentsTable } from "./DocumentsTable"
import { useGetUserQuery } from "@/services/usergroup.service"

const SubmittedBy: React.FC<{ text: any; record: DocumentRequestI }> = ({
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

const MoreAction: React.FC<{ text: any; record: DocumentRequestI }> = ({
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
                      documents_to_approve: record.documents.map(
                        (doc) => doc._id
                      ),
                    })
                  }
                >
                  Approve All Documents
                </Button>
                <Button
                  type="default"
                  danger
                  className="w-full text-xs"
                  onClick={async () =>
                    await updateDocument({
                      documents_to_reject: record.documents.map(
                        (doc) => doc._id
                      ),
                    })
                  }
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
      <Button type="link" onClick={() => setOpen(true)}>
        View Documents
      </Button>
      <div className="document-drawer">
        <Drawer
          title="Document"
          placement="right"
          // closable={false}
          onClose={() => setOpen(false)}
          open={open}
          width={"100%"}
        >
          <DocumentsTable documents={record.documents} />
        </Drawer>
      </div>
    </>
  )
}

const columns: ColumnsType<DocumentRequestI> = [
  {
    title: "Submitted By",
    dataIndex: "user",
    key: "user",
    render: (text, record) => <SubmittedBy {...{ text, record }} />,
  },

  // {
  //   title: "Status",
  //   dataIndex: "status",
  //   key: "status",
  //   render: (text, record) => {
  //     const status =
  //       record.status.toLowerCase() === "approved" ? (
  //         <Tag color="success" className="px-3 py-1">
  //           Approved
  //         </Tag>
  //       ) : record.status.toLowerCase() === "pending" ? (
  //         <Tag color="warning" className="px-3 py-1">
  //           Pending
  //         </Tag>
  //       ) : (
  //         <Tag color="error" className="px-3 py-1">
  //           Rejected
  //         </Tag>
  //       )
  //     return <p>{status}</p>
  //   },
  // },

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
