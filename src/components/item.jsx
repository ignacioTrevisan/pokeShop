import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../itemList.module.css";


export const Item = ({ info, params }) => {
    return (
        info && <Link className="ver-mas" to={`/itemDetail/${params}/${info.id}`}>
            <div className={styles.item} >
                {info && <img src={info.sprites.other.dream_world.front_default} />}
                <h1>{info && info.name}</h1>
            </div>
        </Link>
    )
}
