import { StoreCategory, StoreI, StoresResponseI } from "@/interfaces/store"
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
    toggleStoreStatus: builder.mutation<
      {
        success: boolean
        message: string
        data: null
      },
      {
        id: string
        authToken: string
        action: "open" | "close" | "activate" | "deactivate"
      }
    >({
      query: ({ id, authToken, action }) => {
        return {
          url: `/${action}`,
          method: "POST",
          body: { store_id: id },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),

    createStore: builder.mutation<
      { message: string },
      {
        authToken: string
        data: {
          name: string
          description: string
          address: string
          store_category_ids: string[]
        }
      }
    >({
      query: ({ authToken, data }) => {
        return {
          url: `/new`,
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),

    createStoreCategory: builder.mutation<
      { message: string },
      {
        authToken: string
        data: {
          name: string
          description: string
          is_first_level: boolean
          // store_category_ids: string[]
        }
      }
    >({
      query: ({ authToken, data }) => {
        return {
          url: `/category/new`,
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),

    getStoreCategories: builder.query<StoreCategory[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/category/gethidden",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (data: {
        data: { store_categories: StoreCategory[] }
      }) => data.data.store_categories,
    }),

    toggleStoreCategoryStatus: builder.mutation<
      {
        success: boolean
        message: string
        data: null
      },
      {
        id: string
        authToken: string
        action: "hide" | "show"
      }
    >({
      query: ({ id, authToken, action }) => {
        return {
          url: `/category/${action}`,
          method: "POST",
          body: { store_category_id: id },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
  }),
})

export const {
  useGetAllStoresQuery,
  useToggleStoreStatusMutation,
  useCreateStoreMutation,
  useGetStoreCategoriesQuery,
  useToggleStoreCategoryStatusMutation,
} = storeApi
