"use client"
import React from "react"
import { Menu } from "./Menu"
import { MobileMenu } from "./MobileMenu"
import { NavTab } from "./NavTab"
import { Logo } from "./Logo"
import { Avatar, Badge, Button, Drawer, Input } from "antd"
import {
  Close,
  ExpandMore,
  MenuOpen,
  Notifications,
  Search,
} from "@mui/icons-material"
import { PersonSupportBlueIcon } from "@/icons"
import { IconButton } from "@mui/material"

export const Header = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <NavTab />
      <div className="md:ml-[420px] md:p-[21px] p-[18px] border-b-[1px] flex justify-between items-center bg-[#fff]">
        <div className="flex items-center gap-[12px]">
          <div className="md:hidden">
            <Logo />
          </div>
          <div className="hidden md:block w-[488px]">
            <Input
              placeholder={"Search"}
              prefix={<Search className="text-[#00000073]" />}
              style={{ padding: "0.5rem" }}
            />
          </div>
        </div>
        <div className="flex items-center gap-[12px] cursor-pointer">
          <Badge>
            <div className="px-[10px] py-[10px] bg-[#006FCF33] rounded-[9px] md:block hidden">
              <PersonSupportBlueIcon />
            </div>
          </Badge>
          <Badge dot color="#5A4BDA" className="md:block hidden">
            <div className="px-[10px] py-[10px] bg-[#006FCF33] rounded-[9px]">
              <Notifications color="primary" />
            </div>
          </Badge>
          <div className="flex items-center gap-[12px] cursor-pointer px-[10px] md:py-[8px]">
            <Avatar
              className="rounded-[9px]"
              style={{ width: "46px", height: "46px" }}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p>Samuel N.</p>
            <ExpandMore />
          </div>
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
