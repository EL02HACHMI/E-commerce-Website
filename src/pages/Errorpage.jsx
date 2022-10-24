import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {BiErrorAlt} from 'react-icons/bi'
const Errorpage = () => {
  const navigate=useNavigate()
  return (

    <Container>
      <Wrapper>
      <BiErrorAlt  className="icon" size={60}/>
      <Grp>
      <Title>Error 404</Title>
      <Paragh>This page dosen't exist</Paragh>
      </Grp>
      </Wrapper>
      <Btn onClick={()=>navigate('/')}>Return Home</Btn>
      </Container>
  )
}

export default Errorpage


const Container = styled.div`
height: 100vh;
width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

const Wrapper = styled.div`
  width:60%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon{
    flex: 1;
  }
`;
const Title = styled.h2`
    font-size: 3.5rem;
`;

const Paragh = styled.h3`
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 2px;
`;

const Btn = styled.button`
  border: none;
  padding: 10px;
  background-color: #80808030;
  color: orangered  ;
  font-weight: 600;
  border-radius: 10px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  transition:all 0.3s ease-in;
  :hover{
  background-color: orangered;
  color: white;
  }
`;
const Grp = styled.div`
  flex: 4;

`;