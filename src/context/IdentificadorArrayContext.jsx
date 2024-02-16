import { createContext, useState } from "react"

export const IdentificadorArrayContext = createContext();

export const IdentificadorProvider = ({ children }) => {
    let [identificadorArray, setIdentificadorArray] = useState(0);


    return (
        <IdentificadorArrayContext.Provider value={{ identificadorArray, setIdentificadorArray }}>
            {children}
        </IdentificadorArrayContext.Provider>
    );
};