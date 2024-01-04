import { SignInRequest, SignInResponse } from "@/interfaces/auth"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/product`,
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
  }),
})

export const { useLoginMutation } = productApi
