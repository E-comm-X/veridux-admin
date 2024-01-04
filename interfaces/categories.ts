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
}

export interface CategoriesResponseI {
  data: { product_categories: CategoryI[] }
}
