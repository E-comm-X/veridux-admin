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
      {params.value === "in-draft" ? (
        <Tag color="warning" bordered={false}>
          In Draft
        </Tag>
      ) : params.value === "published" ? (
        <Tag color="success" bordered={false}>
          Published
        </Tag>
      ) : (
        <Tag color="processing" bordered={false}>
          Scheduled
        </Tag>
      )}
    </>
  )
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    editable: true,
    flex: 2,
    renderCell: RenderTitle,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.title || ""} - ${params.row.subtitle || ""}`,
  },
  {
    field: "status",
    headerName: "status",
    editable: true,
    flex: 1,
    renderCell: RenderStatus,
  },
  {
    field: "date",
    headerName: "Date",
    editable: true,
    flex: 1,
  },
  {
    field: "user_group",
    headerName: "User Group",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
  },
  {
    field: "opens",
    headerName: "Opens",
    type: "number",
    editable: true,
    flex: 1,
  },
  {
    field: "clicks",
    headerName: "Clicks",
    editable: true,
    flex: 1,
  },
]

const rows = [
  {
    id: 1,
    title: "Boring Newsletter",
    status: "in-draft",
    date: "Last edited, 3:00PM",
    user_group: "Vendor",
    opens: "80.56%",
    clicks: "21%",
    subtitle: "Back and ready to spice up...",
  },
  {
    id: 2,
    title: "Boring Newsletter",
    status: "published",
    date: "Last edited, 3:00PM",
    user_group: "Super User",
    opens: "80.56%",
    clicks: "21%",
    subtitle: "Back and ready to spice up...",
  },
  {
    id: 3,
    title: "Boring Newsletter",
    status: "published",
    date: "Last edited, 3:00PM",
    user_group: "Vendor",
    opens: "80.56%",
    clicks: "21%",
    subtitle: "Back and ready to spice up...",
  },
  {
    id: 4,
    title: "Boring Newsletter",
    status: "schduled",
    date: "Last edited, 3:00PM",
    user_group: "Super User",
    opens: "80.56%",
    clicks: "21%",
    subtitle: "Back and ready to spice up...",
  },
  {
    id: 5,
    title: "Boring Newsletter",
    status: "published",
    date: "Last edited, 3:00PM",
    user_group: "Super User",
    opens: "80.56%",
    clicks: "21%",
    subtitle: "Back and ready to spice up...",
  },
  {
    id: 6,
    title: "Boring Newsletter",
    status: null,
    date: "Last edited, 3:00PM",
    user_group: "Vendor",
    opens: "80.56%",
    clicks: "21%",
    subtitle: "Back and ready to spice up...",
  },
  {
    id: 7,
    title: "Boring Newsletter",
    status: "Ferrara",
    date: "Last edited, 3:00PM",
    user_group: "Vendor",
    opens: "80.56%",
    clicks: "21%",
    subtitle: "Back and ready to spice up...",
  },
  {
    id: 8,
    title: "Boring Newsletter",
    status: "Rossini",
    date: "Last edited, 3:00PM",
    user_group: "Vendor",
    opens: "80.56%",
    clicks: "21%",
    subtitle: "Back and ready to spice up...",
  },
  {
    id: 9,
    title: "Boring Newsletter",
    status: "Harvey",
    date: "Last edited, 3:00PM",
    user_group: "Vendor",
    opens: "80.56%",
    clicks: "21%",
    subtitle: "Back and ready to spice up...",
  },
]

export function CampaignsTable() {
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
