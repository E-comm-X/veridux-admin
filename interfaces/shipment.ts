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
  senders_info: {
    name: string
    phone: string
    email: string
  }
  receivers_info: {
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

export interface VehicleI {
  vehicle_id: number
  user_id: number
  weight: number
  size: number
  name: string
  vehicle_icon: string
  is_deleted: number
  dimension: string
  time_fare: number
  distance_fare: number
  waiting_fare: number
  base_fare: number
}
