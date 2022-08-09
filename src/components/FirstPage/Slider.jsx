import React,{useState} from 'react'
import styled from 'styled-components'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { sliderItems } from './data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    /* ___----------------------____ */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;

    `
const Arrow = styled.div`
background-color: orangered;
    z-index: 5;
    margin: 10px 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    opacity: 60%;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    color: white;
    &:hover{
    opacity: 80%;
    }

`
// Wrraper:;;


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: translateX(${props=>props.slide * -100}vw);
    transition: all 3000ms ease;
`

// Left : =========================
const Left = styled.div`
flex: 2;
display: flex;
justify-content: center;

`
const Image = styled.img`
    width: 70%;
    
`

// Right : =========================
const Right = styled.div`
flex: 2;
`
const Infos = styled.div``

const Title = styled.h1`
    font-family: 'Roboto',sans-serif;
    font-size: 60px;
    text-transform: capitalize;
`
const Desc = styled.p`
font-family:'Questrial';
letter-spacing: 2px;
font-weight: 300;
margin-bottom: 20px;
width: 80%;
`
const Button = styled.div`
    background-color: orangered;
    padding: 5px 0px;
    width: 150px;
    font-family: 'Roboto Slab';
    color: white;
    text-transform: capitalize;
    letter-spacing: 2px;
    border-radius: 10px;
    font-size: 16px;
    text-align: center;
    `

const Slider = () => {

    const [slide,setSlide]=useState(0)

    const handleClick=(direction)=>{
        if(direction==='left'){
            setSlide(slide > 0 ? slide - 1 : 2)
        }else{
            setSlide(slide < 2 ? slide + 1 : 0)

        }

    }

    return (
        <Container>

            <Arrow direction='left' onClick={()=>handleClick('left')}>
                <ArrowLeftIcon />
            </Arrow>

            {sliderItems.map((item) =>
                <Wrapper slide={slide}>
                    <Left >
                        <Image src={item.img} />
                    </Left>
                    <Right >
                        <Infos>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Shop Now</Button>
                        </Infos>
                    </Right>
                </Wrapper>
            )}




            <Arrow direction='right' onClick={()=>handleClick('right')}>
                <ArrowRightIcon />
            </Arrow>
        </Container>

    )
}

export default Slider