import { SignInRequest } from "@/interfaces/auth"
import { useLoginMutation } from "@/services/auth.service"
import { useAuthToken } from "./useAuthToken"
import { message } from "antd"
import { useRouter } from "next/navigation"
import { useRole } from "./useRole"

export const useLogin = ({ phone_number, email, password }: SignInRequest) => {
  const [loginMutation, { isLoading, error, data }] = useLoginMutation()
  const { setToken } = useAuthToken()
  const { setRole } = useRole()
  const router = useRouter()

  const login = async () => {
    try {
      const response = await loginMutation({
        phone_number,
        email,
        password,
      }).unwrap()
      const role = response.data.user.role.toLowerCase()
      const isAdmin = role.includes("admin")
      const isVendor = role === "vendor"
      if (isAdmin || isVendor) {
        setToken(response.data.access_token)
        setRole(response.data.user.role)
        message.success(response.message)
        router.replace("/")
      } else {
        message.error(
          "You are not authorized to login as an admin or vendor",
          5
        )
      }

      return response
    } catch (error: any) {
      message.error(
        error?.data?.message || error?.message || "An Error Occured"
      )
    }
  }

  return {
    login,
    isLoading,
    error,
    data,
  }
}
