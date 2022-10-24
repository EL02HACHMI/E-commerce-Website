import React, {createContext } from 'react'
import { useState } from 'react';
import {popularProducts} from './components/FirstPage/data'
export const ProductApi=createContext(); 

export const ProductProvider= ({children}) => {
    const[productsitems,setProductsitems]=useState(popularProducts)
  return (
    <ProductApi.Provider value={productsitems}>
        {children}
    </ProductApi.Provider>
  )
}
