"use client"
import { LocalShipping } from "@mui/icons-material"
import { Button } from "antd"
import React from "react"

const ArrangePickup = () => {
  return (
    <div>
      <Button
        className="bg-primary"
        type="primary"
        icon={<LocalShipping className="text-[14px]" />}
      >
        Arrange Delivery
      </Button>
    </div>
  )
}

export default ArrangePickup
