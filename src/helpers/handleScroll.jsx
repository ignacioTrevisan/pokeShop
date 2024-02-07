import { useEffect, useState } from "react";

export const HandleScroll = () => {

    const [scroll, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return scroll;
}