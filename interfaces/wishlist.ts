export interface WishlistI {
  success: boolean
  data: {
    wishlist: wishlistI
  }
}

export interface wishlistI {
  _id: string
  items: WishlistItem[]
  enduser: string
  createdAt: string
  updatedAt: string
  __v: 0
  id: string
}

export interface WishlistItem {
  _id: string
  wishlist: string
  product: {
    _id: string
    name: string
    brand_name: string
    details: string
    price: number
    commission: number
    variants: string[]
    rating: number
    categories: string[]
    total_quantity: number
    sub_images: string[]
    tags: string[]
    preview_image: string
    original_price: number
    __v: number
    id: string
  }
  quantity: number
  variant: string
  __v: number
  createdAt: string
  updatedAt: string
  id: string
}
