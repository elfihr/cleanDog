import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {


  return (
    <>

      <Navbar />
      <Home />
      <Footer />

    </>
  )
}

export default App
