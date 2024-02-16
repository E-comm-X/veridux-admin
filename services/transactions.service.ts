import {
  TransactionsResponse,
  TransactionI,
  TransactionInfoResponse,
} from "@/interfaces/transactions"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/transaction`,
  }),
  endpoints: (builder) => ({
    getTransactions: builder.query<TransactionI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/records",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: TransactionsResponse) => {
        return response.data.transactions
      },
    }),
    getTransactionInfo: builder.query<
      TransactionI,
      { authToken: string; transaction_id?: string; reference?: string }
    >({
      query: ({ authToken, transaction_id, reference }) => {
        return {
          url: "/info",
          params: { transaction_id, reference },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: TransactionInfoResponse) => {
        return response.data.transactions
      },
    }),
  }),
})

export const { useGetTransactionsQuery, useGetTransactionInfoQuery } =
  transactionApi
