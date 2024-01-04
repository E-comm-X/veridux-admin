export interface ProfileI {}

export interface UpdateResponseI {
  success: boolean
  message: string
  data: {
    temporary_access_token: string
    profile_picture: string
  }
}
