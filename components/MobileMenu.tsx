"use client"
import { Home, Logout } from "@mui/icons-material"
import React from "react"
import { Menu } from "./Menu"
import { PersonSupportIcon } from "@/icons"
import { Logo } from "./Logo"

const items = [
  { icon: <Home />, item: <Menu />, name: "nav" },
  { icon: <PersonSupportIcon />, item: <Menu />, name: "support" },
]

export const MobileMenu = () => {
  const [active, setActive] = React.useState("nav")
  const [index, setIndex] = React.useState(0)
  return (
    <div className="">
      <div className=" bg-[#fff]">
        <div className="w-[420px] h-[100vh] overflow-y-auto bg-[#00101E] text-white">
          {/* <div className=" px-[20px] pb-[20px] border-b-[1px] border-b-[#FFFFFF21]">
            <Logo />
          </div> */}
          <div className="flex">
            <div className="py-[1.5rem] border-r-[1px] border-r-[#FFFFFF21]">
              <div className="py-[1.5rem] border-b-[1px] border-b-[#FFFFFF21]">
                {items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActive(item.name)
                      setIndex(index)
                    }}
                    className={`p-[1rem] mx-[0rem] cursor-pointer ${
                      active === item.name
                        ? "border-l-[6px] border-l-[#006FCF]"
                        : "border-l-[6px] border-l-[#ffffff00]"
                    }`}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
              <div className="py-[1.5rem] px-[1.3rem] cursor-pointer hover:text-[#FF3C3C]">
                <Logout />
              </div>
            </div>

            {<div className="">{items[index].item}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
