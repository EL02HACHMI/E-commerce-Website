import React, { useContext } from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Grp>
        <Title>
        NEW SPRING 2022 
        </Title>
        <Title2>
        COLLECTION AVAILABLE NOW
        </Title2>
        <Btn>Shop now</Btn>
      </Grp>
      <Image src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Grp = styled.div`
position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  font-weight: 500;
`;
const Title2 = styled.h1`
  color: white;
  font-weight: 500;
`;

const Btn = styled.button`
  color: white;
  background-color: #000;
  border: none;
  padding: 15px;
  text-transform: uppercase;
  font-weight: 300;
  margin-top: 15px;
  font-size: 1rem;
  transition: all .9s ease-in-out;
  &:hover{
    color: black;
  background-color: #fff;
  }
`;

