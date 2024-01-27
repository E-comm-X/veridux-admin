"use client"
import { Button, Form, Input, Modal, Select, message } from "antd"
import React, { useState } from "react"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined } from "@ant-design/icons"
import {
  useCreatePrivilegeMutation,
  useGetPrivilegesQuery,
  useGetPermissionGroupsQuery,
} from "@/services/permissions.service"
import { PermissionGroupI, privilege } from "@/interfaces/permissions"

const transformData = (data: PermissionGroupI[]) => {
  const newData =
    data &&
    data?.map((data) => ({
      label: `${data.name}`.toUpperCase(),
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
  const { refetch } = useGetPrivilegesQuery({
    authToken: token as string,
  })
  const {
    data: groups,
    isLoading: loadingGroups,
    refetch: refetchGroups,
  } = useGetPermissionGroupsQuery({
    authToken: token as string,
  })

  const permittedGroupsOptions = transformData(groups as PermissionGroupI[])
  const [permitted_groups, setPermittedGroups] = useState<string[]>([])
  const [mutate, { isLoading }] = useCreatePrivilegeMutation()
  const create = async () => {
    try {
      const res = await mutate({
        authToken: token as string,
        name: name,
        route: route,
        description: description,
        method: method,
        permitted_groups: permitted_groups,
      }).unwrap()
      console.log(res)
      await refetch()
      await refetchGroups()
      message.success("Privilege Created Successfully")
      setOpen(false)
    } catch (error: any) {
      message.error(error.data.message)
    }
  }

  return (
    <div>
      <Button
        size="large"
        type="primary"
        className="bg-primary"
        onClick={() => setOpen(true)}
      >
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
            <Select
              size="large"
              options={[
                { value: "GET", label: "GET" },
                { value: "POST", label: "POST" },
                { value: "PATCH", label: "PATCH" },
                { value: "DELETE", label: "DELETE" },
              ]}
              onChange={(value) => setMethod(value.toUpperCase())}
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
            {loadingGroups ? (
              <LoadingOutlined />
            ) : (
              <Select
                options={permittedGroupsOptions}
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
              isLoading
            }
          >
            {isLoading ? <LoadingOutlined /> : "Create Privilege"}
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
