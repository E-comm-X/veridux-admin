"use client"
import React from "react"
import { Table, Tag } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import { TransactionI } from "@/interfaces/transactions"
import Link from "next/link"
import moment from "moment"

const columns: TableColumnsType<TransactionI> = [
  {
    title: "Transaction ID",
    dataIndex: "_id",
    render: (text) => (
      <Link href={""} className="text-primary underline">
        {text}
      </Link>
    ),
  },
  {
    title: "Transaction Type",
    dataIndex: "type",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.type.startsWith(value as any),
    render: (text, record) => (
      <p className="capitalize ">{record.type.replaceAll("_", " ")}</p>
    ),
  },
  {
    title: "Transaction Method",
    dataIndex: "payment_method",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.payment_method.startsWith(value as any),
    render: (text, record) => (
      <p className="capitalize ">
        {record.payment_method.replaceAll("_", " ")}
      </p>
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
    onFilter: (value, record) => record.kind.startsWith(value as any),
    filterSearch: true,
    render: (text, record) => (
      <Tag
        className="uppercase "
        color={record.kind === "credit" ? "error" : "success"}
      >
        {record.kind}
      </Tag>
    ),
  },
]

const onChange: TableProps<TransactionI>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra)
}

export const TransactionsTable: React.FC<{
  data: TransactionI[]
  isLoading: boolean
}> = ({ isLoading, data }) => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    loading={isLoading}
  />
)
