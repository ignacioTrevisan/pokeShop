import { FetchIntermedio } from "../helpers/fetchIntermedio";
import { Item } from "./item";
import styles from "../itemList.module.css";
import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../context/scrollContext";

export const ItemList = ({ info, params }) => {
    const { scroll, setScroll } = useContext(ScrollContext);
    const container = document.querySelector(`.${styles.container}`);

    const HandleScroll = () => {
        if (container) {
            setScroll(container.scrollTop);
        }
    };

    useEffect(() => {
        if (container) {
            container.addEventListener('scroll', HandleScroll);
        }

    }, [container]);

    useEffect(() => {
    }, [scroll]);

    return (
        <div className={styles.container}>
            {Array.isArray(info.results) && info.results.map((itemInfo, index) => (
                <Item key={index} info={FetchIntermedio({ info: itemInfo })} params={params} />
            ))}
        </div>
    );
}
