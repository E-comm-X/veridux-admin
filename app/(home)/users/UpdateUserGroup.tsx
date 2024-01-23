"use client"
import { Button, Form, Input, Modal, message } from "antd"
import React, { useState } from "react"
import {
  useUpdateUserGroupMutation,
  useGetUserGroupsQuery,
} from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined, EditOutlined } from "@ant-design/icons"

export const UpdateUserGroup = ({
  group_id,
  name,
}: {
  group_id: string
  name: string
}) => {
  const [open, setOpen] = useState(false)
  const [group_name, setGroup_name] = useState(name)

  const { token } = useAuthToken()
  const { refetch } = useGetUserGroupsQuery({ authToken: token as string })
  const [mutate, { isLoading }] = useUpdateUserGroupMutation()
  const create = async () => {
    try {
      const res = await mutate({
        authToken: token as string,
        group_name,
        group_id,
      }).unwrap()
      console.log(res)
      await refetch()
      message.success("User Group Updated Successfully")
      setOpen(false)
    } catch (error: any) {
      message.error(error.data.message)
    }
  }

  return (
    <>
      <Button type="text" icon={<EditOutlined />} onClick={() => setOpen(true)}>
        Edit
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        title={"Update User Group"}
      >
        <Form className="mt-5" onFinish={create}>
          <Form.Item>
            <Input
              size="large"
              onChange={(e) => setGroup_name(e.target.value)}
              required
              className="w-full"
              placeholder="User Group Name"
              value={group_name}
            />
          </Form.Item>
          <Button
            type="primary"
            className="bg-primary w-full"
            size="large"
            htmlType="submit"
            disabled={/^\s*$/.test(group_name) || isLoading}
          >
            {isLoading ? <LoadingOutlined /> : "Update User Group"}
          </Button>
        </Form>
      </Modal>
    </>
  )
}
