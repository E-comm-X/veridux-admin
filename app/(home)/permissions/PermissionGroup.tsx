"use client"
import React from "react"
import { Button, Drawer, Modal, Select, message } from "antd"
import { PermissionsTable } from "./PermissionsTable"
import { EyeOutlined } from "@ant-design/icons"
import {
  useAddUserToGroupMutation,
  useGetUsersInGroupQuery,
} from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { userI } from "@/interfaces/userGroup"
import { PermissionGroupI, privilege } from "@/interfaces/permissions"

const transformData = (
  data: { firstname: string; lastname: string; _id: string }[]
) => {
  const newData =
    data &&
    data?.map((data) => ({
      label: `${data.firstname} ${data.lastname}`.toUpperCase(),
      value: data._id,
    }))
  console.log(data)
  return newData
}

export const PermissionGroup = ({
  name,
  id,
  group,
}: {
  name: string
  id: string
  group: PermissionGroupI
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useAddUserToGroupMutation()
  const { refetch, isLoading: gettingUsers } = useGetUsersInGroupQuery({
    group_id: id,
    authToken: token as string,
  })
  const { data, isLoading: gettingEndUsers } = useGetUsersInGroupQuery({
    group_id: "64b073e736f2c0f252254ae8",
    authToken: token as string,
  })
  const endusers = transformData(data?.data.users as [])
  const [user_id, setUser_id] = React.useState<string>("")

  const addUser = async () => {
    try {
      const response = await mutate({
        user_id,
        group_id: id,
        authToken: token as string,
      }).unwrap()
      message.success(`User added to group`)
      setOpen(false)
      await refetch()
    } catch (error: any) {
      message.error(error.data.message)
    }
  }

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
          {name.toLowerCase() !== "enduser" && (
            <Button
              className="bg-primary"
              type="primary"
              onClick={() => setOpenModal(true)}
            >
              Add Member
            </Button>
          )}
        </div>
        <PermissionsTable group_id={id} group={group} />
      </Drawer>
      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        title={`Add New User to ${name}`}
        footer={null}
      >
        <div className="mt-5 flex flex-col gap-3">
          <Select
            options={endusers}
            loading={gettingEndUsers}
            className="w-full"
            showSearch
            placeholder="Select a User"
            size="large"
            onChange={(value) => setUser_id(value as string)}
          />
          <Button
            type="primary"
            className="w-full bg-primary"
            size="large"
            disabled={isLoading || user_id === ""}
            onClick={addUser}
          >
            {isLoading ? "Adding User..." : "Add User"}
          </Button>
        </div>
      </Modal>
    </>
  )
}
