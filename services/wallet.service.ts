import {
  WalletI,
  walletInfoResponse,
  walletsResponse,
} from "@/interfaces/Wallet"
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
    getWalletInfo: builder.query<
      WalletI,
      { authToken: string; purpose: string }
    >({
      query: ({ authToken, purpose }) => {
        return {
          url: "/",
          params: { purpose },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: walletInfoResponse) => {
        return response.data.company_wallet
      },
    }),
  }),
})

export const { useGetCompanyWalletsQuery, useGetWalletInfoQuery } = walletApi
