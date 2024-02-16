import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import styles from "../carrito.module.css";

import { useEffect } from "react";
import { IdentificadorArrayContext } from "../context/IdentificadorArrayContext";

const images = [
    require('../img/icons/delete.png'),
    require('../img/icons/eye.png'),

];

export const Componente_carrito = () => {

    const { carrito, setCarrito } = useContext(CartContext);

    let { identificadorArray, setIdentificadorArray } = useContext(IdentificadorArrayContext);


    const ver = (id) => {
        alert("ver " + id);
    }
    const borrar = (id) => {
        if (identificadorArray + 1 == carrito.length) { setIdentificadorArray(identificadorArray - 1); }

        const nuevoCarrito = [...carrito];
        const nuevoCarritoActualizado = nuevoCarrito.filter((item) => item.id !== id);

        setCarrito(nuevoCarritoActualizado);
    }
    return (
        <div className={styles.selector}>

            <div className={styles.selector_imagen}>

                <img src={carrito[identificadorArray].sprites.other.dream_world.front_default} />
            </div>
            <div className={styles.datos}>
                <h1>{carrito[identificadorArray].name}</h1>
                <p>cantidad: {carrito[identificadorArray].cantidad}</p>
                <p>Experiencia: {carrito[identificadorArray].base_experience}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque explicabo numquam nobis asperiores architecto magnam consequatur repellat accusamus sunt earum, deserunt voluptates ipsum suscipit ex temporibus est praesentium necessitatibus.</p>
            </div>
            <div className={styles.icons_container}>
                <div className={styles.icons}>
                    <img src={images[0]} onClick={() => borrar(carrito[identificadorArray].id)} />

                </div>
                <div className={styles.icons}><Link to={`/itemDetail/${carrito[identificadorArray].params}/${carrito[identificadorArray].id}`}><img src={images[1]} />
                </Link></div>
            </div>
        </div >
    )
}