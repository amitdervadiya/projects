
import './App.css'
import { Provider } from 'react-redux'
import Navbar from './Components/Navbar'
import store from './App/Store'
import Table from './Components/Table'
import TaskComponent from './Components/TaskComponent'
import New from './Components/New'
import Hero from './Components/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Forms from './Components/Forms'


function App() {


  return (
    <>
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/taskcomponent" element={<TaskComponent />} />
           
          </Routes>
        </BrowserRouter>


      </Provider>

    </>
  )
}

export default App
