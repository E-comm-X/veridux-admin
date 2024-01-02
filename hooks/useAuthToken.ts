import { useLocalStorage } from "usehooks-ts"

export const useAuthToken = () => {
  const [token, setToken] = useLocalStorage<string | null>(
    "veridux-admin-token",
    null
  )

  return { token, setToken }
}
