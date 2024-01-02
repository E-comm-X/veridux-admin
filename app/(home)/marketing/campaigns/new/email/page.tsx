"use client"
import { H4, Text } from "@/components/Typography"
import { Button } from "@mui/material"
import { DatePicker, Divider, Form, Input, Select, TimePicker } from "antd"
import { Editor, EditorState } from "draft-js"
import "draft-js/dist/Draft.css"
import React from "react"

const CreateEmailCampaign = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  )

  return (
    <div>
      <div>
        <H4 className="font-semibold">Create Email Campaign</H4>
        <Divider />
      </div>
      <div className="bg-white border-[1px] rounded-[10px]">
        <H4 className="pt-[24px] px-[24px]">Create Custom Email Campaign</H4>
        <Divider />
        <div className="pb-[24px] px-[24px] mb-[24px]">
          <Form>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
              <Form.Item>
                <label htmlFor="name" className="block mb-[8px]">
                  <H4 className="font-semibold text-grey-900">Campaign Name</H4>
                </label>
                <Input
                  id="name"
                  className="border-[#006FCF]"
                  size="large"
                  placeholder="Enter a descriptive name for your campaign..."
                />
              </Form.Item>
              <Form.Item>
                <label htmlFor="user_group" className="block mb-[8px]">
                  <H4 className="font-semibold text-grey-900">
                    Select Recipients
                  </H4>
                </label>
                <Select
                  id="user_group"
                  size="large"
                  placeholder="Choose User Groups"
                />
              </Form.Item>
            </div>
            <Form.Item>
              <label htmlFor="subject-line" className="block mb-[8px]">
                <H4 className="font-normal text-grey-900">Subject Line:</H4>
              </label>
              <Input
                id="subject-line"
                className="border-[#006FCF]"
                size="large"
                placeholder="Enter the subject of your email..."
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="subject-line" className="block mb-[8px]">
                <H4 className="font-semibold text-grey-900">Email Content</H4>
              </label>
              <Input.TextArea
                style={{ minHeight: "185px" }}
                className="border-[#006FCF]"
                placeholder="Enter the subject of your email..."
              />
            </Form.Item>
            <div className="mt-10">
              <H4 className="text-semibold">Schedule Sending</H4>
              <Text variant="large">
                Set a date and time to schedule the campaign.
              </Text>
              <div className="flex gap-4 mt-1">
                <Form.Item>
                  <label
                    htmlFor="date"
                    className="block mb-[8px] font-semibold"
                  >
                    Date
                  </label>
                  <DatePicker size="large" />
                </Form.Item>
                <Form.Item>
                  <label
                    htmlFor="date"
                    className="block mb-[8px] font-semibold"
                  >
                    Time
                  </label>
                  <TimePicker size="large" />
                </Form.Item>
              </div>

              <div className="flex gap-4 mt-1">
                <Button size="large" variant="outlined">
                  Save Draft
                </Button>
                <Button size="large" variant="contained" className="bg-primary">
                  Send
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CreateEmailCampaign
