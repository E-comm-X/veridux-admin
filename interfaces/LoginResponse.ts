export interface LoginResponse {
    status: string
    message: string
    data: LoginData
}

export interface LoginData {
    user: User
    access_token: string
    refresh_token: string
}

export interface User {
    _id: string
    firstname: string
    lastname: string
    email: string
    role: string
    phone_number: string
    user_groups: string[]
    id: string
}
