import { createContext, useState } from "react";
import { productArray } from "./ProductsStore";


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([])

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return(
        <CartProvider value={contextValue}>
          {children}
        </CartProvider>
    )
}