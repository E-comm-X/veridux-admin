export interface AddressResponseI {
  success: boolean
  message: string
  data: {
    addresses: AddressI[]
  }
}

export interface AddressI {
  _id: string
  user: string
  name: string
  phone: string
  state: string
  region: string
  country: string
  description: string
  lat: number
  long: number
  default: boolean
  is_company_address: boolean
  purpose: string
  createdAt: string
  updatedAt: string
  __v: 0
  id: string
}
