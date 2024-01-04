export interface SignupResponse {
  status: string
  message: string
  data: Data
}

export interface Data {
  user: User
  access_token: string
}

export interface User {
  firstname: string
  lastname: string
  email: string
  role: string
  phone_number: string
  user_groups: string[]
  _id: string
  id: string
}
