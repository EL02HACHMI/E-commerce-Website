import React from 'react'
import Navbar from './components/FirstPage/Navbar'
import Home from './components/FirstPage/Home'
import Footer from './components/FirstPage/Footer'
import Category from './components/FirstPage/Category'
import Products from './components/FirstPage/Products'
import Newsletter from './components/FirstPage/Newsletter'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/SecPage/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Category/>
      <Products/>
      <Newsletter/>
      <Footer/>
    
    </div>
  )
}

export default App