"use client"

import { useAuthToken } from "@/hooks/useAuthToken"
import {
  useDeleteAddressMutation,
  useGetAddressQuery,
} from "@/services/address.service"
import { LoadingOutlined } from "@ant-design/icons"
import { Button, message } from "antd"
import React, { FC, SetStateAction } from "react"
import "react-phone-input-2/lib/style.css"

export const DeleteAddress: FC<{
  show: boolean
  setShow: React.Dispatch<SetStateAction<boolean>>
  id: string
  name: string
}> = ({ show, setShow, id, name }) => {
  const { token } = useAuthToken()
  const { refetch } = useGetAddressQuery({
    authToken: token as string,
  })

  const [mutate, { isLoading }] = useDeleteAddressMutation()

  const onDeleteAddress = async () => {
    try {
      await mutate({
        authToken: token as string,
        address_id: id,
      }).unwrap()
      await refetch()
      message.success("Address Deleted succesfully")
      setShow(false)
    } catch (error: any) {
      message.error(
        error?.data?.message || error?.message || "An Error Occured"
      )
    }
  }

  return (
    <>
      <div>
        <p className="">
          <b>{name}</b>
        </p>
        <p>Are you sure you want to delete this address?</p>
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <div className="mt-5">
            <Button
              type={"primary"}
              className="bg-primary"
              onClick={() => setShow(false)}
            >
              No, Cancel
            </Button>
            <Button danger className="ml-3" onClick={onDeleteAddress}>
              Yes, Delete
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
