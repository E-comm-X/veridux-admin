"use client"
import React from "react"
import { LoadingOutlined } from "@ant-design/icons"
import { useGetUserGroupsQuery } from "@/services/usergroup.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { UsersCard } from "./UsersCard"

export const UserGroups = () => {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetUserGroupsQuery({
    authToken: token as string,
  })
  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <div className="my-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data?.data.user_group.map((group) => (
              <UsersCard group={group} key={group._id} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
