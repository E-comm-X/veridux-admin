import {
  PermissionGroupI,
  privilege,
  privilegeQuery,
} from "@/interfaces/permissions"
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
      {
        authToken: string
        name: string
        allowed_priviledges: string[]
        restricted_priviledges?: string[]
      }
    >({
      query: ({
        authToken,
        name,
        allowed_priviledges,
        restricted_priviledges,
      }) => {
        return {
          url: "/permissiongroup/new",
          method: "POST",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          body: {
            name,
            allowed_priviledges: allowed_priviledges || [],
            restricted_priviledges: restricted_priviledges || [],
          },
        }
      },
    }),

    createPrivilege: builder.mutation<
      { data: { message: string } },
      privilegeQuery
    >({
      query: ({ authToken, ...data }) => {
        return {
          url: "/priviledge/new",
          method: "POST",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          body: data,
        }
      },
    }),

    updatePermissionGroup: builder.mutation<
      { data: { message: string } },
      {
        authToken: string
        action: "add" | "remove"
        priviledge_id: string
        route: "allowedpriviledges" | "restrictedpriviledges"
        permission_group_id: string
      }
    >({
      query: ({
        authToken,
        action,
        priviledge_id,
        permission_group_id,
        route,
      }) => {
        return {
          url: `/permissiongroup/${route}/update/?permission_group_id=${permission_group_id}`,
          method: "PATCH",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          body: { action, priviledge_id },
        }
      },
    }),

    deletePermissionGroup: builder.mutation<
      { message: string },
      { authToken: string; permission_group_id: string }
    >({
      query: ({ authToken, permission_group_id }) => {
        return {
          url: `/permissiongroup/delete/?permission_group_id=${permission_group_id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
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
  useCreatePrivilegeMutation,
  useUpdatePermissionGroupMutation,
  useGetPermissionQuery,
  useGetPrevilegesInGroupQuery,
  useAddPrivilegeToGroupMutation,
  useRemovePrivilegeFromGroupMutation,
  useDeletePermissionGroupMutation,
} = permissionsApi
