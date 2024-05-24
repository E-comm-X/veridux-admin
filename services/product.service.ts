import {
  ProductI,
  ProductRequestI,
  ProductResponseI,
  ProductUpdateRequestI,
  ProductsResponseI,
  VariantI,
} from "@/interfaces/product"
import { ReviewI } from "@/interfaces/reviews"
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
        formdata.append("price", data.price as string)
        formdata.append("total_quantity", data.total_quantity as string)
        formdata.append("category_ids", data.category_ids as string)
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

    addProductVariant: builder.mutation<
      ProductI,
      {
        product_id: string
        color: string
        preview_image: Blob | null
        total_quantity: string
        authToken: string
      }
    >({
      query: (data) => {
        const formdata = new FormData()
        formdata.append("product_id", data.product_id)
        formdata.append("preview_image", data.preview_image as Blob, "test")
        formdata.append("color", data.color as string)
        formdata.append("total_quantity", data.total_quantity as string)
        return {
          url: "/variant/new",
          method: "POST",
          body: formdata,
          maxBodyLength: Infinity,
          headers: {
            authorization: `Bearer ${data.authToken}`,
          },
        }
      },
    }),
    updateProduct: builder.mutation<ProductI, ProductUpdateRequestI>({
      query: (data) => {
        return {
          url: "/update",
          method: "PATCH",
          body: data,
          headers: {
            authorization: `Bearer ${data.authToken}`,
          },
        }
      },
    }),
    updateProductVariant: builder.mutation<
      VariantI,
      {
        color: string
        total_quantity: number
        authToken: string
        product_variant_id: string
      }
    >({
      query: (data) => {
        return {
          url: "/variant/update",
          method: "PATCH",
          body: data,
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
      transformResponse: (data: ProductsResponseI) => data.data.products,
    }),
    getProduct: builder.query<ProductI, { id: string }>({
      query({ id }) {
        return {
          url: `/info/get?product_id=${id}`,
          method: "GET",
        }
      },
      transformResponse: (data: ProductResponseI) => data.data.product,
    }),
    hideProduct: builder.mutation<
      {
        success: boolean
        message: string
        data: null
      },
      { id: string; authToken: string }
    >({
      query({ id, authToken }) {
        return {
          url: `/hide`,
          method: "POST",
          body: {
            product_id: id,
          },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          redirect: "follow",
        }
      },
    }),
    hideProductVariant: builder.mutation<
      {
        success: boolean
        message: string
        data: null
      },
      { id: string; authToken: string }
    >({
      query({ id, authToken }) {
        return {
          url: `/variant/hide`,
          method: "POST",
          body: {
            product_variant_id: id,
          },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          redirect: "follow",
        }
      },
    }),
    showProduct: builder.mutation<
      {
        success: boolean
        message: string
        data: null
      },
      { id: string; authToken: string }
    >({
      query({ id, authToken }) {
        return {
          url: `/show`,
          method: "POST",
          body: {
            product_id: id,
          },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          redirect: "follow",
        }
      },
    }),
    showProductVariant: builder.mutation<
      {
        success: boolean
        message: string
        data: null
      },
      { id: string; authToken: string }
    >({
      query({ id, authToken }) {
        return {
          url: `/variant/show`,
          method: "POST",
          body: {
            product_variant_id: id,
          },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          redirect: "follow",
        }
      },
    }),
    getProductReviews: builder.query<ReviewI[], { id: string }>({
      query({ id }) {
        return {
          url: `/review?product_id=${id}`,
          method: "GET",
        }
      },
      transformResponse: (data: { data: { product_reviews: ReviewI[] } }) =>
        data.data.product_reviews,
    }),
  }),
})

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
  useHideProductMutation,
  useShowProductMutation,
  useAddProductVariantMutation,
  useUpdateProductVariantMutation,
  useHideProductVariantMutation,
  useShowProductVariantMutation,
  useGetProductReviewsQuery,
} = productApi
