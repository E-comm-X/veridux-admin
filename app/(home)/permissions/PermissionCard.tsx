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
import { useAuthToken } from "@/hooks/useAuthToken"
import { userGroupI } from "@/interfaces/userGroup"
import { UpdatePermissionGroup } from "./UpdatePermissionGroup"
import { useGetUsersInGroupQuery } from "@/services/usergroup.service"
import { PermissionGroup } from "./PermissionGroup"
import { PermissionGroupI } from "@/interfaces/permissions"

export const PermissionCard: React.FC<{ group: PermissionGroupI }> = ({
  group,
}) => {
  const [openPopover, setOpenPopover] = React.useState<boolean>(false)
  const { token } = useAuthToken()
  // const { data, isLoading } = useGetUsersInGroupQuery({
  //   group_id: group._id,
  //   authToken: token as string,
  // })
  const disabled =
    group.name.toLowerCase() === "enduser" ||
    group.name.toLowerCase() === "vendor"
  return (
    <Card className="w-full" key={group._id}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <H4 className="mb-2">{group.name}</H4>
          <Popover
            trigger={"hover"}
            open={openPopover}
            onOpenChange={(visible) => setOpenPopover(!openPopover)}
            content={
              <div className="flex flex-col gap-2">
                <PermissionGroup name={group.name} id={group._id} />
                <UpdatePermissionGroup group_id={group._id} name={group.name} />
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
          Permission group for <b className="text-primary">{group.name}`</b>
        </p>
        {/* <div className="mt-5">
          {isLoading ? (
            <LoadingOutlined />
          ) : (
            <Avatar.Group
              maxCount={10}
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
              }}
            >
              {data?.data.users.map((user) => (
                <Tooltip title={user.firstname} key={user._id}>
                  <Avatar
                    size="default"
                    src={user.profile_picture}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
              ))}
            </Avatar.Group>
          )}
        </div> */}
      </div>
    </Card>
  )
}
