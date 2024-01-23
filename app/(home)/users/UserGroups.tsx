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

export const UserGroups = () => {
  const [openPopover, setOpenPopover] = React.useState<boolean>(false)
  return (
    <div className="my-7">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="w-full">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <H4 className="mb-2">Admin Group</H4>
              <Popover
                trigger={"hover"}
                open={openPopover}
                onOpenChange={(visible) => setOpenPopover(!openPopover)}
                content={
                  <div className="flex flex-col gap-2">
                    <Button type="text" icon={<EditOutlined />}>
                      Edit
                    </Button>
                    <Button type="text" danger icon={<DeleteOutlined />}>
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
              The primary user group responsible for managing the application.
            </p>
            <div className="mt-5">
              <Avatar.Group
                maxCount={2}
                maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
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
      </div>
    </div>
  )
}
