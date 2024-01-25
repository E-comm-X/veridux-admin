"use client"
import { Button, Form, Input, Modal, Select, message } from "antd"
import React, { useEffect, useState } from "react"
import {
  useCreateUserGroupMutation,
  useGetUserGroupsQuery,
} from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined } from "@ant-design/icons"
import {
  useCreatePermissionGroupMutation,
  useGetPermissionGroupsQuery,
  useGetPrivilegesQuery,
} from "@/services/permissions.service"
import { privilege } from "@/interfaces/permissions"

const transformData = (data: privilege[]) => {
  const newData =
    data &&
    data?.map((data) => ({
      label: `${data.name}`.toUpperCase(),
      value: data._id,
    }))
  return newData
}

export const AddGroup = () => {
  const [open, setOpen] = useState(false)
  const [group_name, setGroup_name] = useState("")
  const { token } = useAuthToken()
  const { refetch } = useGetPermissionGroupsQuery({
    authToken: token as string,
  })
  const { data: privileges_, isLoading: loadingPrivileges } =
    useGetPrivilegesQuery({
      authToken: token as string,
    })

  const privilegeOptions = transformData(privileges_ as privilege[])
  const [privileges, setPrivileges] = useState<string[]>([])
  const [mutate, { isLoading }] = useCreatePermissionGroupMutation()
  const create = async () => {
    try {
      const res = await mutate({
        authToken: token as string,
        name: group_name,
        allowed_priviledges: privileges,
      }).unwrap()
      console.log(res)
      await refetch()
      message.success("Permission Group Created Successfully")
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
        Create Permission Group
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        title={"Add New Permission Group"}
      >
        <Form className="mt-5" onFinish={create}>
          <Form.Item>
            <Input
              size="large"
              onChange={(e) => setGroup_name(e.target.value)}
              required
              className="w-full"
              placeholder="Permission Group Name"
            />
          </Form.Item>
          <Form.Item>
            {loadingPrivileges ? (
              <LoadingOutlined />
            ) : (
              <Select
                options={privilegeOptions}
                placeholder={"Previlege"}
                size="large"
                value={privileges}
                onChange={(value) => setPrivileges(value)}
                mode="multiple"
              />
            )}
          </Form.Item>
          <Button
            type="primary"
            className="bg-primary w-full"
            size="large"
            htmlType="submit"
            disabled={
              /^\s*$/.test(group_name) || isLoading || privileges.length === 0
            }
          >
            {isLoading ? <LoadingOutlined /> : "Create Permission Group"}
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
