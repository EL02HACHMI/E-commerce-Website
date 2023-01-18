import React from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import Errorpage from "./pages/Errorpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/SecPage/About";
import Register from "./pages/Register";
import Eachproduct from "./components/FirstPage/Eachproduct";
import { ProductProvider } from "./ProductApi";
import Navbar from "./components/FirstPage/Navbar";
import Myshop from './components/FirstPage/Myshop'
import ContactUs from "./components/FirstPage/ContactUs";
const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myshop" element={<Myshop />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/product/:id" element={<Eachproduct/>}/>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
