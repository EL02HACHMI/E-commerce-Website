import React, {createContext } from 'react'
import { useState } from 'react';
import {popularProducts}  from './components/FirstPage/data'
export const ProductApi=createContext(); 

export const ProductProvider= ({children}) => {


  
  const [shop,setShop]=useState([])
  
  
  
  const addToshop=(idChamp)=>{
    const alreadyFav=shop.find((fav)=>fav.id === idChamp)  
    if(alreadyFav)return
    const champs=popularProducts.find((champo)=>champo.id===idChamp)
    const updateFav=[...shop,champs]
    setShop(updateFav) 
  }

    const removeFromshop=(idChamp)=>{
        const newFavorite=shop.filter((champo)=>champo.id !== idChamp)
        setShop(newFavorite)        
    }
    
    
    








    const[productsitems,setProductsitems]=useState(popularProducts)
  return (
    <ProductApi.Provider value={{productsitems,addToshop,shop,removeFromshop}}>
        {children}
    </ProductApi.Provider>
  )
}

