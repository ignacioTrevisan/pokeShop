import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import styles from "../carrito.module.css";
import { Componente_carrito } from "./componente_carrito";
import { IdentificadorArrayContext } from "../context/IdentificadorArrayContext";
const images = [
    require('../img/icons/flecha-izquierda.png'),
    require('../img/icons/flecha-derecha.png'),

];
export const Carrito = () => {
    let { identificadorArray, setIdentificadorArray } = useContext(IdentificadorArrayContext);
    const { carrito, setCarrito } = useContext(CartContext);
    const [mensaje, setMensaje] = useState("El carrito esta vacio :(");
    console.log(identificadorArray, "- ", carrito.length - 1)

    const izquierda = () => {
        setIdentificadorArray(identificadorArray - 1)
    }
    const derecha = () => {
        setIdentificadorArray(identificadorArray + 1)
    }
    useEffect(() => {
        if (carrito.length > 0) {
            setMensaje((identificadorArray + 1) + "/" + carrito.length);
        } else {
            setMensaje("El carrito esta vacio :(");
        }
    }, [identificadorArray, carrito.length])
    return (
        <div className={styles.todo}>
            <h1>{mensaje}</h1>
            <div className={styles.container_selector} >
                {identificadorArray > 0 && <div className={styles.flecha_izquierda} onClick={() => izquierda()}><img src={images[0]} ></img></div>}
                {carrito.length > 0 && <Componente_carrito />}
                {identificadorArray + 1 !== carrito.length && carrito.length !== 0 && <div className={styles.flecha_derecha} onClick={() => derecha()}><img src={images[1]}></img></div>}
            </div>
        </div>
    )
}