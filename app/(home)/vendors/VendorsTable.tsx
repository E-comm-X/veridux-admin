"use client"
import React, { useEffect, useState } from "react"
import {
  Avatar,
  Button,
  Input,
  Popover,
  Select,
  Space,
  Table,
  Tag,
  message,
} from "antd"
import type { ColumnsType } from "antd/es/table"
import {
  useGetAllStoresQuery,
  useGetAllVendorsQuery,
  useToggleStoreStatusMutation,
} from "@/services/store.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { StoreI } from "@/interfaces/store"
import { VendorI } from "@/interfaces/product"
import { useAuthToken } from "@/hooks/useAuthToken"
import { DeleteOutlined, EditOutlined, Search } from "@mui/icons-material"
import Link from "next/link"

const MoreAction: React.FC<{ text: any; record: StoreI }> = ({
  text,
  record,
}) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }
  const { token } = useAuthToken()
  const [mutate, { isLoading }] = useToggleStoreStatusMutation()
  const { refetch, isLoading: loadingStores } = useGetAllStoresQuery({
    authToken: token as string,
  })

  const toggleStoreStatus = async (
    action: "open" | "close" | "activate" | "deactivate"
  ) => {
    try {
      const response = await mutate({
        action,
        id: record._id,
        authToken: token as string,
      }).unwrap()
      message.success(response.message)
      await refetch()
      message.success("Stores table updated successfully")
    } catch (error: any) {
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
        <>
          {isLoading ? (
            <LoadingOutlined />
          ) : (
            <div className="flex flex-col p-0 m-0 gap-2">
              <p className="text-center text-md mb-1">{record.name}</p>
              <div className="flex flex-col gap-2">
                {record.is_activated ? (
                  <Button
                    type="default"
                    danger
                    className="w-full"
                    onClick={async () => await toggleStoreStatus("deactivate")}
                  >
                    Deactivate Store
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    className="bg-primary w-full"
                    onClick={async () => await toggleStoreStatus("activate")}
                  >
                    Activate Store
                  </Button>
                )}
              </div>
              {/* <div className="flex gap-2 w-full">
                <Button
                  type="primary"
                  className="bg-primary w-full"
                  onClick={async () => await toggleStoreStatus("open")}
                >
                  Open Store
                </Button>
                <Button
                  type="default"
                  danger
                  className="w-full"
                  onClick={async () => await toggleStoreStatus("close")}
                >
                  Close Store
                </Button>
              </div> */}
            </div>
          )}
        </>
      }
    >
      <MoreOutlined />
    </Popover>
  )
}

const columns: ColumnsType<VendorI> = [
  {
    title: "Vendor",
    dataIndex: "company_name",
    key: "company_name",
  },
  {
    title: "Address",
    dataIndex: "company_address",
    key: "company_address",
  },
  {
    title: "Email",
    dataIndex: "company_email",
    key: "company_email",
    render: (text) => (
      <Link className="underline text-primary" href={`mailto:${text}`}>
        {text}
      </Link>
    ),
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    render: (text) => (
      <Link className="underline text-primary" href={text}>
        {text}
      </Link>
    ),
  },
  {
    title: "Status",
    dataIndex: "account_verified",
    key: "account_verified",
    render: (text, record) => {
      const status = record.account_verified ? (
        <Tag color="success" className="px-3 py-1">
          Activated
        </Tag>
      ) : (
        <Tag color="error" className="px-3 py-1">
          Deactivated
        </Tag>
      )
      return <p>{status}</p>
    },
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
    title: "Stores",
    key: "id",
    render: (text, record) => (
      <Link
        className="underline text-primary"
        href={`/vendors/${record.user}/?name=${record.company_name}`}
      >
        View stores
      </Link>
    ),
  },
]

export const VendorsTable: React.FC = () => {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetAllVendorsQuery({
    authToken: token as string,
  })
  const [dataState, setDataState] = useState<VendorI[]>([])
  useEffect(() => {
    if (data) {
      setDataState(data)
    }
  }, [data])
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    const newData = data?.filter((vendor) => {
      return (
        vendor.company_name.toLowerCase().includes(value) ||
        vendor.company_email.toLowerCase().includes(value)
      )
    })
    setDataState(newData as VendorI[])
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
              placeholder="Vendor name or email"
              prefix={<Search />}
              onChange={onSearch}
              size="large"
            />
          </div>
          <Table
            columns={columns}
            dataSource={dataState?.slice(0).reverse()}
            // rowSelection={{}}
          />
        </div>
      )}
    </>
  )
}
