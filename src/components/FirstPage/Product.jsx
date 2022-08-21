import React from 'react'
import styled from 'styled-components'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useContext } from "react";
import ProductContext from '../../ProductContext';
import SingleProduct from './SingleProduct';
import { useNavigate } from "react-router-dom";

const Ic =styled.div`
    margin: 0px 15px;
    background-color: white;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s ease;
    cursor: pointer;
&:hover{
    background-color: rgba(247, 68, 3, 0.7);
    transform: scale(1.1);
    color: white;
}
`

const Container=styled.div`
margin: 10px;
position: relative;
outline: none;
border:  none;
&:hover ${Ic}{
    opacity: 1;
}
`

const Image =styled.img`
width: 300px;
height: 500px;
background-color: #ff440021;
padding: 10px;
`
const Icon =styled.div`
display:flex;
align-items: center;
justify-content: center;
position: absolute;
top: 50%;
left: 0;
right: 0;
margin: 0px auto;

`


const Product = ({item}) => {
  const {count,setCount} =useContext(ProductContext)
  const {purchase,setPurchase} =useContext(ProductContext)
  let navigate = useNavigate(); 




  return (
      <Container>
          <Image src={item.img}/>
         <Icon>
             <Ic>
            <SearchRoundedIcon  onClick={() => navigate('/:{item.id}')}/>
             </Ic>
             <Ic>
            <ShoppingCartOutlinedIcon onClick={() => {
              setPurchase(purchase + 1);
            }}/>
            </Ic>

            <Ic>
            <FavoriteBorderOutlinedIcon onClick={() => {
              setCount(count + 1);
            }}/>
            </Ic>

         </Icon>
      </Container>
  )
}

export default Product


