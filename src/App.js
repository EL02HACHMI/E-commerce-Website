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
            <Navbar />
          </ThemeProvider>
          <Routes>
            <Route path="/" element={<Routeone />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
            {/* <Route path="/about" element={<About/>}/> */}
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
