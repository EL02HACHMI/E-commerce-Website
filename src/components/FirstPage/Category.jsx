import React from 'react'
import styled from 'styled-components'
import { categories } from './data'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`
const Infos = styled.div`
        position: absolute;
        display:none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: 50%;
        left: 20%;
        z-index: 11;
`
const Title = styled.h1`
    margin-bottom: 30px;
    color: white;
`
const Button = styled.div`
    background-color: orangered;
    padding: 10px;
    color: white;
    font-weight: 600;
    font-family: 'Roboto Slab';
    display: flex;
    cursor: pointer;
`
const Image = styled.img`
    object-fit: cover;
    width: 100%;
    width: 100%;
`

const Wrapper = styled.div`
    flex: 1;
    margin: 20px;
    position: relative;
    &:hover .Hover{
        display: block;

    }
    &:hover .Wrapperhover{
        display: flex;

    }
    `
    const Div = styled.div`
        background-color: rgba(247, 68, 3, 0.2);
        z-index: 10;
        width: 100%;
        height: 100%;
        display: none;
        position:absolute;
        top: 0;

    `

const Category = () => {
    return (
        <Container>
            {categories.map((c) => {
               return <Wrapper >
                   <Div className='Hover'/>
                    <Image src={c.img}/>
                    <Infos className='Wrapperhover'>
                        <Title>{c.title}</Title>
                        <Button>SHOP NOW <ArrowRightIcon/></Button>
                    </Infos>
                </Wrapper>
            })}
        </Container>
    )
}

export default Category