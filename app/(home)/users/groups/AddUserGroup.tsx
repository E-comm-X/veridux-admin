"use client"
import { Button, Form, Input, Modal, message } from "antd"
import React, { useState } from "react"
import {
  useCreateUserGroupMutation,
  useGetUserGroupsQuery,
} from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined } from "@ant-design/icons"

export const AddUserGroup = () => {
  const [open, setOpen] = useState(false)
  const [group_name, setGroup_name] = useState("")
  const { token } = useAuthToken()
  const { refetch } = useGetUserGroupsQuery({ authToken: token as string })
  const [mutate, { isLoading }] = useCreateUserGroupMutation()
  const create = async () => {
    try {
      const res = await mutate({
        authToken: token as string,
        group_name,
      }).unwrap()
      console.log(res)
      await refetch()
      message.success("User Group Created Successfully")
      setOpen(false)
    } catch (error: any) {
      message.error(error.data.message)
    }
  }

  return (
    <div>
      <Button
        type="primary"
        className="bg-primary"
        size="large"
        onClick={() => setOpen(true)}
      >
        Create User Group
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        title={"Add new User Group"}
      >
        <Form className="mt-5" onFinish={create}>
          <Form.Item>
            <Input
              size="large"
              onChange={(e) => setGroup_name(e.target.value)}
              required
              className="w-full"
              placeholder="User Group Name"
            />
          </Form.Item>
          <Button
            type="primary"
            className="bg-primary w-full"
            size="large"
            htmlType="submit"
            disabled={/^\s*$/.test(group_name) || isLoading}
          >
            {isLoading ? <LoadingOutlined /> : "Create User Group"}
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
