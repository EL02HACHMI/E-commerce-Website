import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useContext } from "react";
import { ProductApi } from "../../ProductApi";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  position: fixed;
  left: 0;
  right: 0;
  height: 10vh;
  z-index: 1000;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    `;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.b`
  font-size: 40px;
  font-family: "Great Vibes";
  cursor: pointer;
`;


const Grp = styled.div`
    display: flex;
    gap: 20px;
    width: 25%;
    position: absolute;
    right: 10px;
    justify-content: center;
    align-items: center;
    .link{
      text-decoration: none;
      color: black;
    }
    .link::after{
      content: "";
      width: 0;
      height: 2px;
      background-color: black;
      display: block;
      position: relative;
      top: 2px;
      border-radius: 100%;
      transition: width .3s ease-in-out;
    }
    .link:hover::after{
      width: 100%;
    }





    .shopIcon{
      cursor: pointer;
    }
  `;


const Typography = styled.h3`
  font-weight: 300;
  letter-spacing: 0.5px;
  cursor: pointer;
  `;


const Navbar = () => {
  const navigate = useNavigate();
  const shop=useContext(ProductApi)
  const count=shop.shop.length;
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo onClick={() => navigate("/")}>Illumi.</Logo>
          <Grp>  
              <Link to="/ContactUs" className="link"><Typography>Contact us</Typography></Link>
              <Badge badgeContent={count} color="primary">
                  <ShoppingCartOutlinedIcon className="shopIcon"  size={30} color="black" onClick={()=>navigate('/myshop')}/>
              </Badge>
          </Grp>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
