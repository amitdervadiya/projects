import React from 'react'
import {Provider} from 'react-redux'
import './App.css'
import { store } from './app/store'
import Counter from './Redux/counter'

function App() {
 

  return (
    <>
     <Provider store={store}>
<Counter/>
      </Provider> 
    </>
  )
}

export default App
