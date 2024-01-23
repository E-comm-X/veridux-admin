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
    createUserGroup: builder.mutation<
      { data: { message: string } },
      { authToken: string; group_name: string }
    >({
      query: ({ authToken, group_name }) => {
        return {
          url: "/new",
          method: "POST",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          body: { group_name },
        }
      },
    }),
  }),
})

export const { useGetUserGroupsQuery, useCreateUserGroupMutation } =
  userGroupApi
