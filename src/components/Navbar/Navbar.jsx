import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
const Navbar = () => {
  

  const [active,setActive]=useState(true);

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Logo>Illumi.</Logo>
          </Left>
          <Right>
            <Group>
              <BarInput type="text" placeholder="Jeans" />
              <Categories>
                All Categories
                <ArrowDropDownIcon />
              </Categories>
              <Icon>
                <SearchIcon className="searchIcon" />
              </Icon>
            </Group>
              <Signinout>
                <Link to='/signup' className="btn">Sign up</Link>
                <Link to='/signin' className="btn">Sign in</Link>
            <ShoppingCartOutlinedIcon className="shopicon" />
              {/* <Linkto  onClick={()=>setActive(!active)}  className={active ? " sign active" : "sign"}>Sign Up</Linkto> */}
             {/* <Linkto  onClick={()=>setActive(active)}   className={active ? " sign active" : "sign"}>Sign In</Linkto> */}
              </Signinout>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;


const Container = styled.div`
  font-family: "Roboto", sans-serif;
  position: fixed;
  left: 0;
  z-index: 100;
  right: 0;
  height: 10vh;
  background-color: azure;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const Left = styled.div`
  width: 100%;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.b`
  font-size: 40px;
  font-family: "Great Vibes";
  cursor: pointer;
`;
const Right = styled.div`
  width: 100%;
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// Bar Search
const BarInput = styled.input`
  border: none;
  padding: 10px 20px;
  width: 500px;
`;
const Group = styled.div`
  border: 3px solid orangered;
  border-radius: 5px;
  background-color: white;
  display: flex;
  align-items: center;
`;
const Categories = styled.div`
  color: #3f3f3f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  background-color: orangered;
  position: relative;
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Right
const Signinout = styled.ul`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .btn{
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    background-color: orangered;
    color: white;
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
    &:hover{
      background-color: orange;
    } 
  }
`;
// const Linkto = styled.li`
//   list-style-type: none;
//   color: orangered;
//   font-weight: 600;
//   text-decoration: none;
//   .sign{
//     position: relative;
//       &.active::after{
//         position: absolute;
//         content: "";
//         bottom: -3px;
//         display: block;
//         height: 2px;
//         width: 100%;
//         background-color: orangered;
//       }
//   }
  
// `;
