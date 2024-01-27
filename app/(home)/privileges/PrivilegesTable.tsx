"use client"
import React from "react"
import { Button, Popover, Table, Tooltip, message } from "antd"
import type { ColumnsType } from "antd/es/table"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { useAuthToken } from "@/hooks/useAuthToken"
import { privilege } from "@/interfaces/permissions"
import {
  useDeletePrivilegeMutation,
  useGetPermissionGroupsQuery,
  useGetPrivilegesQuery,
} from "@/services/permissions.service"

const MoreAction: React.FC<{
  text: any
  record: privilege
}> = ({ text, record }) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useDeletePrivilegeMutation()
  const { refetch } = useGetPermissionGroupsQuery({
    authToken: token as string,
  })
  const { refetch: refetchPrivileges } = useGetPrivilegesQuery({
    authToken: token as string,
  })

  const updateGroup = async () => {
    try {
      const response = await mutate({
        authToken: token as string,
        privilege_id: record._id,
      }).unwrap()
      await refetchPrivileges()
      message.success(response.message)
      await refetch()
      setOpen(false)
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
                  className="w-full text-xs"
                  danger
                  onClick={updateGroup}
                >
                  Delete Privilege
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

const columns: ColumnsType<privilege> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <p className="capitalize">{record.name}</p>
      </div>
    ),
  },
  {
    title: "Route",
    dataIndex: "route",
    key: "route",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Method",
    dataIndex: "method",
    key: "method",
    render: (text, record) => (
      <p className="font-semibold uppercase">
        {record.method.toUpperCase() === "GET" ? (
          <span className="text-[#7AE582]">{text}</span>
        ) : record.method.toUpperCase() === "POST" ? (
          <span className="text-[#FAA613]">{text}</span>
        ) : record.method.toUpperCase() === "DELETE" ? (
          <span className="text-[#FF002B]">{text}</span>
        ) : record.method.toUpperCase() === "PATCH" ? (
          <span className="text-[#9D44B5]">{text}</span>
        ) : (
          record.method
        )}
      </p>
    ),
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text, record) => (
      <>
        <Tooltip title={text}>
          <p>{record.description.slice(0, 100)}...</p>
        </Tooltip>
      </>
    ),
  },

  {
    title: "Actions",
    key: "action",
    render: (text, record) => <MoreAction text={text} record={record} />,
  },
]
export const PrivilegesTable: React.FC<{}> = () => {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetPrivilegesQuery({
    authToken: token as string,
  })

  return (
    <>
      <Table
        columns={columns}
        loading={isLoading}
        dataSource={data?.slice(0).reverse()}
        pagination={{
          pageSizeOptions: ["20", "30", "50"],
        }}
      />
    </>
  )
}
