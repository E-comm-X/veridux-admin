"use client"
import React from "react"
import { Avatar, Button, Popover, Space, Table, Tag, message } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useGetAllProductsQuery } from "@/services/product.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { ProductI } from "@/interfaces/product"
import { userI } from "@/interfaces/userGroup"
import { UserOutlined } from "@ant-design/icons"
import {
  useGetUsersInGroupQuery,
  useRemoveUserFromGroupMutation,
} from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { More } from "@mui/icons-material"

const MoreAction: React.FC<{ text: any; record: userI; group_id: string }> = ({
  text,
  record,
  group_id,
}) => {
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
      message.success(`${record.firstname} removed from group`)
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
                  Remove User from Group
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

export const UsersTable: React.FC<{ group_id: string }> = ({ group_id }) => {
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
      render: (text, record) => (
        <MoreAction text={text} record={record} group_id={group_id} />
      ),
    },
  ]
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
