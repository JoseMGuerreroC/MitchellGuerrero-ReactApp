import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            setCart(prev => prev.map(cartItem => 
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem
            ))
        }
        console.log(cart)
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId)
    }

    const cartSubtotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity,
        0)
    }

    const cartLength = () => {
        return cart.length;
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartLength, cartSubtotal}}>
            {children}
        </CartContext.Provider>
    )
}