"use client"
import { ShipmentI } from "@/interfaces/shipment"
import {
  CheckCircle,
  DateRangeOutlined,
  LocalShipping,
  Timelapse,
} from "@mui/icons-material"
import { Button, DatePicker, Divider, Form, message, Modal } from "antd"
import React, { useState } from "react"
import {
  useUpdatePickupMutation,
  useConfirmArrangementMutation,
  useRescheduleDeliveryMutation,
  useGetShipmentsQuery,
} from "@/services/deliveries.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined } from "@ant-design/icons"
import { CgCloseO } from "react-icons/cg"

export const MutateDelivery = ({ record }: { record: ShipmentI }) => {
  const isPickedUp = record?.status === "picked_up"
  const isDraft = record?.status === "draft"
  const { token: authToken } = useAuthToken() as { token: string }
  const { refetch } = useGetShipmentsQuery({ authToken })
  const [updatePickup, { isLoading: updatingPickup }] =
    useUpdatePickupMutation()
  const [confirmPickup, { isLoading: confirmingPickup }] =
    useConfirmArrangementMutation()
  const [reschedulePickup, { isLoading: reschedulingPickup }] =
    useRescheduleDeliveryMutation()
  const isLoading = updatingPickup || confirmingPickup || reschedulingPickup
  const confirmUpdate = async (mutate: any, type: string) => {
    try {
      await mutate({
        authToken,
        reqData: { shipment_id: record.id },
      }).unwrap()
      refetch()
      message.success(`Delivery status updated to ${type}`)
    } catch (error: any) {
      message.error(
        error?.message || error?.data?.message || "An Error Occured"
      )
    }
  }

  const initData = {
    shipment_id: "",
    pickup_date: "",
  }
  const [reqData, setReqData] = useState(initData)
  const [open, setOpen] = useState(false)
  const rescheduleFunc = async () => {
    try {
      await reschedulePickup({
        authToken,
        reqData: { ...reqData, shipment_id: record.id },
      }).unwrap()
      refetch()
      message.success("Delivery Rescheduled")
      setOpen(false)
    } catch (error: any) {
      message.error(
        error?.message || error?.data?.message || "An Error Occured"
      )
    }
  }

  return (
    <div>
      <>
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <>
            {isPickedUp ? (
              <>
                <LocalShipping className="text-[24px] text-primary" />
              </>
            ) : isDraft ? (
              <>
                <Button
                  icon={<CheckCircle className="text-[16px] " />}
                  type="text"
                  className="bg-success-500 hover:bg-success-500 text-white"
                  size="large"
                  onClick={() => confirmUpdate(confirmPickup, "Booked")}
                >
                  Confirm
                </Button>
              </>
            ) : (
              <div className="flex gap-2">
                <Button
                  icon={<LocalShipping className="text-[16px]" />}
                  size="large"
                  onClick={() => setOpen(true)}
                >
                  Reschedule
                </Button>
                <Button
                  icon={<CheckCircle className="text-[16px] " />}
                  type="primary"
                  className="bg-primary"
                  size="large"
                  onClick={() => confirmUpdate(updatePickup, "Picked up")}
                >
                  Picked Up
                </Button>
              </div>
            )}
          </>
        )}
      </>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        title={"Reschedule Delivery and Pickup"}
        footer={null}
        closeIcon={<CgCloseO className="text-primary" />}
      >
        <Divider />
        <Form
          layout="vertical"
          initialValues={initData}
          onFinish={rescheduleFunc}
        >
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
            icon={<DateRangeOutlined className="text-[16px]" />}
            disabled={isLoading}
            htmlType="submit"
          >
            {isLoading ? <LoadingOutlined /> : "Reschedule Delivery"}
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
