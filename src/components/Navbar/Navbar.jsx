import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Signup from './../SecPage/Signup'
import Login from './../SecPage/Login'
import { Link } from "react-router-dom";


// Modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #afaeae',
  p: 4,
};

// --------------
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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

                {/* Modal part */}
              <Button onClick={handleOpen}>Sign up</Button>
              <Button onClick={handleOpen}>Log in</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Modal content */}
          <Signup/>
          {/* <Login/> */}
        </Box>
      </Modal>

      {/* Modal part end */}
            {/* <Link   className="sign"  to='/signup' >Sign up</Link>
            <Link  className= "sign"  to='/signin' >Sign in</Link> */}
            <ShoppingCartOutlinedIcon className="shopicon" />
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
  list-style-type: none;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  .sign{
    position: relative;
    color: Black;
    text-decoration: none;
      &::after{
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
      &:hover::after{
        width: 100%;

      }

  }
  
`;
