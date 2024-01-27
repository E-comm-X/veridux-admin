"use client"
import { Home, Logout } from "@mui/icons-material"
import React from "react"
import { Menu } from "./Menu"
import { PersonSupportIcon } from "@/icons"
import { Logo } from "./Logo"
import { useLogout } from "@/hooks/useLogout"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { icon: <Home />, item: <Menu />, name: "nav", link: "/" },
  {
    icon: <PersonSupportIcon />,
    item: <Menu />,
    name: "support",
    link: "/users",
  },
]

export const NavTab = () => {
  const pathname = usePathname()
  const { logout } = useLogout()
  const [active, setActive] = React.useState("/")
  const [index, setIndex] = React.useState(0)
  return (
    <div className="hidden md:block w-[420px] h-[100vh] overflow-y-auto pt-[40px] fixed top-0 left-0 z-[2] bg-[#00101E] text-white">
      <div className=" px-[20px] pb-[20px] border-b-[1px] border-b-[#FFFFFF21]">
        <Logo />
      </div>
      <div className="flex md:min-h-[85vh]">
        <div className="py-[1.5rem] border-r-[1px] border-r-[#FFFFFF21]">
          <div className="py-[1.5rem] border-b-[1px] border-b-[#FFFFFF21]">
            <Link
              href={items[0].link}
              className={`p-[1rem] mx-[1rem] cursor-pointer block ${
                pathname !== "/users"
                  ? "border-l-[6px] border-l-[#006FCF]"
                  : "border-l-[6px] border-l-[#ffffff00]"
              }`}
            >
              {items[0].icon}
            </Link>
            <Link
              href={items[1].link}
              className={`p-[1rem] mx-[1rem] cursor-pointer block ${
                pathname === "/users"
                  ? "border-l-[6px] border-l-[#006FCF]"
                  : "border-l-[6px] border-l-[#ffffff00]"
              }`}
            >
              {items[1].icon}
            </Link>
          </div>
          <div
            className="py-[1.5rem] px-[2.3rem] cursor-pointer hover:text-[#FF3C3C]"
            onClick={logout}
          >
            <Logout color="error" />
          </div>
        </div>

        {<div className="">{items[index].item}</div>}
      </div>
    </div>
  )
}
