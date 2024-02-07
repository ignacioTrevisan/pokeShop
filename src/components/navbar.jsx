import { useEffect, useState } from "react"
import { HandleScroll } from "../helpers/handleScroll";
import { Link } from "react-router-dom";

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

    useEffect(() => {
        if (nav) {
            mostrarNav();
        }
    }, [nav, scroll])



    const mostrarNav = () => {
        if (scroll > 20) {
            nav.style.opacity = "0";
        } else {
            nav.style.opacity = "1";
        }
    }



    return (

        <nav className="navbar">
            <a href="#" className="logo" ></a>
            <ul className="menu">
                <Link to="/">
                    <li className="izquierda">
                        <Link to="/">
                            <img src={images[0]} />
                            <span>Inicio</span>
                        </Link>
                    </li>
                </Link>
                <Link to="/carrito">
                    <li style={{ "--clr": "#fff200" }}>
                        <Link to="/carrito">
                            <img src={images[1]} />
                            <span>Carrito</span>
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
        </nav >

    )
}