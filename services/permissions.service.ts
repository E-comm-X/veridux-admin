import { userGroupI, userI, userResponseI } from "@/interfaces/userGroup"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const permissionsApi = createApi({
  reducerPath: "permissionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/rbac/permissiongroup`,
  }),
  endpoints: (builder) => ({
    getPermissionGroups: builder.query<
      { data: { user_group: userGroupI[] } },
      { authToken: string }
    >({
      query: ({ authToken }) => {
        return {
          url: "/all/get",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
    }),
    getPermission: builder.query<
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
    getPrevilegesInGroup: builder.query<
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
    createPermissionGroup: builder.mutation<
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

    updatePermissionGroup: builder.mutation<
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
    addPrivilegeToGroup: builder.mutation<
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
    removePrivilegeFromGroup: builder.mutation<
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
  useGetPermissionGroupsQuery,
  useCreatePermissionGroupMutation,
  useUpdatePermissionGroupMutation,
  useGetPermissionQuery,
  useGetPrevilegesInGroupQuery,
  useAddPrivilegeToGroupMutation,
  useRemovePrivilegeFromGroupMutation,
} = permissionsApi
