import React, { FC } from "react"
import classNames from "classnames"
import { Text } from "./Typography"

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  suffixIcon?: React.ReactNode
  prefixIcon?: React.ReactNode
}

export const Button: FC<props> = ({ className, variant, ...props }) => {
  return (
    <button
      className={classNames(
        `inline-block py-[10px] px-[16px] rounded-[28px] ${
          variant === "secondary"
            ? "bg-white border-[1px] border-primary text-primary"
            : "bg-primary text-white"
        }`,
        className
      )}
    >
      <span className="flex items-center gap-[8px]">
        {props.prefixIcon && <span>{props.prefixIcon}</span>}
        <Text>{props.children}</Text>
        {props.suffixIcon && <span>{props.suffixIcon}</span>}
      </span>
    </button>
  )
}
