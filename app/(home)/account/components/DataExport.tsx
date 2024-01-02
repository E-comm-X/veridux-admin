"use client"
import { H2, H3, H5, Text } from "@/components/Typography"
import { ChevronRight, Edit, Settings } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Form, Select } from "antd"
import React from "react"

export const DataExport = () => {
  return (
    <div>
      <div className="mb-[2rem]">
        <H3>Data Export</H3>
      </div>
      <div className="rounded-[12px] border-[1px] mb-[1rem] md:p-[2rem]">
        <Form>
          <Form.Item className="md:px-[24px] p-[16px] pb-[0] flex flex-col">
            <div>
              <H5>Data Type</H5>
              <Text className="text-grey-500">
                Choose the specific data you want to export.
              </Text>
            </div>
            <Select
              className="w-full mt-[1rem]"
              size="large"
              placeholder="Select Data Type"
            />
          </Form.Item>
          <Form.Item className="md:px-[24px] p-[16px] pb-[0] flex flex-col">
            <div>
              <H5>Data Type</H5>
              <Text className="text-grey-500">
                Choose the specific data you want to export.
              </Text>
            </div>
            <Select
              className="w-full mt-[1rem]"
              size="large"
              placeholder="Select Data Type"
            />
          </Form.Item>
          <Form.Item className="md:px-[24px] p-[16px] pb-[0] flex flex-col">
            <div>
              <H5>Data Type</H5>
              <Text className="text-grey-500">
                Choose the specific data you want to export.
              </Text>
            </div>
            <Select
              className="w-full mt-[1rem]"
              size="large"
              placeholder="Select Data Type"
            />
          </Form.Item>
          <div className="md:mx-[24px]">
            <Button
              variant="contained"
              className="bg-primary capitalize w-full"
            >
              Export
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
