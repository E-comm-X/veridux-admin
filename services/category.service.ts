import {
  CategoriesResponseI,
  CategoryI,
  CategoryRequestI,
} from "@/interfaces/categories"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/product/category`,
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoryI[], null>({
      query: () => {
        return {
          url: "/get",
          method: "GET",
        }
      },
      transformResponse: (data: CategoriesResponseI) =>
        data.data.product_categories,
    }),
    getCategoriesWithHidden: builder.query<CategoryI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/gethidden",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (data: CategoriesResponseI) =>
        data.data.product_categories,
    }),
    addCategory: builder.mutation<
      CategoryI,
      { data: CategoryRequestI; authToken: string | null }
    >({
      query: ({ data, authToken }) => {
        console.log(data)

        return {
          url: "/new",
          body: data,
          method: "POST",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
    updateProductCategory: builder.mutation<
      { message: string },
      {
        authToken: string
        data: {
          product_category_id: string
          name: string
          description: string
          featured: boolean
          position?: number
        }
      }
    >({
      query: ({ authToken, data }) => {
        return {
          url: `/update`,
          method: "PATCH",
          body: data,
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
    toggleProductCategoryStatus: builder.mutation<
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
          url: `/${action}`,
          method: "POST",
          body: { product_category_id: id },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
  }),
})

export const {
  useGetAllCategoriesQuery,
  useAddCategoryMutation,
  useToggleProductCategoryStatusMutation,
  useGetCategoriesWithHiddenQuery,
  useUpdateProductCategoryMutation,
} = categoryApi
