import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ProductApi } from "../../ProductApi";
const Eachproduct = () => {
  const {productsitems} = useContext(ProductApi);
  const { id } = useParams();
  const product = productsitems.find((item) => item.id == id);
  return (
    
      <Container >
        <Wrapper>
          <FormGrp>
          <Photo src={product.img} alt="product image" />
          </FormGrp>
          <Info>
            <Price>$360.00</Price>
            <Title>ANNA SILK SATIN BIAS DRESS</Title>

            <Label>Size</Label>
            <Size id="monselect">
              <option className="Option" value="valeur1" selected>
                Valeur 1
              </option>
              <option className="Option" value="valeur2">
                Valeur 2
              </option>
              <option className="Option" value="valeur3">
                Valeur 3
              </option>
            </Size>
            <Label>Colour</Label>
            <Colour>
              <div className="inder-Color"></div>
            </Colour>
        <Label>Description</Label>
        <Grp>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          commodi obcaecati eos iste architecto ipsum delectus. Dicta,
          praesentium. Fugit voluptas itaque rerum esse, sed doloribus quibusdam
          possimus sequi repellendus excepturi?
        </Desc>
        <Btn>Add to Cart</Btn>
        </Grp>
          </Info>
        </Wrapper>
        
      </Container>
    
  );
};

export default Eachproduct;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
  top: 10vh;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 80%;
`;

const FormGrp = styled.div`
 flex:2;
 display: flex;
 align-items: center;
 justify-content: center;
`;
const Photo = styled.img`
  width: 75%;
  height: auto;
`;
const Info = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
  justify-content: flex-start;
  flex-direction: column;
`;
const Price = styled.h3`
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`;

const Title = styled.h2`
  font-weight: 500;
`;
const Label = styled.label`
  font-size: 15px;
  font-weight: 300;
`;

const Size = styled.select`
  outline: none;
  padding: 10px;    
  border: 1px solid grey;
  cursor: pointer;
  color: black;
`;
const Colour = styled.div`
  border-radius: 100%;
  width: 25px;
  height: 25px;
  border: 2px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .inder-Color {
    width: 80%;
    height: 80%;
    border-radius: 100%;
    background-color: black;
  }
`;
const Btn = styled.button`
  border: none;
  padding: 10px 0px;
  width: 50%;
  text-transform: uppercase;
  font-family: "Poppins",sans-serif;
  cursor: pointer;
  outline: none;
  transition: all .7s ease-in-out;
  &:hover{
    background-color: #000;
    color:white;
  }
`;
const Desc = styled.h3`
    font-weight: 300;
    font-size: 15px;
    text-align: justify;
`;
const Grp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
