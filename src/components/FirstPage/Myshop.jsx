import React from 'react'
import { useContext } from 'react'
import { ProductApi } from '../../ProductApi'
import styled from 'styled-components';





const Container = styled.div`
    width: 100%;
    height: 100%;
   position: relative;
`;

const Wrapper = styled.div`
position: relative;
top: 10vh;
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Left = styled.img`
    width: 30%;
    position:relative;
    flex: 1;
    
`;
const Grp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 75%;
    margin: 10px 0px;
    position: relative;

    
`;
const Right = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .closeIcon{
        color:red;
        cursor:pointer;
    }
`;



const BtnRemove = styled.div`
  background-color: #cc3f3f;
    color: white;
    padding: 5px 10px;
    letter-spacing: 1px;
    font-weight: 300;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    bottom: 10px;
`;


const Myshop = () => {

    const {shop}=useContext(ProductApi)
    const {removeFromshop}=useContext(ProductApi)

    return (
        <Container>
            <Wrapper>

            {shop.map((item)=>
                <Grp key={item.id}>
                
                <Left src={item.img} alt="image"/>
                
                <Right>
                <h2>{item.id}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eveniet dolor saepe placeat consequuntur cupiditate.</p>
                </Right>
                <BtnRemove onClick={()=>removeFromshop(item.id)}>Delete</BtnRemove>
                
                </Grp>
            )}
            </Wrapper>
    </Container>
  )
}

export default Myshop