"use client"
import {
  useAddAddressMutation,
  useGetAddressQuery,
  useUpdateAddressMutation,
} from "@/services/address.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined } from "@ant-design/icons"
import {
  Checkbox,
  Col,
  Input,
  Modal,
  Radio,
  Row,
  Empty,
  message,
  Button,
} from "antd"
import React, { FC, SetStateAction, useEffect, useRef, useState } from "react"
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

export const UpdateAddress: FC<{
  show: boolean
  setShow: React.Dispatch<SetStateAction<boolean>>
  address: string
  phone: string
  id: string
  setDetails: React.Dispatch<
    React.SetStateAction<{
      address: string
      phone: string
      id: string
    }>
  >
}> = ({ show, setShow, address, phone, id, setDetails }) => {
  const { token } = useAuthToken()
  const { refetch } = useGetAddressQuery({ authToken: token as string })
  const [mutate, { isLoading }] = useUpdateAddressMutation()
  const onUpdateAddress = async () => {
    try {
      await mutate({
        authToken: token as string,
        address_id: id,
        description: address,
        phone,
      }).unwrap()
      await refetch()
      message.success("Address updated succesfully")
    } catch (error: any) {
      message.error(
        error?.data?.message || error?.message || "An Error Occured"
      )
    }
  }

  return (
    <>
      <Row gutter={[16, 16]} className="mt-5">
        <Col span={24}>
          <label>Delivery Address</label>
          <p className="mt-0">
            <small className="">Powered by google maps</small>
          </p>
          <Input
            className="w-full mt-2"
            value={address}
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, address: e.target.value }))
            }
            size="large"
          />
        </Col>
        <Col span={24}>
          <label htmlFor="">Phone</label>
          <PhoneInput
            country={"ng"}
            value={phone}
            onChange={(phone) => setDetails((prev) => ({ ...prev, phone }))}
            inputStyle={{ width: "100%" }}
            disableCountryCode
            onlyCountries={["ng"]}
            placeholder="080"
          />
        </Col>
      </Row>
      <div className="mt-5">
        <Checkbox /> <span>Use as default</span>
      </div>
      <Button
        size={"large"}
        onClick={() => {
          // setShow(true)
          onUpdateAddress()
        }}
        className="mt-5 rounded-3xl px-[6rem]"
      >
        {isLoading ? <LoadingOutlined /> : "Save"}
      </Button>
    </>
  )
}
