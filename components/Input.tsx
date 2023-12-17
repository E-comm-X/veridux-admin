import React, { ReactNode } from "react"
import classNames from "classnames"

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: ReactNode
  suffixIcon?: ReactNode
}

export const Input = ({
  className,
  prefixIcon,
  suffixIcon,
  ...props
}: props) => {
  return (
    <div className="block relative">
      <input
        className={classNames(
          `p-[15px] ${prefixIcon ? "pl-[37px]" : ""} ${
            suffixIcon ? "pr-[37px]" : ""
          }  rounded-[10px] bg-input border-[0] focus:border-primary focus:outline-none inline-block w-[228px] placeholder-gray-400 text-[14px]`,
          className
        )}
        {...props}
      />
      <div className="absolute top-[50%] left-[15px] translate-y-[-50%] m-0">
        {prefixIcon}
      </div>
    </div>
  )
}
