import { StoreI, StoresResponseI } from "@/interfaces/store"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/store`,
  }),
  endpoints: (builder) => ({
    getAllStores: builder.query<StoreI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/admin/get",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (data: StoresResponseI) => data.data.stores,
    }),
  }),
})

export const { useGetAllStoresQuery } = storeApi
