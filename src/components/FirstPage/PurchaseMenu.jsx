import React from 'react'
import styled from "styled-components";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Container = styled.div`
  position: absolute;
  right: 0%;
  top: 100%;
  width: 500px;
  color: black;
  z-index: 10000;
  background-color: white;
  border:2px solid orangered; 
  border-radius: 10px;
  `;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin: 10px 0px;
  
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2fbdbd;
`;
const Right = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h4`
  padding: 10px 0px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  `;

const Desc = styled.p`
  padding-bottom: 5px;
  font-family: "Roboto", sans-serif;
  padding-right: 10px;
  font-size: 13px;
  font-weight: 300;
`;
const PurchaseMenu = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Left>
            <AddShoppingCartIcon />
          </Left>
          <Right>
            <Title>Shirt Summer</Title>
            <Desc>
              Tempore cum ipsam ducimus laborum molestias aliquam animi
            </Desc>
          </Right>
        </Card>
      </Wrapper>
      <hr/>

      <Wrapper>
        <Card>
          <Left>
            <AddShoppingCartIcon />
          </Left>
          <Right>
            <Title>Shirt Summer</Title>
            <Desc>
              Tempore cum ipsam ducimus laborum molestias aliquam animi
            </Desc>
          </Right>
        </Card>
      </Wrapper>
      <hr/>

      <Wrapper>
        <Card>
          <Left>
            <AddShoppingCartIcon />
          </Left>
          <Right>
            <Title>Shirt Summer</Title>
            <Desc>
              Tempore cum ipsam ducimus laborum molestias aliquam animi
            </Desc>
          </Right>
        </Card>
      </Wrapper>
    </Container>
     )
}
export default PurchaseMenu;
    