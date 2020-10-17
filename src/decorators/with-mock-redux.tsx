import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { DecoratorFn } from '@storybook/react'

const withMockedRedux: DecoratorFn = (storyFn) => {
  const initialState = {
    user: {
      userName: 'John',
    },
  }
  const mockStore = configureStore()
  const store = mockStore(initialState)

  return <Provider store={store}>{storyFn()}</Provider>
}

export default withMockedRedux
