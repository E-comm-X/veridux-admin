export interface VendorI {
  _id: string
  user: string
  role: string
  account_verified: boolean
  company_name: string
  company_email: string
  website: string
  company_address: string
  createdAt: string
  updatedAt: string
  __v: string
  id: string
}

export interface StoreI {
  social_links: {
    facebook: string
    twitter: string
    linkedln: string
    instagram: string
  }
  _id: string
  vendor: string | VendorI
  name: string
  logo: string
  description: string
  address: string
  categories: string[]
  rating: string | number
  is_activated: boolean
  is_open: boolean
  __v: number
  id: string
}

export interface StoresResponseI {
  data: { stores: StoreI[] }
}
