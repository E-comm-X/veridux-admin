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
  useToggleStoreStatusMutation,
} from "@/services/store.service"
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons"
import { StoreI } from "@/interfaces/store"
import { VendorI } from "@/interfaces/product"
import { useAuthToken } from "@/hooks/useAuthToken"
import { DeleteOutlined, EditOutlined, Search } from "@mui/icons-material"
import Link from "next/link"
import { useParams } from "next/navigation"

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
              <div>
                <Link href={`/stores/${record.id}`}>
                  <Button className="w-full">View Store</Button>
                </Link>
              </div>
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

const columns: ColumnsType<StoreI> = [
  {
    title: "Vendor",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <Avatar className="rounded-[8px]" size={"large"} src={record.logo} />
        <Link href={`/stores/${record.id}`} className="text-primary underline">
          <p>{text}</p>
        </Link>
      </div>
    ),
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (text, record) => (
      <div className="flex items-center gap-3">
        <p>{text}</p>
      </div>
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
    title: "Status",
    dataIndex: "is_activated",
    key: "is_activated",
    render: (text, record) => {
      const status = record.is_activated ? (
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
    title: "Opened",
    dataIndex: "is_open",
    key: "is_open",
    render: (text, record) => {
      const status = record.is_open ? (
        <Tag color="success" className="px-3 py-1">
          Open
        </Tag>
      ) : (
        <Tag color="error" className="px-3 py-1">
          Closed
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
  // {
  //   title: "Action",
  //   dataIndex: "action",
  //   key: "action",
  //   render: (text, record) => {
  //     return (
  //       <Select
  //         className="w-full placeholder:text-primary"
  //         placeholder="Action"
  //         options={[
  //           { label: "Activate", value: "activate" },
  //           { label: "Deactivate", value: "deactivate" },
  //         ]}
  //       />
  //     )
  //   },
  // },

  {
    title: "Actions",
    key: "more",
    render: (text, record) => <MoreAction {...{ text, record }} />,
  },
]

export const StoresTable: React.FC = () => {
  const { token } = useAuthToken()
  const { vendorId } = useParams() as { vendorId: string }
  const { data, isLoading } = useGetAllStoresQuery({
    authToken: token as string,
    vendor_id: vendorId,
  })
  const [dataState, setDataState] = useState<StoreI[]>([])
  useEffect(() => {
    if (data) {
      setDataState(data)
    }
  }, [data])
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    const newData = data?.filter((store) => {
      return (
        store.name.toLowerCase().includes(value) ||
        store._id.toLowerCase().includes(value)
      )
    })
    setDataState(newData as StoreI[])
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
              placeholder="Store name or id"
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
