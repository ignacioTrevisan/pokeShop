import { createContext, useEffect, useState } from "react"
import { Carrito } from "../components/carrito";



export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(Carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{ carrito, setCarrito }}>
            {children}
        </CartContext.Provider>
    );
};