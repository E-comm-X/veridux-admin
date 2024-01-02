"use client"
import FileInput from "@/components/FileInput"
import { H4, H5, Text } from "@/components/Typography"
import { Button } from "@mui/material"
import { DatePicker, Form, Input, Select, TimePicker } from "antd"
import React from "react"

export const AddNotificationForm = () => {
  return (
    <div className="rounded-[12px] p-[24px] bg-white md:pt-[2rem] min-h-[70vh]">
      <H4>Create and send notifications</H4>
      <Text className="text-grey-500 font-semibold md:w-[50%]" variant="large">
        Create and send notifications to specific user groups for effective
        communication.
      </Text>

      <div className="mt-[1.5rem]">
        <Form>
          <div className="">
            <Form.Item className="md:w-[50%]">
              <H5>Select User Group</H5>
              <Text className="text-grey-500 font-normal mb-1">
                Choose the user group to send the notification to
              </Text>
              <Select
                className="w-full"
                size="large"
                placeholder="Select User Group"
              />
            </Form.Item>
            <Form.Item>
              <H5>Compose Notification</H5>
              <Text className="text-grey-500 font-normal mb-1">
                Enter your notification message
              </Text>
              <Input
                className="md:w-[50%] w-full"
                size="large"
                placeholder="Type your message here..."
              />
            </Form.Item>
          </div>
          <div className="">
            <Form.Item className="md:w-[50%]">
              <FileInput />
            </Form.Item>
            <div className="col-span-2">
              <H5>Schedule (Optional)</H5>
              <Text className="text-grey-500 font-normal mb-1">
                Set a date and time to schedule the notification.
              </Text>
              <div className="flex gap-[24px]">
                <Form.Item>
                  <DatePicker placeholder="Date" size="large" />
                </Form.Item>
                <Form.Item>
                  <TimePicker placeholder="Time" size="large" />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <Button variant="outlined" size="large">
              Cancel
            </Button>
            <Button variant="contained" size="large" className="bg-primary">
              Send Notification
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
