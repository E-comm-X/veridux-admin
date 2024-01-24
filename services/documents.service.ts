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

    updateDocument: builder.mutation<
      { message: string },
      {
        authToken: string
        documents_to_approve?: string[]
        documents_to_reject?: string[]
      }
    >({
      query: ({ documents_to_approve, documents_to_reject, authToken }) => {
        console.log({ documents_to_approve, documents_to_reject })

        return {
          url: "/status/update",
          body:
            (documents_to_approve?.length as number) > 0
              ? { documents_to_approve }
              : { documents_to_reject },
          method: "PATCH",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
  }),
})

export const {
  useGetAllDocumentRequestsQuery,
  useGetDocumentsByStatusQuery,
  useUpdateDocumentMutation,
} = documentsApi
