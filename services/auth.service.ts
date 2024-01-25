import { SignInRequest, SignInResponse } from "@/interfaces/auth"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/auth`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<SignInResponse, SignInRequest>({
      query: ({ email, password, phone_number }) => {
        return {
          url: "/login",
          method: "POST",
          body: { email, password, phone_number },
        }
      },
    }),
    getUserData: builder.query<any, { authToken: string }>({
      query({ authToken }) {
        return {
          url: "/loggedinuser",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
  }),
})

export const { useLoginMutation, useGetUserDataQuery } = authApi
