"use client"
import { ShipmentI } from "@/interfaces/shipment"
import { CheckCircle, LocalShipping } from "@mui/icons-material"
import { Button } from "antd"
import React from "react"

export const MutateDelivery = ({ record }: { record: ShipmentI }) => {
  const isPickedUp = record?.status === "picked_up"
  return (
    <div>
      {isPickedUp ? (
        <>
          <LocalShipping className="text-[24px] text-primary" />
        </>
      ) : (
        <div className="flex gap-2">
          <Button icon={<LocalShipping className="text-[16px]" />}>
            Reschedule
          </Button>
          <Button
            icon={<CheckCircle className="text-[16px] " />}
            type="primary"
            className="bg-primary"
          >
            Picked Up
          </Button>
        </div>
      )}
    </div>
  )
}
