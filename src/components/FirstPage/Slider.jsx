import React from 'react'
import styled from 'styled-components';
const Slider = () => {
  return (
    <Conatiner>
        <Image src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"/>
    </Conatiner>
  )
}

export default Slider

const  Image= styled.img`
    width: 80vw;
    object-fit: cover;
`;

const Conatiner = styled.div`
    height: 100vh;
    width: 100%;
`;