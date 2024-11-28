
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'swiper/swiper-bundle.css';
import Home from './Components/Home'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Projects from './Components/Projects';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Resume' element={<Resume />}></Route>
          <Route path='/Projects' element={<Projects />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
       
        </Routes>
      </BrowserRouter>
     
  
    </>
  )
}

export default App
