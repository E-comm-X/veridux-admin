"use client"
import React from "react"
import { Menu } from "./Menu"
import { MobileMenu } from "./MobileMenu"
import { NavTab } from "./NavTab"
import { Logo } from "./Logo"
import { Avatar, Badge, Button, Drawer, Input, Skeleton } from "antd"
import {
  Close,
  ExpandMore,
  MenuOpen,
  Notifications,
  Search,
} from "@mui/icons-material"
import { PersonSupportBlueIcon } from "@/icons"
import { IconButton } from "@mui/material"
import { useGetUserDataQuery } from "@/services/auth.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { UserOutlined } from "@ant-design/icons"
import Link from "next/link"

export const Header = () => {
  const [open, setOpen] = React.useState(false)
  const { token } = useAuthToken()
  const { data, isLoading } = useGetUserDataQuery({
    authToken: token as string,
  })
  return (
    <div>
      <NavTab />
      <div className="md:ml-[420px] md:p-[21px] p-[18px] border-b-[1px] flex justify-between items-center bg-[#fff]">
        <div className="flex items-center gap-[12px]">
          <Link href="/">
            <div className="md:hidden">
              <Logo />
            </div>
          </Link>
          {/* <div className="hidden md:block w-[488px]">
            <Input
              placeholder={"Search"}
              prefix={<Search className="text-[#00000073]" />}
              style={{ padding: "0.5rem" }}
            />
          </div> */}
        </div>
        <div className="flex items-center gap-[12px] cursor-pointer">
          <Link href="/users">
            <Badge>
              <div className="px-[10px] py-[10px] bg-[#006FCF33] rounded-[9px] md:block hidden">
                <PersonSupportBlueIcon />
              </div>
            </Badge>
          </Link>
          {/* <Badge dot color="#5A4BDA" className="md:block hidden">
            <div className="px-[10px] py-[10px] bg-[#006FCF33] rounded-[9px]">
              <Notifications color="primary" />
            </div>
          </Badge> */}
          {isLoading ? (
            <Skeleton.Avatar active />
          ) : (
            <Link
              href={"/account"}
              className="flex items-center gap-[12px] cursor-pointer px-[10px] md:py-[8px]"
            >
              <Avatar
                className="rounded-[9px]"
                src={data?.profile_picture}
                icon={<UserOutlined />}
                size={44}
              />
              <div>
                <p className="capitalize">
                  {data?.firstname} {data?.lastname.slice(0, 1)}.
                </p>
                <p className="text-[15px] hidden md:block">{data?.role}</p>
              </div>
              <ExpandMore />
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <IconButton className="rounded-full" onClick={() => setOpen(true)}>
            <MenuOpen />
          </IconButton>
        </div>
      </div>
      <div className="md:hidden">
        <Drawer
          placement="left"
          onClose={() => setOpen(false)}
          open={open}
          className="md:hidden "
          style={{ background: "#00101E" }}
          contentWrapperStyle={{ padding: "0", width: "90%" }}
          closeIcon={<Close color="primary" />}
          title={
            <div className="flex justify-end mt-[2rem]">
              <Logo />
            </div>
          }
        >
          <MobileMenu />
        </Drawer>
      </div>
    </div>
  )
}
