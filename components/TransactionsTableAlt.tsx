"use client"
import React, { useEffect, useState } from "react"
import { Input, Table, Tag } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import { TransactionI } from "@/interfaces/transactions"
import Link from "next/link"
import moment from "moment"
import { FaSearch } from "react-icons/fa"

const getFilters = (transactions: TransactionI[], key: string) => {
  const filters: { text: string; value: string }[] = []
  transactions?.forEach((transaction) => {
    if (
      !filters.some((filter) => filter.value === transaction[key as "type"])
    ) {
      filters.push({
        text: transaction[key as "type"]?.replaceAll("_", " "),
        value: transaction[key as "type"],
      })
    }
  })
  return filters || []
}

export const TransactionsTableAlt: React.FC<{
  data: TransactionI[]
  isLoading: boolean
}> = ({ isLoading, data }) => {
  const columns: TableColumnsType<TransactionI> = [
    {
      title: "Transaction ID",
      dataIndex: "_id",
      render: (text, record) => (
        <Link href={`/transactions/${text}`} className="text-primary underline">
          {text}
        </Link>
      ),
    },
    {
      title: "Transaction Type",
      dataIndex: "type",
      filters: getFilters(data as TransactionI[], "type"),
      filterSearch: true,
      onFilter: (value, record) => record?.type?.startsWith(value as any),
      render: (text, record) => (
        <p className="capitalize ">{record?.type?.replaceAll("_", " ")}</p>
      ),
    },

    {
      title: "Amount",
      dataIndex: "amount_payable",
      sorter: (a, b) => a.amount_payable - b.amount_payable,
      render: (text, record) => (
        <p className="capitalize ">
          {/* ₦ */}
          {Intl.NumberFormat("en-US", {
            currency: "NGN",
            style: "currency",
          }).format(Number(record.amount_payable.toFixed(2)))}
        </p>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      sorter: (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
      render: (text) => <p>{moment(text).format("LL")}</p>,
      defaultSortOrder: "descend",
    },
    {
      title: "Time",
      dataIndex: "createdAt",
      render: (text) => <p>{moment(text).format("LT")}</p>,
    },
    {
      title: "Inflow Type",
      dataIndex: "kind",
      filters: [
        {
          text: "Credit",
          value: "credit",
        },
        {
          text: "Debit",
          value: "debit",
        },
      ],
      onFilter: (value, record) => record?.kind?.startsWith(value as any),
      filterSearch: true,
      render: (text, record) => (
        <Tag
          className="uppercase "
          color={record.kind === "credit" ? "success" : "error"}
        >
          {record.kind}
        </Tag>
      ),
    },
  ]
  const [txState, setTxState] = useState(data)
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const newState = data?.filter((tx) => tx._id.toLowerCase().includes(value))
    setTxState(newState)
  }
  useEffect(() => {
    if (data) {
      setTxState(data)
    }
  }, [data])
  return (
    <div>
      <div>
        <Input
          className="mb-3 md:w-[450px] w-full"
          size="large"
          placeholder="Search with Transaction Id"
          prefix={<FaSearch />}
          onChange={onSearch}
        />
      </div>
      <Table
        columns={columns}
        dataSource={txState?.slice()?.reverse()}
        loading={isLoading}
      />
    </div>
  )
}
