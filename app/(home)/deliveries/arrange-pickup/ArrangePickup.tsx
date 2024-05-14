"use client"
import { TransactionI } from "@/interfaces/transactions"
import { LocalShipping } from "@mui/icons-material"
import { Button, DatePicker, Divider, Form, Input, Modal, Select } from "antd"
import React, { useState } from "react"
import { CgCloseO } from "react-icons/cg"
import {
  useGetVehiclesQuery,
  useArrangeDeliveryMutation,
  useGetAddressesQuery,
} from "@/services/deliveries.service"

const ArrangePickup = ({ record }: { record: TransactionI }) => {
  const [open, setOpen] = useState(false)
  const initData = {
    transaction_id: record?._id,
    vehicle_id: "",
    pickup_address_id: "", // Company address for pickup
    pickup_date: "",
  }
  const [reqData, setReqData] = useState(initData)
  return (
    <div>
      <Button
        className="bg-primary"
        type="primary"
        icon={<LocalShipping className="text-[14px]" />}
        onClick={() => setOpen(!open)}
      >
        Arrange Delivery
      </Button>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        title={"Arrange Delivery and Pickup"}
        footer={null}
        closeIcon={<CgCloseO className="text-primary" />}
      >
        <Divider />
        <Form layout="vertical" initialValues={initData}>
          <Form.Item
            required
            label="Select Vehicle"
            name={"vehicle_id"}
            rules={[{ required: true, message: "Vehicle is Required." }]}
          >
            <Select
              size="large"
              className="w-full"
              onChange={(value) =>
                setReqData({ ...reqData, vehicle_id: value })
              }
            />
          </Form.Item>

          <Form.Item
            required
            label="Pick up Address"
            name={"pickup_address_id"}
            rules={[{ required: true, message: "Pickup Address is Required." }]}
          >
            <Select
              size="large"
              className="w-full"
              onChange={(value) =>
                setReqData({ ...reqData, pickup_address_id: value })
              }
            />
          </Form.Item>

          <Form.Item
            required
            label="Pick up date"
            name={"pickup_date"}
            rules={[{ required: true, message: "Pickup Date is Required." }]}
          >
            <DatePicker
              size="large"
              className="w-full"
              onChange={(value) =>
                setReqData({ ...reqData, pickup_date: value.toISOString() })
              }
            />
          </Form.Item>
          <Button
            className="bg-primary w-full"
            size="large"
            type="primary"
            icon={<LocalShipping className="text-[16px]" />}
          >
            Arrange Delivery
          </Button>
        </Form>
      </Modal>
    </div>
  )
}

export default ArrangePickup
