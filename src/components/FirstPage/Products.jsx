import React from 'react'
import styled from 'styled-components'
import {popularProducts} from './data'
import Product from './Product'


const Container=styled.div`
    /* background-color:#c96b6b;   */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Products = () => {
  return (
      <Container>
          {popularProducts.map((item)=>
          <Product item={item} key={item.id}/>
          )}
      </Container>
  )
}

export default Products