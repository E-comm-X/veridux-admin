"use client"
import { H4 } from "@/components/Typography"
import { Avatar, Button, Card, Tooltip, Popover, message } from "antd"
import React from "react"
import {
  LoadingOutlined,
  MoreOutlined,
  DeleteOutlined,
} from "@ant-design/icons"
import { IconButton } from "@mui/material"
import { useAuthToken } from "@/hooks/useAuthToken"
import { UpdatePermissionGroup } from "./UpdatePermissionGroup"
import { PermissionGroup } from "./PermissionGroup"
import { PermissionGroupI } from "@/interfaces/permissions"
import {
  useDeletePermissionGroupMutation,
  useGetPermissionGroupsQuery,
} from "@/services/permissions.service"
import { Security } from "@mui/icons-material"

export const PermissionCard: React.FC<{ group: PermissionGroupI }> = ({
  group,
}) => {
  const [openPopover, setOpenPopover] = React.useState<boolean>(false)
  const { token } = useAuthToken()
  const { refetch } = useGetPermissionGroupsQuery({
    authToken: token as string,
  })
  const [mutate, { isLoading }] = useDeletePermissionGroupMutation()
  const deleteGroup = async () => {
    try {
      const res = await mutate({
        permission_group_id: group._id,
        authToken: token as string,
      }).unwrap()
      await refetch()
      message.success(res.message)
    } catch (error: any) {
      message.error(error.data.message)
    }
  }
  const disabled =
    group.name.toLowerCase() === "enduser" ||
    group.name.toLowerCase() === "vendor" ||
    isLoading
  return (
    <Card className="w-full" key={group._id}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mb-2">
            <Security color="success" />
            <H4>{group.name}</H4>
          </div>
          <Popover
            trigger={"hover"}
            open={openPopover}
            onOpenChange={(visible) => setOpenPopover(!openPopover)}
            content={
              <div className="flex flex-col gap-2">
                <PermissionGroup
                  name={group.name}
                  id={group._id}
                  group={group}
                />
                <UpdatePermissionGroup group_id={group._id} name={group.name} />
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  disabled={disabled}
                  onClick={deleteGroup}
                >
                  {isLoading ? <LoadingOutlined /> : "Delete"}
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
        <div className="mt-5">
          <p className="text-primary text-md font-semibold">
            Allowed Privileges: {group.allowed_priviledges.length}
          </p>
          <p className="text-error-700 text-md font-semibold">
            Restricted Privileges: {group.restricted_priviledges.length}
          </p>
        </div>
      </div>
    </Card>
  )
}
