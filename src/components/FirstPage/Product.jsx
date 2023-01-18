import React from "react";
import styled from "styled-components";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductApi } from "../../ProductApi";

const Container = styled.div`
  margin: 10px;
  position: relative;
  outline: none;
  border: none;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #999;
  

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;
const Icon = styled.div`
position: absolute;
left: 0;
right: 0;
bottom: 0px;
margin: auto;
display: flex;
justify-content: center;
gap: 20px;
margin: 10px;

`;


const Ic = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: all .3s ease;
  color: black;
  background-color: transparent;
  :hover{
        background-color: #00000094;
        color: white;
    }
`;
const Product = ({ item }) => {
  const navigate = useNavigate();

  const { addToshop } = useContext(ProductApi);
  return (
    <Container key={item.id}>
        <Wrapper>
      <Image src={item.img} />
      <Icon>
        <Ic>
          <SearchRoundedIcon onClick={() => navigate(`/product/${item.id}`)} />
        </Ic>
        <Ic>
          <ShoppingCartOutlinedIcon onClick={() => addToshop(item.id)} />
        </Ic>
      </Icon>
        </Wrapper>
    </Container>
  );
};

export default Product;
