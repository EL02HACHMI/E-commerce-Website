import React from 'react'
import Home from './Home'
import Footer from './Footer'
import Category from './Category'
import Products from './Products'
import Newsletter from './Newsletter'
import Navbar from '../Navbar/Navbar'
const Routeone = () => {
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

export default Routeone