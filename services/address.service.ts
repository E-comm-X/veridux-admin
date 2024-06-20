import { AddressI, AddressResponseI } from "@/interfaces/address"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/address`,
  }),
  endpoints: (builder) => ({
    getAddress: builder.query<AddressI[], { authToken: string }>({
      query({ authToken }) {
        return {
          url: "/",
          method: "GET",
          params: { purpose: "pickup" },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: AddressResponseI) => {
        return response.data.addresses
      },
    }),
    addAddress: builder.mutation<
      { address: AddressI; message: string },
      {
        authToken: string
        place_id: string
        description: string
        phone: string
      }
    >({
      query: ({ place_id, description, phone, authToken }) => {
        return {
          url: "/new",
          method: "POST",
          body: {
            place_id,
            description,
            phone,
            purpose: "pickup",
            is_company_address: true,
          },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: {
        data: { data: { address: AddressI; message: string } }
      }) => {
        return response.data.data
      },
    }),
    updateAddress: builder.mutation<
      { address: AddressI; message: string },
      {
        authToken: string
        address_id: string
        description: string
        phone: string
      }
    >({
      query: ({ address_id, description, phone, authToken }) => {
        return {
          url: "/update",
          method: "PATCH",
          body: { address_id, description, phone, purpose: "pickup" },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: {
        data: { data: { address: AddressI; message: string } }
      }) => {
        return response.data.data
      },
    }),

    setDefaultAddress: builder.mutation<
      { address: AddressI; message: string },
      {
        authToken: string
        address_id: string
      }
    >({
      query: ({ address_id, authToken }) => {
        return {
          url: "/default/set",
          method: "POST",
          body: { address_id },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: {
        data: { data: { address: AddressI; message: string } }
      }) => {
        return response.data.data
      },
    }),
    deleteAddress: builder.mutation<
      { data: null },
      {
        authToken: string
        address_id: string
      }
    >({
      query: ({ address_id, authToken }) => {
        return {
          url: "/delete",
          method: "DELETE",
          body: { address_id },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (response: { data: { data: { data: null } } }) => {
        return response.data.data
      },
    }),
  }),
})

export const {
  useGetAddressQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useSetDefaultAddressMutation,
  useDeleteAddressMutation,
} = addressApi
