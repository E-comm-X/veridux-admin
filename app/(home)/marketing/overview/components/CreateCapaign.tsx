import { AddCircleOutline } from "@mui/icons-material"
import { Button } from "@mui/material"
import React from "react"

export const CreateCapaign = () => {
  return (
    <div>
      <Button
        variant="contained"
        className="bg-primary capitalize"
        color="primary"
        startIcon={<AddCircleOutline />}
      >
        new Campaign
      </Button>
    </div>
  )
}
