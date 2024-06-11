"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { AddressSettings } from "./AddressSettings"
import { GoBack } from "@/components/GoBack"

const AddressSettingsPage = () => {
  const router = useRouter()
  return (
    <div className="container mx-auto">
      <GoBack />
      <h3 className="text-2xl font-semibold my-5">Settings</h3>

      <div>
        <AddressSettings />
      </div>
    </div>
  )
}

export default AddressSettingsPage
