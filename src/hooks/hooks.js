import { useContext } from "react"
import { MenuContext } from "../context/menuContext"
import { CartContext } from "../context/cartContext"

const useMenuContext = () => {
    const context = useContext(MenuContext)
    if (!context) { throw new Error("---- Missing menu context") }
    return context
}

const useCartContext = () => {
    const context = useContext(CartContext)
    if (!context) { throw new Error("---- Missing cart context") }
    return context
}

export { useMenuContext, useCartContext }