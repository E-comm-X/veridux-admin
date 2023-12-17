"use client"
import React, { useState } from "react"
import { navItems } from "@/data/navData"
import { usePathname } from "next/navigation"
import Link from "next/link"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export const NavItems = () => {
  const pathname = usePathname()
  return (
    <div className="flex flex-col gap-[16px]">
      {navItems.map((item, index) => {
        const active = pathname === item.url
        return (
          <div key={index} className="">
            {item.url ? (
              <Link
                href={item.url}
                className={`md:px-[24px] px-[12px] md:py-[12px] py-[8px] flex items-center gap-[10px] text-[16px] text-[#FFFFFF78] hover:bg-primary-grey transition-all rounded-[7px] ${
                  active && "bg-[#FFFFFF38] text-[#fff]"
                }`}
              >
                <span className="inline-block  md:p-[10px] p-[5px] rounded-[7px] bg-[#fff]">
                  {item.icon}
                </span>
                <span className={`${active && "text-[#fff]"}`}>
                  {item.name}
                </span>
              </Link>
            ) : (
              <NavSelect {...item} />
            )}
          </div>
        )
      })}
    </div>
  )
}

interface NavSelectProps {
  icon: React.ReactNode
  name: string
  children: { name: string; url: string }[]
}

const NavSelect = ({ icon, name, children }: NavSelectProps) => {
  const pathname = usePathname()
  const [active, setActive] = useState(
    children.some((item) => item.url === pathname)
  )
  const stayActive = children.some((item) => item.url === pathname)
  return (
    <div className="transition-all">
      <div
        onClick={() => {
          setActive(!active)
        }}
        className={`cursor-pointer flex items-center justify-between md:pl-[24px] md:pr-[12px] md:py-[12px] pl-[12px] pr-[8px] py-[8px] hover:bg-primary-grey transition-all rounded-[7px] ${
          stayActive && "bg-[#FFFFFF38] text-[#fff]"
        }`}
      >
        <div
          className={`flex items-center gap-[10px] text-[16px] text-[#FFFFFF78]`}
        >
          <span className="inline-block md:p-[10px] p-[5px] rounded-[7px] bg-[#fff]">
            {icon}
          </span>
          <span className={`${stayActive && "text-[#fff]"}`}>{name}</span>
        </div>
        <span
          className={`${
            active ? "rotate-[180deg]" : "rotate-[0deg]"
          } transition-all`}
        >
          <ExpandMoreIcon />
        </span>
      </div>
      <div className="mt-[0.5rem]">
        {active &&
          children.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.url}
                onClick={() => setActive(true)}
                className={`pl-[52px] py-[12px] text-[16px] text-[#FFFFFF78] hover:bg-primary-grey transition-all block rounded-[7px] ${
                  pathname === item.url && "bg-[#FFFFFF38] text-[#fff]"
                }`}
              >
                <span className={`${pathname === item.url && "text-[#fff]"}`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
      </div>
    </div>
  )
}
