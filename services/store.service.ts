import { ProductI, ProductRequestI } from "@/interfaces/product"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/product`,
  }),
  endpoints: (builder) => ({
    addProduct: builder.mutation<ProductI, ProductRequestI>({
      query: (data) => {
        const formData = new FormData()
        formData.append("preview_image", data.preview_image)
        return {
          url: "/new",
          method: "POST",
          body: data,
        }
      },
    }),
  }),
})

export const { useAddProductMutation } = productApi
