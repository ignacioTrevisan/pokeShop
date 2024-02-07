
import { FetchIntermedio } from "../helpers/fetchIntermedio";
import { Item } from "./item";

export const ItemList = ({ info, params }) => {


    return (
        <div className="container">
            {Array.isArray(info.results) && info.results.map((info) => (
                <Item info={FetchIntermedio({ info })} params={params} />
            ))}
        </div>
    );
}
