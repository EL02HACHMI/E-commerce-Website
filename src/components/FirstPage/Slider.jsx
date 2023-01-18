import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import slid1 from "./Image/slid1.jpg";
import slid3 from "./Image/slid3.jpg";
import slid4 from "./Image/slid4.jpg";
import { useState } from "react";
import { Transform } from "@mui/icons-material";
import { width } from "@mui/system";
const Container = styled.div`
  position: relative;
  top: 10vh;
  width: 300vw;
  height: 90vh;
  display: flex;
  margin-bottom: 10px;
  transition: all 1s ease;
`;

// const Wrapper = styled.img`
//   width: 100%;
// `;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const Icons = styled.div`
  position: absolute;
  bottom: 20%;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .icon {
    border: none;
    width: 30px;
    height: 30px;
    padding: 5px;
    background-color: #0000007f;

    border-radius: 50%;
    color:white;
    cursor: pointer;
    scale: 0.9;
    transition: all 0.3s ease-in-out;
    :hover {
      transform: scale(1.1);
      color: white;
    }
  }
`;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlid = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlid = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };


  

  return (
    <div>
      
      <Container className ="container"style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <Img src={slid1} />
        <Img src={slid3} />
        <Img src={slid4} />
      </Container>
      <Icons>
        <ArrowBackIosNewIcon className="icon" onClick={prevSlid} />
        <ArrowForwardIosIcon className="icon" onClick={nextSlid} />
      </Icons>
    </div>
  );
};

export default Slider;
