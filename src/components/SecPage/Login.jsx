import React, { useState } from "react";
import Signup from "./Signup";
import styled from "styled-components";
import ClearIcon from '@mui/icons-material/Clear';



// const Container = styled.div`
// `;

const Wrapper = styled.div`
color: white;
background-color: #3d0707c7;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 50px;
 z-index: 100000;

position: fixed;
top: 50%;
left: 50%;
width: 80%;
height: 50%;
transform: translate(-50%,-50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .iconClear{
    position: absolute;
    right: 3%;
    top: 5%;
    cursor: pointer;
    scale: 1;
    transition: all 300ms ease-in-out;
    &:hover{
      transform: scale(1.3);
    }
  }
`;
const Form = styled.form`
  border-radius: 10px;
  color: #ffffff89;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Line = styled.div`
  width: 2px;
  height: 90%;
  background-color: white;
  border-radius: 50%;
`;

const Grp = styled.div`
  margin: 1.5rem 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.label``;
const Input = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid grey;
`;
const List = styled.datalist``;
const Option = styled.option`
`;
const Select = styled.select`
  border: 1px solid grey;
  width: 300px;
  padding: 10px 5px;
  outline: none;
  border-radius: 10px;
`;
const Btn = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: orangered;
  text-transform: capitalize;
  cursor: pointer;
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  cursor: pointer;
  margin: 0px 10px;
  position: relative;
  &::after {
    content: "";
    display: block;
    background-color: orangered;
    height: 2px;
    width: 100%;
    bottom: -15%;
    position: absolute;
  }
`;

const Grp1 = styled.h2`
  display: flex;
`;

const Login = ({setOpen}) => {
  const [active, setActive] = useState(true);


  const handleSubmit=(e)=>{
    e.preventDefault()
  }





  return (
      <Wrapper>
      <ClearIcon className="iconClear" onClick={()=>setOpen(false)}/>
        <Left>
          <Grp1>
           
            <Title onClick={() => setActive(!active)} to="/login">
              Login
            </Title>
          </Grp1>
          <Form onSubmit={handleSubmit}>
            <Grp>
              <Input
                type="email"
                name="adressemail"
                placeholder="Adresse mail"
              />
            </Grp>
            <Grp>
              <Input type="password" name="password" placeholder="Password" />
            </Grp>
            <Grp>
              <Btn>Connect</Btn>
            </Grp>
          </Form>
        </Left>
        <Line></Line>
        <Right>
          <Grp1>
            <Title>Sign Up</Title>
          </Grp1>
          <Form onSubmit={handleSubmit}>
            <Grp>
              <Select
                name="localisation"
                placeholder="Your location"
                id="localisation"
              >
                <Option value="Morocco" defaultValue="Morocco">
                  Morocco
                </Option>
                <Option value="Algerie">Algerie</Option>
                <Option value="Tunisie">Tunisie</Option>
                <Option value="France">France</Option>
              </Select>
            </Grp>
            <Grp>
              <Input
                type="email"
                name="adressemail"
                placeholder="Adresse mail"
              />
            </Grp>
            <Grp>
              <Input type="password" name="password" placeholder="Password" />
            </Grp>
            <Grp>
            <Btn>Add my account</Btn>
            </Grp>
          </Form>
        </Right>
      </Wrapper>
    // </Container>
  );
};

export default Login;

const Left = styled.div``;

const Right = styled.div``;
