import { useEffect, useState } from "react";

export const FetchIntermedio = ({ info }) => {
    const [item, setItem] = useState();

    useEffect(() => {
        fetch(info.url)
            .then((resp) =>
                resp.json()
            ).then((data) =>
                setItem(data));
    }, [info])
    return item;
}

