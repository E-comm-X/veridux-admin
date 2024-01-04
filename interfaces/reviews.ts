export interface ReviewI {
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
  hidden: false
  __v: number
  id: string
}
