"use client"
import { Empty } from "antd"
import React from "react"
import { LoadingOutlined } from "@ant-design/icons"

import { useAuthToken } from "@/hooks/useAuthToken"
import { PermissionCard } from "./PermissionCard"
import { useGetPermissionGroupsQuery } from "@/services/permissions.service"
import { Security } from "@mui/icons-material"

export const PermissionGroups = () => {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetPermissionGroupsQuery({
    authToken: token as string,
  })
  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <div className="my-7">
          {data?.length === 0 ? (
            <Empty
              description={<p className="text-xl">No Permission Group</p>}
              image={<Security color="primary" className="text-[10rem]" />}
            />
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data?.map((group) => (
                  <PermissionCard group={group} key={group._id} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
