"use client"
import React from "react"
import { Button, Drawer } from "antd"
import { UsersTable } from "./UsersTable"
import { EyeOutlined } from "@ant-design/icons"

export const UserGroup = ({ name, id }: { name: string; id: string }) => {
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <>
      <Button type="text" icon={<EyeOutlined />} onClick={() => setOpen(true)}>
        View Group
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        width={"100%"}
        title={name}
      >
        <div className="mb-5">
          <Button className="bg-primary" type="primary">
            Add Member
          </Button>
        </div>
        <UsersTable group_id={id} />
      </Drawer>
    </>
  )
}
