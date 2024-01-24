import { profile } from "console"

export interface userGroupI {
  group_name: string
  users: string[]
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}

export interface userI {
  _id: string
  firstname: string
  lastname: string
  email: string
  role: string
  phone_number: string
  user_groups: string[]
  createdAt: string
  updatedAt: string
  __v: number
  account_reference: string
  id: string
  profile_picture: string
}

export interface profileI {
  account_verified: boolean
  referrals: string[]
  _id: string
  user: string
  role: string
  phone_number: string
  __v: number
  id: string
}

export interface userResponseI {
  user: userI
  profile: profileI
}
