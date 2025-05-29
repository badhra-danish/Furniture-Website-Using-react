import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

export const useCart = () => {
    const Cart = useContext(CartContext)
    return Cart;
}

const ContextProvider = ({children}) => {
    const  [item , setItem] = useState(() => {
      const savedCart = localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
      localStorage.setItem('cart' , JSON.stringify(item))
    },[item])
    
    return(
        <>
          <CartContext.Provider value={{item ,setItem}}>
            {children}
          </CartContext.Provider>
        </>
    )
}
export default ContextProvider;