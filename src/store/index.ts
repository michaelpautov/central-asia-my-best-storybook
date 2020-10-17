import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './user/reducers'
import { User, UserActions } from './user/types'

export type AppState = {
  user: User
}

export enum ActionTypes {
  updateUser = 'UPDATE_USER',
}

export type Action =  UserActions


const rootReducer = combineReducers<AppState>({
  user: userReducer,
})

export const store = createStore(rootReducer, {}, composeWithDevTools())

export type RootSelector<T> = (state: AppState) => T
