import { CategoriesResponseI, CategoryI } from "@/interfaces/categories"
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
  }),
})

export const { useGetAllCategoriesQuery } = categoryApi
