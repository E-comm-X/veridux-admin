"use client"
import React, { useEffect, useState } from "react"
import {
  Avatar,
  Button,
  Input,
  Popover,
  Space,
  Table,
  Tag,
  message,
} from "antd"
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
import { ArrowOutwardOutlined, More, Search } from "@mui/icons-material"
import Link from "next/link"

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
            // icon={<UserOutlined />}
            className="bg-primary uppercase"
          >
            {record?.firstname[0] || "N"}
            {record?.lastname[0] || "/A"}
          </Avatar>
          <p className="capitalize">
            {record.firstname} {record.lastname}
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
    // {
    //   title: "Account Reference",
    //   dataIndex: "account_reference",
    //   key: "account_reference",
    // },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
      render: (text) => <p>{text || "-"}</p>,
    },

    {
      title: "Wallet",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <div>
          <Link
            href={`/users/wallet/${record._id}`}
            className="text-primary underline"
          >
            <span>View wallet</span>
            <ArrowOutwardOutlined className="inline text-sm text-primary" />
          </Link>
        </div>
      ),
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
      title: "Actions",
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
  const [dataState, setDataState] = useState<userI[]>([])

  useEffect(() => {
    if (data) {
      setDataState(data.data.users)
    }
  }, [data])

  const searchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    const oldData = data?.data?.users
    const newData = oldData?.filter((user) => {
      const name = `${user.firstname} ${user.lastname}`.toLowerCase()
      const email = user.email.toLowerCase()
      return name.includes(value) || email.includes(value)
    })
    setDataState(newData as userI[])
  }

  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <>
          <div className="w-full mb-4">
            <Input
              className="md:w-[350px] lg:w-[450px] w-full md:h-[3rem]"
              size="large"
              placeholder="Search user with name or email"
              prefix={<Search />}
              onChange={searchUser}
            />
          </div>
          <Table
            columns={columns}
            dataSource={dataState.slice(0).reverse()}
            pagination={{
              pageSizeOptions: ["20", "30", "50"],
              pageSize: 20,
            }}
          />
        </>
      )}
    </>
  )
}
