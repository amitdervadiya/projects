import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Subheader from './Components/Subheader'
import Contentdata from './Components/Contentdata'
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Subheader />
      <Contentdata></Contentdata>
    </>
  )
}
