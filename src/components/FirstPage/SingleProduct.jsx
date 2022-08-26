import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "./data";
import SingleProductDesign from "./SingleProductDesign";
import Navbar from "../Navbar/Navbar";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Footer from './Footer'
const SingleProduct = () => {
  const { id } = useParams();
  const  navigate=useNavigate()
  return (
   
          <Container>
            <Navbar />
      {popularProducts.filter((item) => item.id == id)
        .map((prod) => (
          <Wrapper>
            <Left>
              <Photo src={prod.img} />
            </Left>
            <Right>
              <Grp>
                <Title>{prod.title}</Title>
                <Review>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </Review>
              </Grp>
              <Desc>{prod.desc}</Desc>
              <Price>Price: {prod.price}</Price>
              <Divide />
              <Taille>
                <b>Size</b>
                <Size>XS</Size>
                <Size>S</Size>
                <Size>M</Size>
                <Size>XL</Size>
              </Taille>
              <Grp>
              <Btn2 ocClick={()=>navigate('/')}>Return Back</Btn2>
              <Btn>Add to Bag</Btn>
              </Grp>
            </Right>
          </Wrapper>
        ))}
            <Footer/>
    </Container>
  );
};

export default SingleProduct;

const Container = styled.div`
height:100vh;
width: 100%;
`;


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  height: auto;
  width: 75%;
  background-color: #e4e3e3;
  border-radius: 10px;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin: 10px 0px;
  font-weight: 600;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
`;

const Desc = styled.p`
  font-weight: 300;
  line-height: 2;
  width: 75%;
  text-align: Left;
  margin-bottom: 10px;
`;

const Price = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;

`;

const Review = styled.div`
  margin: 0px 10px;
  color: orangered;
`;

const Taille = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Grp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Size = styled.div`
border: 1px solid #21212175;
 margin: 0px 10px;
 padding: 5px 10px;
 font-family: 'Poppins',sans-serif;
 border-radius: 10px;
 background-color: none;
 cursor: pointer;
 letter-spacing: 1px;
 &:active,&:hover,&::after,&:focus{
  background-color: #cac8c8;
 }
`;
const Btn = styled.button`
  border: none;
  background-color: orangered;
  color: white;
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  text-transform:capitalize;
  margin: 10px 10px;
  
`;

const Btn2 = styled.div`
  border: 1px solid orangered;
  background-color: none;
  color:orangered;
  font-weight: 500;
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  text-transform:capitalize;
  margin: 10px 10px;
  
`;

const Divide = styled.hr`
  width: 50%;
  margin-bottom: 10px;

`;
