import { ReviewI } from "./reviews"

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

export interface CategoriesI {
  _id: string
  name: string
  description: string
  sub_categories: string[]
  is_first_level: boolean
  hidden: boolean
  __v: number
  children_categories: never[]
  id: string
}
export interface ProductI {
  _id: string
  store?: StoreI
  name: string
  brand_name?: string
  details?: string
  price: string | number
  variants?: any[]
  rating: number | string
  categories?: CategoriesI[]
  total_quantity?: number
  sub_images?: string[]
  tags?: string[]
  preview_image?: string
  id?: string
  reviews?: ReviewI[]
  is_in_cart?: boolean
  original_price?: number
  commission?: number
}

export interface ProductRequestI {
  preview_image: Blob | null
  store_id: string
  product_name: string
  details: string
  price: string
  total_quantity: string
  category_ids: string
  brand_name: string
  package_size: string
  authToken: string
}
