import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Signup from "./../SecPage/Signup";
import Login from "./../SecPage/Login";
import { Link } from "react-router-dom";
import { Badge } from '@mui/material';













const Option = styled.option``;
const Select = styled.select`
  border: none;
  outline: 0px;
  padding: 10px 5px;
  margin: 0px 10px;
`;

// --------------
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [active, setActive] = useState(true);
  
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
                <Select
                  name="localisation"
                  placeholder="Your location"
                  id="localisation"
                >
                  <Option value="" defaultValue="">
                    Categories
                  </Option>
                  <Option value="Summer Shirts">Summer Shirts</Option>
                  <Option value="Men Fashion">Men Fashion</Option>
                  <Option value="Women Fashion">Women Fashion</Option>
                  <Option value="Shoes">Shoes</Option>
                </Select>
                
              </Categories>
              <Icon>
                <SearchIcon className="searchIcon" />
              </Icon>
            </Group>
            <Signinout>
              <Modal onClick={() => setOpen(!open)}>Register</Modal>
              <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlinedIcon className="shopicon" />
              </Badge>
            </Signinout>
          </Right>
        </Wrapper>
      </Container>
      {open && <Login setOpen={setOpen} />}
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
  outline: none;
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
  outline: none;
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
  position: relative;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  .sign {
    position: relative;
    color: Black;
    text-decoration: none;
    &::after {
      position: absolute;
      content: "";
      bottom: -3px;
      display: block;
      height: 2px;
      width: 0%;
      background-color: orangered;
      color: white;
      transition: width 600ms ease;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const Modal = styled.div`
  position: relative;
  background-color: orangered;
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transform: scale(1);
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
