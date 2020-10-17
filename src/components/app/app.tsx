import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@devfest/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Central Asia Dev Fest 2020</h1>
        </header>
      </div>
    </Provider>
  )
}

export default App
