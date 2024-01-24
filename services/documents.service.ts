import {
  CategoriesResponseI,
  CategoryI,
  CategoryRequestI,
} from "@/interfaces/categories"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const documentsApi = createApi({
  reducerPath: "documentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/document`,
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
    addCategory: builder.mutation<
      CategoryI,
      { data: CategoryRequestI; authToken: string | null }
    >({
      query: ({ data, authToken }) => {
        console.log(data)

        return {
          url: "/new",
          data: data,
          method: "POST",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
  }),
})

export const { useGetAllCategoriesQuery, useAddCategoryMutation } = documentsApi
