import { useEffect, useState } from "react";
import { Links } from "./link";

export const Consulta = ({ params, aUsar }) => {

    const [datos, setDatos] = useState();
    console.log("params ", params, " aUsar ", aUsar);
    const link = Links();

    switch (params) {
        case "pokemon":
            aUsar = link[0];
            break;
        case "rick":
            aUsar = link[1];
            break;
        case "simpson":
            aUsar = link[2];
            break;
        default:

    }

    useEffect(() => {
        fetch(aUsar)
            .then((resp) =>
                resp.json()
            ).then((data) =>
                setDatos(data));

    }, [params])


    return (datos);
}