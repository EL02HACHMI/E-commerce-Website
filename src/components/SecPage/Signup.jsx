import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login"
import {NavLink} from "react-router-dom"
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  border-radius: 10px;
`;
const Form = styled.form`
  height: 70%;
  border-radius: 10px;
  width: 50%;
  color: #ffffff89;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grp = styled.div`
  margin: 1.5rem 0px;
`;
const Label = styled.label``;
const Input = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid grey;
`;
const List = styled.datalist``;
const Option = styled.option``;
const Select = styled.select`
  border: 1px solid grey;
  width: 300px;
  padding: 10px 5px;
  border-radius: 10px;
`;
const Btn = styled.div`
  padding: 10px;
  border-radius: 10px;
  text-transform: uppercase;
  border: none;
  color: white;
  background-color: orangered;
`;

const Title = styled.h2`
font-family: "Poppins",sans-serif;
  font-size: 20px;
  cursor: pointer;
  margin: 0px 10px;
  position: relative;
  &::after{
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

const Signup = () => {


  const [active,setActive]=useState(true)
  return (
    <Container>
      <Grp1>
        <Title>Sign Up</Title>
        {/* <Title onClick={()=>setActive(!active)}  >Log in</Title> */}
      </Grp1>
      <Form>
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
          <Input type="email" name="adressemail" placeholder="Adresse mail" />
        </Grp>
        <Grp>
          <Input type="password" name="password" placeholder="Password" />
        </Grp>
        <Grp>
          <Btn>SIGN UP</Btn>
        </Grp>
      </Form>
    </Container>
  );
};

export default Signup;
