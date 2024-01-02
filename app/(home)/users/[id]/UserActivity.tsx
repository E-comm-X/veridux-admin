"use client"
import React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"
import FileDownloadIcon from "@mui/icons-material/FileDownload"

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: any) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
]

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
]

function Table() {
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
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default function UserActivity() {
  return (
    <div className="flex flex-col ">
      <div className="flex  p-4 ">
        <h3 className="text-base font-semibold">User activity</h3>
        <div className="buttton-container ml-auto flex gap-4">
          <button className="border-[#006FCF] border-2 text-center rounded px-6 py-2 bg-white text-[#006FCF] font-semibold text-sm">
            Import
          </button>
          <button className="bg-[#006FCF]  text-center rounded px-6 py-2 text-white font-semibold text-sm">
            Export
          </button>
        </div>
      </div>
      <Table />
    </div>
  )
}
