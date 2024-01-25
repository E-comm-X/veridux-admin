import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/profile`,
  }),
  endpoints(builder) {
    return {
      updateProfile: builder.mutation({
        query({ authToken }) {
          return {
            url: "/",
            method: "PATCH",
            headers: {
              authorization: `Bearer ${authToken}`,
            },
          }
        },
      }),
    }
  },
})
