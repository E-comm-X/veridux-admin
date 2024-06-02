"use client"
import { GoBack } from "@/components/GoBack"
import React from "react"
import { PurchasedProductsTable } from "../PurchasedProductsTable"
import { useGetTransactionsQuery } from "@/services/transactions.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import { TransactionI } from "@/interfaces/transactions"

const ArrangePickupPage = () => {
  const { token } = useAuthToken()
  const { data, isLoading } = useGetTransactionsQuery({
    authToken: token as string,
  })
  const purchases = data?.filter(
    (product) =>
      product?.type === "product_purchase" &&
      product?.kind === "debit" &&
      product?.payment_method === "wallet"
  )
  return (
    <main>
      <GoBack />
      <div className="flex gap-3 md:flex-row flex-col md:items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Arrange Pickup</h2>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <p>Purchased Products</p>
        <PurchasedProductsTable
          data={purchases as TransactionI[]}
          isLoading={isLoading}
        />
      </div>
    </main>
  )
}

export default ArrangePickupPage
