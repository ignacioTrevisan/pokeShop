import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Item = ({ info, params }) => {
    console.log("informacion ", info)

    return (
        <div className="item" >
            {info && <img src={info.sprites.other.dream_world.front_default} />}
            <h1>{info && info.name}</h1>
            {info && <Link className="ver-mas" to={`/itemDetail/${params}/${info.id}`}>Ver más</Link>}
        </div>
    )
}
