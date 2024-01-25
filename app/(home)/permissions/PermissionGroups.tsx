"use client"
import { H4 } from "@/components/Typography"
import { Avatar, Button, Card, Tooltip, Popover, Empty } from "antd"
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
import { PermissionCard } from "./PermissionCard"
import { useGetPermissionGroupsQuery } from "@/services/permissions.service"
import { Security } from "@mui/icons-material"

export const PermissionGroups = () => {
  const [openPopover, setOpenPopover] = React.useState<boolean>(false)
  const { token } = useAuthToken()
  const { data, isLoading } = useGetPermissionGroupsQuery({
    authToken: token as string,
  })
  console.log(data)
  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <div className="my-7">
          {data?.length === 0 ? (
            <Empty
              description={<p className="text-xl">No Permission Group</p>}
              image={<Security color="primary" className="text-[10rem]" />}
            />
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data?.map((group) => (
                  <PermissionCard group={group} key={group._id} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
