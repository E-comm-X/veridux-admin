export interface PermissionGroupI {
  _id: string
  name: string
  allowed_priviledges: privilege[]
  restricted_priviledges: privilege[]
  __v: number
  id: string
}

export interface privilege {
  _id: string
  name: string
  route: string
  method: string
  description: string
  __v: number
  id: string
  permitted_groups: permittedGroupI[]
}

export interface privilegeQuery {
  name: string
  route: string
  method: string
  description: string
  permitted_groups: string[]
  authToken: string
}

export interface permittedGroupI {
  _id: string
  name: string
  allowed_priviledges: string[]
  restricted_priviledges: string[]
  __v: 0
  id: string
}
