import { AddressI } from "@/interfaces/address"
import { ShipmentI, VehicleI } from "@/interfaces/shipment"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const deliveryApi = createApi({
  reducerPath: "deliveryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}`,
  }),
  endpoints: (builder) => ({
    getShipments: builder.query<ShipmentI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/delivery",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (res: { data: { shipments: ShipmentI[] } }) =>
        res.data.shipments.slice().reverse(),
    }),
    getVehicles: builder.query<VehicleI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/delivery/vehicles",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (res: { data: { vehicles: VehicleI[] } }) =>
        res.data.vehicles.slice().reverse(),
    }),
    getAddresses: builder.query<AddressI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/address/?purpose=pickup&is_company_address=true",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (res: { data: { addresses: AddressI[] } }) =>
        res.data.addresses.slice().reverse(),
    }),
    arrangeDelivery: builder.mutation<
      ShipmentI,
      {
        authToken: string
        reqData: {
          transaction_id: string
          pickup_address_id: string
          pickup_date: string
        }
      }
    >({
      query: ({ authToken, reqData }) => {
        return {
          url: "/delivery/pickup/arrange",
          method: "POST",
          body: { ...reqData },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (res: { data: { shipment: ShipmentI } }) =>
        res.data.shipment,
    }),
    confirmArrangement: builder.mutation<
      ShipmentI,
      {
        authToken: string
        reqData: {
          shipment_id: string
        }
      }
    >({
      query: ({ authToken, reqData }) => {
        return {
          url: "/delivery/pickup/confirm",
          method: "POST",
          body: { ...reqData },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (res: { data: { shipment: ShipmentI } }) =>
        res.data.shipment,
    }),
    rescheduleDelivery: builder.mutation<
      ShipmentI,
      {
        authToken: string
        reqData: {
          shipment_id: string
          pickup_date: string
        }
      }
    >({
      query: ({ authToken, reqData }) => {
        return {
          url: "/delivery/pickup/reschedule",
          method: "POST",
          body: { ...reqData },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (res: { data: { shipment: ShipmentI } }) =>
        res.data.shipment,
    }),
    updatePickup: builder.mutation<
      ShipmentI,
      {
        authToken: string
        reqData: {
          shipment_id: string
        }
      }
    >({
      query: ({ authToken, reqData }) => {
        return {
          url: "/delivery/pickup/update",
          method: "PATCH",
          body: { ...reqData },
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (res: { data: { shipment: ShipmentI } }) =>
        res.data.shipment,
    }),
  }),
})

export const {
  useGetShipmentsQuery,
  useGetVehiclesQuery,
  useGetAddressesQuery,
  useArrangeDeliveryMutation,
  useConfirmArrangementMutation,
  useRescheduleDeliveryMutation,
  useUpdatePickupMutation,
} = deliveryApi
