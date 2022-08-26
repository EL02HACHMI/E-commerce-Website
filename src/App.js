import React from "react";
import Routeone from "./components/FirstPage/Routeone";
// import About from './components/SecPage/About'
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/SecPage/Login";
import Signup from "./components/SecPage/Signup";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { ProductProvider } from "./ProductContext";
import FavoriteMenu from "./components/FirstPage/FavoriteMenu";
import PurchaseMenu from "./components/FirstPage/PurchaseMenu";
import Test from "./components/FirstPage/Test";
import SingleProduct from "./components/FirstPage/SingleProduct";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <ThemeProvider theme={theme}>
            {/* <Navbar /> */}
          </ThemeProvider>
          <Routes>
            <Route path="/" element={<Routeone />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/MyPurchase" element={<PurchaseMenu />} /> */}
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<Error />} />
            <Route path="/product/:id" element={<SingleProduct/>}/>
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
