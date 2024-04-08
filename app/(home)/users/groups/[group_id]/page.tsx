"use client"
import React from "react"
import { Button, Drawer, Modal, Select, message } from "antd"
import { UsersTable } from "../UsersTable"
import { EyeOutlined, LoadingOutlined } from "@ant-design/icons"
import {
  useAddUserToGroupMutation,
  useGetUserGroupsQuery,
  useGetUsersInGroupQuery,
} from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { userI } from "@/interfaces/userGroup"
import { useParams } from "next/navigation"
import { GoBack } from "@/components/GoBack"

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

const UserGroupPage = () => {
  const { group_id } = useParams() as { group_id: string }
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useAddUserToGroupMutation()
  const { data, isLoading: gettingGroupInfo } = useGetUserGroupsQuery({
    authToken: token as string,
    group_id,
  })
  const { data: endusersData, isLoading: gettingEndUsers } =
    useGetUsersInGroupQuery({
      group_id: "64b073e736f2c0f252254ae8",
      authToken: token as string,
    })
  const endusers = transformData(endusersData?.data.users as [])
  const { refetch, isLoading: gettingUsers } = useGetUsersInGroupQuery({
    group_id,
    authToken: token as string,
  })

  const [user_id, setUser_id] = React.useState<string>("")

  const addUser = async () => {
    try {
      const response = await mutate({
        user_id,
        group_id,
        authToken: token as string,
      }).unwrap()
      message.success(`User added to group`)
      await refetch()
    } catch (error: any) {
      message.error(error.data.message)
    }
  }
  const loading = gettingGroupInfo || gettingUsers
  return (
    <div>
      <GoBack />
      {loading ? (
        <div className="flex gap-3 items-center">
          <LoadingOutlined />
          <span>Loading Group</span>
        </div>
      ) : (
        <>
          <div className="flex gap-3 md:flex-row flex-col md:justify-between md:items-center">
            <h2 className="text-2xl text-black font-bold mt-3 mb-7">
              {data?.data?.user_group[0]?.group_name} Group
            </h2>
            <div>
              {data?.data?.user_group[0]?.group_name.toLowerCase() !==
                "enduser" && (
                <Button
                  className="bg-primary"
                  type="primary"
                  onClick={() => setOpenModal(true)}
                >
                  + Add Member
                </Button>
              )}
            </div>
          </div>
          <UsersTable group_id={group_id} />

          {/* ADD USER MODAL */}
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
      )}
    </div>
  )
}

export default UserGroupPage
