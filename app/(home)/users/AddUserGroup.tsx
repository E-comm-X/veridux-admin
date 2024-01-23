"use client"
import { Button, Form, Input, Modal } from "antd"
import React, { useState } from "react"

export const AddUserGroup = () => {
  const [open, setOpen] = useState(false)
  const [group_name, setGroup_name] = useState("")
  return (
    <div>
      <Button
        type="primary"
        className="bg-primary"
        size="large"
        onClick={() => setOpen(true)}
      >
        Create User Group
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        title={"Add new User Group"}
      >
        <Form className="mt-5">
          <Form.Item>
            <Input
              size="large"
              onChange={(e) => setGroup_name(e.target.value)}
              required
              className="w-full"
              placeholder="User Group Name"
            />
          </Form.Item>
          <Button
            type="primary"
            className="bg-primary w-full"
            size="large"
            htmlType="submit"
            disabled={!group_name}
          >
            Create User Group
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
