import {
  CategoriesResponseI,
  CategoryI,
  CategoryRequestI,
} from "@/interfaces/categories"
import { DocumentRequestI } from "@/interfaces/documents"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const documentsApi = createApi({
  reducerPath: "documentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/document`,
  }),
  endpoints: (builder) => ({
    getAllDocumentRequests: builder.query<
      DocumentRequestI[],
      { authToken: string }
    >({
      query: ({ authToken }) => {
        return {
          url: "/request",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (data: {
        data: { document_verification_request: DocumentRequestI[] }
      }) => data.data.document_verification_request,
    }),
    getDocumentsByStatus: builder.query<
      DocumentRequestI[],
      { status: string; authToken: string }
    >({
      query: ({ authToken, status }) => {
        return {
          url: `/request/?status=${status}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (data: {
        data: { document_verification_request: DocumentRequestI[] }
      }) => data.data.document_verification_request,
    }),
    addCategory: builder.mutation<
      DocumentRequestI,
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

export const { useGetAllDocumentRequestsQuery, useGetDocumentsByStatusQuery } =
  documentsApi
