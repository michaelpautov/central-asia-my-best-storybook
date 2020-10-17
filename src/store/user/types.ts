import { ActionTypes } from '@devfest/store'

interface UpdateUserAction {
  type: ActionTypes.updateUser
  payload: User
}

export type UserActions = UpdateUserAction

export interface User {
  userName?: string
}
