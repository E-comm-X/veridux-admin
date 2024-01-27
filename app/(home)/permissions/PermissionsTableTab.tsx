"use client"
import React from "react"
import { Tabs } from "antd"
import type { TabsProps } from "antd"
import { useAuthToken } from "@/hooks/useAuthToken"
import { PermissionGroupI } from "@/interfaces/permissions"
import { AllowedPrivilegeTable } from "./AllowedPrivilegeTab"
import { RestrictedPrivilegeTable } from "./RestrictedPrivilegeTable"

export const PermissionsTable: React.FC<{
  group_id: string
  group: PermissionGroupI
}> = ({ group_id, group }) => {
  const { token } = useAuthToken()

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: "Allowed Privileges",
      children: <AllowedPrivilegeTable group={group} group_id={group_id} />,
    },
    {
      key: "2",
      label: "Restricted Privileges",
      children: <RestrictedPrivilegeTable group={group} group_id={group_id} />,
    },
  ]

  return (
    <>
      <Tabs items={tabItems} />
    </>
  )
}
