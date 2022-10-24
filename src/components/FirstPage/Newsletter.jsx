import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container=styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: white;

`
const Title=styled.h1`
    font-size: 40px;
`
const Smalltitle=styled.h3`
    font-weight: 300;
    letter-spacing: 2px;
    font-weight: lighter;
    margin: 10px;
`
const Formgrp=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & .icon{
        color: black;
        cursor: pointer;
    }
`
const Input=styled.input`
    margin: 10px;
    outline: none;
    padding: 10px 100px 10px 5px;
    background-color: #00000084;
    border: none;
    &:placeholder-shown{
        color: white;
    }
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
    `
const Cover=styled.div`
    margin: 10px;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -2;
    `
const Bar=styled.div`
    background: black;
    z-index: -1;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
`


// src="https://i.ibb.co/HF1g3n4/parker-burchfield-tv-G4-Wvjgs-EY-unsplash.jpg"
// src="https://i.ibb.co/dmCzd1S/masaaki-komori-9ug-Eeqflo70-unsplash.jpg"
 
const Newsletter = () => {
  return (
      <Container>
          <Bar></Bar>
          <Cover>
          <Image src="https://i.ibb.co/HF1g3n4/parker-burchfield-tv-G4-Wvjgs-EY-unsplash.jpg"/>
          </Cover>
          <Title>Newsletter</Title>
          <Smalltitle>Get timely updates from your favorite products.</Smalltitle>
          <Formgrp>
              <Input placeholder='Your Email'/>
              <SendIcon className='icon'/>
          </Formgrp>
      </Container>
    )
}

export default Newsletter