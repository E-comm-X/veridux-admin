"use client"
import React from "react"
import { useParams } from "next/navigation"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useGetTransactionInfoQuery } from "@/services/transactions.service"

const Page = () => {
  const { id } = useParams()
  const { token } = useAuthToken()
  const { data, isLoading } = useGetTransactionInfoQuery({
    authToken: token as string,
    transaction_id: id as string,
  })
  console.log(data)
  return <div>Page</div>
}

export default Page
