import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Category from "./Category";
import Products from "./Products";
import Newsletter from "./Newsletter";

const FirstPage = () => {
  return (
    <div>

      <Navbar />
      <Home />
      <Category />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default FirstPage;
