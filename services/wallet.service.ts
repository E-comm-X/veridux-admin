import { WalletI, walletsResponse } from "@/interfaces/Wallet"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/wallet/cmp`,
  }),
  endpoints: (builder) => ({
    getCompanyWallets: builder.query<WalletI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: walletsResponse) => {
        return response.data.company_wallets
      },
    }),
  }),
})

export const { useGetCompanyWalletsQuery } = walletApi
