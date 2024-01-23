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
import { userGroupI } from "@/interfaces/userGroup"
import { UpdateUserGroup } from "./UpdateUserGroup"

export const UsersCard: React.FC<{ group: userGroupI }> = ({ group }) => {
  const [openPopover, setOpenPopover] = React.useState<boolean>(false)
  const { token } = useAuthToken()
  const disabled =
    group.group_name.toLowerCase() === "enduser" ||
    group.group_name.toLowerCase() === "vendor"
  return (
    <Card className="w-full" key={group._id}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <H4 className="mb-2">{group.group_name}</H4>
          <Popover
            trigger={"hover"}
            open={openPopover}
            onOpenChange={(visible) => setOpenPopover(!openPopover)}
            content={
              <div className="flex flex-col gap-2">
                <UpdateUserGroup group_id={group._id} name={group.group_name} />
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  disabled={disabled}
                >
                  Delete
                </Button>
              </div>
            }
            placement="bottom"
          >
            <IconButton size="small">
              <MoreOutlined />
            </IconButton>
          </Popover>
        </div>
        <p>
          User group for <b className="text-primary">{group.group_name}`</b>
        </p>
        <div className="mt-5">
          <Avatar.Group
            maxCount={2}
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
          >
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{ backgroundColor: "#1677ff" }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        </div>
      </div>
    </Card>
  )
}
