import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URI}/profile`,
  }),
  endpoints(builder) {
    return {
      updateProfile: builder.mutation<
        any,
        {
          profile_picture?: File | null
          authToken: string
          firstname?: string
          lastname?: string
          phone_number?: string
          email?: string
        }
      >({
        query({
          authToken,
          phone_number,
          firstname,
          lastname,
          profile_picture,
          email,
        }) {
          const formData = new FormData()
          phone_number &&
            formData.append("phone_number", phone_number as string)
          firstname && formData.append("firstname", firstname as string)
          lastname && formData.append("lastname", lastname as string)
          profile_picture &&
            formData.append(
              "profile_picture",
              profile_picture as File,
              profile_picture?.name as string
            )
          email && formData.append("email", email as string)

          return {
            url: "/enduser/update",
            method: "POST",
            body: formData,
            headers: {
              authorization: `Bearer ${authToken}`,
            },
          }
        },
      }),
    }
  },
})

export const { useUpdateProfileMutation } = profileApi
