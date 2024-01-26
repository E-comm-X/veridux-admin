"use client"
import { Button, Form, Input, Modal, Select, message } from "antd"
import React, { useState } from "react"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined } from "@ant-design/icons"
import {
  useCreatePermissionGroupMutation,
  useGetPermissionGroupsQuery,
  useGetPrivilegesQuery,
} from "@/services/permissions.service"
import { privilege } from "@/interfaces/permissions"
import { useGetUserGroupsQuery } from "@/services/usergroup.service"
import { userGroupI } from "@/interfaces/userGroup"

const transformData = (data: userGroupI[]) => {
  const newData =
    data &&
    data?.map((data) => ({
      label: `${data.group_name}`.toUpperCase(),
      value: data._id,
    }))
  return newData
}

export const AddPrivilege = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [route, setRoute] = useState("")
  const [description, setDescription] = useState("")
  const [method, setMethod] = useState("")

  const { token } = useAuthToken()
  const { refetch } = useGetPermissionGroupsQuery({
    authToken: token as string,
  })
  const { data: userGroups, isLoading: loadingUserGroups } =
    useGetUserGroupsQuery({
      authToken: token as string,
    })

  const userGroupOptions = transformData(
    userGroups?.data.user_group as userGroupI[]
  )
  const [permitted_groups, setPermittedGroups] = useState<string[]>([])
  const [mutate, { isLoading }] = useCreatePermissionGroupMutation()
  const create = async () => {
    try {
      const res = await mutate({
        authToken: token as string,
        name: name,
        allowed_priviledges: permitted_groups,
      }).unwrap()
      console.log(res)
      await refetch()
      message.success("Privilege Created Successfully")
      setOpen(false)
    } catch (error: any) {
      message.error(error.data.message)
    }
  }

  return (
    <div>
      <Button size="large" onClick={() => setOpen(true)}>
        Create Privilege
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        title={"Add New Privilege"}
      >
        <Form className="mt-5" onFinish={create}>
          <Form.Item>
            <Input
              size="large"
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
              placeholder="Privilege Name"
            />
          </Form.Item>
          <Form.Item>
            <Input
              size="large"
              onChange={(e) => setRoute(e.target.value)}
              required
              className="w-full"
              placeholder="Route"
            />
          </Form.Item>
          <Form.Item>
            <Input
              size="large"
              onChange={(e) => setMethod(e.target.value.toUpperCase())}
              required
              className="w-full"
              placeholder="Method"
            />
          </Form.Item>

          <Form.Item>
            <Input
              size="large"
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full"
              placeholder="Description"
            />
          </Form.Item>
          <Form.Item>
            {loadingUserGroups ? (
              <LoadingOutlined />
            ) : (
              <Select
                options={userGroupOptions}
                placeholder={"Permitted Groups"}
                size="large"
                value={permitted_groups}
                onChange={(value) => setPermittedGroups(value)}
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
              /^\s*$/.test(name) ||
              /^\s*$/.test(route) ||
              /^\s*$/.test(description) ||
              /^\s*$/.test(method) ||
              isLoading ||
              permitted_groups.length === 0
            }
          >
            {isLoading ? <LoadingOutlined /> : "Create Privilege"}
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
