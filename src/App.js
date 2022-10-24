import React from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import Errorpage from "./pages/Errorpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/SecPage/About";
import Register from "./pages/Register";
import Eachproduct from "./components/FirstPage/Eachproduct";
import { ProductProvider } from "./ProductApi";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Eachproduct/>}/>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
