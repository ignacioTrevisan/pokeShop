import { useContext, useEffect, useState } from "react";
import { ItemList } from "./itemList";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import styles from "../navbar.module.css";
import { IdentificadorArrayContext } from "../context/IdentificadorArrayContext";
import { ScrollContext } from "../context/scrollContext";

const images = [
    require('../img/navbar/home.png'),
    require('../img/navbar/carrito.png'),
    require('../img/navbar/contacto.png'),
    require('../img/navbar/corazon.png'),
];

export const Navbar = () => {
    const { scroll } = useContext(ScrollContext);
    const { carrito } = useContext(CartContext);
    const { setIdentificadorArray } = useContext(IdentificadorArrayContext);
    const [nav, setNav] = useState(null);

    useEffect(() => {
        setNav(true);
    }, []);

    const mostrarNav = () => {
        if (scroll > 20) {
            return { opacity: 0 };
        } else {
            return { opacity: 1 };
        }
    };

    return (
        <nav className={styles.navbar} style={nav ? mostrarNav() : null}>
            <a href="#" className={styles.logo}></a>
            <ul className={styles.menu}>
                <li className={styles.izquierda}>
                    <Link to="/">
                        <img src={images[0]} />
                        <span>Inicio</span>
                    </Link>
                </li>

                <li style={{ "--clr": "#fff200" }} onClick={() => setIdentificadorArray(0)}>
                    <Link to="/carrito">
                        <img src={images[1]} />
                        <span>Carrito({carrito.length})</span>
                    </Link>
                </li>

                <li style={{ "--clr": "#ff253f" }}>
                    <Link to="/nosotros">
                        <img src={images[3]} alt="Nosotros" />
                        <span>Nosotros</span>
                    </Link>
                </li>
                <li style={{ "--clr": "#25d366" }}>
                    <Link to="/contacto">
                        <img src={images[2]} />
                        <span>Contacto</span>
                    </Link>
                </li>
            </ul>
        </nav >
    );
};
