import {
  ProductI,
  ProductRequestI,
  ProductResponseI,
} from "@/interfaces/product"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/product`,
  }),
  endpoints: (builder) => ({
    addProduct: builder.mutation<ProductI, ProductRequestI>({
      query: (data) => {
        const formdata = new FormData()
        formdata.append("preview_image", data.preview_image as Blob, "test")
        formdata.append("store_id", data.store_id)
        formdata.append("product_name", data.product_name)
        formdata.append("details", data.details)
        formdata.append("price", data.price)
        formdata.append("total_quantity", data.total_quantity)
        formdata.append("category_ids", data.category_ids)
        formdata.append("brand_name", data.brand_name)
        return {
          url: "/new",
          method: "POST",
          body: formdata,
          maxBodyLength: Infinity,
          headers: {
            authorization: `Bearer ${data.authToken}`,
          },
        }
      },
    }),
    getAllProducts: builder.query<ProductI[], null>({
      query() {
        return {
          url: "/get",
          method: "GET",
        }
      },
      transformResponse: (data: ProductResponseI) => data.data.products,
    }),
  }),
})

export const { useAddProductMutation, useGetAllProductsQuery } = productApi
