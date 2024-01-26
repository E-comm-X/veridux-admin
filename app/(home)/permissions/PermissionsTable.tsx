"use client"
import React from "react"
import { Button, Popover, Table, Tooltip, message, Tabs } from "antd"
import type { ColumnsType } from "antd/es/table"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import type { TabsProps } from "antd"

import {
  useGetUsersInGroupQuery,
  useRemoveUserFromGroupMutation,
} from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { PermissionGroupI, privilege } from "@/interfaces/permissions"

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
  const [mutate, { isLoading }] = useRemoveUserFromGroupMutation()
  const { refetch, isLoading: removingUser } = useGetUsersInGroupQuery({
    group_id,
    authToken: token as string,
  })

  const removeUser = async ({ user_id }: { user_id: string }) => {
    try {
      const response = await mutate({
        user_id,
        group_id,
        authToken: token as string,
      }).unwrap()
      message.success(`${record.name} removed from group`)
      setOpen(false)
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
                  className="w-full text-xs"
                  danger
                  onClick={async () =>
                    await removeUser({
                      user_id: record._id,
                    })
                  }
                >
                  Remove Privilege from Group
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

export const PermissionsTable: React.FC<{
  group_id: string
  group: PermissionGroupI
}> = ({ group_id, group }) => {
  console.log(group)
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

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: "Allowed Privileges",
      children: (
        <Table
          columns={columns}
          dataSource={group.allowed_priviledges.slice(0).reverse()}
          rowSelection={{}}
          pagination={{
            pageSizeOptions: ["20", "30", "50"],
          }}
        />
      ),
    },
    {
      key: "2",
      label: "Restricted Privileges",
      children: (
        <Table
          columns={columns}
          dataSource={group.restricted_priviledges.slice(0).reverse()}
          rowSelection={{}}
          pagination={{
            pageSizeOptions: ["20", "30", "50"],
          }}
        />
      ),
    },
  ]

  return (
    <>
      <Tabs items={tabItems} />
    </>
  )
}
