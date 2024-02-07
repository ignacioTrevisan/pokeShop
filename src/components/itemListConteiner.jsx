import { useParams } from "react-router-dom"

import { ItemList } from "./itemList";
import { Consulta } from "../helpers/consulta";

export const ItemListConteiner = () => {

    const params = useParams().tipo;

    let aUsar = "";

    const info = Consulta({ params, aUsar });

    return (
        <div>
            {info !== undefined && params !== undefined && <ItemList info={info} params={params} />}
        </div >
    )

}