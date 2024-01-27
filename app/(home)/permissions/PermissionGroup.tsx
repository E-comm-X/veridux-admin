"use client"
import React, { useEffect, useState } from "react"
import { Button, Drawer, Modal, Select, message } from "antd"
import { PermissionsTable } from "./PermissionsTableTab"
import { EyeOutlined } from "@ant-design/icons"
import { useAuthToken } from "@/hooks/useAuthToken"
import { PermissionGroupI, privilege } from "@/interfaces/permissions"
import {
  useGetPermissionGroupsQuery,
  useGetPrivilegesQuery,
  useUpdatePermissionGroupMutation,
} from "@/services/permissions.service"

const transformData = (data: privilege[]) => {
  const newData =
    data &&
    data?.map((data) => ({
      label: `${data.name}`.toUpperCase(),
      value: data._id,
    }))
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
  const [openModal2, setOpenModal2] = React.useState<boolean>(false)
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useUpdatePermissionGroupMutation()
  const { refetch } = useGetPermissionGroupsQuery({
    authToken: token as string,
  })
  const { data, isLoading: gettingPrivileges } = useGetPrivilegesQuery({
    authToken: token as string,
  })
  const [privilegesOption, setPrivilegeOption] = useState(
    [] as { label: string; value: string }[]
  )
  const [restrictedOptions, setRestrictedOptions] = useState(
    [] as { label: string; value: string }[]
  )
  const [privilege_id, setPrivilege_id] = React.useState<string>("")

  const updateGroup = async (
    route: "allowedpriviledges" | "restrictedpriviledges"
  ) => {
    try {
      const response = await mutate({
        authToken: token as string,
        action: "add",
        permission_group_id: id,
        priviledge_id: privilege_id,
        route,
      }).unwrap()
      await refetch()
      message.success(`Privilege added to group`)
      setOpenModal(false)
      setOpenModal2(false)
    } catch (error: any) {
      message.error(error.data.message)
    }
  }

  useEffect(() => {
    if (data) {
      const options = transformData(data as privilege[])
      const restrictedOptions = transformData(group.restricted_priviledges)
      const allowedOptions = transformData(group.allowed_priviledges)

      setPrivilegeOption((prev) =>
        options.filter((option) => {
          const { value } = option
          const values = restrictedOptions.map((option) => option.value)
          if (!values.includes(value)) return option
        })
      )
      setRestrictedOptions((prev) =>
        options.filter((option) => {
          const { value } = option
          const values = allowedOptions.map((option) => option.value)
          if (!values.includes(value)) return option
        })
      )
    }
  }, [data])

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
        <div className="mb-5 flex gap-3">
          <Button
            className="bg-primary"
            type="primary"
            onClick={() => setOpenModal(true)}
          >
            Add Privilege to Group
          </Button>
          <Button onClick={() => setOpenModal2(true)}>
            Add Restricted Privilege to Group
          </Button>
        </div>
        <PermissionsTable group_id={id} group={group} />
      </Drawer>
      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        title={`Add New Privilege to ${name}`}
        footer={null}
      >
        <div className="mt-5 flex flex-col gap-3">
          <Select
            options={privilegesOption}
            loading={gettingPrivileges}
            className="w-full"
            showSearch
            placeholder="Select Privilege"
            size="large"
            onChange={(value) => setPrivilege_id(value as string)}
          />
          <Button
            type="primary"
            className="w-full bg-primary"
            size="large"
            disabled={isLoading || privilege_id === ""}
            onClick={async () => updateGroup("allowedpriviledges")}
          >
            {isLoading ? "Adding Privilege..." : "Add Privilege"}
          </Button>
        </div>
      </Modal>

      <Modal
        open={openModal2}
        onCancel={() => setOpenModal2(false)}
        title={`Add Restricted Privilege to ${name}`}
        footer={null}
      >
        <div className="mt-5 flex flex-col gap-3">
          <Select
            options={restrictedOptions}
            loading={gettingPrivileges}
            className="w-full"
            showSearch
            placeholder="Select Privilege"
            size="large"
            onChange={(value) => setPrivilege_id(value as string)}
          />
          <Button
            type="primary"
            className="w-full bg-primary"
            size="large"
            disabled={isLoading || privilege_id === ""}
            onClick={async () => updateGroup("restrictedpriviledges")}
          >
            {isLoading
              ? "Adding Restricted Privilege..."
              : "Add Restricted Privilege"}
          </Button>
        </div>
      </Modal>
    </>
  )
}
