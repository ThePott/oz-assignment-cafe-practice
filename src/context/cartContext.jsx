import { createContext, useState } from "react";

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (cartItem) => {
        setCart((prev) => [...prev, cartItem])
    }
    const removeFromCart = (cartItem) => {
        setCart((prev) => prev.filter((item) => item.id !== cartItem.id))
     }
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }
