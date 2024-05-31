import { useLocalStorage } from "usehooks-ts"

export const useRole = () => {
  const [role, setRole] = useLocalStorage<string>("veridux-role", "")

  return { role, setRole }
}
