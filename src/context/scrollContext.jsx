import { createContext, useState } from "react"

export const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
    let [scroll, setScroll] = useState(0);


    return (
        <ScrollContext.Provider value={{ scroll, setScroll }}>
            {children}
        </ScrollContext.Provider>
    );
};