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
  categories: CategoriesI[]
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

export interface ProductsResponseI {
  data: { products: ProductI[] }
}

export interface ProductResponseI {
  data: { product: ProductI }
}

export interface ProductRequestI {
  preview_image: Blob | null | string
  store_id: string
  product_name: string
  details: string
  price: string | number
  total_quantity: string | number
  category_ids: string | string[]
  brand_name: string
  package_size: string
  authToken: string
}

export interface ProductUpdateRequestI {
  product_name: string
  details: string
  price: string | number
  total_quantity: string | number
  product_categories_to_add: string[]
  product_categories_to_remove: string[]
  brand_name: string
  package_size: string
  authToken: string
  product_id: string
}

export interface VariantI {
  _id: string
  product: string
  color: string
  hidden: boolean
  total_quantity: number
  preview_image: string
  createdAt: string
  updatedAt: string
  __v: 0
  id: string
}

export interface Reviews {
  _id: string
  enduser: {
    _id: string
    user: {
      _id: string
      firstname: string
      lastname: string
      email: string
      profile_picture: string
      id: string
    }
    id: string
  }
  product: string
  remark: string
  rating: number
  date: string
  hidden: boolean
  createdAt: string
  updatedAt: string
  __v: 0
  id: string
}
