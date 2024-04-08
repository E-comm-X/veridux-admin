import {
  EndUserWalletI,
  WalletI,
  walletInfoResponse,
  walletsResponse,
} from "@/interfaces/Wallet"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/wallet`,
  }),
  endpoints: (builder) => ({
    getCompanyWallets: builder.query<WalletI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/cmp",
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
          url: "/cmp/info",
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

    getEndUserWalletInfo: builder.query<
      EndUserWalletI,
      { authToken: string; enduser_id: string }
    >({
      query: ({ authToken, enduser_id }) => {
        return {
          url: "/info",
          params: { enduser_id },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: { data: { wallet: WalletI } }) => {
        return response.data.wallet
      },
    }),
  }),
})

export const {
  useGetCompanyWalletsQuery,
  useGetWalletInfoQuery,
  useGetEndUserWalletInfoQuery,
} = walletApi
