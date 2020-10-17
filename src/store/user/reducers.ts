import { User } from './types'
import { ActionTypes, Action } from '@devfest/store'

const initialState: User = {
  userName: 'John',
}

export function userReducer(state = initialState, action: Action): User {
  switch (action.type) {
    case ActionTypes.updateUser:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
