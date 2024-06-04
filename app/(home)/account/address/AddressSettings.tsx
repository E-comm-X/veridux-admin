"use client"
import { LoadingOutlined } from "@ant-design/icons"
import { message, Modal, Radio, Empty, Button } from "antd"
import Image from "next/image"
import React, { FC, SetStateAction, useEffect, useState } from "react"
import "react-phone-input-2/lib/style.css"
import { AddNewAddress } from "./AddNewAddress"
import { UpdateAddress } from "./UpdateAddress"
import { DeleteAddress } from "./DeleteAddress"
import { useAuthToken } from "@/hooks/useAuthToken"
import {
  useGetAddressQuery,
  useSetDefaultAddressMutation,
} from "@/services/address.service"
import { FaEdit } from "react-icons/fa"

export const AddressSettings = () => {
  const [show, setShow] = useState(true)
  const { token } = useAuthToken()
  return (
    <div className="border border-2 rounded-lg h-full p-5 w-full">
      <h3 className="font-semibold mb-8">Address</h3>
      {show ? (
        <Address {...{ show, setShow }} />
      ) : (
        <AddNewAddress {...{ show, setShow }} />
      )}
    </div>
  )
}

export const Address: FC<{
  show: boolean
  setShow: React.Dispatch<SetStateAction<boolean>>
}> = ({ show, setShow }) => {
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const { token } = useAuthToken()
  const { data, isLoading, refetch } = useGetAddressQuery({
    authToken: token as string,
  })

  const [details, setDetails] = useState({ address: "", phone: "", id: "" })
  const [default_, setDefault] = useState<string>("")
  useEffect(() => {
    if (data) {
      setDefault(
        data.find((address) => address.default === true)?._id as string
      )
    }
  }, [data])

  const [mutate, { isLoading: settingDefault }] = useSetDefaultAddressMutation()

  const onSetDefault = async () => {
    try {
      await mutate({
        authToken: token as string,
        address_id: details.id,
      }).unwrap()
      await refetch()
      message.success("Address set as default")
    } catch (error: any) {
      message.error(
        error?.data?.message || error?.message || "An Error Occured"
      )
    }
  }

  const onChangeDefault = async (value: string) => {
    await onSetDefault()
    setDefault(value)
    setDetails((prev) => ({ ...prev, id: value }))
  }

  return (
    <div className="w-full">
      <div></div>
      {settingDefault ? (
        <LoadingOutlined />
      ) : (
        <div className="my-5 w-full">
          <Radio.Group
            className="w-full"
            value={default_}
            onChange={(e) => onChangeDefault(e.target.value as string)}
          >
            {isLoading ? (
              <LoadingOutlined />
            ) : (
              <>
                {data?.length === 0 ? (
                  <Empty description="No Address" />
                ) : (
                  data?.map((address, index) => (
                    <div
                      className="mb-3 border rounded-md w-full p-4"
                      key={address._id}
                    >
                      <Radio
                        value={`${address._id}`}
                        className=""
                        defaultChecked={address?.default}
                      >
                        <div className="ml-3">
                          <p className="font-semibold">
                            Address {index + 1}
                            {address.default && (
                              <i style={{ fontWeight: "300" }}> - Default</i>
                            )}
                          </p>
                          <p style={{ color: "#6A6B6C" }} className="text-sm">
                            {address.description}
                          </p>
                        </div>
                      </Radio>
                      <div className="flex mt-5 ml-3 ml-[2rem]">
                        {/* UPDATE ADDRESS */}
                        <Modal
                          open={showModal}
                          onCancel={() => setShowModal(false)}
                          footer={false}
                          title={"Update Address"}
                        >
                          <UpdateAddress
                            {...{ show: showModal, setShow: setShowModal }}
                            phone={details.phone}
                            address={details.address}
                            id={details.id}
                            setDetails={setDetails}
                          />
                        </Modal>
                        <div
                          className="flex cursor-pointer"
                          onClick={() => {
                            setShowModal(true)
                            setDetails(() => {
                              return {
                                address: address.description,
                                phone: address.phone,
                                id: address._id,
                              }
                            })
                          }}
                        >
                          <FaEdit className="inline" />
                          <p
                            style={{ color: "#0485E8", fontSize: "14px" }}
                            className="ml-3 block"
                          >
                            Update
                          </p>
                        </div>
                        {address.default ? (
                          <></>
                        ) : (
                          <div
                            className="flex ml-5 cursor-pointer"
                            onClick={() => {
                              setShowDeleteModal(true)
                              setDetails(() => {
                                return {
                                  address: address.description,
                                  phone: address.phone,
                                  id: address._id,
                                }
                              })
                            }}
                          >
                            <p
                              style={{ color: "#EB270B", fontSize: "14px" }}
                              className="ml-3"
                            >
                              Remove
                            </p>
                          </div>
                        )}
                        {/* DELETE ADDRESS */}
                        <Modal
                          open={showDeleteModal}
                          onCancel={() => setShowDeleteModal(false)}
                          footer={false}
                          title={"Delete Address"}
                        >
                          <DeleteAddress
                            setShow={setShowDeleteModal}
                            {...{
                              show: showDeleteModal,
                            }}
                            id={details.id}
                            name={details.address}
                          />
                        </Modal>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}
          </Radio.Group>

          <Button
            className="rounded-2xl px-10 mt-5 capitalize"
            size={"large"}
            onClick={() => setShow(false)}
          >
            Add new address
          </Button>
        </div>
      )}
    </div>
  )
}

const Icon: FC<{ imgUrl: string }> = ({ imgUrl }) => {
  return (
    <>
      <Image alt="icon" width={20} height={25} src={imgUrl} />
    </>
  )
}
