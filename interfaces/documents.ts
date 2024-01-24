export interface DocumentI {
  _id: string
  user: string
  file_url: string
  tax_id: string
  company_size: string
  type: string
  status: string
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}

export interface DocumentRequestI {
  _id: string
  status: string
  user: string
  __v: number
  createdAt: string
  documents: DocumentI[]
  updatedAt: string
  id: string
}
