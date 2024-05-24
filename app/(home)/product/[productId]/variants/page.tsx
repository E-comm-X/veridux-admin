"use client"
import React from "react"
import { ProductVariantsTable } from "./VariantTable"
import { useGetProductQuery } from "@/services/product.service"
import { useParams } from "next/navigation"
import { GoBack } from "@/components/GoBack"

export default function Page() {
  const { productId } = useParams()
  const {
    data: product,
    isLoading: loadingProduct,
    refetch: refechProduct,
  } = useGetProductQuery({
    id: productId as string,
  })
  return (
    <main>
      <GoBack />
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">
            {product?.name} - All Variants
          </h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <ProductVariantsTable />
    </main>
  )
}
