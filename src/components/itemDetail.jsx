import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../itemDetail.module.css";
import { Consulta } from "../helpers/consulta";
import { CartContext, CartProvider } from "../context/cartContext";

export const ItemDetail = () => {

    const { carrito, setCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const [info, setInfo] = useState();
    const [imagen, setImagen] = useState();
    const { id, params } = useParams();

    let aUsar = "";
    const item = Consulta({ params, aUsar });
    useEffect(() => {
        if (item) {
            fetch(item.results[id - 1].url)
                .then((resp) =>
                    resp.json()
                ).then((data) =>
                    setInfo(data))
        }

    }, [item])
    useEffect(() => {
        if (info) {
            setImagen(info.sprites.other.dream_world.front_default);
        }
    }, [info])


    const handleMouseEnter = (parametro) => {
        setImagen(parametro)
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1);
    }

    const handleRestar = () => {
        { cantidad > 1 && setCantidad(cantidad - 1); }
    }

    const handleConfirm = () => {
        const item = { ...info, cantidad, params }
        const nuevoCarrito = [...carrito]
        const estaEnElCarrito = nuevoCarrito.find((item) => item.id === info.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
            setCarrito(nuevoCarrito);
        } else {
            console.log("No esta en el carrito");
            setCarrito([...carrito, item])
        }
    }
    useEffect(() => {
        console.log(carrito);
    }, [carrito])



    return (
        <div className={styles.container_detail}>
            <div className={styles.container_general}>
                <div className={styles.container_imagenes}>
                    <div className={styles.imagen_grande}>
                        {info && <img src={imagen} />}
                    </div>
                    <div className={styles.contenedor_imagen_chicas}>
                        {info && <div className={styles.imagen_chica} onMouseEnter={() => handleMouseEnter(info.sprites.other.dream_world.front_default)}> <img src={info.sprites.other.dream_world.front_default} /></div>}
                        {info && <div className={styles.imagen_chica} onMouseEnter={() => handleMouseEnter(info.sprites.other.home.front_default)}><img src={info.sprites.other.home.front_default} /></div>}
                        {info && <div className={styles.imagen_chica} onMouseEnter={() => handleMouseEnter(info.sprites.other['official-artwork'].front_default)}><img src={info.sprites.other['official-artwork'].front_default} /></div>}
                    </div>
                </div>
                <div className={styles.derecha}>

                    <label className={styles.valor}>{cantidad}</label>
                    <br />
                    <div className={styles.botones}>
                        {cantidad > 1 && <button className={styles.operacion} onClick={handleRestar}>-</button>}
                        <button className={styles.operacion} onClick={handleSumar}>+</button>
                        <br />
                        <button onClick={handleConfirm} className={styles.buy}>Confirmar</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
