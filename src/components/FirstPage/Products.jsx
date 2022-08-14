import React from "react";
import styled from "styled-components";
import { popularProducts } from "./data";
import Product from "./Product";
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Title = styled.h3`
  color: orangered;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  text-align: center;
  margin-top: 5%;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2%;
  
`;

const Item = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;
.icon{
    color: orangered;
    position: relative;
    top: 1rem;
}
`;

const Products = () => {
  return (
    <Container>
        <Item>
      <LocalFireDepartmentRoundedIcon fontSize="large" className="icon"/>
      <Title>Most popular</Title>
        </Item>
      <Wrapper>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
