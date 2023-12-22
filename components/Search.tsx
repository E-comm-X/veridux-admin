import React from "react"
import { Input } from "./Input"
import { Search as SearchIcon } from "@mui/icons-material"

export const Search = ({ className }: { className?: string }) => {
  return (
    <Input
      prefixIcon={<SearchIcon />}
      placeholder="Search"
      className={className}
    />
  )
}
