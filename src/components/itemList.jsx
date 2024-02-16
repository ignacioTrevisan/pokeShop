
import { FetchIntermedio } from "../helpers/fetchIntermedio";
import { Item } from "./item";
import styles from "../itemList.module.css";

export const ItemList = ({ info, params }) => {


    return (
        <div className={styles.container}>
            {Array.isArray(info.results) && info.results.map((info) => (
                <Item info={FetchIntermedio({ info })} params={params} />
            ))}
        </div>
    );
}
