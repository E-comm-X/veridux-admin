import { useAuthToken } from "./useAuthToken"
import { useRole } from "./useRole"

export const useLogout = () => {
  const { setToken } = useAuthToken()
  const { setRole } = useRole()

  const logout = () => {
    setToken("")
    setRole("")
  }

  return {
    logout,
  }
}
