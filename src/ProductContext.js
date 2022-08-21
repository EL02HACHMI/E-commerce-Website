import React, { createContext, useState } from 'react'


const ProductContext = createContext();

export function ProductProvider({children}){
    const [count, setCount] = useState(0);
    const [purchase, setPurchase] = useState(0);
    return(
  <ProductContext.Provider value={{count,setCount,purchase, setPurchase}}>
            {children}
       </ProductContext.Provider>
    )

}
export default ProductContext