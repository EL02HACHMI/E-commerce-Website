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
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
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

  const navigate=useNavigate()

  return (
    <div>
      <Container>
        <Wrapper>
            <Logo onClick={()=>navigate('/')}>Illumi.</Logo>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
