"use client"
import React, { useState } from "react"
import {
  Avatar,
  Button,
  Form,
  Image,
  Input,
  Modal,
  Popover,
  Space,
  Table,
  Tag,
  message,
} from "antd"
import type { ColumnsType } from "antd/es/table"
import {
  useUpdateProductVariantMutation,
  useGetProductQuery,
} from "@/services/product.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { ProductI, VariantI } from "@/interfaces/product"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import Link from "next/link"
import { useHideProductVariantMutation } from "@/services/product.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useParams } from "next/navigation"
import moment from "moment"
import { CloseRounded } from "@mui/icons-material"

const MoreAction: React.FC<{
  text: any
  record: VariantI
  refetch: () => void
}> = ({ text, record, refetch }) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const toggleModal = () => setOpenModal(!openModal)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken() as { token: string }
  const [hideVariantMutation, { isLoading: isHiding }] =
    useHideProductVariantMutation()
  const [updateMutation, { isLoading: updating }] =
    useUpdateProductVariantMutation()

  const hideVariant = async () => {
    try {
      const data = await hideVariantMutation({
        id: record._id as string,
        authToken: token,
      }).unwrap()
      message.success(data?.message)
    } catch (error: any) {
      const errMsg =
        error?.data?.message || error?.message || "An Error Occured"
      message.error(errMsg)
    }
  }
  const updateVariant = async () => {
    try {
      const data = await updateMutation({
        product_variant_id: record._id as string,
        authToken: token,
        color: variantState.color,
        total_quantity: variantState.total_quantity,
      }).unwrap()
      await refetch()
      setOpenModal(false)
      message.success("Variant Updated Succesfully")
    } catch (error: any) {
      const errMsg =
        error?.data?.message || error?.message || "An Error Occured"
      message.error(errMsg)
    }
  }
  const [variantState, setVariantState] = useState(record)
  return (
    <>
      <Popover
        placement="bottom"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        content={
          <div className="flex flex-col p-0 m-0 gap-2">
            <Button
              type="primary"
              className="bg-primary"
              icon={<EditOutlined />}
              onClick={toggleModal}
            >
              Update variant
            </Button>
            {/* <Button
              type="default"
              danger
              icon={<DeleteOutlined />}
              onClick={hideVariant}
            >
              {isHiding ? <LoadingOutlined /> : "Hide variant"}
            </Button> */}
          </div>
        }
      >
        <MoreOutlined />
      </Popover>
      <Modal
        open={openModal}
        onCancel={toggleModal}
        okText={updating ? <LoadingOutlined /> : "Update"}
        okButtonProps={{ className: "bg-primary", disabled: updating }}
        cancelButtonProps={{ disabled: updating }}
        title="Update Variant"
        closeIcon={<CloseRounded />}
        onOk={updateVariant}
        closable={!updating}
      >
        <Form layout="vertical" initialValues={record}>
          <Form.Item name={"color"} label="Colour" required>
            <Input
              className="w-full"
              placeholder="colour"
              size="large"
              value={variantState.color}
              onChange={(e) =>
                setVariantState({ ...variantState, color: e.target.value })
              }
              prefix={
                <div
                  className={`w-[2rem] h-[2rem] rounded-md mr-1`}
                  style={{ backgroundColor: variantState.color }}
                />
              }
            />
          </Form.Item>
          <Form.Item name={"total_quantity"} label="Quantity" required>
            <Input
              className="w-full"
              placeholder="quantity"
              size="large"
              type="number"
              value={variantState.total_quantity}
              onChange={(e) =>
                setVariantState({
                  ...variantState,
                  total_quantity: Number(e.target.value),
                })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export const ProductVariantsTable: React.FC = () => {
  const { productId } = useParams()
  const { data, isLoading, refetch } = useGetProductQuery({
    id: productId as string,
  })
  const columns: ColumnsType<VariantI> = [
    {
      title: "Variant Image",
      dataIndex: "preview_image",
      key: "preview_image",
      render: (text, record) => (
        <div className="flex items-center gap-3 w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem]">
          <Image
            className="rounded-[8px] object-cover"
            width={"100%"}
            height={"100%"}
            alt=""
            src={record.preview_image}
          />
        </div>
      ),
    },

    {
      title: "Colour",
      dataIndex: "color",
      key: "color",
      render(value, record, index) {
        return (
          <div className="flex items-center gap-3">
            <div
              className={`w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-md`}
              style={{ backgroundColor: value }}
            />
            <p>{value}</p>
          </div>
        )
      },
    },
    {
      title: "Quantity",
      dataIndex: "total_quantity",
      key: "total_quantity",
    },

    {
      title: "Date Created",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        const date = moment(text).format("LL")
        const time = moment(text).format("LT")
        return (
          <div>
            <p>{date}</p>
            <p className="md:block hidden">{time}</p>
          </div>
        )
      },
    },
    {
      title: "Date Updated",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (text) => {
        const date = moment(text).format("LL")
        const time = moment(text).format("LT")
        return (
          <div>
            <p>{date}</p>
            <p className="md:block hidden">{time}</p>
          </div>
        )
      },
    },

    {
      title: "",
      key: "action",
      render: (text, record) => <MoreAction {...{ text, record, refetch }} />,
    },
  ]

  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <Table
          columns={columns}
          dataSource={data?.variants?.slice(0).reverse()}
          rowSelection={{}}
        />
      )}
    </>
  )
}
