import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../itemDetail.css';
import { Consulta } from "../helpers/consulta";

export const ItemDetail = () => {
    const [info, setInfo] = useState();
    const [imagen, setImagen] = useState();
    const { id, params } = useParams();

    let aUsar = "";
    const item = Consulta({ params, aUsar });
    console.log(info);
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


    return (
        <div className="container-detail">
            <div className="container-general">
                <div className="imagen-grande">
                    {info && <img src={imagen} />}
                </div>
                <div className="contenedor-imagen-chicas">
                    {info && <div className="imagen-chica" onMouseEnter={() => handleMouseEnter(info.sprites.other.dream_world.front_default)}> <img src={info.sprites.other.dream_world.front_default} /></div>}
                    {info && <div className="imagen-chica" onMouseEnter={() => handleMouseEnter(info.sprites.other.home.front_default)}><img src={info.sprites.other.home.front_default} /></div>}
                    {info && <div className="imagen-chica" onMouseEnter={() => handleMouseEnter(info.sprites.other['official-artwork'].front_default)}><img src={info.sprites.other['official-artwork'].front_default} /></div>}
                </div>
            </div>
        </div>
    );
};
