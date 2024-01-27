"use client"
import React from "react"
import { Button, Popover, Table, Tooltip, message } from "antd"
import type { ColumnsType } from "antd/es/table"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { useAuthToken } from "@/hooks/useAuthToken"
import { PermissionGroupI, privilege } from "@/interfaces/permissions"
import {
  useGetPermissionGroupsQuery,
  useUpdatePermissionGroupMutation,
} from "@/services/permissions.service"

const MoreAction: React.FC<{
  text: any
  record: privilege
  group_id: string
}> = ({ text, record, group_id }) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useUpdatePermissionGroupMutation()
  const { refetch } = useGetPermissionGroupsQuery({
    authToken: token as string,
  })

  const updateGroup = async () => {
    try {
      const response = await mutate({
        authToken: token as string,
        action: "remove",
        permission_group_id: group_id,
        priviledge_id: record.id,
        route: "restrictedpriviledges",
      }).unwrap()
      await refetch()
      message.success(`Restricted Privilege removed group`)
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
                  Remove Restricted Privilege from Group
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

export const RestrictedPrivilegeTable: React.FC<{
  group_id: string
  group: PermissionGroupI
}> = ({ group_id, group }) => {
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
      render: (text, record) => (
        <MoreAction text={text} record={record} group_id={group_id} />
      ),
    },
  ]
  const { token } = useAuthToken()

  return (
    <>
      <Table
        columns={columns}
        dataSource={group.restricted_priviledges.slice(0).reverse()}
        pagination={{
          pageSizeOptions: ["20", "30", "50"],
        }}
      />
    </>
  )
}
