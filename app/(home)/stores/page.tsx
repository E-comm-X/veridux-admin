"use client"
import { GoBack } from "@/components/GoBack"
import { useSearchParams } from "next/navigation"
import { StoresTable } from "./StoresTable"
import { AddStore } from "./AddStore"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useGetUserDataQuery } from "@/services/auth.service"
import { useGetAllStoresQuery } from "@/services/store.service"

export default function StoresPage() {
  const { token } = useAuthToken()
  const { data: vendorData, isLoading: loadingUser } = useGetUserDataQuery({
    authToken: token as string,
  })
  const { refetch, isLoading } = useGetAllStoresQuery({
    authToken: token as string,
    vendor_id: vendorData?.profile?.user,
  })
  const loading = isLoading || loadingUser
  return (
    <main>
      <GoBack />
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="md:text-2xl text-lg text-black font-bold">
            My Stores
          </h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        {!loading && <AddStore refetchStores={refetch} />}
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <StoresTable />
    </main>
  )
}
