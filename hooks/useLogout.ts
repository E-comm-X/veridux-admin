import { useAuthToken } from "./useAuthToken"

export const useLogout = () => {
  const { setToken } = useAuthToken()
  const logout = () => {
    setToken("")
  }

  return {
    logout,
  }
}
