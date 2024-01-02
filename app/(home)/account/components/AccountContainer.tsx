import React from "react"
import { AccountNav } from "./AccountNav"

interface props {
  active: string
  children?: React.ReactNode
}

export const AccountContainer = ({ ...props }: props) => {
  return (
    <div className="bg-white rounded-[27px] border-[1px] md:grid md:grid-cols-4 min-h-[73vh]">
      <AccountNav active={props.active} />
      <div className="md:p-[24px] p-[1rem] col-span-3">{props.children}</div>
    </div>
  )
}
