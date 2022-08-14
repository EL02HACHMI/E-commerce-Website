import React from 'react'
import Routeone from './components/FirstPage/Routeone'
// import About from './components/SecPage/About'
import Navbar from './components/Navbar/Navbar'
import Error from './Error'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Routeone/>}/>
        <Route path="*" element={<Error/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App