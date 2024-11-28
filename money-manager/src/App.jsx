import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { store } from '../app/Store'
import MoneyManager from './Component/MoneyManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <MoneyManager />
      </Provider>
    </>
  )
}

export default App
