"use client"
import React from "react"
import ButtonUI from "@/components/ButtonUI"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import { StoresTable } from "./StoresTable"
import {
  useGetAllStoresQuery,
  useGetStoreCategoriesQuery,
  useCreateStoreMutation,
} from "@/services/store.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { Button, Form, Input, Select, message } from "antd"
import { Modal } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

type SToreForm = {
  name: string
  description: string
  address: string
  store_category_ids: string[]
}

const transformData = (data: { name: string; id: string }[]) => {
  const newData =
    data &&
    data?.map((data) => ({
      label: data.name,
      value: data.id,
    }))
  return newData
}

export const AddStore = ({ refetchStores }: { refetchStores: () => void }) => {
  const [open, setOpen] = useState(false)
  const { token } = useAuthToken()
  const { data: categories, isLoading } = useGetStoreCategoriesQuery({
    authToken: token as string,
    withoutHidden: true,
  })
  const categoryOptions = transformData(categories as [])
  const [formData, setFormData] = useState<SToreForm>({
    name: "",
    description: "",
    address: "",
    store_category_ids: [],
  })
  const [mutate, { isLoading: creatingStore }] = useCreateStoreMutation()

  const isFilled =
    Object.values(formData).every((el) => Boolean(el)) &&
    formData.store_category_ids.length > 0

  const createStore = async () => {
    try {
      const response = await mutate({
        data: formData,
        authToken: token as string,
      }).unwrap()

      message.success(response.message)
      await refetchStores()
      setOpen(false)
      // message.success("Stores table updated successfully")
    } catch (error: any) {
      message.error(error.data.message)
    }
  }
  return (
    <div>
      {/* Modal */}
      <>
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <>
            <div className="">
              <Button
                onClick={() => setOpen(true)}
                type="primary"
                className="bg-primary"
              >
                + Add Store
              </Button>
            </div>
            <Modal open={open} onCancel={() => setOpen(false)} footer={false}>
              <div className="">
                <Form onFinish={createStore}>
                  <h2 className="text-black text-4xl mt-2 text-center">
                    Create Store
                  </h2>
                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="vendor" className="font-semibold text-xl">
                      Name
                    </label>
                    <Input
                      size="large"
                      id="vendor"
                      type="text"
                      placeholder="Vendor Name"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="phone" className="font-semibold text-xl">
                      Description
                    </label>
                    <Input
                      size="large"
                      type="text"
                      placeholder="Enter Description"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="industry" className="font-semibold text-xl">
                      Address
                    </label>
                    <Input
                      size="large"
                      type="text"
                      placeholder="Address"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="services" className="font-semibold text-xl">
                      Category
                    </label>
                    <Select
                      placeholder={"Select Category"}
                      size="large"
                      options={categoryOptions}
                      onChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          store_category_ids: value as string[],
                        }))
                      }
                      allowClear
                      mode="multiple"
                    />
                  </div>
                  <Button
                    className=" w-full bg-[#006FCF] mt-5"
                    disabled={!isFilled || creatingStore}
                    type="primary"
                    size="large"
                    htmlType="submit"
                  >
                    {isLoading || creatingStore ? (
                      <LoadingOutlined />
                    ) : (
                      "Create Vendor"
                    )}
                  </Button>
                  {/* <ButtonUI text="Add Vendor"></ButtonUI> */}
                </Form>
              </div>
            </Modal>
          </>
        )}
      </>
    </div>
  )
}
