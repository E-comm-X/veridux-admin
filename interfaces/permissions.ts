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
  permitted_groups: permittedGroupsI[]
}

export interface permittedGroupsI {
  _id: string
  name: string
  allowed_priviledges: string[]
  restricted_priviledges: string[]
  __v: 0
  id: string
}
