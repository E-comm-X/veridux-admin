import { userGroupI, userI, userResponseI } from "@/interfaces/userGroup"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userGroupApi = createApi({
  reducerPath: "userGroupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/usergroup`,
  }),
  endpoints: (builder) => ({
    getUserGroups: builder.query<
      { data: { user_group: userGroupI[] } },
      { authToken: string; group_id?: string; role?: string }
    >({
      query: ({ authToken, group_id, role }) => {
        return {
          url: "/",
          method: "GET",
          params: { group_id, role },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
    getUser: builder.query<
      { data: userResponseI },
      { authToken: string; user_id: string }
    >({
      query: ({ authToken, user_id }) => {
        return {
          url: `/user/info?user_id=${user_id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
    getUsersInGroup: builder.query<
      { data: { users: userI[] } },
      { authToken: string; group_id: string }
    >({
      query: ({ authToken, group_id }) => {
        return {
          url: `/user?group_id=${group_id}`,
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

    updateUserGroup: builder.mutation<
      { data: { message: string } },
      { authToken: string; group_name: string; group_id: string }
    >({
      query: ({ authToken, group_name, group_id }) => {
        return {
          url: "/update",
          method: "PATCH",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          body: { group_name, group_id },
        }
      },
    }),
    addUserToGroup: builder.mutation<
      { message: string },
      { authToken: string; user_id: string; group_id: string }
    >({
      query: ({ authToken, user_id, group_id }) => {
        return {
          url: "/adduser",
          method: "POST",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          body: { user_id, group_id },
        }
      },
    }),
    removeUserFromGroup: builder.mutation<
      { message: string },
      { authToken: string; user_id: string; group_id: string }
    >({
      query: ({ authToken, user_id, group_id }) => {
        return {
          url: "/removeuser",
          method: "POST",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          body: { user_id, group_id },
        }
      },
    }),
  }),
})

export const {
  useGetUserGroupsQuery,
  useCreateUserGroupMutation,
  useUpdateUserGroupMutation,
  useGetUserQuery,
  useGetUsersInGroupQuery,
  useAddUserToGroupMutation,
  useRemoveUserFromGroupMutation,
} = userGroupApi
