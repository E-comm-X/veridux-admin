import React from "react"
import classNames from "classnames"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "small" | "medium" | "large"
}

export const H1: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h1
      {...props}
      className={classNames(
        `font-[700] font-Aileron md:text-[28px] text-[24px]`,
        className
      )}
    />
  )
}

export const H2: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h2
      {...props}
      className={classNames(
        `font-[700] font-Aileron md:text-[24px] text-[20px]`,
        className
      )}
    />
  )
}

export const H3: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h3
      {...props}
      className={classNames(
        `font-[700] font-Aileron md:text-[20px] text-[18px]`,
        className
      )}
    />
  )
}

export const H4: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h4
      {...props}
      className={classNames(
        `font-[700] font-Aileron md:text-[18px] text-[16px]`,
        className
      )}
    />
  )
}

export const H5: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h5
      {...props}
      className={classNames(
        `font-[700] font-Aileron md:text-[16px] text-[14px]`,
        className
      )}
    />
  )
}

export const H6: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h6
      {...props}
      className={classNames(
        `font-[700] font-Aileron md:text-[14px] text-[12px]`,
        className
      )}
    />
  )
}

export const Text: React.FC<TextProps> = ({ className, variant, ...props }) => {
  return (
    <p
      {...props}
      className={classNames(
        `font-[400] font-Aileron m-0 p-0 ${
          variant === "large"
            ? "text-[16px]"
            : variant === "small"
            ? "text-[12px]"
            : "text-[14px]"
        }`,
        className
      )}
    />
  )
}
