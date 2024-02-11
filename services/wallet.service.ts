import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/wallet`,
  }),
  endpoints: (builder) => ({}),
})

export const {} = walletApi
