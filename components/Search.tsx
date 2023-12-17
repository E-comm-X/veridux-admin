import React from "react"
import { Input } from "./Input"
import { SearchIcon } from "@/icons"

export const Search = ({ className }: { className?: string }) => {
  return (
    <Input
      prefixIcon={<SearchIcon />}
      placeholder="Search"
      className={className}
    />
  )
}
