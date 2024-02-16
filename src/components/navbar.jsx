import { useContext, useEffect, useState } from "react"
import { HandleScroll } from "../helpers/handleScroll";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import styles from "../navbar.module.css";
import { IdentificadorArrayContext } from "../context/IdentificadorArrayContext";

const images = [
    require('../img/navbar/home.png'),
    require('../img/navbar/carrito.png'),
    require('../img/navbar/contacto.png'),
    require('../img/navbar/corazon.png'),
];
export const Navbar = () => {
    const scroll = HandleScroll();
    const [nav, setNav] = useState(null);
    useEffect(() => {
        setNav(document.querySelector(".navbar"))
    }, [])
    const { identificadorArray, setIdentificadorArray } = useContext(IdentificadorArrayContext)
    const { carrito, setCarrito } = useContext(CartContext);

    useEffect(() => {
        if (nav) {
            mostrarNav();
        }
    }, [nav, scroll])



    const mostrarNav = () => {
        if (scroll > 20) {
            nav.style.opacity = "0";
            console.log(scroll);
        } else {
            nav.style.opacity = "1";
            console.log(scroll);
        }
    }



    return (

        <nav className={styles.navbar}>
            <a href="#" className={styles.logo}></a>
            <ul className={styles.menu}>
                <Link to="/">
                    <li className={styles.izquierda}>
                        <Link to="/">
                            <img src={images[0]} />
                            <span>Inicio</span>
                        </Link>
                    </li>
                </Link>
                <Link to="/carrito">
                    <li style={{ "--clr": "#fff200" }} onClick={() => setIdentificadorArray(0)}>
                        <Link to="/carrito">
                            <img src={images[1]} />
                            <span>Carrito({carrito.length})</span>
                        </Link>
                    </li>
                </Link>
                <Link to="/nosotros">
                    <li style={{ "--clr": "#ff253f" }}>
                        <Link to="/nosotros">
                            <img src={images[3]} />
                            <span>Nosotros</span>
                        </Link>
                    </li>
                </Link>
                <Link to="/contacto">
                    <li style={{ "--clr": "#25d366" }}>
                        <Link to="/contacto">
                            <img src={images[2]} />
                            <span>Contacto</span>
                        </Link>
                    </li>
                </Link>
            </ul>
        </nav>

    )
}