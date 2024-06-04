"use client"
import React from "react"
import Link from "next/link"
import { Button } from "@mui/material"
import { useLogout } from "@/hooks/useLogout"

const navItems = [
  { name: "My Profile", key: "" },
  { name: "Pickup Address", key: "address" },
  // { name: "Time Zone & Language", key: "time-zone" },
  // { name: "Notification", key: "notification" },
  // { name: "Data Export", key: "data-export" },
]

export const AccountNav = ({ active }: { active: string }) => {
  const { logout } = useLogout()

  return (
    <div className="p-[24px] md:pt-[4rem] flex md:flex-col flex-row gap-[24px] md:gap-[0] items-center md:justify-start justify-center md:border-r-[1px] flex-wrap">
      {navItems.map((item) => (
        <Link
          href={`/account/${item.key}`}
          key={item.key}
          className={`${
            item.key === active
              ? "text-primary font-bold bg-[#006FCF2B]"
              : "text-[#00000099] font-semibold"
          } capitalize cursor-pointer rounded-[10px] md:w-full text-center md:p-[20px] p-[10px]`}
        >
          {item.name}
        </Link>
      ))}
      <Button
        className="text-[#FF1717] font-bold capitalize"
        onClick={logout}
        color="error"
      >
        Log Out
      </Button>
    </div>
  )
}
