export interface UserResponseI {
  status: string
  message: string
  data: {
    user: UserDataI
  }
}

export interface UserDataI {
  _id: string
  firstname: string
  lastname: string
  email: string
  role: string
  phone_number: string
  user_groups: string[]
  id: string
  profile: {
    _id: string
    user: string
    role: string
    phone_number: string
    __v: number
    profile_picture: string
  }
  custom_permissions: {
    _id: string
    user: string
    allowed_priviledges: any[]
    restricted_priviledges: any[]
    __v: number
    id: string
  }
  iat: number
  exp: number
  profile_picture: string
  account_reference: string
}
