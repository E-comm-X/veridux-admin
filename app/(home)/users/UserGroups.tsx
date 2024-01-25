"use client"
import { H4 } from "@/components/Typography"
import { Avatar, Button, Card, Tooltip, Popover } from "antd"
import React from "react"
import {
  LoadingOutlined,
  MoreOutlined,
  AntDesignOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons"
import { IconButton } from "@mui/material"
import { useGetUserGroupsQuery } from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { UsersCard } from "./UsersCard"

export const UserGroups = () => {
  const [openPopover, setOpenPopover] = React.useState<boolean>(false)
  const { token } = useAuthToken()
  const { data, isLoading } = useGetUserGroupsQuery({
    authToken: token as string,
  })
  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <div className="my-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data?.data.user_group.map((group) => (
              <UsersCard group={group} key={group._id} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
