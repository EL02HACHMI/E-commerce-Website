import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ProductApi } from "../../ProductApi";
const Eachproduct = () => {
    const productsitems =useContext(ProductApi)
  const {id}=useParams()
  const product =productsitems.find((item)=>item.id==id)
  return (
    <Container>
    <Photo src={product.img} alt="product image"/>
    </Container>
  );
};

export default Eachproduct;

const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`;
const Wrapper = styled.div``;
const Photo = styled.img``;
