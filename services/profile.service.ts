import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/profile`,
  }),
  endpoints(builder) {
    return {
      getUserData: builder.query({
        query({ authToken }) {
          return {
            url: "/",
            method: "GET",
            headers: {
              authorization: `Bearer ${authToken}`,
            },
          }
        },
      }),
    }
  },
})
