import { StoreI, StoresResponseI } from "@/interfaces/store"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/store`,
  }),
  endpoints: (builder) => ({
    getAllStores: builder.query<StoreI[], null>({
      query: () => {
        return {
          url: "/admin/get",
          method: "GET",
        }
      },
      transformResponse: (data: StoresResponseI) => data.data.stores,
    }),
  }),
})

export const { useGetAllStoresQuery } = storeApi
