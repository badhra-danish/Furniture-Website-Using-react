import React, { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCart = () => {
    const Cart = useContext(CartContext)
    return Cart;
}

const ContextProvider = ({children}) => {
    const  [item , setItem] = useState([])
    return(
        <>
          <CartContext.Provider value={{item ,setItem}}>
            {children}
          </CartContext.Provider>
        </>
    )
}
export default ContextProvider;