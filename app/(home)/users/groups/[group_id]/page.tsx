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
  const [open, setOpen] = React.useState<boolean>(false)
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useAddUserToGroupMutation()
  const { data, isLoading: gettingGroupInfo } = useGetUserGroupsQuery({
    authToken: token as string,
    group_id,
  })
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
      setOpen(false)
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
          <h2 className="text-2xl text-black font-bold mt-3 mb-7">
            {data?.data?.user_group[0]?.group_name} Group
          </h2>
          <UsersTable group_id={group_id} />
        </>
      )}
    </div>
  )
}

export default UserGroupPage
