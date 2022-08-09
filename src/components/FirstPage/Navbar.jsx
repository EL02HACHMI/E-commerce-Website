import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Container=styled.div`
    font-family: 'Roboto',sans-serif;
   position: absolute;
   left: 0;
   right: 0;
   height: 10vh;
   background-color: azure;
   
`
const Wrapper=styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`
const Left=styled.div`
    width: 100%;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `

const Logo=styled.b `
    font-size: 40px;
    font-family: 'Great Vibes';
    cursor: pointer;
`
const Right=styled.div`
    width: 100%;
    height: 100%;
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    .shopicon{
        /* margin: 0px 40px; */
        position: relative;
        float: left;
        left: 20%;
        color: black;
    }
`

const BarInput=styled.input`
    border: none;
    padding: 10px 20px;
    width: 500px;
`
const Group=styled.div`
    border: 3px solid orangered;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
`
const Categories=styled.div`
    color:  #3f3f3f;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Icon=styled.div`
    background-color: orangered;
    position: relative;
    width: 40px;
    height: 40px;  
    color: white;
    display :flex;
    align-items: center;
    justify-content: center;
`
const Signinout=styled.div`
    text-transform: uppercase;
    display: flex;
    /* margin: 0px 10xpx; */
    justify-content: space-between;
    font-family: 'Roboto',sans-serif;
    font-weight: 300;
    width: 15%;
`
const Register=styled.div`

`
const Signin=styled.div``

const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Illumi.</Logo>
                </Left>
                <Right>
                        <Group>
                        <BarInput type='text' placeholder='Jeans'/>
                        <Categories>All Categories<ArrowDropDownIcon /></Categories>
                        <Icon>
                        <SearchIcon className='searchIcon'/>
                        </Icon>
                        </Group>
                        <ShoppingCartOutlinedIcon className='shopicon'/>

                        <Signinout>
                            <Signin>Sign IN</Signin>
                            <Register>Register</Register>
                        </Signinout>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar