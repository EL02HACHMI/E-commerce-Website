import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Category from "./Category";
import Products from "./Products";
import Newsletter from "./Newsletter";
import styled from 'styled-components';
const FirstPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Category />
      <Newsletter />
      <Footer />
    </>
  );
};

export default FirstPage;

