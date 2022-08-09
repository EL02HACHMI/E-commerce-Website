import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'


const Container=styled.div`
    height: 100vh;
    width: 100%;
    `

const Home = () => {
    return (
        <div>
            <Container>
                <Slider/>
            </Container>
        </div>
    )
}

export default Home