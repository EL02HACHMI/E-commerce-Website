import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  position: fixed;
  left: 0;
  right: 0;
  height: 10vh;
  z-index: 1000;
  background-color: azure;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;


const Logo = styled.b`
  font-size: 40px;
  font-family: "Great Vibes";
  cursor: pointer;
`;




const Navbar = () => {

  return (
    <div>
      <Container>
        <Wrapper>
            <Logo>Illumi.</Logo>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
