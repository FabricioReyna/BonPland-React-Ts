import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/navbar'
import Router from './router'


function App() {

  return (
    <div className="App">
     <Navbar/>
      <Router/>
    
    </div>
  )
}

export default App
