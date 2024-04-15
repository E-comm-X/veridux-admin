import { SignInRequest } from "@/interfaces/auth"
import { useLoginMutation } from "@/services/auth.service"
import { useAuthToken } from "./useAuthToken"
import { message } from "antd"
import { useRouter } from "next/navigation"

export const useLogin = ({ phone_number, email, password }: SignInRequest) => {
  const [loginMutation, { isLoading, error, data }] = useLoginMutation()
  const { setToken } = useAuthToken()
  const router = useRouter()

  const login = async () => {
    try {
      const response = await loginMutation({
        phone_number,
        email,
        password,
      }).unwrap()
      console.log(response)
      if (response.data.user.role === "SuperAdmin") {
        setToken(response.data.access_token)
        message.success(response.message)
        router.push("/")
      } else {
        message.error("You are not authorized to login as an admin", 5)
      }

      return response
    } catch (error: any) {
      console.log(error)
      message.error(error.data.message)
      throw error
    }
  }

  return {
    login,
    isLoading,
    error,
    data,
  }
}
