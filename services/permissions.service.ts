import { PermissionGroupI, privilege } from "@/interfaces/permissions"
import { userGroupI, userI, userResponseI } from "@/interfaces/userGroup"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const permissionsApi = createApi({
  reducerPath: "permissionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/rbac`,
  }),
  endpoints: (builder) => ({
    getPermissionGroups: builder.query<
      PermissionGroupI[],
      { authToken: string }
    >({
      query: ({ authToken }) => {
        return {
          url: "/permissiongroup/all/get",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: {
        data: { permission_groups: PermissionGroupI[] }
      }) => {
        return response.data.permission_groups
      },
    }),

    getPrivileges: builder.query<privilege[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/priviledge/all/get",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: { data: { priviledges: privilege[] } }) => {
        return response.data.priviledges
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
  useGetPrivilegesQuery,
  useCreatePermissionGroupMutation,
  useUpdatePermissionGroupMutation,
  useGetPermissionQuery,
  useGetPrevilegesInGroupQuery,
  useAddPrivilegeToGroupMutation,
  useRemovePrivilegeFromGroupMutation,
} = permissionsApi
