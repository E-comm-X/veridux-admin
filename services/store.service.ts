import { VendorI } from "@/interfaces/product"
import { ReviewI } from "@/interfaces/reviews"
import {
  StoreCategory,
  StoreI,
  StoresResponseI,
  VendorsResponseI,
} from "@/interfaces/store"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/store`,
  }),
  endpoints: (builder) => ({
    getAllStores: builder.query<
      StoreI[],
      { authToken: string; vendor_id?: string; store_id?: string }
    >({
      query: ({ authToken, vendor_id, store_id }) => {
        return {
          url: "/get",
          method: "GET",
          params: { vendor_id, store_id },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (data: StoresResponseI) => data.data.stores,
    }),
    getAllVendors: builder.query<VendorI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/admin/get",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (data: StoresResponseI) => {
        const vendorMap: Record<string, VendorI> = {}
        for (let store of data.data.stores) {
          const vendor = store.vendor as VendorI
          if (vendorMap[vendor._id] === undefined) {
            vendorMap[vendor._id] = vendor
          }
        }
        const vendors = Object.values(vendorMap)
        return vendors
      },
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
          parent_category_id?: string[]
          preview_image?: string
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
    updateCategory: builder.mutation<
      { message: string },
      {
        authToken: string
        data: {
          store_category_id: string
          name: string
          description: string
          preview_image: string
        }
      }
    >({
      query: ({ authToken, data }) => {
        return {
          url: `/category/update`,
          method: "PATCH",
          body: data,
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),

    getStoreCategories: builder.query<
      StoreCategory[],
      { authToken: string; withoutHidden?: boolean }
    >({
      query: ({ authToken, withoutHidden }) => {
        const url = withoutHidden ? "/category/get" : "/category/gethidden"
        return {
          url,
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
    getStoreReviews: builder.query<ReviewI[], { id: string }>({
      query({ id }) {
        return {
          url: `/review?store_id=${id}`,
          method: "GET",
        }
      },
      transformResponse: (data: { data: { reviews: ReviewI[] } }) =>
        data.data.reviews,
    }),
  }),
})

export const {
  useGetAllStoresQuery,
  useToggleStoreStatusMutation,
  useCreateStoreMutation,
  useGetStoreCategoriesQuery,
  useToggleStoreCategoryStatusMutation,
  useCreateStoreCategoryMutation,
  useUpdateCategoryMutation,
  useGetAllVendorsQuery,
  useGetStoreReviewsQuery,
} = storeApi
