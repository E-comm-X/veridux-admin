export interface SignInResponse {
  status: string
  message: string
  data: {
    user: {
      _id: string
      firstname: string
      lastname: string
      email: string
      role: string
      phone_number: string
      user_groups: string[]
      id: string
      profile: {
        _id: string
        user: string
        role: string
        account_verified: boolean
        phone_number: string
        referrals: string[]
        referral_code: string
        __v: 0
      }
    }
    access_token: string
    refresh_token: string
  }
}

export interface SignInRequest {
  email?: string
  phone_number?: string
  password: string
}
