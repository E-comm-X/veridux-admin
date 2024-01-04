export interface RefreshResponse {
    status: string
    message: string
    data: RefreshData
}

export interface RefreshData {
    access_token: string
}
