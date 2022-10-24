import React from 'react'
import styled from 'styled-components';
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Right></Right>
      </Wrapper>
    </Container>
  )
}

export default Register





const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 60%;
  height: 85%;
  background-color: #0000ff2d;
  border-radius: 20px;
`;
const Left = styled.div`
  flex:1;
  background-color: brown;
`;
const Right = styled.div`
  flex: 1;
`;