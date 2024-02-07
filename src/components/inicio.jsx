import { Link } from 'react-router-dom';

const images = [
    require('../img/pokemon.png'),
    require('../img/rick.png'),
    require('../img/simpson.png'),


];
export const Inicio = () => {
    return (
        <div className="padre">

            <div className="hijo">
                <Link to="/busqueda/pokemon">
                    <img src={images[0]} alt='pokemon' />
                </Link>
            </div>
            <div className="hijo">
                <Link to="/busqueda/rick">
                    <img src={images[1]} alt='rick' />
                </Link>
            </div>
            <div className="hijo">
                <Link to="/busqueda/simpson">
                    <img src={images[2]} alt='simpson' />
                </Link>
            </div>
        </div>
    )
}