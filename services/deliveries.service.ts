import { ShipmentI } from "@/interfaces/shipment"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const deliveryApi = createApi({
  reducerPath: "deliveryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/delivery`,
  }),
  endpoints: (builder) => ({
    getShipments: builder.query<ShipmentI[], { authToken: string }>({
      query: ({ authToken }) => {
        return {
          url: "/",
          method: "GET",
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        }
      },
      transformResponse: (res: { data: { shipments: ShipmentI[] } }) =>
        res.data.shipments.slice().reverse(),
    }),
  }),
})

export const { useGetShipmentsQuery } = deliveryApi
