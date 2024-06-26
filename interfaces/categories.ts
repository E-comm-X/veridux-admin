export interface CategoryI {
  _id: string
  name: string
  description: string
  preview_image: string
  sub_categories: {
    id: string
    name: string
    _id: string
    description: string
  }[]
  is_first_level: boolean
  hidden: boolean
  createdAt: string
  updatedAt: string
  __v: number
  id: string
  featured: boolean
  position: number
}

export interface CategoriesResponseI {
  data: { product_categories: CategoryI[] }
}

export interface CategoryRequestI {
  name: string
  is_first_level?: boolean
  description: string
  featured: boolean
  product_category_id?: string
  position?: number
  parent_category_id?: string
  preview_image?: string
}
