import { userGroupI } from "@/interfaces/userGroup"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userGroupApi = createApi({
  reducerPath: "userGroupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/usergroup`,
  }),
  endpoints: (builder) => ({
    getUserGroups: builder.query<
      { data: { user_group: userGroupI[] } },
      { authToken: string }
    >({
      query: ({ authToken }) => {
        return {
          url: "/",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
  }),
})

export const { useGetUserGroupsQuery } = userGroupApi
