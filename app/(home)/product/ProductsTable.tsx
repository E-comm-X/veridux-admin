"use client"
import React, { useEffect, useState } from "react"
import {
  Avatar,
  Button,
  Input,
  Popover,
  Space,
  Table,
  Tag,
  message,
} from "antd"
import type { ColumnsType } from "antd/es/table"
import { useGetAllProductsQuery } from "@/services/product.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { ProductI } from "@/interfaces/product"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import Link from "next/link"
import { useHideProductMutation } from "@/services/product.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { Search } from "@mui/icons-material"

const MoreAction: React.FC<{ text: any; record: ProductI }> = ({
  text,
  record,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken()
  const [hideProductMutation, { isLoading: isHiding }] =
    useHideProductMutation()
  const hideProduct = async () => {
    try {
      const data = await hideProductMutation({
        id: record._id as string,
        authToken: token as string,
      }).unwrap()
      message.success(data.message)
    } catch (error: any) {
      console.log(error)

      message.error(error.data.message)
    }
  }
  return (
    <Popover
      placement="bottom"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      content={
        <div className="flex flex-col p-0 m-0 gap-2">
          <Link href={`/product/${record._id}`}>
            <Button
              type="primary"
              className="bg-primary"
              icon={<EditOutlined />}
            >
              View/Update
            </Button>
          </Link>
          <Button
            type="default"
            danger
            icon={<DeleteOutlined />}
            onClick={hideProduct}
          >
            {isHiding ? <LoadingOutlined /> : "Hide"}
          </Button>
        </div>
      }
    >
      <MoreOutlined />
    </Popover>
  )
}

const columns: ColumnsType<ProductI> = [
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <Avatar
          className="rounded-[8px]"
          size={"large"}
          src={record.preview_image}
        />
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: "Pricing",
    dataIndex: "price",
    key: "price",
    render: (text) => <p>₦{Number(text).toFixed(2)}</p>,
  },
  {
    title: "Brand",
    dataIndex: "brand_name",
    key: "brand_name",
  },
  {
    title: "Purchased",
    dataIndex: "purchased",
    key: "purchased",
    render: (text) => <p>-</p>,
  },
  {
    title: "Vendor",
    dataIndex: "store",
    key: "store",
    render: (text, record) => (
      <p>{record.store?.name || <p className="ml-[2rem]">-</p>}</p>
    ),
  },
  {
    title: "Total Sale",
    dataIndex: "Total_Sale",
    key: "Total_Sale",
    render: (text) => <p>-</p>,
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    render: (text) => <p>{Number(text).toFixed(1)}/5</p>,
  },
  {
    title: "Date Created",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => {
      const date = new Date(text).toDateString()
      return <p>{date}</p>
    },
  },

  {
    title: "",
    key: "action",
    render: (text, record) => <MoreAction {...{ text, record }} />,
  },
]

export const ProductsTable: React.FC = () => {
  const { data, isLoading } = useGetAllProductsQuery(null)
  const [dataState, setDataState] = useState<ProductI[]>([])
  useEffect(() => {
    if (data) {
      setDataState(data)
    }
  }, [data])
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    const newData = data?.filter((product) => {
      return (
        product.name.toLowerCase().includes(value) ||
        product._id.toLowerCase().includes(value)
      )
    })
    setDataState(newData as ProductI[])
  }
  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <div>
          <div className="mb-5 w-full">
            <Input
              className="md:w-[450px] w-full"
              placeholder="Product name or ID"
              prefix={<Search />}
              onChange={onSearch}
              size="large"
            />
          </div>
          <Table
            columns={columns}
            dataSource={dataState?.slice(0).reverse()}
            rowSelection={{}}
          />
        </div>
      )}
    </>
  )
}
