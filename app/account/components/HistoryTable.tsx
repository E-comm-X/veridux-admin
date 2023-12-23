"use client"
import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { H4, H5, H6, Text } from "@/components/Typography"
import { Tag } from "antd"

const RenderTitle = (params: any) => {
  // const [title, subtitle] = params?.value?.split("-")
  return <H6>{params.value}</H6>
}
const RenderStatus = (params: any) => {
  return (
    <>
      {params.value === "pending" ? (
        <Tag color="warning" bordered={false}>
          Pending
        </Tag>
      ) : params.value === "success" ? (
        <Tag color="success" bordered={false}>
          Succssful
        </Tag>
      ) : (
        <Tag color="error" bordered={false}>
          Failed
        </Tag>
      )}
    </>
  )
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    editable: true,
    flex: 1,
    renderCell: RenderTitle,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.title || ""} - ${params.row.subtitle || ""}`,
  },
  {
    field: "date",
    headerName: "Date and Time",
    editable: true,
    flex: 1,
  },
  {
    field: "message",
    headerName: "Notifcation Message",
    editable: true,
    flex: 2,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    renderCell: RenderStatus,
  },
  {
    field: "actions",
    headerName: "Actions",
    editable: true,
    flex: 1,
  },
]

const rows = [
  {
    id: 1,
    name: "Boring Newsletter",
    status: "success",
    date: "Sept 9:00 PM -23",
    message:
      "Get ready for something big! We have an exciting announcement coming your way tomorrow. Stay tuned and be the first to know!",
  },
  {
    id: 2,
    name: "Boring Newsletter",
    status: "pending",
    date: "Sept 9:00 PM -23",
    message:
      "Get ready for something big! We have an exciting announcement coming your way tomorrow. Stay tuned and be the first to know!",
  },
  {
    id: 3,
    name: "Boring Newsletter",
    status: "failed",
    date: "Sept 9:00 PM -23",
    message:
      "Get ready for something big! We have an exciting announcement coming your way tomorrow. Stay tuned and be the first to know!",
  },
  {
    id: 4,
    name: "Boring Newsletter",
    status: "success",
    date: "Sept 9:00 PM -23",
    message:
      "Get ready for something big! We have an exciting announcement coming your way tomorrow. Stay tuned and be the first to know!",
  },
  {
    id: 5,
    name: "Boring Newsletter",
    status: "failed",
    date: "Sept 9:00 PM -23",
    message:
      "Get ready for something big! We have an exciting announcement coming your way tomorrow. Stay tuned and be the first to know!",
  },
  {
    id: 6,
    name: "Boring Newsletter",
    status: "success",
    date: "Sept 9:00 PM -23",
    message:
      "Get ready for something big! We have an exciting announcement coming your way tomorrow. Stay tuned and be the first to know!",
  },
  {
    id: 7,
    name: "Boring Newsletter",
    status: "success",
    date: "Sept 9:00 PM -23",
    message:
      "Get ready for something big! We have an exciting announcement coming your way tomorrow. Stay tuned and be the first to know!",
  },
  {
    id: 8,
    name: "Boring Newsletter",
    status: "Rossini",
    date: "Sept 9:00 PM -23",
    message:
      "Get ready for something big! We have an exciting announcement coming your way tomorrow. Stay tuned and be the first to know!",
  },
  {
    id: 9,
    name: "Boring Newsletter",
    status: "Harvey",
    date: "Sept 9:00 PM -23",
    message:
      "Get ready for something big! We have an exciting announcement coming your way tomorrow. Stay tuned and be the first to know!",
  },
]

export function HistoryTable() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}
