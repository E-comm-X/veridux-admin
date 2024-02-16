"use client"
import React from "react"
import { Table } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import { TransactionI } from "@/interfaces/transactions"

const columns: TableColumnsType<TransactionI> = [
  {
    title: "Transaction ID",
    dataIndex: "_id",
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
  },
  {
    title: "Amount",
    dataIndex: "amount_payable",
    sorter: (a, b) => a.amount_payable - b.amount_payable,
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    sorter: (a, b) => Number(a.createdAt) - Number(b.createdAt),
  },
  {
    title: "Time",
    dataIndex: "createdAt",
    sorter: (a, b) => Number(a.createdAt) - Number(b.createdAt),
  },
  {
    title: "Inflow Type",
    dataIndex: "kind",
    filters: [
      {
        text: "Credit",
        value: "Credit",
      },
      {
        text: "Debit",
        value: "Debit",
      },
    ],
    onFilter: (value, record) => record.kind.startsWith(value as any),
    filterSearch: true,
    width: "40%",
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

export const TransactionsTable: React.FC<{ data: TransactionI[] }> = ({
  data,
}) => <Table columns={columns} dataSource={data} onChange={onChange} />
