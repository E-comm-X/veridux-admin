"use client"
import {
  useGetAddressQuery,
  useAddAddressMutation,
} from "@/services/address.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { LoadingOutlined } from "@ant-design/icons"
import { Checkbox, Col, Row, Button, message } from "antd"
import React, { FC, SetStateAction, useRef, useState } from "react"
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

export const AddNewAddress: FC<{
  show: boolean
  setShow: React.Dispatch<SetStateAction<boolean>>
  address?: string
  phone_number?: string
  placeID?: string
}> = ({ show, setShow, address, phone_number, placeID }) => {
  const { token } = useAuthToken()
  const { refetch } = useGetAddressQuery({ authToken: token as string })
  const [search, setSearch] = useState<string>(address as string)
  const [place_id, setPlaceID] = useState<string>(placeID as string)
  const [phone, setPhone] = useState(phone_number as string)
  const [mutate, { isLoading }] = useAddAddressMutation()

  const onAddAddress = async () => {
    try {
      await mutate({
        authToken: token as string,
        place_id,
        description: search,
        phone,
      }).unwrap()
      await refetch()
      message.success("Address added succesfully")
      setShow(true)
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
          <Autocomplete
            style={{ outline: "none" }}
            className="w-full p-2 border-gray-200 border-2 mt-3"
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            onPlaceSelected={(place) => {
              //@ts-ignore
              console.log(place)
              // antInputRef.current?.setValue(place?.formatted_address)
              setPlaceID(place?.place_id as string)
              setSearch(place?.formatted_address as string)
            }}
            options={{
              types: ["address"],
            }}
            defaultValue={address}
          />
        </Col>
        <Col span={24}>
          <label htmlFor="">Phone</label>
          <PhoneInput
            country={"ng"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
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
      <div className="flex md:flex-row flex-col gap-4">
        <Button
          type="primary"
          size={"large"}
          onClick={() => {
            // setShow(true)
            onAddAddress()
          }}
          className="mt-5 rounded-3xl px-[6rem] bg-primary w-full md:w-auto"
        >
          {isLoading ? <LoadingOutlined /> : "Save"}
        </Button>
        <Button
          size={"large"}
          onClick={() => {
            setShow(true)
          }}
          className="md:mt-5 rounded-3xl px-[6rem] w-full md:w-auto"
        >
          Cancel
        </Button>
      </div>
    </>
  )
}
