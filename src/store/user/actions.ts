import { User, UserActions } from './types'
import { ActionTypes } from '@devfest/store'

export function updateUser(newUser: User): UserActions {
  return {
    type: ActionTypes.updateUser,
    payload: newUser,
  }
}

