export interface ShipmentI {
  pickup_location: {
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
    createdAt: string
    updatedAt: string
    __v: 0
  }
  dropoff_location: {
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
    createdAt: string
    updatedAt: string
    __v: 0
  }
  sendersInfo: {
    name: string
    phone: string
    email: string
  }
  receiversInfo: {
    name: string
    phone: string
    email: string
  }
  payment_record: string
  original_cost: number
  incurred_cost: number
  status: string
  provider: string
  products: string[]
  pickup_date: string
  paid: boolean
  createdAt: string
  updatedAt: string
  __v: 0
  id: string
}
