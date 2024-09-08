import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItems = (products, quantity) => {
        if (isInCart(products.id)) {
            setCart(
                cart.map((item) =>
                    item.products.id === products.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            setCart([...cart, { products, quantity }])
        }
    };

    const getProductsQuantityInCart = (productsId) => {
        const product = cart.find((item) => item.products.id === productsId);
        return product ? product.quantity : 0
    }


    const isInCart = (productsId) => {
        return cart.some((item) => item.products.id === productsId);
    };

    const cleanCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        return cart.reduce(
            (total, item) => total + item.products.price * item.quantity, 0);
    };

    const getTotalProducts = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const removeItem = (productsId) => {
        setCart(cart.filter((item) => item.products.id !== productsId));
    };

    return (
        <CartContext.Provider value={{
            cart,
            addItems,
            isInCart,
            cleanCart,
            getTotal,
            getTotalProducts,
            removeItem,
            getProductsQuantityInCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
